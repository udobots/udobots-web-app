import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Soft Wash vs Pressure Wash for Facades',
  description: 'Understanding the difference between soft wash and pressure wash methods for building facade cleaning.',
};

export default function SoftWashArticle() {
  return (
    <>
      <PageHero title="Soft Wash vs Pressure Wash for Facades" breadcrumb="Blog" />
      <Section bg="white">
        <article className="max-w-3xl mx-auto prose-gray">
          <p className="text-gray-600 leading-relaxed mb-6">
            When it comes to cleaning building facades, the two most common approaches are soft wash and pressure wash. They sound similar but work very differently — and choosing the wrong one can damage your building.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">What is Pressure Washing?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Pressure washing uses high-pressure water (typically 1,500–3,000+ PSI) to blast dirt, grime, and biological growth from surfaces. It works well on hard, durable materials like concrete driveways, brick walls, and stone surfaces. The force of the water does most of the work.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The downside: high pressure can damage softer materials. Glass coatings, paint, sealants, ACP panels, and aged mortar joints can all be stripped or damaged by excessive pressure. Water can also be forced behind cladding, causing moisture problems inside the wall cavity.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">What is Soft Washing?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Soft washing uses low-pressure water (typically under 500 PSI) combined with cleaning solutions to break down dirt, algae, mould, and pollution staining. The cleaning agent does the work, not the water pressure. After the solution has had time to act, the surface is rinsed with clean water — often deionised (DI) water for a streak-free finish.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Soft washing is the preferred method for glass facades, coated cladding, painted surfaces, and any material that could be damaged by high pressure. It&apos;s also gentler on sealant joints and window frames.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">When to Use Each Method</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="font-semibold text-charcoal mb-2">Soft Wash is better for:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Glass curtain walls and windows</li>
                <li>ACP and metal cladding</li>
                <li>Painted or coated surfaces</li>
                <li>Solar panels</li>
                <li>Surfaces with sealant joints</li>
              </ul>
            </div>
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="font-semibold text-charcoal mb-2">Pressure Wash is better for:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Concrete driveways and paths</li>
                <li>Unpainted brick walls</li>
                <li>Stone surfaces in good condition</li>
                <li>Industrial floors</li>
                <li>Heavy grease or oil removal</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">What UDoBots Uses</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our drone cleaning system primarily uses soft wash techniques for facade work, with adjustable pressure settings that can be increased for tougher surfaces like concrete. The DI water rinse ensures a clean, spot-free finish on glass and coated materials.
          </p>

          <Link href="/resources/blog" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Blog</Link>
        </article>
      </Section>
    </>
  );
}
