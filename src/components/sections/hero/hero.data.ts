/** Content for the hero + partner strip. Kept beside the section for locality. */

export interface HeroSlide {
  eyebrow: string;
  headline: string[];
  subhead: string;
  image: { src: string; alt: string };
  /** CSS object-position for the background image (framing varies per photo). */
  imagePosition: string;
}

/**
 * Each slide pairs one capability with a backdrop photo that evokes it —
 * the hero rotates through the platform's range instead of naming it all at once.
 * Photos: Erin Hervey, Tasha Kostyuk, Mike Benna (Unsplash).
 */
export const heroSlides: HeroSlide[] = [

  {
    eyebrow: 'AI-Powered Detection',
    headline: ['Threats Detected', 'Before They Escalate'],
    subhead:
      'Weapon detection, unauthorized entry, and object recognition — flagged automatically from live video feeds, the instant they happen.',
    image: {
      src: '/landing/hero/control-room.jpeg',
      alt: 'Operator monitoring a wall of live camera feeds',
    },
    imagePosition: 'center 30%',
  },
  {
    eyebrow: 'Live Geospatial Intelligence',
    headline: ['See Every Asset,', 'Every Move, In Real Time'],
    subhead:
      "Track people, vehicles, and equipment on an interactive live map — with geofences, heatmaps, and instant alerts the moment something crosses a line it shouldn't.",
    image: {
      src: '/landing/hero/aerial-city.jpg',
      alt: 'Aerial view of a city',
    },
    imagePosition: 'center 40%',
  },
  {
    eyebrow: 'Asset Protection',
    headline: ['Stop Pipeline Vandalism', 'and Theft in Real Time'],
    subhead:
      'Thermal imaging and AI analysis catch structural damage, tampering, and theft across every pipeline and site — before losses add up.',
    image: {
      src: '/landing/hero/pipeline.jpg',
      alt: 'Industrial pipeline running through open terrain',
    },
    imagePosition: 'center 55%',
  },
];

export const heroCtas = {
  primaryCta: 'Get Started',
  secondaryCta: 'Request a Demo',
} as const;

export const partnerContent = {
  lead: "Protecting assets of the world's leading companies",
} as const;

/** `small` renders the wide wordmarks at a reduced height (original `.logo-cell.sm`). */
export const clientLogos = [
  { src: '/landing/clients/metashape.webp', alt: 'Metashape', small: true },
  { src: '/landing/clients/aerosmart.webp', alt: 'AeroSmart', small: false },
  { src: '/landing/clients/falcon.webp', alt: 'Falcon', small: false },
  { src: '/landing/clients/iris.webp', alt: 'Iris', small: false },
  { src: '/landing/clients/transcorp.webp', alt: 'Transcorp', small: true },
] as const;

export const ratings = [
  { score: '4.5/5', platform: 'G2' },
  { score: '4.6/5', platform: 'Capterra' },
] as const;
