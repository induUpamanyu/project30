const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var chain;
var hex;
var ball;
var hexImg;

function preload() {

  hexImg = loadImage("hexagon (1).png");

}

function setup() {

  createCanvas(1365,650);
  engine = Engine.create();
  world = engine.world;

  
  strokeWeight(2);

  block1 = new Block(600, 480, 30, 40);
  block2 = new Block(570, 480, 30, 40);
  block3 = new Block(540, 480, 30, 40);
  block4 = new Block(630, 480, 30, 40);
  block5 = new Block(660, 480, 30, 40);
  block6 = new Block(585, 440, 30, 40);
  block7 = new Block(555, 440, 30, 40);
  block8 = new Block(615, 440, 30, 40);
  block9 = new Block(645, 440, 30, 40);
  bolck10 = new Block(600, 400, 30, 40);
  block11 = new Block(570, 400, 30, 40);
  block12 = new Block(630, 400, 30, 40);
  block13 = new Block(600, 360, 30, 40);
  block14 = new Block(1140, 130, 30, 40);
  block15 = new Block(1170, 130, 30, 40);
  block16 = new Block(1230, 130, 30, 40);
  block17 = new Block(1260, 130, 30, 40);
  block18 = new Block(1200, 130, 30, 40);
  block19 = new Block(1200, 90, 30, 40);
  block20 = new Block(1230, 90, 30, 40);
  block21 = new Block(1170, 90, 30, 40);
  block22 = new Block(1200, 50, 30, 40);

  ground1 = new Ground(600,500,200,10);
  ground2 = new Ground(1200, 150, 200, 10);
  ground3 = new Ground(750, 635, 1500, 20);

  hex = new Hex(80, 190, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new Chain(this.ball,{x:350, y:160});

}

function draw() {

  background("orange");

  Engine.update(engine);

  fill("white");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("Blue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("red");
  bolck10.display();
  block11.display();
  block12.display();

  fill("black");
  block13.display();

  fill("yellow");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("purple");
  block19.display();
  block20.display();
  block21.display();

  fill("brown");
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

  chain.display();

}


function mouseDragged() {

  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}


function keyPressed() {

	if(keyCode === 32) {
		Matter.Body.setPosition(hex.body, {x:85, y:200})
		chain.attach(hex.body);
  }
  
}