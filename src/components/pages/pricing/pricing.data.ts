/**
 * Content for the Pricing page. No numbers anywhere — every tier ends in
 * "Contact Sales" by design, since deployments are scoped per site/sensor
 * count and sales quotes accordingly.
 *
 * DRAFT: the feature breakdown per tier is a starting point assembled from
 * capabilities already described elsewhere on the site (Platform, Splits,
 * footer Capabilities column) — not an authoritative product/packaging
 * decision. Review and adjust which features land in which tier before
 * treating this as final.
 */

export const pricingHeading = {
  eyebrow: 'Pricing',
  title: 'Plans Built Around Your Operation',
  subtitle:
    "Every deployment is different — pick the tier that fits your scale, then talk to our team for a quote tailored to your sites, sensors, and integrations.",
} as const;

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  /** Shown instead of a price. */
  priceLabel: string;
  features: string[];
  cta: string;
  /** Visually highlighted as the suggested starting point. */
  recommended?: boolean;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

/**
 * Deliberately non-committal on specifics (contract length, exact billing
 * cadence) — those get scoped during the sales conversation, not fabricated
 * here. Draft content; adjust as real answers get finalized.
 */
export const pricingFaqs: PricingFaqItem[] = [
  {
    question: 'How is pricing determined?',
    answer:
      "Pricing is based on the number of sites, sensors, and drones you're monitoring, plus which integrations and support level you need. Our team scopes a quote after a short consultation.",
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Yes — you can move to a higher tier as your operation grows. Your account team will help adjust your deployment and quote accordingly.',
  },
  {
    question: 'Do you support custom integrations?',
    answer:
      'Professional and Custom plans support tailored integrations with your existing systems and workflows. Contact sales to discuss your specific requirements.',
  },
  {
    question: 'What does onboarding look like?',
    answer:
      'Every plan includes guided setup. Professional and Custom plans add dedicated onboarding support and, where needed, on-site deployment and training.',
  },
  {
    question: 'Is there a minimum contract length?',
    answer:
      'Contract terms are discussed and scoped during your sales consultation, based on the size and complexity of your deployment.',
  },
  {
    question: "What's included in support?",
    answer:
      'Basic includes email support; Premium adds priority response; Professional includes a dedicated account manager; Custom plans include SLA-backed support.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Single-site monitoring to get started.',
    priceLabel: 'Contact for pricing',
    features: [
      'Live geospatial mapping',
      'Real-time drone feed',
      'Basic incident alerts',
      'Single-site deployment',
      'Email support',
    ],
    cta: 'Contact Sales',
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'AI detection and visibility across multiple sites.',
    priceLabel: 'Contact for pricing',
    features: [
      'Everything in Basic',
      'AI threat & anomaly detection',
      'Multi-site dashboard',
      'Historical playback & reporting',
      'Priority support',
    ],
    cta: 'Contact Sales',
    recommended: true,
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Advanced automation for multi-region operations.',
    priceLabel: 'Contact for pricing',
    features: [
      'Everything in Premium',
      'Multi-drone command & control',
      'Automated incident escalation',
      'Thermal anomaly mapping',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
  },
  {
    id: 'custom',
    name: 'Custom',
    tagline: 'Tailored deployments for complex, large-scale operations.',
    priceLabel: 'Custom scope',
    features: [
      'Everything in Professional',
      'Custom integrations & API access',
      'On-site deployment & training',
      'SLA-backed support',
      'Tailored compliance & security add-ons',
    ],
    cta: 'Contact Sales',
  },
];
