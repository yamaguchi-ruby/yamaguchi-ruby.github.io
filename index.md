---
layout: article
title: ホーム
---

<link rel="stylesheet" href="assets/css/header_anime.css">
<script src="assets/js/header_anime.js"></script>

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
- [山口県の新型コロナウイルス(SARS-CoV-2)感染状況](sars2-yamaguchi/)

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