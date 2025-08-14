#!/bin/bash

# Ollama（ローカルLLM）を使った完全無料の自動化

# Ollamaのインストール（初回のみ）
install_ollama() {
  if ! command -v ollama &> /dev/null; then
    echo "📦 Ollamaをインストール中..."
    curl -fsSL https://ollama.com/install.sh | sh
  fi
}

# モデルのダウンロード（初回のみ）
setup_model() {
  echo "🤖 CodeLlamaモデルをダウンロード中..."
  ollama pull codellama:7b
}

# Issueからコード生成
generate_code() {
  ISSUE_NUMBER=$1
  
  # Issue情報を取得
  ISSUE_DATA=$(gh issue view $ISSUE_NUMBER --json title,body)
  ISSUE_TITLE=$(echo $ISSUE_DATA | jq -r '.title')
  ISSUE_BODY=$(echo $ISSUE_DATA | jq -r '.body')
  
  # プロンプト作成
  PROMPT="
GitHub Issue #$ISSUE_NUMBER: $ISSUE_TITLE

Requirements:
$ISSUE_BODY

Please generate TypeScript code to solve this issue.
"
  
  # Ollamaで生成（完全無料、ローカル実行）
  echo "$PROMPT" | ollama run codellama:7b > generated_code.ts
  
  echo "✅ コード生成完了: generated_code.ts"
}

# メイン処理
main() {
  install_ollama
  setup_model
  generate_code $1
  
  echo "
次のステップ:
1. generated_code.ts を確認
2. git add generated_code.ts
3. git commit -m 'feat: Issue #$1 の実装'
4. gh pr create
"
}

main $1