import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Intelligent Steel Estimation Tools',
  description:
    'Explore VizeEST\'s powerful features: intelligent beam detection, automated material take-offs, PDF & CAD support, visual verification, and enterprise-grade reporting for structural steel estimation.',
  keywords: [
    'steel estimation features',
    'beam detection software',
    'automated material take-off',
    'PDF beam detection',
    'CAD file processing',
    'steel fabrication tools',
    'construction estimation features',
  ],
  openGraph: {
    title: 'VizeEST Features - Intelligent Steel Estimation Tools',
    description:
      'Discover powerful features that reduce estimation time by 90%. Intelligent beam detection, automated take-offs, and enterprise reporting.',
    url: 'https://vizeest.com/features',
    images: [
      {
        url: '/og-features.png',
        width: 1200,
        height: 630,
        alt: 'VizeEST Features - Steel Estimation Platform',
      },
    ],
  },
  twitter: {
    title: 'VizeEST Features - Intelligent Steel Estimation',
    description:
      'Discover powerful features that reduce estimation time by 90%.',
  },
  alternates: {
    canonical: 'https://vizeest.com/features',
  },
};

const featuresJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VizeEST Features',
  description: 'Intelligent steel estimation features and capabilities',
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: 'VizeEST',
    applicationCategory: 'BusinessApplication',
    featureList: [
      'Intelligent Beam Detection',
      'Automated Material Take-offs',
      'PDF & CAD Support',
      'Visual Verification',
      'Enterprise Reporting',
      'Real-time Collaboration',
      'API Integration',
    ],
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresJsonLd) }}
      />
      {children}
    </>
  );
}
