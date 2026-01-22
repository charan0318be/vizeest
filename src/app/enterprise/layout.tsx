import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise - Steel Estimation at Scale',
  description:
    'Enterprise-grade steel estimation platform. SOC 2 certified, SSO/SAML support, dedicated account management, custom integrations, and SLA guarantees for large organizations.',
  keywords: [
    'enterprise steel estimation',
    'SOC 2 construction software',
    'enterprise construction technology',
    'steel estimation at scale',
    'enterprise BIM integration',
    'construction software SSO',
  ],
  openGraph: {
    title: 'VizeEST Enterprise - Steel Estimation at Scale',
    description:
      'Enterprise-grade security, unlimited team members, custom integrations, and dedicated support for large organizations.',
    url: 'https://vizeest.com/enterprise',
    images: [
      {
        url: '/og-enterprise.png',
        width: 1200,
        height: 630,
        alt: 'VizeEST Enterprise - Steel Estimation at Scale',
      },
    ],
  },
  twitter: {
    title: 'VizeEST Enterprise - Steel Estimation at Scale',
    description:
      'Enterprise-grade security, unlimited team members, and dedicated support.',
  },
  alternates: {
    canonical: 'https://vizeest.com/enterprise',
  },
};

const enterpriseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VizeEST Enterprise',
  description: 'Enterprise steel estimation solutions',
  mainEntity: {
    '@type': 'Product',
    name: 'VizeEST Enterprise',
    description: 'Enterprise-grade steel estimation platform',
    category: 'Business Software',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'Custom enterprise pricing',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Security Certification',
        value: 'SOC 2 Type II',
      },
      {
        '@type': 'PropertyValue',
        name: 'SLA',
        value: '99.9% Uptime',
      },
    ],
  },
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseJsonLd) }}
      />
      {children}
    </>
  );
}
