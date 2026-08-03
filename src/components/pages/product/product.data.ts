/** Content for the Product page. */

export const productHeading = {
  eyebrow: 'Product',
  title: 'One Platform. Every Critical Environment.',
  subtitle:
    'Live drone feeds, AI threat detection, and geospatial intelligence — unified into a single command view built for the way critical infrastructure actually operates.',
  /**
   * Set to a video file path (e.g. '/videos/product-hero.mp4') to swap the
   * hero background from the static poster below to an autoplay video —
   * ProductHero already renders a <video> tag once this is non-empty.
   */
  videoSrc: '',
  poster: {
    src: '/landing/industries/ports.jpg',
    alt: 'Aerial drone view of a container port',
  },
} as const;

export const productProblem = {
  eyebrow: 'The Problem',
  title: 'Your Assets Are Only as Safe as What You Can See',
  body: 'Pipeline theft, unauthorized access, and equipment damage rarely happen where a guard is standing or a camera is pointed. By the time someone notices, the loss has already happened — and there is no record of what, when, or who.',
  points: [
    {
      title: 'Blind Spots Everywhere',
      body: 'Miles of perimeter, one guard shift. Most of a site sits unmonitored, most of the time.',
    },
    {
      title: 'Too Slow to Matter',
      body: 'Manual patrols and static cameras catch incidents after the fact — not while they can still be stopped.',
    },
    {
      title: 'No Proof, No Recourse',
      body: 'Without continuous, geotagged footage, incidents go unresolved and losses go unclaimed.',
    },
  ],
  closing:
    'Loctiva closes the gap — live eyes on every asset, alerts the instant something looks wrong, and a record you can trust.',
  /**
   * Set to a real YouTube video ID to enable the embed (same facade pattern
   * as Dashboard). Leave empty to show the poster photo with a disabled
   * "coming soon" badge instead of a broken/wrong video.
   */
  videoId: '',
  poster: {
    src: '/landing/industries/defence.jpg',
    alt: 'Drone in flight over open terrain',
  },
} as const;

export const liveCommandView = {
  eyebrow: 'Live Command View',
  title: 'Every Feed. One Screen. Zero Delay.',
  subtitle:
    'Stream live video from every drone in the fleet into a single command view — switch between feeds instantly, from any device, at the latency of watching it happen in person.',
  stats: [
    { value: '<500ms', label: 'Latency' },
    { value: 'Up to 12', label: 'Concurrent Feeds' },
    { value: '4K / 30fps', label: 'Stream Quality' },
  ],
  feeds: [
    {
      id: 'pipeline-sector-4',
      label: 'DRONE-01 · Pipeline Sector 4',
      image: {
        src: '/landing/hero/pipeline.jpg',
        alt: 'Live drone feed over a pipeline corridor',
      },
    },
    {
      id: 'port-terminal',
      label: 'DRONE-02 · Port Terminal',
      image: {
        src: '/landing/industries/ports.jpg',
        alt: 'Live drone feed over a container port',
      },
    },
    {
      id: 'substation-perimeter',
      label: 'DRONE-03 · Substation Perimeter',
      image: {
        src: '/landing/industries/power.jpg',
        alt: 'Live drone feed over a solar power installation',
      },
    },
    {
      id: 'urban-corridor',
      label: 'DRONE-04 · Urban Corridor',
      image: {
        src: '/landing/hero/aerial-city.jpg',
        alt: 'Live drone feed over a city corridor',
      },
    },
  ],
} as const;

export const aiDetection = {
  eyebrow: 'AI Detection Engine',
  title: "It Doesn't Blink. It Doesn't Miss.",
  body: 'Every frame from every drone runs through models trained to recognize what matters on a critical site — people, vehicles, equipment, and wildlife — and to flag the moment something doesn’t belong.',
  categories: [
    {
      title: 'Intrusion & Theft',
      body: 'Unauthorized entry, tampering, and equipment removal flagged the instant it happens.',
    },
    {
      title: 'People & PPE',
      body: 'Detects personnel on site and verifies safety-gear compliance in restricted zones.',
    },
    {
      title: 'Vehicles & Equipment',
      body: 'Identifies vehicles, machinery, and assets — and flags any that shouldn’t be there.',
    },
    {
      title: 'Wildlife & Livestock',
      body: 'Distinguishes animals from human threats so alerts stay accurate, not noisy.',
    },
  ],
  demo: {
    src: '/landing/industries/infrastructure.jpg',
    alt: 'Aerial view of personnel on a construction site with AI detection overlays',
    zone: { label: 'Restricted Zone', left: 20, top: 42, width: 62, height: 46 },
    boxes: [
      { label: 'Person · 97%', left: 30, top: 65, width: 7, height: 17 },
      { label: 'Person · 95%', left: 44, top: 67, width: 7, height: 16 },
      { label: 'Person · 98%', left: 56, top: 62, width: 7, height: 18 },
      { label: 'Person · 96%', left: 66, top: 58, width: 7, height: 19 },
    ],
  },
} as const;

export const precisionMapping = {
  eyebrow: 'Precision Mapping & Wayline Planning',
  title: 'Draw the Mission. The Drone Flies It.',
  subtitle:
    'Plan exact flight paths over any site — set waylines, geofences, and capture points once, then run the same precise mission on autopilot, every time.',
  stats: [
    { value: '±2cm', label: 'GPS Accuracy' },
    { value: '24', label: 'Waypoints / Mission' },
    { value: '100%', label: 'Repeatable Routes' },
  ],
  /** Percentage coordinates (0–100) within the map panel. */
  route: {
    waypoints: [
      { x: 12, y: 80 },
      { x: 27, y: 54 },
      { x: 43, y: 62 },
      { x: 58, y: 32 },
      { x: 74, y: 44 },
      { x: 82, y: 30 },
    ],
    /** Where the "in flight" marker sits — partway between two waypoints. */
    dronePosition: { x: 66, y: 38 },
    geofence: [
      { x: 6, y: 90 },
      { x: 18, y: 10 },
      { x: 94, y: 8 },
      { x: 96, y: 92 },
    ],
  },
} as const;

export const fleetDeployment = {
  eyebrow: 'Fleet & Rapid Deployment',
  title: 'From Case to Sky in Under 3 Minutes',
  body: 'No specialist required. Any operator unpacks the drone, the platform auto-calibrates and self-checks, and the mission launches — while the rest of the fleet stays visible and ready from one roster.',
  points: [
    {
      title: 'Rapid Deployment',
      body: 'Unpack, auto-calibrate, and launch in minutes — not a multi-step manual setup.',
    },
    {
      title: 'Centralized Fleet Roster',
      body: 'Status, battery, and location for every drone in the fleet, visible at a glance.',
    },
    {
      title: 'Automatic Hand-off',
      body: 'When one drone runs low, another launches to take over — coverage never drops.',
    },
  ],
  deployTime: { value: '<3 min', label: 'Field-Ready Time' },
  fleet: [
    { id: 'DRONE-01', location: 'Pipeline Sector 4', status: 'active', battery: 82 },
    { id: 'DRONE-02', location: 'Port Terminal', status: 'active', battery: 91 },
    { id: 'DRONE-03', location: 'Substation Perimeter', status: 'charging', battery: 34 },
    { id: 'DRONE-04', location: 'Urban Corridor', status: 'standby', battery: 100 },
    { id: 'DRONE-05', location: 'Depot Alpha', status: 'deploying', battery: 76 },
  ],
} as const;

export const instantAlerts = {
  eyebrow: 'Instant Alerts',
  title: 'The Moment Something’s Wrong, You’ll Know',
  body: 'Every AI detection, geofence breach, and mission event is pushed the instant it happens — to a phone, a desk, or a whole response team — so nothing waits for someone to notice.',
  points: [
    {
      title: 'Real-Time Push Alerts',
      body: 'Notified in seconds on phone, desktop, or radio — the instant AI flags something.',
    },
    {
      title: 'Severity-Based Routing',
      body: 'Critical alerts escalate immediately; routine updates stay out of the way.',
    },
    {
      title: 'Full Alert History',
      body: 'Every alert logged with time, location, and footage, ready for later review.',
    },
  ],
  notifications: [
    {
      id: 'intrusion',
      severity: 'critical',
      title: 'Intrusion Detected',
      body: 'Person flagged at Pipeline Sector 4 · 98% confidence',
    },
    {
      id: 'perimeter',
      severity: 'warning',
      title: 'Perimeter Breach',
      body: 'Unauthorized vehicle near Substation Perimeter',
    },
    {
      id: 'mission',
      severity: 'info',
      title: 'Mission Complete',
      body: 'DRONE-02 completed patrol at Port Terminal',
    },
  ],
} as const;

export const evidenceReporting = {
  eyebrow: 'Evidence, Reporting & Analytics',
  title: 'Every Incident, Documented. Every Trend, Visible.',
  subtitle:
    'Every capture is timestamped, geotagged, and locked against tampering the moment it happens — building both a record you can act on and a picture of what’s changing across your sites.',
  chart: {
    title: 'Flagged Incidents',
    period: 'Last 6 Months',
    change: { value: '-79%', label: 'vs. Feb' },
    months: [
      { label: 'Feb', count: 19 },
      { label: 'Mar', count: 15 },
      { label: 'Apr', count: 11 },
      { label: 'May', count: 8 },
      { label: 'Jun', count: 5 },
      { label: 'Jul', count: 4 },
    ],
  },
  log: {
    title: 'Evidence Log',
    entries: [
      {
        id: 'ev-1',
        title: 'Intrusion — Pipeline Sector 4',
        timestamp: 'Jul 24, 2026 · 14:32 UTC',
        hash: 'a3f9…7c2e',
      },
      {
        id: 'ev-2',
        title: 'Perimeter Breach — Substation Perimeter',
        timestamp: 'Jul 22, 2026 · 09:07 UTC',
        hash: 'e81b…4f90',
      },
      {
        id: 'ev-3',
        title: 'Equipment Tampering — Port Terminal',
        timestamp: 'Jul 19, 2026 · 22:15 UTC',
        hash: '5d2a…c31f',
      },
    ],
  },
} as const;

export const capabilitiesHeading = {
  eyebrow: 'Capabilities',
  title: 'Purpose-Built for Every Operational Need',
  subtitle:
    'From pipeline patrols to multi-drone command, every capability plugs into the same unified platform — mirrors the footer’s Capabilities column.',
} as const;

export type CapabilityIconName =
  | 'row-patrol'
  | 'threat'
  | 'gas-leak'
  | 'thermal'
  | 'perimeter'
  | 'maritime'
  | 'border'
  | 'multi-drone';

export interface CapabilityItem {
  id: string;
  icon: CapabilityIconName;
  title: string;
  body: string;
}

export const capabilities: CapabilityItem[] = [
  {
    id: 'row-patrol',
    icon: 'row-patrol',
    title: 'ROW Pipeline & Powerline Patrols',
    body: 'Automated aerial patrols along pipelines and transmission lines, flagging encroachment, vegetation risk, and structural change before they become incidents.',
  },
  {
    id: 'threat',
    icon: 'threat',
    title: 'AI Threat & Encroachment Detection',
    body: 'AI models trained to recognize unauthorized access, vehicles, and equipment near your assets — with alerts routed the moment something looks wrong.',
  },
  {
    id: 'gas-leak',
    icon: 'gas-leak',
    title: 'Gas-Leak & Hydrocarbon Sensing',
    body: 'Sensor and imagery-based detection of leaks and hydrocarbon anomalies across pipelines, tanks, and processing sites.',
  },
  {
    id: 'thermal',
    icon: 'thermal',
    title: 'Thermal Anomaly Mapping',
    body: 'Thermal imaging overlaid on your geospatial map to surface equipment faults, hot spots, and fire risk before they escalate.',
  },
  {
    id: 'perimeter',
    icon: 'perimeter',
    title: 'Perimeter & Compound Surveillance',
    body: 'Continuous monitoring of site boundaries with geofenced alerts the instant a perimeter is crossed.',
  },
  {
    id: 'maritime',
    icon: 'maritime',
    title: 'Maritime & Coastal ISR',
    body: 'Live vessel tracking and coastal surveillance for ports, terminals, and offshore assets.',
  },
  {
    id: 'border',
    icon: 'border',
    title: 'Border & Boundary Monitoring',
    body: 'Wide-area monitoring across borders and remote boundaries, combining drone feeds with automated anomaly detection.',
  },
  {
    id: 'multi-drone',
    icon: 'multi-drone',
    title: 'Multi-Drone Command & Control',
    body: 'Coordinate multiple drones from a single command view — flight paths, live feeds, and alerts in one place.',
  },
];
