// ─── Form Types ───────────────────────────────────────────────────────────────

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  /** Honeypot field – should remain empty */
  _honey?: string;
}

export interface ContactApiPayload extends ContactFormData {
  /** Which Cloudflare-routed address to send to */
  recipientAlias: EmailAlias;
  /** Optional extra context (interest area, city, etc.) */
  interest?: string;
  city?: string;
}

export interface ContactApiResponse {
  success?: boolean;
  error?: string;
}

// ─── Email Routing Types ───────────────────────────────────────────────────────

export type EmailAlias = 'hello' | 'hiring' | 'info' | 'contact';

export interface EmailAliasConfig {
  alias: EmailAlias;
  address: string;
  label: string;
  description: string;
}

// ─── Site Config Types ─────────────────────────────────────────────────────────

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  youtube: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  city: string;
  region: string;
  country: string;
}

// ─── Content / Data Types ─────────────────────────────────────────────────────

export interface Stat {
  end: number;
  suffix: string;
  label: string;
}

export interface Benefit {
  title: string;
  desc: string;
  img: string;
}

export interface PlatformFeature {
  label: string;
  desc: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  img: string;
}

export interface Industry {
  title: string;
  desc: string;
  img: string;
}

export interface NewsItem {
  title: string;
  excerpt: string;
  img: string;
  date: string;
  href: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Value {
  title: string;
  desc: string;
}

export interface CareersRole {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}
