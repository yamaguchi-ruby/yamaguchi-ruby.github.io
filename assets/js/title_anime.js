let titleAnimeAry = [
    "ｙ",
    "や",
    "やｍ",
    "やま",
    "やまｇ",
    "やまぐ",
    "やまぐｔ",
    "やまぐち",
    "やまぐちｄ",
    "やまぐちだ",
    "やまぐちだい",
    "やまぐちだいｇ",
    "やまぐちだいが",
    "やまぐちだいがｋ",
    "やまぐちだいがく",
    "<span style='background-color: #2196F3; color: #fafafa'>山口大学</span>",
    "山口大学ｐ",
    "山口大学ぷ",
    "山口大学ぷｒ",
    "山口大学ぷろ",
    "山口大学ぷろｇ",
    "山口大学ぷろぐ",
    "山口大学ぷろぐｒ",
    "山口大学ぷろぐら",
    "山口大学ぷろぐらｍ",
    "山口大学ぷろぐらみ",
    "山口大学ぷろぐらみｎ",
    "山口大学ぷろぐらみんｇ",
    "山口大学ぷろぐらみんぐ",
    "山口大学<span style='background-color: #2196F3; color: #fafafa'>プログラミング</span>",
    "山口大学プログラミングｋ",
    "山口大学プログラミングけ",
    "山口大学プログラミングけｎ",
    "山口大学プログラミングけんｋ",
    "山口大学プログラミングけんｋｙ",
    "山口大学プログラミングけんきゅ",
    "山口大学プログラミングけんきゅう",
    "山口大学プログラミングけんきゅうｋ",
    "山口大学プログラミングけんきゅうか",
    "山口大学プログラミングけんきゅうかい",
    "山口大学プログラミング<span style='background-color: #2196F3; color: #fafafa'>研究会</span>",
    "山口大学プログラミング研究会",

    // "山口大学 ",
    // "山口大学 R",
    // "山口大学 Ru",
    // "山口大学 Rub",
    // "山口大学 Ruby",
    // "山口大学 Ruby ",
    // "山口大学 Ruby /",
    // "山口大学 Ruby / P",
    // "山口大学 Ruby / Py",
    // "山口大学 Ruby / Pyt",
    // "山口大学 Ruby / Pyth",
    // "山口大学 Ruby / Pytho",
    // "山口大学 Ruby / Python",
    // "山口大学 Ruby / Python ",
    // "山口大学 Ruby / Python ｋ",
    // "山口大学 Ruby / Python け",
    // "山口大学 Ruby / Python けｎ",
    // "山口大学 Ruby / Python けんｋ",
    // "山口大学 Ruby / Python けんｋｙ",
    // "山口大学 Ruby / Python けんきゅ",
    // "山口大学 Ruby / Python けんきゅう",
    // "山口大学 Ruby / Python けんきゅうｋ",
    // "山口大学 Ruby / Python けんきゅうか",
    // "山口大学 Ruby / Python けんきゅうかい",
    // "山口大学 Ruby / Python <span style='background-color: #2196F3; color: #fafafa'>研究会</span>",
    // "山口大学 Ruby / Python 研究会"
]

for(let i in titleAnimeAry){
    document.getElementsByClassName("article_title")[0].innerText = titleAnimeAry[i]
}

function titleAnimation(){
    let i = 0
    let titleAnim = setInterval(function(){
        if(i > titleAnimeAry.length - 2){
            clearInterval(titleAnim)
        }
        document.getElementsByClassName("article_title")[0].innerHTML = titleAnimeAry[i]
        i++
    },80)
}

titleAnimation()