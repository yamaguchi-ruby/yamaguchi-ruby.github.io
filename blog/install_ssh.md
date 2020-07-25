---
title: ssh のインストールと設定
layout: article
---

- [Ubuntu](#ubuntu)
- [WSL](#wsl-ubuntu)

# Ubuntu

```sh
sudo apt install -y openssh-server
```

Ubuntu の人はここまで。

# WSL (Ubuntu)

## パスワード認証を有効にする
```sh
# 設定ファイルの編集
sudo vi /etc/ssh/sshd_config
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

Windows の初期設定では接続できないので、ファイアーウォールの設定(受信, TCP, 22)を行う。