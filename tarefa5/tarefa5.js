var mostrar1= false;
var mostrar2= false;
//var som;
var andaX = mouseX;
var andaX2 = mouseX;

//function preload(){
  //som= loadSound('assets/Enderman_idle2.ogg');
//}

function setup() {

  createCanvas(600,800);
  //som.playMode('restart');
  noStroke();
}


function draw() {
  andaX = mouseX;
  andaX2 = mouseX;
  
  background('white');//branco
  
   if(mouseX>160){
   andaX=160;
 }
   if(mouseX<100){
   andaX=100;
 
 }
 
   if(mouseX>460){
   andaX2=460;
 }

  if(mouseX<400){
   andaX2=400;
 }
 
  //preto
  fill('black');
  rect(0,0,300,400);
  //olho verde bg
  fill(0,255,0);
  rect(100,70,100,40);
  //olho verde pupila
  fill(0,128,0);
  rect(andaX,70,40,40);
  //olho verm
  fill(200,0,0);
  rect(400,70,100,40);
  //pupila vermelho
  fill('red');
  rect(andaX2,70,40,40);
  
  

 

  if(mostrar1==true){
    fill('white');
    textSize(40);
    textFont('Comic Sans MS');
    text('Ran',200,250);
  } 
  else if (mostrar2==true){
    fill('black');
    textSize(40);
    textFont('Comic Sans MS');
    text('boo',350,250);
    
  }
  
}


function mousePressed(){
  //if(som.isPlaying()){
    //som.pause();
  //}
  
 // else{
 //som.play();
  //}
  
  
  if(mouseX < 300){
   mostrar1= true;
   mostrar2= false;
 }
 
  else if(mouseX > 300){
   mostrar1=false;
   mostrar2=true;
 }

}

//8240
