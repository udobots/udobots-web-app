import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Why Routine Facade Maintenance Matters More Than Restoration',
  description: 'Regular facade maintenance prevents costly restoration. Learn how a maintenance-first approach extends building life and reduces long-term costs.',
};

export default function RoutineMaintenanceArticle() {
  return (
    <>
      <PageHero title="Why Routine Facade Maintenance Matters More Than Restoration" breadcrumb="Blog" />
      <Section bg="white">
        <article className="max-w-3xl mx-auto prose-gray">
          <p className="text-sm text-gray-400 mb-6">25 March 2026</p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Many building owners focus on restoration only when visible damage appears. However, by that point, the cost and complexity of the work are already high.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Why Maintenance is Important</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Facade surfaces are constantly exposed to dust, pollution, water stains, and biological growth. Over time, this buildup can damage materials and reduce the lifespan of the building exterior.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Regular maintenance helps prevent this accumulation and keeps the building in good condition.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">The Problem with Delayed Cleaning</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When cleaning is delayed, dirt and contaminants become harder to remove. This often requires aggressive cleaning methods, which can damage surfaces.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            In some cases, it may lead to the need for full restoration instead of simple cleaning.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Benefits of Routine Maintenance</h2>
          <div className="p-5 bg-lightgray rounded-card mb-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Lower long-term cost</li>
              <li>Reduced need for heavy equipment</li>
              <li>Improved safety by avoiding high-risk operations</li>
              <li>Better appearance and asset value</li>
              <li>Consistent performance of facade materials</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Where Drone Cleaning Fits</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Drone cleaning is ideal for routine maintenance. It allows buildings to be cleaned more frequently without major setup or disruption.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Because it is faster and safer, it makes regular cleaning more practical and cost-effective.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">When Restoration is Still Needed</h2>
          <div className="p-5 bg-lightgray rounded-card mb-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Deep structural issues</li>
              <li>Damaged sealants or coatings</li>
              <li>Heavy staining that cannot be removed with light cleaning</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">What UDoBots Focuses On</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            UDoBots promotes a maintenance-first approach. By using drone-based cleaning regularly, buildings can avoid expensive restoration projects and maintain their exterior condition more efficiently.
          </p>

          <Link href="/resources/blog" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Blog</Link>
        </article>
      </Section>
    </>
  );
}
