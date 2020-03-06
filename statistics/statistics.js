class Statistics extends Array{
    sum(){
        let s = 0
        for(let i in this)
            s += this[i]
        return s
    }

    mean(){
        return 1.0 * this.sum() / this.length
    }

    var(){
        let mean = this.mean()
        let sary = new Statistics
        for(let i in this){
            sary[i] = (this[i] - mean) ** 2
        }
        return sary.mean()
    }

    sd(){
        return Math.sqrt(this.var())
    }

    static opchk(){
        opchk.remove()
    }
}
Statistics.opchk()


dropbox.addEventListener("dragenter", dragenter, false)
dropbox.addEventListener("dragover", dragover, false)
dropbox.addEventListener("drop", drop, false)
function dragenter(e) {
    e.stopPropagation()
    e.preventDefault()
}
  
function dragover(e) {
    e.stopPropagation()
    e.preventDefault()
}
function drop(e) {
    e.stopPropagation()
    e.preventDefault()
    let dt = e.dataTransfer
    let files = dt.files
    handleFiles(files)
}

function handleFiles(files){
    let reader = new FileReader
    reader.readAsText(files[0])
    reader.onload = function(){
        let ary = reader.result.split(/\n/).map(function(e){ return parseFloat(e)}).filter(Boolean)
        let sary = Statistics.of(...ary)
        let str = `<dl><dt>ファイル名</dt><dd>${files[0].name}</dd></dl>
        <table>\
        <tr><th>平均</th><th>分散</th><th>標準偏差</th></tr>\
        <tr><td>${sary.mean()}</td><td>${sary.var()}</td><td>${sary.sd()}</td></tr>\
        </table>`

        // str += "<table>"
        // for(let i in ary){
        //     str += `<tr><td>${ary[i]}</td></tr>`
        // }
        // str += "</table>"
        t.innerHTML = str
    }
}