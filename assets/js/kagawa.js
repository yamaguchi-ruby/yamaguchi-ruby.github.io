function kagawa(){
    let kagawa = new XMLHttpRequest
    kagawa.open("GET", "https://www.yamaguchi.tech/cgi-bin/pref.cgi")
    kagawa.responseType = "application/json"
    kagawa.send()
    kagawa.onload = function(){
        let pref = JSON.parse(kagawa.response).pref
        // console.log(pref)
        if(pref == "香川県"){
            let kagawa_warn = document.createElement('div')
            kagawa_warn.id = "kagawa_warn"
            document.getElementsByTagName("header")[0].parentNode.insertBefore(kagawa_warn, document.getElementsByTagName("header")[0].nextSibling)
            kagawa_warn.innerHTML = "\
                <h1>注意事項</h1>\
                <p>ご使用の端末は香川県からアクセスされています。</p>\
                <p>香川県のネット・ゲーム依存症対策条例により、香川県でホームページを閲覧している場合は<strong>1時間以内</strong>に退出してください。</p>\
            "
        }
    }
}
kagawa()