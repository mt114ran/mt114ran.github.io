---
id: 8
title: "jq入門：JSONデータを自在に操作するコマンドラインツール"
tags: ["jq", "JSON", "CLI", "データ処理", "初心者向け"]
create: "2025-08-02 08:30"
update: "2025-08-02 14:15"
---

# jqとは


jq（ジェイキュー）は、JSONデータを処理するための軽量で柔軟なコマンドラインツールです。sedやawkがテキストデータを処理するように、jqはJSONデータを簡単に操作、フィルタリング、変換できます。

## なぜjqが必要なのか

現代のWeb開発では、APIレスポンスや設定ファイルなど、JSONデータを扱う機会が非常に多くあります。しかし、巨大なJSONファイルから必要な情報だけを抽出したり、データ構造を変換したりするのは、通常のテキストエディタでは困難です。jqを使えば、これらの作業を効率的に行えます。

## インストール方法

### macOS
```bash
brew install jq
```

### Ubuntu/Debian
```bash
sudo apt-get install jq
```

### CentOS/RHEL
```bash
sudo yum install jq
```

インストール後、以下のコマンドでバージョンを確認できます：
```bash
jq --version
```

## 基本的な使い方

### 1. JSONの整形表示

最も基本的な使い方は、JSONを見やすく整形することです。

```bash
# 整形前のJSON
echo '{"name":"田中太郎","age":30,"city":"東京"}' | jq '.'

# 出力結果
{
  "name": "田中太郎",
  "age": 30,
  "city": "東京"
}
```

### 2. 特定のフィールドを抽出

`.` を使ってオブジェクトのプロパティにアクセスできます。

```bash
# nameフィールドだけを取得
echo '{"name":"田中太郎","age":30,"city":"東京"}' | jq '.name'
# 出力: "田中太郎"

# 複数のフィールドを取得
echo '{"name":"田中太郎","age":30,"city":"東京"}' | jq '.name, .age'
# 出力:
# "田中太郎"
# 30
```

### 3. 配列の操作

配列データの処理も簡単です。

```bash
# 配列の全要素を取得
echo '[1,2,3,4,5]' | jq '.[]'
# 出力:
# 1
# 2
# 3
# 4
# 5

# 配列の最初の要素
echo '[1,2,3,4,5]' | jq '.[0]'
# 出力: 1

# 配列の長さを取得
echo '[1,2,3,4,5]' | jq 'length'
# 出力: 5
```

## 実務でよく使われる使用例

### 1. APIレスポンスの解析

GitHub APIからリポジトリ情報を取得して解析する例：

```bash
# GitHubのリポジトリ情報を取得
curl -s https://api.github.com/repos/torvalds/linux | jq '{
  name: .name,
  stars: .stargazers_count,
  language: .language,
  created: .created_at
}'

# 出力例:
{
  "name": "linux",
  "stars": 168000,
  "language": "C",
  "created": "2011-09-04T22:48:12Z"
}
```

### 2. ログファイルのJSON解析

構造化ログ（JSON形式）から特定の条件でフィルタリング：

```bash
# エラーログだけを抽出
cat app.log | jq 'select(.level == "ERROR")'

# 特定の時間帯のログを抽出
cat app.log | jq 'select(.timestamp > "2025-08-01T00:00:00Z")'

# エラーメッセージだけを一覧表示
cat app.log | jq 'select(.level == "ERROR") | .message'
```

### 3. package.jsonの依存関係確認

Node.jsプロジェクトの依存関係を確認：

```bash
# 本番環境の依存関係をリスト表示
cat package.json | jq '.dependencies | keys[]'

# 特定のパッケージのバージョンを確認
cat package.json | jq '.dependencies.react'

# 依存関係の数を数える
cat package.json | jq '.dependencies | length'
```

### 4. 複数のJSONファイルをマージ

設定ファイルの結合：

```bash
# 2つの設定ファイルをマージ
jq -s '.[0] * .[1]' base-config.json env-config.json > final-config.json

# 配列を結合
jq -s 'add' file1.json file2.json file3.json
```

### 5. データの変換と集計

売上データの集計例：

```bash
# 売上データから合計金額を計算
echo '[
  {"product": "A", "price": 1000, "quantity": 3},
  {"product": "B", "price": 2000, "quantity": 2},
  {"product": "C", "price": 1500, "quantity": 4}
]' | jq '[.[] | .price * .quantity] | add'
# 出力: 13000

# 商品ごとの売上を計算して新しいフィールドを追加
echo '[
  {"product": "A", "price": 1000, "quantity": 3},
  {"product": "B", "price": 2000, "quantity": 2}
]' | jq '.[] | . + {total: .price * .quantity}'
```

## 実務での活用シーン

### 1. CI/CDパイプライン

デプロイメント設定の動的な変更：

```bash
# package.jsonのバージョンを更新
jq '.version = "2.0.0"' package.json > tmp.json && mv tmp.json package.json

# 環境変数に基づいて設定を変更
jq --arg env "$ENVIRONMENT" '.environment = $env' config.json > tmp.json && mv tmp.json config.json
```

### 2. モニタリングとアラート

CloudWatchやDatadogのメトリクスデータ処理：

```bash
# CloudWatchメトリクスから異常値を検出
aws cloudwatch get-metric-statistics \
  --namespace AWS/EC2 \
  --metric-name CPUUtilization \
  --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \
  --start-time 2025-08-01T00:00:00Z \
  --end-time 2025-08-02T00:00:00Z \
  --period 3600 \
  --statistics Average \
  --output json | jq '.Datapoints[] | select(.Average > 80)'
```

### 3. データベースのJSONカラム処理

PostgreSQLやMySQLのJSON型カラムのデータ処理：

```bash
# PostgreSQLからエクスポートしたJSONデータを整形
psql -c "SELECT row_to_json(users) FROM users WHERE active = true" -t | jq '.'

# 特定のJSON属性でグループ化
cat users.json | jq 'group_by(.department) | map({department: .[0].department, count: length})'
```

### 4. テストデータの生成

APIテスト用のモックデータ生成：

```bash
# 連番付きのテストデータを生成
jq -n '[range(1;11) | {id: ., name: "User\(.)", email: "user\(.)@example.com"}]'

# ランダムなデータを含むテストデータ
jq -n '[range(1;6) | {
  id: .,
  score: (. * 17 % 100),
  status: (["active", "inactive", "pending"][. % 3])
}]'
```

## 便利なオプション

### よく使うオプション一覧

- `-r`: 文字列の引用符を除去（Raw output）
- `-s`: 複数のJSONを配列として読み込み（Slurp）
- `-c`: 出力をコンパクトに（Compact）
- `-e`: エラー時に非ゼロの終了コードを返す
- `-n`: 入力なしでjqを実行（Null input）

```bash
# 引用符なしで出力
echo '{"name":"田中"}' | jq -r '.name'
# 出力: 田中

# コンパクトな出力
echo '{"name":"田中","age":30}' | jq -c '.'
# 出力: {"name":"田中","age":30}
```

## トラブルシューティング

### 1. パースエラーが発生する場合

```bash
# 不正なJSONをチェック
echo '{"name": "田中",}' | jq '.' 2>&1
# エラー: parse error: Expected another key-value pair at line 1, column 18
```

### 2. nullや未定義のフィールドを安全に処理

```bash
# null許容の処理
echo '{"name":null}' | jq '.name // "デフォルト名"'
# 出力: "デフォルト名"

# オプショナルチェーン的な処理
echo '{}' | jq '.user.name? // "未設定"'
# 出力: "未設定"
```

### 3. 大きなJSONファイルの処理

```bash
# ストリーミング処理で大きなファイルを扱う
jq --stream '. | select(.[0][0] == "name")' huge-file.json

# メモリ使用量を抑えながら処理
jq -c '.[]' huge-array.json | while read line; do
  echo "$line" | jq '.name'
done
```

## まとめ

jqは、JSONデータを扱う開発者にとって必須のツールです。基本的なフィルタリングから複雑なデータ変換まで、幅広い用途で活用できます。

特に以下のような場面で威力を発揮します：
- APIのレスポンス解析とデバッグ
- ログファイルの解析と監視
- 設定ファイルの動的な更新
- テストデータの生成
- データの変換と集計

最初は基本的な操作から始めて、徐々に複雑な処理にチャレンジしていくことをお勧めします。jqをマスターすることで、JSONデータの処理が劇的に効率化され、開発生産性が大幅に向上するでしょう。


## 参考リンク

- [jq公式マニュアル](https://jqlang.github.io/jq/manual/)
- [jq Playground（オンラインで試せる）](https://jqplay.org/)
- [jq Cookbook](https://github.com/jqlang/jq/wiki/Cookbook)