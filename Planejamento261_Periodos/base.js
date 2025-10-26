function base(){
  fill(255, 100);
  //stroke(255, 100);
  //strokeWeight(10);
  noStroke();
  //rects dias
  rect(posSegunda-espaco, pos7h-espaco, largRect, 620,15);
  rect(posTerca-espaco, pos7h-espaco, largRect, 620,15);
  rect(posQuarta-espaco, pos7h-espaco, largRect, 620,15);
  rect(posQuinta-espaco, pos7h-espaco, largRect, 620,15);
  rect(posSexta-espaco, pos7h-espaco, largRect, 620,15);

  noStroke();
  fill(0);
  textFont("Helvetica");
  textStyle(BOLD);
  text('SEGUNDA',posSegunda+10,pos7h-20);
  text('TERÇA',posTerca+10,pos7h-20);
  text('QUARTA',posQuarta+10,pos7h-20);
  text('QUINTA',posQuinta+10,pos7h-20);
  text('SEXTA',posSexta+10,pos7h-20);
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
