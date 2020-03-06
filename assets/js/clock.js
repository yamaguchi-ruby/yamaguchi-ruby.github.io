function clock(id){
    setInterval(function(){
        let t = new Date
        id.innerText = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
    }, 1000)
}

clock()