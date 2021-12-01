// Reconhecimento facial usando a biblioteca clmtracker 
// https://github.com/auduno/clmtrackr

var captura;
var reconhecimento;
var w = 640, h = 480;
var filtro = 0;
var pixelCor;
var brightestColor = 0;
var saturatedColor = 0;


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
    //print(d);
    let c = pontosDoRosto[20];
    let e = pontosDoRosto[63];
    
    let d2 = (((c[0]-e[0])^2) - ((c[1]-e[1])^2))^(1/2);
    print(d2);
  
    if (filtro == 1)  {
    filter(INVERT);
    }
    if (filtro == 2)  {
    filter(POSTERIZE, 3);
  }
    if (d > 23){
      filtro = 1;
    } 
    else if ( d2 > 27){
    filtro = 2;
    }
    else {
      filtro = 0; 
    }
  }
}



//46 cima 53 baixo
