import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'VizeEST Terms of Service - Review the terms and conditions governing your use of VizeEST, the enterprise structural steel estimation platform by ZENITUDE TECHNOLOGY SOLUTIONS PRIVATE LIMITED.',
  keywords: [
    'VizeEST terms of service',
    'terms and conditions',
    'SaaS agreement',
    'enterprise software terms',
    'software license agreement',
  ],
  openGraph: {
    title: 'Terms of Service | VizeEST',
    description:
      'Review the terms and conditions for using VizeEST enterprise structural steel estimation platform.',
    url: 'https://vizeest.com/terms',
  },
  twitter: {
    title: 'Terms of Service | VizeEST',
    description:
      'Review the terms and conditions for using VizeEST platform.',
  },
  alternates: {
    canonical: 'https://vizeest.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
