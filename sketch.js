var bg,bgImage;
var snow,snowImage;
var boy,boyImage,boyObj;

function preload(){
   bgImage = loadImage("snow1.jpg");
   snowImage = loadImage("snow4.webp");
   boyImage = loadImage("boy.PNG");
}

function setup() {
  createCanvas(800,400);

   boy = createSprite(600,300,10,10)
   boy.addImage(boyImage);

}

function draw() {
  background(bgImage);  

 if(keyDown(UP_ARROW)){
   boy.velocityY = -5
 }
 if(keyDown(DOWN_ARROW)){
   boy.velocityY = 5
 }

createSnow();
  

  drawSprites();
}

function createSnow(){
  if(frameCount%10===0){
  snow = createSprite(random(0,800), 0, 50, 50);
  snow.velocityX = -2;
  snow.velocityY = 4;
  snow.addImage(snowImage);
  snow.scale = 0.1;
  }

}