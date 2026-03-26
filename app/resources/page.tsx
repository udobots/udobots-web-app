import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
    count: '5 articles',
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
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/hero-resources.png"
          alt="UDoBots drone system"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Resources</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Practical information about drone cleaning — no sales pitch, just useful knowledge.
          </p>
        </div>
      </div>
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
