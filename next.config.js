/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    disableStaticImages: false,
    domains: ['example.com']
  },
  
}

module.exports = nextConfig
