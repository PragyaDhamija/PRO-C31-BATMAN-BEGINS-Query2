const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100;
var drop;
var raindrop;

function preload(){
    raindrop = loadImage("raindrop.png");
}

function setup(){

    engine = Engine.create();
    world = engine.world;

   drop = new drops(200,200,15);

   Engine.run(engine);
    
}

function draw(){
    var canvas = createCanvas(400,400);

    drop.display();

    for(var i=0; i<maxDrops; i++) {
        drops.push(new createdrops(random(0,400),random(0,400)));
    }
}   

