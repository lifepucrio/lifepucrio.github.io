//function keyPressed() {
//  if (keyCode === RIGHT_ARROW) {
//    qualHora++;
//    if (qualHora > 18) {
//      qualHora=7;
//      if (dia=='Segunda') {
//        dia='Terça';
//      } else if (dia=='Terça') {
//        dia='Quarta';
//      } else if (dia=='Quarta') {
//        dia='Quinta';
//      } else if (dia=='Quinta') {
//        dia='Sexta';
//      }
//    }
//    console.log(qualHora);
//    redraw();
//  }
//  if (keyCode === LEFT_ARROW) {
//    qualHora--;
//    if (qualHora < 7) {
//      qualHora=18;
//      if (dia=='Sexta') {
//        dia='Quinta';
//      } else if (dia=='Quinta') {
//        dia='Quarta';
//      } else if (dia=='Quarta') {
//        dia='Terça';
//      } else if (dia=='Terça') {
//        dia='Segunda';
//      }
//    }
//    console.log(qualHora);
//    redraw();
//  }
//  if (keyCode === DOWN_ARROW) {
//    if (dia=='Segunda') {
//      dia='Terça';
//    } else if (dia=='Terça') {
//      dia='Quarta';
//    } else if (dia=='Quarta') {
//      dia='Quinta';
//    } else if (dia=='Quinta') {
//      dia='Sexta';
//    }
//    console.log(dia);
//    redraw();
//  }
//  if (keyCode === UP_ARROW) {
//    if (dia=='Sexta') {
//      dia='Quinta';
//    } else if (dia=='Quinta') {
//      dia='Quarta';
//    } else if (dia=='Quarta') {
//      dia='Terça';
//    } else if (dia=='Terça') {
//      dia='Segunda';
//    }
//    console.log(dia);
//    redraw();
//  }
//}
