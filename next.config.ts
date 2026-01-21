import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://vizeest.com',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://stag-api.vizeest.us',
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-8JYZRSGE9T',
    NEXT_PUBLIC_CONTENTSQUARE_ID: process.env.NEXT_PUBLIC_CONTENTSQUARE_ID || 'ffdeb90edb234',
  },
};

export default nextConfig;
