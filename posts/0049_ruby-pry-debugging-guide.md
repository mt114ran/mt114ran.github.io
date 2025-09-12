---
id: 49
title: "Ruby Pry完全ガイド！デバッグからREPLまで開発効率を劇的に向上させる使い方"
tags: ["Ruby", "Pry", "Debugging", "REPL", "Development"]
create: "2025-09-10 20:27"
update: "2025-09-10 20:27"
---

# Ruby Pry完全ガイド！デバッグからREPLまで開発効率を劇的に向上させる使い方

Ruby開発において、**Pry**は標準のirbを大幅に拡張した強力なREPL（Read-Eval-Print Loop）ツールです。シンタックスハイライト、高度なデバッグ機能、ソースコードの閲覧など、開発効率を飛躍的に向上させる機能が満載です。この記事では、Pryの基本から応用まで、実用的な使い方を詳しく解説します。

## Pryとは

**Pry**は、Rubyの標準REPLである`irb`を置き換える、より高機能な対話型Ruby実行環境です。2010年にJohn Mairによって開発され、現在では多くのRuby開発者に愛用されています。

### irbとPryの違い

| 機能 | irb | Pry |
|------|-----|-----|
| シンタックスハイライト | ✗ | ✓ |
| ソースコード表示 | ✗ | ✓ |
| 高度なデバッグ | ✗ | ✓ |
| 履歴管理 | 基本的 | 高度 |
| プラグインシステム | ✗ | ✓ |
| オブジェクトイントロスペクション | 基本的 | 高度 |

## インストールと基本設定

### インストール方法

**Gemfileに追加（Rails等）:**
```ruby
# Gemfile
group :development, :test do
  gem 'pry'
  gem 'pry-rails'      # Rails統合
  gem 'pry-byebug'     # デバッガ統合
  gem 'pry-doc'        # ドキュメント表示
end
```

**単体インストール:**
```bash
gem install pry pry-byebug pry-doc
```

### 基本的な設定

**~/.pryrcファイルの作成:**
```ruby
# ~/.pryrc
Pry.config.editor = 'code'  # Visual Studio Code
# Pry.config.editor = 'vim'  # Vim

# プロンプトのカスタマイズ
Pry.config.prompt = Pry::Prompt.new(
  'custom',
  'カスタムプロンプト',
  [
    proc { |context, nest_level, pry_instance| "[#{context}]> " },
    proc { |context, nest_level, pry_instance| "[#{context}]* " }
  ]
)

# エイリアスの設定
Pry.commands.alias_command 'c', 'continue'
Pry.commands.alias_command 's', 'step'
Pry.commands.alias_command 'n', 'next'
```

## 基本的な使い方

### 1. REPLとしての基本操作

```bash
# Pryの起動
pry

# または、スクリプト内で
binding.pry
```

```ruby
# 基本的な計算とオブジェクト操作
[1] pry(main)> 2 + 3
=> 5

[2] pry(main)> "Hello World".class
=> String

[3] pry(main)> [1, 2, 3].map(&:to_s)
=> ["1", "2", "3"]
```

### 2. オブジェクトのイントロスペクション

```ruby
# オブジェクトの詳細情報を表示
[1] pry(main)> ls String
String.methods:
  try_convert
String#methods:
  ascii_only?  bytes       each_line    inspect      reverse!    
  bytesize     capitalize  empty?       length       rstrip      
  # ... (省略)

# メソッドのソースコードを表示
[2] pry(main)> show-source String#reverse

From: string.c (C Method):
Owner: String
Visibility: public
Number of lines: 1

Returns a new string with the characters from str in reverse order.

   "stressed".reverse   #=> "desserts"

# メソッドのドキュメントを表示
[3] pry(main)> show-doc String#reverse
```

### 3. クラス・モジュール内への移動

```ruby
# クラス内に「cd」で移動
[1] pry(main)> cd String
[2] pry(String):1> ls
String.methods: try_convert
String#methods: ascii_only? bytes capitalize ...

# 戻る
[3] pry(String):1> cd ..
[4] pry(main)> 
```

## デバッグ機能

### 1. binding.pryを使ったブレークポイント

**基本的な使い方:**
```ruby
# debug_example.rb
class Calculator
  def add(a, b)
    binding.pry  # ← ここで実行が止まる
    result = a + b
    binding.pry  # ← 結果を確認したい場合
    result
  end
end

calc = Calculator.new
puts calc.add(5, 3)
```

**実行結果:**
```bash
$ ruby debug_example.rb

From: debug_example.rb @ line 3 Calculator#add:

    2: def add(a, b)
 => 3:   binding.pry
    4:   result = a + b
    5:   binding.pry
    6:   result

[1] pry(#<Calculator>)> a
=> 5
[2] pry(#<Calculator>)> b  
=> 3
[3] pry(#<Calculator>)> continue

From: debug_example.rb @ line 5 Calculator#add:

    2: def add(a, b)
    3:   binding.pry
    4:   result = a + b
 => 5:   binding.pry
    6:   result

[4] pry(#<Calculator>)> result
=> 8
[5] pry(#<Calculator>)> continue
8
```

### 2. pry-byebugを使った高度なデバッグ

```ruby
# advanced_debug.rb
require 'pry-byebug'

class UserService
  def initialize(users)
    @users = users
  end

  def find_adult_users
    binding.pry
    adult_users = []
    @users.each do |user|
      if user[:age] >= 18
        adult_users << user
      end
    end
    adult_users
  end
end

users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
]

service = UserService.new(users)
result = service.find_adult_users
puts result
```

**デバッグセッションの例:**
```bash
$ ruby advanced_debug.rb

From: advanced_debug.rb @ line 8 UserService#find_adult_users:

     7: def find_adult_users
  => 8:   binding.pry
     9:   adult_users = []
    10:   @users.each do |user|
    11:     if user[:age] >= 18
    12:       adult_users << user
    13:     end
    14:   end

[1] pry(#<UserService>)> next  # 次の行に進む

From: advanced_debug.rb @ line 9 UserService#find_adult_users:

     7: def find_adult_users
     8:   binding.pry
  => 9:   adult_users = []
    10:   @users.each do |user|

[2] pry(#<UserService>)> step  # メソッド内に入る

From: advanced_debug.rb @ line 10 UserService#find_adult_users:

     8:   binding.pry
     9:   adult_users = []
  => 10:   @users.each do |user|
    11:     if user[:age] >= 18

[3] pry(#<UserService>)> @users  # インスタンス変数を確認
=> [{:name=>"Alice", :age=>25}, {:name=>"Bob", :age=>17}, {:name=>"Charlie", :age=>30}]
```

### 3. 条件付きブレークポイント

```ruby
class DataProcessor
  def process_items(items)
    items.each_with_index do |item, index|
      # 特定の条件でのみ止まる
      binding.pry if item[:status] == 'error'
      
      # または、特定のインデックスで止まる  
      binding.pry if index == 10
      
      process_item(item)
    end
  end

  private

  def process_item(item)
    # アイテムの処理
    puts "Processing: #{item[:name]}"
  end
end
```

## Rails環境での活用

### 1. pry-railsの利用

```ruby
# Gemfile
gem 'pry-rails', group: [:development, :test]
```

**rails consoleでPryを使用:**
```bash
$ rails console
Loading development environment (Rails 7.0.0)
[1] pry(main)> User.first
  User Load (0.3ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT 1
=> #<User id: 1, name: "John", email: "john@example.com"...>

[2] pry(main)> cd User
[3] pry(User):1> ls
User.methods:
  all  create  find  find_by  where...
User#methods:  
  email  name  save  update...
```

### 2. コントローラーでのデバッグ

```ruby
class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    binding.pry  # リクエスト時にここで止まる
    render :show
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      redirect_to @user
    else
      binding.pry  # バリデーションエラー時の状態を確認
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
```

### 3. モデルでのデバッグ

```ruby
class User < ApplicationRecord
  before_save :normalize_email
  
  validates :email, presence: true, uniqueness: true

  private

  def normalize_email
    binding.pry  # メールの正規化処理をデバッグ
    self.email = email.downcase.strip if email.present?
  end
end
```

## 高度な機能

### 1. ヒストリー機能

```ruby
# ヒストリーの確認
[1] pry(main)> hist
1: 2 + 3
2: "Hello".upcase  
3: [1,2,3].sum

# 特定の履歴を再実行
[2] pry(main)> hist -r 2  # 2番目のコマンドを再実行
=> "HELLO"

# 履歴を保存
[3] pry(main)> save-file /tmp/pry_session.rb 1..3
```

### 2. シェルコマンドの実行

```ruby
# シェルコマンドを実行
[1] pry(main)> .ls -la
total 16
drwxr-xr-x   4 user  staff   128  1 10 10:30 .
drwxr-xr-x  20 user  staff   640  1 10 10:29 ..

# 結果をRuby変数に取得
[2] pry(main)> result = `ls -la`.split("\n")
=> ["total 16", "drwxr-xr-x   4 user  staff   128  1 10 10:30 .", ...]
```

### 3. ソースコード編集

```ruby
# メソッドのソースを編集（エディタで開く）
[1] pry(main)> edit User#full_name

# ファイルを開く
[2] pry(main)> edit app/models/user.rb

# 新しいファイルを作成
[3] pry(main)> edit -t temp  # 一時ファイルを作成
```

### 4. カスタムコマンドの作成

```ruby
# ~/.pryrc
Pry::Commands.create_command "greet" do
  description "挨拶をする"
  
  def options(opt)
    opt.on :n, :name=, "名前を指定", argument: true
  end
  
  def process
    name = opts[:name] || "World"
    output.puts "Hello, #{name}!"
  end
end

# 使用例
[1] pry(main)> greet
Hello, World!
[2] pry(main)> greet -n Alice
Hello, Alice!
```

## テスト環境での活用

### 1. RSpecとの組み合わせ

```ruby
# spec/models/user_spec.rb
RSpec.describe User, type: :model do
  describe '#full_name' do
    it '姓名を結合して返すこと' do
      user = User.new(first_name: "太郎", last_name: "田中")
      binding.pry  # テスト実行時にここで止まる
      expect(user.full_name).to eq "田中 太郎"
    end
  end
end
```

**実行:**
```bash
$ bundle exec rspec spec/models/user_spec.rb

From: spec/models/user_spec.rb @ line 5:

     3: it '姓名を結合して返すこと' do
     4:   user = User.new(first_name: "太郎", last_name: "田中")
  => 5:   binding.pry
     6:   expect(user.full_name).to eq "田中 太郎"

[1] pry(#<RSpec::ExampleGroups::User::FullName>)> user
=> #<User first_name: "太郎", last_name: "田中">
[2] pry(#<RSpec::ExampleGroups::User::FullName>)> user.full_name
=> "田中 太郎"
[3] pry(#<RSpec::ExampleGroups::User::FullName>)> continue
```

### 2. Minitestとの組み合わせ

```ruby
# test/models/user_test.rb
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "should create user with valid attributes" do
    user = User.new(name: "Test User", email: "test@example.com")
    binding.pry  # テスト中の状態を確認
    assert user.save
  end
end
```

## パフォーマンス分析

### 1. ベンチマーク測定

```ruby
require 'benchmark'

# Pry内でベンチマーク実行
[1] pry(main)> benchmark do
[1] pry(main)*   1000.times { "hello".upcase }
[1] pry(main)* end
       user     system      total        real
   0.000123   0.000002   0.000125 (  0.000124)

# メソッドの実行時間測定
[2] pry(main)> time_taken = Benchmark.realtime { User.all.to_a }
=> 0.023456789
```

### 2. メモリ使用量の確認

```ruby
# メモリ使用量チェック用のヘルパー
def memory_usage
  `ps -o pid,rss -p #{Process.pid}`.strip.split("\n")[1].split[1].to_i
end

[1] pry(main)> before = memory_usage
=> 45678

[2] pry(main)> large_array = (1..1000000).to_a
=> [1, 2, 3, ..., 1000000]

[3] pry(main)> after = memory_usage  
=> 67890

[4] pry(main)> puts "Memory increased: #{after - before} KB"
Memory increased: 22212 KB
```

## トラブルシューティング

### 1. よくある問題と解決法

**Pryが起動しない:**
```bash
# Gemの確認
gem list | grep pry

# 再インストール
gem uninstall pry
gem install pry
```

**Rails環境でPryが動かない:**
```ruby
# Gemfileに正しく記述されているか確認
group :development, :test do
  gem 'pry-rails'
end

# bundle installを実行
bundle install

# Spring使用時はリスタート
bundle exec spring stop
```

### 2. デバッグセッションからの脱出方法

```ruby
# 現在のPryセッションから抜ける
[1] pry(main)> exit

# 全てのPryセッションから抜ける（例外を発生）
[2] pry(main)> exit-all

# プログラムの実行を継続
[3] pry(main)> continue

# 一つ上のスコープに戻る
[4] pry(main)> cd ..
```

## 便利なTipsとトリック

### 1. よく使うエイリアス

```ruby
# ~/.pryrc
Pry.commands.alias_command 'c', 'continue'
Pry.commands.alias_command 'n', 'next' 
Pry.commands.alias_command 's', 'step'
Pry.commands.alias_command 'ss', 'show-source'
Pry.commands.alias_command 'sd', 'show-doc'
```

### 2. カラーテーマのカスタマイズ

```ruby
# ~/.pryrc
Pry.config.color = true
Pry.config.theme = "monokai"

# カスタムテーマ
Pry.config.theme = {
  "keyword" => [:blue],
  "method" => [:yellow], 
  "string" => [:green],
  "symbol" => [:red]
}
```

### 3. プロジェクト固有の設定

```ruby
# プロジェクトルートに .pryrc
if defined?(Rails)
  # Rails固有のヘルパーメソッド
  def u(id = nil)
    if id
      User.find(id)
    else  
      User.first
    end
  end
  
  def reload!
    Rails.application.reloader.reload!
  end
end
```

## まとめ

Pryは単なるデバッグツールではなく、Ruby開発の生産性を大幅に向上させる多機能なREPL環境です。重要なポイント：

### 基本機能
- **シンタックスハイライト** - コードが見やすく、入力ミスを減らす
- **オブジェクトイントロスペクション** - `ls`, `show-source`でコードを深く理解
- **高度なヒストリー** - 過去のセッションを効果的に活用

### デバッグ機能
- **binding.pry** - 任意の箇所で実行を停止してデバッグ
- **ステップ実行** - next, step, continueで細かい制御
- **条件付きブレークポイント** - 効率的な問題の特定

### 開発環境統合
- **Rails統合** - pry-railsでRailsプロジェクトを快適にデバッグ
- **テスト統合** - RSpec, Minitestでのテスト駆動開発をサポート
- **エディタ連携** - ソースコード編集の効率化

Pryを日常的に使うことで、バグの発見が早くなり、コードの理解が深まり、結果として開発速度と品質が向上します。まずは`binding.pry`から始めて、徐々に高度な機能を習得していきましょう。

## 参考リンク

- [Pry GitHub Repository](https://github.com/pry/pry)
- [pry-byebug GitHub](https://github.com/deivid-rodriguez/pry-byebug)
- [pry-rails GitHub](https://github.com/pry/pry-rails)
- [Pry Wiki](https://github.com/pry/pry/wiki)