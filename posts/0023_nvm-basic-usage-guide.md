---
id: 23
title: "nvmの基本的な使い方とプロジェクトごとのNode.jsバージョン管理"
tags: ["Node.js", "nvm", "開発環境", "JavaScript", "環境構築"]
create: "2025-08-07 17:32"
---

Node.jsのバージョン管理で困ったことはありませんか？プロジェクトによって異なるNode.jsのバージョンが必要になることはよくあることです。今回は、Node.jsのバージョン管理ツール「nvm」の基本的な使い方と、プロジェクトごとに自動でバージョンを切り替える方法について解説します。

## はじめに：なぜnvmが必要なのか

Node.jsを使った開発では、以下のような問題に直面することがあります：

- プロジェクトAではNode.js v18が必要だが、プロジェクトBではv20が必要
- 最新バージョンでは動かないパッケージがある
- チームメンバー全員で同じNode.jsバージョンを使いたい

これらの問題を解決するのが**nvm（Node Version Manager）**です。

## nvmとは？

nvmは、複数のNode.jsバージョンを管理し、簡単に切り替えることができるツールです。macOSやLinuxで動作し、プロジェクトごとに異なるNode.jsバージョンを使い分けることができます。

### nvmの主な特徴

- **複数バージョンの管理**: 複数のNode.jsバージョンを同時にインストール可能
- **簡単な切り替え**: コマンド一つでバージョンを切り替え
- **プロジェクト単位の管理**: プロジェクトごとに異なるバージョンを指定可能

## nvmのインストール方法

### macOS/Linuxの場合

```bash
# インストールスクリプトを実行
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

インストール後、シェルの設定ファイル（`.zshrc`や`.bashrc`）に以下が自動追加されます：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

### インストールの確認

```bash
nvm --version
# 0.39.0のようなバージョン番号が表示されれば成功
```

## 基本的な使い方

### 1. 利用可能なNode.jsバージョンを確認

```bash
# インストール可能なバージョン一覧を表示
nvm ls-remote

# LTS（長期サポート）バージョンのみ表示
nvm ls-remote --lts
```

### 2. Node.jsのインストール

```bash
# 特定バージョンをインストール
nvm install 20.5.0

# 最新のLTSバージョンをインストール
nvm install --lts

# 最新版をインストール
nvm install node
```

### 3. インストール済みバージョンの確認

```bash
nvm ls
# または
nvm list
```

出力例：
```
->     v20.5.0
       v18.17.0
       v16.20.0
default -> 20.5.0 (-> v20.5.0)
```

矢印（`->`）が現在使用中のバージョンを示します。

### 4. バージョンの切り替え

```bash
# 特定バージョンに切り替え
nvm use 18.17.0

# デフォルトバージョンの設定
nvm alias default 20.5.0
```

### 5. 現在のバージョンを確認

```bash
node --version
# または
nvm current
```

## プロジェクトごとのバージョン管理

### .nvmrcファイルを使った管理

`.nvmrc`ファイルは**プロジェクトごとに作成する**のが一般的です。各プロジェクトのルートディレクトリに配置することで、そのプロジェクトで使用するNode.jsバージョンを指定できます。

#### .nvmrcの配置パターン

**1. プロジェクトごとに作成（最も一般的）**
```
~/projects/
  ├── project-a/
  │   ├── .nvmrc (18.17.0)
  │   ├── package.json
  │   └── src/
  ├── project-b/
  │   ├── .nvmrc (20.5.0)
  │   ├── package.json
  │   └── src/
  └── project-c/
      ├── .nvmrc (16.20.0)
      ├── package.json
      └── src/
```

**2. モノレポの場合**
```
my-monorepo/
├── .nvmrc (20.5.0)  # ルートに1つ
├── packages/
│   ├── frontend/
│   ├── backend/
│   └── shared/
└── package.json
```

**3. サブプロジェクトで異なるバージョンが必要な場合**
```
my-project/
├── .nvmrc (20.5.0)  # メインプロジェクト用
├── frontend/
│   └── .nvmrc (18.17.0)  # フロントエンド用
└── legacy-api/
    └── .nvmrc (14.21.0)  # レガシーAPI用
```

#### なぜプロジェクトごとに作成するのか

1. **依存関係の互換性**: プロジェクトのパッケージが特定のNode.jsバージョンでのみ動作する
2. **チーム開発の統一**: 全員が同じバージョンを使用することでバグを防ぐ
3. **CI/CDとの一致**: 本番環境と同じバージョンで開発
4. **レガシープロジェクト対応**: 古いプロジェクトは古いNode.jsバージョンが必要

#### .nvmrcファイルの作成

```bash
# プロジェクトディレクトリで実行
echo "20.5.0" > .nvmrc
```

#### .nvmrcを使ったバージョン切り替え

```bash
# .nvmrcに記載されたバージョンに切り替え
nvm use
```

`.nvmrc`ファイルがあれば、バージョン番号を指定する必要がなくなります。

### 実際のエラー例と解決方法

以下のようなエラーに遭遇することがあります：

```
SyntaxError: The requested module 'node:events' does not provide an export named 'addAbortListener'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:123:21)
Node.js v19.9.0
```

このエラーは、使用しているNode.jsバージョンが古いために発生します。解決方法：

```bash
# より新しいバージョンに切り替え
nvm use 20.5.0
```

## 自動バージョン切り替えの設定

毎回手動で`nvm use`を実行するのは面倒です。ディレクトリ移動時に自動でバージョンを切り替える設定を紹介します。

### Zshの場合（macOSデフォルト）

`.zshrc`に以下を追加：

```bash
# nvmの自動切り替え設定
autoload -U add-zsh-hook

load-nvmrc() {
  local nvmrc_path="$(nvm_find_nvmrc)"
  
  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(cat "$nvmrc_path")
    local current_node_version=$(nvm version)
    
    if [ "$nvmrc_node_version" != "$current_node_version" ]; then
      nvm use
    fi
  elif [ "$(nvm version)" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}

add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

### Bashの場合

`.bashrc`に以下を追加：

```bash
# nvmの自動切り替え設定
enter_directory() {
  if [[ $PWD == $PREV_PWD ]]; then
    return
  fi
  
  PREV_PWD=$PWD
  
  if [[ -f ".nvmrc" ]]; then
    nvm use
  fi
}

export PROMPT_COMMAND="enter_directory; $PROMPT_COMMAND"
```

設定を反映：

```bash
# Zshの場合
source ~/.zshrc

# Bashの場合
source ~/.bashrc
```

## 実務でよく使うnvmコマンド

### プロジェクト開始時のワークフロー

```bash
# 1. プロジェクトディレクトリに移動
cd my-project

# 2. 必要なNode.jsバージョンをインストール
nvm install 20.5.0

# 3. .nvmrcファイルを作成
echo "20.5.0" > .nvmrc

# 4. バージョンを切り替え
nvm use

# 5. package.jsonに記載
npm init -y
```

### チーム開発での使い方

1. **`.nvmrc`をGitで管理**
```bash
git add .nvmrc
git commit -m "Add .nvmrc for Node.js version management"
```

2. **READMEに手順を記載**
```markdown
## 開発環境のセットアップ

1. nvmをインストール
2. プロジェクトディレクトリで以下を実行：
   ```bash
   nvm install
   nvm use
   npm install
   ```
```

### トラブルシューティング

#### nvmコマンドが見つからない場合

```bash
# シェル設定を再読み込み
source ~/.zshrc  # または source ~/.bashrc
```

#### パーミッションエラーが出る場合

```bash
# nvmディレクトリの権限を修正
chmod -R 755 ~/.nvm
```

#### グローバルパッケージが見つからない場合

Node.jsバージョンごとにグローバルパッケージは分離されています：

```bash
# 現在のバージョンにインストール
npm install -g typescript

# 別バージョンに切り替えた場合は再インストールが必要
nvm use 18.17.0
npm install -g typescript
```

## PC全体のデフォルトバージョン設定

「PC全体に特定のNode.jsバージョンを適用したい」という質問をよく受けます。この場合、**`.nvmrc`をホームディレクトリに置くのではなく、`nvm alias default`を使います**。

### デフォルトバージョンの正しい設定方法

```bash
# PC全体のデフォルトバージョンを設定
nvm alias default 20.5.0

# 確認
nvm alias
# default -> 20.5.0 (-> v20.5.0)
```

これで新しいターミナルを開いたときに自動的にv20.5.0が使われます。

### ホームディレクトリの.nvmrcについて

```bash
# ホームディレクトリに.nvmrcを置いても
echo "20.5.0" > ~/.nvmrc

# 自動では適用されない（明示的にnvm useが必要）
cd ~
nvm use  # これで初めて適用される
```

**なぜホームディレクトリの.nvmrcは自動適用されないのか：**

1. **安全性のため**: すべてのディレクトリで同じバージョンが強制されると問題が起きる可能性がある
2. **プロジェクトの独立性**: 各プロジェクトの`.nvmrc`を優先すべき
3. **nvmの設計思想**: グローバル設定は`alias default`で管理する

### バージョンの優先順位

nvmは以下の優先順位でNode.jsバージョンを決定します：

1. 現在のディレクトリの`.nvmrc`
2. 親ディレクトリの`.nvmrc`（上位に向かって探索）
3. `nvm alias default`で設定したバージョン
4. システムのNode.js

### 実際の運用例

```bash
# PC全体のデフォルト設定
nvm alias default 20.5.0

# プロジェクトA（18が必要）
cd ~/projects/project-a
echo "18.17.0" > .nvmrc
nvm use  # 18.17.0に切り替わる

# プロジェクトB（デフォルトの20.5.0を使う）
cd ~/projects/project-b
# .nvmrcなし → デフォルトの20.5.0が使われる

# 新規ターミナルを開く
# → どこでも20.5.0から始まる
```

## ベストプラクティス

### 1. プロジェクトには必ず.nvmrcを作成

チーム全員が同じNode.jsバージョンを使えるようになります。

### 2. PC全体のデフォルトは安定版に設定

```bash
# LTSバージョンをインストール
nvm install --lts

# LTSをデフォルトに設定
nvm alias default lts/*
```

### 3. 定期的に不要なバージョンを削除

```bash
# 不要なバージョンを削除
nvm uninstall 16.20.0

# キャッシュをクリア
nvm cache clear
```

### 4. package.jsonにenginesフィールドを追加

```json
{
  "engines": {
    "node": ">=20.5.0",
    "npm": ">=9.8.0"
  }
}
```

これにより、npmが要求バージョンをチェックしてくれます。

### 5. チーム開発では.nvmrcをGitで管理

```bash
# .nvmrcをリポジトリに追加
git add .nvmrc
git commit -m "Add .nvmrc for Node.js v20.5.0"

# READMEに使用方法を記載
echo "## Setup
nvm install
nvm use" >> README.md
```

## まとめ

nvmを使うことで、Node.jsのバージョン管理が格段に楽になります。特に以下の点が重要です：

1. **プロジェクトごとのバージョン管理**: `.nvmrc`ファイルで簡単に管理
2. **自動切り替え設定**: シェル設定で自動化可能
3. **チーム開発での統一**: 全員が同じ環境で開発可能

最初は手動で`nvm use`を実行することから始めて、慣れてきたら自動切り替えの設定を追加していくのがおすすめです。これにより、「動かない！」というバージョン起因のトラブルを大幅に減らすことができます。

## 参考リンク

- [nvm公式リポジトリ](https://github.com/nvm-sh/nvm)
- [Node.js公式サイト](https://nodejs.org/)
- [Node.jsリリーススケジュール](https://nodejs.org/en/about/releases/)
- [npm公式ドキュメント - engines](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines)