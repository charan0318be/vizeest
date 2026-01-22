import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Steel Estimation for Every Team',
  description:
    'VizeEST solutions for steel fabricators, structural engineers, general contractors, and estimation teams. Streamline your workflow with intelligent estimation tools.',
  keywords: [
    'steel fabrication solutions',
    'structural engineering software',
    'contractor estimation tools',
    'steel estimator software',
    'construction project management',
    'steel takeoff solutions',
  ],
  openGraph: {
    title: 'VizeEST Solutions - Steel Estimation for Every Team',
    description:
      'Purpose-built solutions for steel fabricators, structural engineers, and contractors. Reduce estimation time by 90%.',
    url: 'https://vizeest.com/solutions',
    images: [
      {
        url: '/og-solutions.png',
        width: 1200,
        height: 630,
        alt: 'VizeEST Solutions - Steel Estimation Platform',
      },
    ],
  },
  twitter: {
    title: 'VizeEST Solutions - Steel Estimation for Every Team',
    description:
      'Purpose-built solutions for steel fabricators, structural engineers, and contractors.',
  },
  alternates: {
    canonical: 'https://vizeest.com/solutions',
  },
};

const solutionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VizeEST Solutions',
  description: 'Steel estimation solutions for different industries and teams',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Steel Fabricators',
        description: 'Streamline estimation for fabrication shops',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Structural Engineers',
        description: 'Accurate quantity verification and analysis',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'General Contractors',
        description: 'Quick preliminary estimates for bidding',
      },
    ],
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsJsonLd) }}
      />
      {children}
    </>
  );
}
