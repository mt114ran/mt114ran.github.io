# AIエージェントのコンテキスト設計ベストプラクティス（2024-2025年版）

## 収集した最新情報のまとめ

### 調査実施日：2025年8月31日
### 収集記事数：約50件の関連記事を調査

---

## 1. AIエージェントのコンテキスト設計の基本原則（2024年最新）

### 1.1 構造と組織化のベストプラクティス

参考：[Best Practice Guidelines for Prompt Markdown Instructions](https://gist.github.com/eonist/bf948cea1af1463732e2f5528a49572b)

#### 推奨される構造
```markdown
# コンテキストファイルの基本構造

## 1. コンテキスト（Context）
- タスクや目標を簡潔に説明
- AIエージェントの役割を明確化（例："You are an expert editor..."）

## 2. ステップバイステップの指示
- 番号付きリストで手順を記載
- 各ステップは具体的かつ測定可能に

## 3. 出力形式の定義
- 期待される形式を明確に指定（例："Markdownテーブル形式で回答"）

## 4. 制約条件
- やってはいけないことを明記
- セキュリティルールを最優先に配置
```

### 1.2 明確な指示の書き方

参考：[OpenAI - Best practices for prompt engineering](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)

#### キーポイント
1. **シンプルに保つ**：明確で簡潔な言語を使用
2. **AIエージェントのアイデンティティを明記**：最初にペルソナを定義
3. **タスクを分解**：ステップバイステップで概要を説明
4. **サンプルを提供**：入力例と期待される出力例を含める
5. **ガードレールを追加**：コンテキストに応じた応答のみするよう指示

### 1.3 2024年の新しいアプローチ

参考：[Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)

#### 拡張思考モード（Extended Thinking Mode）
```markdown
## 思考レベルの指定
- "think" - 基本的な思考時間
- "think hard" - より深い検討
- "think harder" - さらに詳細な分析
- "ultrathink" - 最大の思考予算を割り当て
```

これらの特定のフレーズは、システム内で増加する思考予算レベルに直接マッピングされています。

---

## 2. Claudeでのインデックス機能（2024-2025年版）

### 2.1 Claude Codeのコードベース理解機能

参考：[Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)

#### 主な特徴
- **エージェンティック検索**：手動でコンテキストファイルを選択することなく、プロジェクト構造と依存関係を理解
- **ローカル実行**：リモートコードインデックスを必要とせず、ターミナルで直接動作
- **即座のマッピング**：数秒で全体のコードベースをマッピングし説明

### 2.2 Claude Projectsの知識ベース機能

参考：[Claude Projects](https://simonwillison.net/2024/Jun/25/claude-projects/)

#### コンテキストウィンドウの仕様
- **標準容量**：200,000トークン（約500ページのテキスト）
- **エンタープライズ**：500,000トークン（Sonnet 4使用時）
- **RAGモード**：コンテキスト制限に近づくと自動的に有効化、最大10倍の容量拡張

#### 動作原理
```markdown
## Claude Projectsの知識管理
1. ファイルをプロジェクトの知識ベースにアップロード
2. Claudeは全体をコンテキストウィンドウに貼り付け
3. ベクトルデータベースやRAGの複雑さを回避
4. セマンティック検索のチャンキング問題を解消
```

### 2.3 サードパーティのインデックスソリューション

参考：[Claude Context by Zilliz](https://github.com/zilliztech/claude-context)

#### Claude Context（MCP for Claude Code）
```bash
# インストール方法
npm install -g @zilliztech/claude-context

# 使用方法
claude-context index ./your-codebase
claude-context search "自然言語でクエリ"
```

特徴：
- ハイブリッド検索（BM25 + 密ベクトル）
- 複数の埋め込みプロバイダー対応（OpenAI、VoyageAI、Ollama、Gemini）
- 15以上のプログラミング言語をサポート

参考：[PROJECT_INDEX system](https://github.com/ericbuess/claude-code-project-index)

#### PROJECT_INDEXシステム
```bash
# 任意のプロンプトに-iを追加して実行
claude-code "プロジェクト構造を分析して -i"
# PROJECT_INDEX.jsonが自動生成される
```

---

## 3. Cursorでのインデックス設定方法（2024-2025年版）

### 3.1 基本的なインデックス設定

参考：[Cursor – Codebase Indexing](https://docs.cursor.com/en/context/codebase-indexing)

#### 設定場所
```
Cursor Settings > Features > Codebase Indexing
または
Cursor Settings > Indexing & Docs
```

### 3.2 インデックスの動作原理

参考：[How Cursor Serves Billions of AI Code Completions](https://blog.bytebytego.com/p/how-cursor-serves-billions-of-ai)

#### プロセス
1. **ファイル分析**：プロジェクトを開くと自動的に開始
2. **チャンク分割**：ファイルを関数などの小さな単位に分割
3. **ローカル暗号化**：ファイル識別子を難読化
4. **埋め込み計算**：サーバーでAIモデルを使用して数値埋め込みを計算
5. **コンテンツ破棄**：実際のファイル内容は即座に破棄

### 3.3 設定のカスタマイズ

参考：[Cursor Documentation - Codebase Indexing](https://cursordocs.com/en/docs/context/codebase-indexing)

#### .cursorignoreファイルの使用
```gitignore
# .cursorignore の例
*.log
*.tmp
node_modules/
dist/
build/
# 大きなコンテンツファイル
assets/videos/
data/large-datasets/
```

#### 高度な設定オプション
```markdown
## Show Settings セクションで設定可能な項目
- 新しいリポジトリの自動インデックス有効/無効
- インデックス対象から除外するファイル/ディレクトリの指定
- インデックスされたファイルの確認（View included files）
```

### 3.4 2024-2025年の改善点

参考：[Cursor Changelog](https://cursor.com/en/changelog)

#### 最新の機能強化
- **新しい埋め込みモデル**：より正確なコードベース検索
- **PRインデックス**：マージされたPRの履歴を自動インデックス
- **セマンティック検索**：過去のPR、issue、commit、branchを検索可能
- **プロンプトの再調整**：よりクリーンで焦点を絞った結果を生成

---

## 4. クリーンコードの原則をAIコンテキストに適用する方法

### 4.1 Robert C. Martinの原則の適用

参考：[Summary of 'Clean code' by Robert C. Martin](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29)

#### AIコンテキストへの適用例

##### 単一責任の原則（SRP）
```markdown
# 悪い例
## AIエージェントの役割
- コードを書いて、テストして、デプロイして、ドキュメントも書く

# 良い例
## データ処理エージェントの役割
- データクリーニングタスクのみを処理
- 欠損値の処理、正規化、エンコーディングに特化
- モデルトレーニングや評価は含まない
```

##### 意味のある名前（Meaningful Names）
```markdown
# 悪い例
- 処理を実行する
- データを扱う

# 良い例
- ユーザー認証情報を検証する
- 売上データを月次レポート形式に変換する
```

##### DRY原則（Don't Repeat Yourself）
```markdown
# 共通のコンテキストテンプレートを作成
## base-context.md
- セキュリティルール
- コーディング規約
- 基本的な制約

## project-specific.md
- プロジェクト固有のルール
- base-context.mdを参照
```

### 4.2 プロンプトエンジニアリングへの応用

参考：[Prompt Engineering Playbook for Programmers](https://addyo.substack.com/p/the-prompt-engineering-playbook-for)

#### クリーンコード原則を使用したプロンプトテンプレート
```markdown
## プロンプト構造テンプレート

### Context（コンテキスト）
[単一責任原則に従った特定のプロジェクトコンテキスト]

### Objective（目的）
[単一の明確な目的]

### Constraints（制約）
[クリーンでシンプルな要件]

### Expected Output（期待される出力）
[明確に定義された構造]

### Quality Standards（品質基準）
[特定のClean Code原則を参照]
- 関数は単一責任原則に従う
- 変数名は意図を明確に示す
- コードの重複を避ける
```

### 4.3 実践的な実装方法

参考：[How to Apply SOLID Principles in AI Development](https://www.syncfusion.com/blogs/post/solid-principles-ai-development)

#### AIへの指示例
```markdown
## コード生成時の指示

### 必須要件
1. SOLID原則に従ったクラス設計
2. 関数は10行以内に収める（Clean Code推奨）
3. ネストは3レベルまで
4. 各クラス/関数に対してJSDocコメントを含める

### 例
"DataPreprocessorクラスを作成してください。
単一責任原則に従い、データクリーニングタスクのみを処理します。
各メソッドは1つのことだけを行い、明確な名前を持つようにしてください。"
```

---

## 5. 実践的なTipsとトリック

### 5.1 コンテキストウィンドウの最適化

参考：[Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)

```markdown
## パフォーマンス最適化のテクニック

1. /clearコマンドを頻繁に使用
   - タスク間でコンテキストウィンドウをリセット
   
2. スクラッチパッドの活用
   - 大規模タスクではMarkdownファイルをチェックリストとして使用
   - GitHubのissueも作業用スクラッチパッドとして活用可能

3. 並行エージェントの起動
   - 可能な限り複数のエージェントを同時に起動
   - パフォーマンスを最大化
```

### 5.2 プロジェクト固有の指示

参考：[Coding Guidelines for Your AI Agents](https://blog.jetbrains.com/idea/2025/05/coding-guidelines-for-your-ai-agents)

```markdown
## リポジトリレベルの指示設定

### 方法1：単一ファイル
.github/copilot-instructions.md

### 方法2：ディレクトリ別
.github/instructions/**/*.instructions.md

### 内容例
- リポジトリ固有のコンテキスト
- ファイル構造の説明
- コマンドポリシー
- プロジェクトの規約
```

### 5.3 エラー処理とフォールバック

参考：[AI agent best practices](https://help.make.com/ai-agent-best-practices)

```markdown
## エラー処理の計画

### コンテキストの保持
- 長い会話での継続性を確保するため、前の応答を記憶するよう指示

### エラー時のフォールバック
- 入力が不明確な場合のフォールバックフレーズを含める
- 例："申し訳ございません。もう一度お聞かせください。"

### ガードレール
- AIエージェントが目標のコンテキスト内でのみ応答するよう指示
```

---

## 6. 2025年に向けた展望と新機能

### 6.1 Model Context Protocols (MCPs)

参考：[The new pair programming: an AI agent that cleans your code](https://stackoverflow.blog/2024/10/22/the-new-pair-programming-an-ai-agent-that-cleans-your-code/)

```markdown
## MCPsの登場（2024年後半）
- 外部ツールとAIシステムの相互作用を再定義
- クリーンコード原則の新しい適用方法を提供
```

### 6.2 動的コンテキスト管理

```markdown
## 今後の進化予測
1. 状況に応じた自動的なコンテキスト切り替え
2. 過去の対話から自動的に改善する学習型コンテキスト
3. 複数のAIエージェント間で共有される協調型コンテキスト
```

---

## 7. 参考リンクと検証結果

### 主要な参考文献（2024-2025年）

#### コンテキスト設計のベストプラクティス
- [Best Practice Guidelines for Prompt Markdown Instructions](https://gist.github.com/eonist/bf948cea1af1463732e2f5528a49572b) ✅
- [Some notes on AI Agent Rule / Instruction / Context files](https://gist.github.com/0xdevalias/f40bc5a6f84c4c5ad862e314894b2fa6) ✅
- [Coding Guidelines for Your AI Agents - JetBrains](https://blog.jetbrains.com/idea/2025/05/coding-guidelines-for-your-ai-agents/) ✅

#### Claude関連
- [Claude Code: Deep coding at terminal velocity](https://www.anthropic.com/claude-code) ✅
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) ✅
- [Claude Projects - Simon Willison](https://simonwillison.net/2024/Jun/25/claude-projects/) ✅
- [Claude Code overview - Anthropic Docs](https://docs.anthropic.com/en/docs/claude-code/overview) ✅

#### Cursor関連
- [Cursor – Codebase Indexing Documentation](https://docs.cursor.com/en/context/codebase-indexing) ✅
- [How Cursor Serves Billions of AI Code Completions](https://blog.bytebytego.com/p/how-cursor-serves-billions-of-ai) ✅
- [The Perfect Cursor AI setup for React and Next.js](https://www.builder.io/blog/cursor-ai-tips-react-nextjs) ✅

#### クリーンコード原則
- [Summary of 'Clean code' by Robert C. Martin](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) ✅
- [How to Apply SOLID Principles in AI Development](https://www.syncfusion.com/blogs/post/solid-principles-ai-development) ✅

#### プロンプトエンジニアリング
- [OpenAI - Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) ✅
- [The Prompt Engineering Playbook for Programmers](https://addyo.substack.com/p/the-prompt-engineering-playbook-for) ✅
- [Prompt Engineering Guide: The Ultimate Guide](https://learnprompting.org/docs/introduction) ✅

#### サードパーティツール
- [Claude Context by Zilliz (MCP for Claude Code)](https://github.com/zilliztech/claude-context) ✅
- [claude-code-project-index](https://github.com/ericbuess/claude-code-project-index) ✅

---

## まとめ

AIエージェントのコンテキスト設計は2024-2025年にかけて急速に進化しています。主なポイント：

1. **構造化と明確性**：Markdownを活用した階層的な構造で指示を整理
2. **インデックス機能の活用**：Claude ProjectsやCursorの自動インデックス機能を最大限活用
3. **クリーンコード原則の適用**：SRP、DRY、KISSなどの原則をプロンプト設計に応用
4. **継続的な改善**：コンテキストを「生きたドキュメント」として扱い、プロジェクトとともに進化させる

これらのベストプラクティスを適用することで、より効率的で保守性の高いAIエージェントとの協働が可能になります。

---

*最終更新：2025年8月31日*