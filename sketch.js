
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(400, 200, 200, 30);

	bob1 = new Bob(320,400,40);
	bob2 = new Bob(360,400,40);
	bob3 = new Bob(400,400,40);
	bob4 = new Bob(440,400,40);
	bob5 = new Bob(480,400,40);

	rope1 = new Rope(bob1.body,roof1.body, -80,10);
	rope2 = new Rope(bob2.body,roof1.body, -40,10);
	rope3 = new Rope(bob3.body,roof1.body, 0,10);
	rope4 = new Rope(bob4.body,roof1.body, 40,10);
	rope5 = new Rope(bob5.body,roof1.body, 80,10);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  keyPressed();
  drawSprites();

}

function keyPressed() {
	if (keyWentDown("left")) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70, y:5});
	}  
}
