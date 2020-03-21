function header_anime(){
    let e = document.createElement("div")
    // document.getElementsByTagName("header")[0].append(e)

    document.getElementsByTagName("nav")[0].parentNode.insertBefore(e, document.getElementsByTagName("nav")[0]);

    e.id = "header_anime"
    // let str = "#include\u00a0<stdio.h>\n\nint\u00a0main(void){\n\u00a0\u00a0\u00a0\u00a0puts(\"Hello,\u00a0world!\");\n\u00a0\u00a0\u00a0\u00a0return\u00a00;\n}"
    let str = '\
class\u00a0Society\n\
\u00a0\u00a0\u00a0\u00a0attr_writer\u00a0:univ,\u00a0:name,\u00a0:since,\u00a0:description,\u00a0:msg\n\
\n\
\u00a0\u00a0\u00a0\u00a0def\u00a0inspect\n\
\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"所属大学:\u00a0#{@univ}\\n名前:\u00a0#{@name}\\n設立:\u00a0#{@since}年\\n説明:\u00a0#{@description}\\nひとこと:\u00a0#{@msg}"\n\
\u00a0\u00a0\u00a0\u00a0end\n\
end\n\
\n\
circle\u00a0=\u00a0Society.new\n\
circle.univ\u00a0=\u00a0"山口大学"\n\
circle.name\u00a0=\u00a0"プログラミングサークル\u00a0Ruby\u00a0/\u00a0Python\u00a0研究会"\n\
circle.since\u00a0=\u00a0"平成30"\n\
circle.description\u00a0=\u00a0"プログラミングをするサークルです"\n\
circle.msg\u00a0=\u00a0"部員募集中"\n\
\n\
p\u00a0circle\n\
'
    e.innerText = str
    e.style.height = `${e.offsetHeight}px`
    let ary = str.split("")
    e.innerText = ""

    let i = 0
    let for_ = setInterval(function(){
        if(i > ary.length - 2){
            clearInterval(for_)
        }
        e.innerText += ary[i]
        i++
    },30)


    // console.log(ary)
}

header_anime()