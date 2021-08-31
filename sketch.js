var bath,bathImg
var drink,drinkImg
var eat,eatImg
var gym,gymImg
var move,moveImg
var astronot
var iss,issImg
var sleep,sleepImg
var brush
function preload(){
  bathImg = loadAnimation("bath1.png","bath2.png")
  brushImg = loadImage("brush.png")
  drinkImg = loadAnimation("drink1.png","drink2.png")
  eatImg = loadAnimation("eat1.png","eat2.png")
  gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  moveImg = loadAnimation("move.png","move1.png")
  issImg = loadImage("iss.png")
  sleepImg = loadImage("sleep.png")
}
function setup() {
  createCanvas(800,400);
  astronot=createSprite(300,230)
  astronot.addImage("sleep",sleepImg);
 astronot.scale = 0.1 ;
}
function draw() {
  background(issImg);
  if(keyDown("UP_ARROW")){
astronot.addAnimation("brushing",brushImg);
astronot.changeAnimation("brushing");
astronot.y=200;
astronot.velocityX=0;
astronot.velocityY=0;
  }
 if(keyDown("DOWN_ARROW")){ 
astronot.addAnimation("gymming",gymImg);
astronot.changeAnimation("gymming");
 astronot.y=200;
 astronot.velocityX=0;
astronot.velocityY=0;
} 
 if(keyDown("LEFT_ARROW")){
 astronot.addAnimation("bathing",bathImg);
astronot.changeAnimation("bathing");
astronot.y=200;
astronot.velocityX=0;
astronot.velocityY=0;
 }
if(keyDown("RIGHT_ARROW")){
  astronot.addAnimation("eating",eatImg);
  astronot.changeAnimation("eating");
  astronot.y=200;
  astronot.velocityX=0;
  astronot.velocityY=0;
  }
  if(keyDown("M")){
    astronot.addAnimation("moving",moveImg);
    astronot.changeAnimation("moving");
    astronot.y=200;
    astronot.velocityX=1;
    astronot.velocityY=1;
    }
    



  drawSprites();
}