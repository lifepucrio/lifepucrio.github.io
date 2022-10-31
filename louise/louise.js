let x, y, r, g, b, musica;

function preload( ) {
  musica = loadSound('musica.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  musica.playMode('restart');
}


function draw() {
  r= random(255);
  g= 0;
  b=random(255);
  x=random(displayWidth);
  y=random(displayHeight);
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24);
}
function mousePressed() {
  if (musica.isPlaying()) {
    musica.pause();
  } else {
    musica.play();
  }
}
