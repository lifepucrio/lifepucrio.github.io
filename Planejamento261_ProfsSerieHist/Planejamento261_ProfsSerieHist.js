

function preload() {
  //tabela=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vTKEf27k56Rg78Et_fZoBLHsCTvHrMaSRHM7QKX412-a-JEMEOoblLHHr8nItvMCT2BeWuSAMxIDcMV/pub?gid=2122385506&single=true&output=csv', 'csv', 'header');
  //tabelaSerieHist=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3ibCpyHukTAxOHYl4vefnT2he08SYwb8rC7R23dTI3nIJEf1Pvnhr4JUPLjlZg7VxoDrsm6jvSLQb/pub?gid=341439767&single=true&output=csv', 'csv', 'header');
  tabelaSerieHist=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQKABcRBZCtZZLGf9xQJQWEAHhNAm19532fuZNiMoibn2BSaora9noPJSIKATyZSliXNSwSpFLTVM3B/pub?gid=2122385506&single=true&output=csv', 'csv', 'header');
  //tabela251=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vTKEf27k56Rg78Et_fZoBLHsCTvHrMaSRHM7QKX412-a-JEMEOoblLHHr8nItvMCT2BeWuSAMxIDcMV/pub?gid=0&single=true&output=csv', 'csv', 'header');
  //tabela252=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQKABcRBZCtZZLGf9xQJQWEAHhNAm19532fuZNiMoibn2BSaora9noPJSIKATyZSliXNSwSpFLTVM3B/pub?gid=397762419&single=true&output=csv', 'csv', 'header');
  tabela261=loadTable('https://docs.google.com/spreadsheets/d/e/2PACX-1vQKABcRBZCtZZLGf9xQJQWEAHhNAm19532fuZNiMoibn2BSaora9noPJSIKATyZSliXNSwSpFLTVM3B/pub?gid=682566435&single=true&output=csv', 'csv', 'header');

}

function setup() {
  createCanvas(1400, 960);
  //console.log(tabela.getRowCount()+'linhas');
  rectMode(CORNER);
  qp = createSelect();
  qp.position(740, 60);
  qp.option('ALESSANDRA CARUSI MACHADO');
  qp.option('ALEXANDRE CANTINI REZENDE');
  qp.option('ANDRE LUIS FERREIRA BELTRAO');
  qp.option('ANDRE WELLER');
  qp.option('AUGUSTO SEIBEL MACHADO');
  qp.option('BARBARA DE OLIVEIRA E CRUZ');
  qp.option('BERNARDO GOMES ALEVATO');
  qp.option('CARLO FRANZATO');
  qp.option('CARLOS ANDRE LAMEIRAO CORTES');
  qp.option('CARLOS EDUARDO FELIX DA COSTA');
  qp.option('CELSO BRAGA WILMER');
  qp.option('CLAUDIA HABIB KAYAT');
  qp.option('CLAUDIA MARIA MONTEIRO VIANNA');
  qp.option('CLAUDIA RENATA MONT ALVAO BASTOS RODRIGUES');
  qp.option('CLAUDIO FREITAS DE MAGALHAES');
  qp.option('CLAUDIO GOMES WERNECK DE FREITAS');
  qp.option('CLEMENTINO LUIZ DE JESUS JUNIOR');
  qp.option('CRISTINA VIANA TENENBAUM');
  qp.option('DANIEL MALAGUTI CAMPOS');
  qp.option('DANIELA CORREA DE OLIVEIRA');
  qp.option('DAVISON DA SILVA COUTINHO');
  qp.option('DENISE BERRUEZO PORTINARI');
  qp.option('EDUARDO ROCHA DE OLIVEIRA FILHO');
  qp.option('ELIANE GARCIA PEREIRA');
  qp.option('EVELYN GRUMACH');
  qp.option('FABIANA PRADO');
  qp.option('FABIO PINTO LOPES DE LIMA');
  qp.option('FELIPE RANGEL CARNEIRO');
  qp.option('FLAVIA NIZIA DA FONSECA RIBEIRO');
  qp.option('FLAVIO MARQUES DE CARVALHO JUNIOR');
  qp.option('GABRIELA DE GUSMAO PEREIRA');
  qp.option('GABRIELLA FERREIRA CHAVES VACCARI');
  qp.option('GILBERTO MENDES CORREIA JUNIOR');
  qp.option('GUILHERME AZEVEDO TOLEDO');
  qp.option('GUILHERME DE ALMEIDA XAVIER');
  qp.option('GUILHERME LORENZONI DE ALMEIDA');
  qp.option('HELENA CAVALCANTI DE ALBUQUERQUE');
  qp.option('IRINA ARAGAO DOS SANTOS');
  qp.option('ISABEL MARTINS MOREIRA');
  qp.option('ISABELA CANELLAS DA MOTTA');
  qp.option('IZABEL MARIA DE OLIVEIRA');
  qp.option('JACKELINE LIMA FARBIARZ');
  qp.option('JOAO DE SA BONELLI');
  qp.option('JOAO VICTOR AZEVEDO DE MENEZES CORREIA DE MELO');
  qp.option('JOAQUIM DE SALLES REDIG DE CAMPOS');
  qp.option('JORGE LANGONE');
  qp.option('JORGE ROBERTO LOPES DOS SANTOS');
  qp.option('JOSE AUGUSTO BRANDAO ESTELLITA LINS');
  qp.option('JOSE ROBERTO SANSEVERINO');
  qp.option('JULIETA COSTA SOBRAL');
  qp.option('LEONARDO CARDARELLI LEITE');
  qp.option('LEONIDAS AUGUSTO CORREIA DE MORAES');
  qp.option('LUCIANA BARBOSA DE SOUSA');
  qp.option('LUCIANA GRETHER DE MELLO CARVALHO');
  qp.option('LUIS VICENTE BARROS CARDOSO DE MELO');
  qp.option('LUIZ EDUARDO DUTRA COELHO DA ROCHA');
  qp.option('LUIZ TORRES LUDWIG');
  qp.option('LUIZA FERRO COSTA MARCIER');
  qp.option('LUIZA MARIA INTERLENGHI');
  qp.option('LUIZA NOVAES');
  qp.option('MARCELO FERNANDES PEREIRA');
  qp.option('MARCO ANTONIO MAGALHAES LIMA');
  qp.option('MARCOS AMARANTE DE ALMEIDA MAGALHAES');
  qp.option('MARIA CLAUDIA BOLSHAW GOMES');
  qp.option('MARIA DAS GRACAS DE ALMEIDA CHAGAS');
  qp.option('MARIA ELOISA DE JESUS CONCEIÇÃO');
  qp.option('MARIA JULIA MORAES PINTO NUNES');
  qp.option('MARIA MANUELA RUPP QUARESMA');
  qp.option('MARIO AUGUSTO PINTO DE SOUZA SEIXAS');
  qp.option('MATEU DE ATHAYDE VELASCO');
  qp.option('MIGUEL SANTOS DE CARVALHO');
  qp.option('MONICA FROTA LEAO FEITOSA');
  qp.option('MONICA SABOIA SADDI');
  qp.option('NATHALIA CHEHAB DE SA CAVALCANTE');
  qp.option('NILTON GONCALVES GAMBA JUNIOR');
  qp.option('RENATA MATTOS EYER DE ARAUJO');
  qp.option('RIAN OLIVEIRA REZENDE');
  qp.option('RITA MARIA DE SOUZA COUTO');
  qp.option('ROBERTA PORTAS GONCALVES RODRIGUES');
  qp.option('ROMULO MIYAZAWA MATTEONI');
  qp.option('SILVIA HELENA SOARES DA COSTA');
  qp.option('SIMONE CARVALHO DE FORMIGA XAVIER');
  qp.option('SUZANA VALLADARES FONSECA');
  qp.option('VERA LUCIA MOREIRA DOS SANTOS NOJIMA');
  qp.option('VERA MARIA MARSICANO DAMAZIO');
  qp.option('WALVYKER ALVES DE SOUZA');

  qp.selected('ALESSANDRA CARUSI MACHADO');
  qp.changed(selecionaProf);
}

function selecionaProf() {
  qualProf = qp.value();
  redraw();
}


function draw() {
  noLoop();
  background(220);
  textFont("Helvetica");
  textStyle(NORMAL);
  textAlign(LEFT);
  textSize(20);
  text("Contagem de Créditos - Série Histórica", 105, 45);
  textStyle(BOLD);
  textSize(25);
  fill(0);
  text(qualProf, 105, 80);
  textSize(14);
  textStyle(NORMAL);
  for (let i=0; i<tabelaSerieHist.getRowCount(); i++) {
    let prof = tabelaSerieHist.get(i, 'PROFESSORES');
    if (prof.includes(qualProf)) {
      let admiss=tabelaSerieHist.get(i, 'ADMISSAO');
      text("Admissão em "+admiss, 105, 100);
    }
  }

  //base desenho
  base();
  contagemDeCreditos261();
  montaSerie();
}
