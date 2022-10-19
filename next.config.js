/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['tsx']
}

module.exports = nextConfig
