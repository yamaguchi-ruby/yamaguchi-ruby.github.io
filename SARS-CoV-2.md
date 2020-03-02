---
layout: article
title: 日本の新型コロナウイルス感染者
---

<p style="font-weight: 300; font-size:2.5em;">
<ruby>日本の<rt>Infected individuals</rt></ruby><ruby>新型コロナウイルス<rt> with Wuhan coronavirus (SARS-CoV-2)</rt></ruby><ruby>感染者<rt> in Japan</rt></ruby>
</p>

<div id="date"></div>

<div style="color: #e53935; font-size:2em;"><ruby>感染者数<rt>Number of people infected</rt></ruby> <span id="nin" style="font-size: 2em; font-weight: bold;"></span>人</div>

<div id="imgJapan"></div>

<div id="barChart"></div>

## 注意
- 厚生労働省の発表をもとに第三者がまとめた[データー](https://github.com/kaz-ogiwara/covid19/blob/master/csv/data.csv)を利用しています。
- 古いブラウザでは動作しないことを確認しています。(Firefox推奨)

<link rel="stylesheet" href="index.css">
<script src="https://himeyama.github.io/KeisanJS/era.js"></script>
<script src="https://himeyama.github.io/SARS-CoV-2/csv.js"></script>
<script src="https://himeyama.github.io/SARS-CoV-2/BarChart.js"></script>
<script src="https://himeyama.github.io/SARS-CoV-2/sars-cov-2.beta.js"></script>

<p><style>
td:nth-of-type(2) {
    width: 100%;
}
body #date {
 font-size:1.8em
}
body path {
 fill:#616161;
 stroke:#424242;
 transition:.3s
}
body #AREA {
 stroke:transparent;
 fill:transparent
}
body #imgJapan svg {
 max-width:100%;
 height:100%
}
body td {
 text-align:center;
 font-weight:bold;
 white-space:nowrap;
 font-weight:lighter
}
body td:nth-of-type(2) {
 width:100%
}
body .bar {
 color:#212121;
 font-weight:lighter
}
.article_title{
    display: none
}
body ruby{
    ruby-position: under;
}
body{
    background-color: #212121;
    color: #fafafa;
}
body article{
    background: #212121;
}
</style></p>