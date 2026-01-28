/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://resome-fatha.fritz.my.id',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig

