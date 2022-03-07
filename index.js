d=new Date()
ld=new Date(d.getMonth()+1+"/"+(d.getDate()-1)+"/"+d.getFullYear())
tw.innerText=list[d.toDateString()]
yw.innerText=list[ld.toDateString()]
