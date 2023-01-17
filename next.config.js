/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'customValue',
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://grajalesu.vercel.app/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
