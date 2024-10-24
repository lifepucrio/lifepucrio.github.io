function contagemDeCreditos() {
  textStyle(BOLD);
  textSize(16);
  //text('Contagem de Créditos:', 110, 800);
  let linha=0;
  totalDeCreditos=0;
  for (let i=0; i<tabela.getRowCount(); i++) {
    let prof1 = tabela.get(i, 'PROFESSORES1');
    let prof2 = tabela.get(i, 'PROFESSORES2');
    let prof3 = tabela.get(i, 'PROFESSORES3');
    let prof4 = tabela.get(i, 'PROFESSORES4');
    let prof5 = tabela.get(i, 'PROFESSORES5');
    let prof6 = tabela.get(i, 'PROFESSORES6');
    let prof7 = tabela.get(i, 'PROFESSORES7');
    let prof8 = tabela.get(i, 'PROFESSORES8');
    let vagas = tabela.get(i, 'VAGAS');

    //essa filtragem por vagas é somente para não ler a segunda  linha no caso das
    //aulas de projeto com horarios diferentes - duas linhas
    if (vagas!='') {
      if (prof1.includes(qualProf)) {
        let creditos=tabela.get(i, 'H1');
        if(creditos==''){creditos=0;}
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        let turma=tabela.get(i, 'TURMA');
        textSize(12);
        textStyle(NORMAL);
        //text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        //text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
      if (prof2.includes(qualProf)) {
        let creditos=tabela.get(i, 'H2');
        if(creditos==''){creditos=0;}
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        let turma=tabela.get(i, 'TURMA');
        textSize(12);
        textStyle(NORMAL);
        //text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        //text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
      if (prof3.includes(qualProf)) {
        let creditos=tabela.get(i, 'H3');
        if(creditos==''){creditos=0;}
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        let turma=tabela.get(i, 'TURMA');
        textSize(12);
        textStyle(NORMAL);
        //text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        //text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
      if (prof4.includes(qualProf)) {
        let creditos=tabela.get(i, 'H4');
        if(creditos==''){creditos=0;}
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        let turma=tabela.get(i, 'TURMA');
        textSize(12);
        textStyle(NORMAL);
        //text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        //text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
      if (prof5.includes(qualProf)) {
        let creditos=tabela.get(i, 'H5');
        if(creditos==''){creditos=0;}
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        let turma=tabela.get(i, 'TURMA');
        textSize(12);
        textStyle(NORMAL);
        //text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        //text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
      if (prof6.includes(qualProf)) {
        let creditos=tabela.get(i, 'H6');
        if(creditos==''){creditos=0;}
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        let turma=tabela.get(i, 'TURMA');
        textSize(12);
        textStyle(NORMAL);
        //text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        //text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
      if (prof7.includes(qualProf)) {
        let creditos=tabela.get(i, 'H7');
        if(creditos==''){creditos=0;}
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        let turma=tabela.get(i, 'TURMA');
        textSize(12);
        textStyle(NORMAL);
        //text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        //text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
      if (prof8.includes(qualProf)) {
        let creditos=tabela.get(i, 'H8');
        if(creditos==''){creditos=0;}
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        let turma=tabela.get(i, 'TURMA');
        textSize(12);
        textStyle(NORMAL);
        //text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        //text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
    }
  }
  textStyle(BOLD);
  textSize(16);
  //text('Total de Créditos Previstos: '+totalDeCreditos, 750, 800);
}
