import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Technical guides on drone cleaning methods, nozzle selection, and DI water rinse from UDoBots.',
};

const guides = [
  {
    slug: 'choosing-nozzle-spray-pattern',
    title: 'Choosing the Right Nozzle and Spray Pattern',
    excerpt: 'A guide to nozzle types, spray angles, and flow rates for different building surfaces.',
  },
  {
    slug: 'understanding-di-water-rinse',
    title: 'Understanding DI Water Rinse',
    excerpt: 'What deionised water is, why it matters for facade and solar panel cleaning, and how to manage water quality.',
  },
];

export default function GuidesPage() {
  return (
    <>
      <PageHero title="Guides" subtitle="Technical guides on cleaning methods and equipment." breadcrumb="Resources" />
      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/resources/guides/${guide.slug}`}
              className="group block p-6 bg-white rounded-card border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-charcoal group-hover:text-primary-500 mb-2">{guide.title}</h2>
              <p className="text-gray-500">{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
