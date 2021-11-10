// Reconhecimento facial usando a biblioteca clmtracker 
// https://github.com/auduno/clmtrackr

var captura;
var reconhecimento;
var w = 640, h = 480;
var filtro = 0;
var pixelCor;
var brightestColor = 0;
var saturatedColor = 0;

//function FazerFiltro(){
//  captura.loadPixels();
//  var brightestX = 0; // Coordenada X do melhor pixel até agora
//  var brightestY = 0; // Coordenada X do melhor pixel até agora
//  var brightestValue = 0; // Brilho do pixel mais brilhante
//  var saturatedValue = 0;
//  var saturatedX = 0;
//  var saturatedY = 0;

  
//  var y = 0;
//  var x = 0;
//  var pixelValue;
//  var pixelBrightness;
//  var pixelSaturation;

//   //ler a cor de todos os pixels da imagem através do duplo for()
//  for (y = 0; y < captura.height; y+=10) {
//    for (x = 0; x < captura.width; x+=10) {
//       pixelValue = captura.get(x,y);
//       pixelBrightness = brightness(pixelValue);
//       pixelSaturation = saturation(pixelValue);
//      if (pixelSaturation > saturatedValue && pixelSaturation < 100) {
//        saturatedColor = pixelValue;
//        saturatedValue = pixelSaturation;
        
//        saturatedX = x;
//        saturatedY = y;
      
//      }
//    }
//  }
    
    
//    for (y = 0; y < captura.height; y+=1) {
//      for (x = 0; x < captura.width; x+=1) {
//        pixelValue = captura.get(x,y);
//        pixelSaturation = saturation(pixelValue);
        
//        if (pixelSaturation > 23) {
//          set(x,y, saturatedColor);
//        }
//        else  {
//        set(x, y, color(0, 0, 0));
//        }
//      }
//    }
    
  
//  stroke(0);
//  fill(saturatedColor);

//  ellipse(saturatedX, saturatedY, 20, 20);
//  console.log(saturatedColor);
  
//  rect(270, height - 100, 100, 100);
  
//  updatePixels();
//}

function setup() {
  captura = createCapture();
  createCanvas(w, h);
  captura.size(w, h);
  captura.hide();
  reconhecimento = new clm.tracker();
  reconhecimento.init();
  reconhecimento.start(captura.elt);
  
  
  colorMode(HSB);
  colorMode(RGB);
}

function draw() {
  //colocar a imagem da captura na tela
  image(captura, 0, 0, w, h);
  //identificar todos os pontos do rosto, e coloca-los num array
  //chamado 'pontosDoRosto'
  var pontosDoRosto = reconhecimento.getCurrentPosition();
  //se foram identificados os pontos do rosto
  if (pontosDoRosto.length > 0) {
    //criar o contorno
    noFill();
    stroke(255, 200, 0);
    beginShape();
    for (var i = 0; i < pontosDoRosto.length; i++) {
        vertex(pontosDoRosto[i][0], pontosDoRosto[i][1]); // i é o numero do ponto
    }                    //[ponto][x]     //[ponto][y]
    endShape();
    //criar o texto com os pontos
    noStroke();
    for (var i = 0; i < pontosDoRosto.length; i++) {
        fill(255,0,0);
        text(i, pontosDoRosto[i][0], pontosDoRosto[i][1]);
    }
    
    let a = pontosDoRosto[46];
    let b = pontosDoRosto[53];
  
    let d = (((a[0]-b[0])^2) - ((a[1]-b[1])^2))^(1/2);
    print(d);
  
    if (d > 21){
      filtro = 1;
    } else{
      filtro = 0;
      
    }
  }
  if (filtro == 1)  {
    //FazerFiltro();
    filter(INVERT);
    //fill(255, 0, 0, 100);
    //rect(0, 0, 640, 480);
  }
}



//46 cima 53 baixo
