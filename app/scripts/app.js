'use strict';

var player;

window.onload = function() {
  var entityManager,
      stageManager,
      x, y,
      fpsText;

  var canvas = new Canvas();

  stageManager = new StageManager('canvas');

  createjs.Ticker.setFPS(60);
  createjs.Ticker.on("tick", function() {
    onTick();
  });

  // Draw some random entities
  for(var i = 0; i < 50; i+=1) {
    x = Math.floor(Math.random() * stageManager.get('width'));
    y = Math.floor(Math.random() * stageManager.get('height'));

    stageManager.pushEntity(new Entity({
      x: x,
      y: y,
      sprite: {
        colour: '#ccc',
        width: 40,
        height: 40,
      },
      bounding: {
        radius: 25,
        render: true,
        type: DEFAULTS.BOUNDING_BOX
      }
    }));
  }

  player = new Player({
    x: 300,
    y: 200,
    sprite: {
      colour: '#33f',
      width: 40,
      height: 40    
    },
    bounding: {
      radius: 25,
      render: true,
      type: DEFAULTS.BOUNDING_BOX
    }
  });
  stageManager.viewport.addChild(player.container);

  function onTick(e) {
    fpsText.text = createjs.Ticker.getMeasuredFPS().toFixed(2);
    stageManager.update(e);
  };

  stageManager.entityManager.drawQuadTree();

  fpsText = new createjs.Text('', "16px Arial", "#000");
  fpsText.x = 25;
  fpsText.y = 25;
  fpsText.textBaseline = "top";
  stageManager.stage.addChild(fpsText);

  document.onkeydown = handleKeyDown;
  function handleKeyDown(e) {
    var code = e.which || e.keyCode;
    console.log(code);
    if(code === 38) { // up
      player.container.y -= 5;
    }
    if(code === 40) { // down
      player.container.y += 5;
    }
    if(code === 37) { // left
      player.container.x -= 5;
    }
    if(code === 39) { // right
      player.container.x += 5;
    }
  };

};

