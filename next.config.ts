import type { NextConfig } from 'next'

const isGithubPages = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: isGithubPages ? '/' : '',
}

export default nextConfig
