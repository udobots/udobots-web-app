import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Roof Cleaning',
  description: 'Drone-powered roof cleaning for commercial and industrial buildings. Remove algae, moss, and debris without putting workers at height.',
};

const benefits = [
  {
    title: 'Zero Fall Risk',
    desc: 'No workers on the roof. The drone operates from ground level, eliminating the primary hazard in roof maintenance.',
  },
  {
    title: 'Structural Safety',
    desc: 'Drone cleaning avoids adding human weight to ageing or structurally sensitive rooftops.',
  },
  {
    title: 'Improved Drainage',
    desc: 'Clears debris from drainage channels and scuppers, reducing waterlogging and leak risk.',
  },
  {
    title: 'Extended Roof Life',
    desc: 'Regular cleaning removes biological growth that degrades roofing materials over time.',
  },
];

const steps = [
  { step: '01', title: 'Roof Assessment', desc: 'Evaluate roof material, pitch, condition, and drainage layout.' },
  { step: '02', title: 'Flight Planning', desc: 'Map cleaning paths based on roof geometry and obstacle locations.' },
  { step: '03', title: 'Safety Setup', desc: 'Establish exclusion zone, weather check, and pre-flight inspection.' },
  { step: '04', title: 'Drone Cleaning', desc: 'Execute wash passes with appropriate pressure for the roof material.' },
  { step: '05', title: 'Documentation', desc: 'Aerial photos and job report delivered for facility records.' },
];

export default function RoofCleaningPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/stock-warehouse.jpg"
          alt="Industrial warehouse rooftop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-400 text-sm font-medium mb-2 uppercase tracking-wider">Solutions</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Roof Cleaning</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Remove algae, moss, dirt, and debris from commercial rooftops using drone technology — no ladders, no fall risk.
          </p>
        </div>
      </div>

      <Section bg="white">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Drone-Powered Roof Cleaning</h2>
              <p className="text-gray-600 mb-4">
                Commercial and industrial roofs collect dust, algae, moss, and debris that block drainage, degrade materials, and reduce reflectivity. Traditional cleaning requires workers on rooftops — a significant fall hazard.
              </p>
              <p className="text-gray-600 mb-4">
                Our drone system washes rooftops from the air using calibrated spray pressure matched to the roofing material. Metal sheets, concrete, and membrane roofs are all handled with appropriate techniques.
              </p>
              <p className="text-gray-600">
                Particularly effective for pre-monsoon cleaning, post-construction wash-down, and regular maintenance schedules on warehouses, factories, and commercial buildings.
              </p>
            </div>
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/drone-flying.jpg"
                alt="Drone flying near building"
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
            <h2 className="text-3xl font-bold text-charcoal">Why Drone Roof Cleaning</h2>
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
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Every roof cleaning job follows a structured five-step process.</p>
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
            <h2 className="text-2xl font-bold mb-4">Need roof cleaning for your facility?</h2>
            <p className="text-gray-400 mb-6">Tell us about your site and we&apos;ll plan the right approach.</p>
            <Link href="/contact?interest=roof" className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
