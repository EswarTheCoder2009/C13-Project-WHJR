var bow, scene;
var bowImage, arrowImage, blueBalloonImage, greenBalloonImage, pinkBalloonImage, redBalloonImage, backgroundImage;
var score = 0;

function preload() {
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  blueBalloonImage = loadImage("blue_balloon0.png");
  greenBalloonImage = loadImage("green_balloon0.png");
  pinkBalloonImage = loadImage("pink_balloon0.png");
  redBalloonImage = loadImage("red_balloon0.png");
  backgroundImage = loadImage("background0.png");
}

function setup() {
  createCanvas(400, 400);

  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;

  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
}

function draw() {
  background(0);
  scene.velocityX = -3;
  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }
  bow.y = mouseY;
  if (keyDown("space")) {
    createArrow();
  }
  var selectSprite = Math.round(random(1, 4));
  if (frameCount % 100 === 0) {
    if (selectSprite === 1) {
      blue_balloon();
    } else if (selectSprite === 2) {
      green_balloon();
    } else if (selectSprite === 3) {
      pink_balloon();
    } else {
      red_balloon();
    }
  }
  text("Score: ", score, 300, 50);
  drawSprites();
}

function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function blue_balloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueBalloonImage);
  blue.velocityX = 3;
  blue.lifetime = 134;
  blue.scale = 0.1;
}

function green_balloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBalloonImage);
  green.velocityX = 3;
  green.lifetime = 134;
  green.scale = 0.1;
}

function pink_balloon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkBalloonImage);
  pink.velocityX = 3;
  pink.lifetime = 134;
  pink.scale = 1.25;
}

function red_balloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(redBalloonImage);
  red.velocityX = 3;
  red.lifetime = 134;
  red.scale = 0.1;
}