import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Solar Panel Array — Commercial Campus',
  description: 'Case study: Drone cleaning of 200+ rooftop solar panels on a commercial campus.',
};

export default function CaseStudy3() {
  return (
    <>
      <PageHero title="Solar Panel Array — Commercial Campus" subtitle="Solar panel cleaning for a facility management company using DI water drone rinse." breadcrumb="Case Studies" />
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-1">Client Profile</h3>
              <p className="text-gray-700">Facility management company responsible for a mixed-use commercial campus with rooftop solar installations.</p>
            </div>
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-1">Site Details</h3>
              <p className="text-gray-700">200+ rooftop solar panels across 3 buildings. Panels mounted at various angles. Rooftop access restricted.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Problem</h2>
          <p className="text-gray-600 mb-8">Dust and bird droppings had reduced panel efficiency below the thresholds specified in the energy performance contract. Manual cleaning by workers walking on the roof was causing micro-scratches on panels and raised safety concerns.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Approach</h2>
          <p className="text-gray-600 mb-8">Panels were cleaned with a low-pressure DI (deionised) water rinse from a consistent height. No brushes or physical contact with the panel surface. Cleaning was scheduled for early morning to avoid thermal shock from cold water on hot panels.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Results</h2>
          <ul className="space-y-2 text-gray-600 mb-8">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              All panels cleaned in 1.5 working days across the 3 buildings
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              No micro-scratches — contactless cleaning preserved panel coating
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Energy output monitoring showed measurable improvement in the following weeks
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Cleaning documentation provided for performance contract compliance
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Safety Notes</h2>
          <p className="text-gray-600 mb-8">No workers were sent to the rooftop. All cleaning was performed via drone from a ground-level staging area. DI water supply was transported to site in our own tanks.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Lessons Learned</h2>
          <p className="text-gray-600 mb-8">Early morning scheduling is essential for solar panel cleaning to avoid thermal stress. DI water quality should be verified before every job — we now carry a TDS meter as standard kit.</p>

          <Link href="/case-studies" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Case Studies</Link>
        </div>
      </Section>
    </>
  );
}
