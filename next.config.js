/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_API: process.env.NEXT_PUBLIC_BASE_API
  },
  images: {
    domains: [
      'i.dummyjson.com',
      'robohash.org'
    ]
  }
}

module.exports = nextConfig
