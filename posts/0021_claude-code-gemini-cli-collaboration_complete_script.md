## 完全版：consult-gemini.shスクリプト

記事内で紹介した連携スクリプトの完全版を以下に示します。このスクリプトをコピーして使用できます。

```bash
#!/bin/bash

# consult-gemini.sh - Claude CodeからGemini CLIに相談するためのヘルパースクリプト
# 
# 使用方法:
#   ./consult-gemini.sh -t "トピック" -q "質問内容" [-f "ファイルパス"]
#
# オプション:
#   -t  トピック（必須）
#   -q  質問内容（必須）
#   -f  参照ファイル（オプション、複数指定可能）
#   -h  ヘルプを表示

set -e  # エラーが発生したら即座に終了

# カラー定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# ディレクトリ設定
CONSULT_DIR="$HOME/.claude/gemini-consultations"
RESPONSE_DIR="$HOME/.claude/gemini-responses"

# ヘルプ表示関数
show_help() {
    echo "使用方法: $0 -t \"トピック\" -q \"質問内容\" [-f \"ファイルパス\"]"
    echo ""
    echo "オプション:"
    echo "  -t  トピック（必須）"
    echo "  -q  質問内容（必須）"
    echo "  -f  参照ファイル（オプション、複数指定可能）"
    echo "  -h  このヘルプを表示"
    echo ""
    echo "例:"
    echo "  $0 -t \"API設計\" -q \"RESTfulなエンドポイント設計について相談したい\""
    echo "  $0 -t \"パフォーマンス\" -q \"DBクエリの最適化\" -f \"src/db/queries.js\""
    exit 0
}

# 引数解析
TOPIC=""
QUESTION=""
FILES=()

while getopts "t:q:f:h" opt; do
    case $opt in
        t) TOPIC="$OPTARG";;
        q) QUESTION="$OPTARG";;
        f) FILES+=("$OPTARG");;
        h) show_help;;
        \?) echo "無効なオプション: -$OPTARG" >&2; exit 1;;
    esac
done

# 必須引数チェック
if [ -z "$TOPIC" ] || [ -z "$QUESTION" ]; then
    echo -e "${RED}エラー: トピック(-t)と質問(-q)は必須です${NC}"
    show_help
fi

# ディレクトリ作成
mkdir -p "$CONSULT_DIR" "$RESPONSE_DIR"

# タイムスタンプ生成
TIMESTAMP=$(date +"%Y-%m-%d-%H-%M-%S")
FILENAME_BASE="${TIMESTAMP}-$(echo "$TOPIC" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')"

# 相談内容ファイルの作成
CONSULT_FILE="$CONSULT_DIR/${FILENAME_BASE}.md"
RESPONSE_FILE="$RESPONSE_DIR/${FILENAME_BASE}.md"

echo "# Claude CodeからGeminiへの相談" > "$CONSULT_FILE"
echo "" >> "$CONSULT_FILE"
echo "## トピック: $TOPIC" >> "$CONSULT_FILE"
echo "" >> "$CONSULT_FILE"
echo "## 質問内容" >> "$CONSULT_FILE"
echo "$QUESTION" >> "$CONSULT_FILE"
echo "" >> "$CONSULT_FILE"

# ファイルが指定されている場合は内容を追加
if [ ${#FILES[@]} -gt 0 ]; then
    echo "## 参照ファイル" >> "$CONSULT_FILE"
    echo "" >> "$CONSULT_FILE"
    
    for file in "${FILES[@]}"; do
        if [ -f "$file" ]; then
            echo "### $file" >> "$CONSULT_FILE"
            echo '```' >> "$CONSULT_FILE"
            cat "$file" >> "$CONSULT_FILE"
            echo '```' >> "$CONSULT_FILE"
            echo "" >> "$CONSULT_FILE"
        else
            echo -e "${YELLOW}警告: ファイルが見つかりません: $file${NC}"
        fi
    done
fi

# プロンプト追加
echo "" >> "$CONSULT_FILE"
echo "---" >> "$CONSULT_FILE"
echo "" >> "$CONSULT_FILE"
echo "上記の内容について、技術的なアドバイスを日本語でお願いします。" >> "$CONSULT_FILE"
echo "特に以下の観点から検討してください：" >> "$CONSULT_FILE"
echo "1. 実装の妥当性" >> "$CONSULT_FILE"
echo "2. パフォーマンスへの影響" >> "$CONSULT_FILE"
echo "3. セキュリティ上の懸念" >> "$CONSULT_FILE"
echo "4. より良い代替案" >> "$CONSULT_FILE"

echo -e "${GREEN}相談内容を作成しました: $CONSULT_FILE${NC}"

# Gemini CLIの実行
echo -e "${YELLOW}Gemini CLIを実行中...${NC}"

# APIキーの確認
if [ -z "$GEMINI_API_KEY" ]; then
    # 環境変数が設定されていない場合は設定ファイルを確認
    if [ -f "$HOME/.gemini/settings.json" ]; then
        echo -e "${GREEN}設定ファイルからAPIキーを読み込みます${NC}"
    else
        echo -e "${RED}エラー: GEMINI_API_KEYが設定されていません${NC}"
        echo "以下のいずれかの方法で設定してください："
        echo "1. export GEMINI_API_KEY='your-api-key'"
        echo "2. gemini コマンドを実行して初期設定を行う"
        exit 1
    fi
fi

# Geminiに相談を送信
if command -v gemini &> /dev/null; then
    # 一時的な応答ファイルを作成
    TEMP_RESPONSE=$(mktemp)
    
    # Geminiを実行（エラーハンドリング付き）
    if gemini -p "$(cat "$CONSULT_FILE")" > "$TEMP_RESPONSE" 2>&1; then
        # 成功した場合、応答を整形して保存
        echo "# Geminiからの回答" > "$RESPONSE_FILE"
        echo "" >> "$RESPONSE_FILE"
        echo "相談日時: $(date '+%Y-%m-%d %H:%M:%S')" >> "$RESPONSE_FILE"
        echo "トピック: $TOPIC" >> "$RESPONSE_FILE"
        echo "" >> "$RESPONSE_FILE"
        echo "---" >> "$RESPONSE_FILE"
        echo "" >> "$RESPONSE_FILE"
        cat "$TEMP_RESPONSE" >> "$RESPONSE_FILE"
        
        echo -e "${GREEN}回答を保存しました: $RESPONSE_FILE${NC}"
        echo ""
        echo "回答の概要:"
        echo "----------------------------------------"
        # 最初の数行を表示
        head -n 20 "$TEMP_RESPONSE"
        echo "..."
        echo "----------------------------------------"
        echo ""
        echo -e "${GREEN}完全な回答は $RESPONSE_FILE で確認できます${NC}"
    else
        echo -e "${RED}エラー: Gemini CLIの実行に失敗しました${NC}"
        echo "エラー内容:"
        cat "$TEMP_RESPONSE"
        rm -f "$TEMP_RESPONSE"
        exit 1
    fi
    
    rm -f "$TEMP_RESPONSE"
else
    echo -e "${RED}エラー: gemini コマンドが見つかりません${NC}"
    echo "以下のコマンドでインストールしてください："
    echo "  npm install -g @google/gemini-cli"
    exit 1
fi

# 履歴の表示
echo ""
echo -e "${GREEN}相談履歴:${NC}"
echo "相談内容: $CONSULT_FILE"
echo "回答: $RESPONSE_FILE"

# 相談内容をクリップボードにコピー（macOSの場合）
if command -v pbcopy &> /dev/null; then
    echo "$RESPONSE_FILE" | pbcopy
    echo -e "${GREEN}回答ファイルのパスをクリップボードにコピーしました${NC}"
fi
```

## スクリプトの使用方法

### 1. スクリプトの保存

上記のスクリプトを`consult-gemini.sh`という名前で保存します：

```bash
# スクリプトを作成
nano consult-gemini.sh

# または、お使いのエディタで作成
code consult-gemini.sh
```

### 2. 実行権限の付与

```bash
chmod +x consult-gemini.sh
```

### 3. 環境変数の設定（APIキーを使用する場合）

```bash
# 一時的に設定
export GEMINI_API_KEY="your-api-key-here"

# 永続的に設定（.bashrcまたは.zshrcに追加）
echo 'export GEMINI_API_KEY="your-api-key-here"' >> ~/.bashrc
source ~/.bashrc
```

### 4. スクリプトの実行例

```bash
# 基本的な使用方法
./consult-gemini.sh -t "API設計" -q "RESTfulなエンドポイント設計について教えてください"

# ファイルを参照する場合
./consult-gemini.sh -t "コードレビュー" -q "このコードの改善点を教えてください" -f "src/api/users.js"

# 複数ファイルを参照する場合
./consult-gemini.sh -t "アーキテクチャ" -q "このシステム設計の問題点は？" -f "docs/architecture.md" -f "src/index.js"
```

## スクリプトの機能説明

### エラーハンドリング
- 必須引数のチェック
- ファイルの存在確認
- Gemini CLIの実行可否確認
- APIキーの設定確認

### 便利機能
- カラー出力で見やすい表示
- 相談履歴の自動保存
- タイムスタンプ付きファイル名
- 回答の概要表示
- macOSでのクリップボードコピー機能

### セキュリティ配慮
- APIキーを直接スクリプトに記載しない
- 環境変数または設定ファイルから読み込み
- エラー時の適切なメッセージ表示