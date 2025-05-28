function montaSerie() {

  //historico dos periodos anteriores
  for (let i=0; i<tabelaSerieHist.getRowCount(); i++) {
    let prof = tabelaSerieHist.get(i, 'PROFESSORES');
    if (prof.includes(qualProf)) {
      let creditos202=tabelaSerieHist.get(i, 'CH20202');
      let creditos211=tabelaSerieHist.get(i, 'CH20211');
      let creditos212=tabelaSerieHist.get(i, 'CH20212');
      let creditos221=tabelaSerieHist.get(i, 'CH20221');
      let creditos222=tabelaSerieHist.get(i, 'CH20222');
      let creditos231=tabelaSerieHist.get(i, 'CH20231');
      let creditos232=tabelaSerieHist.get(i, 'CH20232');
      let creditos241=tabelaSerieHist.get(i, 'CH20241');

      noFill();
      stroke(23, 173, 245, 150);
      strokeWeight(5);
      line(pos202, 760-creditos202*30, pos211, 760-creditos211*30);
      line(pos211, 760-creditos211*30, pos212, 760-creditos212*30);
      line(pos212, 760-creditos212*30, pos221, 760-creditos221*30);
      line(pos221, 760-creditos221*30, pos222, 760-creditos222*30);
      line(pos222, 760-creditos222*30, pos231, 760-creditos231*30);
      line(pos231, 760-creditos231*30, pos232, 760-creditos232*30);
      line(pos232, 760-creditos232*30, pos241, 760-creditos241*30);
      line(pos241, 760-creditos241*30, pos242, 760-totalDeCreditos*30);
      line(pos242, 760-totalDeCreditos*30, pos251, 760-totalDeCreditos251*30);
      line(pos251, 760-totalDeCreditos251*30, pos252, 760-totalDeCreditos252*30);
      noStroke();
      fill(23, 173, 245, 150);
      ellipse(pos202, 760-creditos202*30, 10, 10);
      ellipse(pos211, 760-creditos211*30, 10, 10);
      ellipse(pos212, 760-creditos212*30, 10, 10);
      ellipse(pos221, 760-creditos221*30, 10, 10);
      ellipse(pos222, 760-creditos222*30, 10, 10);
      ellipse(pos231, 760-creditos231*30, 10, 10);
      ellipse(pos232, 760-creditos232*30, 10, 10);
      ellipse(pos241, 760-creditos241*30, 10, 10);
      //situação em 24.2
      ellipse(pos242, 760-totalDeCreditos*30, 10, 10);
      //situação em 25.1
      ellipse(pos251, 760-totalDeCreditos251*30, 10, 10);
      ellipse(pos252, 760-totalDeCreditos252*30, 10, 10);
      textAlign(CENTER);
      fill(0);
      text(creditos202+"cr", pos202, 760-creditos202*30);
      text(creditos211+"cr", pos211, 760-creditos211*30);
      text(creditos212+"cr", pos212, 760-creditos212*30);
      text(creditos221+"cr", pos221, 760-creditos221*30);
      text(creditos222+"cr", pos222, 760-creditos222*30);
      text(creditos231+"cr", pos231, 760-creditos231*30);
      text(creditos232+"cr", pos232, 760-creditos232*30);
      text(creditos241+"cr", pos241, 760-creditos241*30);
      //situação em 24.2
      text(totalDeCreditos+"cr", pos242, 760-totalDeCreditos*30);
      //situação em 25.1
      text(totalDeCreditos251+"cr", pos251, 760-totalDeCreditos251*30);
      text(totalDeCreditos252+"cr", pos252, 760-totalDeCreditos252*30);
    }
  }
}
