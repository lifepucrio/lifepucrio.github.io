let meuMapa;
let minhaTabela;
let tabelaReferencia;
let menuOrigem;
let menuDestino; // Variável para o segundo menu

// Esta variável vai guardar a "camada" de linhas
// para podermos limpá-la facilmente
let activePolylineGroup;

// --- MUDANÇA: Variáveis para os elementos da UI de Informação ---
let infoPartida, infoChegada, infoDuracao;
let infoDistancia; // <-- NOVA VARIÁVEL
let infoVelocidade; // <-- NOVA VARIÁVEL
// --- FIM DA MUDANÇA ---

// --- DADOS INICIAIS ---
let initialLat = -22.92;
let initialLng = -43.23;
const initialZoom = 15;

function preload() {
  // 1. Carrega as tabelas
  minhaTabela = loadTable('assets/GPSLOG72.csv', 'csv', 'header');
  tabelaReferencia = loadTable('assets/referencia.csv', 'csv', 'header');
}

function setup() {
  // 1. Centraliza o mapa com base na tabela GPS inicial
  if (minhaTabela && minhaTabela.getRowCount() > 0) {
    initialLat = parseFloat(minhaTabela.get(0, 'latitude'));
    initialLng = parseFloat(minhaTabela.get(0, 'longitude'));
    console.log("Mapa centrado em:", initialLat, initialLng);
  } else {
    console.log("Tabela 'minhaTabela' vazia. Usando coordenadas padrão.");
  }

  // Define as camadas de mapa (Base Layers)
  let mapaRua = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  let mapaSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; ...'
  });

  // 2. Cria o mapa Leaflet
  meuMapa = L.map('map', {
      center: [initialLat, initialLng],
      zoom: initialZoom,
      layers: [mapaRua] 
  });

  // 3. Define os grupos de camadas para o controle
  let baseMaps = {
    "Mapa": mapaRua,
    "Satélite": mapaSatelite
  };

  // 4. Cria uma "camada" (grupo) para guardar nossas trilhas
  activePolylineGroup = L.layerGroup().addTo(meuMapa); 
  
  let overlayMaps = {
    "Trilha": activePolylineGroup
  };
  
  // 6. Adiciona o controle de camadas ao mapa
  L.control.layers(baseMaps, overlayMaps).addTo(meuMapa);

  // 7. Encontra e popula os menus
  menuOrigem = select('#menu-origem');
  menuDestino = select('#menu-destino'); 

  // --- MUDANÇA: Encontra os elementos de informação ---
  infoPartida = select('#info-partida');
  infoChegada = select('#info-chegada');
  infoDuracao = select('#info-duracao');
  infoDistancia = select('#info-distancia'); // <-- ENCONTRA O NOVO ELEMENTO
  infoVelocidade = select('#info-velocidade'); // <-- ENCONTRA O NOVO ELEMENTO
  // --- FIM DA MUDANÇA ---

  // Popula o menu de Origem
  if (tabelaReferencia) {
    const todasAsOrigens = tabelaReferencia.getColumn('origem');
    const origensUnicas = [...new Set(todasAsOrigens)]; 
    origensUnicas.sort();
    
    menuOrigem.option('Selecione uma origem...'); 
    
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
  
  // Prepara o menu de Destino
  menuDestino.option('Selecione um destino...');
  menuDestino.disable('Selecione um destino...');
  menuDestino.changed(onDestinoChange); 
  
  // Não desenha a trilha inicial
}

// --- FUNÇÃO DE DESENHO DA TRILHA (MODIFICADA) ---
function desenharTrilha() {
  if (!minhaTabela) return;
  
  // Verifica se as colunas necessárias existem
  const temTempo = minhaTabela.getColumn('time');
  const temVelocidade = minhaTabela.getColumn('speed');
  const temUmidade = minhaTabela.getColumn('umidade');
  
  for (let linha = 1; linha < minhaTabela.getRowCount(); linha++) {
    let latAnt = parseFloat(minhaTabela.get(linha - 1, 'latitude'));
    let lonAnt = parseFloat(minhaTabela.get(linha - 1, 'longitude'));
    let latAtual = parseFloat(minhaTabela.get(linha, 'latitude'));
    let lonAtual = parseFloat(minhaTabela.get(linha, 'longitude'));
    
    // Validação para pular linhas com dados inválidos
    if (isNaN(latAnt) || isNaN(lonAnt) || isNaN(latAtual) || isNaN(lonAtual)) {
      continue;
    }
    
    // 1. Dados para a COR da trilha (baseado na temperatura)
    let temperatura = parseFloat(minhaTabela.get(linha, 'temperatura'));
    let tempone = map(temperatura, 20, 35, 0, 255);
    let temptwo = map(temperatura, 25, 40, 255, 0);
    let corHex = color(tempone, 0, temptwo).toString('#rrggbb');

    // 2. Dados para o POPUP (Tooltip)
    // Usamos os dados do ponto "atual" (linha)
    
    // Horário
    let horaFormatada = 'N/D';
    if (temTempo) {
      horaFormatada = formatarHora(minhaTabela.get(linha, 'time'));
    }
    
    // Velocidade (convertendo de knots para km/h, como no seu código p5 original * 1.6)
    let speedKmh = 'N/D';
    if (temVelocidade) {
      let speed = parseFloat(minhaTabela.get(linha, 'speed'));
      if (!isNaN(speed)) {
        speedKmh = (speed * 1.6).toFixed(1);
      }
    }
    
    // Temperatura
    let tempFormatada = 'N/D';
    if (!isNaN(temperatura)) {
      tempFormatada = temperatura.toFixed(1);
    }
    
    // Umidade
    let umidadeFormatada = 'N/D';
    if (temUmidade) {
      let umidade = parseFloat(minhaTabela.get(linha, 'umidade'));
      if (!isNaN(umidade)) {
        umidadeFormatada = umidade.toFixed(1);
      }
    }

    // 3. Monta o HTML para o popup
    let tooltipContent = `
      <div style="font-family: Arial, sans-serif; font-size: 0.9em;">
        <strong>Horário:</strong> ${horaFormatada}<br>
        <strong>Velocidade:</strong> ${speedKmh} km/h<br>
        <strong>Temp.:</strong> ${tempFormatada} °C<br>
        <strong>Umidade:</strong> ${umidadeFormatada} %
      </div>
    `;

    // 4. Cria o segmento da trilha
    const segmentPath = [
      [latAnt, lonAnt],
      [latAtual, lonAtual]
    ];
    
    // 5. Adiciona o segmento ao mapa e ANEXA o tooltip
    L.polyline(segmentPath, {
      color: corHex,
      weight: 5
    })
    .bindTooltip(tooltipContent, { sticky: true }) // sticky: true faz o popup seguir o mouse
    .addTo(activePolylineGroup);
  }
}
// --- FIM DA MUDANÇA ---

// --- FUNÇÃO CHAMADA QUANDO O MENU DE ORIGEM MUDA ---
function onOrigemChange() {
  let origemSelecionada = menuOrigem.value();
  
  // Limpa a trilha anterior
  if (activePolylineGroup) {
    activePolylineGroup.clearLayers();
  }
  
  // --- MUDANÇA: Limpa as informações da viagem anterior ---
  infoPartida.html('--:--:--');
  infoChegada.html('--:--:--');
  infoDuracao.html('-- min');
  infoDistancia.html('-- km'); // <-- LIMPA A DISTÂNCIA
  infoVelocidade.html('-- km/h'); // <-- LIMPA A VELOCIDADE
  // --- FIM DA MUDANÇA ---

  // 1. Limpa e reseta o menu de destino
  menuDestino.html(''); 
  menuDestino.option('Selecione um destino...');
  menuDestino.disable('Selecione um destino...');
  
  if (origemSelecionada === 'Selecione uma origem...') {
    return; 
  }
  
  console.log("Origem selecionada:", origemSelecionada);
  
  // 2. Encontra os destinos possíveis
  let destinosPossiveis = new Set(); 
  if (tabelaReferencia) {
    let linhasEncontradas = tabelaReferencia.findRows(origemSelecionada, 'origem');
    for (let row of linhasEncontradas) {
      destinosPossiveis.add(row.get('destino'));
    }
  }
  
  // 3. Popula o menu de destino
  let destinosArray = [...destinosPossiveis].sort();
  if (destinosArray.length > 0) {
    for (let destino of destinosArray) {
      menuDestino.option(destino);
    }
    menuDestino.enable(); 
    menuDestino.elt.options[0].disabled = true; 
  } else {
    menuDestino.html('');
    menuDestino.option('Nenhum destino...');
    menuDestino.disable('Nenhum destino...');
  }
}


// --- FUNÇÃO CHAMADA QUANDO O MENU DE DESTINO MUDA ---
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
    for (let row of tabelaReferencia.rows) {
      if (row.get('origem') === origemSelecionada && row.get('destino') === destinoSelecionado) {
        nomeArquivo = row.get('arquivo');
        break; 
      }
    }
  }

  // 2. Carregar a tabela
  if (nomeArquivo) {
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
          
          // --- MUDANÇA: Calcular e Exibir Tempos, Distância e Velocidade ---
          calcularExibirTempos(minhaTabela);
          calcularExibirDistancia(minhaTabela);
          calcularExibirVelocidadeMedia(minhaTabela); // <-- NOVA CHAMADA
          // --- FIM DA MUDANÇA ---
          
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

// --- FUNÇÕES AUXILIARES DE TEMPO (NÃO MUDAM) ---

/**
 * Calcula e exibe os horários de partida, chegada e duração.
 * @param {p5.Table} tabela A tabela de dados da trilha (minhaTabela).
 */
function calcularExibirTempos(tabela) {
  // Verifica se a coluna 'time' existe
  if (!tabela.getColumn('time')) {
    console.warn("Coluna 'time' não encontrada na tabela.");
    infoPartida.html('N/D');
    infoChegada.html('N/D');
    infoDuracao.html('-- min');
    return;
  }

  let rowCount = tabela.getRowCount();
  if (rowCount === 0) return; // Sai se a tabela estiver vazia

  // Pega o primeiro e o último registro de tempo
  let timeStrPartida = tabela.get(0, 'time');
  let timeStrChegada = tabela.get(rowCount - 1, 'time');

  // 1. Exibe os horários formatados
  infoPartida.html(formatarHora(timeStrPartida));
  infoChegada.html(formatarHora(timeStrChegada));

  // 2. Calcula a Duração
  try {
    let dataPartida = parseHoraParaData(timeStrPartida);
    let dataChegada = parseHoraParaData(timeStrChegada);

    // Diferença em milissegundos
    let diffMs = dataChegada.getTime() - dataPartida.getTime();
    
    // Converte para minutos e arredonda para cima
    let diffMinutos = Math.ceil(diffMs / (1000 * 60)); 

    // --- MUDANÇA: Formata a duração em horas e minutos ---
    if (diffMinutos < 0) {
       // Acontece se a viagem passar da meia-noite
       infoDuracao.html("N/D");
    } else if (diffMinutos < 60) {
       // Menos de 1 hora
       infoDuracao.html(`${diffMinutos} min`);
    } else {
       // 1 hora ou mais
       let horas = Math.floor(diffMinutos / 60);
       let minutos = diffMinutos % 60;
       infoDuracao.html(`${horas}h ${minutos} min`);
    }
    // --- FIM DA MUDANÇA ---

  } catch (e) {
    console.error("Erro ao calcular duração:", e);
    infoDuracao.html("-- min");
  }
}

/**
 * Formata uma string de tempo (ex: "143005") para "14:30:05".
 * Assume o formato HHMMSS.
 */
function formatarHora(timeStr) {
  if (!timeStr || timeStr.length < 6) return "--:--:--";
  // Garante que a string tenha 6 dígitos (caso seja "93005" em vez de "093005")
  timeStr = timeStr.padStart(6, '0'); 
  
  let h = timeStr.substring(0, 2);
  let m = timeStr.substring(2, 4);
  let s = timeStr.substring(4, 6);
  return `${h}:${m}:${s}`;
}

/**
 * Converte uma string de tempo (HHMMSS) para um objeto Date.
 * Facilita o cálculo da diferença de tempo.
 */
function parseHoraParaData(timeStr) {
  timeStr = timeStr.padStart(6, '0');
  let h = parseInt(timeStr.substring(0, 2), 10);
  let m = parseInt(timeStr.substring(2, 4), 10);
  let s = parseInt(timeStr.substring(4, 6), 10);
  
  let data = new Date(); // Cria uma data de "hoje"
  data.setHours(h, m, s, 0); // Define a hora, min, seg, ms
  return data;
}

// --- FUNÇÕES AUXILIARES DE DISTÂNCIA (NÃO MUDAM) ---

/**
 * Calcula a distância total da trilha e exibe na UI.
 * @param {p5.Table} tabela A tabela de dados da trilha (minhaTabela).
 */
function calcularExibirDistancia(tabela) {
  // Verifica se as colunas de lat/lng existem
  if (!tabela.getColumn('latitude') || !tabela.getColumn('longitude')) {
    console.warn("Colunas 'latitude' ou 'longitude' não encontradas.");
    infoDistancia.html('N/D');
    return;
  }
  
  let rowCount = tabela.getRowCount();
  // Precisa de pelo menos 2 pontos para calcular uma distância
  if (rowCount < 2) { 
    infoDistancia.html('0.00 km');
    return;
  }
  
  let distanciaTotalKm = 0;
  
  // Itera por todos os pontos, começando do segundo (índice 1)
  for (let linha = 1; linha < rowCount; linha++) {
    let latAnt = parseFloat(tabela.get(linha - 1, 'latitude'));
    let lonAnt = parseFloat(tabela.get(linha - 1, 'longitude'));
    let latAtual = parseFloat(tabela.get(linha, 'latitude'));
    let lonAtual = parseFloat(tabela.get(linha, 'longitude'));
    
    // Pula o cálculo se algum dado for inválido
    if (isNaN(latAnt) || isNaN(lonAnt) || isNaN(latAtual) || isNaN(lonAtual)) {
      continue;
    }
    
    // Soma a distância do segmento
    distanciaTotalKm += getHaversineDistance(latAnt, lonAnt, latAtual, lonAtual);
  }
  
  // Exibe a distância total formatada com 2 casas decimais
  infoDistancia.html(`${distanciaTotalKm.toFixed(2)} km`);
}

/**
 * Calcula a distância entre dois pontos (lat/lng) usando a fórmula de Haversine.
 * @returns {number} A distância em quilômetros (km).
 */
function getHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Raio da Terra em km
  
  let dLat = deg2rad(lat2 - lat1);
  let dLon = deg2rad(lon2 - lon1);
  
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c; // Distância em km
  
  return d;
}

/**
 * Converte graus para radianos.
 */
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// --- NOVA FUNÇÃO AUXILIAR DE VELOCIDADE ---

/**
 * Calcula a velocidade média (km/h) e exibe na UI.
 * @param {p5.Table} tabela A tabela de dados da trilha (minhaTabela).
 */
function calcularExibirVelocidadeMedia(tabela) {
  // 1. Obter Duração Total em Horas
  if (!tabela.getColumn('time')) {
    console.warn("Coluna 'time' não encontrada para Vel. Média.");
    infoVelocidade.html('N/D');
    return;
  }
  let rowCount = tabela.getRowCount();
  if (rowCount < 2) {
    infoVelocidade.html('0.00 km/h');
    return;
  }
  
  let timeStrPartida = tabela.get(0, 'time');
  let timeStrChegada = tabela.get(rowCount - 1, 'time');
  let diffMinutos = 0;
  
  try {
    let dataPartida = parseHoraParaData(timeStrPartida);
    let dataChegada = parseHoraParaData(timeStrChegada);
    let diffMs = dataChegada.getTime() - dataPartida.getTime();
    diffMinutos = Math.ceil(diffMs / (1000 * 60));
  } catch (e) {
    console.error("Erro ao calcular duração para Vel. Média:", e);
    infoVelocidade.html('N/D');
    return;
  }
  
  if (diffMinutos <= 0) {
    console.warn("Duração inválida (<= 0) para Vel. Média.");
    infoVelocidade.html('N/D');
    return;
  }
  
  let totalHoras = diffMinutos / 60.0;

  // 2. Obter Distância Total em KM
  if (!tabela.getColumn('latitude') || !tabela.getColumn('longitude')) {
    console.warn("Colunas 'latitude' ou 'longitude' não encontradas para Vel. Média.");
    infoVelocidade.html('N/D');
    return;
  }
  
  let distanciaTotalKm = 0;
  for (let linha = 1; linha < rowCount; linha++) {
    let latAnt = parseFloat(tabela.get(linha - 1, 'latitude'));
    let lonAnt = parseFloat(tabela.get(linha - 1, 'longitude'));
    let latAtual = parseFloat(tabela.get(linha, 'latitude'));
    let lonAtual = parseFloat(tabela.get(linha, 'longitude'));
    
    if (isNaN(latAnt) || isNaN(lonAnt) || isNaN(latAtual) || isNaN(lonAtual)) {
      continue;
    }
    distanciaTotalKm += getHaversineDistance(latAnt, lonAnt, latAtual, lonAtual);
  }

  // 3. Calcular e Exibir Velocidade Média
  let velocidadeMedia = distanciaTotalKm / totalHoras;
  infoVelocidade.html(`${velocidadeMedia.toFixed(2)} km/h`);
}
