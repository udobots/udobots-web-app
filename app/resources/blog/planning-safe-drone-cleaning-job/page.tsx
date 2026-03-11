import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'How to Plan a Safe Drone Cleaning Job',
  description: 'A practical guide to site assessment, safety planning, and operational preparation for drone-based cleaning operations.',
};

export default function PlanningArticle() {
  return (
    <>
      <PageHero title="How to Plan a Safe Drone Cleaning Job" breadcrumb="Blog" />
      <Section bg="white">
        <article className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6">
            Drone-based cleaning isn&apos;t something you can improvise. Every job requires careful planning to ensure it&apos;s safe, effective, and completed without incident. Here&apos;s what goes into planning a drone cleaning operation.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">1. Site Assessment</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Before anything flies, the site needs to be surveyed. This includes understanding the building geometry, surface materials, surrounding obstacles (power lines, trees, adjacent buildings), wind patterns, and available staging areas for the ground equipment. A good site assessment saves time and prevents surprises on the day.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">2. Job Safety Analysis (JSA)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A formal JSA identifies every hazard associated with the job and documents the control measures. This covers everything from pedestrian traffic near the building to weather thresholds, emergency landing zones, and communication protocols. The JSA is reviewed and signed off before work begins.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">3. Equipment Preparation</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The drone, cleaning module, hose system, pump, and water supply all need to be inspected and tested before departure. Battery levels, nozzle condition, hose integrity, and communication systems are all checked against a pre-job checklist.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">4. Weather Monitoring</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Weather is checked the day before and again on the morning of the job. Wind speed, rain probability, visibility, and temperature are all factored into the go/no-go decision. Real-time monitoring continues throughout the operation, with automatic pauses if conditions deteriorate.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">5. Coordination with Site Teams</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The facility management team, building security, and any affected tenants need to be informed about timing, noise levels, exclusion zones, and what to expect. Clear communication prevents misunderstandings and ensures cooperation on the ground.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">6. Post-Job Review</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            After every job, the crew conducts a walkthrough to check for any issues — equipment left behind, water pooling, or areas that need a second pass. Equipment is inspected and logged, and a job report is prepared with photos and operational notes.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Good planning isn&apos;t glamorous, but it&apos;s the difference between a smooth operation and a problem. At UDoBots, we follow this process for every single job — whether it&apos;s the first building or the fiftieth.
          </p>

          <Link href="/resources/blog" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Blog</Link>
        </article>
      </Section>
    </>
  );
}
