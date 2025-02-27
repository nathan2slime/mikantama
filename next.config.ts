import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        hostname: 'fakestoreapi.com'
      }
    ]
  }
}

export default nextConfig
