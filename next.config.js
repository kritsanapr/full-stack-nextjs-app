/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: process.env.CUSTOM_KEY,
    customKeyPublic: process.env.NEXT_PUBLIC_CUSTOM_KEY,
  },

};

module.exports = nextConfig;
