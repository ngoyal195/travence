/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use Next.js v14 static export mode
  output: 'export',
  // Helpful for GitHub Pages so routes become directory/index.html files
  trailingSlash: true,
};

module.exports = nextConfig;
