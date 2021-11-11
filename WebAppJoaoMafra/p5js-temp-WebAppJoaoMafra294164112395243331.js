var r;
var g;
var b;
var a;
let botao;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  botao = createButton("limpar");
  botao.position(displayWidth/2, displayHeight/2 + 300);
  botao.touchStarted(clear);
}

function clear(){
createCanvas(375, 667);
  background(0);
  botao = createButton("limpar");
  botao.position(130, 600);
  botao.touchStarted(clear);
}

function touchStarted() {
  
  //r = random(255);
  //g = random(100, 200);
  //b = random(100);
  //a = random(200, 255);
  // let colors = [r, g, b, a]; tirar duvida com o Bonelli
  
  let colors = ["yellow", "red", "green", "blue", "white"];
  let color = random(colors);
  stroke(color);
  fill(color);
  ellipse(random(width), random(height), random(100), random(50));
  strokeWeight(random(20));
  triangle(random(width), random(height), random(100), random(50));
  strokeWeight(random(20));
  rect(random(width), random(height), random(100), random(100));
  strokeWeight(random(20));
}
