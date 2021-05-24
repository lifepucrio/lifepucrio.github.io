var foguete;
var textura;


function preload() {
  foguete = loadModel("assets/rocket.obj");
  textura2 = loadImage("assets/lua.jpg");
  textura = loadImage("assets/brilho.jpg");
  terra = loadImage("assets/terra.jpg");

}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  noStroke();
}


function draw() {
  background(0);
  lights();
  
  push();
  //criar luz pontual
  pointLight(255, 255, 255, mouseX-300,mouseY-300, 400);
  ambientLight(100,0,255);
  rotateX(radians(mouseX));
  rotateY(frameCount*0.01);
  translate(mouseX-300,mouseY-300,0);
  rotateX(radians(180));
  scale(0.3);
  fill(255);
 // texture(textura);
  model(foguete);
  pop();
  
  push();
  pointLight(0,0,200);
  rotateX(radians(30));
  rotateY(frameCount*0.005);
  texture(terra);
  sphere(120);
  pop();
  
  push();
  rotateX(radians(30));
  rotateY(frameCount*0.01);
//  texture(rs);
  translate(-700, -700, -300);
  texture(textura2);
  sphere(100);
  pop();

}
