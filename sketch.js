var bg;
var snow;

function preload(){
  bg = loadImage("snow1.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup(){
createCanvas(600,600);
}

function draw(){
  background(bg);

  snowfall();

  drawSprites()
}

function snowfall(){
  if (frameCount % 10 === 0) {
    snow = createSprite(200,50);
    snow.addImage("snow",snowImg);
    console.log(snow.position)
    snow.scale = 0.1;
    snow.y = Math.round(random(100,400));
   snow.velocityY= 4;
  }
  }