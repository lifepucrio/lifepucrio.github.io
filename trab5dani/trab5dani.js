//Exemplo utilizando a biblioteca p5.easycam


function preload(){
textura = loadImage("assets/terra.jpg");
textura2 = loadImage("assets/terra2.jpg");
bool = true;
}

function setup() { 
  createCanvas(windowWidth, windowHeight, WEBGL);
  // inicializar a camera
  createEasyCam();
  // desabilitar o menu contextual padrão que aparece
  // no click com o botão direito do mouse
  // para poder usar a função de zoom da biblioteca
  document.oncontextmenu = function() { return false; }
  noStroke();
} 

function draw(){
  background(0);
  lights();
  texture(textura);
  sphere(200);
}

function mousePressed(){
  if (bool){textura = loadImage("assets/terra2.jpg"); bool = false;}
  else {textura = loadImage("assets/terra.jpg"); bool = true;}



}
