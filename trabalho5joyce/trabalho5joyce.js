var captura;
var rotX=0;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  //criar a captura de video
  captura = createCapture(VIDEO);
  captura.size(640, 480);
  //usar o comando hide porque a captura é um elemento separado no DOM
  //delete a linha abaixo para ver a diferença
  captura.hide();
  noStroke();
}

function draw() {
  background(0);
  
  texture(captura);
  translate(mouseX-400,mouseY-300,0);
  rotateX(radians(rotX));
  box(300);
  rotX++;
}
