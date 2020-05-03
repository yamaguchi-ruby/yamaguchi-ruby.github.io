---
layout: article
title: 数独計算
---

数独を解くプログラムです。

バックトラッキングのアルゴリズムを用いています。

<link rel="stylesheet" href="sudoku.css">

<table id="sudoku_table"></table>
<script src="create_table.js"></script>

<p>
    <div class="btn">
        <input type="button" id="run" value="計算">
        <input type="button" id="clear" value="消去">
    </div>
</p>

<script src="sudoku.js"></script>