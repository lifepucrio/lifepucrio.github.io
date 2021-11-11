//exemplo utilizando a biblioteca p5.speech

// criar um novo objeto speech
var myVoice = new p5.Speech();

function setup() {
  createCanvas(displayWidth,displayHeight);
  background(255,255,0);
  //myVoice.setLang('pt-BR');
  
  
}


function draw() {
  //nesse exemplo não tem nada na função draw
}

function touchStarted(){
  //myVoice.listVoices();
  myVoice.setVoice('Google português do Brasil');
  ellipse(mouseX,mouseY,40,40);
  //configurar a voz
  //myVoice.setRate(random(0.1,2));
  //myVoice.setPitch(random(0.1,2));
  //falar
  myVoice.speak('Olá Beatriz! Eu falo português sim!');
}
