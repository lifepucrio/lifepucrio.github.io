function listaDisciplinas() {
  textSize(20);
  textFont(fontBold);
  text('Disciplinas do Período:', 100, 800);
  textFont(fontRegular);
  textSize(16);
  if (qualPeriodo=='1o') {
    text('DSG1801-Conteúdos Estruturantes: Olhar Intramuros (2cr)', 100, 820);
    text('DSG1811-Estúdio: Olhar Intramuros (4cr)', 100, 840);
    text('DSG1821-História e Teoria do Design I (2cr)', 100, 860);
    text('DSG1841-Linguagem e Comunicação no Design (4cr)', 100, 880);
    text('DSG1843-Linguagem Gráfica (2cr)', 580, 820);
    text('DSG1842-Imagem Fotográfica e Imagem Audiovisual (4cr)', 580, 840);
    text('DSG1844-Desenho de Observação (2cr)', 580, 860);
    text('LET0191-Optativas de Letras Para CDI (4cr)', 580, 880);
  }
  if (qualPeriodo=='2o') {
    text('DSG1802-Conteúdos Estruturantes: Olhar Extramuros (2cr)', 100, 820);
    text('DSG1812-Estúdio: Olhar Extramuros (4cr)', 100, 840);
    text('DSG1822-História do Design Brasileiro (2cr)', 100, 860);
    text('DSG1845-Linguagem, comunicação e Discurso no Design I (3cr)', 100, 880);
    text('DSG1846-A Geometria no Design (2cr)', 580, 820);
    text('DSG1848-Plástica (3cr)', 580, 840);
    text('DSG1847-Desenho de Concepção (4cr)', 580, 860);
    text('CRE1100-O Humano e o Fenômeno Religioso (4cr)', 580, 880);
  }
  if (qualPeriodo=='3o') {
    text('DSG1803-Conteúdos Estruturantes: Projetar em Parceria (2cr)', 100, 820);
    text('DSG1813-Projeto: Projetar em Parceria (6cr)', 100, 840);
    text('DSG1823-História e Teoria do Design II (2cr)', 100, 860);
    text('DSG1850-Linguagem, Comunicação e Discurso no Design II (2cr)', 100, 880);
    text('DSG1849-O Corpo Humano como Questão em Design (4cr)', 580, 820);
    text('DSG1851-Geometria Descritiva (2cr)', 580, 840);
    text('DSG1861-Práticas Experimentais I (2cr)', 580, 860);
    text('DSG0860-Optativas Práticas Experimentais (4cr)', 580, 880);
  }
  if (qualPeriodo=='4o') {
    text('DSG1804-Conteúdos Estruturantes: Projetar para a Sociedade (2cr)', 100, 820);
    text('DSG1814-Projeto: Projetar para a Sociedade (6cr)', 100, 840);
    text('DSG1852-Fundamentos em Ergodesign (2cr)', 100, 860);
    text('DSG1854-Linguagem e Estruturas (4cr)', 100, 880);
    text('DSG1853-Desenho Técnico (2cr)', 580, 820);
    text('DSG1862-Práticas Experimentais II (2cr)', 580, 840);
    text('DSG0860-Optativas Práticas Experimentais (2cr)', 580, 860);
    text('CRE0710-Optativas de CRE (4cr)', 580, 880);
  }
  if (qualPeriodo=='5o') {
    text('DSG1805-Conteúdos Estruturantes: Projetar para Concretizar (2cr)', 100, 820);
    text('DSG1815-Projeto: Projetar para Concretizar (6cr)', 100, 840);
    text('DSG1824-Teoria do Objeto (2cr)', 100, 860);
    text('DSG1825-História da Arte (2cr)', 100, 880);
    text('DSG1855-Linguagem, Comunicação e Discurso no Design III (3cr)', 580, 820);
    text('DSG1856-Biônica (2cr)', 580, 840);
    text('DSG1863-Práticas Experimentais III (4cr)', 580, 860);
    text('DSG001/DSG002/DSG003/DSG004/DSG005/DSG006-Optativas de Ênfase (2cr)', 580, 880);
  }
  if (qualPeriodo=='6o') {
    text('DSG1806-Cont. Estr: Projetar para Ressignifar a Prática (2cr)', 100, 820);
    text('DSG1816-Projeto: Projetar para Ressignificar a Prática (6cr)', 100, 840);
    text('DSG1826-Questões em Ênfases (2cr)', 100, 860);
    text('DSG0830-Optativas de História da Arte e do Design (2cr)', 100, 880);
    text('DSG1857-Ergodesign (2cr)', 580, 820);
    text('DSG001/DSG002/DSG003/DSG004/DSG005/DSG006-Optativas de Ênfase (4cr)', 580, 840);
    text('INT0100-Optativas do Núcleo de Fundamentação Interdisciplinar/Interdepartamental (6cr)', 580, 860);
    text('CRE1141-Ética Cristã (2cr)', 580, 880);
  }
  if (qualPeriodo=='7o') {
    text('DSG1901-Estágio Supervisionado (2cr)', 100, 820);
    text('DSG1902-Documentação de Projeto para TCC em Design (2cr)', 100, 840);
    text('DSG1900-Projeto Interdisciplinar de Ênfase (4cr)', 100, 860);
    text('DSG0910-Anteprojeto Final de Ênfase (3cr)', 100, 880);
    text('DSG0190-Optativas desenho de Ênfases (4cr)', 580, 820);
    text('DSG0010/DSG0011/DSG0012/DSG0013/DSG0014/DSG0015-Optativas Oficinas de ênfase (4cr)', 580, 840);
    text('DSG001/DSG002/DSG003/DSG004/DSG005/DSG006-Optativas de Ênfase (6cr)', 580, 860);
  }
  if (qualPeriodo=='8o') {
    text('DSG1920/DSG1921/DSG1922/DSG1923/DSG1924/DSG1925-Projeto Final de Ênfase (8cr)', 100, 820);
    text('DSG001/DSG002/DSG003/DSG004/DSG005/DSG006-Optativas de Ênfase (2cr)', 100, 840);
    text('DSG0010/DSG0011/DSG0012/DSG0013/DSG0014/DSG0015-Optativas Oficinas de ênfase (4cr)', 100, 860);
    text('FIL1815-Estética (4cr)', 100, 880);
    text('CRE1175-Ética Socioambielntal e Direitos Humanos (2cr)', 100, 900);
  }
}
