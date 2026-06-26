import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import ContactForm from '@/components/ui/ContactForm';
import { siteConfig } from '@/lib/site-config';
import { stats, benefits, platformFeatures, steps, industries, safetyChecklist, news } from '@/content/home-data';

export default function Home() {
  return (
    <>
      <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/drone-rinse.jpg" alt="Drone cleaning a building facade" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Made in India. Deployed Nationwide.
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Drone-Powered
              <span className="text-primary-500"> Facade Cleaning</span>
              <br />
              for Industrial Buildings
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
              Replace rope access and scaffolding with autonomous drone cleaning — safer, 5x faster, and built right here in India.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?interest=demo"
                className="px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all hover:shadow-lg hover:shadow-primary-500/25 text-center"
              >
                Request a Demo
              </Link>
              <Link
                href="/solutions"
                className="px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
              >
                Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <AnimatedCounter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Why {siteConfig.nameDisplay}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">A Practical Upgrade from Traditional Cleaning</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">No hype — just safer operations, faster completion, and lower costs.</p>
          </div>
        </ScrollReveal>
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="group rounded-card overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image src={b.img} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-2">{b.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">Our Platform</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">All-Electric. Tethered. Autonomous.</h2>
                <div className="space-y-4">
                  {platformFeatures.map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">{item.label}</p>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 mt-8 text-primary-400 font-semibold hover:text-primary-300 transition-colors"
                >
                  Explore the Platform
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-card overflow-hidden">
                    <Image src="/images/drone-closeup.jpg" alt="Drone closeup" width={400} height={300} className="w-full h-auto object-cover" />
                  </div>
                  <div className="rounded-card overflow-hidden">
                    <Image src="/images/control-unit.jpg" alt="Control unit" width={400} height={300} className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-card overflow-hidden">
                    <Image src="/images/drone-arm-detail.jpg" alt="Drone arm detail" width={400} height={300} className="w-full h-auto object-cover" />
                  </div>
                  <div className="rounded-card overflow-hidden">
                    <Image src="/images/drone-launchpad.jpg" alt="Drone on launchpad" width={400} height={300} className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Section bg="gray">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">From Survey to Spotless — In 4 Steps</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 100}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-card shadow-sm border border-gray-100 overflow-hidden`}>
                <div className="relative w-full lg:w-1/2 h-64 lg:h-80">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-8 lg:w-1/2">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Watch Our Drone in Action</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">Drone-Powered Facade Cleaning in Action</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              See how UDoBots is transforming facade cleaning with a fully integrated drone platform.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-card overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/ZNyJRKErhzk"
                title="Drone-Powered Facade Cleaning in Action — UDoBots"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="white">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Industries We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">Built for Sites Where Traditional Cleaning Falls Short</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 80}>
              <div className="group rounded-card overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-44 overflow-hidden">
                  <Image src={ind.img} alt={ind.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <p className="text-gray-500 text-sm">{ind.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-500" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Safety-First Operations</h2>
                <p className="mt-4 text-orange-100 text-lg leading-relaxed">
                  Every job follows a structured safety protocol. Pre-flight checklists, Job Safety Analysis, weather monitoring, perimeter control, and emergency procedures are standard — not optional.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {safetyChecklist.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white">
                      <svg className="w-4 h-4 text-amber-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/safety"
                  className="inline-block mt-8 px-6 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Our Safety Standards
                </Link>
              </div>
              <div className="relative h-80 rounded-card overflow-hidden shadow-xl">
                <Image src="/images/drone-setup.jpg" alt="Safety crew briefing" fill className="object-cover" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">What People Say</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Trusted by Facility Managers</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      <Section bg="gray">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Latest Updates</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">News & Projects</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <Link href={item.href} className="group block rounded-card overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary-500 font-medium uppercase tracking-wider mb-2">{item.date}</p>
                  <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary-500 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.excerpt}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <section className="bg-charcoal py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2">Get in Touch</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Request a Free Quote</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Tell us about your building and we&apos;ll put together a cleaning plan with timeline and pricing. No obligation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary-400 transition-colors">{siteConfig.contact.email}</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{siteConfig.contact.location}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ContactForm recipientAlias="hello" submitLabel="Get a Free Quote" messagePlaceholder="Tell us about your project — building type, size, cleaning needs..." variant="dark" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
