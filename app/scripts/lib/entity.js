'use strict';

var Entity = function(args) {
  this._args = args || {};

  this.states = DEFAULTS.ENTITYSTATES[0];

  this.container = new createjs.Container();

  this.sprite = new Sprite(this, args.sprite);
  this.bounding = new Bounding(this, args.bounding);

  this.addChildren();
  this.container.x = args.x || 0;
  this.container.y = args.y || 0;

  this.type = args.type || 'default';

};

Entity.prototype.addChildren = function() {
  this.container.addChild(this.sprite.el);
  if(this._args.bounding && this._args.bounding.render) {
    this.container.addChild(this.bounding.el)
  }
};

Entity.prototype.getLineDistance = function(target) {
  var xs = 0,
      ys = 0;

  xs = target.entity.container.x - this.container.x;
  xs = xs * xs;

  ys = target.entity.container.y - this.container.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
};

Entity.prototype.detectCollision = function(target) {
  this.bounding.update(target);
};
