import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
    userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/', '/unsubscribe/'],
    },
   ],
    sitemap: 'https://www.vizeest.com/sitemap.xml',
  }
}
