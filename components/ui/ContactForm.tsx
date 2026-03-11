'use client';

import { useState } from 'react';
import type { ContactFormData, ContactApiPayload, ContactApiResponse, EmailAlias, FormStatus } from '@/types';

// ─── Props ────────────────────────────────────────────────────────────────────

interface ContactFormProps {
  /**
   * Which Cloudflare-routed email alias to send to.
   * - 'hello'   → hello@udobots.com   (Home page)
   * - 'info'    → info@udobots.com    (About page)
   * - 'contact' → contact@udobots.com (Contact page)
   * - 'hiring'  → hiring@udobots.com  (Careers page)
   *
   * All aliases are forwarded by Cloudflare Email Routing to udobots@uds.in
   */
  recipientAlias: EmailAlias;

  /** Label for the submit button. Defaults to "Send Message" */
  submitLabel?: string;

  /** Placeholder for the message textarea */
  messagePlaceholder?: string;

  /** Visual variant — dark background (used on charcoal sections) or light */
  variant?: 'dark' | 'light';

  /** Optional subject interest pre-fill */
  defaultInterest?: string;

  /** Called after a successful submission */
  onSuccess?: () => void;
}

// ─── Input Styles ─────────────────────────────────────────────────────────────

const inputBase =
  'w-full px-4 py-3 rounded-lg outline-none transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-0';

function inputClass(variant: 'dark' | 'light') {
  return variant === 'dark'
    ? `${inputBase} bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:border-primary-500`
    : `${inputBase} bg-white border border-gray-300 text-charcoal placeholder-gray-400 focus:border-primary-500`;
}

function labelClass(variant: 'dark' | 'light') {
  return `block text-sm font-medium mb-1 ${variant === 'dark' ? 'text-gray-300' : 'text-gray-700'}`;
}

// ─── Success State ────────────────────────────────────────────────────────────

function SuccessState({ variant }: { variant: 'dark' | 'light' }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${variant === 'dark' ? 'text-white' : 'text-charcoal'}`}>
        Message Sent
      </h3>
      <p className={variant === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
        We&apos;ll get back to you within one working day.
      </p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactForm({
  recipientAlias,
  submitLabel = 'Send Message',
  messagePlaceholder = 'Tell us how we can help...',
  variant = 'light',
  defaultInterest = '',
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    _honey: '',
  });
  const [interest] = useState(defaultInterest);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function update(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot guard — silently discard bots
    if (formData._honey) return;

    // Basic client-side guard (server also validates)
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Name, email, and message are required.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    const payload: ContactApiPayload = {
      ...formData,
      recipientAlias,
      interest,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: ContactApiResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return <SuccessState variant={variant} />;
  }

  const ic = inputClass(variant);
  const lc = labelClass(variant);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className={lc}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => update('name', e.target.value)}
            className={ic}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={lc}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => update('email', e.target.value)}
            className={ic}
          />
        </div>
      </div>

      {/* Company + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-company" className={lc}>
            Company
          </label>
          <input
            id="cf-company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            value={formData.company}
            onChange={(e) => update('company', e.target.value)}
            className={ic}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={lc}>
            Phone
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={ic}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={lc}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          required
          placeholder={messagePlaceholder}
          value={formData.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${ic} resize-none`}
        />
      </div>

      {/* Honeypot – hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={formData._honey ?? ''}
          onChange={(e) => update('_honey', e.target.value)}
        />
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <div role="alert" className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </span>
        ) : (
          submitLabel
        )}
      </button>
    </form>
  );
}
