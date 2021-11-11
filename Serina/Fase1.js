function fase1 (){

  //escrever texto do Bah chamando
  textAlign (CENTER);
  textFont(fonte1);
  textSize(14);
  fill(255,200);
  text ("Serina, suba, estou a sua espera", width/2, 40);
  
 //posicionar imagens
 image (imagemSereia, sereiaX, sereiaY, 100, 120);
 
 image (imagemObstaculo1, obs1X, obs1Y, 50, 50);
 image (imagemObstaculo2, obs2X, obs2Y, 65, 50);
 
  
  if (sereiaY > height-120) {
    sereiaY = height-120;
  }
  
  sereiaX = width/2;
 
  //movimento do obstáculo 1
   obs1X = obs1X + velo1X;
   
   if (obs1X > width+50) { 
     velo1X = -velo1X;
   }
   
   if (obs1X < -100) {
     velo1X = -velo1X;
   }
   
   //colisao com obstáculo 1
   if (obs1Y > sereiaY-65 && obs1Y < sereiaY+65) {
     if (sereiaX > obs1X-30 && sereiaX < obs1X+30) {
     sereiaY = height-120;
     }
   }
   
   
   //movimento do obstáculo 2
   obs2X = obs2X + velo2X;
   
   if (obs2X > width+50) {
     velo2X = -velo2X;
   }
   
   if (obs2X < -100) {
     velo2X = -velo2X;
   }
   
   //colisao com obstáculo 2
   if (obs2Y > sereiaY-66 && obs2Y < sereiaY+66) {
     if (sereiaX > obs2X-33 && sereiaX < obs2X+33) {
     sereiaY = height-120;
     }
   }
   
 
  //Ir para a fase final
  if (sereiaY < 10) {
    sereiaY = height-120;
     fase = 2;
  } 
  
 
}


 //MOVIMENTO DA SEREIA NO MAR
function touchMoved(){
  if (fase==1){
     sereiaY = mouseY;
  }
}
