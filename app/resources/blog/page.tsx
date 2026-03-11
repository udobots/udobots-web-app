import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles on drone cleaning, soft wash techniques, and building facade maintenance from UDoBots.',
};

const articles = [
  {
    slug: 'soft-wash-vs-pressure-wash',
    title: 'Soft Wash vs Pressure Wash for Facades',
    excerpt: 'Understanding the difference between soft wash and pressure wash methods, and when to use each for building facades.',
    date: '2025-01-15',
  },
  {
    slug: 'planning-safe-drone-cleaning-job',
    title: 'How to Plan a Safe Drone Cleaning Job',
    excerpt: 'A practical guide to site assessment, safety planning, and operational preparation for drone-based cleaning operations.',
    date: '2025-02-01',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" subtitle="Practical articles on drone cleaning and building maintenance." breadcrumb="Resources" />
      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/blog/${article.slug}`}
              className="group block p-6 bg-white rounded-card border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <p className="text-sm text-gray-400 mb-1">{new Date(article.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <h2 className="text-xl font-bold text-charcoal group-hover:text-primary-500 mb-2">{article.title}</h2>
              <p className="text-gray-500">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
