//exemplo utilizando a biblioteca Mappa
var movendo;

var myMap;
var mappa = new Mappa('Leaflet');

let arrayCoordenadas = [];

//configurações iniciais utilizando a
//latitude e longitude do Rio de Janeiro
var options = {lat: -22.9448722,lng: -43.2098172,zoom: 10,style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"};

function preload() {
  //acessar a posição no GPS
  minhaLocalizacao =  getCurrentPosition();

  //carregar font
  fonte = loadFont('data/HackBold.ttf');
}

function setup() {
  createCanvas(1000, 600);
  //centraliza na minha localização
  options.lat = minhaLocalizacao.latitude;
  options.lng = minhaLocalizacao.longitude;
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);

  // Só redesenhar a marcação quando o mapa mudar (arrastar ou interagir com o mapa) e não a cada frame. ~evitando ficar pesado~
  myMap.onChange(desenhaMapa);

  // suppress right-click context menu
  document.oncontextmenu = function() { 
    return false;
  }
  noStroke();
}


function draw() {
  //ellipse(mouseX, mouseY, 40, 40);
  //nesse caso, não tem nada no void draw?
}



function mousePressed() {
  if (mouseButton == RIGHT) {
    var position = myMap.pixelToLatLng(mouseX, mouseY);

    // Adicionar a coordenada do click para o Array
    arrayCoordenadas.push(position);
    print(arrayCoordenadas);
    desenhaMapa();
  }
r
}

function keyTyped() {
  if (key == 'r') {
    arrayCoordenadas = [];
    desenhaMapa();
  }
}
