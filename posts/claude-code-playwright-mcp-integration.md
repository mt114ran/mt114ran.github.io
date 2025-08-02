---
id: 11
title: "Claude CodeでPlaywright MCPを連携させてブラウザ自動化を実現する"
tags: [Claude Code, MCP, Playwright, 自動化, ブラウザテスト]
create: "2025-08-02 19:30"
update: "2025-08-02 19:45"
---

## クイズ：記事を読むとわかるようになること

1. MCPとは何の略で、どのような目的で使用されるツールですか？
2. Playwright MCPを使用するメリットは何ですか？
3. Claude Codeで外部ツールを連携させる際の設定ファイルの場所はどこですか？

## はじめに

今回は、Claude CodeにPlaywright MCPを連携させて、AIアシスタントがブラウザを自動操作できるようにする方法について解説します。この連携により、Webアプリケーションのテスト自動化、スクレイピング、UIの動作確認などが、自然言語での指示だけで実現できるようになります。

## 対応した内容

Claude CodeにPlaywright MCPサーバーを連携させ、以下の機能を実現しました：

- ブラウザの起動と制御
- Webページへのナビゲーション
- ページ要素の操作（クリック、テキスト入力、選択など）
- スクリーンショットの取得
- ページ内容の取得と解析
- JavaScriptコードの実行

## 導入した技術の解説

### MCP (Model Context Protocol)

MCPは、AIモデルが外部ツールやサービスと通信するためのプロトコルです。Claude Codeでは、MCPサーバーを通じて様々な外部機能を統合できます。

主な特徴：
- 標準化されたプロトコルによる通信
- セキュアな接続と認証
- 非同期処理のサポート
- エラーハンドリング機構

### Playwright

Playwrightは、Microsoftが開発したブラウザ自動化ライブラリです。複数のブラウザ（Chromium、Firefox、WebKit）をサポートし、モダンなWebアプリケーションのテストに適しています。

主な特徴：
- クロスブラウザ対応
- ヘッドレス/ヘッドフルモード
- 自動待機機構
- ネットワークインターセプト
- モバイルデバイスエミュレーション

## 用語の解説

### ヘッドレスブラウザ
GUIを表示せずにバックグラウンドで動作するブラウザ。CI/CD環境やサーバー上での自動テストに適している。

### セレクター
HTML要素を特定するための文字列。CSSセレクター、XPath、テキストコンテンツなどで指定可能。

### アクセシビリティスナップショット
ページの構造をアクセシビリティツリーとして表現したもの。スクリーンリーダーが認識する情報に近い形式。

### ダイアログハンドリング
alert、confirm、promptなどのブラウザダイアログを自動的に処理する機能。

## 実装手順と遭遇した問題

### 1. Playwright MCPサーバーのインストール

```bash
npm install -g @modelcontextprotocol/server-playwright
```

### 2. Claude Code設定ファイルの更新

`~/.claude/settings.json`に以下の設定を追加：

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-playwright"
      ]
    }
  }
}
```

### 遭遇した問題点

#### 問題1: ブラウザが起動しない

**症状**: Playwrightコマンドを実行してもブラウザが表示されない

**原因**: デフォルトでヘッドレスモードで起動するため

**解決方法**:
設定ファイルにヘッドフルモードの指定を追加：

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-playwright"
      ],
      "env": {
        "PLAYWRIGHT_HEADLESS": "false"
      }
    }
  }
}
```

#### 問題2: Claude Codeが新しいMCPツールを認識しない

**症状**: 設定追加後もPlaywrightコマンドが使用できない

**原因**: Claude Codeの再起動が必要

**解決方法**:
Claude Codeを完全に終了して再起動：

```bash
# Claude Codeセッションを終了
exit

# 新しいセッションを開始
claude
```

## 実務でよくある使用ケース

### 1. E2Eテストの自動生成

```javascript
// ログインフローのテスト例
await browser.navigate("https://example.com/login");
await browser.type('[name="username"]', "testuser");
await browser.type('[name="password"]', "testpass");
await browser.click('[type="submit"]');
await browser.wait_for("Dashboard");
```

### 2. Webスクレイピング

```javascript
// 商品情報の取得例
await browser.navigate("https://shopping-site.com/products");
const snapshot = await browser.snapshot();
// スナップショットから必要な情報を抽出
```

### 3. フォーム入力の自動化

```javascript
// 複数フィールドの一括入力
const formData = {
  name: "山田太郎",
  email: "yamada@example.com",
  tel: "090-1234-5678"
};

for (const [field, value] of Object.entries(formData)) {
  await browser.type(`[name="${field}"]`, value);
}
```

### 4. パフォーマンステスト

```javascript
// ページロード時間の計測
const startTime = Date.now();
await browser.navigate("https://example.com");
await browser.wait_for("main-content");
const loadTime = Date.now() - startTime;
console.log(`Page load time: ${loadTime}ms`);
```

## セキュリティ上の注意点

1. **認証情報の取り扱い**
   - パスワードなどの機密情報は環境変数で管理
   - ログに認証情報が出力されないよう注意

2. **スクレイピング時の配慮**
   - robots.txtの遵守
   - 適切なリクエスト間隔の設定
   - サイトの利用規約の確認

3. **CORSとセキュリティポリシー**
   - クロスオリジンリクエストの制限を理解
   - Content Security Policyの影響を考慮

## トラブルシューティング

### ブラウザがインストールされていないエラー

```bash
# Playwrightブラウザのインストール
npx playwright install chromium
```

### タイムアウトエラー

要素の待機時間を調整：

```javascript
// デフォルトのタイムアウトを延長
await browser.wait_for("element", { timeout: 30000 });
```

### 要素が見つからないエラー

アクセシビリティスナップショットで要素を確認：

```javascript
const snapshot = await browser.snapshot();
console.log(snapshot); // 要素の構造を確認
```

## まとめ

Claude CodeにPlaywright MCPを連携させることで、ブラウザ自動化タスクをAIアシスタントに任せることができるようになりました。この統合により、以下のメリットが得られます：

1. **自然言語での指示**: 複雑なセレクターやAPIを覚える必要がない
2. **コンテキスト理解**: AIがページ内容を理解して適切な操作を選択
3. **エラー処理**: 予期しないエラーに対してAIが柔軟に対応
4. **テストシナリオ生成**: ユーザーストーリーから自動的にテストケースを作成

この技術を活用することで、Webアプリケーション開発の効率が大幅に向上し、品質保証プロセスも強化されます。

## 参考リンク

- [MCP (Model Context Protocol) 公式ドキュメント](https://modelcontextprotocol.io/)
- [Playwright 公式ドキュメント](https://playwright.dev/)
- [Claude Code ドキュメント](https://docs.anthropic.com/en/docs/claude-code)
- [Playwright MCP Server リポジトリ](https://github.com/modelcontextprotocol/servers/tree/main/src/playwright)

## クイズの答え

1. **MCPとは何の略で、どのような目的で使用されるツールですか？**
   - Model Context Protocolの略で、AIモデルが外部ツールやサービスと通信するためのプロトコルです。

2. **Playwright MCPを使用するメリットは何ですか？**
   - 自然言語での指示でブラウザ操作が可能、AIによるコンテキスト理解、柔軟なエラー処理、自動的なテストシナリオ生成などのメリットがあります。

3. **Claude Codeで外部ツールを連携させる際の設定ファイルの場所はどこですか？**
   - `~/.claude/settings.json`です。
