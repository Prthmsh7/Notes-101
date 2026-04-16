/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        aggregateTimeout: 300,
        ignored: ["**/.git/**", "**/.next/**", "**/node_modules/**"],
        poll: 1000
      };
    }

    return config;
  }
};

module.exports = nextConfig;
