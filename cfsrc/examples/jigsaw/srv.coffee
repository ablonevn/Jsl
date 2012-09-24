fs=require "fs"
express=require("express");
im = require('imagemagick');

app=express();
app.use(express.static(__dirname));
app.get "/",(req,res)->
  # res.redirect('index.svg');
  res.header("Content-Type", "text/xml")
  res.sendfile('index.svg')
  # fs.readFile "index.xml",(err,data)->
    # res.send(data);
#     
    # res.end()
app.get "/getImg*",(req,res)->
  q=req.query;
  fn=__dirname+"/imgs/"+q.file
  des=__dirname+"/imgs/tmp.png"
  fs.stat fn, (err,stats)->
    if (stats!=undefined)
      try
        im.resize
          srcPath: fn,
          dstPath: des,
          width:   q.w
          height:   q.h
        , (err, stdout, stderr)->
          fs.readFile des,(err,data)->
            res.send(data+"");
      catch err
        res.send("err convert")
    else
      res.send("Error"+fn)
      
  # query: { file: 'test.jpg', width: '15', height: '18' }
  
  
  return
  try
    
  catch e
    res.end()

    
app.listen(3000);

