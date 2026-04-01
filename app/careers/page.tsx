import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactForm from '@/components/ui/ContactForm';
import CareersApplyModal from '@/components/ui/CareersApplyModal';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Careers',
  description: `Join the ${siteConfig.name} team. We're building autonomous robotic systems for industrial cleaning — drone technology, intelligent automation, and real-world field robotics.`,
};

const values = [
  {
    icon: '🛡️',
    title: 'Safety as a Feature',
    desc: "Safety is not a checklist — it's a core capability. Every system we build prioritises removing people from hazardous positions.",
  },
  {
    icon: '🔧',
    title: 'Engineering over Marketing',
    desc: 'We build things that work reliably in the field. Simple, robust solutions win over fragile complexity every time.',
  },
  {
    icon: '🇮🇳',
    title: 'Made in India',
    desc: 'Our platform is designed, assembled, and supported in India. We build for Indian conditions and operate nationwide.',
  },
  {
    icon: '📈',
    title: 'Earn Your Impact',
    desc: 'Early team members have outsized influence. You will work on real problems with measurable outcomes from day one.',
  },
];

const openRoles = [
  {
    title: "Drone Integration Engineer cum Test Pilot",
    department: "Engineering",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    desc: "Integrate UAV hardware, conduct flight testing, and validate tethered drone cleaning systems. Responsible for system integration, field trials, and performance optimisation.",
  },
  {
    title: "Mechanical / Aerospace Engineering Lead",
    department: "Engineering",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    desc: "Lead mechanical design of drone structures, payload systems, mounting systems, and industrial cleaning hardware.",
  },
  {
    title: "Electronics Engineering Lead",
    department: "Engineering",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    desc: "Design and develop embedded electronics including power distribution, flight control integration, sensors, and telemetry systems.",
  }
];

const perks = [
  'Work on real robotics — not simulations',
  'Early-stage equity for strong performers',
  'Travel across India for field deployments',
  'Direct access to leadership and decision-making',
  'Health insurance coverage',
  'Equipment and tools provided',
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/drone-setup.jpg"
          alt="UDoBots field operations team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" aria-hidden="true" />
            We&apos;re Hiring
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
            Build the Future of
            <span className="text-primary-500"> Field Robotics</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            Join a small, focused team building autonomous drone systems that make dangerous, high-effort work safer and dramatically more efficient.
          </p>
          <a
  href="#jobs"
  className="inline-block mt-8 px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all"
>
  View Open Positions
</a>
        </div>
      </div>

      {/* Mission */}
      <Section bg="white">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Our Mission</p>
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Autonomous Systems That Make Critical Work Safer
              </h2>
              <p className="text-gray-600 mb-4">
                {siteConfig.name} builds practical field robotics for industrial cleaning — drone technology that removes workers from hazardous positions while delivering consistent, measurable results.
              </p>
              <p className="text-gray-600 mb-4">
                We are an early-stage company based in Chennai, deploying across India. If you want to work on real robotics problems — not CRUD apps, not dashboards, not internal tools — this is the team.
              </p>
              <p className="text-gray-600">
                Our vision: a world where dangerous, high-effort work is done by trustworthy machines, and people focus on higher-value decisions.
              </p>
            </div>
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/drone-action-wide.jpg"
                alt="Drone cleaning operation in the field"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Values */}
      <Section bg="gray">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Why Join Us</p>
            <h2 className="text-3xl font-bold text-charcoal">What We Stand For</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="p-6 bg-white rounded-card border border-gray-100 h-full">
                <div className="text-3xl mb-3" aria-hidden="true">{v.icon}</div>
                <h3 className="font-semibold text-charcoal mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Open Roles */}
      <Section id="jobs" bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Open Positions</p>
            <h2 className="text-3xl font-bold text-charcoal">Current Openings</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Don&apos;t see the exact role? Apply anyway — we review all strong applications.
            </p>
          </div>
        </ScrollReveal>
        <div className="space-y-4">
          {openRoles.map((role, i) => (
            <ScrollReveal key={role.title} delay={i * 80}>
              <div className="p-6 bg-lightgray rounded-card border border-gray-100 hover:border-primary-200 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-charcoal mb-1">{role.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                        {role.department}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                        {role.location}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                        {role.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{role.desc}</p>
                  </div>
                  <CareersApplyModal roleTitle={role.title} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Perks */}
      <Section bg="dark">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                Built for People Who Want to Build Real Things
              </h2>
              <ul className="space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-72 rounded-card overflow-hidden">
              <Image
                src="/images/drone-topview.jpg"
                alt="Drone operations from above"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Application Form */}
      <Section id="apply" bg="gray">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Apply Now</p>
              <h2 className="text-3xl font-bold text-charcoal mb-3">Send Us Your Application</h2>
              <p className="text-gray-500">
                Fill in your details below. Tell us about yourself, the role you&apos;re interested in, and why you want to build with us.
              </p>
            </div>
            <div className="bg-white rounded-card border border-gray-100 p-8">
              <ContactForm
                recipientAlias="hiring"
                submitLabel="Submit Application"
                messagePlaceholder="Tell us about yourself, the role you're interested in, your relevant experience, and why you want to join UDoBots."
                variant="light"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section bg="white">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal mb-3">Not Ready to Apply Yet?</h2>
            <p className="text-gray-500 mb-6">
              Follow our work on LinkedIn and stay updated as we grow. Or reach out to have an informal conversation about what we&apos;re building.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-200 text-charcoal font-semibold rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors"
              >
                Follow on LinkedIn
              </a>
              <Link
                href="/about"
                className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
