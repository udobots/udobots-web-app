import type { Stat, Benefit, PlatformFeature, ProcessStep, Industry, NewsItem } from '@/types';

export const stats: Stat[] = [
  { end: 5, suffix: 'x', label: 'Faster Than Traditional' },
  { end: 0, suffix: '', label: 'Workers at Height' },
  { end: 70, suffix: '%', label: 'Less Water Used' },
  { end: 100, suffix: '%', label: 'Made in India' },
];

export const benefits: Benefit[] = [
  {
    title: 'Zero Workers at Height',
    desc: 'No rope access. No scaffolding. No BMUs. Our drones handle the risk while your entire team stays safely on the ground.',
    img: '/images/drone-setup.jpg',
  },
  {
    title: '5x Faster Turnaround',
    desc: 'Complete facade cleaning jobs in hours instead of days. Less setup, less disruption, less downtime for your facility.',
    img: '/images/drone-action-wide.jpg',
  },
  {
    title: 'Reduced Water & Cost',
    desc: 'Precision spraying with soft-wash and DI rinse techniques uses significantly less water and eliminates heavy equipment rentals.',
    img: '/images/drone-facade.jpg',
  },
];

export const platformFeatures: PlatformFeature[] = [
  { label: 'Tethered Power & Water', desc: 'Unlimited flight time with ground-based power and water supply.' },
  { label: 'Soft Wash & Rinse Modes', desc: 'Adjustable pressure for glass, cladding, concrete, and solar panels.' },
  { label: 'Semi-Autonomous Flight', desc: 'GPS-guided flight paths with manual override by trained pilot.' },
  { label: 'Mobile Ground Station', desc: 'Self-contained truck with generator, water tank, and control systems.' },
];

export const steps: ProcessStep[] = [
  {
    num: '01',
    title: 'Site Survey & Assessment',
    desc: 'We visit your site, assess the facade material, height, and access conditions. A detailed scope and safety plan is prepared.',
    img: '/images/building-aerial.jpg',
  },
  {
    num: '02',
    title: 'Equipment Mobilisation',
    desc: 'Our self-contained mobile unit arrives with the drone, ground station, water supply, and tethered power system. Setup takes under an hour.',
    img: '/images/mobile-setup.jpg',
  },
  {
    num: '03',
    title: 'Autonomous Cleaning',
    desc: 'The drone cleans floor by floor using soft-wash or high-pressure rinse, guided by our pilot and safety crew on the ground.',
    img: '/images/drone-rinse.jpg',
  },
  {
    num: '04',
    title: 'Inspection & Report',
    desc: 'Post-job media capture, before/after documentation, and a billing-ready report delivered to your team.',
    img: '/images/operator-portrait.jpg',
  },
];

export const industries: Industry[] = [
  {
    title: 'IT Parks & Tech Campuses',
    desc: 'Glass facade cleaning for multi-building campuses with minimal disruption to tenants.',
    img: '/images/stock-tech-park.jpg',
  },
  {
    title: 'Airports & Public Infrastructure',
    desc: 'Large-scale facade and terminal cleaning meeting strict safety and access requirements.',
    img: '/images/stock-airport.jpg',
  },
  {
    title: 'Industrial & Manufacturing',
    desc: 'Cladding, roofing, and solar panel cleaning across warehouses and factory buildings.',
    img: '/images/stock-warehouse.jpg',
  },
  {
    title: 'Hotels & Commercial Complexes',
    desc: 'High-rise hotels, malls, and office towers where appearance and tenant comfort matter.',
    img: '/images/stock-hotel.jpg',
  },
];

export const safetyChecklist: string[] = [
  'Pre-flight Checklists',
  'Job Safety Analysis',
  'Weather Monitoring',
  'Emergency Procedures',
  'Tethered Operations',
  'Insured & Certified',
];

export const news: NewsItem[] = [
  {
    title: 'Drone Facade Cleaning Demo at DHL Facility',
    excerpt:
      'U Do Bots successfully completed a live facade cleaning demonstration at a DHL logistics hub, showcasing the tethered drone system in action.',
    img: '/images/hero-drone.jpg',
    date: 'January 2026',
    href: '/case-studies',
  },
  {
    title: 'Make in India: Locally Built, Globally Ready',
    excerpt:
      'Our cleaning drones are designed and assembled in India — fully serviceable locally with no import dependency for parts and maintenance.',
    img: '/images/drone-topview.jpg',
    date: 'December 2025',
    href: '/about',
  },
  {
    title: 'Why Solar Panel Cleaning Needs Drones',
    excerpt:
      'Manual cleaning of rooftop solar arrays is slow, risky, and often damages panels. Drone-based soft wash solves all three.',
    img: '/images/stock-solar-panels.jpg',
    date: 'November 2025',
    href: '/solutions/solar-panel-cleaning',
  },
];
