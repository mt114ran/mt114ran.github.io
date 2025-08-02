---
id: 4
title: "Git上級者向けTips集：効率的なバージョン管理"
tags: ["Git", "Version Control", "Tips"]
create: "2024-04-01 14:30"
---

# Git上級者向けTips集：効率的なバージョン管理

## クイズ：記事を読むとわかるようになること

1. Gitはバージョン管理システムですか？（Yes/No）
2. Gitでコミット履歴を編集できますか？（Yes/No）
3. 以下のうち、Gitでファイルの一部だけをコミットに含めるコマンドはどれですか？
   a) git add -p
   b) git add -a
   c) git add -f

日常の開発作業を効率化するGitの上級テクニックを紹介します。

## 1. インタラクティブリベース

コミット履歴を整理する強力な機能です。

```bash
# 直近3つのコミットを編集
git rebase -i HEAD~3

# コミットの順序変更、結合、編集が可能
pick abc1234 First commit
squash def5678 Second commit
reword ghi9012 Third commit
```

## 2. 部分的なステージング

```bash
# ファイルの一部のみをステージング
git add -p

# 各変更に対して以下のオプションを選択
# y - この変更をステージング
# n - この変更をスキップ
# s - 変更を分割
# e - 手動で編集
```

## 3. bisectによるバグの特定

```bash
# bisectの開始
git bisect start
git bisect bad  # 現在のコミットはバグあり
git bisect good abc1234  # このコミットは正常

# Gitが自動的に中間のコミットをチェックアウト
# テスト後、good/badを指定していく
git bisect good  # または git bisect bad

# バグを引き起こしたコミットが特定される
```

## 4. reflogで失われたコミットを復元

```bash
# 参照ログを確認
git reflog

# 失われたコミットを復元
git checkout HEAD@{2}
# または
git reset --hard HEAD@{2}
```

## 5. エイリアスの活用

`.gitconfig`に便利なエイリアスを設定：

```ini
[alias]
    st = status -s
    co = checkout
    br = branch
    cm = commit -m
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
    lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'
```

## 6. フックの活用

`.git/hooks/pre-commit`でコミット前の自動チェック：

```bash
#!/bin/sh
# TypeScriptの型チェック
npm run type-check
if [ $? -ne 0 ]; then
    echo "Type check failed. Please fix errors before committing."
    exit 1
fi

# Lintチェック
npm run lint
if [ $? -ne 0 ]; then
    echo "Lint check failed. Please fix errors before committing."
    exit 1
fi
```

## 7. ワークツリーの活用

複数のブランチを同時に作業：

```bash
# 新しいワークツリーを作成
git worktree add ../project-feature feature-branch

# ワークツリー一覧
git worktree list

# 不要になったワークツリーを削除
git worktree remove ../project-feature
```

## 8. 賢いマージ戦略

```bash
# ours戦略：現在のブランチを優先
git merge -s ours other-branch

# theirs戦略：マージするブランチを優先（特定ファイルのみ）
git checkout --theirs path/to/file
git add path/to/file

# no-ffオプション：必ずマージコミットを作成
git merge --no-ff feature-branch
```

これらのテクニックをマスターすることで、より効率的で柔軟なバージョン管理が可能になります。

## クイズ：ふりかえり

1. Yes（Gitはソースコードのバージョン管理を行うシステムです）
2. Yes（rebaseやamendなどでコミット履歴を編集できます）
3. a) git add -p（-pオプションでファイルの一部分だけを選択してステージングできます）