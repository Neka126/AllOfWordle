d=new Date()
ld=new Date(d.getMonth()+1+"/"+(d.getDate()-1)+"/"+d.getFullYear())
td=new Date(d.getMonth()+1+"/"+(d.getDate()+1)+"/"+d.getFullYear())
tl=neka.Wordle.list[d.toDateString()]
ts=neka.Wordle.list[ld.toDateString()]
tts=neka.Wordle.list[td.toDateString()]
ttw.innerText=`<div class="RowL-letter letter-correct">${tts[0]}</div><div class="RowL-letter letter-correct">${tts[1]}</div><div class="RowL-letter letter-correct">${tts[2]}</div><div class="RowL-letter letter-correct">${tts[3]}</div><div class="RowL-letter letter-correct">${tts[4]}</div>`
tw.innerText=`<div class="RowL-letter letter-correct">${ts[0]}</div><div class="RowL-letter letter-correct">${ts[1]}</div><div class="RowL-letter letter-correct">${ts[2]}</div><div class="RowL-letter letter-correct">${ts[3]}</div><div class="RowL-letter letter-correct">${ts[4]}</div>`
yw.innerText=`<div class="RowL-letter letter-correct">${ys[0]}</div><div class="RowL-letter letter-correct">${ys[1]}</div><div class="RowL-letter letter-correct">${ys[2]}</div><div class="RowL-letter letter-correct">${ys[3]}</div><div class="RowL-letter letter-correct">${ys[4]}</div>`
