function salas() {
  for (let i=0; i<tabela.getRowCount(); i++) {
    sala = tabela.get(i, 'SALA');
    if (sala.includes(qualSala)) {
      console.log(sala);
      for (let x=7; x<=11; x++) {
        dia=tabela.get(i, x);
        if (dia!= null && dia != '') {
          console.log('dia:'+dia);
          let horario = tabela.get(i, 'HORA');
          let inicio = horario.substring(0, 2);
          let fim = horario.substring(3, 5);
          let duracao=float(fim)-float(inicio);
          console.log('duração:'+duracao);
          console.log('inicio:'+int(inicio));
          if (duracao==2) {
            altRect=90;
          }
          if (duracao==3) {
            altRect=140;
          }
          if (duracao==4) {
            altRect=190;
          }
          if (duracao==5) {
            altRect=240;
          }
          if (duracao==6) {
            altRect=290;
          }
          if(dia==2){
            posRectX=posSegunda;
          }
          if(dia==3){
            posRectX=posTerca;
          }
          if(dia==4){
            posRectX=posQuarta;
          }
          if(dia==5){
            posRectX=posQuinta;
          }
          if(dia==6){
            posRectX=posSexta;
          }
          if (inicio=='07') {
            posRectY=pos7h;
          }
          if (inicio=='08') {
            posRectY=pos8h;
          }
          if (inicio=='09') {
            posRectY=pos9h;
          }
          if (inicio=='10') {
            posRectY=pos10h;
          }
          if (inicio=='11') {
            posRectY=pos11h;
          }
          if (inicio=='12') {
            posRectY=pos12h;
          }
          if (inicio=='13') {
            posRectY=pos13h;
          }
          if (inicio=='14') {
            posRectY=pos14h;
          }
          if (inicio=='15') {
            posRectY=pos15h;
          }
          if (inicio=='16') {
            posRectY=pos16h;
          }
          if (inicio=='17') {
            posRectY=pos17h;
          }
          fill(18, 200, 218, 100);
          noStroke();
          //stroke(100);
          
          rect(posRectX+15, posRectY, largRect-30, altRect,10);
          fill(0);
          noStroke();
          let codigo=tabela.get(i, 'CODIGO');
          let disciplina=tabela.get(i, 'DISCIPLINA');
          let turma=tabela.get(i, 'TUR');
          let hora=tabela.get(i, 'HORA');
          let professor=tabela.get(i, 'PROFESSOR');
          textStyle(NORMAL);
          text(codigo+'\n'+disciplina+'\n'+turma+'\n'+hora+'\n'+professor,
            posRectX+25, posRectY+10, largRect-50, 160);
        }
      }
    }
  }
}
