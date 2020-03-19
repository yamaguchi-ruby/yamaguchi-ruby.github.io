---
layout: article
title: ホーム
list_title: "全ブログ一覧"
---

<style>
body header nav ul li:nth-child(1) a{
    border-bottom: 2px solid #2196F3;
}
</style>

山口大学のプログラミング研究会💻のホームページです。ようこそ。

# 掲示板

<div id="server_status">掲示板サーバー確認中...</div>

<strong>
    <a href="bbs.html" id="bbs_link">
        掲示板
    </a>
</strong>

<script>
let servs = new XMLHttpRequest
servs.open("GET", "https://www.yamaguchi.tech/cgi-bin/status_poster.cgi")
servs.send()
servs.onload = function(e){
    if(e.target.response == "OK"){
        server_status.classList += "ok_server"
        server_status.innerText = "掲示板サーバー接続可能"
        bbs_link.style.visibility = "unset"
    }
}
</script>
<style>
#bbs_link{
    visibility: hidden;
}
#server_status {
    padding: 16px;
    background: #eee;
    text-align: center;
    border: solid 2px #E0E0E0;
    border-radius: 8px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 16px;
}
#server_status.ok_server{
    background: #43A047;
    border: solid 2px #388E3C;
    color: #E8F5E9;
}
</style>

# お知らせ

- [部員募集と入会方法 🆕](join.html)

# 新型コロナウイルスについての注意喚起
新型コロナウイルスが日本に上陸しています。

日本🇯🇵での新型コロナウイルスの流行状況は[日本の新型コロナウイルス感染者](SARS-CoV-2.html)から見ることができます(古いブラウザは対応していません)。

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

# 環境構築

## Windows
- [WSL のインストール方法 (Windows)](install_wsl/)
- [WSL2 のはじめかた (Windows)](install_wsl/wsl2.html)

## Linux 🐧
- [Ruby のインストール方法 (Ubuntu)](2019/11/18/085538.html)
- [SSH のインストール・設定方法 (Linux, WSL)](install_ssh.html)
- [apt を学内で利用する方法 (プロキシ設定)](2019/11/17/181758.html)
- [git を学内で利用する方法 (プロキシ設定)](github_gakunai.html)
- [Visual Studio Codeを学内で利用する (プロキシ設定)](code_gakunai.html)

# 作ってみよう

## Web系🌐 (HTML, CSS, JavaScript, ...)
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
お問い合わせは、Twitterの[ダイレクトメッセージ📩](https://twitter.com/__ruby_python__)または下のリンクよりお願いします。
このリンクは`heroku`の無料枠を利用しているので、アクセスに時間がかかります。
お急ぎの方はTwitterよりお願いします。

- [お問い合わせ](https://sekiei.herokuapp.com/ruby_python_programming_circle)

<script src="assets/js/title_anime.js"></script>