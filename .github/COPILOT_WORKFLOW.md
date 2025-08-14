# GitHub Copilotを使った無料の自動開発

## セットアップ

### 1. GitHub Copilot（初月無料）
```bash
# GitHub Copilotの有効化
open https://github.com/settings/copilot

# VS Code拡張機能をインストール
code --install-extension GitHub.copilot
```

### 2. Copilot Chat API（プレビュー版は無料）
```bash
# Copilot for CLIをインストール
gh extension install github/gh-copilot

# 使用例
gh copilot suggest "create a function to reverse a string"
```

## ワークフロー

### 半自動ワークフロー
```bash
#!/bin/bash
# copilot-workflow.sh

ISSUE_NUMBER=$1

# Issueの内容を取得
ISSUE=$(gh issue view $ISSUE_NUMBER --json title,body)

# Copilot CLIで提案を取得
gh copilot suggest "$(echo $ISSUE | jq -r '.body')" > suggestion.md

# VS Codeで開いて編集
code suggestion.md

echo "Copilotの提案をsuggestion.mdに保存しました"
echo "VS Codeで確認・編集してください"
```

## VS Code + Copilotでの開発フロー

1. **Issueをコメントとして貼り付け**
```javascript
// Issue #50: 文字列を逆順にする関数
// TODO: TypeScriptで実装、テスト付き
```

2. **Copilotが自動補完**
```typescript
// Copilotが以下を提案：
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// テストも自動生成
describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});
```

3. **コミット&PR作成**
```bash
git add .
git commit -m "feat: Add reverseString function"
gh pr create
```