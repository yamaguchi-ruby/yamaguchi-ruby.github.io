function main_blog(){
    let req = new XMLHttpRequest
    let uri = "blog.data.json"
    req.open("GET", uri)
    req.send()
    req.onload = function(e){
        data = JSON.parse(req.response)
        for(let i = 0; i < data.length; i++){
            let element = document.createElement("li")
            element.innerHTML =  `\
            <a href="${data[i]["uri"]}">
                <div class="l_block">
                    <div class="lb_left">
                        <div class="lbl_title">${data[i]["title"]}</div>
                        <div class="lbl_desc">${data[i]["description"]}</div>
                    </div>
                    <div class="lb_image"></div>
                </div>
            </a>`
            document.getElementById("blog_list").append(element)
        }
    }
}

main_blog()