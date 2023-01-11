/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants')


const nextConfig = {
  reactStrictMode: true,
}

module.exports = (phase, { defaultConfig }) => {
  return nextConfig
}
