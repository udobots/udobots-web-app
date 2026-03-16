import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section from '@/components/layout/Section';
import { siteConfig } from '@/lib/site-config';
import { protocols, safetyImages, certifications } from '@/content/safety-data';

export const metadata: Metadata = {
  title: 'Safety',
  description: `${siteConfig.name} safety standards: operator requirements, Job Safety Analysis, weather protocols, emergency procedures, and compliance documentation.`,
};

export default function SafetyPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/drone-setup.jpg"
          alt="Safety crew briefing in PPE"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Safety Standards</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Every {siteConfig.name} operation follows structured safety protocols. No shortcuts, no exceptions.
          </p>
        </div>
      </div>

      <Section bg="white">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Safety Philosophy</h2>
            <p className="text-gray-600 mb-4">
              At {siteConfig.name}, safety is not an add-on — it is the reason we exist. Traditional facade cleaning puts human workers at height, exposed to falls, weather, and equipment failure. Our approach removes people from the hazard zone entirely.
            </p>
            <p className="text-gray-600">
              We treat every job as if it were the first — with full planning, fresh checklists, and no assumptions carried over from previous operations.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="gray">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Safety Protocols</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Three phases of safety checks on every job.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {protocols.map((p, i) => (
            <ScrollReveal key={p.phase} delay={i * 100}>
              <div className="bg-white p-6 rounded-card border border-gray-100 h-full">
                <h3 className="text-lg font-bold text-primary-500 mb-4">{p.phase}</h3>
                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Safety in Practice</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">How our safety protocols look on real job sites.</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyImages.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <div className="rounded-card overflow-hidden border border-gray-100">
                <div className="relative h-48">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-charcoal">Certifications & Standards</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-start gap-3 bg-white p-4 rounded-card border border-gray-100">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-gray-600">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="dark">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Want to review our safety documentation?</h2>
            <p className="text-gray-400 mb-6">Our SOP, JSA templates, and maintenance logs are available on request.</p>
            <Link href="/contact" className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Request Safety Docs
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
