var butDSG1001,butART1050,butART1052, butDSG1401,
butDSG1101, butDSG1141, butLET0191, butPSI1130;
var valDSG3001=false;
var valDSG3011=false;
var valDSG3101=false;
var valDSG3201=false;
var valDSG3203=false;
var valDSG3202=false;
var valDSG3204=false;
var valLET0191=false;

function criaBotoes(){
  //DSG1001
  butDSG1001 = createCheckbox('DSG1001 - Projeto Básico - Contexto e Conceito', false);
  butDSG1001.changed(funcDSG1001);
  butDSG1001.position(40, 100);
  butDSG1001.style('font-family','Arial');
  butDSG1001.style('font-size','11px');
  butDSG1001.style('text-leading','10px');
  //butDSG1001.label.style('vertical-align','top');
  //butDSG1001.style('padding','5px');
  
  
  //ART1050
  butART1050 = createCheckbox('ART1050 - Desenho de Observação', false);
  butART1050.changed(funcART1050);
  butART1050.position(40, 120);
  butART1050.style('font-family','Helvetica');
  butART1050.style('font-size','11px');
  
  //ART1052
  butART1052 = createCheckbox('ART1052 - A Imagem Fotográfica', false);
  butART1052.changed(funcART1052);
  butART1052.position(40, 140);
  butART1052.style('font-family','Helvetica');
  butART1052.style('font-size','11px');
  
  butDSG1401 = createCheckbox('DSG1401 - Questões em Design-Mídia Digital', false);
  butDSG1401.changed(funcART1052);
  butDSG1401.position(40, 160);
  butDSG1401.style('font-family','Helvetica');
  butDSG1401.style('font-size','11px');
  
  butDSG1101 = createCheckbox('DSG1101 - Historia do Design 1', false);
  butDSG1101.changed(funcDSG1101);
  butDSG1101.position(40, 180);
  butDSG1101.style('font-family','Helvetica');
  butDSG1101.style('font-size','11px');
  
  butDSG1141 = createCheckbox('DSG1141 - Fundamentos da Mídia Digital', false);
  butDSG1141.changed(funcART1052);
  butDSG1141.position(40, 200);
  butDSG1141.style('font-family','Helvetica');
  butDSG1141.style('font-size','11px');
  
  butLET0191 = createCheckbox('LET0191 - Optaticas de Letras para CDI', false);
  butLET0191.changed(funcART1052);
  butLET0191.position(40, 220);
  butLET0191.style('font-family','Helvetica');
  butLET0191.style('font-size','11px');
  
  butPSI1130 = createCheckbox('PSI1130 - Psicologia e Percepção', false);
  butPSI1130.changed(funcART1052);
  butPSI1130.position(40, 240);
  butPSI1130.style('font-family','Helvetica');
  butPSI1130.style('font-size','11px');
  
}
