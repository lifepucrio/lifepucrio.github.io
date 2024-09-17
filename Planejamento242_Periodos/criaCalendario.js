function criaCalendario() {
  pos=0;
  for (let dia=2; dia<=6; dia++) {
    //console.log(dia);
    for (let hora=7; hora<=19; hora++) {
      //console.log(hora+"h");
      calendario[pos]=dia;
      calendario[pos+1]=hora;
      //aula1
      calendario[pos+2]=" ";//codigo da aula 1
      calendario[pos+3]=0;//final da aula 1
      calendario[pos+4]=" ";//nome da aula 1
      calendario[pos+5]=" ";//turma da aula 1
      calendario[pos+6]=" ";//sala da aula 1
      calendario[pos+7]=" ";//periodo da aula 1
      //aula2
      calendario[pos+8]=" ";//codigo da aula 2
      calendario[pos+9]=0;//final da aula 2
      calendario[pos+10]=" ";//nome da aula 2
      calendario[pos+11]=" ";//turma da aula 2
      calendario[pos+12]=" ";//sala da aula 2
      calendario[pos+13]=" ";//periodo da aula 2
      //aula3
      calendario[pos+14]=" ";//codigo da aula 3
      calendario[pos+15]=0;//final da aula 3
      calendario[pos+16]=" ";//nome da aula 3
      calendario[pos+17]=" ";//turma da aula 3
      calendario[pos+18]=" ";//sala da aula 3
      calendario[pos+19]=" ";//periodo da aula 3
      //aula4
      calendario[pos+20]=" ";//codigo da aula 4
      calendario[pos+21]=0;//final da aula 4
      calendario[pos+22]=" ";//nome da aula 4
      calendario[pos+23]=" ";//turma da aula 4
      calendario[pos+24]=" ";//sala da aula 4
      calendario[pos+25]=" ";//periodo da aula 4
      //aula5
      calendario[pos+26]=" ";//codigo da aula 5
      calendario[pos+27]=0;//final da aula 5
      calendario[pos+28]=" ";//nome da aula 5
      calendario[pos+29]=" ";//turma da aula 5
      calendario[pos+30]=" ";//sala da aula 5
      calendario[pos+31]=" ";//periodo da aula 5
      //marcador
      calendario[pos+32]="break";
      //era 27 virou 33
      pos+=33;
    }
  }
  //console.log(calendario);
  //preenche o calendario com as aulas da sala
  for (let i=0; i<tabela.getRowCount(); i++) {
    let periodo = tabela.get(i, 'PERIODO');
    if (periodo.includes(qualPeriodo)||periodo.includes(optPratExp)||
      periodo.includes(optEnfase)||periodo.includes(optOficinaEnfase)||
      periodo.includes(optDesenhoEnfase)||periodo.includes(optHist)) {
      console.log(qualPeriodo);
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
            
            let num=(dia-2)*13*33+(inicio-7)*33;//aqui tem que botar o nº do pos+ do array
            
            //primeira posição
            if (calendario[num+2]==" ") {
              calendario[num+2]=codigo;
              calendario[num+3]=int(fim);
              calendario[num+4]=disciplina;
              calendario[num+5]=turma;
              calendario[num+6]=sala;
              calendario[num+7]=periodo;
            }
            //segunda posição
            else if (calendario[num+8]==" ") {
              //se não for o mesmo código da primeira posição
              if (codigo==calendario[num+2]) {
                calendario[num+5]=calendario[num+5].concat(' ');
                calendario[num+5]=calendario[num+5].concat(turma);
                //não faz nada
              } else {
                //preenche na segunda posição
                calendario[num+8]=codigo;
                calendario[num+9]=int(fim);
                calendario[num+10]=disciplina;
                calendario[num+11]=turma;
                calendario[num+12]=sala;
              }
            }
            //terceira posição
            else if (calendario[num+14]==" ") {
              //se for o mesmo código da primeira ou segunda posição
              if (codigo==calendario[num+8]||codigo==calendario[num+2]) {
                calendario[num+11]=calendario[num+11].concat(' ');
                calendario[num+11]=calendario[num+11].concat(turma);
                //não faz nada
              } else {
                //preenche na terceira posição
                calendario[num+14]=codigo;
                calendario[num+15]=int(fim);
                calendario[num+16]=disciplina;
                calendario[num+17]=turma;
                calendario[num+18]=sala;
              }
            }
            //quarta posição
            else if (calendario[num+20]==" ") {
              //se for o mesmo código da primeira ou segunda ou terceira posição
              if (codigo==calendario[num+8]||codigo==calendario[num+2]||codigo==calendario[num+14]) {
                calendario[num+17]=calendario[num+17].concat(' ');
                calendario[num+17]=calendario[num+17].concat(turma);
                //não faz nada
              } else {
                //preenche na terceira posição
                calendario[num+20]=codigo;
                calendario[num+21]=int(fim);
                calendario[num+22]=disciplina;
                calendario[num+23]=turma;
                calendario[num+24]=sala;
              }
            }
            //quinta posição
            else if (calendario[num+26]==" ") {
              //se for o mesmo código da primeira ou segunda ou terceira posição
              if (codigo==calendario[num+2]||codigo==calendario[num+8]||
              codigo==calendario[num+14]||codigo==calendario[num+20]) {
                //não faz nada
              } else {
                //preenche na terceira posição
                calendario[num+26]=codigo;
                calendario[num+27]=int(fim);
                calendario[num+28]=disciplina;
                calendario[num+29]=turma;
                calendario[num+30]=sala;
              }
            }
          }
        }
      }
    }
  }
  console.log(calendario);
}
