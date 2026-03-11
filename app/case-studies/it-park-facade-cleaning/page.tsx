import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'IT Park Glass Facade — Chennai',
  description: 'Case study: Drone cleaning of an 8-storey glass curtain wall facade at a Chennai IT park.',
};

export default function CaseStudy1() {
  return (
    <>
      <PageHero title="IT Park Glass Facade — Chennai" subtitle="Facade cleaning for a multi-tenant IT park using drone-based soft wash." breadcrumb="Case Studies" />
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-1">Client Profile</h3>
              <p className="text-gray-700">Multi-tenant IT park with 3 glass-facade buildings managed by a national facility management company.</p>
            </div>
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-1">Site Details</h3>
              <p className="text-gray-700">8-storey glass curtain wall buildings. Urban location with road traffic on two sides. Limited ground staging area.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Problem</h2>
          <p className="text-gray-600 mb-8">Accumulated dust, pollution staining, and water marks on all three buildings. Previous cleaning used rope access teams, which took 2–3 weeks per building and caused disruption to ground-floor tenants. The facility manager wanted a faster, less disruptive approach.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Approach</h2>
          <p className="text-gray-600 mb-4">We conducted a pre-job site survey to assess surface condition, map obstacles (signage, CCTV cameras, window AC units), and plan flight paths. A Job Safety Analysis was completed and reviewed with the facility team.</p>
          <p className="text-gray-600 mb-8">Cleaning was performed floor-by-floor using a soft-wash system with biodegradable cleaning agent followed by a DI water rinse. Operations were scheduled during weekday working hours to minimise impact on weekend events at the campus.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Results</h2>
          <ul className="space-y-2 text-gray-600 mb-8">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              All three buildings cleaned in 3 working days (compared to 6–9 weeks with rope access)
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              No scaffolding or rope access setup required
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Positive feedback from tenants on speed and minimal disruption
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Before/after photo documentation delivered to facility management
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Safety Notes</h2>
          <p className="text-gray-600 mb-8">Exclusion zones were set up at ground level during operations. Tethered drone operation prevented flyaway risk. All flights were paused during one afternoon due to high wind, resuming the next morning after conditions cleared.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Lessons Learned</h2>
          <p className="text-gray-600 mb-8">Detailed pre-survey mapping of facade obstacles saved time during actual cleaning. Scheduling around tenant working hours was manageable but required clear communication with the facility team about exact timing and noise levels.</p>

          <Link href="/case-studies" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Case Studies</Link>
        </div>
      </Section>
    </>
  );
}
