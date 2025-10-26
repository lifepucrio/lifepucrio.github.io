let meuMapa;
let minhaTabela;
let tabelaReferencia;
let menuOrigem;
let menuDestino; // Variável para o segundo menu

// Esta variável vai guardar a "camada" de linhas
// para podermos limpá-la facilmente
let activePolylineGroup;

// --- DADOS INICIAIS ---
let initialLat = -22.92;
let initialLng = -43.23;
const initialZoom = 15;

function preload() {
  // 1. Carrega as tabelas (o p5.js ainda é ótimo para isso)
  minhaTabela = loadTable('assets/GPSLOG72.csv', 'csv', 'header');
  tabelaReferencia = loadTable('assets/referencia.csv', 'csv', 'header');
}

function setup() {
  // --- NÃO HÁ 'createCanvas()' OU 'draw()' ---

  // 1. Centraliza o mapa com base na tabela GPS inicial
  if (minhaTabela && minhaTabela.getRowCount() > 0) {
    initialLat = parseFloat(minhaTabela.get(0, 'latitude'));
    initialLng = parseFloat(minhaTabela.get(0, 'longitude'));
    console.log("Mapa centrado em:", initialLat, initialLng);
  } else {
    console.log("Tabela 'minhaTabela' vazia. Usando coordenadas padrão.");
  }

  // --- MUDANÇA: Define as camadas de mapa (Base Layers) ---
  
  // Camada de Rua (OpenStreetMap)
  let mapaRua = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Camada de Satélite (Esri World Imagery)
  let mapaSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  });

  // 2. Cria o mapa Leaflet
  // Define 'mapaRua' como a camada padrão a ser exibida
  meuMapa = L.map('map', {
      center: [initialLat, initialLng],
      zoom: initialZoom,
      layers: [mapaRua] // Define a camada de rua como padrão
  });

  // 3. Define os grupos de camadas para o controle
  let baseMaps = {
    "Mapa": mapaRua,
    "Satélite": mapaSatelite
  };
  // --- FIM DA MUDANÇA ---


  // 4. Cria uma "camada" (grupo) para guardar nossas trilhas
  activePolylineGroup = L.layerGroup().addTo(meuMapa); // Adiciona ao mapa
  
  // --- MUDANÇA: Define as camadas de Sobreposição (Overlays) ---
  let overlayMaps = {
    "Trilha": activePolylineGroup
  };
  
  // 6. Adiciona o controle de camadas ao mapa
  L.control.layers(baseMaps, overlayMaps).addTo(meuMapa);
  // --- FIM DA MUDANÇA ---


  // 7. Encontra e popula os menus (Era o passo 5)
  menuOrigem = select('#menu-origem');
  menuDestino = select('#menu-destino'); // Encontra o menu destino

  // Popula o menu de Origem
  if (tabelaReferencia) {
    const todasAsOrigens = tabelaReferencia.getColumn('origem');
    const origensUnicas = [...new Set(todasAsOrigens)]; // Pega apenas valores únicos
    origensUnicas.sort();
    
    menuOrigem.option('Selecione uma origem...'); // Adiciona a opção padrão
    
    let gaveaExists = false;
    for (let origem of origensUnicas) {
      menuOrigem.option(origem);
      if (origem.trim() === 'Gavea') { 
        gaveaExists = true;
      }
    }
    
    menuOrigem.changed(onOrigemChange); 
    
    if (gaveaExists) {
        console.log("Definindo 'Gavea' como origem padrão.");
        menuOrigem.value('Gavea'); 
        onOrigemChange(); 
    } else {
        console.warn("'Gavea' não encontrada na lista. Usando padrão.");
        menuOrigem.disable('Selecione uma origem...');
    }

  } else {
    console.error("A tabela 'referencia.csv' não foi carregada!");
    menuOrigem.option('Erro ao carregar');
  }
  
  // Prepara o menu de Destino (começa desabilitado)
  menuDestino.option('Selecione um destino...');
  menuDestino.disable('Selecione um destino...');
  menuDestino.changed(onDestinoChange); 
  
  // Não desenha a trilha inicial
  // desenharTrilha(); 
}

// --- FUNÇÃO DE DESENHO DA TRILHA (AGORA NO LEAFLET) ---
function desenharTrilha() {
  // (Esta função não precisa de mudanças)
  if (!minhaTabela) return;
  
  for (let linha = 1; linha < minhaTabela.getRowCount(); linha++) {
    let latAnt = parseFloat(minhaTabela.get(linha - 1, 'latitude'));
    let lonAnt = parseFloat(minhaTabela.get(linha - 1, 'longitude'));
    let latAtual = parseFloat(minhaTabela.get(linha, 'latitude'));
    let lonAtual = parseFloat(minhaTabela.get(linha, 'longitude'));
    let temperatura = parseFloat(minhaTabela.get(linha, 'temperatura'));
    
    let tempone = map(temperatura, 22, 31, 0, 255);
    let temptwo = map(temperatura, 22, 31, 255, 0);
    let corHex = color(tempone, 0, temptwo).toString('#rrggbb');

    const segmentPath = [
      [latAnt, lonAnt],
      [latAtual, lonAtual]
    ];
    
    L.polyline(segmentPath, {
      color: corHex,
      weight: 5
    }).addTo(activePolylineGroup);
  }
}

// --- FUNÇÃO CHAMADA QUANDO O MENU DE ORIGEM MUDA ---
function onOrigemChange() {
  let origemSelecionada = menuOrigem.value();
  
  // --- MUDANÇA: Limpa a trilha anterior ---
  if (activePolylineGroup) {
    activePolylineGroup.clearLayers();
  }
  // --- FIM DA MUDANÇA ---

  // 1. Limpa e reseta o menu de destino
  menuDestino.html(''); // Limpa opções antigas
  menuDestino.option('Selecione um destino...');
  menuDestino.disable('Selecione um destino...');
  
  if (origemSelecionada === 'Selecione uma origem...') {
    return; // Sai se voltou para a opção padrão
  }
  
  console.log("Origem selecionada:", origemSelecionada);
  
  // 2. Encontra os destinos possíveis
  let destinosPossiveis = new Set(); // Usamos Set para evitar duplicatas
  if (tabelaReferencia) {
    // Encontra todas as linhas que batem com a origem selecionada
    let linhasEncontradas = tabelaReferencia.findRows(origemSelecionada, 'origem');
    
    for (let row of linhasEncontradas) {
      destinosPossiveis.add(row.get('destino'));
    }
  }
  
  // 3. Popula o menu de destino com as opções encontradas
  let destinosArray = [...destinosPossiveis].sort();
  
  if (destinosArray.length > 0) {
    for (let destino of destinosArray) {
      menuDestino.option(destino);
    }
    menuDestino.enable(); // Habilita o menu
    // Remove a primeira opção ("Selecione...")
    menuDestino.elt.options[0].disabled = true; 
  } else {
    // Caso não encontre destinos
    menuDestino.html('');
    menuDestino.option('Nenhum destino...');
    menuDestino.disable('Nenhum destino...');
  }
}


// --- ATUALIZADO: FUNÇÃO CHAMADA QUANDO O MENU DE DESTINO MUDA ---
function onDestinoChange() {
  let origemSelecionada = menuOrigem.value();
  let destinoSelecionado = menuDestino.value();

  if (destinoSelecionado === 'Selecione um destino...' || destinoSelecionado === 'Nenhum destino...') {
    return;
  }
  
  console.log("Rota selecionada:", origemSelecionada, "->", destinoSelecionado);

  // 1. Encontrar o arquivo correspondente
  let nomeArquivo = null;
  if (tabelaReferencia) {
    // Procura a linha que bate com AMBAS as seleções
    for (let row of tabelaReferencia.rows) {
      if (row.get('origem') === origemSelecionada && row.get('destino') === destinoSelecionado) {
        nomeArquivo = row.get('arquivo');
        break; // Para quando encontrar
      }
    }
  }

  // 2. Carregar a tabela (lógica antiga)
  if (nomeArquivo) {
    // Garante a extensão minúscula
    if (nomeArquivo.toUpperCase().endsWith('.CSV')) {
      nomeArquivo = nomeArquivo.substring(0, nomeArquivo.length - 4) + '.csv';
    }

    let caminhoCompleto = 'assets/' + nomeArquivo;
    console.log("Carregando novo arquivo:", caminhoCompleto);

    loadTable(caminhoCompleto, 'csv', 'header',
      (novaTabela) => {
        console.log("Arquivo", nomeArquivo, "carregado com sucesso.");
        minhaTabela = novaTabela;

        if (minhaTabela && minhaTabela.getRowCount() > 0) {
          let firstLat = parseFloat(minhaTabela.get(0, 'latitude'));
          let firstLng = parseFloat(minhaTabela.get(0, 'longitude'));

          console.log("Recarregando dados em:", firstLat, firstLng);

          // LÓGICA DE RECARGA DO LEAFLET
          activePolylineGroup.clearLayers();
          meuMapa.setView([firstLat, firstLng], meuMapa.getZoom());
          desenharTrilha();
          
        } else {
          console.error("A nova tabela carregada está vazia ou é inválida.");
        }
      },
      (erro) => {
        console.error("Erro ao carregar o arquivo:", caminhoCompleto, erro);
      }
    );
  } else {
    console.error("Não foi possível encontrar um arquivo para a origem:", origemSelecionada, "e destino:", destinoSelecionado);
  }
}

// --- NÃO HÁ 'draw()' OU 'windowResized()' ---
// O Leaflet cuida de redimensionar e redesenhar automaticamente.
