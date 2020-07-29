const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var rect1,rect2,rect3;

function setup() {
	createCanvas(1100, 700);
	engine = Engine.create();
	world = engine.world;

    ground=createSprite(width/2, height-35, width,10);
    ground.shapeColor=color(255)

    
	ball = new Paper (40,450,40);
	
	
	rect1 = createSprite(890,645,300,30);
	rect1.shapeColor = ("red")

	rect2 = createSprite(1000,600,40,120);
	rect2.shapeColor = ("red")

	rect3 = createSprite(700,600,40,120);
	rect3.shapeColor = ("red")


	
	rect1Body= Bodies.rectangle(830,645,300,30,{isStatic:true});
	World.add(world,rect1Body);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  rect1.x= rect1Body.position.x 
  rect1.y= rect1Body.position.y 
  ball.display();
  drawSprites();
 


  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
	}
}
