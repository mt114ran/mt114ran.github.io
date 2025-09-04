---
id: 43
title: "Rails初心者が混乱しがちなパーシャル（部分テンプレート）の命名ルールと使い方"
tags: ["Rails", "View", "Template", "Partial", "HAML"]
create: "2025-09-05 00:28"
update: "2025-09-05 03:44"
---

# Rails初心者が混乱しがちなパーシャル（部分テンプレート）の命名ルールと使い方

Railsでビューを作成していると必ず出会うのが「パーシャル（部分テンプレート）」です。しかし、初心者の方が最も混乱しやすいのが**ファイル名の命名ルール**です。

「なぜファイル名にはアンダースコア（`_`）が必要なのに、呼び出す時は外すの？」という疑問を持ったことがある方も多いのではないでしょうか。

この記事では、Railsのパーシャルの基本的な使い方から、混乱しがちな命名ルールまでを初心者向けに詳しく解説します。

## パーシャルとは何か？

パーシャル（Partial）は、**再利用可能な部分テンプレート**のことです。Webコンポーネントのような感覚で、ビューの一部を切り出して別ファイルに保存し、複数の場所から呼び出すことができます。

### パーシャルのメリット

- **再利用性**: 一度作れば複数の場所で使える
- **保守性**: パーシャル1つを修正すれば全箇所に反映される
- **可読性**: メインのビューがスッキリして読みやすくなる
- **一貫性**: 同じ見た目・動作を保証できる

## パーシャルの基本的な使い方

### 1. パーシャルファイルの作成

パーシャルファイルは**必ずアンダースコア（`_`）から始める**必要があります。

```
app/views/posts/
├── index.html.erb          # 通常のビューファイル
├── show.html.erb           # 通常のビューファイル
├── _card.html.erb          # パーシャルファイル
└── _header.html.erb        # パーシャルファイル
```

### 2. パーシャルの呼び出し

パーシャルを呼び出す際は、**アンダースコアを外して**`render`メソッドを使います。

```erb
<!-- app/views/posts/index.html.erb -->
<h1>記事一覧</h1>
<%= render 'header' %>  <!-- _header.html.erb を呼び出し -->

<div class="posts-list">
  <% @posts.each do |post| %>
    <%= render 'card', post: post %>  <!-- _card.html.erb を呼び出し -->
  <% end %>
</div>
```

### 3. パーシャルでのデータの受け渡し

パーシャルにデータを渡すには、`locals`オプションまたは直接指定します。

```erb
<!-- 方法1: localsオプションを使用 -->
<%= render 'card', locals: { post: @post, show_author: true } %>

<!-- 方法2: 直接指定（推奨） -->
<%= render 'card', post: @post, show_author: true %>
```

```erb
<!-- _card.html.erb -->
<div class="post-card">
  <h3><%= post.title %></h3>
  <p><%= post.content %></p>
  <% if show_author %>
    <p>Author: <%= post.author.name %></p>
  <% end %>
</div>
```

## なぜアンダースコアが必要なのか？

### ファイルの種類を区別するため

Railsでは**ファイルの種類を一目で判別**できるよう、以下のような命名規則があります。

| ファイルの種類 | 命名例 | 用途 |
|---|---|---|
| **通常のビュー** | `index.html.erb` | 独立したページとして表示 |
| **パーシャル** | `_card.html.erb` | 部品として他から呼び出される |
| **レイアウト** | `application.html.erb` | ページ全体の枠組み |

### Convention over Configuration

これはRailsの基本思想である「[Convention over Configuration](https://ja.wikipedia.org/wiki/Convention_over_Configuration)（設定より規約）」の一例です。

- **設定ファイルで細かく指定する**のではなく
- **命名規則に従うことで自動的に動作する**ようにする

この思想により、開発者は設定ファイルを書く手間を省き、コードを書くことに集中できます。

## よくある間違いとその対処法

### ❌ 間違いパターン1: renderでアンダースコアを付けてしまう

```erb
<!-- 間違い -->
<%= render '_card' %>
<%= render '_header' %>
<%= render 'shared/_footer' %>
```

```erb
<!-- 正しい -->
<%= render 'card' %>
<%= render 'header' %>
<%= render 'shared/footer' %>
```

### ❌ 間違いパターン2: ファイル名にアンダースコアを付け忘れる

```
<!-- 間違い -->
app/views/posts/card.html.erb

<!-- 正しい -->
app/views/posts/_card.html.erb
```

### エラーメッセージの読み方

アンダースコアを付け忘れたり、間違った呼び出しをすると以下のようなエラーが表示されます。

```
ActionView::MissingTemplate: Missing partial posts/_card
```

このエラーメッセージのポイント：
- **`Missing partial`**: パーシャルが見つからない
- **`posts/_card`**: 探しているファイルは `app/views/posts/_card.html.erb`
- エラーメッセージには**アンダースコア付き**で表示されるが、renderでは**アンダースコアなし**で書く

## パーシャルファイルから他のパーシャルを呼び出す

パーシャルファイル内でも、他のパーシャルを呼び出すことができます。

```erb
<!-- _article_card.html.erb -->
<div class="article-card">
  <%= render 'article_image', post: post %>     <!-- _article_image.html.erb -->
  <%= render 'article_content', post: post %>   <!-- _article_content.html.erb -->
  <%= render 'article_meta', post: post %>      <!-- _article_meta.html.erb -->
</div>
```

このように、**パーシャルを小さな部品に分割**することで、より保守性の高いコードを書くことができます。

## 別ディレクトリのパーシャルを呼び出す

パーシャルは別のディレクトリからも呼び出すことができます。

### ディレクトリ構造例

```
app/views/
├── shared/
│   ├── _header.html.erb
│   ├── _footer.html.erb
│   └── _sidebar.html.erb
├── posts/
│   ├── index.html.erb
│   └── _card.html.erb
└── admin/
    ├── index.html.erb
    └── _dashboard.html.erb
```

### 呼び出し方法

```erb
<!-- app/views/posts/index.html.erb から -->
<%= render 'shared/header' %>          <!-- app/views/shared/_header.html.erb -->
<%= render 'card', post: @post %>      <!-- app/views/posts/_card.html.erb -->

<!-- app/views/admin/index.html.erb から -->
<%= render 'shared/header' %>          <!-- app/views/shared/_header.html.erb -->
<%= render 'posts/card', post: @post %> <!-- app/views/posts/_card.html.erb -->
```

## パーシャルのファイル検索順序

Railsは以下の順序でパーシャルファイルを検索します。

1. **同じディレクトリ**: `app/views/posts/_card.html.erb`
2. **共通ディレクトリ**: `app/views/application/_card.html.erb`
3. **その他のビューパス**

この検索順序により、特定のコントローラー専用のパーシャルがある場合はそれを優先し、なければ共通のパーシャルを使用するという柔軟な運用が可能です。

## 実践的な使用例

### ナビゲーションメニューの共通化

```erb
<!-- app/views/shared/_navigation.html.erb -->
<nav class="main-navigation">
  <ul>
    <li><%= link_to 'ホーム', root_path %></li>
    <li><%= link_to '記事', posts_path %></li>
    <li><%= link_to 'お問い合わせ', contact_path %></li>
  </ul>
</nav>
```

```erb
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
<head>
  <!-- head要素の内容 -->
</head>
<body>
  <%= render 'shared/navigation' %>
  
  <main>
    <%= yield %>
  </main>
  
  <%= render 'shared/footer' %>
</body>
</html>
```

### フォーム部品の再利用

```erb
<!-- app/views/posts/_form.html.erb -->
<%= form_with model: post do |form| %>
  <div class="form-group">
    <%= form.label :title, 'タイトル' %>
    <%= form.text_field :title, class: 'form-control' %>
  </div>
  
  <div class="form-group">
    <%= form.label :content, '内容' %>
    <%= form.text_area :content, class: 'form-control' %>
  </div>
  
  <%= form.submit class: 'btn btn-primary' %>
<% end %>
```

```erb
<!-- app/views/posts/new.html.erb -->
<h1>記事を書く</h1>
<%= render 'form', post: @post %>

<!-- app/views/posts/edit.html.erb -->
<h1>記事を編集</h1>
<%= render 'form', post: @post %>
```

## 覚え方のコツ

### 1. ファイル名の構成を理解する

```
実際のファイル名: app/views/shared/_header.html.erb
                  ↑       ↑     ↑    ↑      ↑
                  パス    種別  名前  形式   言語
```

- **パス**: `app/views/shared/`
- **種別**: `_` (パーシャルを示す)
- **名前**: `header`
- **形式**: `.html`
- **言語**: `.erb`

### 2. renderで書く内容

```ruby
render 'shared/header'
       ↑      ↑
       パス   名前（アンダースコアと拡張子は自動で付加）
```

Railsが自動で補完してくれる部分：
- `app/views/` ← 自動で付く
- `_` ← 自動で付く
- `.html.erb` ← 自動で付く

### 3. 「部品には印を付ける」と覚える

- **部品（パーシャル）**: `_`という印を付ける
- **完成品（通常ビュー）**: 印は付けない

## HAMLでの使用方法

ERBの例をHAML記法で書くと以下のようになります。

```haml
-# app/views/posts/index.html.haml
%h1 記事一覧
= render 'header'

.posts-list
  - @posts.each do |post|
    = render 'card', post: post
```

```haml
-# app/views/posts/_card.html.haml
.post-card
  %h3= post.title
  %p= post.content
  - if show_author
    %p= "Author: #{post.author.name}"
```

## まとめ

Railsのパーシャルは、以下のルールを覚えておけば安心して使えます。

### 📝 重要なルール

1. **ファイル名**: 必ずアンダースコア（`_`）で始める
2. **呼び出し**: `render`でアンダースコアを外して指定
3. **データ渡し**: カンマ区切りでローカル変数を渡せる
4. **ネスト**: パーシャルから他のパーシャルも呼び出せる

### 🎯 覚え方のポイント

- **ファイル名 = 印付きの部品**
- **render = 印を外して呼び出し**
- **エラーメッセージには印付きで表示されるが、書くときは印なし**

パーシャルを効果的に使うことで、保守性が高く読みやすいRailsアプリケーションを作ることができます。最初は混乱するかもしれませんが、慣れてしまえば非常に強力な機能です。

ぜひ実際のプロジェクトでパーシャルを使って、よりクリーンなビューコードを書いてみてください！

## 参考リンク

- [Rails Guides - レイアウトとレンダリング](https://railsguides.jp/layouts_and_rendering.html)
- [Rails API Documentation - ActionView::PartialRenderer](https://api.rubyonrails.org/classes/ActionView/PartialRenderer.html)