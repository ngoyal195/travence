/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  // Since your site is now served from the root domain, remove basePath and assetPrefix
  basePath: '',
  assetPrefix: './',
  images: { unoptimized: true }, // important for static export
};

module.exports = nextConfig;
