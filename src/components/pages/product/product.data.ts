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
