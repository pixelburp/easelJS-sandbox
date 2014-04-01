'use strict';

var Bounding = function(parent, args) {
  this._args = args || {};
  this._parent = parent;

  this.el = new createjs.Shape();
  this.radius = args.radius || 25;
  this.render = args.render || false;
  this.type = args.type || DEFAULTS.BOUNDING_BOX;

  if(this.render) {
    this.draw();
  }

};

Bounding.prototype.draw = function(touched) {
  var colour = touched ? '#000' : '#f0f',
      gfx = this.el.graphics,
      x, y, w, h;

  gfx
    .clear()
    .beginStroke(colour)
    .setStrokeStyle(1);

  if(this.type === 'c') {
    gfx.drawCircle(0, 0, this.radius);
  } else {
    x = (this._parent.sprite.width * 0.5) * -1;
    y = (this._parent.sprite.height * 0.5) * -1;
    w = this._parent.sprite.width;
    h = this._parent.sprite.width;
    gfx.drawRect(x, y, w, h);
  }
};

Bounding.prototype.update = function(target) {
  var self = this,
      touched  = this.getIntersection(target);
  if(!this.render) {
    return false;
  }
  this.draw(touched);
};

Bounding.prototype.getIntersection = function(target) {
  if(this.type === 'c') {
    var distance = this.getLineDistance(target.container),
        length = this.radius + target.bounding.radius;
    return distance <= length;
  } else {
    var overlap = this.getBoxIntersection(target);
    return overlap;
  }
};

Bounding.prototype.getLineDistance = function(target) {
  var xs = 0,
      ys = 0;

  xs = target.x - this._parent.container.x;
  xs = xs * xs;

  ys = target.y - this._parent.container.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
};

Bounding.prototype.getBoxIntersection = function(target) {
  var edge1 = this._parent.sprite.getEdges(),
      edge2 = target.sprite.getEdges(),
      overlap = edge1.x1 <= edge2.x2 && edge1.x2 >= edge2.x1 && edge1.y1 <= edge2.y2 && edge1.y2 >= edge2.y1;
  return overlap;
};
