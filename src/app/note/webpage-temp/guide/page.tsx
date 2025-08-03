import Link from 'next/link'

export default function WebDevelopmentGuidePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* ナビゲーション */}
        <nav className="mb-6">
          <Link href="/note/webpage-temp" className="text-blue-400 hover:text-blue-300 hover:underline">
            ← テンプレート一覧へ戻る
          </Link>
        </nav>

        {/* ヘッダー */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            初心者エンジニアのためのWeb制作学習ガイド
          </h1>
          <p className="text-lg text-gray-300">
            テンプレートを使って、実際にWebサイトを作りながら学んでいきましょう。
            コピー&ペーストから始めて、少しずつカスタマイズしていく方法を解説します。
          </p>
        </header>

        {/* Step 1 */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
            まずは動かしてみよう
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">準備するもの</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>パソコン（Windows/Mac/Linux どれでもOK）</li>
                <li>テキストエディタ（メモ帳でもOK、VSCodeがおすすめ）</li>
                <li>Webブラウザ（Chrome、Firefox、Safari など）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">手順</h3>
              <ol className="space-y-4">
                <li className="pl-6">
                  <strong className="block mb-2 text-gray-100">1. フォルダを作成</strong>
                  <p className="text-gray-300">デスクトップに「my-website」という名前のフォルダを作ります。</p>
                  <div className="bg-gray-700 p-3 rounded mt-2 font-mono text-sm text-gray-200">
                    Windows: デスクトップで右クリック → 新規作成 → フォルダー<br/>
                    Mac: デスクトップで右クリック → 新規フォルダ
                  </div>
                </li>
                
                <li className="pl-6">
                  <strong className="block mb-2 text-gray-100">2. HTMLファイルを作成</strong>
                  <p className="text-gray-300">「my-website」フォルダの中に「index.html」というファイルを作ります。</p>
                  <div className="bg-gray-700 p-3 rounded mt-2 text-gray-200">
                    <p className="text-sm mb-2">テキストエディタを開いて、新規ファイルを作成し、「index.html」という名前で保存します。</p>
                  </div>
                </li>

                <li className="pl-6">
                  <strong className="block mb-2 text-gray-100">3. HTMLコードをコピー</strong>
                  <p className="text-gray-300">テンプレートページから、HTMLタブのコードを全てコピーして、index.htmlに貼り付けます。</p>
                  <div className="bg-blue-900 p-3 rounded mt-2 text-sm text-blue-200">
                    💡 Ctrl+A（全選択）→ Ctrl+C（コピー）→ Ctrl+V（貼り付け）が便利です
                  </div>
                </li>

                <li className="pl-6">
                  <strong className="block mb-2 text-gray-100">4. CSSファイルを作成</strong>
                  <p className="text-gray-300">同じフォルダに「style.css」というファイルを作成し、CSSコードをコピーして貼り付けます。</p>
                </li>

                <li className="pl-6">
                  <strong className="block mb-2 text-gray-100">5. JavaScriptファイルを作成</strong>
                  <p className="text-gray-300">「script.js」というファイルを作成し、JavaScriptコードをコピーして貼り付けます。</p>
                </li>

                <li className="pl-6">
                  <strong className="block mb-2 text-gray-100">6. HTMLファイルを修正</strong>
                  <p className="text-gray-300">index.htmlの&lt;head&gt;タグ内に以下を追加：</p>
                  <pre className="bg-gray-950 text-gray-100 p-3 rounded mt-2 overflow-x-auto">
{`<link rel="stylesheet" href="style.css">`}
                  </pre>
                  <p className="text-gray-300 mt-2">&lt;/body&gt;タグの直前に以下を追加：</p>
                  <pre className="bg-gray-950 text-gray-100 p-3 rounded mt-2 overflow-x-auto">
{`<script src="script.js"></script>`}
                  </pre>
                </li>

                <li className="pl-6">
                  <strong className="block mb-2 text-gray-100">7. ブラウザで確認</strong>
                  <p className="text-gray-300">index.htmlファイルをブラウザにドラッグ&ドロップして表示を確認します。</p>
                  <div className="bg-green-900 p-3 rounded mt-2 text-sm text-green-200">
                    ✅ おめでとうございます！あなたの最初のWebサイトが動きました！
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
            カスタマイズしてみよう - 色を変える
          </h2>
          
          <div className="space-y-6">
            <p className="text-gray-300">
              次は、サイトの色を変えてみましょう。CSSファイルを編集することで、簡単に見た目を変更できます。
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">背景色を変える</h3>
              <p className="text-gray-300 mb-3">style.cssファイルを開いて、bodyの背景色を変更してみましょう。</p>
              <pre className="bg-gray-950 text-gray-100 p-4 rounded overflow-x-auto">
{`body {
    background: #f0f8ff;  /* 薄い青色に変更 */
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">文字色を変える</h3>
              <p className="text-gray-300 mb-3">見出しの色を変更してみましょう。</p>
              <pre className="bg-gray-950 text-gray-100 p-4 rounded overflow-x-auto">
{`h1 {
    color: #ff6b6b;  /* 赤っぽい色に変更 */
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">ボタンの色を変える</h3>
              <p className="text-gray-300 mb-3">ボタンの背景色とホバー時の色を変更します。</p>
              <pre className="bg-gray-950 text-gray-100 p-4 rounded overflow-x-auto">
{`.btn-primary {
    background: #4CAF50;  /* 緑色に変更 */
}

.btn-primary:hover {
    background: #45a049;  /* 少し暗い緑色 */
}`}
              </pre>
            </div>

            <div className="bg-blue-900 p-4 rounded text-blue-200">
              <h4 className="font-semibold mb-2 text-blue-100">💡 色の指定方法</h4>
              <ul className="space-y-1 text-sm">
                <li>• 色名: red, blue, green など</li>
                <li>• HEX: #ff0000（赤）、#00ff00（緑）、#0000ff（青）</li>
                <li>• RGB: rgb(255, 0, 0)（赤）</li>
                <li>• <a href="https://htmlcolorcodes.com/" className="text-blue-400 underline" target="_blank">色コード参考サイト</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
            テキストと画像を変更する
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">テキストの変更</h3>
              <p className="text-gray-300 mb-3">index.htmlファイルを開いて、テキストを自分のコンテンツに変更します。</p>
              <pre className="bg-gray-950 text-gray-100 p-4 rounded overflow-x-auto">
{`<!-- 変更前 -->
<h1>Modern Cafe</h1>
<p>こだわりのコーヒーと心地よい空間</p>

<!-- 変更後 -->
<h1>My Awesome Site</h1>
<p>私の素晴らしいWebサイトへようこそ！</p>`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">画像の変更</h3>
              <p className="text-gray-300 mb-3">画像を自分の画像に変更する方法：</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                <li>「images」フォルダを作成</li>
                <li>使いたい画像をそのフォルダに入れる（例: hero.jpg）</li>
                <li>HTMLのimg要素のsrc属性を変更</li>
              </ol>
              <pre className="bg-gray-950 text-gray-100 p-4 rounded overflow-x-auto mt-3">
{`<!-- 変更前 -->
<img src="https://example.com/image.jpg" alt="画像">

<!-- 変更後 -->
<img src="images/hero.jpg" alt="私の画像">`}
              </pre>
            </div>

            <div className="bg-yellow-900 p-4 rounded text-yellow-200">
              <h4 className="font-semibold mb-2 text-yellow-100">⚠️ 画像使用の注意点</h4>
              <ul className="space-y-1 text-sm">
                <li>• 画像サイズは適切に（大きすぎると表示が遅くなります）</li>
                <li>• 無料画像サイト: <a href="https://unsplash.com/" className="text-blue-400 underline" target="_blank">Unsplash</a>、<a href="https://www.pexels.com/" className="text-blue-400 underline" target="_blank">Pexels</a></li>
                <li>• alt属性は必ず設定（アクセシビリティのため）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
            レイアウトを調整する
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">余白（マージン・パディング）を調整</h3>
              <pre className="bg-gray-950 text-gray-100 p-4 rounded overflow-x-auto">
{`.section {
    padding: 100px 0;  /* 上下の余白を増やす */
    margin: 0 auto;    /* 中央寄せ */
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">フォントサイズを変更</h3>
              <pre className="bg-gray-950 text-gray-100 p-4 rounded overflow-x-auto">
{`h1 {
    font-size: 48px;  /* 大きくする */
}

p {
    font-size: 18px;  /* 読みやすいサイズに */
    line-height: 1.8; /* 行間を広げる */
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-100">レスポンシブ対応（スマホ表示）</h3>
              <pre className="bg-gray-950 text-gray-100 p-4 rounded overflow-x-auto">
{`@media (max-width: 768px) {
    h1 {
        font-size: 32px;  /* スマホでは小さく */
    }
    
    .container {
        padding: 0 20px;   /* 左右の余白を確保 */
    }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12 bg-gradient-to-r from-blue-950 to-purple-950 rounded-lg shadow-md p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            🚀 次のステップ
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="font-semibold mb-2 text-gray-100">もっと学びたい方へ</h3>
              <ul className="space-y-2 text-gray-300">
                <li>📚 <strong>HTML/CSS基礎</strong>: <a href="https://developer.mozilla.org/ja/docs/Learn/HTML" className="text-blue-400 underline" target="_blank">MDN Web Docs</a></li>
                <li>🎨 <strong>デザイン</strong>: <a href="https://www.figma.com/" className="text-blue-400 underline" target="_blank">Figma</a>でデザインを作ってみる</li>
                <li>⚡ <strong>JavaScript</strong>: インタラクティブな機能を追加</li>
                <li>📱 <strong>レスポンシブデザイン</strong>: スマホ対応を極める</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <h3 className="font-semibold mb-2 text-gray-100">実践的なプロジェクト</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 自己紹介サイトを作る</li>
                <li>• 好きなお店のサイトを模写する</li>
                <li>• ポートフォリオサイトを作る</li>
                <li>• 友達や家族のサイトを作ってあげる</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <h3 className="font-semibold mb-2 text-gray-100">公開する方法</h3>
              <ul className="space-y-2 text-gray-300">
                <li>🌐 <strong>GitHub Pages</strong>: 無料で簡単に公開</li>
                <li>⚡ <strong>Netlify</strong>: ドラッグ&ドロップで公開</li>
                <li>🔥 <strong>Vercel</strong>: Next.jsなどのフレームワークに最適</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12 bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">
            💡 開発のコツ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-950 p-4 rounded">
              <h3 className="font-semibold mb-2 text-blue-100">開発ツール</h3>
              <ul className="text-sm space-y-1 text-blue-200">
                <li>• <strong>VSCode</strong>: 無料の高機能エディタ</li>
                <li>• <strong>Chrome DevTools</strong>: F12で開発者ツール</li>
                <li>• <strong>Live Server</strong>: 自動更新で開発効率UP</li>
              </ul>
            </div>

            <div className="bg-green-950 p-4 rounded">
              <h3 className="font-semibold mb-2 text-green-100">よくあるミス</h3>
              <ul className="text-sm space-y-1 text-green-200">
                <li>• タグの閉じ忘れ（&lt;/div&gt;など）</li>
                <li>• セミコロンの忘れ（CSS）</li>
                <li>• ファイルパスの間違い</li>
                <li>• 全角スペースの混入</li>
              </ul>
            </div>

            <div className="bg-yellow-950 p-4 rounded">
              <h3 className="font-semibold mb-2 text-yellow-100">デバッグ方法</h3>
              <ul className="text-sm space-y-1 text-yellow-200">
                <li>• コンソールでエラーを確認</li>
                <li>• 一つずつ変更して確認</li>
                <li>• コメントアウトで原因を特定</li>
              </ul>
            </div>

            <div className="bg-purple-950 p-4 rounded">
              <h3 className="font-semibold mb-2 text-purple-100">学習のコツ</h3>
              <ul className="text-sm space-y-1 text-purple-200">
                <li>• 毎日少しずつでも触る</li>
                <li>• 完璧を求めすぎない</li>
                <li>• 他の人のコードを読む</li>
                <li>• 作ったものを公開する</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 py-8">
          <p>このガイドが役に立ったら、ぜひ友達にもシェアしてください！</p>
          <p className="mt-2">
            <Link href="/note/webpage-temp" className="text-blue-400 hover:underline">
              テンプレート一覧に戻る
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}