

class Jsl.MatrixData
  m:[]
class Jsl.MatrixOne extends Jsl.MatrixData
  constructor:(@m=[])->
  clone:->
    new Jsl.MatrixOne(@m.concat())
  scale:(factor=1)->
    ref=@m
    n=ref.length
    i=-1
    while ++i<n
      ref[i]*=factor
    @
  
  add:(mt)->
    ref=@m
    ref1=mt.m
    n=ref.length
    i=-1
    # rs=new Jsl.MatrixOne()
    while ++i<n
      ref[i]+=ref1[i]
    @
  dot:(mt)->
    ref=@m
    ref1=mt.m
    sum=0
    i=-1
    n=ref.length
    while ++i<n
      sum+=ref[i]*ref1[i]
    sum
  augment:(a)->
    @m=@m.concat(a)
class Jsl.Matrix extends Jsl.MatrixData
  
  constructor:(obj)->
    # console.log "xxx",@.constructor.name
    
    if arguments.length>0
      name=obj.constructor.name
      if name=="Array"
        @m=obj
      else
        if name==@.constructor.name
          @m=obj.clone().m
    @
  cell:(i,j,val)->
    @m[i][j]=val if typeof val isnt 'undefined'
    @m[i][j]
  clone:()->
    n=@m.length
    data=[]
    i=-1
    data.push(@m[i].concat()) while ++i<n
    new Jsl.Matrix(data)
  print:(data=@m)->
    for v in data
      console.log v    
  size:(data=@m)->
    # data=(if arguments.length==0 then @.m else adt)
    col:data[0].length
    row:data.length
  rows:(i,data=@m)->
    data[i]
  cols:(i,data=@m)->
    rs=[]
    for row in data
      rs.push(row[i])
    rs
  gaussianElimination:->
    sz=@size()
    i=-1;
    
    while ++i<sz.row
      row=@m[i]
      if row[l=j=i]==0
        continue while (++j < sz.row) and (found = @m[j][i] is 0)
          
        if found
          k=-1
          row[k]+=@m[j][k] while ++k<sz.col
        else
          throw "Cannot handle this "+i if row[i]==0
      while ++l<sz.row
        k=-1
        mul=-@m[l][i]/row[i]
        while ++k<sz.col
          @m[l][k]+=mul*row[k]
    @
            
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
  augment:(a)->
    i=-1
    n=@m.length
    while ++i<n
      @m[i]=@m[i].concat(a.m[i])
    @
  unitMatrix:(n)->
    data=[]
    cached=[]
    i=-1
    cached.push 0 while ++i < n
    i=-1
    while ++i < n
      data.push(cached.concat())
      data[i][i]=1
    rs=new Jsl.Matrix()
    rs.m=data
    
    rs
  invert:->
    nrow=@m.length
    des=@.clone().augment(@unitMatrix(nrow)).gaussianElimination()
    i=nrow
    while --i>=0
      
      tmp=new Jsl.MatrixOne()
      tmp.m=des.m[i]
      tmp.scale(1/des.m[i][i])
      j=i
      # debugger;
      
      while --j>=0
        
        tmp1=new Jsl.MatrixOne(tmp.clone().m)
        tmp1.scale(-des.m[j][i])
        tmp1.add.call({m:des.m[j]},tmp1)
        
        # Jsl.MatrixOne.prototype.sum()
        true
      des.m[i]=des.m[i].slice(nrow)
    # des.print()
    return des
    si=@size()
    pcol=0
    inv=[]
    
    
      
    i=-1
    while ++i < si.col
      inv.push(cached.concat())
      inv[i][i]=1
      
      
    # for i in [0..si.row-1]
      # if cached.length==0
        # for j in [0..si.col-1]
          # cached.push(0)
      # cached[i]=1  
      # inv.push(cached.concat())
      # cached[i]=0
    des=@cloneData @.m
    
    # debugger;
    startCol=-1
    # x=0
    his=[]
    # des=num*mul+des then store to des
    # mulAdd=function(mul,des,num) {
      # i=-1;
      # n=des.length
      # while ++i<n
        # des[i]=num*mul[i]+des[i]
    # }
    
    while ++startCol<si.row
      i=startCol
      row=des[i]
      # found=false
      # # # debugger;
      # while ++i<si.row
        # row=des[i]
        # if row[startCol]!=0 && his.indexOf(i)==-1
          # his.push i
          # found=true
          # break
      # if found  
      j=-1
      while ++j<si.row
        
        continue if i is j
        throw new Exception("Error: row(",i,i,") equal zero.") if row[i] is 0
        orow=des[j]
        # if (orow[startCol]!=0)
        mul=-orow[startCol]/row[i]
        sval=row[startCol]
        for k in [0..(si.col-1)]
          # val=
          orow[k]=row[k]*mul+orow[k]
          row[k]=row[k]/sval
          inv[j][k]=inv[i][k]*mul+inv[j][k]
          inv[i][k]=inv[i][k]/sval
          # j++
      # else
        # throw new Exception("Cannot invert this matrix")   
      
      # startCol++
      # true
    
    # des.print()  
    new Jsl.Matrix(inv)
  # invert instance  
  inv:->
    @invert()
Jsl.matrix=
  create:(data)->
    new Jsl.matrix(data)
  unitMatrix:(n)->
    Jsl.Matrix.prototype.unitMatrix.call(null,n)
  benchMark:(cb)->
    x=new Date()
    for i in [0..100]
      cb()
    y=new Date()
    y-x
  


dhaft=->
  pathData="M 0,0 365,-124 469,-48 531,-4 458,78 404,142 448,187 486,227 547,233 608,239"
  pl=pathData.replace(/[MQS]\s/g,"").split(" ")
  po=[]
  for val in pl
    r=val.split(",")
    [r[0],r[1]]=[parseFloat(r[0]),parseFloat(r[1])]
    po.push(r)
  Jsl.Matrix.prototype.print.call({m:po})
  
  # scale point to 10 time with matrix
  # [  1/2  0  ]
  # [  0   1/2 ]
  # console.log(po)
  true
dhaft()  