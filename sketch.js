const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber,hammer;
var sand1, sand2, sand3, sand4,sand5,sand6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    Ground = new Ground(600,height,1200,20)
    
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    Ground.display();
    iron.display();
    rubber.display();
    hammer.display();
}