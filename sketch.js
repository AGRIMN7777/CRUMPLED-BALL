
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperball ;


function setup() {
	createCanvas(1100, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650);
	paperball = new paper(100,280,20,20);
	paperball.visible = false ;
	paperball.scale = 0.5 ;

	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperball.display();


}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:25,y:-35})
	}
}
function isTouching(){
	
	if(paperball.isTouching(dustbinObj)){
		paperball.display = false ;
	}
}