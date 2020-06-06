const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11,box12,box13;
var box14,box15,box16;
var mouse1,ground,ground1;





function setup() {
  createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

  ground1=new Ground (520,200,300,20);
  
   box2=new Box (400,170,30,40,"yellow");
   box3=new Box (450,170,30,40,"red");
   box4=new Box (500,170,30,40,"green");
   box5=new Box (550,170,30,40,"brown");
   box6=new Box (600,170,30,40,"violet");
   box7=new Box (650,170,30,40,"yellow");
   box8=new Box (650,140,30,40,"green");
   box9=new Box (600,150,30,40,"pink");
   box10=new Box (550,150,30,40,"green");
   box11=new Box (500,150,30,40,"yellow");
   box12=new Box (450,150,30,40,"violet");
   box13=new Box (400,150,30,40,"red");
   box14=new Box (650,130,30,40,"green");
   box15=new Box (600,130,30,40,"yellow");
   box16=new Box (550,130,30,40,"pink");
   box17=new Box (500,130,30,40,"violet");
   box18=new Box (450,130,30,40,"red");
   box19=new Box (400,130,30,40,"brown");
   mouse1=new Mouse (200,200,20,20);
   ground=new Ground (200,500,1200,30);
   
   }

function draw() {
  background("black");  
  Engine.update(engine);
  fill ("yellow");
 
 
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
  box19.display();
  ground1.display();

  mouse1.display();
  ground.display();
}