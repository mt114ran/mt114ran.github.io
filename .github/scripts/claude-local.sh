#!/bin/bash

# Claude Codeを使ったローカル自動化スクリプト
# APIキー不要！

# Issueの内容を取得
ISSUE_NUMBER=$1
ISSUE_DATA=$(gh issue view $ISSUE_NUMBER --json title,body)
ISSUE_TITLE=$(echo $ISSUE_DATA | jq -r '.title')
ISSUE_BODY=$(echo $ISSUE_DATA | jq -r '.body')

# Claude Codeで実行（ローカル）
echo "🤖 Claude Codeで処理中..."
claude "
GitHub Issue #$ISSUE_NUMBER: $ISSUE_TITLE

内容:
$ISSUE_BODY

このIssueに対応するコードを生成してください。
" > claude-output.txt

# ブランチ作成
git checkout -b claude-issue-$ISSUE_NUMBER

# 変更をコミット（手動で確認後）
echo "✅ 生成完了！claude-output.txtを確認してください"
echo "変更があれば以下のコマンドでPRを作成："
echo "git add ."
echo "git commit -m 'feat: Issue #$ISSUE_NUMBER の対応'"
echo "gh pr create --title 'Issue #$ISSUE_NUMBER: $ISSUE_TITLE' --body 'Claude Codeで生成'"