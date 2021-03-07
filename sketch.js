function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
 speed=random(55,90);
 weight=random(400,1500)
}
var Car
var wall
var speed
var weight
car=createSprite(50,200,50,50);
car.velocityX=speed;
wall=createSprite(1500,200,60,height/2);
wall.shapeColor=color(80,80,80)
function draw() {
  background(255,255,255);  
  drawSprites();
  if (deformation<180 && deformation>100){ 
    car.shapeColor=(230,230,0)
    
  }
  if (deformation>100){ 
car.shapeColor=(0,255,0)
}
(deformation<180 && deformation>100){ 
  car.shapeColor(255,0,0)
}