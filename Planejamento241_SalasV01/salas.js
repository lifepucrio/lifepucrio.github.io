function salas() {
  //cria o calendario
  let pos=0;
  let calendario=[];
  for (let dia=2; dia<=6; dia++) {
    //console.log(dia);
    for (let hora=7; hora<=19; hora++) {
      //console.log(hora+"h");
      calendario[pos]=dia;
      calendario[pos+1]=hora;
      calendario[pos+2]=" ";//codigo da aula 1
      calendario[pos+3]=0;//final da aula 1
      calendario[pos+4]=" ";//nome da aula 1
      calendario[pos+5]=" ";//turma da aula 1
      calendario[pos+6]=" ";//sala da aula 1
      calendario[pos+7]=" ";//codigo da aula 2
      calendario[pos+8]=" ";//final da aula 2
      calendario[pos+9]=" ";//nome da aula 2
      calendario[pos+10]=" ";//turma da aula 2
      calendario[pos+11]=" ";//sala da aula 2
      calendario[pos+12]="break";
      pos+=13;
    }
  }
  //console.log(calendario);

  //preenche o calendario com as aulas da sala
  for (let i=0; i<tabela.getRowCount(); i++) {
    let sala = tabela.get(i, 'SALA');
    //let prof2 = tabela.get(i, 'PROFESSORES2');
    if (sala.includes(qualSala)) {
      console.log(qualSala);
      for (let x=5; x<=9; x++) {
        let dia=tabela.get(i, x);
        if (dia!= null && dia != '') {
          if (dia== 'TRUE') {
            dia=x-3;
            console.log(dia);
            let inicio = tabela.get(i, 'INICIO');
            let fim = tabela.get(i, 'FINAL');
            console.log(inicio);
            let codigo=tabela.get(i, 'CODIGO');
            let disciplina=tabela.get(i, 'DISCIPLINA');
            let sala=tabela.get(i, 'SALA');
            let turma=tabela.get(i, 'TURMA');
            if (calendario[(dia-2)*13*13+(inicio-7)*13+2]==" ") {
              //preenche na primeira posição
              calendario[(dia-2)*13*13+(inicio-7)*13+2]=codigo;
              calendario[(dia-2)*13*13+(inicio-7)*13+3]=int(fim);
              calendario[(dia-2)*13*13+(inicio-7)*13+4]=disciplina;
              calendario[(dia-2)*13*13+(inicio-7)*13+5]=turma;
              calendario[(dia-2)*13*13+(inicio-7)*13+6]=sala;
            } else {
              //preenche na segunda posição
              calendario[(dia-2)*13*13+(inicio-7)*13+7]=codigo;
              calendario[(dia-2)*13*13+(inicio-7)*13+8]=int(fim);
              calendario[(dia-2)*13*13+(inicio-7)*13+9]=disciplina;
              calendario[(dia-2)*13*13+(inicio-7)*13+10]=turma;
              calendario[(dia-2)*13*13+(inicio-7)*13+11]=sala;
            }
          }
        }
      }
    }
  }
  console.log(calendario);

  //exibe o calendario
  for (let pos=0; pos<calendario.length; pos+=13) {
    //se identifica aula no calendario
    //primeira posição
    if (calendario[pos+2]!=" ") {
      //se tem outra aula no mesmo horario
      if (calendario[pos+7]!=" ") {
        largRectAula=largRect/2-espaco*1.5;
      } else {
        largRectAula=largRect-espaco*2;
      }
      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+3];
      console.log(inicio);
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
        altRect=90+espaco;
      }
      if (duracao==3) {
        altRect=140+espaco;
      }
      if (duracao==4) {
        altRect=190+espaco;
      }
      if (duracao==5) {
        altRect=240+espaco;
      }
      if (duracao==6) {
        altRect=290+espaco;
      }
      
      
      //escolheCor
      if (calendario[pos+2]=='DSG1854'||calendario[pos+2]=='DSG1855'||
        calendario[pos+2]=='DSG1856'||calendario[pos+2]=='DSG1856') {
        fill(23, 173, 245, 150);
      } else if (calendario[pos+2]=='DSG1861'||calendario[pos+2]=='DSG1862'||
      calendario[pos+2]=='DSG1863'||calendario[pos+2]=='DSG1864'||calendario[pos+2]=='DSG1865'||
      calendario[pos+2]=='DSG1866'||calendario[pos+2]=='DSG1842'){
        fill(0, 176, 160, 150);
      }
      else if (calendario[pos+2]=='DSG1811'||calendario[pos+2]=='DSG1812'||
      calendario[pos+2]=='DSG1813'||calendario[pos+2]=='DSG1814'||calendario[pos+2]=='DSG1815'||
      calendario[pos+2]=='DSG1816'){
        fill(248, 0, 24, 150);
      }else{
        fill(242, 155, 24, 150);
      }
      
      noStroke();
      rect(posRectX, posRectY, largRectAula, altRect, 10);
      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);
      textSize(11);
      text(calendario[pos+2], posRectX+espaco, posRectY+20);
      textStyle(NORMAL);
      textSize(9);
      text(calendario[pos+4], posRectX+espaco, posRectY+25, largRectAula-20, 160);
      text(calendario[pos+5], posRectX+espaco, posRectY+70);
      text(calendario[pos+6], posRectX+espaco, posRectY+82);
    }
    //segunda posição
    if (calendario[pos+7]!=" ") {
      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+8];
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
        altRect=90+espaco;
      }
      if (duracao==3) {
        altRect=140+espaco;
      }
      if (duracao==4) {
        altRect=190+espaco;
      }
      if (duracao==5) {
        altRect=240+espaco;
      }
      if (duracao==6) {
        altRect=290+espaco;
      }
      
      
      //escolheCor
      if (calendario[pos+2]=='DSG1854'||calendario[pos+2]=='DSG1855'||
        calendario[pos+2]=='DSG1856'||calendario[pos+2]=='DSG1856') {
        fill(23, 173, 245, 150);
      } else if (calendario[pos+2]=='DSG1861'||calendario[pos+2]=='DSG1862'||
      calendario[pos+2]=='DSG1863'||calendario[pos+2]=='DSG1864'||calendario[pos+2]=='DSG1865'||
      calendario[pos+2]=='DSG1866'){
        fill(0, 176, 160, 150);
      }
      else if (calendario[pos+2]=='DSG1811'||calendario[pos+2]=='DSG1812'||
      calendario[pos+2]=='DSG1813'||calendario[pos+2]=='DSG1814'||calendario[pos+2]=='DSG1815'||
      calendario[pos+2]=='DSG1816'||calendario[pos+2]=='DSG1842'){
        fill(248, 0, 24, 150);
      }else{
        fill(242, 155, 24, 150);
      }
      
      
      noStroke();
      rect(posRectX+largRectAula+espaco, posRectY, largRectAula, altRect, 10);
      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);
      textSize(11);
      text(calendario[pos+7], posRectX+largRectAula+espaco*2, posRectY+20);
      textStyle(NORMAL);
      textSize(9);
      text(calendario[pos+9], posRectX+largRectAula+espaco*2, posRectY+25, largRectAula-20, 160);
      text(calendario[pos+10], posRectX+largRectAula+espaco*2, posRectY+70);
      text(calendario[pos+11], posRectX+largRectAula+espaco*2, posRectY+82);
    }
  }
}
