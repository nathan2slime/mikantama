import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: 'fakestoreapi.com'
      }
    ]
  }
}

export default nextConfig
