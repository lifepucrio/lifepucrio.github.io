//Objetivo: transformar fase 1 do jogo serina em jogo mobile com toque e tela responsiva

//Como jogar? Pressione a tela para mover e arrastar o personagem para cima/baixo
  //Objetivo do jogo: Chegar até a parte de cima da tela sem colidir com os animais marinhos


//usar fontes
var fonte1;
var fonte2;

//imagens
var imagemSereia;
var imagemObstaculo1;
var imagemObstaculo2;
var imagemBah;
var imagemSerinaBah;
var imagemLogo;

//valores dos movimentos
var sereiaX = 250;
var sereiaY = 600;

var obs1X = 10;
var obs1Y = 380;
var velo1X = 12;

var obs2X = 100;
var obs2Y = 180;
var velo2X = 13; 

var obs3X = 400;
var obs3Y = 100;
var velo3X = 16; 

var fase = 1;


function preload(){

  //carregar imagens
   imagemSereia = loadImage('data/serina.png');
   imagemObstaculo1 = loadImage('data/estrela.png');
   imagemObstaculo2 = loadImage('data/peixe.png');
   imagemBah = loadImage('data/Bah.jpg');
   imagemSerinaBah = loadImage('data/BahSerina.jpg');
   imagemLogo = loadImage('data/logo.png');
   
   
    //carregar fontes
   fonte1 = loadFont('data/Raleway-BoldItalic.ttf');
   fonte2 = loadFont('data/Raleway-Bold.ttf');

}



function setup() {
 createCanvas(displayWidth, displayHeight); //para fazer se adequar a tela de cada celular
 imageMode(CENTER);
}


function draw() {
   background (0,100,200);
  
  if(fase==1){
    fase1();
  }
  
  if(fase==2){
    final();
  }
  
}


//por Rayane Pinheiro
