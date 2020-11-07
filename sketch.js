// assigning variables:
var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);

  
// creating random numbers:
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="white";


}

function draw() {
  background(0,0,0); 
  
  if(wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0;

    var deformation=0.5*weight*speed*speed/22500

    if(deformation>180){
      car.shapeColor=color(255,0,0);
      stroke("red");
      textSize(20);
      fill("red");
      text("NOT SAFE!! ", 500,50);
    }
    
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      
      stroke("yellow");
      textSize(20);
      fill("yellow");
      text("AVERAGE ", 500,50);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);

      stroke("green");
      textSize(20);
      fill("green");
      text("SAFE ", 500,50);
      
    }
  }
  
  





  drawSprites();
}