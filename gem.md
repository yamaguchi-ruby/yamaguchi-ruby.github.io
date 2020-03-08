---
title: Gem と Gemfile
layout: article
---

# Gem とは
Rubyのライブラリー作成・公開やインストールする仕組み。

# Gemfile とは
gem のインストールリスト。バージョンを指定することができる。

```sh
bundle init
```

とすると、 Gemfile の雛形が作成される。

# bundler とは
Gemfile を読み込み、 Gem をインストールするツール。

```sh
bundle
```

で Gem をインストールすることができる。