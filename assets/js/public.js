function menu(){
    let e = document.createElement("style")
    let m = location.pathname.match(/^\/(.*?)\//)
    if(m){
        let type = m[1]
        let nth
        if(type == "blog")
            nth = 3
        else if(type == "news")
            nth = 2
        
        e.innerHTML = `\
        body header nav ul li:nth-child(${nth}) a{
            border-bottom: 2px solid var(--dark);
        }`
        document.head.append(e)
        
    }else{
        m = location.pathname.match(/^\/(.*?)$/)
        if(m){
            let type = m[1]
            let nth
            if(type == "sars2")
                nth = 6
            e.innerHTML = `\
            body header nav ul li:nth-child(${nth}) a{
                border-bottom: 2px solid var(--dark);
            }`
            document.head.append(e)
        }
    }
}

menu()