---
layout: article
title: 山口大学 Ruby / Python 研究会
list_title: "全ブログ一覧"
---

山口大学のプログラミングサークル Ruby / Python 研究会のホームページです。ようこそ。

# 掲示板
[掲示板](bbs.html)

<div id="server_status">掲示板サーバー確認中...</div>

<script>
let servs = new XMLHttpRequest
servs.open("GET", "https://www.yamaguchi.tech/cgi-bin/status_poster.cgi")
servs.send()
servs.onload = function(e){
    if(e.target.response == "OK"){
        server_status.classList += "ok_server"
        server_status.innerText = "掲示板サーバー接続可能"
    }
}
</script>
<style>
#server_status {
    padding: 16px;
    background: #eee;
    text-align: center;
    border: solid 2px #E0E0E0;
    border-radius: 8px;
    font-weight: bold;
}
#server_status.ok_server{
    background: #43A047;
    border: solid 2px #388E3C;
    color: #E8F5E9;
}
</style>

# お知らせ

## 令和2年度新入部員募集案内
令和2年も新入部員を募集します。

【募集条件】
:   - 山口大学の学生(吉田以外の2年生以上は要相談)

- プログラムを書きたい人
- プログラミング言語に興味がある人
- ArduinoやRaspberry Piで電子工作をしたい人
- 自作PCに興味がある人

におすすめです。

プログラムでよく扱う言語は`Ruby`、`Python`、`C`、`JavaScript`です。

# 新型コロナウイルスについての注意喚起
新型コロナウイルスが日本に上陸しています。

日本での新型コロナウイルスの流行状況は[日本の新型コロナウイルス感染者](SARS-CoV-2.html)から見ることができます(古いブラウザは対応していません)。

感染しないように注意してください。

<!-- - [サークルに参加したい人へ](2019/11/17/173933.html) -->
<!-- - [ホームページの更新とリンク切れについて](2019/11/17/174443.html) -->

<!-- # Ruby の記事

## 第一回 Ruby 勉強会

- [変数とは](2019/11/17/145743.html)
- [代入と破壊](2019/11/17/154125.html)
- [4種類の変数](2019/11/17/160337.html)
- [クラス](2019/11/17/231521.html)
- [モジュール](2019/11/18/011623.html)

## 第二回 Ruby 勉強会

- [p, print, putsメソッド](2019/11/18/022057.html)
- [真偽値と論理演算子](2019/11/18/031545.html)
- [手続きオブジェクト](2019/11/23/040755.html)
- [super](2019/11/23/053516.html)

# 第三回 Ruby 勉強会

- [コマンドラインオプション](2019/11/23/204550.html) -->


<!--
# GO の記事

## 第一回 GO 勉強会

- [Hello, world](2019/11/23/075341.html)
- [パッケージ](2019/11/23/080310.html)
- [インポート](2019/11/23/083627.html)
- [関数](2019/11/23/090417.html)

-->

# 設定に関する記事

## Windows
- [WSLのインストール方法(Windows)](install_wsl/)

## Ubuntu 
- [Ruby のインストール方法(Ubuntu)](2019/11/18/085538.html)
- [aptを学内で利用する方法(プロキシ設定)](2019/11/17/181758.html)
- [gitを学内で利用する方法(プロキシ設定)](github_gakunai.html)
- [Visual Studio Codeを学内で利用する(プロキシ設定)](code_gakunai.html)

# 作ってみよう

## Web系(HTML, CSS, JavaScript, ...)
- [ウェブページを作ってみる (Ubuntu, Ruby, Jekyll)](create_webpage/)
- [WEBrick で簡単にウェブサーバーを作る (Ruby)](webrick.html)
- [JavaScript で文字列を書く (JavaScript)](jsmojiretsu.html)
- [ゆっくり繰り返す setInterval (JavaScript)](jssi.html)
- [昼と夜でスタイルを変える (CSS, JavaScript)](hiruyoru.html)
- [カレンダーを作る (JavaScript)](calendar.html)

## プログラム(Ruby, Python, C, ...)
- [Gem と Gemfile](gem.html)
- [平均・分散・標準偏差を求める (Ruby)](mean_var_sd.html)
- [ガチャで何回引けばレアが出るかのシミュレーションのプログラム (Ruby)](gacha.html)

# ツール
- [平均・分散・標準偏差を調べる](statistics/)

# お問い合わせ
お問い合わせは、Twitterの[ダイレクトメッセージ](https://twitter.com/__ruby_python__)または下のリンクよりお願いします。
このリンクは`heroku`の無料枠を利用しているので、アクセスに時間がかかります。
お急ぎの方はTwitterよりお願いします。

- [お問い合わせ](https://sekiei.herokuapp.com/ruby_python_programming_circle)

<script src="assets/js/title_anime.js"></script>