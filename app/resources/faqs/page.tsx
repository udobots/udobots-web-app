import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about UDoBots drone cleaning — safety, process, costs, and capabilities.',
};

const faqs = [
  { q: 'What types of buildings can you clean?', a: 'We clean glass facades, ACP cladding, concrete and stone facades, metal roofs, flat roofs, and rooftop solar panels. The building needs to have a suitable ground-level staging area and meet our safety assessment criteria.' },
  { q: 'How high can the drones clean?', a: 'Our drones are designed for typical commercial building heights. The exact capability depends on site conditions including wind exposure, surrounding structures, and tether management. We assess this during the site survey.' },
  { q: 'Is drone cleaning safe for glass?', a: 'Yes. We use soft-wash techniques with calibrated low pressure and DI (deionised) water rinse. This is gentler than pressure washing and avoids the surface damage that can occur with abrasive manual cleaning.' },
  { q: 'What about wind and bad weather?', a: 'We follow strict weather protocols. Operations are paused when wind exceeds safe thresholds (typically 15–20 km/h at height), during rain, thunderstorms, or poor visibility. We monitor conditions in real-time throughout every job.' },
  { q: 'Do you need building management permission?', a: 'Yes. We work with facility managers and building owners to get the necessary access permissions, coordinate timing, and inform tenants before every job. We handle the planning — you just need to approve the schedule.' },
  { q: 'How long does a typical cleaning job take?', a: 'It depends on the building size and surface type. A typical mid-rise commercial facade can be completed in 1–3 days. Solar panel arrays and roofs are usually faster. We provide time estimates during the quotation process.' },
  { q: 'What cleaning agents do you use?', a: 'We use biodegradable, surface-appropriate cleaning agents. For glass facades, we typically use a mild detergent followed by a DI water rinse. For tougher biological growth on roofs, we use approved soft-wash solutions. We can provide MSDS documentation on request.' },
  { q: 'Is the drone tethered?', a: 'Yes. Our drones operate on a tether system that provides continuous power and water supply. The tether also acts as a physical failsafe — preventing flyaway incidents even in the unlikely event of a control system failure.' },
  { q: 'What happens if something goes wrong during a job?', a: 'We have documented emergency procedures for every foreseeable scenario — loss of control, hose failure, weather change, and more. The tethered system prevents flyaway, and our operators maintain manual override at all times. Every job has a designated emergency landing zone.' },
  { q: 'How much does it cost?', a: 'Pricing depends on building size, surface type, access conditions, and location. We provide detailed quotes after a site assessment. In general, drone cleaning can be competitive with or lower than traditional methods when you factor in scaffolding, rope access setup, and time.' },
];

export default function FAQsPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Straightforward answers to common questions about drone cleaning." breadcrumb="Resources" />
      <Section bg="white">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 bg-white rounded-card border border-gray-200">
              <h3 className="font-semibold text-charcoal mb-2">{faq.q}</h3>
              <p className="text-gray-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
