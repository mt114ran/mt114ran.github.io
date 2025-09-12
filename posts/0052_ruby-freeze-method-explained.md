---
layout: post
title: "Ruby の .freeze メソッドを理解する：オブジェクトの不変性とメモリ効率"
date: "2025-09-05 13:22"
create: "2025-09-05 13:22"
update: "2025-09-05 13:22"
tags: ["Ruby", "Rails", "プログラミング", "メモリ管理", "定数"]
categories: ["Ruby", "プログラミング"]
description: "Ruby の .freeze メソッドの役割と使い方を初心者向けに解説。オブジェクトの不変性、定数での活用、メモリ効率化について具体例とともに説明します。"
---

Rubyのコードを読んでいると、文字列の末尾に`.freeze`が付いているのを見かけることがありませんか？この記事では、`.freeze`メソッドの役割や使い方について、初心者の方にも分かりやすく解説します。

## .freeze メソッドとは

`.freeze`は、Rubyのオブジェクトを**不変（immutable）**にするメソッドです。一度`.freeze`を適用したオブジェクトは、その内容を変更することができなくなります。

```ruby
# 通常の文字列（変更可能）
message = "Hello"
puts message  # => "Hello"

message << " World"  # 文字列に追加
puts message  # => "Hello World"

# freeze された文字列（変更不可能）
frozen_message = "Hello".freeze
puts frozen_message  # => "Hello"

frozen_message << " World"  # エラーが発生！
# FrozenError: can't modify frozen String
```

## なぜ .freeze を使うのか

### 1. 安全性の向上

定数や重要なデータを意図しない変更から守ることができます。

```ruby
# 危険な例：定数が変更される可能性
API_BASE_URL = "https://api.example.com"
API_BASE_URL << "/v2"  # 定数が変更されてしまう！

# 安全な例：freeze で保護
API_BASE_URL = "https://api.example.com".freeze
API_BASE_URL << "/v2"  # エラー：変更できない
```

### 2. メモリ効率の向上

Rubyは同じ内容のfrozenオブジェクトを再利用するため、メモリ使用量を削減できます。

```ruby
# freeze なし：毎回新しいオブジェクトが作られる
def get_status_pending
  "pending"  # 毎回新しい文字列オブジェクト
end

# freeze あり：同じオブジェクトが再利用される
def get_status_pending
  "pending".freeze  # 同一のfrozenオブジェクトが再利用
end
```

### 3. RuboCopの推奨事項

RuboCopの`Style/MutableConstant`ルールにより、定数には`.freeze`の使用が推奨されています。

## 実践的な使用例

### Rails の設定ファイルでの使用

```ruby
class ApplicationConfig
  # エラーメッセージ定数
  ERROR_MESSAGES = {
    not_found: "指定されたリソースが見つかりません".freeze,
    unauthorized: "認証が必要です".freeze,
    server_error: "サーバーエラーが発生しました".freeze
  }.freeze
  
  # APIエンドポイント
  API_ENDPOINTS = [
    "/api/v1/users".freeze,
    "/api/v1/products".freeze,
    "/api/v1/orders".freeze
  ].freeze
end
```

### 設定値の保護

```ruby
class NotificationConfig
  module ShippingDelay
    ENABLED = false
    TEXT = "現在、多くの発送申請をいただいており、お届けまでにお時間を要しております。".freeze
  end
end
```

## 配列やハッシュでの .freeze

文字列以外のオブジェクトでも`.freeze`は使用できます。

### 配列の場合

```ruby
# 配列をfreeze
colors = ["red", "green", "blue"].freeze
colors << "yellow"  # エラー：配列に要素を追加できない

# ただし、配列の要素自体はfreezeされない
colors[0] << "dish"  # "reddish" になる（要素の変更は可能）

# 配列と要素の両方をfreezeする場合
colors = ["red".freeze, "green".freeze, "blue".freeze].freeze
```

### ハッシュの場合

```ruby
# ハッシュをfreeze
config = { host: "localhost", port: 3000 }.freeze
config[:database] = "myapp"  # エラー：新しいキーを追加できない
config[:host] = "example.com"  # エラー：既存の値を変更できない
```

## freeze の確認方法

オブジェクトがfreezeされているかどうかは`frozen?`メソッドで確認できます。

```ruby
text = "Hello"
puts text.frozen?  # => false

text.freeze
puts text.frozen?  # => true
```

## パフォーマンスへの影響

### メモリ使用量の比較

```ruby
# freeze なし：毎回新しいオブジェクトが作成される
1000.times do
  status = "active"  # 1000個の異なるオブジェクト
end

# freeze あり：同じオブジェクトが再利用される
1000.times do
  status = "active".freeze  # 1個のfrozenオブジェクトが再利用
end
```

### ベンチマーク例

実際のパフォーマンスを計測してみましょう。

```ruby
require 'benchmark'

# 10万回の文字列生成でのベンチマーク
n = 100_000

Benchmark.bm(15) do |x|
  x.report("freeze なし:") do
    n.times { "Hello World" }
  end
  
  x.report("freeze あり:") do
    n.times { "Hello World".freeze }
  end
end

# 結果例：
#                      user     system      total        real
# freeze なし:      0.020000   0.000000   0.020000 (  0.023341)
# freeze あり:      0.010000   0.000000   0.010000 (  0.012156)
```

## 注意点とベストプラクティス

### 1. 深いfreezeはされない

```ruby
data = { users: ["alice", "bob"] }.freeze
data[:users] << "charlie"  # 成功：配列自体はfreezeされていない

# 完全にfreezeする場合は各要素も個別にfreezeが必要
data = { 
  users: ["alice".freeze, "bob".freeze].freeze 
}.freeze
```

### 2. 定数には積極的に使用

```ruby
class UserStatus
  ACTIVE = "active".freeze
  INACTIVE = "inactive".freeze
  PENDING = "pending".freeze
  
  ALL_STATUSES = [ACTIVE, INACTIVE, PENDING].freeze
end
```

### 3. 動的な値には使用しない

```ruby
# 良い例：固定値
DEFAULT_MESSAGE = "Welcome to our service".freeze

# 悪い例：動的な値
current_time = Time.now.to_s.freeze  # 意味がない
```

## まとめ

`.freeze`メソッドは、Rubyにおいてオブジェクトの安全性とパフォーマンスを向上させる重要な機能です。

**主な利点：**
- オブジェクトの意図しない変更を防止
- メモリ使用量の削減
- 同一オブジェクトの再利用によるパフォーマンス向上

**使用すべき場面：**
- 定数の定義
- 設定値やエラーメッセージ
- 固定的なデータ構造

**注意点：**
- 深いfreezeは自動的に行われない
- 動的な値には適用しない
- freezeされたオブジェクトは変更不可能

`.freeze`を適切に使用することで、より安全で効率的なRubyコードを書くことができます。定数を定義する際は、ぜひ`.freeze`の使用を検討してみてください。

## 参考リンク

- [Ruby公式ドキュメント - Object#freeze](https://docs.ruby-lang.org/ja/latest/method/Object/i/freeze.html)
- [RuboCop Style/MutableConstant](https://docs.rubocop.org/rubocop/cops_style.html#stylemutableconstant)
- [Ruby公式ドキュメント - Object#frozen?](https://docs.ruby-lang.org/ja/latest/method/Object/i/frozen=3f.html)