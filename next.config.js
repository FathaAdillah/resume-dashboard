/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC minification untuk hindari worker threads
  swcMinify: false,

  // Force single-threaded mode
  experimental: {
    workerThreads: false,
    cpus: 1
  },

  // Disable image optimization yang bisa spawn child processes
  images: {
    unoptimized: true
  },

  // Compiler options untuk kontrol lebih
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },

  // Strict mode untuk development
  reactStrictMode: true,

  // Output standalone untuk production optimization
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined
}

module.exports = nextConfig
