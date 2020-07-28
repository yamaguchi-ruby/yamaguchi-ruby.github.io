---
layout: article
title: 山口県の新型コロナウイルス情報
---

<style>
body header nav ul li:nth-child(7) a{
    border-bottom: 2px solid #f44336;
}
</style>

<div id="sum"></div>
<div id="map"></div>

<details>
    <summary>詳細</summary>
    <div id="list"></div>
</details>

<script>covtablef = true</script>
<script src="https://yamaguchi-ruby.github.io/sars2-yamaguchi/table.js"></script>
<script src="https://yamaguchi-ruby.github.io/sars2-yamaguchi/active.covid19.js"></script>
<link rel="stylesheet" href="/sars2-yamaguchi/table.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500&display=swap" rel="stylesheet"> 

<style>
#sum span {
    color: var(--theme_color);
    font-size: 40px;
    font-weight: bolder;
}
#sum span.number{
    font-size: 64px;
    -webkit-text-stroke: 2px var(--theme_color2);
}
#city_info{
    background-color: #212121cc;
    position: fixed;
    border-radius: 8px;
    color: #fafafa;
    padding: 8px;
}
body article table {
    table-layout: fixed;
    word-break: break-all;
    word-wrap: break-word;
}
#list{
    font-size: 12px;
    text-align: center;
}
#list ul{
    padding: 0;
}
</style>

<!-- ## 関連 -->
<!-- - [新型コロナウイルスの全国ヒートマップ](/sars2heat) -->

## 参考
- [新型コロナウイルス感染症の山口県内での発生について](https://www.pref.yamaguchi.lg.jp/cms/a10000/korona2020/202004240002.html)
- [山口県内の最新感染動向](https://yamaguchi.stopcovid19.jp/)