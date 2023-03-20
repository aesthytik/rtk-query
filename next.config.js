/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mintmaster.infura-ipfs.io',
      },
    ],
  },
};

module.exports = nextConfig;
