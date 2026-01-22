import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Founder Accelerator Program - 75% Off Steel Estimation',
  description:
    'Join the VizeEST Founder Accelerator Program. Get $499/mo (75% off $1,999) with unlimited drawings, 24/7 phone support, and priority access. Limited spots for early adopters.',
  keywords: [
    'VizeEST accelerator',
    'steel estimation discount',
    'founder program',
    'construction software deal',
    'steel fabrication startup',
    'early adopter pricing',
  ],
  openGraph: {
    title: 'VizeEST Founder Accelerator Program - 75% Off',
    description:
      'Limited time: $499/mo (was $1,999). Unlimited drawings, 24/7 phone support, and priority access for early adopters.',
    url: 'https://vizeest.com/accelerators',
    type: 'website',
    images: [
      {
        url: '/og-accelerators.png',
        width: 1200,
        height: 630,
        alt: 'VizeEST Founder Accelerator Program - 75% Off',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VizeEST Founder Accelerator - 75% Off',
    description:
      'Limited spots: $499/mo (was $1,999). Join 25 steel fabricators getting early access.',
    images: ['/og-accelerators.png'],
  },
  alternates: {
    canonical: 'https://vizeest.com/accelerators',
  },
};

const acceleratorsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VizeEST Founder Accelerator Program',
  description: 'Limited time founder pricing for steel estimation platform',
  mainEntity: {
    '@type': 'Offer',
    name: 'Founder Accelerator Program',
    price: '499',
    priceCurrency: 'USD',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/LimitedAvailability',
    description: '75% off - Limited to early adopters',
    itemOffered: {
      '@type': 'SoftwareApplication',
      name: 'VizeEST',
      applicationCategory: 'BusinessApplication',
    },
  },
};

export default function AcceleratorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(acceleratorsJsonLd) }}
      />
      {children}
    </>
  );
}
