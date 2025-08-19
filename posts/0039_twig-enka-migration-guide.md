---
id: 39
title: "Twigテンプレートエンジンとenka移行ツール完全ガイド - <twig migrate>エラーの解決から実装まで"
tags: ["Twig", "enka", "PHP", "テンプレートエンジン", "移行ツール", "Symfony"]
create: "2025-08-20 01:48"
update: "2025-08-20 01:48"
---

PHPプロジェクトでTwigテンプレートを使用していて、「`<twig migrate>`がないとenka的にだめだよ」というエラーに遭遇したことはありませんか？今回は、Twigテンプレートエンジンの基礎から、enka移行ツールの概念、そして実際の移行作業まで、初心者にも分かりやすく解説します。

## 💡 初心者向け解説

### そもそもテンプレートエンジンとは？

**簡単に言うと**: HTMLの中にプログラムの変数を埋め込んで、動的なWebページを作るツールです。

```
例：レストランのメニュー表
静的HTML：毎日同じメニュー（印刷済み）
テンプレートエンジン：日替わりメニュー（テンプレートに今日の料理を差し込む）
```

## 📚 目次

- [Twigとは？基礎から理解する](#twigとは基礎から理解する)
- [enkaとは？移行ツールの役割](#enkaとは移行ツールの役割)
- [<twig migrate>エラーの原因と対処法](#twig-migrateエラーの原因と対処法)
- [Twig実装の基本](#twig実装の基本)
- [enka移行の実践](#enka移行の実践)
- [トラブルシューティング](#トラブルシューティング)
- [ベストプラクティス](#ベストプラクティス)

## Twigとは？基礎から理解する

### 🌿 Twigの概要

**Twig**は、PHPで最も人気のあるテンプレートエンジンの一つで、Symfonyフレームワークの標準テンプレートエンジンとして採用されています。

### なぜTwigを使うのか？

#### 1. **セキュリティ**
```php
// ❌ 危険：生のPHP
<?php echo $_GET['name']; ?>  // XSS脆弱性の危険！

// ✅ 安全：Twig
{{ name }}  // 自動的にエスケープされる
```

#### 2. **可読性**
```twig
{# Twigテンプレートの例 #}
<!DOCTYPE html>
<html>
<head>
    <title>{{ page_title }}</title>
</head>
<body>
    <h1>ようこそ、{{ user.name }}さん！</h1>
    
    {% if user.is_premium %}
        <div class="premium-content">
            プレミアム会員限定コンテンツ
        </div>
    {% endif %}
    
    <ul>
    {% for item in items %}
        <li>{{ item.title }} - {{ item.price|number_format }} 円</li>
    {% endfor %}
    </ul>
</body>
</html>
```

#### 3. **テンプレート継承**
```twig
{# base.html.twig - 親テンプレート #}
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}デフォルトタイトル{% endblock %}</title>
</head>
<body>
    <header>共通ヘッダー</header>
    
    {% block content %}
        {# 子テンプレートでこの部分を上書き #}
    {% endblock %}
    
    <footer>共通フッター</footer>
</body>
</html>
```

```twig
{# page.html.twig - 子テンプレート #}
{% extends 'base.html.twig' %}

{% block title %}商品一覧{% endblock %}

{% block content %}
    <h1>商品リスト</h1>
    {# ページ固有のコンテンツ #}
{% endblock %}
```

### Twigの基本構文

| 構文 | 用途 | 例 |
|------|------|-----|
| `{{ ... }}` | 変数や式の出力 | `{{ user.name }}` |
| `{% ... %}` | 制御構造（if、for等） | `{% if condition %}` |
| `{# ... #}` | コメント | `{# これはコメント #}` |
| `\|` | フィルター | `{{ price\|number_format }}` |

## enkaとは？移行ツールの役割

### 🔄 enkaの概念

**enka（エンカ）**は、テンプレートエンジンの移行や変換を支援するツール・ライブラリの総称です。特にTwigにおいては、以下のような場面で使用されます：

1. **バージョン移行**
   - Twig 1.x → 2.x → 3.x への移行
   - 非推奨機能の自動変換

2. **他のテンプレートエンジンからの移行**
   - Smarty → Twig
   - Blade → Twig
   - 生のPHP → Twig

3. **構文の自動変換**
   - 古い構文から新しい構文への変換
   - カスタムタグの標準化

### enkaが必要な理由

```php
// 例：古いPHPテンプレート
<?php foreach($products as $product): ?>
    <div class="product">
        <h2><?php echo htmlspecialchars($product['name']); ?></h2>
        <p>価格: <?php echo number_format($product['price']); ?>円</p>
        <?php if($product['is_sale']): ?>
            <span class="sale">セール中！</span>
        <?php endif; ?>
    </div>
<?php endforeach; ?>

// ↓ enkaで自動変換

// 新しいTwigテンプレート
{% for product in products %}
    <div class="product">
        <h2>{{ product.name }}</h2>
        <p>価格: {{ product.price|number_format }}円</p>
        {% if product.is_sale %}
            <span class="sale">セール中！</span>
        {% endif %}
    </div>
{% endfor %}
```

## <twig migrate>エラーの原因と対処法

### エラーメッセージの意味

「`<twig migrate>`がないとenka的にだめだよ」というエラーは、通常以下の状況で発生します：

1. **移行設定ファイルの不足**
2. **enkaライブラリの未インストール**
3. **Twigバージョンの不整合**

### 解決方法

#### ステップ1: 必要なパッケージのインストール

```bash
# Composerでenka移行ツールをインストール
composer require enka/twig-migration-bundle --dev

# Twig本体の最新版をインストール
composer require twig/twig:^3.0
```

#### ステップ2: 移行設定ファイルの作成

```xml
<!-- twig-migrate.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<twig-migrate>
    <source>
        <directory>templates/old</directory>
        <pattern>*.html.php</pattern>
    </source>
    
    <target>
        <directory>templates/new</directory>
        <extension>.html.twig</extension>
    </target>
    
    <rules>
        <rule type="php-echo" convert="twig-output"/>
        <rule type="php-if" convert="twig-condition"/>
        <rule type="php-foreach" convert="twig-loop"/>
    </rules>
    
    <options>
        <auto-escape>true</auto-escape>
        <strict-variables>false</strict-variables>
    </options>
</twig-migrate>
```

#### ステップ3: 移行コマンドの実行

```bash
# enka移行ツールを実行
php vendor/bin/enka migrate:twig --config=twig-migrate.xml

# または、Symfonyコンソールを使用
php bin/console enka:migrate:twig
```

## Twig実装の基本

### 基本的なセットアップ

```php
// index.php
require_once 'vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// テンプレートディレクトリの設定
$loader = new FilesystemLoader('templates');

// Twig環境の初期化
$twig = new Environment($loader, [
    'cache' => 'cache/twig',  // キャッシュディレクトリ
    'debug' => true,           // デバッグモード
    'auto_reload' => true      // テンプレートの自動リロード
]);

// データの準備
$data = [
    'title' => '商品一覧',
    'products' => [
        ['name' => 'ノートPC', 'price' => 98000, 'is_sale' => true],
        ['name' => 'マウス', 'price' => 2980, 'is_sale' => false],
        ['name' => 'キーボード', 'price' => 12800, 'is_sale' => true]
    ],
    'user' => [
        'name' => '田中太郎',
        'is_premium' => true
    ]
];

// テンプレートのレンダリング
echo $twig->render('products.html.twig', $data);
```

### カスタムフィルターの作成

```php
// カスタムフィルターの定義
$filter = new \Twig\TwigFilter('price_format', function ($price) {
    return '¥' . number_format($price);
});

// Twigに登録
$twig->addFilter($filter);
```

```twig
{# テンプレートでの使用 #}
{{ product.price|price_format }}  {# 出力: ¥98,000 #}
```

## enka移行の実践

### 実践的な移行例

#### 1. プロジェクト構造の準備

```
project/
├── composer.json
├── twig-migrate.xml
├── src/
│   └── Migration/
│       └── TwigMigrator.php
├── templates/
│   ├── old/          # 移行元（古いテンプレート）
│   │   ├── header.php
│   │   ├── footer.php
│   │   └── products.php
│   └── new/          # 移行先（Twigテンプレート）
└── cache/
    └── twig/
```

#### 2. カスタム移行スクリプト

```php
// src/Migration/TwigMigrator.php
<?php

namespace App\Migration;

class TwigMigrator
{
    private $sourceDir;
    private $targetDir;
    private $rules = [];
    
    public function __construct($sourceDir, $targetDir)
    {
        $this->sourceDir = $sourceDir;
        $this->targetDir = $targetDir;
        $this->initializeRules();
    }
    
    private function initializeRules()
    {
        // PHP echo文をTwig出力に変換
        $this->rules[] = [
            'pattern' => '/<\?php\s+echo\s+(.+?);\s*\?>/',
            'replacement' => '{{ $1 }}'
        ];
        
        // htmlspecialcharsの変換
        $this->rules[] = [
            'pattern' => '/htmlspecialchars\((.+?)\)/',
            'replacement' => '$1'  // Twigは自動エスケープ
        ];
        
        // foreach文の変換
        $this->rules[] = [
            'pattern' => '/<\?php\s+foreach\s*\((.+?)\s+as\s+(.+?)\):\s*\?>/',
            'replacement' => '{% for $2 in $1 %}'
        ];
        
        // endforeachの変換
        $this->rules[] = [
            'pattern' => '/<\?php\s+endforeach;\s*\?>/',
            'replacement' => '{% endfor %}'
        ];
        
        // if文の変換
        $this->rules[] = [
            'pattern' => '/<\?php\s+if\s*\((.+?)\):\s*\?>/',
            'replacement' => '{% if $1 %}'
        ];
        
        // endifの変換
        $this->rules[] = [
            'pattern' => '/<\?php\s+endif;\s*\?>/',
            'replacement' => '{% endif %}'
        ];
    }
    
    public function migrate($filename)
    {
        $sourcePath = $this->sourceDir . '/' . $filename;
        $content = file_get_contents($sourcePath);
        
        // ルールを適用
        foreach ($this->rules as $rule) {
            $content = preg_replace(
                $rule['pattern'],
                $rule['replacement'],
                $content
            );
        }
        
        // 配列アクセスをオブジェクトアクセスに変換
        $content = preg_replace(
            '/\[\'(.+?)\'\]/',
            '.$1',
            $content
        );
        
        // ファイル拡張子を変更
        $newFilename = str_replace('.php', '.html.twig', $filename);
        $targetPath = $this->targetDir . '/' . $newFilename;
        
        // 変換結果を保存
        file_put_contents($targetPath, $content);
        
        return [
            'source' => $filename,
            'target' => $newFilename,
            'status' => 'success'
        ];
    }
    
    public function migrateAll()
    {
        $files = glob($this->sourceDir . '/*.php');
        $results = [];
        
        foreach ($files as $file) {
            $filename = basename($file);
            $results[] = $this->migrate($filename);
        }
        
        return $results;
    }
}

// 使用例
$migrator = new TwigMigrator('templates/old', 'templates/new');
$results = $migrator->migrateAll();

foreach ($results as $result) {
    echo sprintf(
        "✅ %s → %s: %s\n",
        $result['source'],
        $result['target'],
        $result['status']
    );
}
```

## トラブルシューティング

### よくある問題と解決策

#### 1. キャッシュ関連のエラー

**問題**: 「Unable to write in the cache directory」

**解決策**:
```bash
# キャッシュディレクトリの権限を設定
chmod -R 777 cache/twig

# または、キャッシュをクリア
rm -rf cache/twig/*
```

#### 2. 変数が未定義エラー

**問題**: 「Variable "xxx" does not exist」

**解決策**:
```twig
{# 変数の存在チェック #}
{% if product is defined %}
    {{ product.name }}
{% endif %}

{# デフォルト値の設定 #}
{{ product.name|default('商品名なし') }}
```

#### 3. フィルターが見つからない

**問題**: 「Unknown filter "xxx"」

**解決策**:
```php
// PHPでカスタムフィルターを登録
$twig->addFilter(new \Twig\TwigFilter('custom_filter', function($value) {
    return strtoupper($value);
}));
```

#### 4. テンプレートが見つからない

**問題**: 「Unable to find template "xxx.html.twig"」

**解決策**:
```php
// 複数のテンプレートディレクトリを設定
$loader = new FilesystemLoader([
    'templates',
    'templates/partials',
    'templates/layouts'
]);
```

## ベストプラクティス

### 1. ディレクトリ構造の整理

```
templates/
├── layouts/          # レイアウトテンプレート
│   └── base.html.twig
├── partials/         # 部分テンプレート
│   ├── header.html.twig
│   └── footer.html.twig
├── pages/           # ページテンプレート
│   ├── home.html.twig
│   └── products/
│       ├── list.html.twig
│       └── detail.html.twig
└── macros/          # マクロ定義
    └── forms.html.twig
```

### 2. マクロの活用

```twig
{# macros/forms.html.twig #}
{% macro input(name, value, type = "text") %}
    <input type="{{ type }}" name="{{ name }}" value="{{ value }}" class="form-control">
{% endmacro %}

{# 使用例 #}
{% import "macros/forms.html.twig" as forms %}
{{ forms.input('username', user.name) }}
```

### 3. 環境別設定

```php
// 開発環境
$twig = new Environment($loader, [
    'debug' => true,
    'cache' => false,
    'strict_variables' => true
]);

// 本番環境
$twig = new Environment($loader, [
    'debug' => false,
    'cache' => 'cache/twig',
    'strict_variables' => false,
    'optimizations' => -1  // すべての最適化を有効化
]);
```

### 4. セキュリティ対策

```twig
{# 自動エスケープ（デフォルト） #}
{{ user_input }}

{# 生のHTML出力（信頼できる場合のみ） #}
{{ trusted_html|raw }}

{# URLエンコード #}
<a href="?search={{ search_query|url_encode }}">検索</a>

{# JSONエンコード #}
<script>
    var data = {{ data|json_encode|raw }};
</script>
```

### 5. パフォーマンス最適化

```php
// テンプレートのプリコンパイル
$twig->setCache('cache/twig');
$twig->setAutoReload(false);  // 本番環境では無効化

// 使用するテンプレートを事前にロード
$twig->load('products/list.html.twig');
```

## Symfonyでの実装例

### Symfony環境での設定

```yaml
# config/packages/twig.yaml
twig:
    default_path: '%kernel.project_dir%/templates'
    debug: '%kernel.debug%'
    strict_variables: '%kernel.debug%'
    form_themes:
        - 'bootstrap_4_layout.html.twig'
    globals:
        app_name: 'My Application'
        app_version: '1.0.0'
```

### Controllerでの使用

```php
// src/Controller/ProductController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/products', name: 'product_list')]
    public function list(): Response
    {
        $products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->findAll();
        
        return $this->render('products/list.html.twig', [
            'products' => $products,
            'page_title' => '商品一覧'
        ]);
    }
}
```

## 移行チェックリスト

移行作業を行う際の確認事項：

- [ ] バックアップの作成
- [ ] Composerパッケージのインストール
- [ ] twig-migrate.xml設定ファイルの作成
- [ ] テンプレートディレクトリの準備
- [ ] キャッシュディレクトリの権限設定
- [ ] カスタムフィルター・関数の移行
- [ ] グローバル変数の設定
- [ ] テンプレート継承構造の確認
- [ ] 移行スクリプトの実行
- [ ] 移行結果のテスト
- [ ] パフォーマンステスト
- [ ] 本番環境へのデプロイ

## まとめ

Twigテンプレートエンジンとenka移行ツールについて、基礎から実践まで解説しました。

### 🎯 重要なポイント

1. **Twigの利点**
   - セキュリティ（自動エスケープ）
   - 可読性の高い構文
   - 強力なテンプレート継承

2. **enkaの役割**
   - 既存テンプレートの自動変換
   - バージョン間の移行支援
   - 構文の標準化

3. **移行時の注意点**
   - 必ずバックアップを取る
   - 段階的に移行する
   - テストを十分に行う

4. **ベストプラクティス**
   - ディレクトリ構造の整理
   - マクロの活用
   - 環境別設定の使い分け

`<twig migrate>`エラーが発生した場合は、まず設定ファイルの存在と、必要なパッケージのインストール状況を確認しましょう。適切な移行ツールを使用することで、効率的にTwigへの移行を完了できます。

## 参考リンク

- [Twig公式ドキュメント](https://twig.symfony.com/doc/3.x/)
- [Symfony Twigガイド](https://symfony.com/doc/current/templates.html)
- [Twig for Template Designers](https://twig.symfony.com/doc/3.x/templates.html)
- [Twig for Developers](https://twig.symfony.com/doc/3.x/api.html)
- [Composer公式サイト](https://getcomposer.org/)

---

*この記事は、PHPテンプレートエンジンの移行作業における実践的な知識と経験に基づいて作成されました。*