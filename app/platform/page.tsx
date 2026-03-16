import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section from '@/components/layout/Section';
import { siteConfig } from '@/lib/site-config';
import { gallery, specs, howItWorks, indiaFeatures } from '@/content/platform-data';

export const metadata: Metadata = {
  title: 'Platform',
  description: `The ${siteConfig.name} system: drone platform, cleaning module, ground kit, and operations software — designed for industrial cleaning in India.`,
};

export default function PlatformPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/drone-closeup.jpg"
          alt="Drone top-down closeup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">The {siteConfig.name} Platform</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            An integrated drone cleaning system — hardware, software, and operational procedures designed to work together on real job sites.
          </p>
        </div>
      </div>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Equipment Gallery</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">The core components that make up a complete {siteConfig.name} cleaning operation.</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <div className="rounded-card overflow-hidden border border-gray-100 group">
                <div className="relative h-56">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Specifications & Features</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {specs.map((spec) => (
              <div key={spec} className="flex items-start gap-3 bg-white p-4 rounded-card border border-gray-100">
                <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-600">{spec}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">How It Works</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">From setup to job report in four steps.</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Designed for Operations in India</h2>
            <p className="text-gray-500 text-lg mb-8">
              Built to handle Indian climate conditions — heat, humidity, dust, and monsoon weather cycles. Tested on real buildings in Chennai and designed for the operational realities of Indian commercial and industrial sites.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {indiaFeatures.map((f) => (
                <div key={f.title} className="p-5 bg-lightgray rounded-card">
                  <h3 className="font-semibold text-charcoal mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="dark">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Want to see the platform in action?</h2>
            <p className="text-gray-400 mb-6">Get in touch to arrange a demo or discuss your cleaning requirements.</p>
            <Link href="/contact" className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
