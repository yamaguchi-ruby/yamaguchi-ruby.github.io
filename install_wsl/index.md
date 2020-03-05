---
layout: article
title: WSLのインストール方法(Windows)
---

# WSLを有効にする

Windowsキー＋Rもしくはスタートボタン右クリックで
「ファイル名を指定して実行」を開く。

次に、`control`と入力し「OK」をクリックする。

![](1.png)

「プログラム」をクリックする。

![](2.png)

「Windows の機能の有効化または無効化」をクリックする。

![](3.png)

「Linux 用 Windows サブシステム」にチェックを入れ、
「OK」をクリックして再起動する。

![](4.png)

スタートメニューから「Microsoft Store」を開き、
「Ubuntu」をインストールする。

![](5.png)

Ubuntuがインストールされた後、スタートメニューからUbuntuを起動する。

起動時にユーザー名とパスワードを訊かれるので、
ユーザー名とパスワードを登録する。(パスワードは確認のため2回訊かれる)

![](6.png)

パッケージのアップデートとアップグレードを行う。

```sh
sudo apt update
sudo apt upgrade
```