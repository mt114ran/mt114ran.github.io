import type { NextConfig } from 'next'

const isGithubPages = process.env.NODE_ENV === 'production'
const repoName = 'mt114ran.github.io' // あなたのリポジトリ名に応じて変更

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',         // 静的エクスポートの指定
  trailingSlash: true,      // GitHub Pagesでルーティングを正しく動かす
  basePath: '',             // ユーザーサイトの場合は空のままでOK
  assetPrefix: isGithubPages ? `/` : '',
}

export default nextConfig
