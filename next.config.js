/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && "/repository_name",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig
