(function() {

  Jsl.Matrix = (function() {

    Matrix.prototype.m = [];

    function Matrix(m) {
      this.m = m != null ? m : [];
      this;
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

    Matrix.prototype.invert = function() {
      return this;
    };

    Matrix.prototype.inv = function() {
      return this.invert();
    };

    return Matrix;

  })();

  Jsl.matrix = {
    create: function(data) {
      return new Jsl.matrix(data);
    }
  };

}).call(this);
