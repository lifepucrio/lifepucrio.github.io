document.oncontextmenu = () => false;
let angle = 4.3;

function preload() {
  sol = loadImage('sol.png');
  merc = loadImage('mercurio.jpeg');
  venus = loadImage('venus.jpeg');
  terra = loadImage('terra.jpeg');
  marte = loadImage('marte.jpeg');
  jupiter = loadImage('jupiter.jpeg');
  saturn = loadImage('saturn.jpeg');
  ring = loadImage('ring.jpeg');
  urano = loadImage('urano.jpeg');
  pluto = loadImage ('pluto.png');
  netunadas = loadImage('netuno.jpeg');
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  createEasyCam();
}

function draw() {
  background(0);
//directionalLight(255,255,0,-2000,0,0);
  ambientLight(255);
  //fill(0,0,150);
  specularMaterial(255);
  
  
  
  noStroke();
  texture(sol);
  push();
translate(-1100, 0, 0);
  sphere (500);
  pop();
  
    noStroke();
  texture(merc);
  push();
translate(-440, 0, 0);
  sphere (20);
  pop();
  
      noStroke();
  texture(venus);
  push();
translate(-300, 0, 0);
  sphere (40);
  pop();
  
        noStroke();
  
  texture(terra);
  push();
translate(-130, 0, 0);
  sphere (50);
  pop();
  
  rotate =+ 0.07;
  
          noStroke();
  texture(marte);
  push();
translate(20, 0, 0);
  sphere (25);
  pop();
  
          noStroke();
  texture(jupiter);
  push();
translate(400, 0, 0);
  sphere (130);
  pop();
  
    push();
translate(900, 0, 0);
  texture(saturn);
  sphere (100);
  rotateX(angle);
  texture(ring);
  torus(140,10);
  pop();
  
  
  
            noStroke();
  texture(urano);
  push();
translate(1300, 0, 0);
  sphere (80);
pop();
  
            noStroke();
  texture(netunadas);
  push();
translate(1600, 0, 0);
  sphere (70);
pop();
  
              noStroke();
  texture(pluto);
  push();
translate(1900, 0, 0);
  sphere (10);
pop();
}
