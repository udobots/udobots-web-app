import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Drone cleaning solutions for facades, roofs, and solar panels. Explore our services for commercial and industrial buildings.',
};

const solutions = [
  {
    title: 'Facade Cleaning',
    desc: 'Glass and cladding cleaning for commercial buildings, IT parks, and high-rises using soft-wash drone technology.',
    href: '/solutions/facade-cleaning',
    image: '/images/drone-facade.jpg',
    features: ['Glass curtain walls', 'ACP and metal cladding', 'Stone and concrete facades'],
  },
  {
    title: 'Roof Cleaning',
    desc: 'Remove algae, moss, dirt, and debris from commercial and industrial rooftops without putting workers at height.',
    href: '/solutions/roof-cleaning',
    image: '/images/stock-warehouse.jpg',
    features: ['Metal roofing sheets', 'Concrete flat roofs', 'Warehouse and factory roofs'],
  },
  {
    title: 'Solar Panel Cleaning',
    desc: 'Restore solar panel efficiency with gentle DI water rinse and precision drone cleaning.',
    href: '/solutions/solar-panel-cleaning',
    image: '/images/stock-solar-panels.jpg',
    features: ['Rooftop solar arrays', 'Ground-mounted farms', 'Carport installations'],
  },
];

const methods = [
  {
    title: 'Soft Wash',
    desc: 'Low-pressure cleaning with biodegradable agents for delicate surfaces like glass curtain walls and ACP cladding.',
    icon: (
      <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'DI Rinse',
    desc: 'Deionised water leaves no mineral residue or spots. Preferred for solar panels and glass surfaces.',
    icon: (
      <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'High Pressure',
    desc: 'Calibrated medium-to-high pressure rinse for concrete, stone, and durable industrial surfaces.',
    icon: (
      <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/drone-facade.jpg"
          alt="Drone cleaning a building facade"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Our Cleaning Solutions</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Purpose-built drone cleaning for facades, roofs, and solar panels — safer, faster, and more consistent than traditional methods.
          </p>
        </div>
      </div>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">What We Clean</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Three core services designed around the surfaces that matter most to your building&apos;s appearance, safety, and efficiency.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <Link
                href={s.href}
                className="group block bg-white rounded-card border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="relative h-52">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-charcoal group-hover:text-primary-500 mb-3">{s.title}</h2>
                  <p className="text-gray-500 mb-4">{s.desc}</p>
                  <ul className="space-y-1">
                    {s.features.map((f) => (
                      <li key={f} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-block mt-4 text-primary-500 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="gray">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Cleaning Methods</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">We match the right cleaning method to each surface type for safe, effective results.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 100}>
              <div className="bg-white p-8 rounded-card border border-gray-100 text-center">
                <div className="flex justify-center mb-4">{m.icon}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm">{m.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="dark">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Looking for something specific?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              We also support industrial rinsing, protective coatings application, and aerial inspection add-ons. Get in touch to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
