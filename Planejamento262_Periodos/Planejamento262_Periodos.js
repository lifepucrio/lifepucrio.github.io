// ============================================================
// CONSTANTS & CONFIGURATION
// ============================================================
const LAYOUT = {
  rectWidth: 310,
  gap: 4,
  colStart: 100,
  rowStart: 175,
  rowStep: 50,
  rectHeight: 620,
  cornerRadius: 15,
  slotSize: 33,
};

const DAYS = [
  { label: 'SEGUNDA', col: 2 },
  { label: 'TERÇA',   col: 3 },
  { label: 'QUARTA',  col: 4 },
  { label: 'QUINTA',  col: 5 },
  { label: 'SEXTA',   col: 6 },
];

const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// Pre-computed column X positions (indexed by weekday: 2–6)
const COL_X = Object.fromEntries(
  DAYS.map((d, i) => [d.col, LAYOUT.colStart + i * (LAYOUT.rectWidth + LAYOUT.gap)])
);

// Pre-computed row Y positions (indexed by hour: 7–19)
const ROW_Y = Object.fromEntries(
  HOURS.map((h, i) => [h, LAYOUT.rowStart + i * LAYOUT.rowStep])
);

// Slot field offsets within each 33-element block
// Each slot: [codigo, fim, disciplina, turma, sala, periodo]
const SLOT_OFFSETS = [2, 8, 14, 20, 26];
const SLOT_FIELDS  = { codigo: 0, fim: 1, disciplina: 2, turma: 3, sala: 4, periodo: 5 };

// ============================================================
// COLOR MAP  (codigo → fill arguments)
// ============================================================
const COLOR_GROUPS = [
  {
    color: [23, 173, 245, 150],
    codes: ['DSG1841','DSG1843','DSG1845','DSG1846','DSG1848','DSG1850',
            'DSG1849','DSG1851','DSG1852','DSG1854','DSG1853','DSG1855',
            'DSG1856','DSG1857'],
  },
  {
    color: [0, 176, 160, 150],
    codes: ['DSG1842','DSG1844','DSG1847','DSG1861','DSG1862',
            'DSG1863','DSG1864','DSG1865','DSG1866','DSG1867'],
  },
  {
    color: [255, 122, 129, 150],
    codes: ['DSG1811','DSG1812'],
  },
  {
    color: [248, 0, 24, 200],
    codes: ['DSG1813','DSG1814','DSG1815','DSG1500','DSG1300','DSG1400',
            'DSG1816','DSG1900','DSG1910','DSG1911','DSG1912','DSG1913',
            'DSG1914','DSG1915','DSG1920','DSG1921','DSG1922','DSG1923',
            'DSG1924','DSG1925'],
  },
  {
    color: [216, 104, 223, 200],
    codes: ['DSG1821','DSG1822','DSG1823','DSG1824','DSG1825','DSG1826'],
  },
  {
    color: [169, 65, 171, 200],
    codes: ['DSG1423','DSG1830','DSG1831','DSG1832','DSG1833'],
  },
  {
    color: [209, 163, 175, 200],
    codes: ['DSG1801','DSG1802','DSG1803','DSG1804','DSG1805',
            'DSG1806','DSG1901','DSG1902'],
  },
  {
    color: [242, 179, 58, 200],
    codes: ['DSG1145','DSG1424','DSG1926','DSG1930','DSG1931','DSG1932',
            'DSG1933','DSG1934','DSG1937','DSG1941','DSG1943','DSG1944',
            'DSG1945','DSG1946','DSG1948','DSG1949','DSG1950','DSG1951',
            'DSG1952','DSG1953','DSG1954','DSG1956','DSG1957','DSG1958',
            'DSG1959','DSG1961','DSG1962','DSG1963','DSG1964','DSG1965',
            'DSG1966'],
  },
  {
    color: [39, 123, 61, 200],
    codes: ['DSG1927','DSG1928','DSG1971','DSG1972','DSG1973','DSG1974',
            'DSG1975','DSG1976','DSG1977','DSG1978','DSG1979','DSG1981',
            'DSG1982','DSG1983','DSG1984','DSG1985','DSG1986','DSG1987',
            'DSG1988','DSG1989','DSG1990','DSG1991','DSG1992','DSG1993',
            'DSG1994'],
  },
  {
    color: [0, 119, 165, 200],
    codes: ['DSG1807','DSG1808','DSG1969','DSG1994','DSG1995','DSG1996','DSG1997','DSG1998','DSG1999'],
  },
];

// Build a lookup map once at startup: codigo → fill args
const COLOR_MAP = new Map();
for (const group of COLOR_GROUPS) {
  for (const code of group.codes) {
    COLOR_MAP.set(code, group.color);
  }
}

// ============================================================
// DISCIPLINE LISTS PER PERIOD
// ============================================================
const DISCIPLINES = {
  '1o': [
    ['DSG1801-Conteúdos Estruturantes: Olhar Intramuros (2cr)', 'DSG1843-Linguagem Gráfica (2cr)'],
    ['DSG1811-Estúdio: Olhar Intramuros (4cr)',                 'DSG1842-Imagem Fotográfica e Imagem Audiovisual (4cr)'],
    ['DSG1821-História e Teoria do Design I (2cr)',              'DSG1844-Desenho de Observação (2cr)'],
    ['DSG1841-Linguagem e Comunicação no Design (4cr)',          'LET0191-Optativas de Letras Para CDI (4cr)'],
  ],
  '2o': [
    ['DSG1802-Conteúdos Estruturantes: Olhar Extramuros (2cr)', 'DSG1846-A Geometria no Design (2cr)'],
    ['DSG1812-Estúdio: Olhar Extramuros (4cr)',                 'DSG1848-Plástica (3cr)'],
    ['DSG1822-História do Design Brasileiro (2cr)',              'DSG1847-Desenho de Concepção (4cr)'],
    ['DSG1845-Linguagem, comunicação e Discurso no Design I (3cr)', 'CRE1100-O Humano e o Fenômeno Religioso (4cr)'],
  ],
  '3o': [
    ['DSG1803-Conteúdos Estruturantes: Projetar em Parceria (2cr)', 'DSG1849-O Corpo Humano como Questão em Design (4cr)'],
    ['DSG1813-Projeto: Projetar em Parceria (6cr)',                  'DSG1851-Geometria Descritiva (2cr)'],
    ['DSG1823-História e Teoria do Design II (2cr)',                 'DSG1861-Práticas Experimentais I (2cr)'],
    ['DSG1850-Linguagem, Comunicação e Discurso no Design II (2cr)','DSG0860-Optativas Práticas Experimentais (4cr)'],
  ],
  '4o': [
    ['DSG1804-Conteúdos Estruturantes: Projetar para a Sociedade (2cr)', 'DSG1853-Desenho Técnico (2cr)'],
    ['DSG1814-Projeto: Projetar para a Sociedade (6cr)',                  'DSG1862-Práticas Experimentais II (2cr)'],
    ['DSG1852-Fundamentos em Ergodesign (2cr)',                           'DSG0860-Optativas Práticas Experimentais (2cr)'],
    ['DSG1854-Linguagem e Estruturas (4cr)',                              'CRE0710-Optativas de CRE (4cr)'],
  ],
  '5o': [
    ['DSG1805-Conteúdos Estruturantes: Projetar para Concretizar (2cr)', 'DSG1855-Linguagem, Comunicação e Discurso no Design III (3cr)'],
    ['DSG1815-Projeto: Projetar para Concretizar (6cr)',                  'DSG1856-Biônica (2cr)'],
    ['DSG1824-Teoria do Objeto (2cr)',                                    'DSG1863-Práticas Experimentais III (4cr)'],
    ['DSG1825-História da Arte (2cr)',                                    'DSG001/…/DSG006-Optativas de Ênfase (2cr)'],
    ['EXT0100-Optativas de Extensão (3cr-2023.0)', ''],
  ],
  '6o': [
    ['DSG1806-Cont. Estr: Projetar para Ressignifar a Prática (2cr)', 'DSG1857-Ergodesign (2cr)'],
    ['DSG1816-Projeto: Projetar para Ressignificar a Prática (6cr)',   'DSG001/…/DSG006-Optativas de Ênfase (4cr)'],
    ['DSG1826-Questões em Ênfases (2cr)',                              'INT0100-Optativas do Núcleo de Fundamentação Interdisciplinar (6cr-2021.0/3cr-2023.0)'],
    ['DSG0830-Optativas de História da Arte e do Design (2cr)',        'CRE1141-Ética Cristã (2cr)'],
  ],
  '7o': [
    ['DSG1901-Estágio Supervisionado (2cr)',                      'DSG0190-Optativas desenho de Ênfases (4cr)'],
    ['DSG1902-Documentação de Projeto para TCC em Design (2cr)',  'DSG0010/…/DSG0015-Optativas Oficinas de ênfase (4cr)'],
    ['DSG1900-Projeto Interdisciplinar de Ênfase (4cr)',          'DSG001/…/DSG006-Optativas de Ênfase (6cr)'],
    ['DSG0910-Anteprojeto Final de Ênfase (3cr)', ''],
  ],
  '8o': [
    ['DSG1920/…/DSG1925-Projeto Final de Ênfase (8cr)', ''],
    ['DSG001/…/DSG006-Optativas de Ênfase (2cr)', ''],
    ['DSG0010/…/DSG0015-Optativas Oficinas de ênfase (4cr)', ''],
    ['FIL1815-Estética (4cr)', ''],
    ['CRE1175-Ética Socioambiental e Direitos Humanos (2cr)', ''],
  ],
};

// ============================================================
// UI VISIBILITY CONFIG PER PERIOD
// {period: {ope, oe, ooe, ode, oh}} — positions (or -2900 to hide)
// ============================================================
const UI_CONFIG = {
  '1o': { ope: -2900, oe: -2900, ooe: -2900, ode: -2900, oh: -2900 },
  '2o': { ope: -2900, oe: -2900, ooe: -2900, ode: -2900, oh: -2900 },
  '3o': { ope: 1000,  oe: -2900, ooe: -2900, ode: -2900, oh: -2900 },
  '4o': { ope: 1000,  oe: -2900, ooe: -2900, ode: -2900, oh: -2900 },
  '5o': { ope: -2900, oe: 1130,  ooe: -2900, ode: -2900, oh: -2900 },
  '6o': { ope: -2900, oe: 1130,  ooe: -2900, ode: -2900, oh: 995   },
  '7o': { ope: -2900, oe: 1170,  ooe: 1170,  ode: 995,   oh: -2900 },
  '8o': { ope: -2900, oe: 1170,  ooe: 1170,  ode: 995,   oh: -2900 },
};

// ============================================================
// STATE
// ============================================================
let tabela, fundo, brasao, logo;
let fontRegular, fontBold;
let qs, ope, oe, ooe, ode, oh;

let qualPeriodo  = '1o';
let optPratExp   = 'Nada';
let optDesenhoEnfase = 'Nada';
let optHist      = 'Nada';
let optQualEnfase, optOfiQualEnfase;

let calendario = [];

// ============================================================
// P5 LIFECYCLE
// ============================================================
function preload() {
  fontRegular = loadFont('data/SourceSans3-SemiBold.ttf');
  fontBold    = loadFont('data/SourceSans3-Bold.ttf');
  tabela = loadTable(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQKABcRBZCtZZLGf9xQJQWEAHhNAm19532fuZNiMoibn2BSaora9noPJSIKATyZSliXNSwSpFLTVM3B/pub?gid=1329022212&single=true&output=csv',
    'csv', 'header'
  );
  fundo  = loadImage('data/mat-bkg-1920-2.jpg');
  brasao = loadImage('data/brasao-puc-novo-preto-2.png');
  logo   = loadImage('data/logo-dad-novo-preto-03.png');
}

function setup() {
  createCanvas(1920, 1080);
  smooth();
  rectMode(CORNER);

  const selectStyle = 'font-family:"Source Sans 3";font-weight:regular;font-size:12px';
  const checkStyle  = 'font-family:"Source Sans 3";font-weight:normal;font-size:14px';

  // Period selector
  qs = createSelect();
  qs.position(900, 50);
  ['1o','2o','3o','4o','5o','6o','7o','8o'].forEach(p => qs.option(p));
  qs.selected('1o');
  qs.changed(selecionaPeriodo);
  qs.style(selectStyle);

  // Optional checkboxes / selects — all start hidden
  ope = createCheckbox('Optativas Práticas Experimentais', false);
  ope.position(-2900, 60);
  ope.changed(() => { optPratExp = ope.checked() ? 'Optativas de Praticas Experimentais' : 'Nada'; redraw(); });
  ope.style(checkStyle);

  oe = createSelect();
  [
    ['Selecionar ênfase', 'Selecionar ênfase'],
    ['Interação e experiência digital', 'EID'],
    ['Comunicação multissensorial e artes', 'ECA'],
    ['Corpo e moda', 'ECM'],
    ['Produto e inovação', 'EPI'],
    ['Estratégia e gestão', 'EEG'],
    ['Sustentabilidade ambiental, social e humana', 'ESA'],
  ].forEach(([label, val]) => oe.option(label, val));
  oe.selected('Selecionar ênfase');
  oe.position(-2900, 50);
  oe.changed(() => redraw());
  oe.style(selectStyle);

  ooe = createSelect();
  [
    ['Selecionar ênfase', 'Selecionar ênfase'],
    ['Interação e experiência digital', 'EID'],
    ['Comunicação multissensorial e artes', 'ECA'],
    ['Corpo e moda', 'ECM'],
    ['Produto e inovação', 'EPI'],
    ['Estratégia e gestão', 'EEG'],
    ['Sustentabilidade ambiental, social e humana', 'ESA'],
  ].forEach(([label, val]) => ooe.option(label, val));
  ooe.selected('Selecionar ênfase');
  ooe.position(-2900, 60);
  ooe.changed(() => redraw());
  ooe.style(selectStyle);

  ode = createCheckbox('Optativas desenho de ênfase', false);
  ode.position(-2900, 60);
  ode.changed(() => { optDesenhoEnfase = ode.checked() ? 'OPTATIVA DE DESENHO DE ENFASE' : 'Nada'; redraw(); });
  ode.style(checkStyle);

  oh = createCheckbox('Optativas de História da Arte e do Design', false);
  oh.position(-2900, 60);
  oh.changed(() => { optHist = oh.checked() ? 'Optativas de Historia da Arte e do Design' : 'Nada'; redraw(); });
  oh.style(checkStyle);
}

function draw() {
  noLoop();
  background(fundo);

  optQualEnfase    = oe.selected();
  optOfiQualEnfase = ooe.selected();

  noStroke();
  image(logo, 100, 35, 93, 60);
  tint(255, 20);
  image(brasao, width - 520, 10);
  noTint();

  drawUI();
  base();
  periodos();
  listaDisciplinas();
}

// ============================================================
// UI PANELS
// ============================================================
function drawUI() {
  textFont(fontBold);

  // Period box
  fill(255, 200);
  rect(880, 20, 90, 70, 10);
  fill(0);
  textSize(16);
  text('Período', 900, 40);

  // Optional boxes depending on period
  if (['3o','4o'].includes(qualPeriodo)) {
    fill(255, 200); rect(980, 20, 320, 70, 10);
    fill(0); textSize(16); text('Optativas', 1000, 40);
  }
  if (['5o','6o'].includes(qualPeriodo)) {
    fill(255, 200); rect(980, 20, 450, 90, 10);
    fill(0); textSize(16); text('Optativas', 1000, 40);
    textFont(fontRegular); textSize(14);
    text('Optativas de ênfase', 1000, 65);
  }
  if (['7o','8o'].includes(qualPeriodo)) {
    fill(255, 200); rect(980, 20, 470, 100, 10);
    fill(0); textSize(16); text('Optativas', 1000, 40);
    textFont(fontRegular); textSize(14);
    text('Optativas de ênfase', 1000, 65);
    text('Optativas oficina de ênfase', 1000, 85);
  }

  // Title
  textSize(38); fill(255);
  text('Horários das Aulas - Semestre 2026.2', 220, 60);
  textFont(fontRegular); textSize(25);
  text(qualPeriodo + ' Período', 220, 90);
}

// ============================================================
// PERIOD SELECTOR HANDLER
// ============================================================
function selecionaPeriodo() {
  qualPeriodo = qs.value();
  const cfg = UI_CONFIG[qualPeriodo];

  ope.position(cfg.ope,  60); ope.checked(false);
  oe.position(cfg.oe,   48); oe.selected('Selecionar ênfase');
  ooe.position(cfg.ooe, 71); ooe.selected('Selecionar ênfase');
  ode.position(cfg.ode, 90); ode.checked(false);
  oh.position(cfg.oh,   75); oh.checked(false);

  // Reset derived state
  optPratExp       = 'Nada';
  optDesenhoEnfase = 'Nada';
  optHist          = 'Nada';

  redraw();
}

// ============================================================
// GRID BASE
// ============================================================
function base() {
  const { rectWidth, gap, rowStart, rectHeight, cornerRadius, colStart } = LAYOUT;

  fill(255, 100);
  noStroke();
  DAYS.forEach(({ col }) => {
    const x = COL_X[col];
    rect(x - gap, rowStart - gap, rectWidth, rectHeight, cornerRadius);
  });

  fill(0);
  textFont('Helvetica');
  textStyle(BOLD);
  textSize(14);
  DAYS.forEach(({ label, col }) => text(label, COL_X[col] + 10, rowStart - 20));
  HOURS.forEach(h => text(h + 'h', 50, ROW_Y[h]));
}

// ============================================================
// CALENDAR POPULATION
// ============================================================
function criaCalendario() {
  // Build a flat array: 5 days × 13 hours × 33 slots
  const totalSlots = DAYS.length * HOURS.length;
  calendario = [];

  for (const { col: dia } of DAYS) {
    for (const hora of HOURS) {
      const entry = [dia, hora];
      // 5 aula slots × 6 fields + 1 break marker = 31 + 1 = 32, offset by 2 = 33 total
      for (let s = 0; s < 5; s++) {
        entry.push(' ', 0, ' ', ' ', ' ', ' '); // codigo, fim, disciplina, turma, sala, periodo
      }
      entry.push('break');
      calendario.push(...entry);
    }
  }

  // Populate from spreadsheet
  for (let i = 0; i < tabela.getRowCount(); i++) {
    const periodo        = tabela.get(i, 'PERIODO');
    const optEnfase      = tabela.get(i, optQualEnfase);
    const optOficinaEnfase = tabela.get(i, optOfiQualEnfase);

    const isVisible = (
      periodo.includes(qualPeriodo)        ||
      periodo.includes(optPratExp)         ||
      periodo.includes(optDesenhoEnfase)   ||
      periodo.includes('OPTATIVA GERAL DE ENFASE') ||
      periodo.includes(optHist)            ||
      periodo.includes('OPTATIVA DE OFICINA DE ENFASE')
    );
    if (!isVisible) continue;
    if (periodo.includes('OPTATIVA GERAL DE ENFASE')     && optEnfase        !== 'TRUE') continue;
    if (periodo.includes('OPTATIVA DE OFICINA DE ENFASE') && optOficinaEnfase !== 'TRUE') continue;

    for (let col = 5; col <= 9; col++) {
      const val = tabela.get(i, col);
      if (!val || val !== 'TRUE') continue;

      const dia       = col - 3;
      const inicio    = int(tabela.get(i, 'INICIO'));
      const fim       = int(tabela.get(i, 'FINAL'));
      const codigo    = tabela.get(i, 'CODIGO');
      const disciplina = tabela.get(i, 'DISCIPLINA');
      const sala      = tabela.get(i, 'SALA');
      const turma     = tabela.get(i, 'TURMA');

      // Base index into flat calendario array
      const base = (dia - 2) * HOURS.length * LAYOUT.slotSize + (inicio - 7) * LAYOUT.slotSize;

      // Try to place in one of the 5 slots
      for (let s = 0; s < 5; s++) {
        const off = base + 2 + s * 6; // offset to codigo field of slot s
        if (calendario[off] === ' ') {
          // Empty slot — fill it
          calendario[off]     = codigo;
          calendario[off + 1] = fim;
          calendario[off + 2] = disciplina;
          calendario[off + 3] = turma;
          calendario[off + 4] = sala;
          calendario[off + 5] = periodo;
          break;
        } else if (calendario[off] === codigo) {
          // Same course — append turma
          calendario[off + 3] += ' ' + turma;
          break;
        }
        // Otherwise try next slot
      }
    }
  }
}

// ============================================================
// COLOR LOOKUP
// ============================================================
function applyColor(codigo) {
  const c = COLOR_MAP.get(codigo);
  if (c) fill(...c);
  else   fill(150, 150, 150, 200);
}

// ============================================================
// SLOT HEIGHT CALCULATOR
// ============================================================
function slotHeight(duracao) {
  return (duracao - 1) * LAYOUT.rowStep + (LAYOUT.rowStep - LAYOUT.gap * 2);
}

// ============================================================
// RENDER SCHEDULE
// ============================================================
function periodos() {
  criaCalendario();
  const { rectWidth, gap, slotSize } = LAYOUT;

  for (let pos = 0; pos < calendario.length; pos += slotSize) {
    // Count how many slots are filled at this timeslot
    const filledCount = SLOT_OFFSETS.filter(o => calendario[pos + o] !== ' ').length;
    if (filledCount === 0) continue;

    const dia   = calendario[pos];
    const inicio = calendario[pos + 1];
    const baseX  = COL_X[dia];
    const baseY  = ROW_Y[inicio];

    const slotWidth = rectWidth / filledCount - gap * (filledCount + 1) / filledCount;

    SLOT_OFFSETS.slice(0, filledCount).forEach((off, idx) => {
      if (calendario[pos + off] === ' ') return;

      const fim     = calendario[pos + off + 1];
      const duracao = fim - inicio;
      const h       = slotHeight(duracao);
      const x       = baseX + idx * (slotWidth + gap);
      const y       = baseY;

      applyColor(calendario[pos + off]);
      noStroke();
      rect(x, y, slotWidth, h, 10);

      fill(0);
      noStroke();
      textLeading(11);
      textStyle(BOLD);   textSize(11);
      text(calendario[pos + off], x + gap, y + 20);
      textStyle(NORMAL); textSize(8);
      text(calendario[pos + off + 2], x + gap, y + 25, slotWidth - 20, 160);
      text(calendario[pos + off + 3], x + gap, y + 85);
    });
  }
}

// ============================================================
// DISCIPLINE LIST
// ============================================================
function listaDisciplinas() {
  const list = DISCIPLINES[qualPeriodo] || [];
  textFont(fontBold);   textSize(20); fill(0);
  text('Disciplinas do Período:', 100, 800);
  textFont(fontRegular); textSize(16);

  list.forEach(([left, right], i) => {
    const y = 820 + i * 20;
    if (left)  text(left,  100, y);
    if (right) text(right, 580, y);
  });
}
