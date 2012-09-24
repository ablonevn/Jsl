(function() {

  Jsl.Matrix = (function() {

    Matrix.prototype.m = [];

    function Matrix(m) {
      this.m = m != null ? m : [];
    }

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

    Matrix.prototype.multiply = function(a) {
      var col, j, k, l, me, r, row, rs, sum, _ref, _ref2, _ref3;
      me = this;
      rs = [];
      for (j = 0, _ref = this.m.length - 1; 0 <= _ref ? j <= _ref : j >= _ref; 0 <= _ref ? j++ : j--) {
        row = this.rows(j);
        r = [];
        for (k = 0, _ref2 = row.length - 1; 0 <= _ref2 ? k <= _ref2 : k >= _ref2; 0 <= _ref2 ? k++ : k--) {
          col = this.cols(k, a);
          sum = 0;
          for (l = 0, _ref3 = row.length - 1; 0 <= _ref3 ? l <= _ref3 : l >= _ref3; 0 <= _ref3 ? l++ : l--) {
            sum += row[l] * col[l];
          }
          r.push(sum);
        }
        rs.push(r);
      }
      return this.print(rs);
    };

    Matrix.prototype.x = function() {
      return this.multiply.apply(this, arguments);
    };

    return Matrix;

  })();

  Jsl.matrix = {
    create: function(data) {
      return new Jsl.matrix(data);
    }
  };

}).call(this);
