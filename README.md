# UDoBots Web App — Production-Ready Next.js

> **Stack:** Next.js 14 · TypeScript · Tailwind CSS · Resend · Cloudflare Email Routing

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Running Locally](#2-running-locally)
3. [Environment Variables](#3-environment-variables)
4. [Contact Form Architecture](#4-contact-form-architecture)
5. [Cloudflare Email Routing — How It Works](#5-cloudflare-email-routing--how-it-works)
6. [DNS & Domain Setup](#6-dns--domain-setup)
7. [Resend Integration](#7-resend-integration)
8. [Email Alias Routing Matrix](#8-email-alias-routing-matrix)
9. [Changes Made](#9-changes-made)
10. [Deployment](#10-deployment)

---

## 1. Project Structure

```
udobots/
├── app/                          # Next.js App Router pages
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # ★ Email handler (Resend + alias routing)
│   ├── about/page.tsx
│   ├── careers/
│   │   ├── page.tsx              # ★ New careers page
│   │   └── CareersApplicationForm.tsx
│   ├── contact/page.tsx          # Updated — uses ContactForm component
│   ├── case-studies/…
│   ├── platform/page.tsx
│   ├── resources/…
│   ├── safety/page.tsx
│   ├── solutions/…
│   ├── globals.css
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Home page
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/                   # Structural layout components
│   │   ├── Header.tsx            # Sticky nav (Careers link added)
│   │   ├── Footer.tsx            # Footer (Careers link added)
│   │   ├── PageHero.tsx          # Reusable dark hero banner
│   │   └── Section.tsx           # Section wrapper with bg variants
│   │
│   └── ui/                       # Reusable UI / interactive components
│       ├── AnimatedCounter.tsx   # Scroll-triggered count animation
│       ├── ContactForm.tsx       # ★ Reusable contact form (configurable alias)
│       ├── ScrollReveal.tsx      # Intersection Observer fade-in
│       └── TestimonialCarousel.tsx
│
├── content/                      # Static data / copy (no DB needed)
│   ├── about-data.ts
│   ├── copy-blocks.ts
│   ├── home-data.ts
│   ├── platform-data.ts
│   ├── safety-data.ts
│   └── testimonials.ts
│
├── lib/                          # Server utilities & config
│   ├── rate-limit.ts             # Per-IP rate limiting (3 req/min)
│   ├── site-config.ts            # ★ Site config + email alias config
│   └── validation.ts             # ★ Shared form validation
│
├── types/
│   └── index.ts                  # ★ Shared TypeScript interfaces
│
├── .env.example                  # Environment variable template
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 2. Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Add your Resend API key to .env.local
#    (Get one free at https://resend.com)

# 4. Start dev server
npm run dev
# → http://localhost:5000
```

Without a `RESEND_API_KEY`, form submissions are logged to the terminal instead of sending emails. This is intentional for local development.

---

## 3. Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (prod) | Resend API key for sending emails |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL for SEO metadata |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Plausible Analytics domain |

---

## 4. Contact Form Architecture

### The `ContactForm` Component

`components/ui/ContactForm.tsx` is a single reusable component used across all pages. It accepts a `recipientAlias` prop that determines which Cloudflare-routed email address receives the submission.

**Usage pattern:**

```tsx
// Home page → hello@udobots.com
<ContactForm
  recipientAlias="hello"
  submitLabel="Get a Free Quote"
  variant="dark"
/>

// About page → info@udobots.com
<ContactForm
  recipientAlias="info"
  submitLabel="Send Message"
  variant="light"
/>

// Contact page → contact@udobots.com
<ContactForm
  recipientAlias="contact"
  submitLabel="Send Message"
  variant="light"
/>

// Careers page → hiring@udobots.com
<ContactForm
  recipientAlias="hiring"
  submitLabel="Submit Application"
  variant="dark"
/>
```

**Available props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `recipientAlias` | `'hello' \| 'info' \| 'contact' \| 'hiring'` | required | Which CF alias to route to |
| `submitLabel` | `string` | `'Send Message'` | Button label |
| `messagePlaceholder` | `string` | `'Tell us how we can help...'` | Textarea placeholder |
| `variant` | `'dark' \| 'light'` | `'light'` | Visual theme |
| `defaultInterest` | `string` | `''` | Pre-populated interest field |
| `onSuccess` | `() => void` | — | Called after successful send |

### The API Route

`app/api/contact/route.ts` handles all form submissions. Flow:

1. Rate limit check (3 requests/IP/minute via in-memory store)
2. Parse and validate the request body
3. Call `getEmailAddress(recipientAlias)` to resolve the target address
4. Send via Resend (or log to console in dev)
5. Send auto-reply to the submitter
6. Return `{ success: true }` or an error JSON

---

## 5. Cloudflare Email Routing — How It Works

Cloudflare Email Routing is a **free** DNS-level email forwarding service. It intercepts emails sent to your custom domain addresses and forwards them to a real inbox — without you needing to set up an email server.

### How it's configured for UDoBots:

```
hello@udobots.com    ──→ udobots@uds.in  (Home page enquiries)
info@udobots.com     ──→ udobots@uds.in  (About page enquiries)
contact@udobots.com  ──→ udobots@uds.in  (Contact page enquiries)
hiring@udobots.com   ──→ udobots@uds.in  (Careers applications)
```

### What happens when a form is submitted:

```
User fills form on website
        ↓
Next.js /api/contact route
        ↓
Resend sends email to → hello@udobots.com (for example)
        ↓
Cloudflare Email Routing intercepts it
        ↓
Cloudflare forwards it to → udobots@uds.in
        ↓
Your team reads it in their inbox
```

### Why different aliases matter:

Using separate aliases (`hello@`, `info@`, `hiring@`) lets you:
- Filter and label emails by origin page in your inbox
- Set up separate forwarding rules per alias if needed
- Track which part of the site generates the most leads
- Route hiring emails separately in the future (e.g. to an ATS)

---

## 6. DNS & Domain Setup

For `udobots.com` hosted on Cloudflare, the DNS records look like this:

### Website (Vercel or any host)

```
Type    Name    Value                      Proxy
A       @       76.76.21.21               ✓ Proxied
CNAME   www     cname.vercel-dns.com      ✓ Proxied
```

### Cloudflare Email Routing (auto-added by CF)

```
Type    Name    Value                             Priority
MX      @       route1.mx.cloudflare.net         20
MX      @       route2.mx.cloudflare.net         40
MX      @       route3.mx.cloudflare.net         80
TXT     @       v=spf1 include:_spf.mx.cloudflare.net ~all
```

These MX records tell the internet: *"Send mail for @udobots.com to Cloudflare's mail servers."* Cloudflare then forwards it according to your Email Routing rules.

### Resend Sender Domain (for outbound from Resend)

To send from a branded `from` address (e.g. `no-reply@udobots.com`) instead of Resend's shared domain:

1. In Resend dashboard → Domains → Add `udobots.com`
2. Add the provided DKIM TXT records to Cloudflare DNS
3. Update the `from` field in `app/api/contact/route.ts`

---

## 7. Resend Integration

[Resend](https://resend.com) is the transactional email service used to deliver form submission emails.

**Why Resend:**
- 3,000 free emails/month (100/day)
- First-class Next.js integration
- Clean TypeScript SDK
- Great deliverability

**Setup:**
1. Create account at https://resend.com
2. Create an API key under API Keys
3. Add to `.env.local` as `RESEND_API_KEY=re_...`

**Current sender:** `onboarding@resend.dev` (Resend's shared domain)

To upgrade to branded sending from `noreply@udobots.com`, verify the domain in the Resend dashboard and update the `from` fields in `app/api/contact/route.ts`.

---

## 8. Email Alias Routing Matrix

| Page | Form Component | `recipientAlias` | Sends to | CF Forwards to |
|---|---|---|---|---|
| `/` (Home) | `ContactForm` | `hello` | hello@udobots.com | udobots@uds.in |
| `/about` | — (CTA link) | — | — | — |
| `/contact` | `ContactForm` | `contact` | contact@udobots.com | udobots@uds.in |
| `/careers` | `CareersApplicationForm` | `hiring` | hiring@udobots.com | udobots@uds.in |

---

## 9. Changes Made

### New Files
| File | Description |
|---|---|
| `types/index.ts` | Shared TypeScript interfaces |
| `lib/validation.ts` | Reusable form validation logic |
| `components/ui/ContactForm.tsx` | Unified, alias-configurable contact form |
| `components/layout/Header.tsx` | Refactored Header (Careers nav link added) |
| `components/layout/Footer.tsx` | Refactored Footer (Careers link added) |
| `components/layout/Section.tsx` | Moved from `components/` |
| `components/layout/PageHero.tsx` | Moved from `components/` |
| `components/ui/ScrollReveal.tsx` | Moved from `components/` |
| `components/ui/AnimatedCounter.tsx` | Moved from `components/` |
| `components/ui/TestimonialCarousel.tsx` | Moved from `components/` |
| `app/careers/page.tsx` | New careers page |
| `app/careers/CareersApplicationForm.tsx` | Client wrapper for careers form |
| `.env.example` | Environment variable template |

### Modified Files
| File | Changes |
|---|---|
| `lib/site-config.ts` | Added `emailAliases` config + `getEmailAddress()` helper; updated contact email to `hello@udobots.com` |
| `app/api/contact/route.ts` | Per-alias routing, branded HTML emails, auto-reply, improved error handling |
| `app/contact/page.tsx` | Replaced inline form with `ContactForm` component (alias: `contact`) |
| `app/page.tsx` | Replaced `ContactFormInline` with `ContactForm` (alias: `hello`) |
| `app/layout.tsx` | Added skip-to-content link for accessibility |
| `app/globals.css` | Added smooth scroll + brand-consistent focus ring |

### Structural Changes
- `components/` split into `components/layout/` and `components/ui/`
- `ContactFormInline` removed — replaced with the unified `ContactForm`
- All pages updated to use new import paths

---

## 10. Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set the following environment variables in the Vercel dashboard:
- `RESEND_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

### Other Hosts

Any Node.js host (Railway, Render, Fly.io, AWS, etc.) works with:

```bash
npm run build
npm run start
```
