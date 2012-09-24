class Jsl.Matrix
  m:[]
  constructor:(@m=[])->

  print:(data=@m)->
    for v in data
      console.log v    
    
  rows:(i,data=@m)->
    data[i]
  cols:(i,data=@m)->
    rs=[]
    for row in data
      rs.push(row[i])
    rs      
  multiply:(a)->
    me=this
    
    rs=[]
    # debugger;
    for j in [0..@m.length-1]
      row=@rows(j)
      
      r=[]
      
      for k in [0..row.length-1]
        col= @cols(k,a)
        sum=0
        for l in [0..row.length-1]
          sum+=row[l]*col[l]
        r.push(sum)
      rs.push(r)
    @print(rs)
    
  x:->
    @multiply.apply(@,arguments)
Jsl.matrix=
  create:(data)->
    new Jsl.matrix(data)
