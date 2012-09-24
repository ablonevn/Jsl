class Jsl.Matrix
  m:[]
  constructor:(@m=[])->
    @
  print:(data=@m)->
    for v in data
      console.log v    
  size:(data=@m)->
    col:data[0].length
    row:data.length
  rows:(i,data=@m)->
    data[i]
  cols:(i,data=@m)->
    rs=[]
    for row in data
      rs.push(row[i])
    rs
  multiplySum:(a,b)->
    sum=0
    for i in [0..a.length-1]
      sum+=a[i]*b[i]
    sum
  multiply:(a)->
    targetSize={
      row:@.size().row
      col:@.size(a).col
    }
    # console.log(targetSize)
    me=this
    rs=[]
    # debugger;
    for j in [0..targetSize.row-1]
      row=@rows(j)
      r=[]
      for k in [0..targetSize.col-1]
        col= @cols(k,a)
        sum=@multiplySum(row,col)
        r.push(sum)
      rs.push(r)
    # @print(rs)
    @
  # multiply instance  
  x:->
    @multiply.apply(@,arguments)
  invert:->
  # invert instance  
  inv:->
    @invert()
Jsl.matrix=
  create:(data)->
    new Jsl.matrix(data)
