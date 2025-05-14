/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Vercel optimalizace */
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig; 