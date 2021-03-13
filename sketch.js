
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1030,100,30);
	mango3=new mango(1100,170,30);
	mango4=new mango(1170,200,30);
	mango5=new mango(950,150,30);
	mango6=new mango(1000,200,30);
	mango7=new mango(930,230,30);
	mango8=new mango(1170,120,30);
	mango9=new mango(1230,200,30);
	mango10=new mango(1120,240,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new Stone(230,420,30);

	slingshot=new SlingShot(stoneObj.body, {x:225,y:370});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,290,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();

  stoneObj.display();

  slingshot.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stoneObj.body, {x:210, y:375})
		slingshot.attach(stoneObj.body);
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if (distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body, false);
		}	
}