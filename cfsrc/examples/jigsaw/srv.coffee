fs=require "fs"
express=require("express");

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
app.listen(3000);

