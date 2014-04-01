'use strict';

var StageManager = function(canvasId) {
  var self = this;

  this.stage = new createjs.Stage(canvasId);
  this.viewport = new createjs.Container();

  this.entityManager = new EntityManager(
    this.get('width'),
    this.get('height')
  );

  this.stage.addChild(this.viewport);
  this.stage.on('stagemouseup', function(e) {
    console.log('stagemouseup')
    //self.viewport.regX = e.stageX;
    var tween = createjs.Tween.get(player.container)
      .to({ x: e.stageX, y: e.stageY }, 200)
      .on('change', function() {
        self.entityManager.update();
      })
  });

  window.addEventListener('stageAddChild', function(e, item) {
    self.onAddChild(e, item);
  });

};

StageManager.prototype.get = function(attr) {
  return this.stage.canvas[attr];
};

StageManager.prototype.onAddChild = function(e) {
  this.viewport.addChild(e.detail.detail);
  //this.stage.addChild(e.detail.detail);
  //this.stage.setChildIndex(e.detail.detail, 1);
};

StageManager.prototype.update = function(e) {
  //this.entityManager.update();
  this.stage.update(e);
};

StageManager.prototype.pushEntity = function(entity) {
  this.entityManager.push(entity);
};