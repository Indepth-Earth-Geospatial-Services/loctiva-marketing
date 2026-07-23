/** Content for the "Industries" coverflow carousel — mirrors the footer's Industries column. */

export const industriesHeading = {
  title: ['Built for Every', 'Critical Environment'],
  subtitle:
    'Most operators can capture aerial and sensor data. The challenge is watching it live, detecting risk early, and turning every mission into a clear response across every industry you serve.',
} as const;

export interface IndustryItem {
  id: string;
  title: string;
  image: { src: string; width: number; height: number };
}

/**
 * Dedicated photos per industry (Unsplash, free-to-use license), downloaded
 * locally rather than hotlinked. Chosen for a real thematic fit rather than
 * reusing generic screenshots from elsewhere on the site.
 */
export const industries: IndustryItem[] = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    image: { src: '/landing/industries/oil-gas.jpg', width: 1200, height: 800 },
  },
  {
    id: 'defence',
    title: 'Defence & Security',
    image: { src: '/landing/industries/defence.jpg', width: 1200, height: 900 },
  },
  {
    id: 'power',
    title: 'Power Sector',
    image: { src: '/landing/industries/power.jpg', width: 1200, height: 899 },
  },
  {
    id: 'telecom',
    title: 'Telecom Carriers',
    image: { src: '/landing/industries/telecom.jpg', width: 1200, height: 800 },
  },
  {
    id: 'ports',
    title: 'Ports & Coastal Authorities',
    image: { src: '/landing/industries/ports.jpg', width: 1200, height: 800 },
  },
  {
    id: 'infrastructure',
    title: 'Critical Infrastructure',
    image: { src: '/landing/industries/infrastructure.jpg', width: 1200, height: 800 },
  },
];
