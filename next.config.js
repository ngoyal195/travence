/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next.js v14 static export
  output: 'export',
  // write files as directory/index.html for GitHub Pages
  trailingSlash: true,
  // IMPORTANT for repo pages at https://<user>.github.io/travence/
  basePath: '/travence',
  assetPrefix: '/travence/',
};

module.exports = nextConfig;
