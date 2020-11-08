var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, box1, box2, box3;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	ball = new Paper(100, 300, 15);
	ground = new Ground(600, 380, 1200, 20);
	box1 = new Box(900, 300, 30, 100);
	box2 = new Box(1100, 300, 30, 100);
	box3 = new Box(1000, 360, 230, 20);
	Engine.run(engine);

}


function draw() {
	background(0, 0, 0);

	Engine.update(engine);
	ground.display();
	ball.display();
	box1.display();
	box2.display();
	box3.display();
	drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position,
			{ x: 50, y: -40 })
	}
}





