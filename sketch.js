const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,canvas,backgroundImg;
var score=0;
function preload(){
    backgroundImg=loadImage("www.jpeg");
}
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    Ground=new ground(400,335,800,10);
    Ball=new ball(550-100,200,200,35);
   
    b1=new box(100,300,50*2,200)
    
   
   

    b7=new box(200,300,50*2,200)
      
   

    ba1=new box(300,300,50*2,200)

   
   
    Sling = new rope(Ball.body,{x:550,y:100});
}

function draw(){
 
    background(backgroundImg);

    
  
Engine.update(engine);
Ground.display();
Ball.display();
Sling.display();
b1.display();



ba1.display();



b7.display();



b1.score();



ba1.score();



b7.score();



stroke(255,230,1);
strokeWeight(1);
textSize(20);
fill(255,230,1)
text("Score:"+score,100,50);  
}

function mouseDragged() {
    console.log("hello");
    Matter.Body.setPosition(Ball.body,{x: mouseX , y: mouseY})
  
  }
  