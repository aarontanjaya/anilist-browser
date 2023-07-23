/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ANILIST_URL: process.env.ANILIST_URL,
  },
};

module.exports = nextConfig;
