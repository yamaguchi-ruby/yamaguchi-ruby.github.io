function sp(){
    if(typeof(navBtn) != "undefined"){
        navBtn.onclick = function(){
            spmenu()
        }
    }
}

function spmenu(){
    let e = document.createElement("div")
    e.id = "spmenu"
    document.getElementsByTagName("body")[0].append(e)
    e.innerHTML = '\
    <div id="spmenu1">\
        <ul>\
            <li><a href="/">ホーム</a></li>\
            <li><a href="#お知らせ" onclick="closespmenu()">お知らせ</a></li>\
            <li><a href="twitter://user?screen_name=__ruby_python__">Twitter</a></li>\
            <li><a href="https://github.com/yamaguchi-ruby">GitHub</a></li>\
            <li id="spmenuexit" onclick="closespmenu()"><a>閉じる</a></li>\
        </ul>\
    </div>\
    '
}

function closespmenu(){
    let e = document.getElementById("spmenu")
    e.parentNode.removeChild(e)
}

sp()