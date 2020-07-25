---
title: winget を使ってアプリをインストール
layout: article
---

# winget とは
アプリケーションをインストールできるコマンド。

# アプリをインストール
## アプリを検索

例として slack のアプリをインストールする。

```sh
winget search slack
```

![](../img/winget_slack_install.png)

## アプリをインストール

```sh
winget install --id SlackTechnologies.Slack -e
```

![](../img/winget_slack_install2.png)

