//Exemplo utilizando a biblioteca p5.easycam
var tex = true;

function preload(){
textura1 = loadImage("assets/terra.jpg");
textura2 = loadImage("assets/terra2.jpg");

}

function setup() { 
  createCanvas(windowWidth, windowHeight, WEBGL);
  // inicializar a camera
  //createEasyCam();
  // desabilitar o menu contextual padrão que aparece
  // no click com o botão direito do mouse
  // para poder usar a função de zoom da biblioteca
  //document.oncontextmenu = function() { return false; }
  noStroke();
} 

function draw(){
  background(0);
  lights();
  if(tex==true){
  texture(textura1);
  }else{
    texture(textura2);
    }
  sphere(200);
}


function touchStarted(){
  if (tex==true){
    tex = false;
  }else {
    tex = true;
  }

}
