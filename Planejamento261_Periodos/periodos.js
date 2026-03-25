function periodos() {
  criaCalendario();

  //exibe o calendario
  for (let pos=0; pos<calendario.length; pos+=33) {
    //se identifica aula no calendario

    //calcula larguras
    if (calendario[pos+2]!=" ") {
      largRectAula=largRect-espaco*2;
      if (calendario[pos+8]!=" ") {
        largRectAula=largRect/2-espaco*1.5;
        if (calendario[pos+14]!=" ") {
          largRectAula=largRect/3-espaco*1.3;
          if (calendario[pos+20]!=" ") {
            largRectAula=largRect/4-espaco*1.2;
            if (calendario[pos+26]!=" ") {
              largRectAula=largRect/5-espaco*1.2;
            }
          }
        }
      }


      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+3];
      //console.log(inicio);
      coordenadasDiaHoraDuracao(dia, inicio, fim);
      escolheCor(pos+2);
      noStroke();
      rect(posRectX, posRectY, largRectAula, altRect, 10);
      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);
      textSize(11);
      text(calendario[pos+2], posRectX+espaco, posRectY+20);
      textStyle(NORMAL);
      textSize(8);
      text(calendario[pos+4], posRectX+espaco, posRectY+25, largRectAula-20, 160);
      text(calendario[pos+5], posRectX+espaco, posRectY+85);
      //text(calendario[pos+6], posRectX+espaco, posRectY+82);
    }



    //segunda posição
    if (calendario[pos+8]!=" ") {
      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+9];
      coordenadasDiaHoraDuracao(dia, inicio, fim);


      escolheCor(pos+8);


      noStroke();
      rect(posRectX+largRectAula+espaco, posRectY, largRectAula, altRect, 10);
      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);
      textSize(11);
      text(calendario[pos+8], posRectX+largRectAula+espaco*2, posRectY+20);
      textStyle(NORMAL);
      textSize(8);
      text(calendario[pos+10], posRectX+largRectAula+espaco*2, posRectY+25, largRectAula-20, 160);
      //text(calendario[pos+10], posRectX+largRectAula+espaco*2, posRectY+85);
      text(calendario[pos+11], posRectX+largRectAula+espaco*2, posRectY+85);
    }

    ////terceira posição
    if (calendario[pos+14]!=" ") {
      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+15];
      coordenadasDiaHoraDuracao(dia, inicio, fim);
      escolheCor(pos+14);
      noStroke();
      rect(posRectX+largRectAula*2+espaco*2, posRectY, largRectAula, altRect, 10);
      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);
      textSize(11);
      text(calendario[pos+14], posRectX+largRectAula*2+espaco*3, posRectY+20);
      textStyle(NORMAL);
      textSize(8);
      text(calendario[pos+16], posRectX+largRectAula*2+espaco*3, posRectY+25, largRectAula-20, 160);
      text(calendario[pos+17], posRectX+largRectAula*2+espaco*3, posRectY+85);
      //text(calendario[pos+16], posRectX+largRectAula*2+espaco*3, posRectY+82);
    }
    ////quarta posição
    if (calendario[pos+20]!=" ") {
      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+21];
      coordenadasDiaHoraDuracao(dia, inicio, fim);
      escolheCor(pos+20);
      noStroke();
      rect(posRectX+largRectAula*3+espaco*3, posRectY, largRectAula, altRect, 10);
      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);
      textSize(11);
      text(calendario[pos+20], posRectX+largRectAula*3+espaco*4, posRectY+20);
      textStyle(NORMAL);
      textSize(8);
      text(calendario[pos+22], posRectX+largRectAula*3+espaco*4, posRectY+25, largRectAula-20, 160);
      text(calendario[pos+23], posRectX+largRectAula*3+espaco*4, posRectY+85);
      //text(calendario[pos+16], posRectX+largRectAula*2+espaco*3, posRectY+82);
    }
    ////quinta posição
    if (calendario[pos+26]!=" ") {
      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+27];
      coordenadasDiaHoraDuracao(dia, inicio, fim);
      escolheCor(pos+26);
      noStroke();
      rect(posRectX+largRectAula*4+espaco*4, posRectY, largRectAula, altRect, 10);
      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);
      textSize(11);
      text(calendario[pos+26], posRectX+largRectAula*4+espaco*5, posRectY+20);
      textStyle(NORMAL);
      textSize(8);
      text(calendario[pos+28], posRectX+largRectAula*4+espaco*5, posRectY+25, largRectAula-20, 160);
      text(calendario[pos+29], posRectX+largRectAula*4+espaco*5, posRectY+85);
      //text(calendario[pos+16], posRectX+largRectAula*2+espaco*3, posRectY+82);
    }
  }
}
