var RobotoRegular;
var RobotoBold;

function preload(){
RobotoRegular=loadFont("Roboto-Regular.ttf");
RobotoBold=loadFont("Roboto-Bold.ttf");
}

function setup(){
createCanvas (windowWidth,windowHeight);
background (238,240,245);
rectMode(CENTER);
frameRate(10);
}

function draw (){

fill(248,81,121);
textFont(RobotoRegular);
textAlign(CENTER);	
textSize(28);
text("START PRESSING!",width/2,height/2);
}

function mousePressed(){
 fill (random(150,255),random(100,150),random(100,150));

ellipseMode(CENTER);
stroke(238,240,245);
circle(random(10)+mouseX,random(10)+mouseY,random(50,100));
}