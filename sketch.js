
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new hammer(100, 50);

	ground = new ground(600, height, 1200, 20);
    stone = new stone(400, 240, 70, 70);
    iron = new iron(900, 240, 70, 50);
    rubber = new rubber(300, 240, 30);
    sand1 = new Sand(600, 240, 10);
    sand2 = new Sand(620, 240, 10);
    sand3 = new Sand(610, 240, 10);
    sand4 = new Sand(605, 240, 10);
    sand5 = new Sand(625, 240, 10);
    sand6 = new Sand(630, 240, 10);
    sand7 = new Sand(635, 240, 10);
    sand8 = new Sand(640, 240, 10);
    sand9 = new Sand(645, 240, 10);
    sand10 = new Sand(650, 240, 10);
    sand11 = new Sand(655, 240, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  
  stone.display();
  hammer.display();
  ground.display();
  iron.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();


  drawSprites();
 
}



