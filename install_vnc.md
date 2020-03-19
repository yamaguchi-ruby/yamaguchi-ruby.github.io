---
layout: article
title: VNC サーバーのインストール
---

# vnc サーバーインストール

```sh
#sudo apt install vnc4server -y
sudo apt install tigervnc-standalone-server tigervnc-xorg-extension tigervnc-viewer -y
```

# Ubuntu Desktop (X Window System のインストール)
```sh
sudo apt install ubuntu-desktop gnome-session ubuntu-gnome-desktop -y
```

# vnc サーバー起動

```sh
vncserver :1
# vncserver :1 -geometry 800x600 -depth 24
```

# vnc サーバー停止
```sh
vncserver -kill :1
```

# xstartup の編集
```sh
vi ~/.vnc/xstartup
```

```sh
exec /usr/bin/gnome-session &
```