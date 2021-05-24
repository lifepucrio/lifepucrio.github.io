var tex = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  if (tex==true) {
    background(255,0,0);
  } else {
    background(0,255,0);
  }
}

function mousePressed(){
  if (tex==true){
    tex = false;
  }else {
    tex = true;
  }

}
