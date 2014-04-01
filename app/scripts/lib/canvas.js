'use strict';

var Canvas = function() {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      el,
      body = document.getElementsByTagName('body')[0],
      pixelRatio = this.getPixelRatio();

  //width /= pixelRatio;
  //height /= pixelRatio;

  el = document.createElement('canvas');
  el.setAttribute('id', 'canvas');
  el.setAttribute('width', width);
  el.setAttribute('height', height);
  body.appendChild(el);

};

Canvas.prototype.getPixelRatio = function() {
  var userAgent = navigator.userAgent.toLowerCase(),
      isDroid = /android/.test(userAgent),
      isChrome = /chrome/.test(userAgent);
  return window.devicePixelRatio || 1;
};

