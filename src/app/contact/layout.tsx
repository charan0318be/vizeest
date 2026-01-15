import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description:
    'Contact VizeEST for demos, pricing inquiries, technical support, or partnership opportunities. Our team is ready to help transform your steel estimation workflow.',
  keywords: [
    'contact VizeEST',
    'steel estimation demo',
    'construction software pricing',
    'enterprise support',
    'steel fabrication consultation',
  ],
  openGraph: {
    title: 'Contact VizeEST - Get in Touch',
    description:
      'Request a demo, get pricing information, or speak with our team. We\'re here to help transform your steel estimation process.',
    url: 'https://vizeest.com/contact',
    images: [
      {
        url: '/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact VizeEST',
      },
    ],
  },
  twitter: {
    title: 'Contact VizeEST - Get in Touch',
    description:
      'Request a demo, get pricing information, or speak with our team.',
  },
  alternates: {
    canonical: 'https://vizeest.com/contact',
  },
};

// JSON-LD for Contact page
const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'VizeEST',
    url: 'https://vizeest.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-784-277-0721',
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-784-277-0721',
        contactType: 'customer support',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '100 Montgomery St, Suite 2000',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        postalCode: '94104',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '350 Fifth Avenue, Suite 4500',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10118',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '30 St Mary Axe',
        addressLocality: 'London',
        postalCode: 'EC3A 8BF',
        addressCountry: 'GB',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
