import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'VizeEST Cookie Policy - Understand how ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED uses cookies and similar technologies on the VizeEST enterprise platform.',
  keywords: [
    'VizeEST cookie policy',
    'cookies',
    'tracking technologies',
    'GDPR cookies',
    'enterprise cookie management',
  ],
  openGraph: {
    title: 'Cookie Policy | VizeEST',
    description:
      'Learn about how VizeEST uses cookies and how you can manage your cookie preferences.',
    url: 'https://vizeest.com/cookies',
  },
  twitter: {
    title: 'Cookie Policy | VizeEST',
    description:
      'Learn about how VizeEST uses cookies and tracking technologies.',
  },
  alternates: {
    canonical: 'https://vizeest.com/cookies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
