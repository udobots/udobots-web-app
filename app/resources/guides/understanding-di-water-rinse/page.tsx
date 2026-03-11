import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Understanding DI Water Rinse',
  description: 'What deionised water is, why it matters for facade and solar panel cleaning, and how to manage water quality.',
};

export default function DIWaterGuide() {
  return (
    <>
      <PageHero title="Understanding DI Water Rinse" breadcrumb="Guides" />
      <Section bg="white">
        <article className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6">
            If you&apos;ve ever washed a car and seen white spots appear after it dries, you&apos;ve seen what dissolved minerals in tap water can do. Deionised (DI) water solves this problem — and it&apos;s especially important for glass facades and solar panels.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">What is DI Water?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Deionised water has had its mineral ions (calcium, magnesium, sodium, etc.) removed through an ion exchange process. The result is water that leaves no mineral residue when it dries. This gives a spot-free, streak-free finish without the need for drying or buffing.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Why It Matters for Cleaning</h2>
          <div className="space-y-4 mb-6">
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="font-semibold text-charcoal mb-1">Glass Facades</h3>
              <p className="text-sm text-gray-600">Tap water leaves mineral spots on glass that can be difficult to remove and look worse than the original dirt. DI water rinse eliminates this problem entirely.</p>
            </div>
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="font-semibold text-charcoal mb-1">Solar Panels</h3>
              <p className="text-sm text-gray-600">Mineral deposits from tap water can reduce light transmission through the panel glass, partially negating the benefit of cleaning. DI water preserves the anti-reflective coating and leaves panels truly clean.</p>
            </div>
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="font-semibold text-charcoal mb-1">Coated Surfaces</h3>
              <p className="text-sm text-gray-600">Some facade coatings and treatments can react with mineral-heavy water. DI water is chemically neutral and safe for virtually all building surface treatments.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Measuring Water Quality</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Water purity is measured in TDS (Total Dissolved Solids), expressed in parts per million (ppm). Tap water in Indian cities typically runs 200–500 ppm. For facade and solar panel cleaning, we target below 10 ppm. We carry a TDS meter on every job to verify water quality before and during cleaning.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">How We Manage DI Water</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We produce DI water using portable ion exchange resin systems and transport it to site in our own tanks. This means we&apos;re not dependent on local water quality — the cleaning result is consistent regardless of location. Resin cartridges are monitored and replaced on a regular schedule.
          </p>

          <Link href="/resources/guides" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Guides</Link>
        </article>
      </Section>
    </>
  );
}
