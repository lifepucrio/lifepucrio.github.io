function professores() {
  let aulas=[];
  let pos=0;
  let anda1=0;
  let anda2=0;
  //let dia;
  //let hora;
  for (let i=0; i<tabela.getRowCount(); i++) {
    let prof = tabela.get(i, 'PROFESSOR');
    if (prof.includes(qualProf)) {
      let inicio;
      console.log(prof);
      for (let x=4; x<=8; x++) {
        let dia=tabela.get(i, x);
        if (dia!= null && dia != '') {
          console.log('dia:'+dia);
          let horario = tabela.get(i, 'HORA');
          inicio = horario.substring(0, 2);
          let fim = horario.substring(3, 5);
          let duracao=float(fim)-float(inicio);
          let codigo=tabela.get(i, 'CODIGO');
          console.log(codigo);
          let disciplina=tabela.get(i, 'DISCIPLINA');
          let sala=tabela.get(i, 'SALA');
          let turma=tabela.get(i, 'TUR');
          //hora=tabela.get(i, 'HORA');
          //console.log('duração:'+duracao);
          //console.log('inicio:'+int(inicio));

          aulas[pos]=int(dia);
          aulas[pos+1]=int(inicio);
          aulas[pos+2]=duracao;
          aulas[pos+3]=codigo;
          aulas[pos+4]=disciplina;
          aulas[pos+5]=sala;
          aulas[pos+6]=turma;
          aulas[pos+7]=0;
          aulas[pos+8]=0;
          pos+=9;
        }
      }
    }
  }
  console.log(aulas);

  //veriofica se tem sobreposições de aulas
  pos=0;
  for (let d=2; d<=6; d++) {
    for (let h=7; h<=19; h++) {
      for (let i=0; i<aulas.length; i+=9) {
        if (aulas[i]==d && aulas[i+1]==h) {
          checa[pos+2]++;
          checa[pos+3]+=aulas[i+3];
        }
      }
      pos+=4;
    }
  }
  console.log(checa);


  for (let z=0; z<aulas.length; z+=9) {
    largRect=210;
    let dia=aulas[z];
    let inicio=aulas[z+1];
    let duracao=aulas[z+2];
    let codigo=aulas[z+3];
    let disciplina = aulas[z+4];
    let sala=aulas[z+5];
    let turma=aulas[z+6];

    pos=0;
    for (let d=2; d<=6; d++) {
      for (let h=7; h<=19; h++) {
        if (d==dia && h==inicio) {
          aulas[z+7]=210;
          aulas[z+8]=0;

          //2 aulas com horarios coincidentes
          if (checa[pos+2]==2) {
            console.log(checa[pos+2]+' aulas as '+h+' horas de '+d);
            if (checa[pos+3].substring(0, 7)==checa[pos+3].substring(7, 14)) {
              console.log("a mesma aula");
              turma='';
              //aulas[z+7]=115;
              //turma='';
              //if (anda2==0) {
              //  aulas[z+8]=0;
              //}
              //if (anda2==1) {
              //  aulas[z+8]=95;
              //}
            } else {
              aulas[z+7]=115;
              //turma='';
              if (anda2==0) {
                aulas[z+8]=0;
              }
              if (anda2==1) {
                aulas[z+8]=95;
              }
              if (anda2>1) {
                anda2=0;
              } else {
                anda2++;
              }
            }
          }
          

          //3 aulas com horarios coincidentes
          if (checa[pos+2]==3) {
            console.log(checa[pos+2]+' aulas as '+h+' horas de '+d);
            if (checa[pos+3].substring(7, 14)==checa[pos+3].substring(14, 21)) {
              console.log("roloooou");
              aulas[z+7]=115;
              if (anda1==0) {
                aulas[z+8]=0;
              }
              if (anda1==1) {
                aulas[z+8]=95;
              }
              if (anda1==2) {
                aulas[z+8]=3000;
              }
              if (anda1>2) {
                anda1=0;
              } else {
                anda1++;
              }
              turma='';
            }
            if (checa[pos+3].substring(0, 7)==checa[pos+3].substring(7, 14)) {
              console.log("rolou");
              aulas[z+7]=115;
              //aulas[z+8]=anda1*95;
              if (anda1==0) {
                aulas[z+8]=0;
              }
              if (anda1==1) {
                aulas[z+8]=3000;
              }
              if (anda1==2) {
                aulas[z+8]=95;
              }
              if (anda1>2) {
                anda1=0;
              } else {
                anda1++;
              }
              turma='';
            }
            if (checa[pos+3].substring(0, 7)==checa[pos+3].substring(7, 14)&&
            checa[pos+3].substring(0, 7)==checa[pos+3].substring(14, 21)) {
              console.log("rolou 3 turmas iguais");
              aulas[z+7]=210;
              aulas[z+8]=0;
              //aulas[z+8]=anda1*95;
              //if (anda1==0) {
              //  aulas[z+8]=0;
              //}
              //if (anda1==1) {
              //  aulas[z+8]=3000;
              //}
              //if (anda1==2) {
              //  aulas[z+8]=95;
              //}
              //if (anda1>2) {
              //  anda1=0;
              //} else {
              //  anda1++;
              //}
              turma='';
              sala='';
            }
          }
          //4 aulas com horarios coincidentes
          if (checa[pos+2]==4) {
            console.log(checa[pos+2]+' aulas as '+h+' horas de '+d);
            if (checa[pos+3].substring(0, 7)==checa[pos+3].substring(7, 14)) {
              console.log("rolou");
              aulas[z+7]=115;
              //aulas[z+8]=anda1*95;
              if (anda1==0) {
                aulas[z+8]=0;
              }
              if (anda1==1) {
                aulas[z+8]=3000;
              }
              if (anda1==2) {
                aulas[z+8]=95;
              }
              if (anda1==3) {
                aulas[z+8]=3000;
              }
              if (anda1>3) {
                anda1=0;
              } else {
                anda1++;
              }
              turma='';
            }
          }
        }
        pos+=4;
      }
    }



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


    fill(242, 155, 24, 100);
    noStroke();
    rect(posRectX+15+aulas[z+8], posRectY, aulas[z+7]-30, altRect, 10);
    fill(0);
    noStroke();

    //textWrap(WORD);
    textLeading(11);
    textStyle(BOLD);
    textSize(11);
    text(codigo,posRectX+25+aulas[z+8], posRectY+10, aulas[z+7]-50, 160);
    textStyle(NORMAL);
    textSize(9);
    
    text('\n'+disciplina+'\n'+turma+' - '+sala,
      posRectX+25+aulas[z+8], posRectY+10, aulas[z+7]-50, 160);
  }
}
