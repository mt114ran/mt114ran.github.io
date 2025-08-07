#!/bin/bash
# Claude Code Task Completion Notifier Hook
# tool-post-hook: ツール実行後にタスク完了を検出して通知

# ログディレクトリを作成
LOG_DIR="$HOME/.claude/logs"
mkdir -p "$LOG_DIR"

# 実行結果を標準入力から読み込む
execution_result=$(cat)

# デバッグ用ログ（必要に応じてコメントアウト）
echo "$(date '+%Y-%m-%d %H:%M:%S'): Hook実行" >> "$LOG_DIR/hook-debug.log"

# タスク完了パターンを検出
# 以下のキーワードが含まれている場合に通知
if echo "$execution_result" | grep -iE "task.*complet|完了|finished|done|タスクが終了" > /dev/null 2>&1; then
    # macOS通知を送信
    osascript -e 'display notification "タスクが完了しました！" with title "Claude Code" sound name "Glass"' 2>/dev/null
    
    # ログに記録
    echo "$(date '+%Y-%m-%d %H:%M:%S'): タスク完了通知を送信" >> "$LOG_DIR/notifications.log"
fi

# TodoWriteツールが使用され、completedステータスが設定された場合も検出
if echo "$execution_result" | grep -E '"tool_name":\s*"TodoWrite"' > /dev/null 2>&1; then
    if echo "$execution_result" | grep -E '"status":\s*"completed"' > /dev/null 2>&1; then
        # タスクが完了としてマークされた
        osascript -e 'display notification "TODOタスクが完了しました！" with title "Claude Code" sound name "Glass"' 2>/dev/null
        echo "$(date '+%Y-%m-%d %H:%M:%S'): TODOタスク完了通知を送信" >> "$LOG_DIR/notifications.log"
    fi
fi

# osascriptの通知コマンドが含まれている場合も検出（タスク完了通知の実行）
if echo "$execution_result" | grep -E 'osascript.*notification.*完了|osascript.*notification.*complete' > /dev/null 2>&1; then
    # Claude Codeが既にタスク完了通知を送信している
    echo "$(date '+%Y-%m-%d %H:%M:%S'): Claude Code自身がタスク完了通知を送信" >> "$LOG_DIR/notifications.log"
fi

# 結果をそのまま標準出力に返す（Claude Codeの処理を妨げない）
echo "$execution_result"

# 正常終了
exit 0