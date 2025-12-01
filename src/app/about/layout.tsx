import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Team',
  description:
    'Learn about VizeEST\'s mission to revolutionize structural steel estimation. Meet our leadership team of industry veterans and AI experts committed to transforming construction technology.',
  keywords: [
    'about VizeEST',
    'steel estimation company',
    'construction technology team',
    'structural engineering AI',
    'steel fabrication innovation',
  ],
  openGraph: {
    title: 'About VizeEST - Our Mission & Team',
    description:
      'Discover how VizeEST is transforming the steel fabrication industry with AI-powered estimation. Meet our team of industry veterans and technology experts.',
    url: 'https://vizeest.com/about',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About VizeEST - Transforming Steel Estimation',
      },
    ],
  },
  twitter: {
    title: 'About VizeEST - Our Mission & Team',
    description:
      'Discover how VizeEST is transforming the steel fabrication industry with AI-powered estimation.',
  },
  alternates: {
    canonical: 'https://vizeest.com/about',
  },
};

// JSON-LD for About page
const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'VizeEST',
    description: 'AI-Powered Structural Steel Estimation Platform',
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 150,
    },
    knowsAbout: [
      'Structural Steel Estimation',
      'AI/Machine Learning',
      'Construction Technology',
      'BIM Integration',
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  );
}
