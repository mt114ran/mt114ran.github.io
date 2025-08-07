---
id: 25
title: "Gemini CLIのセットアップとClaude Code連携のトラブルシューティング完全ガイド"
tags: ["Gemini CLI", "Claude Code", "Google AI", "AI開発", "環境構築", "トラブルシューティング"]
create: "2025-08-07 19:10"
---

Gemini CLIのセットアップで認証エラーに遭遇したり、Claude Codeとの連携がうまくいかなかったりした経験はありませんか？今回は、実際に遭遇した問題とその解決方法を詳しく解説します。

## はじめに

Gemini CLIは、Googleがオープンソースとしてリリースしたコマンドラインツールで、Geminiモデルの能力をターミナルから直接利用できます。しかし、初期設定や他のツールとの連携で様々な問題に遭遇することがあります。

この記事では、実際のセットアップ過程で遭遇した問題と、それらの解決方法を順を追って説明します。

## 対応した内容

1. Gemini CLIの初期インストール
2. 認証エラーの解決
3. APIキーの設定方法
4. Claude Codeとの連携設定
5. hooks機能の調査と実装

## ぶつかった問題点

### 問題1: 初回実行時の認証エラー

#### エラーメッセージ
```
Please set an Auth method in your /Users/kometomo/.gemini/settings.json or specify one of the following environment variables before running: GEMINI_API_KEY, GOOGLE_GENAI_USE_VERTEXAI, GOOGLE_GENAI_USE_GCA
```

#### 原因
Gemini CLIを初めて実行する際、認証情報が設定されていないため発生します。Gemini CLIがGoogle AIサービスにアクセスするには、ユーザーの認証が必要です。

#### 解決方法

**方法1: 対話型セットアップ（推奨）**

最も簡単な方法は、Gemini CLIを対話モードで起動することです：

```bash
gemini
```

初回起動時に以下の選択肢が表示されます：
1. テーマの選択（お好みで）
2. 認証方法の選択で「Login with Google」を選択
3. ブラウザが自動的に開き、Googleアカウントでログイン

**方法2: APIキーを使用した設定**

[Google AI Studio](https://aistudio.google.com/)でAPIキーを取得し、設定ファイルに追加：

1. Google AI StudioでAPIキーを生成
2. `~/.gemini/settings.json`を作成または編集：

```json
{
  "authMethod": "API_KEY",
  "apiKey": "your-api-key-here",
  "selectedAuthType": "gemini-api-key"
}
```

**方法3: 環境変数での設定**

一時的な使用の場合：
```bash
export GEMINI_API_KEY="your-api-key-here"
```

永続的に設定する場合（`.bashrc`または`.zshrc`に追加）：
```bash
echo 'export GEMINI_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

### 問題2: Node.jsバージョンの不整合

#### エラーメッセージ
```
SyntaxError: The requested module 'node:events' does not provide an export named 'addAbortListener'
```

#### 原因
Gemini CLIはNode.js v20以上を要求しますが、古いバージョンのNode.jsを使用している場合に発生します。

#### 解決方法

nvmを使用してNode.jsのバージョンを管理：

```bash
# Node.js v20.5.0をインストール
nvm install 20.5.0

# 使用するバージョンを切り替え
nvm use 20.5.0

# デフォルトバージョンとして設定
nvm alias default 20.5.0
```

プロジェクトごとに`.nvmrc`ファイルを作成：
```bash
echo "20.5.0" > .nvmrc
```

### 問題3: 日本語対応の設定

#### 問題
デフォルトでは、Geminiが英語で応答することがあります。

#### 解決方法

プロンプトに明示的に日本語での応答を要求：

```bash
gemini -p "以下の質問に日本語で答えてください: [質問内容]"
```

または、エイリアスを設定して常に日本語で応答するように：

```bash
# .bashrcまたは.zshrcに追加
alias gemini-ja='gemini -p "必ず日本語で応答してください。"'
```

## Claude Codeとの連携設定

### 連携の目的

Claude CodeとGemini CLIを連携させることで、異なるAIモデルの視点を活用できます。実際に、Claude Code経由でGemini CLIにhooks機能について調査を依頼し、詳細な技術情報を取得することができました。

### 設定手順

#### 1. ディレクトリ構造の準備

```bash
# 連携用ディレクトリの作成
mkdir -p ~/.claude/gemini-consultations
mkdir -p ~/.claude/gemini-responses
```

#### 2. グローバル設定ファイルの更新

`~/.claude/CLAUDE.md`に連携ルールを追加：

```markdown
## Gemini CLIとの連携ルール

### 連携方法
1. 相談内容を `.claude/gemini-consultations/` ディレクトリに保存
2. Geminiからの回答を `.claude/gemini-responses/` に保存
3. ファイル名形式: `YYYY-MM-DD-HH-mm-ss-topic.md`

### 相談すべきケース
- アーキテクチャの設計判断
- 複雑なアルゴリズムの実装方法
- パフォーマンス最適化
- セキュリティ上の懸念事項
```

#### 3. 連携スクリプトの作成（オプション）

簡単な連携スクリプトを作成することで、より効率的に相談できます：

```bash
#!/bin/bash
# consult-gemini.sh

TOPIC=$1
QUESTION=$2
TIMESTAMP=$(date +"%Y-%m-%d-%H-%M-%S")
CONSULT_FILE="$HOME/.claude/gemini-consultations/${TIMESTAMP}-${TOPIC}.md"
RESPONSE_FILE="$HOME/.claude/gemini-responses/${TIMESTAMP}-${TOPIC}.md"

# 相談内容の作成
cat > "$CONSULT_FILE" << EOF
# 相談内容: $TOPIC

## 質問
$QUESTION

## 期待する回答
技術的に正確で実装可能な解決策を日本語で提供してください。
EOF

# Geminiに相談
export GEMINI_API_KEY="your-api-key"
gemini -p "$(cat $CONSULT_FILE)" > "$RESPONSE_FILE"

echo "相談完了: $RESPONSE_FILE"
```

## 実際の連携テスト結果

### Claude Code Hooks機能の調査

実際にClaude Code経由でGemini CLIにhooks機能について調査を依頼した結果、以下の詳細な情報を取得できました：

#### Geminiからの回答概要

1. **Hooks機能の種類**
   - `user-prompt-submit-hook`: プロンプト送信前に実行
   - `tool-pre-hook`: ツール実行前に実行
   - `tool-post-hook`: ツール実行後に実行

2. **設定方法**
   ```json
   {
     "hooks": {
       "user-prompt-submit-hook": "/path/to/script.sh",
       "tool-pre-hook": "/path/to/script.js",
       "tool-post-hook": "/path/to/script.sh"
     }
   }
   ```

3. **実装例**
   - プロンプトへの自動コンテキスト追加
   - 危険なコマンドのブロック
   - 実行履歴のログ記録

この連携により、Claude Codeだけでは得られない詳細な技術情報を取得することができました。

## トラブルシューティングのチェックリスト

問題が発生した場合、以下の項目を確認してください：

- [ ] Node.js v20以上がインストールされているか
  ```bash
  node --version
  ```

- [ ] Gemini CLIが正しくインストールされているか
  ```bash
  which gemini
  gemini --version
  ```

- [ ] 認証情報が設定されているか
  ```bash
  cat ~/.gemini/settings.json
  echo $GEMINI_API_KEY
  ```

- [ ] APIキーが有効か
  ```bash
  gemini -p "Hello" 2>&1 | head -5
  ```

- [ ] 連携用ディレクトリが作成されているか
  ```bash
  ls -la ~/.claude/gemini-consultations
  ls -la ~/.claude/gemini-responses
  ```

## セキュリティに関する注意事項

### APIキーの管理

**重要**: APIキーは絶対に公開リポジトリにコミットしないでください。

`.gitignore`に追加すべきファイル：
```
# Gemini CLI
.gemini/
.env
*.log

# Claude Code
.claude/settings.json
.claude/gemini-consultations/
.claude/gemini-responses/
```

### 環境変数の安全な管理

開発環境では`.env`ファイルを使用：

```bash
# .env
GEMINI_API_KEY=your-api-key-here
```

スクリプトでの読み込み：
```bash
#!/bin/bash
source .env
gemini -p "your prompt"
```

## ベストプラクティス

### 1. エラーハンドリングの実装

スクリプトには必ずエラーハンドリングを含める：

```bash
#!/bin/bash
set -e  # エラー時に即座に終了

if [ -z "$GEMINI_API_KEY" ]; then
    echo "Error: GEMINI_API_KEY is not set"
    exit 1
fi
```

### 2. ログの記録

すべての相談と回答を記録：

```bash
LOG_DIR="$HOME/.claude/logs"
mkdir -p "$LOG_DIR"
echo "$(date): $QUERY" >> "$LOG_DIR/gemini.log"
```

### 3. タイムアウトの設定

長時間実行を防ぐ：

```bash
timeout 30 gemini -p "your prompt" || echo "Timeout occurred"
```

## 実際の使用例

### 基本的な質問

```bash
gemini -p "React HooksのuseEffectとuseLayoutEffectの違いを説明してください"
```

### ファイルの内容を含めた質問

```bash
cat src/app.js | gemini -p "このコードのパフォーマンスを改善する方法を提案してください"
```

### Claude Codeとの連携使用例

Claude Code内で以下のような処理を実行：

```bash
# 相談内容をファイルに保存
cat > ~/.claude/gemini-consultations/2025-08-07-18-26-00-claude-hooks.md << EOF
# 相談内容: Claude Code Hooks機能の調査

## 質問
Claude Codeのhooks機能について詳しく教えてください
EOF

# Geminiに送信
export GEMINI_API_KEY="your-api-key"
gemini -p "$(cat ~/.claude/gemini-consultations/2025-08-07-18-26-00-claude-hooks.md)" > ~/.claude/gemini-responses/2025-08-07-18-26-00-claude-hooks.md
```

## まとめ

Gemini CLIのセットアップで遭遇する主な問題は：

1. **認証エラー**: APIキーまたはGoogleログインで解決
2. **Node.jsバージョン**: v20以上にアップグレード
3. **日本語対応**: プロンプトで明示的に指定
4. **Claude Codeとの連携**: グローバル設定とディレクトリ構造の準備

これらの解決方法を理解していれば、スムーズにセットアップを完了し、Claude Codeとの強力な連携環境を構築できます。

### 今回学んだこと

- Gemini CLIの認証には複数の方法があり、用途に応じて選択できる
- Node.jsのバージョン管理（nvm）の重要性
- Claude Codeとの連携により、複数のAIモデルを効果的に活用できる
- APIキーの安全な管理方法
- グローバル設定だけで十分な連携が可能

### 次のステップ

1. Gemini CLIのカスタムプロンプトテンプレートの作成
2. 自動化スクリプトの拡張
3. 他のAIツールとの連携強化
4. hooks機能を使った開発ワークフローの自動化

## 参考リンク

- [Gemini CLI 公式リポジトリ](https://github.com/google/gemini-cli)
- [Google AI Studio](https://aistudio.google.com/)
- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)
- [Claude Code ドキュメント](https://docs.anthropic.com/claude-code)
- [Claude Code Hooks機能解説](https://docs.anthropic.com/claude-code/hooks)