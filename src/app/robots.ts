import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // DEVELOPMENT MODE: Disallow all crawling
  // TODO: Remove this block and uncomment production rules when ready to launch
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  };

  /* PRODUCTION RULES - Uncomment when ready to launch
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://vizeest.com/sitemap.xml',
    host: 'https://vizeest.com',
  };
  */
}
