//exemplo utilizando a biblioteca p5.speech
//https://idmnyu.github.io/p5.js-speech/

// criar um novo objeto speech
var minhaVoz = new p5.Speech();
//criar um novo objeto speech
//especificar a lingua e qual função chamar
//quando obter resultado da fala
var meuRec = new p5.SpeechRec('pt-BR', mostraResultado);
//meuRec.continuous = true;
var qualPergunta=1;
var qualResposta=1;
var perguntando=true;


function setup() {
  createCanvas(800, 400);
  background(255);
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text("clique para começar", width/2, height/2);
  //configurar a linguagem para português do Brasil
  minhaVoz.setLang('pt-BR');
  //escolher a voz
  minhaVoz.setVoice(14);
}

function draw() {
  
}

function mostraResultado() {
  //se tiver reconhecido alguma coisa
  if (meuRec.resultValue==true) {
    background(192, 255, 192);
    if (qualResposta==1) {
      //exibir o texto que foi reconhecido
      text('olá '+meuRec.resultString, width/2, height/2);
      minhaVoz.speak('olá '+meuRec.resultString);
      minhaVoz.onEnd = setTimeout(fala, 3000);
    }
    if (qualResposta>=2) {
      background(192, 255, 192);
      if (meuRec.resultString=='sim') {
        text('eu também gosto de pizza!', width/2, height/2);
        minhaVoz.speak('eu também gosto de pizza!');
      } else {
        text('que pena que você não gosta de pizza!', width/2, height/2);
        minhaVoz.speak('que pena que você não gosta de pizza!');
      } 
    }
  }
  qualResposta++;
}

function touchStarted() {
  fala();
}

//function touchStarted() {
//  fala();
//}

function fala() {
  background(255, 0, 0);
  if (qualPergunta==1) {
    background(255, 0, 0);
    text("qual é o seu nome?", width/2, height/2);
    minhaVoz.speak('qual é o seu nome?');
    minhaVoz.onEnd = setTimeout(ouve,3000);
  }
  if (qualPergunta==2) {
    background(255, 0, 0);
    text("você gosta de pizza?", width/2, height/2);
    minhaVoz.speak('você gosta de pizza?');
    minhaVoz.onEnd = setTimeout(ouve,3000);
  }
  qualPergunta++;
}

function ouve(){
  meuRec.start();
  ellipse(20,20,20,20);
}
