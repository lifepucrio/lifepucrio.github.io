function professores() {
  //cria o calendario
  let pos=0;
  let calendario=[];
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
      //aula2
      calendario[pos+7]=" ";//codigo da aula 2
      calendario[pos+8]=0;//final da aula 2
      calendario[pos+9]=" ";//nome da aula 2
      calendario[pos+10]=" ";//turma da aula 2
      calendario[pos+11]=" ";//sala da aula 2
      //aula3
      calendario[pos+12]=" ";//codigo da aula 3
      calendario[pos+13]=0;//final da aula 3
      calendario[pos+14]=" ";//nome da aula 3
      calendario[pos+15]=" ";//turma da aula 3
      calendario[pos+16]=" ";//sala da aula 3
      //marcador
      calendario[pos+17]="break";
      pos+=18;
    }
  }
  //console.log(calendario);

  //preenche o calendario com as aulas do professor
  for (let i=0; i<tabela.getRowCount(); i++) {
    let prof1 = tabela.get(i, 'PROFESSORES1');
    let prof2 = tabela.get(i, 'PROFESSORES2');
    let prof3 = tabela.get(i, 'PROFESSORES3');
    let prof4 = tabela.get(i, 'PROFESSORES4');
    let prof5 = tabela.get(i, 'PROFESSORES5');
    let prof6 = tabela.get(i, 'PROFESSORES6');
    let prof7 = tabela.get(i, 'PROFESSORES7');
    let prof8 = tabela.get(i, 'PROFESSORES8');
    if (prof1.includes(qualProf) || prof2.includes(qualProf) || prof3.includes(qualProf) || prof4.includes(qualProf) || prof5.includes(qualProf) || prof6.includes(qualProf) || prof7.includes(qualProf) || prof8.includes(qualProf)) {
      //console.log(qualProf);
      for (let x=5; x<=9; x++) {
        let dia=tabela.get(i, x);
        if (dia!= null && dia != '') {
          if (dia== 'TRUE') {
            dia=x-3;
            //console.log(dia);
            let inicio = tabela.get(i, 'INICIO');
            let fim = tabela.get(i, 'FINAL');
            //console.log(inicio);
            let codigo=tabela.get(i, 'CODIGO');
            let disciplina=tabela.get(i, 'DISCIPLINA');
            let sala=tabela.get(i, 'SALA');
            let turma=tabela.get(i, 'TURMA');
            if (calendario[(dia-2)*13*18+(inicio-7)*18+2]==" ") {
              //preenche na primeira pos+2ção
              calendario[(dia-2)*18*13+(inicio-7)*18+2]=codigo;
              calendario[(dia-2)*18*13+(inicio-7)*18+3]=int(fim);
              calendario[(dia-2)*18*13+(inicio-7)*18+4]=disciplina;
              calendario[(dia-2)*18*13+(inicio-7)*18+5]=turma;
              calendario[(dia-2)*18*13+(inicio-7)*18+6]=sala;
            } else if (calendario[(dia-2)*13*18+(inicio-7)*18+7]==" ") {
              //preenche na segunda pos+2ção
              calendario[(dia-2)*13*18+(inicio-7)*18+7]=codigo;
              calendario[(dia-2)*13*18+(inicio-7)*18+8]=int(fim);
              calendario[(dia-2)*13*18+(inicio-7)*18+9]=disciplina;
              calendario[(dia-2)*13*18+(inicio-7)*18+10]=turma;
              calendario[(dia-2)*13*18+(inicio-7)*18+11]=sala;
            } else {
              //preenche na terceira pos+2ção
              calendario[(dia-2)*13*18+(inicio-7)*18+12]=codigo;
              calendario[(dia-2)*13*18+(inicio-7)*18+13]=int(fim);
              calendario[(dia-2)*13*18+(inicio-7)*18+14]=disciplina;
              calendario[(dia-2)*13*18+(inicio-7)*18+15]=turma;
              calendario[(dia-2)*13*18+(inicio-7)*18+16]=sala;
            }
          }
        }
      }
    }
  }
  //console.log(calendario);

  //exibe o calendario
  for (let pos=0; pos<calendario.length; pos+=18) {
    //se identifica aula no calendario
    //primeira pos+2ção
    if (calendario[pos+2]!=" ") {
      //configura as larguras

      //se tem aula 2 no mesmo horario
      if (calendario[pos+7]!=" ") {
        //se tem aula 3 no mesmo horario
        if (calendario[pos+12]!=" ") {
          largRectAula=largRect/3-espaco*1.5;
        } else {
          largRectAula=largRect/2-espaco*1.5;
        }
      } else {
        largRectAula=largRect-espaco*2;
      }
      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+3];
      //console.log(inicio);
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
      //linguagens
      if (calendario[pos+2]=='DSG1841'||calendario[pos+2]=='DSG1843'||
        calendario[pos+2]=='DSG1845'||calendario[pos+2]=='DSG1846'||
        calendario[pos+2]=='DSG1848'||calendario[pos+2]=='DSG1850'||
        calendario[pos+2]=='DSG1849'||calendario[pos+2]=='DSG1851'||
        calendario[pos+2]=='DSG1852'||calendario[pos+2]=='DSG1854'||
        calendario[pos+2]=='DSG1853'||calendario[pos+2]=='DSG1855'||
        calendario[pos+2]=='DSG1856'||calendario[pos+2]=='DSG1857') {
        fill(23, 173, 245, 150);
      }
      //praticas experimentais
      else if (calendario[pos+2]=='DSG1842'||calendario[pos+2]=='DSG1844'||
        calendario[pos+2]=='DSG1847'||calendario[pos+2]=='DSG1861'||calendario[pos+2]=='DSG1862'||
        calendario[pos+2]=='DSG1863'||
        calendario[pos+2]=='DSG1864'||calendario[pos+2]=='DSG1865'||
        calendario[pos+2]=='DSG1866'||calendario[pos+2]=='DSG1867') {
        fill(0, 176, 160, 150);
      }
      //estudios
      else if (calendario[pos+2]=='DSG1811'||calendario[pos+2]=='DSG1812') {
        fill(255, 122, 129, 150);
      }
      //projetos
      else if (calendario[pos+2]=='DSG1813'||calendario[pos+2]=='DSG1814'||calendario[pos+2]=='DSG1815'||calendario[pos+2]=='DSG1500'||
        calendario[pos+2]=='DSG1300'||calendario[pos+2]=='DSG1400'||
        calendario[pos+2]=='DSG1816'||calendario[pos+2]=='DSG1900'||
        calendario[pos+2]=='DSG1910'||calendario[pos+2]=='DSG1911'||calendario[pos+2]=='DSG1912'||calendario[pos+2]=='DSG1913'||
        calendario[pos+2]=='DSG1914'||calendario[pos+2]=='DSG1915'||calendario[pos+2]=='DSG1920'||calendario[pos+2]=='DSG1921'||
        calendario[pos+2]=='DSG1922'||calendario[pos+2]=='DSG1923'||calendario[pos+2]=='DSG1924'||calendario[pos+2]=='DSG1925') {
        fill(248, 0, 24, 200);
      }
      //historia e teoria
      else if (calendario[pos+2]=='DSG1821'||calendario[pos+2]=='DSG1822'||calendario[pos+2]=='DSG1823'||
        calendario[pos+2]=='DSG1824'||calendario[pos+2]=='DSG1825'||calendario[pos+2]=='DSG1826') {
        fill(216, 104, 223, 200);
      }
      //optativas historia e teoria
      else if (calendario[pos+2]=='DSG1423'||calendario[pos+2]=='DSG1830'||
        calendario[pos+2]=='DSG1831'||calendario[pos+2]=='DSG1832'||calendario[pos+2]=='DSG1833') {
        fill(169, 65, 171, 200);
      }
      //conteudos estruturantes
      else if (calendario[pos+2]=='DSG1801'||calendario[pos+2]=='DSG1802'||calendario[pos+2]=='DSG1803'||
        calendario[pos+2]=='DSG1804'||calendario[pos+2]=='DSG1805'||calendario[pos+2]=='DSG1806'||calendario[pos+2]=='DSG1901'||calendario[pos+2]=='DSG1902') {
        fill(209, 163, 175, 200);
      }
      //Optativas de Ênfase
      else if (calendario[pos+2]=='DSG1145'||calendario[pos+2]=='DSG1424'||calendario[pos+2]=='DSG1930'||calendario[pos+2]=='DSG1931'||
        calendario[pos+2]=='DSG1932'||calendario[pos+2]=='DSG1933'||calendario[pos+2]=='DSG1934'||calendario[pos+2]=='DSG1937'||calendario[pos+2]=='DSG1941'||calendario[pos+2]=='DSG1943'||
        calendario[pos+2]=='DSG1944'||calendario[pos+2]=='DSG1945'||calendario[pos+2]=='DSG1946'||calendario[pos+2]=='DSG1948'||calendario[pos+2]=='DSG1949'||calendario[pos+2]=='DSG1950'||calendario[pos+2]=='DSG1951'||calendario[pos+2]=='DSG1952'||calendario[pos+2]=='DSG1953'||
        calendario[pos+2]=='DSG1954'||calendario[pos+2]=='DSG1956'||calendario[pos+2]=='DSG1957'||calendario[pos+2]=='DSG1958'||calendario[pos+2]=='DSG1959'||calendario[pos+2]=='DSG1961'||calendario[pos+2]=='DSG1962'||
        calendario[pos+2]=='DSG1963'||calendario[pos+2]=='DSG1964'||calendario[pos+2]=='DSG1965'||calendario[pos+2]=='DSG1966') {
        fill(242, 179, 58, 200);
      }
      //Optativas Oficina de Ênfase
      else if (calendario[pos+2]=='DSG1972'||calendario[pos+2]=='DSG1973'||calendario[pos+2]=='DSG1974'||calendario[pos+2]=='DSG1975'||
        calendario[pos+2]=='DSG1976'||calendario[pos+2]=='DSG1977'||calendario[pos+2]=='DSG1978'||calendario[pos+2]=='DSG1979'||calendario[pos+2]=='DSG1981'||calendario[pos+2]=='DSG1982'||
        calendario[pos+2]=='DSG1983'||calendario[pos+2]=='DSG1984'||calendario[pos+2]=='DSG1985'||calendario[pos+2]=='DSG1986'||calendario[pos+2]=='DSG1987'||calendario[pos+2]=='DSG1988'||calendario[pos+2]=='DSG1989'||calendario[pos+2]=='DSG1990'||
        calendario[pos+2]=='DSG1991'||calendario[pos+2]=='DSG1992'||calendario[pos+2]=='DSG1993'||calendario[pos+2]=='DSG1994') {
        fill(39, 123, 61, 200);
      }
      //Optativas Desenho de Ênfase
      else if (calendario[pos+2]=='DSG1969'||calendario[pos+2]=='DSG1971'||calendario[pos+2]=='DSG1995'||calendario[pos+2]=='DSG1996'||calendario[pos+2]=='DSG1997'||
        calendario[pos+2]=='DSG1998'||calendario[pos+2]=='DSG1999') {
        fill(0, 119, 165, 200);
      } else {
        fill(150, 150, 150, 200);
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




    //segunda pos+7ção
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
      //linguagens
      if (calendario[pos+7]=='DSG1841'||calendario[pos+7]=='DSG1843'||
        calendario[pos+7]=='DSG1845'||calendario[pos+7]=='DSG1846'||
        calendario[pos+7]=='DSG1848'||calendario[pos+7]=='DSG1850'||
        calendario[pos+7]=='DSG1849'||calendario[pos+7]=='DSG1851'||
        calendario[pos+7]=='DSG1852'||calendario[pos+7]=='DSG1854'||
        calendario[pos+7]=='DSG1853'||calendario[pos+7]=='DSG1855'||
        calendario[pos+7]=='DSG1856'||calendario[pos+7]=='DSG1857') {
        fill(23, 173, 245, 150);
      }
      //praticas experimentais
      else if (calendario[pos+7]=='DSG1842'||calendario[pos+7]=='DSG1844'||
        calendario[pos+7]=='DSG1847'||calendario[pos+7]=='DSG1861'||calendario[pos+7]=='DSG1862'||
        calendario[pos+7]=='DSG1863'||
        calendario[pos+7]=='DSG1864'||calendario[pos+7]=='DSG1865'||
        calendario[pos+7]=='DSG1866'||calendario[pos+7]=='DSG1867') {
        fill(0, 176, 160, 150);
      }
      //estudios
      else if (calendario[pos+7]=='DSG1811'||calendario[pos+7]=='DSG1812') {
        fill(255, 122, 129, 150);
      }
      //projetos
      else if (calendario[pos+7]=='DSG1813'||calendario[pos+7]=='DSG1814'||calendario[pos+7]=='DSG1815'||calendario[pos+7]=='DSG1500'||
        calendario[pos+7]=='DSG1300'||calendario[pos+7]=='DSG1400'||
        calendario[pos+7]=='DSG1816'||calendario[pos+7]=='DSG1900'||
        calendario[pos+7]=='DSG1910'||calendario[pos+7]=='DSG1911'||calendario[pos+7]=='DSG1912'||calendario[pos+7]=='DSG1913'||
        calendario[pos+7]=='DSG1914'||calendario[pos+7]=='DSG1915'||calendario[pos+7]=='DSG1920'||calendario[pos+7]=='DSG1921'||
        calendario[pos+7]=='DSG1922'||calendario[pos+7]=='DSG1923'||calendario[pos+7]=='DSG1924'||calendario[pos+7]=='DSG1925') {
        fill(248, 0, 24, 200);
      } else if (calendario[pos+7]=='DSG1821'||calendario[pos+7]=='DSG1822'||calendario[pos+7]=='DSG1823'||
        calendario[pos+7]=='DSG1824'||calendario[pos+7]=='DSG1825'||calendario[pos+7]=='DSG1826') {
        //historia e teoria
        fill(216, 104, 223, 200);
      } else if (calendario[pos+7]=='DSG1830'||
        calendario[pos+7]=='DSG1831'||calendario[pos+7]=='DSG1832'||calendario[pos+7]=='DSG1833') {
        //optativas historia e teoria
        fill(169, 65, 171, 200);
      } else if (calendario[pos+7]=='DSG1801'||calendario[pos+7]=='DSG1802'||calendario[pos+7]=='DSG1803'||
        calendario[pos+7]=='DSG1804'||calendario[pos+7]=='DSG1805'||calendario[pos+7]=='DSG1806'||calendario[pos+7]=='DSG1901'||calendario[pos+7]=='DSG1902') {
        //conteudos estruturantes
        fill(209, 163, 175, 200);
      } else if (calendario[pos+7]=='DSG1145'||calendario[pos+7]=='DSG1424'||calendario[pos+7]=='DSG1930'||calendario[pos+7]=='DSG1931'||
        calendario[pos+7]=='DSG1932'||calendario[pos+7]=='DSG1933'||calendario[pos+7]=='DSG1934'||calendario[pos+7]=='DSG1937'||calendario[pos+7]=='DSG1941'||calendario[pos+7]=='DSG1943'||
        calendario[pos+7]=='DSG1944'||calendario[pos+7]=='DSG1945'||calendario[pos+7]=='DSG1946'||calendario[pos+7]=='DSG1948'||calendario[pos+7]=='DSG1949'||calendario[pos+7]=='DSG1950'||calendario[pos+7]=='DSG1951'||calendario[pos+7]=='DSG1952'||calendario[pos+7]=='DSG1953'||
        calendario[pos+7]=='DSG1954'||calendario[pos+7]=='DSG1956'||calendario[pos+7]=='DSG1957'||calendario[pos+7]=='DSG1958'||calendario[pos+7]=='DSG1959'||calendario[pos+7]=='DSG1961'||calendario[pos+7]=='DSG1962'||
        calendario[pos+7]=='DSG1963'||calendario[pos+7]=='DSG1964'||calendario[pos+7]=='DSG1965'||calendario[pos+7]=='DSG1966') {
        //Optativas de Ênfase
        fill(242, 179, 58, 200);
      } else if (calendario[pos+7]=='DSG1972'||calendario[pos+7]=='DSG1973'||calendario[pos+7]=='DSG1974'||calendario[pos+7]=='DSG1975'||
        calendario[pos+7]=='DSG1976'||calendario[pos+7]=='DSG1977'||calendario[pos+7]=='DSG1978'||calendario[pos+7]=='DSG1979'||calendario[pos+7]=='DSG1981'||calendario[pos+7]=='DSG1982'||
        calendario[pos+7]=='DSG1983'||calendario[pos+7]=='DSG1984'||calendario[pos+7]=='DSG1985'||calendario[pos+7]=='DSG1986'||calendario[pos+7]=='DSG1987'||calendario[pos+7]=='DSG1988'||calendario[pos+7]=='DSG1989'||calendario[pos+7]=='DSG1990'||
        calendario[pos+7]=='DSG1991'||calendario[pos+7]=='DSG1992'||calendario[pos+7]=='DSG1992'||calendario[pos+7]=='DSG1993') {
        //Optativas Oficina de Ênfase
        fill(39, 123, 61, 200);
      } else if (calendario[pos+7]=='DSG1969'||calendario[pos+7]=='DSG1995'||calendario[pos+7]=='DSG1996'||calendario[pos+7]=='DSG1997'||
        calendario[pos+7]=='DSG1998'||calendario[pos+7]=='DSG1999') {
        //Optativas Desenho de Ênfase
        fill(0, 119, 165, 200);
      } else {
        fill(150, 150, 150, 200);
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

    //terceira pos+12ção
    if (calendario[pos+12]!=" ") {
      let dia=calendario[pos];
      let inicio=calendario[pos+1];
      let fim=calendario[pos+13];
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
      //linguagens
      if (calendario[pos+12]=='DSG1841'||calendario[pos+12]=='DSG1843'||
        calendario[pos+12]=='DSG1845'||calendario[pos+12]=='DSG1846'||
        calendario[pos+12]=='DSG1848'||calendario[pos+12]=='DSG1850'||
        calendario[pos+12]=='DSG1849'||calendario[pos+12]=='DSG1851'||
        calendario[pos+12]=='DSG1852'||calendario[pos+12]=='DSG1854'||
        calendario[pos+12]=='DSG1853'||calendario[pos+12]=='DSG1855'||
        calendario[pos+12]=='DSG1856'||calendario[pos+12]=='DSG1857') {
        fill(23, 173, 245, 150);
      }
      //praticas experimentais
      else if (calendario[pos+12]=='DSG1842'||calendario[pos+12]=='DSG1844'||
        calendario[pos+12]=='DSG1847'||calendario[pos+12]=='DSG1861'||calendario[pos+12]=='DSG1862'||
        calendario[pos+12]=='DSG1863'||
        calendario[pos+12]=='DSG1864'||calendario[pos+12]=='DSG1865'||
        calendario[pos+12]=='DSG1866'||calendario[pos+12]=='DSG1867') {
        fill(0, 176, 160, 150);
      }
      //estudios
      else if (calendario[pos+12]=='DSG1811'||calendario[pos+12]=='DSG1812') {
        fill(255, 122, 129, 150);
      }
      //projetos
      else if (calendario[pos+12]=='DSG1813'||calendario[pos+12]=='DSG1814'||calendario[pos+12]=='DSG1815'||calendario[pos+12]=='DSG1500'||
        calendario[pos+12]=='DSG1300'||calendario[pos+12]=='DSG1400'||
        calendario[pos+12]=='DSG1816'||calendario[pos+12]=='DSG1900'||
        calendario[pos+12]=='DSG1910'||calendario[pos+12]=='DSG1911'||calendario[pos+12]=='DSG1912'||calendario[pos+12]=='DSG1913'||
        calendario[pos+12]=='DSG1914'||calendario[pos+12]=='DSG1915'||calendario[pos+12]=='DSG1920'||calendario[pos+12]=='DSG1921'||
        calendario[pos+12]=='DSG1922'||calendario[pos+12]=='DSG1923'||calendario[pos+12]=='DSG1924'||calendario[pos+12]=='DSG1925') {
        fill(248, 0, 24, 200);
      } else if (calendario[pos+12]=='DSG1821'||calendario[pos+12]=='DSG1822'||calendario[pos+12]=='DSG1823'||
        calendario[pos+12]=='DSG1824'||calendario[pos+12]=='DSG1825'||calendario[pos+12]=='DSG1826') {
        //historia e teoria
        fill(216, 104, 223, 200);
      } else if (calendario[pos+12]=='DSG1830'||
        calendario[pos+12]=='DSG1831'||calendario[pos+12]=='DSG1832'||calendario[pos+12]=='DSG1833') {
        //optativas historia e teoria
        fill(169, 65, 171, 200);
      } else if (calendario[pos+12]=='DSG1801'||calendario[pos+12]=='DSG1802'||calendario[pos+12]=='DSG1803'||
        calendario[pos+12]=='DSG1804'||calendario[pos+12]=='DSG1805'||calendario[pos+12]=='DSG1806'||calendario[pos+12]=='DSG1901'||calendario[pos+12]=='DSG1902') {
        //conteudos estruturantes
        fill(209, 163, 175, 200);
      } else if (calendario[pos+12]=='DSG1145'||calendario[pos+12]=='DSG1424'||calendario[pos+12]=='DSG1930'||calendario[pos+12]=='DSG1931'||
        calendario[pos+12]=='DSG1932'||calendario[pos+12]=='DSG1933'||calendario[pos+12]=='DSG1934'||calendario[pos+12]=='DSG1937'||calendario[pos+12]=='DSG1941'||calendario[pos+12]=='DSG1943'||
        calendario[pos+12]=='DSG1944'||calendario[pos+12]=='DSG1945'||calendario[pos+12]=='DSG1946'||calendario[pos+12]=='DSG1948'||calendario[pos+12]=='DSG1949'||calendario[pos+12]=='DSG1950'||calendario[pos+12]=='DSG1951'||calendario[pos+12]=='DSG1952'||calendario[pos+12]=='DSG1953'||
        calendario[pos+12]=='DSG1954'||calendario[pos+12]=='DSG1956'||calendario[pos+12]=='DSG1957'||calendario[pos+12]=='DSG1958'||calendario[pos+12]=='DSG1959'||calendario[pos+12]=='DSG1961'||calendario[pos+12]=='DSG1962'||
        calendario[pos+12]=='DSG1963'||calendario[pos+12]=='DSG1964'||calendario[pos+12]=='DSG1965'||calendario[pos+12]=='DSG1966') {
        //Optativas de Ênfase
        fill(242, 179, 58, 200);
      } else if (calendario[pos+12]=='DSG1972'||calendario[pos+12]=='DSG1973'||calendario[pos+12]=='DSG1974'||calendario[pos+12]=='DSG1975'||
        calendario[pos+12]=='DSG1976'||calendario[pos+12]=='DSG1977'||calendario[pos+12]=='DSG1978'||calendario[pos+12]=='DSG1979'||calendario[pos+12]=='DSG1981'||calendario[pos+12]=='DSG1982'||
        calendario[pos+12]=='DSG1983'||calendario[pos+12]=='DSG1984'||calendario[pos+12]=='DSG1985'||calendario[pos+12]=='DSG1986'||calendario[pos+12]=='DSG1987'||calendario[pos+12]=='DSG1988'||calendario[pos+12]=='DSG1989'||calendario[pos+12]=='DSG1990'||
        calendario[pos+12]=='DSG1991'||calendario[pos+12]=='DSG1992'||calendario[pos+12]=='DSG1992'||calendario[pos+12]=='DSG1993') {
        //Optativas Oficina de Ênfase
        fill(39, 123, 61, 200);
      } else if (calendario[pos+12]=='DSG1969'||calendario[pos+12]=='DSG1995'||calendario[pos+12]=='DSG1996'||calendario[pos+12]=='DSG1997'||
        calendario[pos+12]=='DSG1998'||calendario[pos+12]=='DSG1999') {
        //Optativas Desenho de Ênfase
        fill(0, 119, 165, 200);
      } else {
        fill(150, 150, 150, 200);
      }
      noStroke();
      rect(posRectX+largRectAula*2+espaco*2, posRectY, largRectAula, altRect, 10);
      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);
      textSize(11);
      text(calendario[pos+12], posRectX+largRectAula*2+espaco*3, posRectY+20);
      textStyle(NORMAL);
      textSize(9);
      text(calendario[pos+14], posRectX+largRectAula*2+espaco*3, posRectY+25, largRectAula-20, 160);
      text(calendario[pos+15], posRectX+largRectAula*2+espaco*3, posRectY+70);
      text(calendario[pos+16], posRectX+largRectAula*2+espaco*3, posRectY+82);
    }
  }
}
