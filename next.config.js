/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Vercel optimalizace */
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig; 