'use strict';

var Sprite = function(parent, args) {
  var args = args || {};
  this._parent = parent;
  this.init(args);
};

Sprite.prototype.init = function(args) {
  this.width = args.width || 40;
  this.height = args.height || 40;
  this.colour = args.colour || '#000';
  this.el = new createjs.Shape();
  this.draw();
};

Sprite.prototype.draw = function() {
  var x, y, w, h;
  x = (this.width * 0.5) * -1;
  y = (this.height * 0.5) * -1;
  w = this.width;
  h = this.height;

  this.el.graphics
      .beginFill(this.colour)
      .drawRect(x, y, w, h);
  this.el.cache(x, y, w, h);
};

Sprite.prototype.getEdges = function() {
  var result = {};
  result.x1 = this._parent.container.x - (this.width * 0.5);
  result.x2 = this._parent.container.x + (this.width * 0.5);

  result.y1 = this._parent.container.y - (this.height * 0.5);
  result.y2 = this._parent.container.y + (this.height * 0.5);
  //console.log(result);
  return result;
};
