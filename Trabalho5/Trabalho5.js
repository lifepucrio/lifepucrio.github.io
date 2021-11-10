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
var pontuacao = 0;

function preload() {
  fonte = loadFont('assets/Amaranth-Regular.ttf');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  fill(255);
  textFont(fonte);
  textSize(42);
  textAlign(CENTER);
  text("Complete a Música", width/2, height/2);
  textSize(25);
  text("clique para começar", width/2, height/2+80);


  //configurar a linguagem para português do Brasil
  minhaVoz.setLang('pt-BR');
  //escolher a voz
  minhaVoz.setVoice('Google português do Brasil');
  //minhaVoz.listVoices();
}

function draw() {
}

function mostraResultado() {
  //se tiver reconhecido alguma coisa
  if (meuRec.resultValue==true) {

    if (qualResposta==1) {
      background(130, 216, 129);
      if (meuRec.resultString=='eu sou o sol') {
        fill(255);
        textSize(42);
        text('acertou parça', width/2, height/2);
        textSize(22);
        text('clique para continuar', width/2, height/2+200);
        minhaVoz.speak('acertou parça');
        // minhaVoz.onEnd = setTimeout(fala, 3000);
        pontuacao = pontuacao + 1;
      } else {
        background(170, 86, 86);
        fill(255);
        textSize(32);
        text('errou parça, a resposta certa é:', width/2, height/2-50);
        text('eu sou o sol', width/2, height/2);
        textSize(22);
        text('clique para continuar', width/2, height/2+200);
        minhaVoz.speak('errou parça, a resposta certa é: eu sou o sol');
      }
    }

    if (qualResposta==2) {
      background(130, 216, 129);
      if (meuRec.resultString=='fumar') {
        fill(255);
        textSize(42);
        text('acertou parça', width/2, height/2);
        textSize(22);
        text('clique para continuar', width/2, height/2+200);
        minhaVoz.speak('acertou parça');
        pontuacao = pontuacao + 1;
      } else {
        background(170, 86, 86);
        fill(255);
        textSize(32);
        text('errou parça, a resposta certa é:', width/2, height/2-50);
        text('fumar', width/2, height/2);
        textSize(22);
        text('clique para continuar', width/2, height/2+200);
        minhaVoz.speak('errou parça, a resposta certa é: fumar');
      }
    }

    if (qualResposta==3) {
      background(130, 216, 129);
      if (meuRec.resultString=='o tubarão vai te pegar') {
        fill(255);
        textSize(42);
        text('acertou parça', width/2, height/2);
        textSize(22);
        text('clique para continuar', width/2, height/2+200);
        minhaVoz.speak('acertou parça');
        pontuacao = pontuacao + 1;
      } else {
        background(170, 86, 86);
        fill(255);
        textSize(32);
        text('errou parça, a resposta certa é:', width/2, height/2-50);
        text('o tubarão vai te pegar', width/2, height/2);
        textSize(22);
        text('clique para continuar', width/2, height/2+200);
        minhaVoz.speak('errou parça, a resposta certa é: o tubarão vai te pegar');
      }
    }
  }
  qualResposta++;
}


function touchStarted() {
  fala();
  
}

function fala() {
  background(255, 0, 0);
  if (qualPergunta==1) {
    background(234, 196, 2);
    fill(255);
    textSize(32);
    text("quando a chuva passar, ", width/2, height/2-50);
    text("quando o tempo abrir,", width/2, height/2);
    text("abra a janela e veja", width/2, height/2+50);
    minhaVoz.speak('quando a chuva passar, quando o tempo abrir, abra a janela e veja');
    minhaVoz.onEnd = setTimeout(ouve, 5500);
  }
  if (qualPergunta==2) {
    background(234, 196, 2);
    fill(255);
    textSize(42);
    text("é proibido...", width/2, height/2);
    minhaVoz.speak('é proibido');
    minhaVoz.onEnd = setTimeout(ouve, 1500);
  }
  if (qualPergunta==3) {
    background(234, 196, 2);
    fill(255);
    textSize(32);
    text("Andou na prancha, cuidado", width/2, height/2);
    minhaVoz.speak('Andou na prancha, cuidado');
    minhaVoz.onEnd = setTimeout(ouve, 3000);
  }

  if (qualPergunta==4) {
    background(2, 132, 234);
    fill(255);
    textSize(32);
    text("Sua pontuação final é ", width/2, height/2-50);
    textSize(42);
    text(pontuacao +"/3", width/2, height/2);
    minhaVoz.speak("Sua pontuação final é" + pontuacao);
  }
  qualPergunta++;
}

function ouve() {
  meuRec.start();
  fill(240, 0, 0);
  noStroke();
  textSize(30);
  ellipse(width/2-100, height/2+190, 30, 30);
  text("Gravando...", width/2, height/2+200);
}
