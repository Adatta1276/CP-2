

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PAPER1,DP1,DP2,DP3,GROUND;
var BG;
var dustbin,DI;

 function preload() {
	BG = loadImage("iimgs/classroom.png");
	DI = loadImage("iimgs/dustbingreen.png");
 }

function setup() {
	createCanvas(800, 700);  //midpoint of canvas is 400x,350y

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  
	PAPER1 = new Paper(70,640,70);
	GROUND = new Ground(400,697,803,10);
	DP1 = new D1(562,637,4.5,110);
	DP2 = new D4(649,576.5,200,230);
	DP3 = new D3(732,637,4.5,110);
/*	dustbin = createSprite(640,568.5,4.5,110);
	dustbin.addImage(DI);
	dustbin.scale = 0.80; */
	



	Engine.run(engine);



  
}


function draw() {
	background(BG);
	Engine.update(engine);
	rectMode(CENTER);
	/* console.log(World.mouseX);
	console.log(World.mouseY); */

	console.log(PAPER1.x);
	console.log(PAPER1.y);

  keyPressed();
  
  drawSprites();
 
  PAPER1.display();
  GROUND.display();
  DP1.display();
  DP2.display();
  DP3.display();
}

function keyPressed() {
	if(keyWentDown(UP_ARROW)) {
        Matter.Body.applyForce(PAPER1.body,PAPER1.body.position,{x:130, y:-120});
	}
}
