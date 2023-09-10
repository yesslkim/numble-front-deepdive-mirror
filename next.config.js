/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_API: process.env.NEXT_PUBLIC_BASE_API
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com'
      },
      {
        protocol: 'https',
        hostname: 'robohash.org'
      }
    ]
  }
};

module.exports = nextConfig;
