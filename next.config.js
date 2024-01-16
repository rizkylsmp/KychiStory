/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "readlightnovels.net",
      },
    ],
  },
};

module.exports = nextConfig;
