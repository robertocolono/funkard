/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Force CSS regeneration and cache invalidation
  experimental: {
    optimizeCss: false,
  },
  
  // Force rebuild on every deploy
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
