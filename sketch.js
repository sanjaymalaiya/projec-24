var paperObj,dustbinObj,groundObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

function setup() {
	createCanvas(1600, 700);

	engine = Matter.Engine.create();
	world = engine.world;


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1150,650);
	paperObj=new paper(190,450,40);
	groundObject=new Ground(width/2,690,width,50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  dustbinObj.display();
  paperObj.display();
  groundObject.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:90,y:-85});
  
	}
}
