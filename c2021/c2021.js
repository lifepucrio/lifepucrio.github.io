


function setup() {
  createCanvas(windowWidth, windowHeight);
  criaBotoes();
  //colorMode(RGB, 255);
  noStroke();
}

function draw() {
  background(255);
  mostra();
  fill(0);
  textSize(20);
  text('Currculo 2007',40,50);
  text('Curriculo Ampliado',posX,50);
  textSize(15);
  text('Marque aqui as disciplinas que você já cursou',40,70);
  
}

function funcDSG1001() {
  if (this.checked()) {
    valDSG3001=true;
    valDSG3011=true;
    valDSG3203=true;
  } else {
    valDSG3001=false;
    valDSG3011=false;
    valDSG3203=false;
  }
}

function funcART1050() {
  if (this.checked()) {
    valDSG3204=true;
  } else {
    valDSG3204=false;
  }
}

function funcART1052() {
  if (this.checked()) {
    valART1052=true;
  } else {
    valART1052=false;
  }
}

function funcDSG1101() {
  if (this.checked()) {
    valDSG3101=true;
  } else {
    valDSG3101=false;
  }
}
