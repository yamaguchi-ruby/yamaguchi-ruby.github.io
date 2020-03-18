---
title: ssh のインストールと設定
layout: article
---

# Ubuntu

```sh
sudo apt install -y openssh-server
```

# Ubuntu on Windows

## パスワード認証を有効にする
```sh
# 設定ファイルの編集
vi /etc/ssh/sshd_config
```

↓以下のように`PasswordAuthentication`を書き換える。

```sh
PasswordAuthentication yes
```

## 鍵を作る
```sh
sudo dpkg-reconfigure openssh-server
```

## 再起動
```sh
sudo service ssh restart
```

Windows の初期設定では接続できないので、ファイアーウォールの設定を行う。