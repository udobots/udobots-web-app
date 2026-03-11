import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Industrial Warehouse Roof — Sriperumbudur',
  description: 'Case study: Drone cleaning of metal roofing on an industrial warehouse near Chennai.',
};

export default function CaseStudy2() {
  return (
    <>
      <PageHero title="Industrial Warehouse Roof — Sriperumbudur" subtitle="Roof cleaning for a manufacturing facility using drone-based rinse system." breadcrumb="Case Studies" />
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-1">Client Profile</h3>
              <p className="text-gray-700">Manufacturing facility operator running a large warehouse complex on the outskirts of Chennai.</p>
            </div>
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-1">Site Details</h3>
              <p className="text-gray-700">Metal roofing sheets across two connected warehouse buildings. Total area approximately 5,000 sq.m. Open ground on all sides.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Problem</h2>
          <p className="text-gray-600 mb-8">Heavy algae growth and dust accumulation on metal roofing sheets. Drainage channels were partially blocked, leading to water pooling during monsoon. Manual cleaning was avoided due to roof access safety concerns and fragile roofing material in some sections.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Approach</h2>
          <p className="text-gray-600 mb-8">The roof was divided into zones for systematic coverage. A medium-pressure rinse was used to dislodge biological growth and clear drainage paths. Fragile sections were identified during the pre-survey and cleaned with reduced pressure settings.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Results</h2>
          <ul className="space-y-2 text-gray-600 mb-8">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Both warehouse roofs cleaned in 2 working days
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Drainage channels cleared and flowing correctly
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              No workers needed on the roof at any point
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Aerial imagery shared with the maintenance team for records
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Safety Notes</h2>
          <p className="text-gray-600 mb-8">Open ground staging area provided ample space for the ground kit. No height-at-work risk as all operations were drone-based. Early morning starts to avoid afternoon heat.</p>

          <h2 className="text-2xl font-bold text-charcoal mb-3">Lessons Learned</h2>
          <p className="text-gray-600 mb-8">Zoning the roof into sections improved tracking and allowed partial completion if weather intervened. Reduced pressure on fragile sections worked well — no damage reported.</p>

          <Link href="/case-studies" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Case Studies</Link>
        </div>
      </Section>
    </>
  );
}
