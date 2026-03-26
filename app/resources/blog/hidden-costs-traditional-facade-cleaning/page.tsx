import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Hidden Costs in Traditional Facade Cleaning',
  description: 'How permits, delays, and setup fees add up across different facade cleaning methods — and what to watch for when budgeting.',
};

export default function HiddenCostsArticle() {
  return (
    <>
      <PageHero title="Hidden Costs in Traditional Facade Cleaning" breadcrumb="Blog" />
      <Section bg="white">
        <article className="max-w-3xl mx-auto prose-gray">
          <p className="text-sm text-gray-400 mb-6">20 March 2026</p>

          <p className="text-gray-600 leading-relaxed mb-6">
            At first glance, facade cleaning costs may seem straightforward. However, the quoted price often does not reflect the full picture. Hidden costs related to setup, permits, and delays can significantly increase the total expense.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Why Do Hidden Costs Matter?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            For commercial buildings, especially in urban areas, operational disruptions and compliance requirements can add unexpected costs. Understanding these factors helps in better planning and budgeting.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Scaffolding Costs</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Scaffolding often requires structural assessment before installation. This can add additional engineering costs and delay project timelines.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            There are also indirect costs such as blocked entrances, restricted access for tenants, and extended project duration.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Boom Lift Costs</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Boom lifts require road access and often need municipal permits. In busy city areas, this can include daily permit fees and traffic management costs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Equipment rental itself is also expensive, especially for longer durations.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Rope Access Costs</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Rope access appears cost-effective initially due to minimal equipment. However, it depends heavily on skilled technicians.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Labor shortages and safety requirements can increase costs over time, especially for larger or repetitive projects.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Drone Cleaning Costs</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Drone cleaning reduces many of these hidden costs. It requires minimal setup, no road closures, and fewer personnel.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            However, it is important to note that drones are best for maintenance and may not replace traditional methods for complex restoration work.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">How to Reduce Overall Cost</h2>
          <div className="p-5 bg-lightgray rounded-card mb-6">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Plan maintenance regularly instead of waiting for heavy buildup</li>
              <li>Choose methods based on building condition, not just price</li>
              <li>Consider long-term cost instead of one-time savings</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">What UDoBots Recommends</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            UDoBots focuses on preventive maintenance using drone systems. By reducing the need for heavy setup and repeated labor, overall lifecycle costs can be significantly lowered.
          </p>

          <Link href="/resources/blog" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Blog</Link>
        </article>
      </Section>
    </>
  );
}
