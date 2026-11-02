/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dev artifacts separate from production builds so they cannot corrupt
  // an already-running local preview.
  distDir: process.env.WEATHER_WITHIN_DEV === '1' ? '.next-dev' : process.env.WEATHER_WITHIN_BUILD === '1' ? '.next-build' : '.next',
};

module.exports = nextConfig;
