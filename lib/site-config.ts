import type { EmailAliasConfig } from '@/types';

export const siteConfig = {
  name: 'UDoBots',
  nameDisplay: 'U Do Bots',
  tagline: 'Industrial Drone Cleaning',
  description:
    'UDoBots delivers drone-powered facade, roof, and solar panel cleaning for commercial and industrial buildings. Safer than rope access, faster turnaround, reduced water usage.',
  shortDescription:
    'Drone-powered facade, roof, and solar panel cleaning for commercial and industrial buildings.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://udobots.com',

  contact: {
    email: 'hello@udobots.com',
    // phone: '+91 44 0000 0000',
    // phoneHref: 'tel:+914400000000',
    location: ' 42, Gandhi Mandapam Rd, Chitra Nagar, Kotturpuram, Chennai, Tamil Nadu 600085',
    city: 'Chennai',
    region: 'Tamil Nadu',
    country: 'IN',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/udobots/',
    twitter: 'https://x.com/udo_bots',
    youtube: 'https://www.youtube.com/@udobots',
    instagram: 'https://www.instagram.com/udobots/'
  },

  seo: {
    locale: 'en_IN',
    type: 'website' as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;

// ─── Cloudflare Email Routing Configuration ───────────────────────────────────
//
// Cloudflare Email Routing forwards these addresses to udobots@uds.in.
// The Next.js API route sends to the correct alias depending on the page/form.
//
// alias          → CF forwards to     → used on
// hello@         → udobots@uds.in     → Home page contact form
// info@          → udobots@uds.in     → About page enquiries
// contact@       → udobots@uds.in     → /contact page
// hiring@        → udobots@uds.in     → /careers applications

export const emailAliases: EmailAliasConfig[] = [
  {
    alias: 'hello',
    address: 'hello@udobots.com',
    label: 'General Hello',
    description: 'Home page contact form → general sales enquiries',
  },
  {
    alias: 'info',
    address: 'info@udobots.com',
    label: 'Information',
    description: 'About page form → company information requests',
  },
  {
    alias: 'contact',
    address: 'contact@udobots.com',
    label: 'Contact',
    description: 'Contact page form → all general inbound messages',
  },
  {
    alias: 'hiring',
    address: 'hiring@udobots.com',
    label: 'Careers',
    description: 'Careers page form → job applications',
  },
];

export function getEmailAddress(alias: string): string {
  const found = emailAliases.find((e) => e.alias === alias);
  return found ? found.address : 'contact@udobots.com';
}
