


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	ground=new Ground (400,500,800,20)
	
	invisibleWall=new Rectangle (690,400,20,200)
	
	invisibleWall.visible=true;
	


	paper=new Paper (50,495,50)
	
	rectangle1= new Rectangle (600,400,200,20)
	
	Engine.run(engine);
  
}


function draw() {

background("pink");

paper.display ();
ground.display ();
//rectangle2.display ();
//rectangle3.display (); 
rectangle1.display ();
drawSprites();
}

function keyPressed() {
if (keyCode===UP_ARROW) 
Matter.Body.applyForce(paper.body,paper.body.position, {x:100,y:-100})
}