import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/llm-leaderboard',
  assetPrefix: '/llm-leaderboard',
};

export default nextConfig;
