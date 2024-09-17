function desenhaMapa() {

  // limpar tela
  clear();

  // Pegar a localização atual 
  var gps = myMap.latLngToPixel(options.lat, options.lng);

  // Desenhar ellipse - Geolocalização
  fill(12, 151, 242);
  ellipse(gps.x, gps.y, 45, 45);
  // Texto "Rio" - Geolocalização
  textFont(fonte);
  textSize(20);
  textAlign(CENTER);
  fill(255);
  text("Rio", gps.x, gps.y + 6);


  //Desenhar ellipse nas coordenadas presentes no array
  for (let i = 0; i < arrayCoordenadas.length; i++) {

    var newPosition = myMap.latLngToPixel(arrayCoordenadas[i].lat, arrayCoordenadas[i].lng);
    stroke(12, 151, 242);
    fill(255);
    ellipse(newPosition.x, newPosition.y, 45, 45);

    // Texto - Geolocalização
    textFont(fonte);
    textSize(18);
    textAlign(CENTER);
    stroke(12, 151, 242);
    fill(255);
    text(arrayCoordenadas[i], newPosition.x, newPosition.y -35);
  }
}
