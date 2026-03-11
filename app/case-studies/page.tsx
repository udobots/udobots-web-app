import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world drone cleaning projects by UDoBots. See how we approach facade, roof, and solar panel cleaning on commercial sites.',
};

const caseStudies = [
  {
    slug: 'it-park-facade-cleaning',
    title: 'IT Park Glass Facade — Chennai',
    client: 'Multi-tenant IT park',
    problem: 'Dust and pollution buildup on 8-storey glass curtain walls, tenant complaints about appearance.',
    result: 'Full facade cleaned in 3 days without scaffolding. Positive tenant feedback on turnaround time.',
    tag: 'Facade Cleaning',
    image: '/images/drone-rinse.jpg',
  },
  {
    slug: 'warehouse-roof-cleaning',
    title: 'Industrial Warehouse Roof — Sriperumbudur',
    client: 'Manufacturing facility operator',
    problem: 'Metal roofing sheets covered in algae and dust, affecting reflectivity and drainage.',
    result: 'Roof cleaned and drainage restored. Aerial documentation provided for maintenance records.',
    tag: 'Roof Cleaning',
    image: '/images/stock-warehouse.jpg',
  },
  {
    slug: 'solar-farm-panel-cleaning',
    title: 'Solar Panel Array — Commercial Campus',
    client: 'Facility management company',
    problem: 'Soiling on 200+ rooftop solar panels reducing energy output below performance contract thresholds.',
    result: 'Panels cleaned with DI water rinse. Energy output tracking showed measurable recovery in subsequent weeks.',
    tag: 'Solar Panel Cleaning',
    image: '/images/stock-solar-panels.jpg',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/hero-drone.jpg"
          alt="DHL building exterior with drone operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            See how UDoBots drone cleaning works in practice — real projects, real sites, honest results.
          </p>
        </div>
      </div>

      <Section bg="white">
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.slug} delay={i * 100}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group block bg-white rounded-card border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                      {cs.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-charcoal group-hover:text-primary-500 mb-2">{cs.title}</h2>
                  <p className="text-sm text-gray-400 mb-2">Client: {cs.client}</p>
                  <p className="text-sm text-gray-500 mb-3"><strong>Problem:</strong> {cs.problem}</p>
                  <p className="text-sm text-gray-500"><strong>Result:</strong> {cs.result}</p>
                  <span className="inline-block mt-4 text-primary-500 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Read full case study &rarr;
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
