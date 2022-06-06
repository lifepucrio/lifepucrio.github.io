var fala = new p5.SpeechRec('en-US',mostraResultado);
fala.continuous = true;
fala.interimResults = false;
let bodoni,rubik;

function preload () {
bodoni = loadFont('assets/BodoniXT.ttf');
rubik = loadFont('assets/rubik-one-regular.ttf');
}

function setup() {
createCanvas (windowWidth, windowHeight);
background(255);
fill(25);
textSize(20);
  textAlign(CENTER);
  textFont(rubik);
  text('FALE UMA COR (EM INGLÊS)', width / 2, height / 2);
  fala.start();
  fala.onResult = mostraResultado;
  

}


function draw() {

}

function mostraResultado() {
  if (fala.resultValue) {
    let cor = fala.resultString.split(' ').pop().toUpperCase();
    background(cor);
    text(cor, width / 2, height / 2);
    console.log(cor);
}
}
