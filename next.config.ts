import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://vizeest.com',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://stag-api.vizeest.us',
  },
};

export default nextConfig;
