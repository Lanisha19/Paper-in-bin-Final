
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;
var dustbin,dustbinImg;
var leftRect,rightRect;
var myWorld,myEngine;



function setup() {
	createCanvas(1000, 400);

  myEngine = Engine.create();
	myWorld = myEngine.world;
 
  ball = new Ball(200,355,70);
  ground = new Ground(500,380,1000,20);
  
  dustbin = new Rect(800,360);
  
}


function draw() {
  background("black");
  Engine.update(myEngine);
 

  drawSprites();
  ball.display();
  ground.display();
  dustbin.display();
  //leftRect.display();
  //rightRect.display();
 
}

function keyPressed(){
   if(keyCode===UP_ARROW){
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-600});
   }
    

}
