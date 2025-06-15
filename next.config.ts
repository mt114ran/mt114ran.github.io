import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',         // 静的エクスポートの指定
  trailingSlash: true,      // GitHub Pagesでルーティングを正しく動かす
  basePath: '',             // ユーザーサイトの場合は空のままでOK
  assetPrefix: '',
}

export default nextConfig
