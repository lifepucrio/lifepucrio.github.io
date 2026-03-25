function coordenadasDiaHoraDuracao(dia, inicio, fim) {
  //dia
  if (dia==2) {
    posRectX=posSegunda;
  }
  if (dia==3) {
    posRectX=posTerca;
  }
  if (dia==4) {
    posRectX=posQuarta;
  }
  if (dia==5) {
    posRectX=posQuinta;
  }
  if (dia==6) {
    posRectX=posSexta;
  }
  //inicio
  if (inicio==7) {
    posRectY=pos7h;
  }
  if (inicio==8) {
    posRectY=pos8h;
  }
  if (inicio==9) {
    posRectY=pos9h;
  }
  if (inicio==10) {
    posRectY=pos10h;
  }
  if (inicio==11) {
    posRectY=pos11h;
  }
  if (inicio==12) {
    posRectY=pos12h;
  }
  if (inicio==13) {
    posRectY=pos13h;
  }
  if (inicio==14) {
    posRectY=pos14h;
  }
  if (inicio==15) {
    posRectY=pos15h;
  }
  if (inicio==16) {
    posRectY=pos16h;
  }
  if (inicio==17) {
    posRectY=pos17h;
  }
  //duracao
  let duracao=fim-inicio;
  if (duracao==2) {
    altRect=90+espaco*1.5;
  }
  if (duracao==3) {
    altRect=140+espaco*1.5;
  }
  if (duracao==4) {
    altRect=190+espaco*1.5;
  }
  if (duracao==5) {
    altRect=240+espaco*1.5;
  }
  if (duracao==6) {
    altRect=290+espaco*1.5;
  }
}
