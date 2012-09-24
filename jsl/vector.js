(function() {
  var vector;

  Jsl.Vector = (function() {

    Vector.prototype.dx = 0;

    Vector.prototype.dy = 0;

    function Vector() {
      var me;
      me = this;
      Jsl.Vector.prototype.init.apply(me, arguments);
      me;
    }

    Vector.prototype.setVector = function(dx, dy) {
      this.dx = dx;
      this.dy = dy;
      return this;
    };

    Vector.prototype.init = function() {
      var me, xfrom, xto, yfrom, yto;
      me = this;
      switch (arguments.length) {
        case 2:
          me.dx = arguments[0];
          me.dy = arguments[1];
          break;
        case 4:
          xfrom = arguments[0];
          yfrom = arguments[1];
          xto = arguments[2];
          yto = arguments[3];
          me.setVector(xto - xfrom, yto - yfrom);
          break;
      }
      return me;
    };

    return Vector;

  })();

  vector = {
    create: function() {
      var a;
      console.log(arguments);
      a = new Jsl.Vector();
      return a.init.apply(a, arguments);
    }
  };

  Jsl.apply(Jsl, {
    vector: vector
  });

}).call(this);
