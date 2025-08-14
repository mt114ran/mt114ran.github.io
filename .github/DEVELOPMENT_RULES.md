# 開発ルール

## 🔴 最重要ルール：masterブランチの保護

### 絶対厳守事項

1. **masterブランチへの直接コミット・プッシュは禁止**
   - ❌ `git commit` → `git push origin master` は禁止
   - ✅ featureブランチ → Pull Request → レビュー → マージ

2. **すべての変更はPull Request経由**
   - 小さな修正でもPRを作成
   - ユーザーがレビューできる機会を提供
   - 承認なしでマージしない

3. **緊急時でも例外なし**
   - 緊急修正が必要な場合も`hotfix/`ブランチを作成
   - ユーザーの明示的な許可を得てからマージ

## ブランチ戦略

### ブランチ命名規則

| ブランチタイプ | 命名規則 | 用途 |
|------------|---------|------|
| feature/ | feature/機能名 | 新機能開発 |
| fix/ | fix/バグ名 | バグ修正 |
| docs/ | docs/ドキュメント名 | ドキュメント更新 |
| refactor/ | refactor/対象名 | リファクタリング |
| test/ | test/テスト名 | テスト追加・修正 |
| hotfix/ | hotfix/緊急修正名 | 緊急バグ修正 |

### 正しいワークフロー

```bash
# 1. featureブランチを作成
git checkout -b feature/new-component

# 2. 変更を実装
# ... 作業 ...

# 3. コミット
git add .
git commit -m "feat: 新しいコンポーネントを追加"

# 4. プッシュ
git push -u origin feature/new-component

# 5. GitHub CLIでPR作成
gh pr create --title "feat: 新しいコンポーネント" --body "..."

# 6. ユーザーのレビューを待つ
# 7. 承認後にマージ（ユーザーが実行またはユーザーの指示で実行）
```

## Pull Request作成時の注意

### PR説明に含めるべき内容

1. **変更内容の概要**
2. **なぜこの変更が必要か**
3. **テスト方法**
4. **スクリーンショット（UI変更の場合）**
5. **関連Issue番号**

### PRテンプレート例

```markdown
## 概要
[変更内容を簡潔に説明]

## 変更理由
[なぜこの変更が必要なのか]

## 変更内容
- [ ] 機能A を実装
- [ ] バグB を修正
- [ ] ドキュメントC を更新

## テスト
- [ ] ローカルでテスト済み
- [ ] ユニットテスト追加/更新
- [ ] ビルド成功確認

## スクリーンショット
[UI変更がある場合は画像を添付]

## 関連Issue
Closes #[Issue番号]
```

## Claude（AI）の動作ルール

### やってはいけないこと

- ❌ masterに直接コミット
- ❌ ユーザーの承認なしにPRをマージ
- ❌ force pushの実行
- ❌ 履歴の書き換え（rebase -i、commit --amend on pushed commits）

### 必ずやること

- ✅ featureブランチの作成
- ✅ PR作成とレビュー依頼
- ✅ ユーザーの指示を待つ
- ✅ 変更内容を明確に説明

## 違反した場合

masterブランチに直接変更してしまった場合：

1. **即座に報告**
2. **revertコミットの作成を提案**
3. **正しい手順でやり直し**

```bash
# 間違えてmasterにコミットした場合の修正方法
git revert HEAD  # 直前のコミットを取り消し
git push origin master  # revertをプッシュ

# 正しいブランチで作業し直し
git checkout -b feature/correct-branch
# ... 正しい実装 ...
```

## このルールの更新

このルール自体を更新する場合も、PRを作成してレビューを受けること。

---

**最終更新日**: 2025-08-11
**理由**: masterブランチへの直接プッシュを防ぐため