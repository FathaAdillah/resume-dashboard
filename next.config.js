/** @type {import('next').NextConfig} */
const nextConfig = {
  // Self-contained server (.next/standalone) used by the Docker image
  output: 'standalone',

  // Keep builds light on small VPS / Dokploy hosts
  swcMinify: false,
  experimental: {
    workerThreads: false,
    cpus: 1
  },

  images: {
    unoptimized: true
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },

  reactStrictMode: true
}

module.exports = nextConfig
