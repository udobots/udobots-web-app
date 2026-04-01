'use client';

import { useState } from 'react';

const GOOGLE_FORM_URL = 'https://forms.gle/j5iLnJ46nV8zweSUA';

interface Props {
  roleTitle: string;
}

type ModalStatus = 'idle' | 'sending' | 'error';

export default function CareersApplyModal({ roleTitle }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<ModalStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function openModal() {
    setOpen(true);
    setStatus('idle');
    setErrorMsg('');
    setName('');
    setEmail('');
  }

  function closeModal() {
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter your name and email.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: `Applied via Google Form for: ${roleTitle}`,
          recipientAlias: 'hiring',
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');

      window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
      setOpen(false);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-300 text-charcoal placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors';

  return (
    <>
      <button
        onClick={openModal}
        className="flex-shrink-0 px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors"
      >
        Apply
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <p className="text-primary-500 font-semibold text-xs uppercase tracking-wider mb-1">Apply Now</p>
              <h2 className="text-xl font-bold text-charcoal">{roleTitle}</h2>
              <p className="text-sm text-gray-500 mt-2">
                Enter your details below. We&apos;ll send you a confirmation email, then redirect you to the application form.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="apply-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="apply-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="apply-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="apply-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>

              {status === 'error' && (
                <div role="alert" className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  'Continue to Application Form'
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                You&apos;ll be redirected to our application form in a new tab.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
