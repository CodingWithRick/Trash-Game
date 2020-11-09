var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, box1, box2, box3;
var binImg, bin;

function preload() {
	binImg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	bin = createSprite(950, 300, 250, 20);
	bin.addImage(binImg);
	bin.scale = 0.5;
	engine = Engine.create();
	world = engine.world;
	ball = new Paper(100, 300, 20);
	ground = new Ground(600, 380, 1200, 20);
	box1 = new Box(900, 300, 30, 100);
	box2 = new Box(1000, 300, 30, 100);
	box3 = new Box(950, 360, 130, 20);
	Engine.run(engine);

}


function draw() {
	background("#ccc");

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
			{ x: 80, y: -80 })
	}
}





