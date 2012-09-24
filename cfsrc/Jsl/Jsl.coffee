partial = (cls, prototypes) ->
  for name, callback of prototypes
    cls.prototype[name] = callback
  return cls

class CJsl
  xmlns: "http://www.w3.org/2000/svg"
  xlinkns : "http://www.w3.org/1999/xlink"
  __genid:0
  genId:->
    "jsl-"+(++@.__genid);
  create:(name)->
    me=this;
    document.createElementNS me.xmlns, name
  
  
  partial:partial
    
  random: (num)->
    Math.floor(Math.random() * num);
  apply:->
    i=0
    for val,key in arguments
      if i==0
        i=1
        des=val
        if des==undefined
          des={}
        continue
      
      
      for key1,val1 of val
        des[key1]=val1
    des
window.Jsl=new CJsl();    
class Jsl.CElement extends Object
  id:0
  elTagName:"g"
  doc:null
  renderTo:null
  constructor:(config)->
    me=this
    config=Jsl.apply(
      id:Jsl.genId()
    ,config) 
    @apply config
    
    me.doc=Jsl.create(me.elTagName)
    me.doc.setAttributeNS(null,"id",me.id)
    me.init()
  init:->
  draw:->
    me=this
    me.renderTo.appendChild me.doc  if me.renderTo
    
    # me;
  apply:()->
    me=this
    config=Jsl.apply.apply this,arguments
    # copy config to object
    for key,val of config
      me[key]=val
  attr:(obj)->
    me=this
    doc=me.doc
    if ( typeof (obj) == "string") 
      return doc.getAttributeNS(null, obj)
    for key,val of obj
      doc.setAttributeNS(null, key, val)
    me
  css : (obj)->
    me=this
    a = me.attr("style")
    
    # console.log(a);
    b = a.trim().split(";")
    c = b.pop().trim()
    b.push c  unless c is ""
    a = b.join(";") + ";"
    b = a.trim().split(";")
    
    # console.log(b);
    for i of obj
      f = false
      j = 0
      while j < b.length
        d = b[j].trim()
        
        # console.log(i);
        if d.match("(" + i + ")[^:]*.([^;]*)")?
          b[j] = (i + ":" + obj[i])
          f = true
          break
        
        j++
      b.push (i + ":" + obj[i])  unless f
    rs = []
    i = 0
    while i < b.length
      a = b[i].trim()
      rs.push a  unless a is ""
      i++
    a = rs.join(";")
    me.attr style: a
    
    # me.doc.setAttributeNS(null,"transform",me.id)
  # draw:->
    # me=this
    # if me.config.renderTo
      # me.config.renderTo.appendChild(me.doc)    


# console.log(Jsl.apply({x:9},{id:1},{c:4},{id:5}))
