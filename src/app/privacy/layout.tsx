import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'VizeEST Privacy Policy - Learn how ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED collects, uses, and protects your personal information on our enterprise structural steel estimation platform.',
  keywords: [
    'VizeEST privacy policy',
    'data protection',
    'GDPR compliance',
    'enterprise data security',
    'SaaS privacy',
  ],
  openGraph: {
    title: 'Privacy Policy | VizeEST',
    description:
      'Learn how VizeEST protects your data. Our comprehensive privacy policy covers data collection, usage, security, and your rights.',
    url: 'https://vizeest.com/privacy',
  },
  twitter: {
    title: 'Privacy Policy | VizeEST',
    description:
      'Learn how VizeEST protects your data with enterprise-grade security measures.',
  },
  alternates: {
    canonical: 'https://vizeest.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
