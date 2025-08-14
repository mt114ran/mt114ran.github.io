# 📚 GitHub Copilot Issue解決ガイド

## 🎯 概要
IssueにコメントするだけでGitHub Copilotが自動的に解決策を生成し、PRを作成するシステムです。

## ✅ 前提条件
- GitHub Copilot Proのライセンス（既にお持ちです！）
- リポジトリへのWrite権限

## 🚀 使い方

### 基本コマンド

#### 1. シンプルな解決依頼
```
/copilot これを解決してください
```

#### 2. 詳細な指示
```
/copilot TypeScriptで文字列を逆順にする関数を作成してください。
- 関数名: reverseString
- ファイル: src/utils/string.ts
- テストも含めてください
```

#### 3. 特定の技術を指定
```
/solve React Hooksを使ってカウンターコンポーネントを作成
- useStateを使用
- インクリメント/デクリメントボタン
- src/components/Counter.tsx に保存
```

## 📝 実例

### Example 1: バグ修正
**Issue:** "ログイン時にエラーが発生する"

**コメント:**
```
/copilot 
ログイン処理のエラーを修正してください。
エラー: "Cannot read property 'user' of undefined"
ファイル: src/auth/login.ts
```

**Copilotの応答:**
```typescript
// File: src/auth/login.ts
export async function login(credentials: LoginCredentials) {
  try {
    const response = await api.post('/login', credentials);
    // Null checkを追加
    if (response?.data?.user) {
      return response.data.user;
    }
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
```

### Example 2: 新機能実装
**Issue:** "ダークモード機能を追加"

**コメント:**
```
/copilot
ダークモードの切り替え機能を実装
- React Context APIを使用
- LocalStorageに設定を保存
- トグルボタンコンポーネント付き
```

**自動生成されるファイル:**
1. `src/contexts/ThemeContext.tsx` - Context定義
2. `src/components/DarkModeToggle.tsx` - トグルボタン
3. `src/hooks/useDarkMode.ts` - カスタムフック

## 🔧 高度な使い方

### 複数ファイルの生成
```
/copilot
認証システムを実装:
1. src/services/auth.ts - 認証サービス
2. src/components/LoginForm.tsx - ログインフォーム
3. src/components/ProtectedRoute.tsx - 保護されたルート
4. src/hooks/useAuth.ts - 認証フック
```

### テスト駆動開発
```
/solve
まずテストを作成してから実装:
- 機能: メールバリデーション
- テスト: src/__tests__/email.test.ts
- 実装: src/utils/email.ts
- Jest使用
```

### リファクタリング
```
/copilot
このコードをリファクタリング:
- 現在のファイル: src/legacy/oldCode.js
- TypeScriptに変換
- 新しい場所: src/services/newCode.ts
- 最新のベストプラクティスを適用
```

## 🎨 コマンドオプション

### 言語/フレームワーク指定
```
/copilot [typescript|javascript|python|go] <要求>
/copilot [react|vue|angular|nextjs] <要求>
```

### 出力形式指定
```
/copilot --with-tests <要求>     # テスト付き
/copilot --with-docs <要求>      # ドキュメント付き
/copilot --minimal <要求>        # 最小限の実装
```

## 📊 ワークフロー

```mermaid
graph TD
    A[Issueにコメント] --> B[/copilot or /solve]
    B --> C[GitHub Actions起動]
    C --> D[Copilot CLIで解決策生成]
    D --> E[ファイル作成/変更]
    E --> F[自動PR作成]
    F --> G[レビュー & マージ]
```

## 💡 Tips

### 1. 具体的な指示
❌ 悪い例:
```
/copilot バグを修正して
```

✅ 良い例:
```
/copilot 
src/api/user.ts の getUserById関数で
nullチェックを追加してTypeErrorを防ぐ
```

### 2. ファイルパスを明記
```
/copilot
File: src/components/Button.tsx
Material-UIを使ったボタンコンポーネントを作成
```

### 3. 期待する出力を説明
```
/copilot
入力: 配列 [1, 2, 3, 4, 5]
出力: 偶数のみ [2, 4]
関数名: filterEven
場所: src/utils/array.ts
```

## 🐛 トラブルシューティング

### Q: PRが作成されない
**A:** ファイルパスが明確に指定されているか確認:
```
/copilot
### File: src/exact/path/file.ts  ← この形式で指定
実装内容...
```

### Q: Copilot CLIが動作しない
**A:** GitHub Actionsログを確認:
```bash
gh run list --workflow=copilot-issue-solver.yml
gh run view [RUN_ID] --log
```

### Q: 生成されたコードが期待と違う
**A:** より詳細な指示を提供:
```
/copilot
要件:
1. 入力の型: string
2. 出力の型: boolean
3. エッジケース: 空文字列はfalse
4. 使用するライブラリ: なし（純粋なJS）
```

## 🔒 セキュリティ

- 生成されたコードは必ずレビュー
- 機密情報を含むIssueでは使用しない
- PRは自動マージされない（手動承認必要）

## 📈 使用統計の確認

```bash
# 最近のCopilot実行を確認
gh run list --workflow=copilot-issue-solver.yml --limit 10

# 成功率を確認
gh run list --workflow=copilot-issue-solver.yml --json conclusion -q '[.[] | select(.conclusion=="success")] | length'
```

## 🎉 今すぐ試す

1. **既存のIssue #50で試す:**
```
/copilot 文字列を逆順にする関数を TypeScript で実装
ファイル: src/utils/string-utils.ts
テスト付きでお願いします
```

2. **新しいIssueを作成:**
```bash
gh issue create --title "テスト: Copilot自動実装" --body "簡単な関数を実装"
```

3. **作成したIssueにコメント:**
```
/copilot 実装してください
```

---

*GitHub Copilot Proのライセンスで動作 • 追加のAPI費用なし*