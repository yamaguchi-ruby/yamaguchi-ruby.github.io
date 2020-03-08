---
title: WEBrick で簡単にウェブサーバーを作る
layout: article
---

# WEBrick とは
Ruby のWebサーバーライブラリー

# サーバーを立ち上げる

```sh
ruby -run -e httpd
```

`localhost:8080`にアクセスすると、カレントディレクトリーを見ることができる。

カレントディレクトリーに`index.html`を作るとページが閲覧できる。

## オプション

### ポート番号を指定する

ポート番号を`8000`のように指定したい場合は、次のようにする。

```sh
ruby -run -e httpd -- --port=8000
```

`localhost:8000`でアクセスできる。

ポート番号`80`の場合は一般ユーザーではアクセス権限がないので、スーパーユーザーで実行する。

```sh
sudo `which ruby` -run -e httpd -- --port=80
```

`localhost`でアクセスできる。

`ip a`(Linux)または`ipconfig`(Windows)でサーバーのIPアドレスを確認し、閲覧することができる。

閲覧できない場合はファイアーウォールの設定を確認する。