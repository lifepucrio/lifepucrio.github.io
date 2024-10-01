//exemplo utilizando as bibliotecas Mappa e Geolocation

var meuMapa;

//utilizando a api Leaflet. Consulte a referência do
//mappa para utilizar api Google
var mappa = new Mappa('Leaflet');
let minhaTabela;
var pos;

var options = {
  //configurações iniciais utilizando a
  //latitude e longitude do Rio de Janeiro
  lat:
-22.97,
  lng:
-43.20,
  zoom:
14,
  //estilos de mapa: experimente comentar e descomentar as linhas abaixo
  style:
"http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  //style: "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
  //style: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
  //style: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
  }

function preload() {
  //acessar a posição no GPS
  //locationData =  getCurrentPosition();
  minhaTabela = loadTable('assets/dados.csv', 'csv', 'header');
}

function setup() {
  //atualizar com a latitude e longitude do GPS

  createCanvas(windowWidth, windowHeight);
  meuMapa = mappa.tileMap(options);
  meuMapa.overlay(canvas);
}

function draw() {
  //limpar o canvas para não deixar rastro
  clear();
  for (let linha = 0; linha < minhaTabela.getRowCount(); linha++) {
    let latitude=minhaTabela.get(linha, 'lat');
    let longitude=minhaTabela.get(linha, 'long');
    pos = meuMapa.latLngToPixel(latitude, longitude);
    fill(255, 0, 0,100);
    noStroke();
    ellipse(pos.x, pos.y, 20, 20);
  }
}
