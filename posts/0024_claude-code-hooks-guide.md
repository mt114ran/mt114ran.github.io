---
id: 24
title: "Claude Code Hooks完全ガイド：開発ワークフローを自動化する魔法の仕組み"
tags: ["Claude Code", "Hooks", "自動化", "開発効率化", "macOS"]
create: "2025-08-07 19:16"
---

Claude Codeで作業していて、「コード保存時に自動でフォーマットしたい」「タスク完了時に通知が欲しい」と思ったことはありませんか？Hooks機能を使えば、これらの自動化が簡単に実現できます。

## 前提知識

この記事を読むには、以下の基本的な知識があるとスムーズです：
- 基本的なシェルコマンド（`cd`, `ls`, `echo`, `cat`など）
- ファイルのパーミッション（実行権限）の概念
- JSONフォーマットの基本

## はじめに：Hooksとは何か？

Hooks（フック）は、特定のイベントが発生したときに自動的に実行されるスクリプトやコマンドのことです。釣り針（hook）のように、イベントを「引っ掛けて」処理を実行するイメージです。

### 身近な例で理解するHooks

- **Gitのフック**: コミット前にテストを自動実行
- **Webフック**: GitHubにプッシュしたらSlackに通知
- **Claude Code Hooks**: AIがツールを使う前後に独自の処理を挿入

## Claude Code Hooksの3つの種類

Claude Codeには、主に3種類のHooksがあります：

### 処理の流れ図

```
ユーザーの入力
    ↓
[1. user-prompt-submit-hook] ← プロンプトを拡張
    ↓
Claude Codeが処理
    ↓
ツール実行が必要な場合
    ↓
[2. tool-pre-hook] ← 危険な操作をチェック
    ↓
ツール実行（ファイル編集、コマンド実行など）
    ↓
[3. tool-post-hook] ← 結果をログに記録
    ↓
ユーザーへの返信
```

### 1. user-prompt-submit-hook
**いつ動く？**: プロンプトを送信する直前

**何ができる？**: プロンプトの内容を自動的に拡張・修正

**失敗した場合**: エラーは無視され、元のプロンプトが送信される

### 2. tool-pre-hook
**いつ動く？**: Claude Codeがツール（ファイル編集、コマンド実行など）を使う直前

**何ができる？**: 危険な操作をブロック、パラメータの修正

**失敗した場合**: 終了コード0以外でツール実行がキャンセルされる

### 3. tool-post-hook

**いつ動く？**: ツールの実行が完了した直後

**何ができる？**: 実行結果のログ記録、後処理の実行

**失敗した場合**: エラーは無視され、Claude Codeの処理は継続される

## 実装手順：ゼロから始めるHooks設定

### グローバル設定とプロジェクト設定の違い

#### グローバル設定（すべてのプロジェクトに適用）
- **設定場所**: `~/.claude/settings.json`
- **用途**: すべてのプロジェクトで共通して使いたいHooks
- **例**: タスク完了通知、危険コマンドのブロック

#### プロジェクト設定（特定プロジェクトのみ）
- **設定場所**: `{プロジェクトルート}/.claude/settings.json`
- **用途**: そのプロジェクト固有のHooks
- **例**: プロジェクト固有のフォーマッタ、テスト実行

### ディレクトリ構造の例

```
# グローバル設定の場合
~/
├── .claude/
│   ├── settings.json          # グローバル設定ファイル
│   └── hooks/                 # グローバルHooksスクリプト
│       ├── prompt-enhancer.sh
│       ├── safety-check.sh
│       └── logger.sh

# プロジェクト設定の場合
my-project/
├── .claude/
│   ├── settings.json          # プロジェクト設定ファイル
│   └── hooks/                 # プロジェクトHooksスクリプト
│       ├── format-code.sh
│       └── run-tests.sh
├── src/
├── package.json
└── README.md
```

### ステップ1: 設定ファイルの作成

プロジェクトのルートディレクトリに`.claude`フォルダを作成し、`settings.json`を配置します：

```bash
# プロジェクト設定の場合
mkdir -p .claude/hooks
touch .claude/settings.json

# グローバル設定の場合
mkdir -p ~/.claude/hooks
touch ~/.claude/settings.json
```

### ステップ2: 基本的な設定の記述

`.claude/settings.json`に以下の内容を記述：

```json
{
  "hooks": {
    "user-prompt-submit-hook": "./hooks/prompt-enhancer.sh",
    "tool-pre-hook": "./hooks/safety-check.sh",
    "tool-post-hook": "./hooks/logger.sh"
  }
}
```

**注意**: パスは`settings.json`からの相対パスで指定します。

### ステップ3: Hookスクリプトの作成

各Hookスクリプトを`.claude/hooks/`ディレクトリに作成します。

## 実践例1: プロンプト自動拡張Hook

現在のGitブランチ名やタスク情報を自動的にプロンプトに追加する例です。

**`hooks/prompt-enhancer.sh`**:
```bash
#!/bin/bash
# このスクリプトはプロンプト送信前に実行されます

# 元のプロンプトを標準入力から読み込む
original_prompt=$(cat)

# 現在のGitブランチを取得（エラーの場合は"main"を使用）
branch=$(git branch --show-current 2>/dev/null || echo "main")

# タスクファイルの内容を取得
task_content=""
if [ -f ".tmp/task.md" ]; then
    task_content=$(cat .tmp/task.md)
fi

# 拡張したプロンプトを標準出力に出力
# EOFまでの内容がそのまま出力される（ヒアドキュメント）
cat << EOF
=== コンテキスト情報 ===
現在のブランチ: $branch
${task_content:+現在のタスク:
$task_content}
===================

$original_prompt
EOF
```

### このHookが受け取るデータ

```
# 標準入力から受け取る内容の例：
"バグを修正して"
```

### 動作の仕組み

1. ユーザーが「バグを修正して」と入力
2. Hookが自動的にGitブランチ名とタスク情報を追加
3. Claude Codeは拡張された情報を受け取って、より的確な対応が可能に

## 実践例2: 危険コマンドブロックHook

`rm -rf`などの危険なコマンドをブロックする例です。

**`hooks/safety-check.sh`**:
```bash
#!/bin/bash
# tool-pre-hook: ツール実行前にチェックを行う

# ツール情報をJSONとして標準入力から読み込む
tool_info=$(cat)

# デバッグ用：受け取ったJSONをエラー出力に表示（本番では削除）
# echo "受信したJSON: $tool_info" >&2

# jqがインストールされている場合（推奨）
if command -v jq &> /dev/null; then
    command=$(echo "$tool_info" | jq -r '.tool_input.command // ""')
else
    # jqがない場合の代替方法（正規表現でコマンドを抽出）
    # grep -o: マッチした部分のみ出力
    # cut -d'"' -f4: ダブルクォートで区切って4番目のフィールドを取得
    command=$(echo "$tool_info" | grep -o '"command":"[^"]*"' | cut -d'"' -f4)
fi

# 危険なコマンドパターンをチェック
if echo "$command" | grep -qE "rm -rf|dd if=|mkfs|>" ; then
    # >&2 はエラー出力への出力（Claude Codeの画面に表示される）
    echo "⚠️ 危険なコマンドが検出されました: $command" >&2
    echo "実行をブロックしました。" >&2
    exit 1  # 終了コード1（0以外）= ツール実行をキャンセル
fi

# 問題なければ元の情報をそのまま標準出力に返す
echo "$tool_info"
exit 0  # 終了コード0 = ツール実行を許可
```

### このHookが受け取るJSONデータの例

```json
{
  "tool_name": "run_shell_command",
  "tool_input": {
    "command": "rm -rf /important_folder"
  }
}
```

### ブロックされるコマンド例

- `rm -rf /`: システム全体を削除する危険なコマンド
- `dd if=/dev/zero of=/dev/sda`: ディスクを完全に消去
- `> important_file.txt`: ファイルを空にする

## 実践例3: 実行ログ記録Hook

すべてのツール実行を記録する例です。

**`hooks/logger.sh`**:
```bash
#!/bin/bash
# tool-post-hook: ツール実行後の処理

# ログディレクトリを作成（存在しない場合のみ）
LOG_DIR=".claude/logs"
mkdir -p "$LOG_DIR"

# 実行結果を標準入力から読み込む
execution_result=$(cat)

# タイムスタンプ付きでログに記録
timestamp=$(date '+%Y-%m-%d %H:%M:%S')
log_file="$LOG_DIR/$(date '+%Y%m%d').log"

# ログエントリを作成（>>は追記モード）
{
    echo "[$timestamp]"
    echo "$execution_result"
    echo "---"
} >> "$log_file"

# macOS通知を送信（タスク完了時）
# osascriptはmacOSのAppleScriptを実行するコマンド
if echo "$execution_result" | grep -q "task.*complete"; then
    osascript -e 'display notification "タスクが完了しました！" with title "Claude Code"'
fi

# Windows環境の場合（PowerShell使用）
# if echo "$execution_result" | grep -q "task.*complete"; then
#     powershell -Command "New-BurntToastNotification -Text 'Claude Code', 'タスクが完了しました！'"
# fi

# 結果をそのまま標準出力に返す（Claude Codeの処理を妨げない）
echo "$execution_result"
```

### このHookが受け取るJSONデータの例

```json
{
  "tool_name": "write_file",
  "tool_input": {
    "file_path": "/path/to/file.js",
    "content": "console.log('Hello');"
  },
  "tool_output": "File written successfully"
}
```

## より実践的な使用例

### 1. コード保存時の自動フォーマット

**`hooks/auto-format.sh`**:
```bash
#!/bin/bash

tool_info=$(cat)

# ファイル書き込みツールの場合
if echo "$tool_info" | grep -q '"tool_name":"write_file"'; then
    # ファイルパスを抽出
    file_path=$(echo "$tool_info" | grep -o '"file_path":"[^"]*"' | cut -d'"' -f4)

    # 拡張子に応じてフォーマッタを実行
    case "$file_path" in
        *.js|*.ts|*.jsx|*.tsx)
            # Prettierでフォーマット（後で実行）
            echo "prettier --write $file_path" >> .claude/post-commands.sh
            ;;
        *.py)
            # Blackでフォーマット
            echo "black $file_path" >> .claude/post-commands.sh
            ;;
    esac
fi

echo "$tool_info"
```

### 2. テスト自動実行

ファイル変更時に関連テストを自動実行：

```bash
#!/bin/bash

tool_info=$(cat)

# ソースファイルが変更された場合
if echo "$tool_info" | grep -qE '"file_path":".*\.(js|ts|py)"'; then
    file_path=$(echo "$tool_info" | grep -o '"file_path":"[^"]*"' | cut -d'"' -f4)

    # テストファイルを探して実行
    test_file="${file_path%.js}.test.js"
    if [ -f "$test_file" ]; then
        npm test "$test_file" 2>&1 | tail -5
    fi
fi

echo "$tool_info"
```

## Hooksが受け取るデータのまとめ

### 各Hookの入出力仕様

**user-prompt-submit-hook**
- 標準入力で受け取る: プロンプト文字列
- 標準出力に返すべき内容: 拡張されたプロンプト
- エラー時の動作: 無視される

**tool-pre-hook**
- 標準入力で受け取る: ツール情報JSON
- 標準出力に返すべき内容: 同じまたは修正されたJSON
- エラー時の動作: exit 1でキャンセル

**tool-post-hook**
- 標準入力で受け取る: 実行結果JSON
- 標準出力に返すべき内容: 任意（通常は元のまま）
- エラー時の動作: 無視される

## トラブルシューティング

### よくある問題と解決方法

#### 1. Hookが実行されない

**原因**: 実行権限がない

**解決方法**:
```bash
# ⚠️ 警告: スクリプトの内容を確認してから実行権限を付与してください
# 不明なスクリプトに実行権限を与えるとセキュリティリスクがあります

# まずスクリプトの内容を確認
cat hooks/*.sh

# 内容が安全であることを確認してから実行権限を付与
chmod +x hooks/*.sh
```

#### 2. JSONの解析でエラー

**原因**: `jq`コマンドがインストールされていない

**解決方法**:
```bash
# macOS
brew install jq

# Windows (Chocolatey)
choco install jq

# または、grepとsedで代替
echo "$json" | grep -o '"key":"[^"]*"' | cut -d'"' -f4
```

#### 3. パスが見つからない

**原因**: 相対パスが正しくない
**解決方法**: 絶対パスを使用
```json
{
  "hooks": {
    "tool-post-hook": "/Users/yourname/project/hooks/logger.sh"
  }
}
```

#### 4. デバッグ方法

Hookが正しく動作しているか確認するには：

```bash
# デバッグメッセージをエラー出力に表示
echo "デバッグ: ここまで実行されました" >&2
echo "受け取ったデータ: $data" >&2

# デバッグログファイルに出力
echo "$(date): Hook実行" >> /tmp/hook-debug.log
```

## セキュリティ上の注意点

### 1. スクリプトの権限管理

Hookスクリプトには最小限の権限のみを付与：
```bash
# 所有者のみ実行可能
chmod 700 hooks/*.sh
```

### 2. 入力値の検証

外部入力は必ず検証：
```bash
# 悪意のあるコマンドインジェクションを防ぐ
if [[ "$input" =~ ^[a-zA-Z0-9_-]+$ ]]; then
    # 安全な入力のみ処理
    process_input "$input"
fi
```

### 3. ログの保護

機密情報をログに記録しない：
```bash
# パスワードやトークンをマスク
echo "$result" | sed 's/password=.*/password=****/g' >> log.txt
```

## ベストプラクティス

### 1. Hookは軽量に保つ

Hookの処理は高速に：
- 重い処理は非同期で実行
- タイムアウトを設定
- 必要最小限の処理のみ

### 2. エラーハンドリング

```bash
#!/bin/bash
set -e  # エラー時に即座に終了
trap 'echo "Error occurred at line $LINENO"' ERR
```

### 3. デバッグモード

```bash
# DEBUG環境変数でデバッグモードを切り替え
if [ "$DEBUG" = "1" ]; then
    set -x  # コマンドを表示
    exec 2>hooks-debug.log  # エラーをログファイルに
fi
```

## ハンズオン：タスク完了通知Hookを作ってみよう

実際にHookを作成して動作を体験してみましょう。ここでは、タスクが完了したときにmacOSで通知を表示するHookを作成します。

### ステップ1: プロジェクトディレクトリに設定を作成

```bash
# プロジェクトのルートディレクトリで実行
mkdir -p .claude/hooks
```

### ステップ2: 通知スクリプトを作成

`.claude/hooks/task-notifier.sh`を作成：

```bash
#!/bin/bash
# tool-post-hook: タスク完了時に通知を送る

# 実行結果を標準入力から読み込む
execution_result=$(cat)

# TodoWriteツールの実行を検知
if echo "$execution_result" | grep -q '"tool_name":"TodoWrite"'; then
    # completedステータスへの変更を検知
    if echo "$execution_result" | grep -q '"status":"completed"'; then
        # macOSの通知を送信
        osascript -e 'display notification "タスクが完了しました！🎉" with title "Claude Code" sound name "Glass"'
    fi
fi

# タスク関連のキーワードで通知
if echo "$execution_result" | grep -qi "task.*complet\|完了\|finished"; then
    osascript -e 'display notification "作業が完了しました！" with title "Claude Code"'
fi

# 結果をそのまま標準出力に返す（重要！）
echo "$execution_result"
```

### ステップ3: settings.jsonを設定

`.claude/settings.json`を作成：

```json
{
  "hooks": {
    "tool-post-hook": "./hooks/task-notifier.sh"
  }
}
```

### ステップ4: 実行権限を付与

```bash
# スクリプトの内容を確認
cat .claude/hooks/task-notifier.sh

# 安全であることを確認してから権限付与
chmod +x .claude/hooks/task-notifier.sh
```

### ステップ5: 動作確認

Claude Codeでタスクを完了させて、通知が表示されることを確認：

```
「README.mdを更新して」
```

タスクが完了すると、macOSの通知センターに「タスクが完了しました！🎉」と表示されます。

### トラブルシューティング

**通知が表示されない場合：**
1. システム環境設定 → 通知とフォーカス → ターミナルの通知が有効か確認
2. スクリプトの実行権限を確認: `ls -la .claude/hooks/`
3. デバッグ出力を追加して確認：
   ```bash
   echo "Hook実行中: $(date)" >> /tmp/hook-debug.log
   ```

### Windows版の代替実装

Windowsの場合は、PowerShellを使用：

```bash
#!/bin/bash
execution_result=$(cat)

if echo "$execution_result" | grep -qi "task.*complet\|完了"; then
    # Windows通知
    powershell -Command "
        Add-Type -AssemblyName System.Windows.Forms
        \$notification = New-Object System.Windows.Forms.NotifyIcon
        \$notification.Icon = [System.Drawing.SystemIcons]::Information
        \$notification.BalloonTipTitle = 'Claude Code'
        \$notification.BalloonTipText = 'タスクが完了しました！'
        \$notification.Visible = \$true
        \$notification.ShowBalloonTip(5000)
    "
fi

echo "$execution_result"
```

### 実装のポイント

1. **標準入力から読み込む**: `$(cat)`でJSONデータを受け取る
2. **条件判定**: `grep`でキーワードを検索
3. **通知の実行**: OS固有のコマンドを使用
4. **元データを返す**: 必ず`echo "$execution_result"`で返す

これで、あなたも独自のHookを作成できるようになりました！

## まとめ

Claude Code Hooksを使えば：

1. **プロンプトの自動拡張**で、コンテキストを自動追加
2. **危険操作のブロック**で、安全性を確保
3. **実行ログの記録**で、作業履歴を管理
4. **自動フォーマット**で、コード品質を維持
5. **通知機能**で、作業の進捗を把握

これらの機能により、開発効率が大幅に向上します。

### 次のステップ

1. 基本的なHookから始める（まずはログ記録から）
2. チーム固有のニーズに合わせてカスタマイズ
3. 複数のHookを組み合わせて高度な自動化を実現

### 学習のポイント

- Hooksは「イベント駆動」の自動化
- 標準入出力を使った情報の受け渡し
- 終了コードで実行の可否を制御
- シェルスクリプトの基本が重要

これでClaude Code Hooksの基本から実践まで理解できたはずです。さあ、あなたの開発ワークフローを自動化してみましょう！

## 参考リンク

- [Claude Code 公式ドキュメント](https://docs.anthropic.com/claude-code)
- [Bash スクリプティングガイド](https://www.gnu.org/software/bash/manual/)
- [jq マニュアル](https://stedolan.github.io/jq/manual/)
