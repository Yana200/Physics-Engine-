const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball;
var  ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ballOptions={
    restitution:0.8

  }
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);
  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,groundOptions);
  World.add(world,ground);


  }

function draw() {
  background(0);  
Engine.update(engine);
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,20,20);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,200,20);

}