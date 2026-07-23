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
 * Images reuse existing platform screenshots/photos (no stock imagery),
 * each a reasonable visual fit for the industry it represents.
 */
export const industries: IndustryItem[] = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    image: { src: '/landing/hero/pipeline.jpg', width: 2400, height: 1600 },
  },
  {
    id: 'defence',
    title: 'Defence & Security',
    image: {
      src: '/landing/hero/control-room.jpeg',
      width: 1536,
      height: 1024,
    },
  },
  {
    id: 'power',
    title: 'Power Sector',
    image: { src: '/landing/hero/aerial-city.jpg', width: 2400, height: 1635 },
  },
  {
    id: 'telecom',
    title: 'Telecom Carriers',
    image: { src: '/landing/dashboard.png', width: 2480, height: 1950 },
  },
  {
    id: 'ports',
    title: 'Ports & Coastal Authorities',
    image: { src: '/landing/map.png', width: 1180, height: 1080 },
  },
  {
    id: 'infrastructure',
    title: 'Critical Infrastructure',
    image: { src: '/landing/chart-analysis.png', width: 1920, height: 1807 },
  },
];
