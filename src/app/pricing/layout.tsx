import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Simple, Transparent Plans',
  description:
    'VizeEST pricing plans for steel estimation. Founder Accelerator Program at $499/mo (75% off). Enterprise custom pricing. 14-day free trial, no credit card required.',
  keywords: [
    'steel estimation pricing',
    'construction software pricing',
    'VizeEST cost',
    'steel takeoff software price',
    'estimation platform pricing',
    'construction SaaS pricing',
  ],
  openGraph: {
    title: 'VizeEST Pricing - Simple, Transparent Plans',
    description:
      'Founder Accelerator at $499/mo (75% off). Start with a 14-day free trial. No credit card required.',
    url: 'https://vizeest.com/pricing',
    images: [
      {
        url: '/og-pricing.png',
        width: 1200,
        height: 630,
        alt: 'VizeEST Pricing - Steel Estimation Plans',
      },
    ],
  },
  twitter: {
    title: 'VizeEST Pricing - Simple, Transparent Plans',
    description:
      'Founder Accelerator at $499/mo (75% off). 14-day free trial.',
  },
  alternates: {
    canonical: 'https://vizeest.com/pricing',
  },
};

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VizeEST Pricing',
  description: 'Steel estimation software pricing and plans',
  mainEntity: {
    '@type': 'Product',
    name: 'VizeEST',
    description: 'Structural steel estimation platform',
    offers: [
      {
        '@type': 'Offer',
        name: 'Founder Accelerator Program',
        price: '499',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        description: 'Limited time offer - 75% off regular price',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise',
        availability: 'https://schema.org/InStock',
        description: 'Custom pricing for large organizations',
      },
    ],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      {children}
    </>
  );
}
