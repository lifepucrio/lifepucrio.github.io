//Usando o comando get() para ler a cor dos pixels

var elipseColor = [];
var imagem;
var pixelCor;

function preload() {
  //carregar a imagem
 imagem = loadImage('data/water.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  button = createButton('Random Filters');
  button.position(windowWidth/2 - 50, windowHeight - 200);
  button.mousePressed(randomizeColor);
  
  setupVisualButton();
  
  randomizeColor();
    
}

function draw() {
  
   //Sets up image loading and pixels  
   setupImage();
   
   //Sets up random rect above image to create filter
   setupRect();
}

function setupRect() {
   fill(elipseColor[0], elipseColor[1], elipseColor[2], 80);
   rect(0, 0, windowWidth, windowHeight);
}

function setupImage() {
  imagem.loadPixels();
  
  for (let x=0; x<windowWidth; x++) {
    for (let y = 0; y<windowHeight; y++) {
      var pix = imagem.get(x, y);
      set(x, y, color(0, 0, blue(pix)));  
    }
  }
  updatePixels();
}

function setupVisualButton() {
  
   button.style('background-color','#ffffff');//cor de fundo
   button.style('padding','10px');//espaço interno
   button.style('border-radius','10px');//canto arredondado
   button.style('border','none');//sem borda
   button.style('outline','none');//sem outline
   button.style('cursor','pointer');//mudar o cursor
   button.style('height','40px');//altura do botão

}

function randomizeColor() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  elipseColor = [r, g , b];
  setupRect();
}
