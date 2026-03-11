export const protocols = [
  {
    phase: 'Pre-Flight',
    items: [
      'Job Safety Analysis (JSA) completed and signed',
      'Equipment inspection — drone, hose, pump, nozzles',
      'Battery and power system verification',
      'Communication check between ground and pilot',
      'Weather assessment and go/no-go decision',
      'Site perimeter and exclusion zone setup',
    ],
  },
  {
    phase: 'During Operations',
    items: [
      'Real-time wind speed monitoring with auto-pause',
      'Tethered operation prevents flyaway incidents',
      'Geo-fencing restricts flight to approved zones',
      'Operator override available at all times',
      'Ground crew maintains visual line of sight',
      'Continuous telemetry monitoring on tablet',
    ],
  },
  {
    phase: 'Post-Flight',
    items: [
      'Site walkthrough for equipment and debris',
      'Equipment inspection, cleaning, and logging',
      'Post-job report filed within 24 hours',
      'Before/after documentation archived',
      'Incident or near-miss reporting if applicable',
      'Maintenance log updated for drone and kit',
    ],
  },
];

export const safetyImages = [
  { src: '/images/drone-setup.jpg', alt: 'Safety crew briefing in PPE', label: 'Crew Briefing & PPE' },
  { src: '/images/drone-launchpad.jpg', alt: 'Drone on launchpad ready for takeoff', label: 'Pre-Flight Setup' },
  { src: '/images/control-unit.jpg', alt: 'Control unit for monitoring', label: 'Real-Time Monitoring' },
  { src: '/images/drone-topview.jpg', alt: 'Top-down view of drone with operator', label: 'Operator Oversight' },
  { src: '/images/drone-cleaning.jpg', alt: 'Tethered power system', label: 'Tethered Power System' },
  { src: '/images/mobile-setup.jpg', alt: 'Mobile deployment setup', label: 'Ground Kit Setup' },
];

export const certifications = [
  'DGCA-compliant drone pilot certification',
  'Standard Operating Procedure (SOP) documentation',
  'Job Safety Analysis (JSA) templates for every job type',
  'Equipment maintenance logs and inspection records',
  'Insurance coverage for drone operations',
  'First aid trained crew on every job site',
];
