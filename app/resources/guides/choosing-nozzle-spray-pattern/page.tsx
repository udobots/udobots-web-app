import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Choosing the Right Nozzle and Spray Pattern',
  description: 'A guide to nozzle types, spray angles, and flow rates for different building surfaces in drone cleaning.',
};

export default function NozzleGuide() {
  return (
    <>
      <PageHero title="Choosing the Right Nozzle and Spray Pattern" breadcrumb="Guides" />
      <Section bg="white">
        <article className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6">
            The nozzle is where the cleaning actually happens. Getting it right means better cleaning results, less water waste, and no surface damage. Getting it wrong can mean streaking, missed areas, or worse — etching and coating removal.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Nozzle Types</h2>
          <div className="space-y-4 mb-6">
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="font-semibold text-charcoal mb-1">Fan Nozzle (Flat Spray)</h3>
              <p className="text-sm text-gray-600">Produces a flat, wide spray pattern. Good for even coverage on flat surfaces. Available in different angles — wider angles give more coverage but lower impact force.</p>
            </div>
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="font-semibold text-charcoal mb-1">Cone Nozzle (Full or Hollow)</h3>
              <p className="text-sm text-gray-600">Produces a circular spray pattern. Full cone gives even distribution across the circle. Hollow cone concentrates flow on the edges. Used for rinsing and pre-wetting.</p>
            </div>
            <div className="p-5 bg-lightgray rounded-card">
              <h3 className="font-semibold text-charcoal mb-1">Pencil Jet (Zero Degree)</h3>
              <p className="text-sm text-gray-600">Concentrated, high-impact stream. Used for stubborn staining on durable surfaces. Not suitable for glass, coated panels, or delicate materials.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Matching Nozzle to Surface</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-lightgray">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700">Surface</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Nozzle Type</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Angle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-4 py-3 text-gray-600">Glass facade</td><td className="px-4 py-3 text-gray-600">Fan nozzle</td><td className="px-4 py-3 text-gray-600">40–65°</td></tr>
                <tr><td className="px-4 py-3 text-gray-600">ACP cladding</td><td className="px-4 py-3 text-gray-600">Fan nozzle</td><td className="px-4 py-3 text-gray-600">25–40°</td></tr>
                <tr><td className="px-4 py-3 text-gray-600">Concrete</td><td className="px-4 py-3 text-gray-600">Fan or pencil</td><td className="px-4 py-3 text-gray-600">15–25°</td></tr>
                <tr><td className="px-4 py-3 text-gray-600">Solar panels</td><td className="px-4 py-3 text-gray-600">Fan nozzle</td><td className="px-4 py-3 text-gray-600">40–65°</td></tr>
                <tr><td className="px-4 py-3 text-gray-600">Metal roofing</td><td className="px-4 py-3 text-gray-600">Fan nozzle</td><td className="px-4 py-3 text-gray-600">25–40°</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-charcoal mb-3 mt-8">Flow Rate and Distance</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Flow rate (litres per minute) and distance from the surface work together. Too close with too much flow can damage surfaces. Too far and you lose cleaning effectiveness. Our drone system maintains a consistent distance from the surface using sensors, which keeps the spray pattern uniform throughout the pass.
          </p>

          <Link href="/resources/guides" className="text-primary-500 hover:text-primary-600 font-medium">&larr; Back to Guides</Link>
        </article>
      </Section>
    </>
  );
}
