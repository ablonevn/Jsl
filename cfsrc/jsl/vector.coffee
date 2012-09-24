class Jsl.Vector
  dx:0
  dy:0
  constructor:->
    me=this
    # console.log me
    # window.a=me
    Jsl.Vector.prototype.init.apply(me,arguments)
    # if (typeof dx isnt 'undefined')
      # Jsl.Vector.init.apply(this,arguments)
    # if arguments.length==2
      # me.dx=arguments[0]
      # me.dy=arguments[1]
    
    me
  setVector:(@dx,@dy)->
    @
  init:->
    me=this
    switch arguments.length
      when 2 
        me.dx=arguments[0]
        me.dy=arguments[1]
        break
      
      when 4
        xfrom=arguments[0]
        yfrom=arguments[1]
        xto=arguments[2]
        yto=arguments[3]
        me.setVector(xto-xfrom,yto-yfrom)
        break
    a
    

vector=
  create:->
    console.log(arguments)
    a=new Jsl.Vector()
    a.init.apply(a,arguments)
    a


Jsl.apply Jsl,
  vector:vector
