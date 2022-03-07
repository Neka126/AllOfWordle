d=new Date()
ld=new Date(d.getMonth()+1+"/"+(d.getDate()-1)+"/"+d.getFullYear())
tw.innerText=neka.Wordle.list[d.toDateString()]
yw.innerText=neka.Wordle.list[ld.toDateString()]
