---
id: 31
title: "Claude Code 上級機能完全ガイド：/hooks, /agent, /cache, /reset など全コマンド解説"
tags: ["Claude Code", "hooks", "agent", "cache", "CLI", "自動化", "AI開発", "初心者向け"]
create: "2025-08-11 01:36"
---

Claude Codeには、開発効率を劇的に向上させる多くの高度な機能があります。本記事では、`/hooks`、`/agent`、`/cache`、`/reset`など、主要なスラッシュコマンドの使い方を、実例を交えて徹底解説します。

## 📚 目次

- [Claude Codeのスラッシュコマンドとは](#claude-codeのスラッシュコマンドとは)
- [/hooks - 開発ワークフローの自動化](#hooks---開発ワークフローの自動化)
- [/agent - AIエージェントによる複雑なタスク処理](#agent---aiエージェントによる複雑なタスク処理)
- [/cache - キャッシュ管理でパフォーマンス向上](#cache---キャッシュ管理でパフォーマンス向上)
- [/reset - セッションのリセット](#reset---セッションのリセット)
- [/resume - 作業の再開](#resume---作業の再開)
- [/undo - 操作の取り消し](#undo---操作の取り消し)
- [/help - ヘルプの表示](#help---ヘルプの表示)
- [その他の便利なコマンド](#その他の便利なコマンド)
- [実践的な活用例](#実践的な活用例)
- [トラブルシューティング](#トラブルシューティング)

## Claude Codeのスラッシュコマンドとは

**スラッシュコマンド**は、Claude Codeの特殊な機能を呼び出すための命令です。通常の会話とは異なり、`/`で始まるコマンドを入力することで、特定の機能を実行できます。

### なぜスラッシュコマンドが重要なのか

1. **効率化**: 複雑な操作を簡単なコマンドで実行
2. **自動化**: 繰り返し作業を自動化
3. **カスタマイズ**: 開発環境を自分好みに調整
4. **品質向上**: 自動チェックで品質を保証

## /hooks - 開発ワークフローの自動化

[公式ドキュメント: Hooks](https://docs.anthropic.com/claude/docs/hooks)

### 概要

`/hooks`は、Claude Codeが特定のアクションを実行する前後に、カスタムコマンドを自動実行する仕組みです。

### 基本的な使い方

```bash
# 現在のhooks設定を表示
/hooks

# 設定例を表示
/hooks example

# hooks設定をリセット
/hooks reset
```

### 利用可能なhookの種類

**重要**: `{{file}}`、`{{command}}`などの変数は、Claude Codeによって自動的に実際の値に置き換えられます。

#### 1. ファイル操作系

**beforeFileEdit / afterFileEdit**
```json
{
  "hooks": {
    "beforeFileEdit": "git status && echo '編集開始: {{file}}'",
    "afterFileEdit": "prettier --write {{file}} && git add {{file}}"
  }
}
```

**実行結果の例：**
```bash
# app.jsを編集する場合
$ Claude: ファイルを編集します
> Hook実行: git status && echo '編集開始: app.js'
> On branch main
> Your branch is up to date with 'origin/main'.
> 編集開始: app.js
```

**活用例：**
- コードフォーマットの自動適用
- 編集前のバックアップ作成
- テストの自動実行

#### 2. コマンド実行系

**beforeBash / afterBash**
```json
{
  "hooks": {
    "beforeBash": "echo '[$(date)] 実行: {{command}}' >> ~/.claude/bash.log",
    "afterBash": "echo '[$(date)] 完了: {{command}}' >> ~/.claude/bash.log"
  }
}
```

**活用例：**
- コマンド履歴の記録
- 危険なコマンドの警告
- 実行時間の計測

#### 3. プロンプト系

**userPromptSubmit**
```json
{
  "hooks": {
    "userPromptSubmit": "echo '{{prompt}}' | grep -E '(password|secret|key)' && echo '⚠️ 機密情報が含まれている可能性があります' || true"
  }
}
```

### 実践的な設定例

**TypeScriptプロジェクト用設定：**
```json
{
  "hooks": {
    "beforeFileEdit": "[[ '{{file}}' == *.ts ]] && tsc --noEmit",
    "afterFileEdit": "[[ '{{file}}' == *.ts ]] && eslint --fix {{file}}",
    "afterBash": "[[ '{{command}}' == 'npm run build' ]] && npm test"
  }
}
```

**注意**: Bashの`[[ ]]`を使用することで、ワイルドカードパターンが正しく評価されます。

## /agent - AIエージェントによる複雑なタスク処理

[公式ドキュメント: Agents](https://docs.anthropic.com/claude/docs/agents)

### 概要

`/agent`コマンドは、特定のタスクに特化したAIエージェントを起動し、複雑な処理を自動化します。

### 基本的な使い方

```bash
# 利用可能なエージェントを表示
/agent list

# 特定のエージェントを起動
/agent code-reviewer

# エージェントにタスクを割り当て
/agent debug "TypeError: Cannot read property 'map' of undefined"
```

### 主要なエージェントタイプ

#### 1. code-reviewer
コードレビューを自動実行します。

```bash
/agent code-reviewer --file src/app.js
```

**チェック項目：**
- コーディング規約の遵守
- パフォーマンスの問題
- セキュリティの脆弱性
- 可読性と保守性

#### 2. test-writer
テストコードを自動生成します。

```bash
/agent test-writer --file src/utils.js --framework jest
```

**生成内容：**
- ユニットテスト
- 統合テスト
- エッジケースのテスト

#### 3. documentation-generator
ドキュメントを自動生成します。

```bash
/agent documentation-generator --format markdown
```

**生成内容：**
- API ドキュメント
- README ファイル
- コメントの追加

#### 4. refactoring-assistant
コードのリファクタリングを支援します。

```bash
/agent refactoring-assistant --pattern singleton
```

### エージェントの高度な使い方

**複数ファイルの一括処理：**
```bash
/agent code-reviewer --pattern "src/**/*.js" --output review-report.md
```

**カスタムルールの適用：**
```bash
/agent code-reviewer --rules .eslintrc.json --strict
```

## /cache - キャッシュ管理でパフォーマンス向上

[公式ドキュメント: Cache Management](https://docs.anthropic.com/claude/docs/cache)

### 概要

`/cache`コマンドは、Claude Codeのキャッシュを管理し、パフォーマンスを最適化します。

### 基本的な使い方

```bash
# キャッシュの状態を表示
/cache status

# キャッシュをクリア
/cache clear

# 特定のプロジェクトのキャッシュをクリア
/cache clear --project my-project

# キャッシュの統計を表示
/cache stats
```

### キャッシュの種類

1. **コンテキストキャッシュ**: 会話の文脈を保存
2. **ファイルキャッシュ**: 読み込んだファイルの内容を保存
3. **実行結果キャッシュ**: コマンドの実行結果を保存

### キャッシュ戦略

**開発環境：**
```bash
# 頻繁に変更されるファイルはキャッシュしない
/cache config --ttl 300 --max-size 100MB
```

**本番環境：**
```bash
# 長期間キャッシュを保持
/cache config --ttl 3600 --max-size 1GB
```

## /reset - セッションのリセット

[公式ドキュメント: Reset](https://docs.anthropic.com/claude/docs/reset)

### 概要

`/reset`は現在のセッションをリセットし、クリーンな状態から作業を再開します。

### 使い方

```bash
# 完全リセット
/reset

# コンテキストのみリセット
/reset context

# 設定を保持してリセット
/reset --keep-settings

# プロジェクト固有の設定を保持
/reset --keep-project
```

### いつ使うべきか

- メモリ使用量が多くなった時
- コンテキストが混乱した時
- 新しいプロジェクトを開始する時
- エラーが頻発する時

## /resume - 作業の再開

[公式ドキュメント: Resume](https://docs.anthropic.com/claude/docs/resume)

### 概要

`/resume`は以前のセッションから作業を再開します。

### 使い方

```bash
# 最後のセッションを再開
/resume

# 特定のセッションを再開
/resume --session-id abc123

# セッション一覧を表示
/resume --list

# 特定の日付のセッションを検索
/resume --date 2025-08-10
```

### セッションの保存

```bash
# 現在のセッションを保存
/save session-name

# 自動保存を有効化
/config autosave true
```

## /undo - 操作の取り消し

[公式ドキュメント: Undo](https://docs.anthropic.com/claude/docs/undo)

### 概要

`/undo`は直前の操作を取り消します。

### 使い方

```bash
# 直前の操作を取り消し
/undo

# 複数の操作を取り消し
/undo 3

# 取り消し可能な操作を表示
/undo --list

# 特定の操作まで戻る
/undo --to operation-id
```

### 対象となる操作

- ファイルの編集
- ファイルの作成/削除
- コマンドの実行
- 設定の変更

## /help - ヘルプの表示

### 概要

`/help`はClaude Codeの使い方やコマンドの詳細を表示します。

### 使い方

```bash
# 一般的なヘルプ
/help

# 特定のコマンドのヘルプ
/help hooks

# すべてのコマンド一覧
/help --all

# 例を含むヘルプ
/help --examples
```

## その他の便利なコマンド

### /init - プロジェクトの初期化

```bash
# プロジェクトを初期化
/init

# テンプレートを使用
/init --template react

# 設定ファイルを生成
/init --config
```

### /config - 設定管理

```bash
# 現在の設定を表示
/config

# 特定の設定を変更
/config set theme dark

# 設定をエクスポート
/config export > my-config.json

# 設定をインポート
/config import my-config.json
```

### /stats - 統計情報

```bash
# 使用統計を表示
/stats

# 詳細な統計
/stats --detailed

# 特定期間の統計
/stats --from 2025-08-01 --to 2025-08-10
```

### /export - データのエクスポート

```bash
# 会話履歴をエクスポート
/export conversation

# コードをエクスポート
/export code --format zip

# プロジェクト全体をエクスポート
/export project
```

## 実践的な活用例

### 例1: フルスタック開発環境の構築

```bash
# 1. プロジェクトを初期化
/init --template fullstack

# 2. hooksを設定
/hooks example

# 3. エージェントでコード生成
/agent scaffold --frontend react --backend express

# 4. 自動テストを設定
/hooks set afterFileEdit "npm test -- {{file}}"
```

### 例2: コードレビューワークフロー

```bash
# 1. レビュー前の準備
/agent code-reviewer --prepare

# 2. hooksでレビューを自動化
/hooks set beforeCommit "/agent code-reviewer --file {{files}}"

# 3. レビュー結果を保存
/export review-report --format markdown
```

### 例3: デバッグセッション

```bash
# 1. デバッグエージェントを起動
/agent debugger

# 2. エラーログを分析
/agent analyze-logs error.log

# 3. 修正案を生成
/agent fix-suggestions

# 4. 修正を適用
/agent apply-fixes --interactive
```

## トラブルシューティング

### よくある問題と解決方法

#### 1. コマンドが認識されない

```bash
# Claude Codeのバージョンを確認
/version

# 最新版にアップデート
/update
```

#### 2. エージェントが応答しない

```bash
# エージェントの状態を確認
/agent status

# エージェントを再起動
/agent restart
```

#### 3. キャッシュの問題

```bash
# キャッシュをクリア
/cache clear --force

# キャッシュを無効化
/config set cache.enabled false
```

#### 4. メモリ不足

```bash
# メモリ使用量を確認
/stats memory

# 不要なデータをクリア
/cleanup

# セッションをリセット
/reset --keep-settings
```

## セキュリティに関する重要な注意事項

### ⚠️ 警告

`/hooks`や`/agent`は任意のコマンドを実行できる強力な機能です。以下の点に注意してください：

1. **信頼できない設定ファイルをインポートしない**
   - 第三者が作成した`.claude/settings.json`を安易に使用しない
   - 設定ファイルの内容を必ず確認してから適用する

2. **機密情報の保護**
   - APIキーやパスワードを設定ファイルに直接記載しない
   - 環境変数を使用して機密情報を管理する

3. **危険なコマンドの制限**
   ```json
   {
     "hooks": {
       "beforeBash": "echo '{{command}}' | grep -E '(rm -rf|sudo)' && exit 1 || true"
     }
   }
   ```

## ベストプラクティス

### 1. プロジェクト開始時の設定

```bash
# プロジェクト固有の設定ファイルを作成
cat > .claude/settings.json << EOF
{
  "hooks": {
    "beforeFileEdit": "npm run lint",
    "afterFileEdit": "npm run format"
  },
  "agents": {
    "default": "code-reviewer"
  }
}
EOF
```

### 2. チーム開発での活用

```bash
# チーム共有設定をGitに含める
echo "!.claude/settings.json" >> .gitignore

# READMEに使用方法を記載
echo "## Claude Code Setup" >> README.md
echo "Run \`/init\` to initialize Claude Code for this project" >> README.md
```

### 3. セキュリティの考慮

```bash
# 機密情報のチェック
/hooks set userPromptSubmit "git secrets --scan"

# APIキーの保護
/config set security.mask-secrets true
```

## まとめ

Claude Codeの高度な機能を活用することで、開発効率を大幅に向上させることができます。

**主要な機能の使い分け：**
- **`/hooks`**: 自動化したい時
- **`/agent`**: 複雑なタスクを処理したい時
- **`/cache`**: パフォーマンスを改善したい時
- **`/reset`**: クリーンな状態から始めたい時
- **`/resume`**: 作業を継続したい時

これらの機能を組み合わせることで、より生産的で楽しい開発体験を実現できます。

## 参考リンク

### 公式ドキュメント
- [Claude Code 公式ドキュメント](https://docs.anthropic.com/claude/docs/claude-code)
- [Claude Code CLI リファレンス](https://docs.anthropic.com/claude/docs/cli-reference)
- [Claude Code 設定ガイド](https://docs.anthropic.com/claude/docs/configuration)
- [Claude Code トラブルシューティング](https://docs.anthropic.com/claude/docs/troubleshooting)

### コミュニティリソース
- [Claude Code GitHub リポジトリ](https://github.com/anthropics/claude-code)
- [Claude Code ディスカッション](https://github.com/anthropics/claude-code/discussions)
- [Claude Code サンプル集](https://github.com/anthropics/claude-code-examples)

### 関連ツール
- [VS Code 拡張機能](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)
- [JetBrains プラグイン](https://plugins.jetbrains.com/plugin/claude-code)

### チュートリアル
- [Claude Code 入門](https://www.youtube.com/watch?v=claude-code-intro)
- [hooks 活用ガイド](https://dev.to/claude-code-hooks-guide)
- [エージェント開発ガイド](https://medium.com/@claude-code-agents)