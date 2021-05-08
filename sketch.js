const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,305,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);

    log1 = new Log(810,260,300,PI/2);  
    log2 =  new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(bird.body);
    }
}