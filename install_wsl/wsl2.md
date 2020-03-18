---
layout: article
title: WSL2 のはじめかた
---

# 条件
- WSL で Ubuntu などのディストリビューションをインストール済みであること
- Windows 10 build 18917 以上であること

Windows 10 のビルド番号は「設定」→「システム」→「バージョン情報」→「OS ビルド」から見ることができる。

ビルド番号が小さいときは Insider Preview をスローに設定してアップグレードを行う。

# WSL2 Linux カーネルの更新を行う
[WSL 2 Linux カーネルの更新](https://docs.microsoft.com/ja-jp/windows/wsl/wsl2-kernel)

# コンポーネントを有効にする

管理者権限で以下のコマンドを実行する。

```sh
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

コマンドを実行したら**再起動**する。

# WSL のイメージを WSL2 のイメージに変換する

```sh
wsl --set-default-version 2
```

# 参考
- [http://aka.ms/wsl2kernel](//aka.ms/wsl2kernel)
- [http://aka.ms/wsl2](//aka.ms/wsl2)