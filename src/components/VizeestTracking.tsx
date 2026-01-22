'use client';

import Script from 'next/script';

const API_URL = process.env.NEXT_PUBLIC_VIZEEST_API_URL || 'https://stag-api.vizeest.us';

export default function VizeestTracking() {
  return (
    <>
      <Script
        id="vizeest-tracking-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.VIZEEST_API_URL = '${API_URL}';`,
        }}
      />
      <Script
        src="/vizeest-tracking.js"
        strategy="afterInteractive"
      />
    </>
  );
}
