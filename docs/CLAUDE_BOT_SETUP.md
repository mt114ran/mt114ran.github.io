# Claude Bot セットアップガイド

GitHub Issueのコメントに`/claude`を付けるだけで、Claudeが自動的に開発タスクを実行し、Pull Requestを作成する仕組みです。

## 🚀 機能

- Issueのコメントで`/claude`コマンドを使用してClaudeを呼び出し
- Claudeが自動的にコードを生成・修正
- 変更内容を含むPull Requestを自動作成
- 権限チェックによるセキュリティ確保

## 📋 前提条件

- GitHubリポジトリの管理者権限
- Anthropic APIキー（Claude API）
- Node.jsプロジェクト

## 🔧 セットアップ手順

### 1. Anthropic APIキーの取得

1. [Anthropic Console](https://console.anthropic.com/)にアクセス
2. アカウントを作成またはログイン
3. API Keysセクションで新しいAPIキーを生成
4. キーを安全な場所にコピー

### 2. GitHub Secretsの設定

リポジトリの設定でSecretを追加：

1. GitHubリポジトリの**Settings**タブを開く
2. 左メニューから**Secrets and variables** > **Actions**を選択
3. **New repository secret**をクリック
4. 以下のSecretを追加：
   - Name: `ANTHROPIC_API_KEY`
   - Value: 取得したAnthropicのAPIキー

### 3. GitHub Actionsワークフローの配置

`.github/workflows/claude-bot.yml`ファイルをリポジトリに追加（上記で作成済み）

### 4. 必要な権限の設定

リポジトリの**Settings** > **Actions** > **General**で以下を確認：

- **Workflow permissions**を**Read and write permissions**に設定
- **Allow GitHub Actions to create and approve pull requests**にチェック

## 📝 使い方

### 基本的な使用方法

1. **Issueを作成**
   ```markdown
   Title: ダークモードの実装
   Body: アプリケーションにダークモードを追加したい
   ```

2. **Issueにコメント**
   ```
   /claude ダークモードを実装してください。React Contextを使用して、トグルボタンも追加してください。
   ```

3. **自動実行**
   - 🚀 リアクションが付く（処理開始）
   - Claudeが応答をコメント
   - Pull Requestが自動作成される

### コマンド例

#### 新機能の実装
```
/claude このIssueに記載された機能を実装してください
```

#### バグ修正
```
/claude エラーメッセージを分析して修正案を提示し、実装してください
```

#### リファクタリング
```
/claude このコンポーネントをTypeScriptに変換してください
```

#### テストの追加
```
/claude この機能のユニットテストを作成してください
```

## 🔒 セキュリティ

### 権限チェック

- リポジトリの**Write**権限以上を持つユーザーのみ使用可能
- 権限のないユーザーがコマンドを使用した場合はエラーメッセージを表示

### 制限事項

- APIキーは GitHub Secrets で安全に管理
- 生成されるPRは必ず人間のレビューが必要
- 機密情報を含むIssueでは使用を避ける

## ⚙️ カスタマイズ

### ワークフローの調整

`claude-bot.yml`の以下の部分を編集可能：

#### モデルの変更
```yaml
model: 'claude-3-5-sonnet-20241022'  # 最新モデルに変更可能
```

#### ブランチ名のパターン
```javascript
const branchName = `claude-bot/issue-${context.issue.number}-${Date.now()}`;
```

#### システムプロンプトのカスタマイズ
```javascript
const systemPrompt = `あなたはGitHubリポジトリの開発アシスタントです...`;
```

## 🐛 トラブルシューティング

### よくある問題と解決方法

#### 1. 権限エラー
**エラー**: `You do not have permission to use Claude bot.`
**解決**: リポジトリのCollaboratorとして追加され、Write権限があることを確認

#### 2. APIキーエラー
**エラー**: `Error executing Claude: Invalid API key`
**解決**: GitHub SecretsにANTHROPIC_API_KEYが正しく設定されているか確認

#### 3. PR作成失敗
**エラー**: `Failed to create pull request`
**解決**: Actions権限でWrite権限とPR作成権限が有効になっているか確認

#### 4. コード適用失敗
**症状**: Claudeは応答するがPRが作成されない
**解決**: Claudeの応答形式を確認し、ファイルパスとコードブロックが正しく含まれているか確認

## 📊 使用制限

### API制限
- Anthropic APIの利用制限に準拠
- 大量のリクエストは料金が発生する可能性あり

### GitHub Actions制限
- 月間2,000分の無料枠（パブリックリポジトリは無制限）
- 同時実行ジョブ数の制限

## 🔄 アップデート

### 最新バージョンへの更新

1. Anthropic SDKの更新
```bash
npm update @anthropic-ai/sdk
```

2. GitHub Actionsの更新
```yaml
uses: actions/checkout@v4  # 最新バージョンを確認
uses: actions/setup-node@v4
uses: actions/github-script@v7
```

## 💡 ベストプラクティス

1. **明確な指示**
   - 具体的で詳細な指示を記載
   - 期待する出力形式を明示

2. **段階的な実装**
   - 大きな機能は複数のIssueに分割
   - 各PRは単一の責任を持つ

3. **レビュープロセス**
   - 自動生成されたコードは必ずレビュー
   - テストを実行してから承認

4. **ドキュメント**
   - 生成された機能のドキュメントを追加
   - READMEの更新も指示に含める

## 📚 参考リンク

- [Anthropic API Documentation](https://docs.anthropic.com/)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [GitHub REST API](https://docs.github.com/rest)

## 🤝 貢献

改善案やバグ報告は、Issueを作成してください。
PRも歓迎します！

## 📄 ライセンス

このツールはMITライセンスで提供されています。