'use strict';

var EntityManager = function(width, height) {
  this.entities = new Array();
  this.quadTree = new Quadtree({
    x: 0,
    y: 0,
    width: width,
    height: height
  }, 2, 6);

  //this.drawQuadTree(this.quadTree);

  this.retrieved = new createjs.Text('', "16px Arial", "#000");
  this.retrieved.x = 25;
  this.retrieved.y = 50;
  this.retrieved.textBaseline = "top";
  this.addToStage(this.retrieved);

};

EntityManager.prototype.addToStage = function(target) {
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent('stageAddChild', true, true, { 'detail': target });
  window.dispatchEvent(e);
};

EntityManager.prototype.push = function(entity) {
  this.entities.push(entity);

  this.quadTree.insert({
    entity: entity,
    x: entity.container.x,
    y: entity.container.y,
    width: 50,
    height: 50
  });
  this.addToStage(entity.container);

};

EntityManager.prototype.pop = function(entity) {
  this.entities.pop(entity);
};

EntityManager.prototype.update = function() {
    var selector = {
          entity: player,
          x: player.container.x,
          y: player.container.y,
          width: 50,
          height: 50
        };

    var targets = this.quadTree.retrieve(selector),
        length = targets.length;

    this.retrieved.text = 'number of retrieved nodes: ' + length;
    for(var i=0; i < length; i+=1) {
      targets[i].entity.detectCollision(player);
    }
};

EntityManager.prototype.drawQuadTree = function() {
  this.setQuadTree(this.quadTree);
};

EntityManager.prototype.setQuadTree = function(root) {
  var bounds = root.bounds,
      i = 0,
      length = root.nodes.length,
      rect;

  if(root.nodes.length === 0) {
    rect = new createjs.Shape();
    rect.graphics
      .beginStroke("#000")
      .setStrokeStyle(1)
      .drawRect(bounds.x, bounds.y, bounds.width, bounds.height);
    this.addToStage(rect);
  } else {
    for(i; i < length; i+=1) {
      this.setQuadTree(root.nodes[i]);
    }
  }
};
