import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Facade Cleaning',
  description: 'Drone-powered facade cleaning for glass curtain walls, ACP cladding, and stone surfaces. Safer and faster than rope access.',
};

const benefits = [
  {
    title: 'No Scaffolding Required',
    desc: 'The drone reaches facades up to 150m without scaffolding, cradles, or rope access — eliminating setup time and cost.',
    image: '/images/drone-rinse.jpg',
  },
  {
    title: 'Consistent Coverage',
    desc: 'Programmed flight paths ensure even cleaning across the entire facade, with no missed spots or uneven pressure.',
    image: '/images/drone-side-wash.jpg',
  },
  {
    title: 'Minimal Disruption',
    desc: 'Operations run from a compact ground staging area. No blocked entrances, no heavy equipment, no tenant disruption.',
    image: '/images/drone-action-wide.jpg',
  },
  {
    title: 'Documented Results',
    desc: 'Before and after photos captured by the drone provide clear evidence of cleaning quality for facility records.',
    image: '/images/drone-result.jpg',
  },
];

const steps = [
  { step: '01', title: 'Site Survey', desc: 'Assess building height, surface type, surrounding obstacles, and access points.' },
  { step: '02', title: 'Method Selection', desc: 'Choose soft wash, DI rinse, or medium-pressure based on facade material.' },
  { step: '03', title: 'Safety Setup', desc: 'Establish exclusion zone, check weather, complete pre-flight checklist.' },
  { step: '04', title: 'Drone Cleaning', desc: 'Execute cleaning in programmed flight paths, section by section.' },
  { step: '05', title: 'Inspection & Report', desc: 'Post-clean visual inspection and documentation delivered to client.' },
];

export default function FacadeCleaningPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/drone-rinse.jpg"
          alt="Drone cleaning high-rise glass facade"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-400 text-sm font-medium mb-2 uppercase tracking-wider">Solutions</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Facade Cleaning</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Glass, cladding, and stone facades cleaned with precision drone technology — no scaffolding, no rope access.
          </p>
        </div>
      </div>

      <Section bg="white">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Drone-Powered Facade Cleaning</h2>
              <p className="text-gray-600 mb-4">
                Building facades accumulate dust, pollution, biological growth, and watermarks over time. Traditional cleaning methods require scaffolding or rope access — both expensive, slow, and risky.
              </p>
              <p className="text-gray-600 mb-4">
                Our drone system reaches facades from ground level using a tethered platform with continuous water supply. The operator controls spray pressure, angle, and coverage from a tablet interface while the drone maintains stable positioning against the building surface.
              </p>
              <p className="text-gray-600">
                Suitable for glass curtain walls, ACP cladding, concrete facades, and stone surfaces on buildings from 3 to 40+ storeys.
              </p>
            </div>
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/drone-facade.jpg"
                alt="Drone spraying water on building facade"
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
            <h2 className="text-3xl font-bold text-charcoal">Why Drone Facade Cleaning</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="bg-white rounded-card overflow-hidden border border-gray-100">
                <div className="relative h-48">
                  <Image src={b.image} alt={b.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Our Process</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Every facade cleaning job follows a structured five-step process.</p>
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
            <h2 className="text-2xl font-bold mb-4">Need a facade cleaning quote?</h2>
            <p className="text-gray-400 mb-6">Share your site details and we&apos;ll provide a tailored approach.</p>
            <Link href="/contact?interest=facade" className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
