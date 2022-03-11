d=new Date()
ld=new Date(d.getMonth()+1+"/"+(d.getDate()-1)+"/"+d.getFullYear())
td=new Date(d.getMonth()+1+"/"+(d.getDate()+1)+"/"+d.getFullYear())
ys=neka.Wordle.list[ld.toDateString()]
ts=neka.Wordle.list[d.toDateString()]
tts=neka.Wordle.list[td.toDateString()]
ttw.innerText=tts//`<span class="RowL-letter letter-correct">${tts[0]}</span><span class="RowL-letter letter-correct">${tts[1]}</span><span class="RowL-letter letter-correct">${tts[2]}</span><span class="RowL-letter letter-correct">${tts[3]}</span><span class="RowL-letter letter-correct">${tts[4]}</span>`
tw.innerText=ts//`<span class="RowL-letter letter-correct">${ts[0]}</span><span class="RowL-letter letter-correct">${ts[1]}</span><span class="RowL-letter letter-correct">${ts[2]}</span><span class="RowL-letter letter-correct">${ts[3]}</span><span class="RowL-letter letter-correct">${ts[4]}</span>`
yw.innerText=ys//`<span class="RowL-letter letter-correct">${ys[0]}</span><span class="RowL-letter letter-correct">${ys[1]}</span><span class="RowL-letter letter-correct">${ys[2]}</span><span class="RowL-letter letter-correct">${ys[3]}</span><span class="RowL-letter letter-correct">${ys[4]}</span>`
