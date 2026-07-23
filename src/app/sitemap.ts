import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://loctiva.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/pricing', '/product'];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
