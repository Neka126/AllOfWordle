d=new Date()
ld=new Date(d.getMonth()+1+"/"+(d.getDate()-1)+"/"+d.getFullYear())
list={
  '2022-03-07T14:58:15.592Z':"Today's Word"
}

tw=list[d.toDateString()]
yw=list[ld.toDateString()]
