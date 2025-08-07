---
id: 26
title: "GitHub ActionsでClaude Code Reviewを自動化：PRの品質を向上させる実践ガイド"
tags: ["GitHub Actions", "Claude Code", "CI/CD", "コードレビュー", "自動化", "品質管理"]
create: "2025-08-07 19:39"
---

プルリクエストを作成するたびに、自動でAIがコードレビューしてくれたら便利だと思いませんか？今回は、GitHub ActionsとClaude Codeを組み合わせて、自動コードレビューシステムを構築する方法を解説します。

## 前提知識チェックリスト

この記事を読む前に、以下の知識があるとスムーズに理解できます：

- [ ] **Git基本操作**: branch作成、commit、push、pull requestの概念
- [ ] **GitHub基本機能**: リポジトリ、Issues、Pull Requestsタブの場所
- [ ] **YAMLファイル**: インデントによる階層構造の基本
- [ ] **環境変数**: システムに設定される変数の概念
- [ ] **APIトークン**: 外部サービスとの認証に使う秘密の文字列

不安な方は、まず[GitHub公式の入門ガイド](https://docs.github.com/ja/get-started)を参照してください。

## はじめに

コードレビューは、ソフトウェア開発において品質を保つための重要なプロセスです。しかし、レビュアーの時間は限られており、すべてのPR（プルリクエスト：コードの変更提案）を詳細にレビューすることは困難です。

GitHub ActionsとClaude Codeを使えば、PRが作成されると同時に自動的にコードレビューが実行され、潜在的な問題や改善点を指摘してくれます。

## 重要な用語解説

### 基本用語

- **CI/CD**: Continuous Integration（継続的統合）/ Continuous Delivery（継続的配信）の略。コードの変更を自動的にテスト・デプロイする仕組み
- **PR（Pull Request）**: 自分の変更を本番コードに取り込んでもらうための提案
- **ワークフロー**: GitHub Actionsで実行される一連の自動処理
- **OAuth トークン**: アプリケーション間の安全な認証に使われる一時的な認証情報（パスワードより安全）
- **YAML**: 設定ファイルによく使われる、人間が読みやすいデータ記述言語

## claude-code-review.ymlとは？

`.github/workflows/claude-code-review.yml`は、GitHub Actionsのワークフロー定義ファイルです。このファイルが、PRの自動レビューを実現する心臓部となります。

### GitHub Actionsの基本的な流れ

```
1. 開発者がPRを作成
     ↓
2. GitHubがワークフローを検知
     ↓
3. 仮想マシン（Ubuntu）が起動
     ↓
4. Claude Codeが呼び出される
     ↓
5. AIがコードをレビュー
     ↓
6. PRにコメントが自動投稿
```

### ワークフローの全体像

```yaml
name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  claude-review:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Run Claude Code Review
        uses: anthropics/claude-code-action@beta
        with:
          claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
          direct_prompt: |
            このPRをレビューしてください
```

## 基本的な構成要素の解説

### 1. トリガー（on）

```yaml
on:
  pull_request:
    types: [opened, synchronize]
```

**解説**：
- `opened`: 新しいPRが作成されたとき
- `synchronize`: 既存のPRに新しいコミットがプッシュされたとき

つまり、PRを作成または更新するたびに自動レビューが実行されます。

### YAMLの`${{ }}`記法について

```yaml
${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
```

この`${{ }}`は、GitHub Actionsの特殊な記法で、「変数を展開する」という意味です。
- `secrets.`：GitHubに安全に保存された秘密情報にアクセス
- JavaScriptのテンプレート文字列`${}`に似た機能

### 2. ジョブ（jobs）

```yaml
jobs:
  claude-review:
    runs-on: ubuntu-latest
```

**解説**：
- `claude-review`: ジョブの名前（任意）
- `runs-on: ubuntu-latest`: 実行環境（Ubuntuの最新版）

### 3. 認証（secrets）

```yaml
claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
```

**解説**：
- GitHubのSecretsに保存された認証トークンを使用
- セキュアにAPIキーを管理

## 日本語化対応の実装方法

### 実装前の課題

デフォルトでは、Claude Codeは英語でコメントを返すことがありました。日本のチームで使用する場合、これは読みやすさの観点で課題となります。

### 実装した解決策

```yaml
# カスタム指示を追加
custom_instructions: |
  すべての応答を日本語で行ってください。
  コードレビューのコメントも日本語で記載してください。
  技術用語は適切な日本語訳を使用するか、カタカナ表記にしてください。

# 日本語でのレビュープロンプト
direct_prompt: |
  このプルリクエストを日本語でレビューし、以下の観点からフィードバックを提供してください：
  - コード品質とベストプラクティス
  - 潜在的なバグや問題
  - パフォーマンスの考慮事項
  - セキュリティ上の懸念
  - テストカバレッジ
  
  建設的で役立つフィードバックを心がけてください。
  すべての回答は日本語で行ってください。
```

### 設定のポイント

1. **custom_instructions**: すべての対話に適用される基本指示
2. **direct_prompt**: 自動レビュー時の具体的な指示
3. **明示的な日本語指定**: 複数箇所で日本語を指定することで確実性を高める

## 実務でよくある使用ケース

### ケース1: 新人エンジニアのサポート

```yaml
# 新人向けの詳細なレビュー設定
direct_prompt: |
  このPRは新人エンジニアによるものです。
  以下の点を特に丁寧に説明してください：
  - なぜその修正が必要なのか
  - より良い書き方の具体例
  - 参考になるドキュメントやリンク
  
  励ましのコメントも含めてください。
```

**使用場面**：
- 新卒エンジニアの最初のPR
- インターンの成果物レビュー
- ジュニアエンジニアの学習支援

### ケース2: 特定ファイルのみレビュー

```yaml
on:
  pull_request:
    types: [opened, synchronize]
    paths:
      - "src/**/*.ts"
      - "src/**/*.tsx"
      - "!src/**/*.test.ts"  # テストファイルは除外
```

**使用場面**：
- フロントエンドコードのみレビュー
- APIエンドポイントの変更を重点チェック
- 設定ファイルの変更は自動レビュー不要

### ケース3: 緊急リリース時のスキップ

```yaml
jobs:
  claude-review:
    if: |
      !contains(github.event.pull_request.title, '[skip-review]') &&
      !contains(github.event.pull_request.title, '[HOTFIX]')
```

**使用場面**：
- 緊急バグ修正
- 本番障害対応
- 既にレビュー済みのチェリーピック

### ケース4: チーム別のレビュー基準

```yaml
direct_prompt: |
  ${{ github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR' && 
  '初めての貢献者です。歓迎のメッセージと共に、丁寧なフィードバックをお願いします。' ||
  github.event.pull_request.labels.*.name contains 'backend' &&
  'バックエンドの変更です。パフォーマンスとセキュリティを重点的にレビューしてください。' ||
  'スタンダードなコードレビューをお願いします。' }}
```

**使用場面**：
- オープンソースプロジェクトの外部貢献者対応
- フロントエンド/バックエンドチームの異なる基準
- セキュリティ重視のプロジェクト

### ケース5: テスト実行を含むレビュー

```yaml
- name: Run Claude Code Review
  uses: anthropics/claude-code-action@beta
  with:
    claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
    allowed_tools: "Bash(npm run test),Bash(npm run lint),Bash(npm run typecheck)"
    direct_prompt: |
      PRをレビューし、以下を実行してください：
      1. コードの静的解析（lint）
      2. 型チェック（typecheck）
      3. テストの実行
      4. 結果を踏まえたフィードバック
```

**使用場面**：
- CI/CDパイプラインの一部として
- テストカバレッジの確認
- リファクタリング時の回帰テスト

## 高度な設定例

### 1. モデルの選択

```yaml
# より高度な分析が必要な場合
model: "claude-opus-4-20250514"  # デフォルトはSonnet 4
```

### 2. スティッキーコメント

```yaml
use_sticky_comment: true  # 同じPRへの追加コミットで既存コメントを更新
```

### 3. 条件付き実行

```yaml
jobs:
  claude-review:
    if: |
      github.event.pull_request.user.login == 'external-contributor' ||
      github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR'
```

## 最小構成から始める

まずは最もシンプルな設定から始めましょう：

```yaml
# .github/workflows/claude-code-review.yml
name: Simple Claude Review
on:
  pull_request:
    types: [opened]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@beta
        with:
          claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
          direct_prompt: "このPRを簡単にレビューしてください"
```

この最小構成で動作確認してから、徐々に機能を追加していきます。

## セットアップ手順（画像付き解説）

### ステップ1: トークンの取得

#### 1-1. Claude Codeへアクセス
1. ブラウザで[Claude Code](https://claude.ai/code)を開く
2. アカウントがない場合は新規登録（メールアドレスが必要）

#### 1-2. GitHub連携の設定
1. 画面右上のアイコンをクリック → 「Settings」を選択
2. 「Integrations」タブを開く
3. 「GitHub」セクションで「Connect」ボタンをクリック
4. GitHubの認証画面が表示されるので、権限を確認して「Authorize」

#### 1-3. OAuthトークンの取得
1. 連携完了後、「Generate OAuth Token」ボタンが表示される
2. クリックしてトークンを生成
3. 表示されたトークンをコピー（この画面を閉じると二度と表示されません！）

### ステップ2: GitHubシークレットの設定

#### 2-1. Settings画面への移動
1. GitHubでリポジトリを開く
2. 上部メニューの「Settings」タブをクリック（歯車アイコン）
   - **注意**: Settingsが表示されない場合は、リポジトリの管理者権限が必要です

#### 2-2. Secretsの設定
1. 左サイドバーの「Secrets and variables」をクリック
2. 展開されたメニューから「Actions」を選択
3. 「New repository secret」ボタンをクリック（緑色のボタン）

#### 2-3. トークンの保存
1. **Name欄**: `CLAUDE_CODE_OAUTH_TOKEN`と入力（大文字で正確に！）
2. **Value欄**: コピーしたトークンを貼り付け
3. 「Add secret」ボタンをクリック

成功すると、トークンは`***`として表示されます（セキュリティのため内容は見えません）。

### ステップ3: ワークフローファイルの作成

#### 3-1. ファイル作成方法（3つの選択肢）

**方法A: GitHub Web UIで作成（初心者推奨）**
1. リポジトリのトップページで「Add file」→「Create new file」
2. ファイル名に`.github/workflows/claude-code-review.yml`と入力
3. 自動的にフォルダが作成される

**方法B: コマンドラインで作成**
```bash
# プロジェクトのルートディレクトリで実行
mkdir -p .github/workflows
touch .github/workflows/claude-code-review.yml
```

**方法C: VSCodeなどのエディタで作成**
1. `.github`フォルダを作成
2. その中に`workflows`フォルダを作成
3. `claude-code-review.yml`ファイルを新規作成

### ステップ4: 基本設定の記述

```yaml
name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  claude-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code Review
        uses: anthropics/claude-code-action@beta
        with:
          claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
          custom_instructions: |
            すべての応答を日本語で行ってください。
          direct_prompt: |
            このPRをレビューしてください。
```

## トラブルシューティング（詳細版）

### 問題1: レビューが実行されない

#### 確認手順
1. **Actionsタブの確認**
   - リポジトリ上部の「Actions」タブをクリック
   - ワークフローが表示されているか確認
   - 表示されない場合：YAMLファイルの配置が間違っている可能性

2. **YAMLファイルの構文チェック**
   ```bash
   # オンラインツールでチェック
   # https://www.yamllint.com/ にアクセスして内容を貼り付け
   ```

3. **実行ログの確認方法**
   - Actionsタブ → 失敗したワークフローをクリック
   - 赤い×マークの箇所を展開
   - エラーメッセージを確認

#### よくあるエラーと対処法

**エラー: "Bad credentials"**
- 原因：トークンが無効または期限切れ
- 解決：新しいトークンを生成して再設定

**エラー: "Workflow not found"**
- 原因：YAMLファイルの配置ミス
- 解決：`.github/workflows/`ディレクトリにあることを確認

**エラー: "Permission denied"**
- 原因：リポジトリの権限不足
- 解決：Settings → Actions → General → Workflow permissionsを確認

### 問題2: 英語でコメントされる

**原因と解決策**：
- `custom_instructions`に日本語指定を追加
- `direct_prompt`でも明示的に日本語を要求

### 問題3: レビューが表面的

**原因と解決策**：
- より具体的なプロンプトを記述
- レビュー観点を明確に指定
- 必要に応じてOpusモデルを使用

## ベストプラクティス

### 1. プロンプトの最適化

```yaml
direct_prompt: |
  ## レビュー対象
  - 変更されたファイル全体
  - 新規追加されたコード
  
  ## 重点チェック項目
  1. エラーハンドリングの適切性
  2. 非同期処理の正確性
  3. メモリリークの可能性
  4. SQLインジェクションなどのセキュリティリスク
  
  ## フィードバック形式
  - 問題がある場合：具体的な修正案を提示
  - 改善提案：なぜその方が良いか説明
  - 良い点：積極的に褒める
```

### 2. チーム文化への配慮

```yaml
custom_instructions: |
  フィードバックは以下の原則に従ってください：
  - 建設的で前向きな表現を使用
  - 「〜すべき」より「〜することをお勧めします」
  - 良い点も必ず言及
  - 学習機会として位置づける
```

### 3. 段階的な導入

1. **第1段階**: 特定のファイルタイプのみ
2. **第2段階**: 新人のPRのみ
3. **第3段階**: 全PRに適用
4. **第4段階**: テスト実行も含める

## セキュリティ上の注意点

### 1. トークンの管理

- GitHub Secretsを必ず使用
- トークンをコードに直接記載しない
- 定期的にトークンを更新

### 2. 権限の最小化

```yaml
permissions:
  contents: read      # リポジトリの読み取りのみ
  pull-requests: read # PRの読み取りのみ
  issues: read        # Issueの読み取りのみ
```

### 3. 実行環境の制限

```yaml
allowed_tools: "Bash(npm run test)"  # 特定のコマンドのみ許可
```

## 費用対効果の考察

### コスト

- Claude API使用料（PRあたり約$0.01-0.05）
- GitHub Actions実行時間（無料枠内で十分）

### 効果

- レビュー時間の短縮（約30-50%）
- バグの早期発見
- コード品質の向上
- 新人教育の効率化

### ROI計算例

```
月間PR数: 100
レビュー時間短縮: 30分/PR
エンジニア時給: 5,000円

月間削減時間: 100 × 0.5時間 = 50時間
月間削減コスト: 50時間 × 5,000円 = 250,000円
月間APIコスト: 100 × $0.03 × 150円 = 450円

ROI = (250,000 - 450) / 450 = 約555倍
```

## よくある質問（FAQ）

### Q1: 既存のレビュープロセスと併用できる？
**A**: はい、人間のレビューと並行して使用できます。AIは補助的な役割として、見落としがちな問題を指摘します。

### Q2: レビューコメントを無視したい場合は？
**A**: PRタイトルに`[skip-review]`を含めることでスキップできます（設定が必要）。

### Q3: 特定のファイルだけレビューさせるには？
**A**: `paths`フィルターを使用して、対象ファイルを指定できます。

### Q4: 無料枠はどれくらい？
**A**: GitHub Actions は月2,000分まで無料。Claude APIは使用量に応じた従量課金です。

### Q5: プライベートリポジトリでも使える？
**A**: はい、使用できます。ただし、GitHub Actionsの無料枠が異なります。

## 動作確認の方法

### 正しく設定できたかの確認手順

1. **テスト用PRの作成**
   ```bash
   git checkout -b test-claude-review
   echo "test" > test.txt
   git add test.txt
   git commit -m "Test Claude Review"
   git push origin test-claude-review
   ```

2. **GitHubでPRを作成**
   - 「Compare & pull request」ボタンをクリック
   - PRを作成

3. **動作確認**
   - Actionsタブで実行状況を確認
   - 1-2分待つ
   - PRページにClaudeのコメントが表示されれば成功！

## まとめ

GitHub ActionsとClaude Codeを組み合わせることで、以下が実現できます：

1. **自動化されたコードレビュー**: PRごとに一貫した品質チェック
2. **日本語対応**: チーム全員が理解しやすいフィードバック
3. **カスタマイズ性**: プロジェクトに応じた柔軟な設定
4. **教育的効果**: 新人エンジニアの成長支援
5. **時間削減**: レビュアーの負担軽減

### 導入のステップ

1. まずは簡単な設定から始める
2. チームのフィードバックを収集
3. プロンプトを徐々に最適化
4. 必要に応じて高度な機能を追加

### 今後の展望

- AIレビューの精度向上
- より高度なセキュリティチェック
- プロジェクト固有のルール学習
- 他のCIツールとの連携強化

これで、あなたのチームも自動コードレビューを始められます！

## 参考リンク

- [GitHub Actions ドキュメント](https://docs.github.com/ja/actions)
- [Claude Code 公式ドキュメント](https://docs.anthropic.com/claude-code)
- [claude-code-action リポジトリ](https://github.com/anthropics/claude-code-action)
- [GitHub Secrets の使い方](https://docs.github.com/ja/actions/security-guides/encrypted-secrets)