#!/bin/bash

# GitHub Copilot Proを使った自動開発ワークフロー
# 追加費用なし！

# 色付き出力
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Copilot CLIがインストールされているか確認
check_copilot() {
  if ! gh extension list | grep -q "github/gh-copilot"; then
    echo -e "${BLUE}📦 Copilot CLIをインストール中...${NC}"
    gh extension install github/gh-copilot
  fi
}

# Issueからコード生成
generate_from_issue() {
  ISSUE_NUMBER=$1
  
  echo -e "${BLUE}🔍 Issue #$ISSUE_NUMBER を取得中...${NC}"
  
  # Issue情報を取得
  ISSUE_DATA=$(gh issue view $ISSUE_NUMBER --json title,body,labels)
  ISSUE_TITLE=$(echo $ISSUE_DATA | jq -r '.title')
  ISSUE_BODY=$(echo $ISSUE_DATA | jq -r '.body')
  
  echo -e "${GREEN}📝 Issue: $ISSUE_TITLE${NC}"
  
  # 新しいブランチを作成
  BRANCH_NAME="copilot-issue-$ISSUE_NUMBER"
  git checkout -b $BRANCH_NAME
  
  # Copilotで提案を取得
  echo -e "${BLUE}🤖 Copilotで解決策を生成中...${NC}"
  
  # 複数の提案を生成
  gh copilot suggest "
Issue #$ISSUE_NUMBER: $ISSUE_TITLE

Requirements:
$ISSUE_BODY

Generate TypeScript code with tests.
" > copilot_suggestion.md
  
  # VS Codeで開く（オプション）
  if command -v code &> /dev/null; then
    code copilot_suggestion.md
  fi
  
  echo -e "${GREEN}✅ 提案を copilot_suggestion.md に保存しました${NC}"
  
  # 対話モードで詳細を生成
  echo -e "${BLUE}🎯 詳細な実装を生成します...${NC}"
  gh copilot explain "How to implement: $ISSUE_TITLE" > implementation_details.md
  
  echo -e "
${GREEN}=== 次のステップ ===${NC}
1. copilot_suggestion.md を確認
2. 必要なコードを適切なファイルにコピー
3. テストを実行: ${BLUE}npm test${NC}
4. コミット: ${BLUE}git add . && git commit -m 'feat: Issue #$ISSUE_NUMBER'${NC}
5. PR作成: ${BLUE}gh pr create${NC}
"
}

# VS Code + Copilot Chatでの詳細生成
generate_with_vscode() {
  ISSUE_NUMBER=$1
  
  # テンプレートファイルを作成
  cat > .copilot-prompt.md << EOF
# Task: Implement Issue #$ISSUE_NUMBER

## Requirements
$(gh issue view $ISSUE_NUMBER --json body -q '.body')

## Expected Output
1. Implementation code
2. Unit tests
3. Documentation

---
@workspace Please implement the above requirements
EOF
  
  echo -e "${GREEN}📝 .copilot-prompt.md を作成しました${NC}"
  echo -e "${BLUE}VS Codeで開いて、Copilot Chatに貼り付けてください${NC}"
  
  code .copilot-prompt.md
}

# メインメニュー
main() {
  check_copilot
  
  echo -e "${BLUE}
╔══════════════════════════════════════╗
║   GitHub Copilot Pro Workflow       ║
╚══════════════════════════════════════╝${NC}
"
  
  if [ -z "$1" ]; then
    echo "使用方法: $0 <issue-number> [mode]"
    echo ""
    echo "モード:"
    echo "  cli   - Copilot CLIを使用（デフォルト）"
    echo "  vscode - VS Code + Copilot Chatを使用"
    exit 1
  fi
  
  ISSUE_NUMBER=$1
  MODE=${2:-cli}
  
  case $MODE in
    cli)
      generate_from_issue $ISSUE_NUMBER
      ;;
    vscode)
      generate_with_vscode $ISSUE_NUMBER
      ;;
    *)
      echo -e "${RED}❌ 不明なモード: $MODE${NC}"
      exit 1
      ;;
  esac
}

main $@