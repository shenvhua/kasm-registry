/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Clark',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://shenvhua.github.io/kasm-registry/',
    contactUrl: 'https://www.kasmweb.com/docs/latest/how_to/building_images.html',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
