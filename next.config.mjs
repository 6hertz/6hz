/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.essajeesatelier.com',
      },
      {
        protocol: 'https',
        hostname: 'essajeesatelier.com',
      },
    ],
  },
};

export default nextConfig;
