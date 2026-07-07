/**
 * Central site configuration — single source of truth for metadata and
 * navigation. Keeps content out of components so copy/links are easy to audit.
 */
export const siteConfig = {
  name: 'Loctiva',
  title: 'Loctiva — Geospatial Asset Management for Enterprise',
  description:
    'Loctiva is a unified geospatial ISR platform delivering real-time monitoring, threat detection, and operational intelligence across every critical asset you manage.',
  // OG/Twitter use a slightly different lede in the original markup.
  socialDescription:
    'A unified geospatial ISR platform delivering real-time monitoring, threat detection, and operational intelligence across every critical asset you manage.',
  ogImage: '/landing/nav-logo.png',
  // The product app lives on a separate domain/project now — defaults to
  // production, override locally via NEXT_PUBLIC_COMMAND_APP_URL for testing
  // against a local command-app dev server (e.g. http://localhost:3001).
  commandAppUrl: process.env.NEXT_PUBLIC_COMMAND_APP_URL ?? 'https://command.loctiva.com',
} as const;

export const navLinks = [
  { label: 'Product', href: '#platform' },
  { label: 'Solutions', href: '#delivers' },
  { label: 'Pricing', href: '#impact' },
  { label: 'Documentation', href: '#trust' },
] as const;
