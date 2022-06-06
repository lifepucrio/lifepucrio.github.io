let x;
var musica;
var nave;

function preload(){
  nave = loadImage('data/xwing.png');
}        

function setup() {
  noCursor();
  createCanvas(1366, 657);
  noStroke();
  x=width;
  imageMode(CENTER);
}

function draw() {
  background (0,0,0);
  fill(255,255,255);
  ellipse(random(x),100,200,5);
  ellipse(random(x),50,200,5);
  ellipse(random(x),360,200,5);
  ellipse(random(x),500,200,5);
  ellipse(random(x),600,200,5);
  image(nave,mouseX,mouseY, 250,250);
  ellipse(random(x),280,200,5);
  ellipse(random(x),150,200,5);
  
}  
