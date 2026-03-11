import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Articles, FAQs, and guides about drone cleaning, soft wash techniques, and building maintenance from UDoBots.',
};

const categories = [
  {
    title: 'Blog',
    desc: 'Articles on drone cleaning technology, building maintenance, and industry insights.',
    href: '/resources/blog',
    count: '2 articles',
  },
  {
    title: 'FAQs',
    desc: 'Common questions about drone cleaning — safety, process, costs, and more.',
    href: '/resources/faqs',
    count: '10 questions',
  },
  {
    title: 'Guides',
    desc: 'Technical guides on cleaning methods, equipment, and job planning.',
    href: '/resources/guides',
    count: '2 guides',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Practical information about drone cleaning — no sales pitch, just useful knowledge."
      />
      <Section bg="white">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group p-8 bg-white rounded-card border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-charcoal group-hover:text-primary-500 mb-2">{cat.title}</h2>
              <p className="text-gray-500 mb-4">{cat.desc}</p>
              <p className="text-sm text-gray-400">{cat.count}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
