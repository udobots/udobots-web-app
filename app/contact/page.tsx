'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Section from '@/components/layout/Section';
import ContactForm from '@/components/ui/ContactForm';
import { siteConfig } from '@/lib/site-config';

function ContactPageForm() {
  const searchParams = useSearchParams();
  const interest = searchParams.get('interest') || '';

  return (
    <Section bg="white">
      <div className="max-w-2xl mx-auto">
        <ContactForm
          recipientAlias="contact"
          submitLabel="Send Message"
          messagePlaceholder="Tell us about your cleaning needs — building type, size, location..."
          variant="light"
          defaultInterest={interest}
        />
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center pt-8 border-t border-gray-100">
          <div>
            <p className="text-sm font-semibold text-charcoal mb-1">Email</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-primary-500 hover:text-primary-600 transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
          {/* <div>
            <p className="text-sm font-semibold text-charcoal mb-1">Phone</p>
            <a href={siteConfig.contact.phoneHref} className="text-sm text-primary-500 hover:text-primary-600 transition-colors">
              {siteConfig.contact.phone}
            </a>
          </div> */}
          <div>
            <p className="text-sm font-semibold text-charcoal mb-1">Location</p>
            <p className="text-sm text-gray-500">{siteConfig.contact.location}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function ContactPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/hero-contact.png"
          alt="UDoBots team safety briefing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-400 text-sm font-medium mb-2 uppercase tracking-wider">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Tell us about your cleaning needs. We&apos;ll get back to you within one working day.
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading form…</div>}>
        <ContactPageForm />
      </Suspense>
    </>
  );
}
