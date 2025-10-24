/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🔥 FIX: forza rigenerazione completa del CSS ad ogni build
  experimental: {
    // Forza invalidazione cache CSS
    optimizeCss: false,
  },

  // 🔁 Forza invalidazione cache di Vercel per i CSS
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 0,
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
