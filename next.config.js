/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants')


const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  basePath: "/nextjs-pages",
  assetPrefix: "/next-pages"
}

module.exports = (phase, { defaultConfig }) => {
  return nextConfig
}
