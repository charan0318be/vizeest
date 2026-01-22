import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { DemoModalProvider } from '@/context/DemoModalContext';
import DemoModal from '@/components/DemoModal';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Contentsquare from '@/components/Contentsquare';
import VizeestTracking from '@/components/VizeestTracking';
import './globals.css';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vizeest.com'),
  title: {
    default: 'VizeEST | Structural Steel Estimation Platform',
    template: '%s | VizeEST',
  },
  description:
    'VizeEST delivers intelligent beam detection, automated material take-offs, and enterprise-grade reporting for structural steel estimation. Reduce estimation time by 80% while improving accuracy to 98%+. Trusted by 500+ enterprises worldwide.',
  keywords: [
    'structural steel estimation',
    'beam detection software',
    'material take-off software',
    'steel fabrication software',
    'construction estimation',
    'estimation platform',
    'steel takeoff software',
    'fabrication automation',
    'structural engineering software',
    'steel detailing software',
    'BIM integration',
    'enterprise estimation platform',
    'automated steel estimation',
    'construction technology',
    'steel quantity surveying',
    'fabrication cost estimation',
    'structural steel takeoff',
    'PDF beam detection',
    'drawing analysis software',
    'construction SaaS',
  ],
  authors: [
    { name: 'VizeEST', url: 'https://vizeest.com' },
  ],
  creator: 'VizeEST',
  publisher: 'VizeEST',
  applicationName: 'VizeEST',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vizeest.com',
    siteName: 'VizeEST',
    title: 'VizeEST | Structural Steel Estimation Platform',
    description:
      'Transform your steel estimation workflow. Reduce estimation time by 80% with 98%+ accuracy. Trusted by 500+ enterprise teams.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VizeEST - Enterprise Structural Steel Estimation Platform',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 600,
        height: 600,
        alt: 'VizeEST Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vizeest',
    creator: '@vizeest',
    title: 'VizeEST | Structural Steel Estimation',
    description:
      'Transform your steel estimation workflow. Reduce time by 80% with 98%+ accuracy.',
    images: {
      url: '/og-image.png',
      alt: 'VizeEST - Enterprise Steel Estimation Platform',
    },
  },
  alternates: {
    canonical: 'https://vizeest.com',
    languages: {
      'en-US': 'https://vizeest.com',
    },
  },
  category: 'Construction Technology',
  classification: 'Business Software',
  verification: {
    google: 'google-site-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'VizeEST',
  },
  other: {
    'msapplication-TileColor': '#4EBABD',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://vizeest.com/#organization',
      name: 'VizeEST',
      url: 'https://vizeest.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vizeest.com/logo.png',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://x.com/Vize_Est',
        'https://linkedin.com/company/VizeEst',
        'https://facebook.com/VizeEst',
        'https://instagram.com/Vizeone_official',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-784-277-0721',
        contactType: 'sales',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://vizeest.com/#website',
      url: 'https://vizeest.com',
      name: 'VizeEST',
      description: 'Structural Steel Estimation Platform',
      publisher: {
        '@id': 'https://vizeest.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://vizeest.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://vizeest.com/#software',
      name: 'VizeEST',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Construction Estimation Software',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Contact for enterprise pricing',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '500',
        bestRating: '5',
        worstRating: '1',
      },
      featureList: [
        'Intelligent Beam Detection',
        'Automated Material Take-offs',
        'Enterprise Reporting',
        'BIM Integration',
        'Real-time Collaboration',
        'SOC 2 Type II Certified',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4EBABD" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://t.contentsquare.net" />
        <link rel="dns-prefetch" href="https://stag-api.vizeest.us" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Additional SEO Meta */}
        <meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        {/* Business/Industry Specific */}
        <meta name="industry" content="Construction Technology" />
        <meta name="target" content="Steel Fabricators, Structural Engineers, General Contractors" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Theme Initialization Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('vizeest-theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Contentsquare />
        <VizeestTracking />
        <ThemeProvider>
          <DemoModalProvider>
            {children}
            <DemoModal />
          </DemoModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
