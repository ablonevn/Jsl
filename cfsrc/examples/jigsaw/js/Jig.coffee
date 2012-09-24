window.Jig={}



v="411.05384,402.41022 432.80084,398.28322 438.57984,400.57222 444.6268,402.96735 439.95184,409.69822 436.1381,415.18913 446.61884,416.66822 453.63848,417.65886 456.26938,416.4296 463.84353,412.89065 459.95984,408.15822 455.82332,403.11771 470.57484,400.74022 478.80222,399.41422 489.34384,399.41422"
window.svg=document.documentElement

window.m=$M [
  [ 1*4, 0, 411.05384]
  [ 0, 1*4, 402.41022]
  [ 0, 0, 1]
]
window.x=$M [
  [0, 0, 2.177742+0.6457288]
  [0, 0, 0.44872+5.005229]
  [0,0,1]
]
mirror=$M [
  [1, 0,  0]
  [0, -1, 0]
  [0, 0,  1]
]
window.ap=(data)->
  s=""
  for i in data
    console.log i
# data=[]
# i=1
# for k in v.split(" ")
  # l=k.split(",")
  # vx=parseFloat(l[0])
  # vy=parseFloat(l[1])
  # data.push([vx,vy])    
# av=0
# ms=(x,y)->
  # " "+(x)+","+(y)+" "
# orgx=data[0][0]
# orgy=data[0][1]    
# svdt=[]
# ts=(j)->
#   
  # vx=data[i][0]+orgx
  # vy=data[i][1]+orgy
  # console.log(orgx,orgy,vx,vy)
  # svdt.push([vx,vy])
  # rs=ms(vx,vy)
  # if j
    # av=i
    # orgx+=data[i][0]
    # orgy+=data[i][1]    
  # i++
  # rs
# 
# sss="M "+ms(data[0][0],data[0][1])+" L "+ts()+ts()+ts(1)+
  # ts()+ts()+ts(1)+
  # ts()+ts()+ts(1)+
  # ts()+ts()+ts(1)+
  # ts()+ts()+ts(1)+
  # ts()+ts()+ts(1)+
  # ts()+ts()+ts(1)+
  # ts()+ts()+ts(1)
# ap(svdt)  
# window.fp3=(s)->
  # ar=s.replace(/[mc]\s/g,"").split(" ")
  # j=0
  # ox=0
  # oy=0
  # s="M "
  # for i in ar
#     
    # m=i.split(",")
    # # console.log(m)
    # x=parseFloat(m[0])
    # y=parseFloat(m[1])
    # if (j==0)
      # j=1
      # ox=x
      # oy=y
      # s+=ms(x,y) + " L "
    # else
      # s=s+ms(ox+x,oy+y)
      # # console.log(ox+x,oy+y)
  # console.log(s)
# sss="M 0,0 Q 5,1 7,0 8.3858252,-0.317815 7.2178,-2.138305 6.39506,-3.4217118 8.298877,-4.1328945 8.8727531,-4.3472695 9.9998773,-4.3472695"
# sss="M 0,0 Q 5.163734,1.063978 6.875117,0.330052 8.3858252,-0.317815 7.2178,-2.138305 6.39506,-3.4217118 8.298877,-4.1328945 8.8727531,-4.3472695 9.9998773,-4.3472695"
# return
# x.elements[0][2]

rst=[]
window.els=[]
i=0
j=-1
console.log(v)
# return
for k in v.split(" ")
  l=k.split(",")
  vx=parseFloat(l[0])
  vy=parseFloat(l[1])
  
  
  x.elements[0][2]=vx
  x.elements[1][2]=vy
  
  y=m.inv().multiply(x).multiply(mirror)
  if i==0
    # j=0
    rst.push("m ")
  if i==1
    rst.push(" Q ")  
  i++
  j++
  
  els.push([y.elements[0][2],y.elements[1][2]])
  rst.push(y.elements[0][2]+","+y.elements[1][2])
console.log(rst.join(" "))  
class Jig.Path extends Jsl.CElement
  elTagName:"g"
  vertex:"0.6457288,5.005229 2.177742,0.44872 5.25611,1.0243625 6.875117,0.3300525 1.32178,-0.5669175 1.048283,-1.368605 0.342683,-2.4683577 -0.82274,-1.283407 0.3929,-1.72543 1.081077,-1.99459 0.320928,-0.124762 1.0088632,-0.2143751 1.7010002,-0.2143751 0.692138,0 1.380073,0.08961 1.701,0.2143751 0.688178,0.26916 1.903818,0.711183 1.081078,1.99459 -0.7056,1.0997526 -0.979098,1.9014401 0.342682,2.4683577 1.619008,0.6943099 4.697375,0.118665 6.875118,-0.3300525"
  draw:->
    
    super()
    me=this
    a=Jsl.create("path");
    me.attr.call {doc:a},
      d:"m 0,0 l 10,10"
      stroke:"red"
    me.doc.appendChild(a)
    
    a=Jsl.create("path");
    me.attr.call {doc:a},
      d:"m 0.6457288,5.005229 c 2.177742,0.44872 5.25611,1.0243625 6.875117,0.3300525 1.32178,-0.5669175 1.048283,-1.368605 0.342683,-2.4683577 -0.82274,-1.283407 0.3929,-1.72543 1.081077,-1.99459 0.320928,-0.124762 1.0088632,-0.2143751 1.7010002,-0.2143751 0.692138,0 1.380073,0.08961 1.701,0.2143751 0.688178,0.26916 1.903818,0.711183 1.081078,1.99459 -0.7056,1.0997526 -0.979098,1.9014401 0.342682,2.4683577 1.619008,0.6943099 4.697375,0.118665 6.875118,-0.3300525"
      stroke:"green"
      fill:'none'
      'stroke-width':'0.1px'
      style:'marker: url(#mCircle)'
    me.doc.appendChild(a)
    
    a=Jsl.create("path");
    me.attr.call {doc:a},
      d:rst.join(" ")
      stroke:"blue"
      fill:'none'
      'stroke-width':'0.1px'
      transform:"translate(0.6457288,5.005229)"
    me.doc.appendChild(a)
    
     
    # console.log(a)


m.inv().multiply(x).inspect()
a=new Jig.Path 
  renderTo:document.documentElement

a.draw()
return
class Jsl.CRect extends Jsl.CElement
  elTagName:"rect"
  x:0
  y:0
  width:0
  height:0
    
  # constructor:(config={})->
    # super(config)
    # me=this
    # me.apply config
    
    # super(config)
  draw:->
    super()
    me=this
    me.attr
      x:me.x
      y:me.y
      width:me.width
      height:me.height
    
    
class Jsl.CContainer extends Jsl.CElement
  x:0
  y:0
  width:0
  height:0
  items:[]
  # constructor:(config={})->
# #   
    # super(config)
    # me=this;  
    # me.apply config
    
    # super(config)
    
    # me.applyItems();
  draw:->
    # for val in me.items
      # if !val.renderTo
        # val.renderTo=me.doc
    super()
    me=this;
    for val in me.items
      val.renderTo = me.doc unless val.renderTo
      val.draw()
    true
      # continue  if val.renderTo
      # me.doc.appendChild(val.doc)
    
    

class Jig.CWaitBoard extends Jsl.CContainer
  x:0
  y:0
  width:0
  height:0
  constructor:(config)->
    
    # debugger;
    # a=supper
    # Jsl.CContainer.apply arguments
    # super(arguments)
    # super.apply me,arguments
    # me=this
    
    #if config already have items ?
    # config=Jsl.apply config,
    super(config)
    @apply 
      items: [new Jsl.CRect()]
    # //setup renderto
    
    
    # super()
    # preview commmand store info into this object
    # me.apply 
      # items: [new Jsl.CRect()]
    
    # super()
  draw:->
    
    super()
    me=this
    
    me.items[0].attr
      x: me.x
      y: me.y
      width: me.width
      height: me.height
      style:"fill:blue"
    
    
    # Jsl.create("rect").attr {
      # x:0
      # y:0
      # width:me.width
      # height:me.height
    # }

class Jig.CMainBoard extends Jsl.CContainer
  constructor:(config)->
    super(config)
    me=this
    @apply 
      items: [new Jsl.CRect(width:me.width,height:me.height)]
  draw:->
    super()
    me=this
    me.items[0].attr
      x: me.x
      y: me.y
      width: me.width
      height: me.height
      style:"fill:gray"

class Jig.CMenuBoard extends Jsl.CContainer
  constructor:(config)->
    super(config)
    me=this
    @apply 
      items: [new Jsl.CRect(width:me.width,height:me.height)]

  draw:->
    
    super()
    me=this
    
    me.items[0].attr
      x: me.x
      y: me.y
      width: me.width
      height: me.height
      style:"fill:green"
class Jig.CGame extends Jsl.CContainer
  
  board:
    wait:null
    main:null
    menu:null
  
  gameSize:7
  gStartupInfo:
    boardItemWidth:20
    waitWidth:100
    
    menuWidth:60
    boardWidth:-1
  # init:->
    # super()
  constructor:(config)->
    me=this
    super(config)
    # super arguments
    Jsl.apply me.gStartupInfo,
      boardWidth:me.gameSize*me.gStartupInfo.boardItemWidth
      
    
    @apply
      renderTo:document.documentElement
      items: [me.board.wait=new Jig.CWaitBoard(
        width: me.gStartupInfo.waitWidth
        height:me.gStartupInfo.boardWidth
        
      ),me.board.main=new Jig.CMainBoard(
        renderTo:me.board.wait.doc
        width: me.gStartupInfo.boardWidth
        height:me.gStartupInfo.boardWidth
      ), me.board.menu=new Jig.CMenuBoard(
        renderTo:me.board.main.doc
        width:me.gStartupInfo.menuWidth
        height:me.gStartupInfo.boardWidth
      )]
    # super()
    # console.log(config);
    
    
    # document.documentElement.appendChild(@.doc)
  draw:->
    super()
    me=this
    w=me.gStartupInfo.waitWidth+me.gStartupInfo.boardWidth+me.gStartupInfo.menuWidth
    me.attr.call {doc:document.documentElement},
      viewBox:"0 0 "+w+" "+me.gStartupInfo.boardWidth+ " ";
    
    me.board.main.attr
      transform:"translate("+me.gStartupInfo.waitWidth+","+0+")"
    me.board.menu.attr
      transform:"translate("+me.gStartupInfo.boardWidth+","+0+")"
    # true


g=new Jig.CGame();
g.draw();
window.g=g;
