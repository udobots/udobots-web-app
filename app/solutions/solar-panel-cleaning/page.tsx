import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Solar Panel Cleaning',
  description: 'Drone-powered solar panel cleaning to restore efficiency. Gentle DI water rinse for rooftop arrays, ground-mounted farms, and carports.',
};

const benefits = [
  {
    title: 'No Panel Contact',
    desc: 'The drone cleans from above without brushes or physical contact, eliminating micro-scratches that reduce panel output.',
  },
  {
    title: 'Spot-Free Finish',
    desc: 'Deionised water leaves zero mineral residue, preserving the anti-reflective coating on panel glass.',
  },
  {
    title: 'Large Array Coverage',
    desc: 'Drone flight paths cover large panel arrays faster than manual cleaning with consistent spray coverage.',
  },
  {
    title: 'Performance Recovery',
    desc: 'Clean panels produce more energy. Regular drone cleaning helps maintain output levels required by performance contracts.',
  },
];

const steps = [
  { step: '01', title: 'Array Assessment', desc: 'Evaluate panel type, tilt angle, soiling level, and array layout.' },
  { step: '02', title: 'Flight Planning', desc: 'Map spray passes for complete coverage with minimal overlap.' },
  { step: '03', title: 'Safety Setup', desc: 'Establish exclusion zone, weather check, and DI water supply.' },
  { step: '04', title: 'DI Water Rinse', desc: 'Execute low-pressure rinse passes across the panel array.' },
  { step: '05', title: 'Verification', desc: 'Visual inspection and cleaning report with before/after documentation.' },
];

export default function SolarPanelCleaningPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/stock-solar-panels.jpg"
          alt="Solar panel array"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-400 text-sm font-medium mb-2 uppercase tracking-wider">Solutions</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Solar Panel Cleaning</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Restore panel efficiency with gentle, precision drone cleaning — no walking on panels, no scratching, no downtime.
          </p>
        </div>
      </div>

      <Section bg="white">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Drone-Powered Solar Cleaning</h2>
              <p className="text-gray-600 mb-4">
                Dust, bird droppings, pollen, and pollution accumulate on solar panels, reducing energy output by 15–25% in Indian conditions. Manual cleaning risks panel damage from foot traffic and abrasive tools.
              </p>
              <p className="text-gray-600 mb-4">
                Our drone uses a calibrated low-pressure DI water rinse to remove soiling without touching the panel surface. The deionised water leaves no mineral spots or residue, preserving the anti-reflective coating.
              </p>
              <p className="text-gray-600">
                Suitable for rooftop arrays, ground-mounted farms, and carport installations. Scheduled cleaning programmes available for sites under energy performance contracts.
              </p>
            </div>
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/drone-cleaning.jpg"
                alt="Drone cleaning system with tethered power"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="gray">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Why Drone Solar Cleaning</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="bg-white p-6 rounded-card border border-gray-100 h-full">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Our Process</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Every solar panel cleaning job follows a structured five-step process.</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 80}>
              <div className="p-5 bg-lightgray rounded-card text-center">
                <span className="text-3xl font-bold text-primary-500">{s.step}</span>
                <h3 className="font-semibold text-charcoal mt-2 mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="dark">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Want cleaner panels and better output?</h2>
            <p className="text-gray-400 mb-6">Tell us about your installation and we&apos;ll plan the cleaning schedule.</p>
            <Link href="/contact?interest=solar" className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
