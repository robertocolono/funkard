import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.pokemontcg.io', 'static.wikia.nocookie.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pokemontcg.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
