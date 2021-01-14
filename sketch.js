const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(490, 800);

  engine = Engine.create();
  world = engine.world;

 
  ground = new Ground(240, 795, 800, 10); 

  //for (var k = 5; k <=width; k = k + 80) {
    //divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
 // }


  
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  ground.display();

 
  drawSprites();
}