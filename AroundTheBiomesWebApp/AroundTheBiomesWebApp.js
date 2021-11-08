//exemplo utilizando as bibliotecas Mappa e Geolocation
//https://github.com/cvalenzuela/Mappa
//https://github.com/bmoren/p5.geolocation
var polarLat = 77.466028;
var polarLon = -41.835938;
var tundraLat = 66.302205;
var tundraLon = 175.341797;
var taigaLat = 65.512963;
var taigaLon = -144.887695;
var mixedLat = 42.151187;
var mixedLon = 23.550568;
var montaneLat = 4.164267;
var montaneLon = 114.664993;
var steppeLat = 37.463141;
var steppeLon = -96.484466;
var savannaLat = -17.887273;
var savannaLon = 24.552383;
var tropicsLat = 9.424677;
var tropicsLon = -83.256798;
var desertLat = 19.748609;
var desertLon = 23.965302;
var mediterraneanLat = 32.738772;
var mediterraneanLon = 35.003128;

var polar;
var tundra;
var taiga;
var mixed;
var montane;
var steppe;
var savanna;
var tropics;
var desert;
var mediterranean;

var meuMapa;

var bioma = 0;

//utilizando a api Leaflet. Consulte a referência do
//mappa para utilizar api Google
var mappa = new Mappa('Leaflet');

var options = {
  lat:
0,
  lng:
0,
  zoom:
4,
  style:
"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  };

function preload() {
  //acessar a posição no GPS
  locationData =  getCurrentPosition();
  polar = loadImage('Polar.jpg');
  tundra = loadImage('Tundra.jpg');
  taiga = loadImage('Taiga.jpg');
  mixed = loadImage('Mixed.png');
  montane = loadImage('Montane.jpg');
  steppe = loadImage('Steppe.jpg');
  savanna = loadImage('Savanna.jpg');
  tropics = loadImage('Tropics.jpg');
  desert = loadImage('Desert.jpg');
  mediterranean = loadImage('Mediterranean.jpg');
}

function setup() {
  //atualizar a variavel options
  //com a latitude e longitude do GPS
  options.lat = locationData.latitude;
  options.lng = locationData.longitude;
  createCanvas(640, 640);
  //criar o mapa e posicionar no canvas
  //com a latitude e longitude escolhidas
  meuMapa = mappa.tileMap(options);
  meuMapa.overlay(canvas);
  //Só redesenhar a marcação quando o mapa mudar
  //(arrastar ou interagir com o mapa) e não a cada frame
  //para não ficar pesado
  meuMapa.onChange(desenhaMapa);
}

function desenhaMapa() {
  // limpar tela
  clear();
  //criar uma variavel para posicionar a elipse
  //e converter latitude e longitude
  //para uma posição em pixels
  var pos = meuMapa.latLngToPixel(locationData.latitude, locationData.longitude);
  var posPolar = meuMapa.latLngToPixel(polarLat, polarLon);
  var posTundra = meuMapa.latLngToPixel(tundraLat, tundraLon);
  var posTaiga = meuMapa.latLngToPixel(taigaLat, taigaLon);
  var posMixed = meuMapa.latLngToPixel(mixedLat, mixedLon);
  var posMontane = meuMapa.latLngToPixel(montaneLat, montaneLon);
  var posSteppe = meuMapa.latLngToPixel(steppeLat, steppeLon);
  var posSavanna = meuMapa.latLngToPixel(savannaLat, savannaLon);
  var posTropics = meuMapa.latLngToPixel(tropicsLat, tropicsLon);
  var posDesert = meuMapa.latLngToPixel(desertLat, desertLon);
  var posMediterranean = meuMapa.latLngToPixel(mediterraneanLat, mediterraneanLon);

  //desenhar uma elipse sobre o local onde você está
  fill(255, 255, 0, 150);
  stroke(255, 0, 0);
  ellipse(pos.x, pos.y, 50, 50);
  image(polar, posPolar.x, posPolar.y);
  image(tundra, posTundra.x, posTundra.y);
  image(taiga, posTaiga.x, posTaiga.y);
  image(mixed, posMixed.x, posMixed.y);
  image(montane, posMontane.x, posMontane.y);
  image(steppe, posSteppe.x, posSteppe.y);
  image(savanna, posSavanna.x, posSavanna.y);
  image(tropics, posTropics.x, posTropics.y);
  image(desert, posDesert.x, posDesert.y);
  image(mediterranean, posMediterranean.x, posMediterranean.y);
}

function draw() {
}

function touchStarted() {
  bioma = bioma +1;
  if (bioma == 1) {
    meuMapa.map.flyTo([polarLat, polarLon], 4);
  }
  if (bioma == 2) {
    meuMapa.map.flyTo([tundraLat, tundraLon], 4);
  }
  if (bioma == 3) {
    meuMapa.map.flyTo([taigaLat, taigaLon], 4);
  }
  if (bioma == 4) {
    meuMapa.map.flyTo([mixedLat, mixedLon], 4);
  }
  if (bioma == 5) {
    meuMapa.map.flyTo([montaneLat, montaneLon], 4);
  }
  if (bioma == 6) {
    meuMapa.map.flyTo([steppeLat, steppeLon], 4);
  }
  if (bioma == 7) {
    meuMapa.map.flyTo([savannaLat, savannaLon], 4);
  }
  if (bioma == 8) {
    meuMapa.map.flyTo([tropicsLat, tropicsLon], 4);
  }
  if (bioma == 9) {
    meuMapa.map.flyTo([desertLat, desertLon], 4);
  }
  if (bioma == 10) {
    meuMapa.map.flyTo([mediterraneanLat, mediterraneanLon], 4);
  }
  if (bioma == 11) {
  bioma = 0;
  }
}
