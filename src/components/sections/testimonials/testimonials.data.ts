/**
 * Content for the testimonials section.
 *
 * Illustrative quotes representative of the platform's use cases — not
 * verified customer statements. Attributed by role and industry only
 * (no invented names or company names), so nothing here reads as a
 * specific real-world endorsement. Swap in verified quotes as they
 * become available.
 */

export const testimonialsEyebrow = "Don't Just Take Our Word For It";

export interface TestimonialItem {
  id: string;
  /** Short label for the industry tile (keeps the tile a clean square). */
  tileLabel: string;
  quote: string;
  role: string;
  industry: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 'oil-gas',
    tileLabel: 'Oil & Gas',
    quote:
      'Automated geofence alerts mean our team knows about a breach before it becomes a loss. What used to take hours of manual review now happens in real time.',
    role: 'Operations Director',
    industry: 'Oil & Gas',
  },
  {
    id: 'power',
    tileLabel: 'Power Sector',
    quote:
      'We monitor hundreds of kilometers of right-of-way with a fraction of the patrol staff we used to need. The AI flags real threats and filters out the noise.',
    role: 'Head of Security',
    industry: 'Power Sector',
  },
  {
    id: 'defence',
    tileLabel: 'Defence',
    quote:
      "Perimeter monitoring used to mean gaps in coverage overnight. Now every anomaly is logged, mapped, and escalated automatically, day or night.",
    role: 'Program Director',
    industry: 'Defence & Security',
  },
  {
    id: 'ports',
    tileLabel: 'Coastal ISR',
    quote:
      'Maritime surveillance used to rely on manual patrols and guesswork. Now we have continuous coverage and an alert the moment something looks wrong.',
    role: 'Port Security Lead',
    industry: 'Ports & Coastal Authorities',
  },
  {
    id: 'telecom',
    tileLabel: 'Telecom',
    quote:
      'The geospatial mapping alone changed how we work — one source of truth for every asset and every incident, instead of five spreadsheets.',
    role: 'Infrastructure Manager',
    industry: 'Telecom Carriers',
  },
];
