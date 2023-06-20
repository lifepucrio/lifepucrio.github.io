function base(){
  fill(255, 100);
  stroke(220);
  strokeWeight(10);
  //rects dias
  rect(posSegunda, 140, largRect, 620,20);
  rect(posTerca, 140, largRect, 620,20);
  rect(posQuarta, 140, largRect, 620,20);
  rect(posQuinta, 140, largRect, 620,20);
  rect(posSexta, 140, largRect, 620,20);

  noStroke();
  fill(0);
  textStyle(NORMAL);
  text('SEGUNDA',posSegunda+10,130);
  text('TERÇA',posTerca+10,130);
  text('QUARTA',posQuarta+10,130);
  text('QUINTA',posQuinta+10,130);
  text('SEXTA',posSexta+10,130);
  text('7h',50,pos7h);
  text('8h',50,pos8h);
  text('9h',50,pos9h);
  text('10h',50,pos10h);
  text('11h',50,pos11h);
  text('12h',50,pos12h);
  text('13h',50,pos13h);
  text('14h',50,pos14h);
  text('15h',50,pos15h);
  text('16h',50,pos16h);
  text('17h',50,pos17h);
  text('18h',50,pos18h);
  text('19h',50,pos19h);
}
