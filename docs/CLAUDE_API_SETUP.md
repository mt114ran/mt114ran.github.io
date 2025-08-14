# Claude API セットアップガイド

## 📊 Anthropic APIクレジットの確認と追加

### 1. クレジット残高の確認
1. [Anthropic Console](https://console.anthropic.com/)にログイン
2. 左メニューの「Plans & Billing」をクリック
3. 現在のクレジット残高を確認

### 2. クレジットの購入
1. 「Plans & Billing」ページで「Add credits」をクリック
2. 必要な金額を選択（最小$5から）
3. 支払い情報を入力
4. 「Purchase」をクリック

### 3. 無料クレジットの取得（初回のみ）
- 新規アカウントには$5の無料クレジットが付与される場合があります
- プロモーションコードがある場合は「Redeem code」から入力

## 💰 料金の目安

| モデル | 入力料金 | 出力料金 |
|--------|----------|----------|
| Claude 3.5 Sonnet | $3 / 1M tokens | $15 / 1M tokens |
| Claude 3 Haiku | $0.25 / 1M tokens | $1.25 / 1M tokens |

### 使用量の計算例
- 1回の実行: 約2,000〜5,000トークン
- $5のクレジット: 約300〜500回実行可能

## 🔑 APIキーの再確認

```bash
# APIキーが正しく設定されているか確認
gh secret list | grep ANTHROPIC_API_KEY

# 新しいAPIキーで更新する場合
gh secret set ANTHROPIC_API_KEY
```

## 🧪 ローカルでのテスト

APIクレジットを消費せずにテストする方法：

```bash
# 環境変数を設定
export ANTHROPIC_API_KEY="your-api-key"

# テストスクリプト作成
cat > test-api.js << 'EOF'
const { Anthropic } = require('@anthropic-ai/sdk');

async function test() {
  try {
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    
    console.log('API key is set:', !!process.env.ANTHROPIC_API_KEY);
    
    // 最小限のテストリクエスト
    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307', // 安価なモデル
      max_tokens: 10,
      messages: [{
        role: 'user',
        content: 'Hi'
      }]
    });
    
    console.log('API is working!', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();
EOF

# 実行
npm install @anthropic-ai/sdk
node test-api.js
```

## 📝 代替案

### 1. OpenAI API を使用
```yaml
# .github/workflows/openai-bot.yml
env:
  OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
```

### 2. ローカルでClaude Codeを使用
```bash
# Claude Codeで直接実行
claude "文字列を逆順にする関数を作成"
```

### 3. 手動でPRを作成
開発はローカルで行い、手動でPRを作成する

## 🔍 デバッグ情報

### GitHub Actions のログ確認
```bash
# 最新の実行を確認
gh run list --workflow=claude-bot.yml --limit 1

# 詳細ログを見る
gh run view [RUN_ID] --log
```

### 環境変数の確認
```yaml
# ワークフローに追加してデバッグ
- name: Debug
  run: |
    echo "API Key exists: ${{ secrets.ANTHROPIC_API_KEY != '' }}"
    echo "Issue number: ${{ github.event.issue.number }}"
```