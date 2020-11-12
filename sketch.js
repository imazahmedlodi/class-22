const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground,ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
 var rest={
   restitution:1.0
 }
  ball=Bodies.circle(200,100,20,rest)
  World.add(world,ball);
  console.log(ball)
  var stat={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,stat)
  World.add(world,ground);
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}