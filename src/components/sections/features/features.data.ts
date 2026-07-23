/** Content for the "Live Geospatial" heading + the 4-up feature card row. */

export const featuresHeading = {
  title: "Live Geospatial Command for Every Asset You Manage",
  subtitle:
    "Monitor, analyze, and secure high-value assets with an AI-driven system built for reliability, speed, and enterprise-grade performance.",
} as const;

export interface FeatureCardItem {
  /** Card photo (Unsplash, free-to-use license) — alt intentionally empty, decorative. */
  image: { src: string; width: number; height: number };
  title: string;
  body: string;
  cta: string;
}

export const featureCards: FeatureCardItem[] = [
  {
    image: { src: "/landing/features/security.jpg", width: 1200, height: 673 },
    title: "Enterprise-Grade Security",
    body: "Encrypted communications, audit trails, permission-based access, and compliance-level data handling.",
    cta: "Get Started",
  },
  {
    image: { src: "/landing/features/monitoring.jpg", width: 1200, height: 800 },
    title: "Real-Time Monitoring",
    body: "Continuous visibility into asset movement, status, and operational integrity.",
    cta: "Analyze trends",
  },
  {
    image: { src: "/landing/features/incident-response.jpg", width: 1200, height: 801 },
    title: "Incident Response Acceleration",
    body: "Centralized workflows to detect, confirm, resolve, and document incidents.",
    cta: "Get Started",
  },
  {
    image: { src: "/landing/features/threat-detection.jpg", width: 1200, height: 801 },
    title: "Predictive Threat Detection",
    body: "AI models that analyze anomalies, risk patterns, and environmental signals.",
    cta: "Get Started",
  },
];
