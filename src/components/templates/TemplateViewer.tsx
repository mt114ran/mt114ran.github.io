'use client'

import { useState } from 'react'
import { WebTemplate } from '@/lib/templates/types'

interface TemplateViewerProps {
  template: WebTemplate
}

/**
 * テンプレートビューアコンポーネント
 */
export default function TemplateViewer({ template }: TemplateViewerProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'css' | 'js'>('preview')
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop')

  // プレビュー用のHTMLを生成
  const getPreviewHtml = () => {
    // bodyタグ内のコンテンツを抽出
    const bodyContent = template.code.html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1] || template.code.html
    
    return `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${template.code.css}</style>
      </head>
      <body>
        ${bodyContent}
        ${template.code.js ? `<script>
          // すべてのイベントリスナーをDOMContentLoaded後に登録
          (function() {
            ${template.code.js}
          })();
        </script>` : ''}
      </body>
      </html>
    `
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type}をクリップボードにコピーしました`)
    })
  }

  return (
    <div className="space-y-6">
      {/* タブナビゲーション */}
      <div className="border-b border-gray-700">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab('preview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'preview'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            プレビュー
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'html'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            HTML
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'css'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            CSS
          </button>
          {template.code.js && (
            <button
              onClick={() => setActiveTab('js')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'js'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              JavaScript
            </button>
          )}
        </nav>
      </div>

      {/* コンテンツエリア */}
      <div className="min-h-[600px]">
        {activeTab === 'preview' && (
          <div className="space-y-4">
            {/* デバイスモード切替 */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`px-4 py-2 rounded ${
                  deviceMode === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                デスクトップ
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`px-4 py-2 rounded ${
                  deviceMode === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                モバイル
              </button>
            </div>
            
            {/* プレビューフレーム */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                srcDoc={getPreviewHtml()}
                className={`w-full transition-all duration-300 ${
                  deviceMode === 'desktop' ? 'h-[700px]' : 'h-[700px] max-w-[375px] mx-auto'
                }`}
                title="Template Preview"
                sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
              />
            </div>
          </div>
        )}

        {activeTab === 'html' && (
          <div className="relative">
            <button
              onClick={() => copyToClipboard(template.code.html, 'HTML')}
              className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              コピー
            </button>
            <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto">
              <code>{template.code.html}</code>
            </pre>
          </div>
        )}

        {activeTab === 'css' && (
          <div className="relative">
            <button
              onClick={() => copyToClipboard(template.code.css, 'CSS')}
              className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              コピー
            </button>
            <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto">
              <code>{template.code.css}</code>
            </pre>
          </div>
        )}

        {activeTab === 'js' && template.code.js && (
          <div className="relative">
            <button
              onClick={() => copyToClipboard(template.code.js!, 'JavaScript')}
              className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              コピー
            </button>
            <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto">
              <code>{template.code.js}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}