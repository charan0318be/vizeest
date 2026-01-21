'use client';

import Script from 'next/script';

const CONTENTSQUARE_ID = process.env.NEXT_PUBLIC_CONTENTSQUARE_ID;

export default function Contentsquare() {
  if (!CONTENTSQUARE_ID) {
    return null;
  }

  return (
    <Script
      src={`https://t.contentsquare.net/uxa/${CONTENTSQUARE_ID}.js`}
      strategy="afterInteractive"
    />
  );
}
