const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




function setup(){
    var canvas = createCanvas(1200,600);
    canvas.position(15,70);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1=new Box(900,300,70,70);
    box2=new Box(900,300,70,70);
    box3=new Box(900,300,70,70);
    box4=new Box(900,300,70,70);
    box5=new Box(900,300,70,70);
    box6=new Box(900,300,70,70);
    box7=new Box(900,300,70,70);
    box8=new Box(800,300,70,70);
    box9=new Box(800,300,70,70);
    box10=new Box(800,300,70,70);
    box11=new Box(800,300,70,70);
    box12=new Box(800,300,70,70);
    box13=new Box(800,300,70,70);
    box14=new Box(800,300,70,70);
    Wreckingball= new Ball(500,500,40);
    Rope1=new Rope(Wreckingball.body,{x:620,y:10})



    
}

function draw(){
   background("green");
    
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
    Wreckingball.display();
    Rope1.display();
      
}

function mouseDragged(){
  Matter.Body.setPosition(Wreckingball.body,{x:mouseX,y:mouseY})  
  }





