(function() {
  var app, express, fs, im;

  fs = require("fs");

  express = require("express");

  im = require('imagemagick');

  app = express();

  app.use(express.static(__dirname));

  app.get("/", function(req, res) {
    res.header("Content-Type", "text/xml");
    return res.sendfile('index.svg');
  });

  app.get("/getImg*", function(req, res) {
    var des, fn, q;
    q = req.query;
    fn = __dirname + "/imgs/" + q.file;
    des = __dirname + "/imgs/tmp.png";
    fs.stat(fn, function(err, stats) {
      if (stats !== void 0) {
        try {
          return im.resize({
            srcPath: fn,
            dstPath: des,
            width: q.w,
            height: q.h
          }, function(err, stdout, stderr) {
            return fs.readFile(des, function(err, data) {
              return res.send(data + "");
            });
          });
        } catch (err) {
          return res.send("err convert");
        }
      } else {
        return res.send("Error" + fn);
      }
    });
    return;
    try {

    } catch (e) {
      return res.end();
    }
  });

  app.listen(3000);

}).call(this);
