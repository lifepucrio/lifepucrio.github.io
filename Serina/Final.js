function final () {
  background (0,100,200);
  image (imagemSerinaBah, width/2, 300, 500, 600);
  
  textAlign (CENTER);
  textFont(fonte1);
  textSize(16);
  fill(255);
  text ('Quando o sol encontra a água no fim do oceano,', width/2, 520);
  text ('é um sinal de que Serina e Bah estão bem.', width/2, 540);
  
   textFont(fonte2);
   textSize(18);
   text ('Toque na tela para recomeçar', width/2, 580);
  
 /* botao = createButton ('RECOMEÇAR');
   botao.position(width-150,650);//posição
   botao.style('background-color','#ffffff');//cor de fundo
   botao.style('font-size', '13px');
   botao.style('font-family', 'Helvetica');//mudar tipo de fonte
   botao.style('padding','10px');//espaço interno
   botao.style('border-radius','10px');//canto arredondado
   //executar a função (recomeçar)
  botao.mousePressed(recomecar);
  //botao.touchStarted(recomecar);*/
 
}


function touchStarted(){
  if(fase==2){
    fase = 1;
  }
}
