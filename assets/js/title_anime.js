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
    "山口大学 ",
    "山口大学 R",
    "山口大学 Ru",
    "山口大学 Rub",
    "山口大学 Ruby",
    "山口大学 Ruby ",
    "山口大学 Ruby /",
    "山口大学 Ruby / P",
    "山口大学 Ruby / Py",
    "山口大学 Ruby / Pyt",
    "山口大学 Ruby / Pyth",
    "山口大学 Ruby / Pytho",
    "山口大学 Ruby / Python",
    "山口大学 Ruby / Python ",
    "山口大学 Ruby / Python ｋ",
    "山口大学 Ruby / Python け",
    "山口大学 Ruby / Python けｎ",
    "山口大学 Ruby / Python けんｋ",
    "山口大学 Ruby / Python けんｋｙ",
    "山口大学 Ruby / Python けんきゅ",
    "山口大学 Ruby / Python けんきゅう",
    "山口大学 Ruby / Python けんきゅうｋ",
    "山口大学 Ruby / Python けんきゅうか",
    "山口大学 Ruby / Python けんきゅうかい",
    "山口大学 Ruby / Python <span style='background-color: #2196F3; color: #fafafa'>研究会</span>",
    "山口大学 Ruby / Python 研究会"
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