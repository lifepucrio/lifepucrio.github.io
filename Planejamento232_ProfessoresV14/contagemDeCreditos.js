function contagemDeCreditos() {
  textStyle(BOLD);
  textSize(16);
  text('Contagem de Créditos:',110,800);
  let linha=0;
  let totalDeCreditos=0;
  for (let i=0; i<tabela.getRowCount(); i++) {
    let prof = tabela.get(i, 'PROFESSOR');
    if (prof.includes(qualProf)) {
      //let inicio;
      //console.log(prof);
      //for (let x=4; x<=8; x++) {
      let creditos=tabela.get(i, 'CR');
      if (creditos!= null && creditos != '') {
        //console.log('dia:'+dia);
        //let horario = tabela.get(i, 'HORA');
        //inicio = horario.substring(0, 2);
        //let fim = horario.substring(3, 5);
        //let duracao=float(fim)-float(inicio);
        let codigo=tabela.get(i, 'CODIGO');
        let disciplina=tabela.get(i, 'DISCIPLINA');
        //let sala=tabela.get(i, 'SALA');
        let turma=tabela.get(i, 'TUR');
        textSize(12);
        textStyle(NORMAL);
        text(codigo+' '+turma+' '+disciplina, 110, linha*14+820);
        text(creditos, 700, linha*14+820);
        linha++;
        totalDeCreditos+=int(creditos);
      }
      
    }
    
  }
  textStyle(BOLD);
  textSize(16);
  text('Total de Créditos Previstos\n(a ser confirmado após a matrícula): '+totalDeCreditos, 750, 800);
}
