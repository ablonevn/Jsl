(function() {
  var a, g, i, j, k, l, mirror, rst, v, vx, vy, y, _i, _len, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Jig || (window.Jig = {});

  v = "411.05384,402.41022 432.80084,398.28322 438.57984,400.57222 444.6268,402.96735 439.95184,409.69822 436.1381,415.18913 446.61884,416.66822 453.63848,417.65886 456.26938,416.4296 463.84353,412.89065 459.95984,408.15822 455.82332,403.11771 470.57484,400.74022 478.80222,399.41422 489.34384,399.41422";

  window.svg = document.documentElement;

  window.m = $M([[1 * 4, 0, 411.05384], [0, 1 * 4, 402.41022], [0, 0, 1]]);

  window.x = $M([[0, 0, 2.177742 + 0.6457288], [0, 0, 0.44872 + 5.005229], [0, 0, 1]]);

  mirror = $M([[1, 0, 0], [0, -1, 0], [0, 0, 1]]);

  window.ap = function(data) {
    var i, s, _i, _len, _results;
    s = "";
    _results = [];
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      i = data[_i];
      _results.push(console.log(i));
    }
    return _results;
  };

  rst = [];

  window.els = [];

  i = 0;

  j = -1;

  console.log(v);

  _ref = v.split(" ");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    k = _ref[_i];
    l = k.split(",");
    vx = parseFloat(l[0]);
    vy = parseFloat(l[1]);
    x.elements[0][2] = vx;
    x.elements[1][2] = vy;
    y = m.inv().multiply(x).multiply(mirror);
    if (i === 0) rst.push("m ");
    if (i === 1) rst.push(" Q ");
    i++;
    j++;
    els.push([y.elements[0][2], y.elements[1][2]]);
    rst.push(y.elements[0][2] + "," + y.elements[1][2]);
  }

  console.log(rst.join(" "));

  Jig.Path = (function(_super) {

    __extends(Path, _super);

    function Path() {
      Path.__super__.constructor.apply(this, arguments);
    }

    Path.prototype.elTagName = "g";

    Path.prototype.vertex = "0.6457288,5.005229 2.177742,0.44872 5.25611,1.0243625 6.875117,0.3300525 1.32178,-0.5669175 1.048283,-1.368605 0.342683,-2.4683577 -0.82274,-1.283407 0.3929,-1.72543 1.081077,-1.99459 0.320928,-0.124762 1.0088632,-0.2143751 1.7010002,-0.2143751 0.692138,0 1.380073,0.08961 1.701,0.2143751 0.688178,0.26916 1.903818,0.711183 1.081078,1.99459 -0.7056,1.0997526 -0.979098,1.9014401 0.342682,2.4683577 1.619008,0.6943099 4.697375,0.118665 6.875118,-0.3300525";

    Path.prototype.draw = function() {
      var a, me;
      Path.__super__.draw.call(this);
      me = this;
      a = Jsl.create("path");
      me.attr.call({
        doc: a
      }, {
        d: "m 0,0 l 10,10",
        stroke: "red"
      });
      me.doc.appendChild(a);
      a = Jsl.create("path");
      me.attr.call({
        doc: a
      }, {
        d: "m 0.6457288,5.005229 c 2.177742,0.44872 5.25611,1.0243625 6.875117,0.3300525 1.32178,-0.5669175 1.048283,-1.368605 0.342683,-2.4683577 -0.82274,-1.283407 0.3929,-1.72543 1.081077,-1.99459 0.320928,-0.124762 1.0088632,-0.2143751 1.7010002,-0.2143751 0.692138,0 1.380073,0.08961 1.701,0.2143751 0.688178,0.26916 1.903818,0.711183 1.081078,1.99459 -0.7056,1.0997526 -0.979098,1.9014401 0.342682,2.4683577 1.619008,0.6943099 4.697375,0.118665 6.875118,-0.3300525",
        stroke: "green",
        fill: 'none',
        'stroke-width': '0.1px',
        style: 'marker: url(#mCircle)'
      });
      me.doc.appendChild(a);
      a = Jsl.create("path");
      me.attr.call({
        doc: a
      }, {
        d: rst.join(" "),
        stroke: "blue",
        fill: 'none',
        'stroke-width': '0.1px',
        transform: "translate(0.6457288,5.005229)"
      });
      return me.doc.appendChild(a);
    };

    return Path;

  })(Jsl.CElement);

  m.inv().multiply(x).inspect();

  a = new Jig.Path({
    renderTo: document.documentElement
  });

  a.draw();

  return;

  Jsl.CRect = (function(_super) {

    __extends(CRect, _super);

    function CRect() {
      CRect.__super__.constructor.apply(this, arguments);
    }

    CRect.prototype.elTagName = "rect";

    CRect.prototype.x = 0;

    CRect.prototype.y = 0;

    CRect.prototype.width = 0;

    CRect.prototype.height = 0;

    CRect.prototype.draw = function() {
      var me;
      CRect.__super__.draw.call(this);
      me = this;
      return me.attr({
        x: me.x,
        y: me.y,
        width: me.width,
        height: me.height
      });
    };

    return CRect;

  })(Jsl.CElement);

  Jsl.CContainer = (function(_super) {

    __extends(CContainer, _super);

    function CContainer() {
      CContainer.__super__.constructor.apply(this, arguments);
    }

    CContainer.prototype.x = 0;

    CContainer.prototype.y = 0;

    CContainer.prototype.width = 0;

    CContainer.prototype.height = 0;

    CContainer.prototype.items = [];

    CContainer.prototype.draw = function() {
      var me, val, _j, _len2, _ref2;
      CContainer.__super__.draw.call(this);
      me = this;
      _ref2 = me.items;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        val = _ref2[_j];
        if (!val.renderTo) val.renderTo = me.doc;
        val.draw();
      }
      return true;
    };

    return CContainer;

  })(Jsl.CElement);

  Jig.CWaitBoard = (function(_super) {

    __extends(CWaitBoard, _super);

    CWaitBoard.prototype.x = 0;

    CWaitBoard.prototype.y = 0;

    CWaitBoard.prototype.width = 0;

    CWaitBoard.prototype.height = 0;

    function CWaitBoard(config) {
      CWaitBoard.__super__.constructor.call(this, config);
      this.apply({
        items: [new Jsl.CRect()]
      });
    }

    CWaitBoard.prototype.draw = function() {
      var me;
      CWaitBoard.__super__.draw.call(this);
      me = this;
      return me.items[0].attr({
        x: me.x,
        y: me.y,
        width: me.width,
        height: me.height,
        style: "fill:blue"
      });
    };

    return CWaitBoard;

  })(Jsl.CContainer);

  Jig.CMainBoard = (function(_super) {

    __extends(CMainBoard, _super);

    function CMainBoard(config) {
      var me;
      CMainBoard.__super__.constructor.call(this, config);
      me = this;
      this.apply({
        items: [
          new Jsl.CRect({
            width: me.width,
            height: me.height
          })
        ]
      });
    }

    CMainBoard.prototype.draw = function() {
      var me;
      CMainBoard.__super__.draw.call(this);
      me = this;
      return me.items[0].attr({
        x: me.x,
        y: me.y,
        width: me.width,
        height: me.height,
        style: "fill:gray"
      });
    };

    return CMainBoard;

  })(Jsl.CContainer);

  Jig.CMenuBoard = (function(_super) {

    __extends(CMenuBoard, _super);

    function CMenuBoard(config) {
      var me;
      CMenuBoard.__super__.constructor.call(this, config);
      me = this;
      this.apply({
        items: [
          new Jsl.CRect({
            width: me.width,
            height: me.height
          })
        ]
      });
    }

    CMenuBoard.prototype.draw = function() {
      var me;
      CMenuBoard.__super__.draw.call(this);
      me = this;
      return me.items[0].attr({
        x: me.x,
        y: me.y,
        width: me.width,
        height: me.height,
        style: "fill:green"
      });
    };

    return CMenuBoard;

  })(Jsl.CContainer);

  Jig.CGame = (function(_super) {

    __extends(CGame, _super);

    CGame.prototype.board = {
      wait: null,
      main: null,
      menu: null
    };

    CGame.prototype.gameSize = 7;

    CGame.prototype.gStartupInfo = {
      boardItemWidth: 20,
      waitWidth: 100,
      menuWidth: 60,
      boardWidth: -1
    };

    function CGame(config) {
      var me;
      me = this;
      CGame.__super__.constructor.call(this, config);
      Jsl.apply(me.gStartupInfo, {
        boardWidth: me.gameSize * me.gStartupInfo.boardItemWidth
      });
      this.apply({
        renderTo: document.documentElement,
        items: [
          me.board.wait = new Jig.CWaitBoard({
            width: me.gStartupInfo.waitWidth,
            height: me.gStartupInfo.boardWidth
          }), me.board.main = new Jig.CMainBoard({
            renderTo: me.board.wait.doc,
            width: me.gStartupInfo.boardWidth,
            height: me.gStartupInfo.boardWidth
          }), me.board.menu = new Jig.CMenuBoard({
            renderTo: me.board.main.doc,
            width: me.gStartupInfo.menuWidth,
            height: me.gStartupInfo.boardWidth
          })
        ]
      });
    }

    CGame.prototype.draw = function() {
      var me, w;
      CGame.__super__.draw.call(this);
      me = this;
      w = me.gStartupInfo.waitWidth + me.gStartupInfo.boardWidth + me.gStartupInfo.menuWidth;
      me.attr.call({
        doc: document.documentElement
      }, {
        viewBox: "0 0 " + w + " " + me.gStartupInfo.boardWidth + " "
      });
      me.board.main.attr({
        transform: "translate(" + me.gStartupInfo.waitWidth + "," + 0 + ")"
      });
      return me.board.menu.attr({
        transform: "translate(" + me.gStartupInfo.boardWidth + "," + 0 + ")"
      });
    };

    return CGame;

  })(Jsl.CContainer);

  g = new Jig.CGame();

  g.draw();

  window.g = g;

}).call(this);
