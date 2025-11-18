/** @type {import('next').NextConfig} */
const nextConfig = {
  // default config
  turbopack: {
    // ensure Turbopack uses this project folder as the workspace root
    root: __dirname,
  },
};

module.exports = nextConfig;