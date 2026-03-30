import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Section from '@/components/layout/Section';
import { siteConfig } from '@/lib/site-config';
import { values } from '@/content/about-data';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — an industrial drone cleaning company based in ${siteConfig.contact.location}. Our mission, team, and approach.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/operator-portrait.jpg"
          alt={`${siteConfig.name} operator`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">About {siteConfig.name}</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
            We build and operate drone cleaning systems for commercial and industrial buildings across India.
          </p>
        </div>
      </div>

      <Section bg="white">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Building facades, rooftops, and solar panels get dirty. The traditional way to clean them involves scaffolding, rope access, or putting workers on rooftops — all slow, expensive, and risky.
              </p>
              <p className="text-gray-600 mb-4">
                {siteConfig.name} was founded to change that. We design, build, and operate drone-based cleaning systems that remove people from the hazard zone while delivering consistent, measurable results.
              </p>
              <p className="text-gray-600">
                Based in {siteConfig.contact.location}, we work with facility managers, property owners, and industrial operators across India. Our approach is practical — we solve real maintenance problems with engineering, not hype.
              </p>
            </div>
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/drone-action-wide.jpg"
                alt="Drone cleaning operation at DHL facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="gray">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">What We Believe</h2>
          </div>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="p-5 bg-white rounded-card border border-gray-100 h-full">
                  <h3 className="font-semibold text-charcoal mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/drone-topview.jpg"
                alt="Top-down view of drone with operator"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-card overflow-hidden">
              <Image
                src="/images/drone-spray.jpg"
                alt="Make in India badge on equipment"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-4">Made in India</h2>
              <p className="text-gray-600 mb-4">
                {siteConfig.name} equipment is designed and assembled in India. Our drone platform, cleaning modules, and ground kits are built to handle Indian climate conditions — heat, humidity, dust, and monsoon weather cycles.
              </p>
              <p className="text-gray-600 mb-4">
                We source components locally where possible and maintain our engineering and support team in Chennai. This means faster turnaround on repairs, readily available spare parts, and a team that understands the operational environment.
              </p>
              <p className="text-gray-600">
                Our goal is to build a sustainable Indian robotics company that solves real problems in building maintenance — starting with cleaning, and expanding from there.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal mb-4 text-center">Our Team</h2>
            <p className="text-gray-600 text-center">
              {siteConfig.name} is a small, focused team of engineers, drone operators, and operations people based in Chennai. We combine experience in robotics, building maintenance, and field operations to deliver a service that actually works on real job sites.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="dark">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
            <p className="text-gray-400 mb-6">We&apos;re happy to talk about what we do and how it might help your facility.</p>
            <Link href="/contact" className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}

