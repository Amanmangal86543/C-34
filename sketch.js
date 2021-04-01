const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball, rope;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10,
box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-20, width, 20);

    ball = new Ball(400, 300, 60, 60);

    rope = new Rope(ball.body, {x: 400, y: 100});

    box1 = new Box(600, 600, 80, 80);
    box2 = new Box(600, 520, 80, 80); 
    box3 = new Box(600, 440, 80, 80);
    box4 = new Box(600, 360, 80, 80);
    box5 = new Box(600, 280, 80, 80);
    box6 = new Box(600, 200, 80, 80);
    box7 = new Box(800, 600, 80, 80);
    box8 = new Box(800, 520, 80, 80); 
    box9 = new Box(800, 440, 80, 80);
    box10 = new Box(800, 360, 80, 80);
    box11 = new Box(800, 280, 80, 80);
    box12 = new Box(800, 200, 80, 80);
    box13 = new Box(700, 600, 80, 80);
    box14 = new Box(700, 520, 80, 80); 
    box15 = new Box(700, 440, 80, 80);
    box16 = new Box(700, 360, 80, 80);
    box17 = new Box(700, 280, 80, 80);
    box18 = new Box(700, 200, 80, 80);


}

function draw(){
    background("pink");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    ball.display();
    rope.display();

    mouseDragged();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}