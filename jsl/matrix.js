(function() {
  var dhaft,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Jsl.MatrixData = (function() {

    function MatrixData() {}

    MatrixData.prototype.m = [];

    return MatrixData;

  })();

  Jsl.MatrixOne = (function(_super) {

    __extends(MatrixOne, _super);

    function MatrixOne(m) {
      this.m = m != null ? m : [];
    }

    MatrixOne.prototype.clone = function() {
      return new Jsl.MatrixOne(this.m.concat());
    };

    MatrixOne.prototype.scale = function(factor) {
      var i, n, ref;
      if (factor == null) factor = 1;
      ref = this.m;
      n = ref.length;
      i = -1;
      while (++i < n) {
        ref[i] *= factor;
      }
      return this;
    };

    MatrixOne.prototype.add = function(mt) {
      var i, n, ref, ref1;
      ref = this.m;
      ref1 = mt.m;
      n = ref.length;
      i = -1;
      while (++i < n) {
        ref[i] += ref1[i];
      }
      return this;
    };

    MatrixOne.prototype.dot = function(mt) {
      var i, n, ref, ref1, sum;
      ref = this.m;
      ref1 = mt.m;
      sum = 0;
      i = -1;
      n = ref.length;
      while (++i < n) {
        sum += ref[i] * ref1[i];
      }
      return sum;
    };

    MatrixOne.prototype.augment = function(a) {
      return this.m = this.m.concat(a);
    };

    return MatrixOne;

  })(Jsl.MatrixData);

  Jsl.Matrix = (function(_super) {

    __extends(Matrix, _super);

    function Matrix(obj) {
      var name;
      if (arguments.length > 0) {
        name = obj.constructor.name;
        if (name === "Array") {
          this.m = obj;
        } else {
          if (name === this.constructor.name) this.m = obj.clone().m;
        }
      }
      this;
    }

    Matrix.prototype.cell = function(i, j, val) {
      if (typeof val !== 'undefined') this.m[i][j] = val;
      return this.m[i][j];
    };

    Matrix.prototype.clone = function() {
      var data, i, n;
      n = this.m.length;
      data = [];
      i = -1;
      while (++i < n) {
        data.push(this.m[i].concat());
      }
      return new Jsl.Matrix(data);
    };

    Matrix.prototype.print = function(data) {
      var v, _i, _len, _results;
      if (data == null) data = this.m;
      _results = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        v = data[_i];
        _results.push(console.log(v));
      }
      return _results;
    };

    Matrix.prototype.size = function(data) {
      if (data == null) data = this.m;
      return {
        col: data[0].length,
        row: data.length
      };
    };

    Matrix.prototype.rows = function(i, data) {
      if (data == null) data = this.m;
      return data[i];
    };

    Matrix.prototype.cols = function(i, data) {
      var row, rs, _i, _len;
      if (data == null) data = this.m;
      rs = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        row = data[_i];
        rs.push(row[i]);
      }
      return rs;
    };

    Matrix.prototype.gaussianElimination = function() {
      var found, i, j, k, l, mul, row, sz;
      sz = this.size();
      i = -1;
      while (++i < sz.row) {
        row = this.m[i];
        if (row[l = j = i] === 0) {
          while ((++j < sz.row) && (found = this.m[j][i] === 0)) {
            continue;
          }
          if (found) {
            k = -1;
            while (++k < sz.col) {
              row[k] += this.m[j][k];
            }
          } else {
            if (row[i] === 0) throw "Cannot handle this " + i;
          }
        }
        while (++l < sz.row) {
          k = -1;
          mul = -this.m[l][i] / row[i];
          while (++k < sz.col) {
            this.m[l][k] += mul * row[k];
          }
        }
      }
      return this;
    };

    Matrix.prototype.multiplySum = function(a, b) {
      var i, sum, _ref;
      sum = 0;
      for (i = 0, _ref = a.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        sum += a[i] * b[i];
      }
      return sum;
    };

    Matrix.prototype.multiply = function(a) {
      var col, j, k, me, r, row, rs, sum, targetSize, _ref, _ref2;
      targetSize = {
        row: this.size().row,
        col: this.size(a).col
      };
      me = this;
      rs = [];
      for (j = 0, _ref = targetSize.row - 1; 0 <= _ref ? j <= _ref : j >= _ref; 0 <= _ref ? j++ : j--) {
        row = this.rows(j);
        r = [];
        for (k = 0, _ref2 = targetSize.col - 1; 0 <= _ref2 ? k <= _ref2 : k >= _ref2; 0 <= _ref2 ? k++ : k--) {
          col = this.cols(k, a);
          sum = this.multiplySum(row, col);
          r.push(sum);
        }
        rs.push(r);
      }
      return this;
    };

    Matrix.prototype.x = function() {
      return this.multiply.apply(this, arguments);
    };

    Matrix.prototype.augment = function(a) {
      var i, n;
      i = -1;
      n = this.m.length;
      while (++i < n) {
        this.m[i] = this.m[i].concat(a.m[i]);
      }
      return this;
    };

    Matrix.prototype.unitMatrix = function(n) {
      var cached, data, i, rs;
      data = [];
      cached = [];
      i = -1;
      while (++i < n) {
        cached.push(0);
      }
      i = -1;
      while (++i < n) {
        data.push(cached.concat());
        data[i][i] = 1;
      }
      rs = new Jsl.Matrix();
      rs.m = data;
      return rs;
    };

    Matrix.prototype.invert = function() {
      var des, his, i, inv, j, k, mul, nrow, orow, pcol, row, si, startCol, sval, tmp, tmp1, _ref;
      nrow = this.m.length;
      des = this.clone().augment(this.unitMatrix(nrow)).gaussianElimination();
      i = nrow;
      while (--i >= 0) {
        tmp = new Jsl.MatrixOne();
        tmp.m = des.m[i];
        tmp.scale(1 / des.m[i][i]);
        j = i;
        while (--j >= 0) {
          tmp1 = new Jsl.MatrixOne(tmp.clone().m);
          tmp1.scale(-des.m[j][i]);
          tmp1.add.call({
            m: des.m[j]
          }, tmp1);
          true;
        }
        des.m[i] = des.m[i].slice(nrow);
      }
      return des;
      si = this.size();
      pcol = 0;
      inv = [];
      i = -1;
      while (++i < si.col) {
        inv.push(cached.concat());
        inv[i][i] = 1;
      }
      des = this.cloneData(this.m);
      startCol = -1;
      his = [];
      while (++startCol < si.row) {
        i = startCol;
        row = des[i];
        j = -1;
        while (++j < si.row) {
          if (i === j) continue;
          if (row[i] === 0) {
            throw new Exception("Error: row(", i, i, ") equal zero.");
          }
          orow = des[j];
          mul = -orow[startCol] / row[i];
          sval = row[startCol];
          for (k = 0, _ref = si.col - 1; 0 <= _ref ? k <= _ref : k >= _ref; 0 <= _ref ? k++ : k--) {
            orow[k] = row[k] * mul + orow[k];
            row[k] = row[k] / sval;
            inv[j][k] = inv[i][k] * mul + inv[j][k];
            inv[i][k] = inv[i][k] / sval;
          }
        }
      }
      return new Jsl.Matrix(inv);
    };

    Matrix.prototype.inv = function() {
      return this.invert();
    };

    return Matrix;

  })(Jsl.MatrixData);

  Jsl.matrix = {
    create: function(data) {
      return new Jsl.matrix(data);
    },
    unitMatrix: function(n) {
      return Jsl.Matrix.prototype.unitMatrix.call(null, n);
    },
    benchMark: function(cb) {
      var i, x, y;
      x = new Date();
      for (i = 0; i <= 100; i++) {
        cb();
      }
      y = new Date();
      return y - x;
    }
  };

  dhaft = function() {
    var pathData, pl, po, r, val, _i, _len, _ref;
    pathData = "M 0,0 365,-124 469,-48 531,-4 458,78 404,142 448,187 486,227 547,233 608,239";
    pl = pathData.replace(/[MQS]\s/g, "").split(" ");
    po = [];
    for (_i = 0, _len = pl.length; _i < _len; _i++) {
      val = pl[_i];
      r = val.split(",");
      _ref = [parseFloat(r[0]), parseFloat(r[1])], r[0] = _ref[0], r[1] = _ref[1];
      po.push(r);
    }
    Jsl.Matrix.prototype.print.call({
      m: po
    });
    return true;
  };

  dhaft();

}).call(this);
