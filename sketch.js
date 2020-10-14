var car,car1,car2,car3;
var wall,wall1,wall2,wall3;
var speed,speed1,speed2,speed3;
var weight1,weight2,weight3,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(15,90);
  weight = random(400,1500);

  speed1= random(16,91);
  weight1= random(401,1505);

  speed2= random(17,92);
  weight2= random(402,1504);

  speed3= random(18,93);
  weight3= random(403,1503);

  car = createSprite(50,50,30,10);
  car.velocityX = speed;
  car.shapeColor = ("pink");

 car1 = createSprite(50,150,30,10);
 car1.velocityX = speed1;
 car1.shapeColor = ("pink");

  car2 = createSprite(50,250,30,10);
  car2.velocityX = speed2;
  car2.shapeColor = ("pink");

  car3 = createSprite(50,350,30,10);
  car3.velocityX = speed3;
  car3.shapeColor = ("pink");


  wall = createSprite(1500,50,40,60);
  wall.shapeColor = ("grey");

  wall1 = createSprite(1500,150,40,60);
  wall1.shapeColor = ("grey");

  wall2 = createSprite(1500,250,40,60);
  wall2.shapeColor = ("grey");

  wall3 = createSprite(1500,350,40,60);
  wall3.shapeColor = ("grey");
}

function draw() {
  background(0,0,0);  

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509
    car.x=1470;
    wall.x=1500;

    if(deformation>180){
      car.shapeColor=("red");
    }
    if(deformation<100){
      car.shapeColor=("green");
     }
    if (deformation3>100 && deformation3<180){
      car.shapeColor=("yellow");
     
  }}
    
  if(wall1.x-car1.x < (car1.width1+wall1.width1)/2){
    car1.velocityX=0;
    var deformation1 = 0.5 * weight1 * speed1 * speed1/22509
    car1.x=1470;
    wall1.x=1500;

    if(deformation1>180){
      car1.shapeColor=("red");
      
      
    } 
    if(deformation1<100){
      car1.shapeColor=("green");
      
    }
    if (deformation1>100 && deformation1<180){
      car1.shapeColor=("yellow");
      
  }}
    

  if(wall2.x-car2.x < (car2.width2+wall2.width2)/2){
    car2.velocityX=0;
    var deformation2= 0.5 * weight2* speed2 * speed2/22509;
    car2.x=1470;
    wall2.x=1500;

    if(deformation2>180){
      car2.shapeColor=("red");
     
    } 
    if(deformation2<100){
      car2.shapeColor=("green");
      
    
    }
    if (deformation2>100 && deformation2<180){
      car2.shapeColor=("yellow");
     
      
  }} 
    

  if(wall3.x-car3.x < (car3.width3+wall3.width3)/2){
    car3.velocityX=0;
    var deformation3 = 0.5 * weight3* speed3* speed3/22509;
    car3.x=1470;
    wall3.x=1500;

    if(deformation3>180){
      car3.shapeColor=("red");
      }
    if (deformation3<100){
      car3.shapeColor=("green");
     
    } 
   if (deformation3>100 && deformation3<180){
      car3.shapeColor=("yellow");
      
    }}
    
  drawSprites();

}