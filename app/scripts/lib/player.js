'use strict';

var Player = function(args) {
  Entity.call(this, args);
};

Player.prototype = Object.create(Entity.prototype);

Player.doPlayerStuff = function() {
  console.log('doPlayerStuff');
};