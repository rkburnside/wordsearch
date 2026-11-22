const DEFAULT_WORDS = [
  "ACORN",
  "AMBER",
  "ANCHOR",
  "APPLE",
  "ARCADE",
  "ASTEROID",
  "ATLAS",
  "AURORA",
  "AVALANCHE",
  "BAMBOO",
  "BANANA",
  "BEACON",
  "BLIZZARD",
  "BONFIRE",
  "BRIDGE",
  "BUTTERCUP",
  "CACTUS",
  "CAMERA",
  "CANDLE",
  "CARAMEL",
  "CASCADE",
  "CASTLE",
  "CAVERN",
  "CEDAR",
  "CHAMPION",
  "CINNAMON",
  "CITADEL",
  "CLOVER",
  "COMET",
  "CORAL",
  "CRYSTAL",
  "CUPCAKE",
  "DAHLIA",
  "DESERT",
  "DIAMOND",
  "DRAGONFLY",
  "DRIZZLE",
  "ECHO",
  "EMBER",
  "EMERALD",
  "FALCON",
  "FEATHER",
  "FESTIVAL",
  "FIRELIGHT",
  "FJORD",
  "FOREST",
  "FOSSIL",
  "GALAXY",
  "GARDEN",
  "GAZELLE",
  "GLACIER",
  "HARBOR",
  "HARMONY",
  "HAZELNUT",
  "HORIZON",
  "ICICLE",
  "ISLAND",
  "IVY",
  "JASMINE",
  "JELLYBEAN",
  "JUNIPER",
  "KINGDOM",
  "LANTERN",
  "LAVENDER",
  "LEMONADE",
  "LIGHTHOUSE",
  "LOTUS",
  "MARBLE",
  "MEADOW",
  "METEOR",
  "MIDNIGHT",
  "MISTY",
  "MOONBEAM",
  "NEBULA",
  "NECTARINE",
  "OASIS",
  "OBSIDIAN",
  "ORCHARD",
  "OTTER",
  "PARADISE",
  "PEBBLE",
  "PEPPERMINT",
  "PHOENIX",
  "PINEAPPLE",
  "PRAIRIE",
  "QUARTZ",
  "RAINBOW",
  "RAVEN",
  "RIVER",
  "SAFFRON",
  "SEASHELL",
  "SHADOW",
  "SOLSTICE",
  "SPARROW",
  "STARLIGHT",
  "SUNFLOWER",
  "THUNDER",
  "TREASURE",
  "TULIP",
  "VELVET",
  "WATERFALL",
  "WHISPER",
  "WILDFLOWER",
  "ZEPPELIN"
];
const MAX_WORDS = 30;
const MAX_BOARD_SIZE = 13;
const STARTER_WORD_COUNT = 10;
const MAX_WORD_COUNT_OPTION = 18;
const HARRY_POTTER_WORDS = [
  "HOGWARTS", "DUMBLEDORE", "VOLDEMORT", "HARRY", "POTTER", "HERMIONE", "RONWEASLEY", "GINNY",
  "SNAPE", "HAGRID", "DRACOMALFOY", "LUNALOVEGOOD", "NEVILLE", "LONGBOTTOM", "SIRIUS", "BLACK",
  "REMUS", "LUPIN", "TONKS", "CEDRIC", "DIGGORY", "CHOCHANG", "FLEUR", "DELACOUR", "KRUM", "DOBBY",
  "KREACHER", "HEDWIG", "FANG", "BUCKBEAK", "NORBERT", "ARAGOG", "MYRTLE", "FILCH", "MCGONAGALL",
  "FLITWICK", "SPROUT", "QUIRRELL", "LOCKHART", "UMBRIDGE", "SLUGHORN", "TRELAWNEY", "MADAMEHOOCH",
  "MADAMEMAXIME", "KARKAROFF", "OLLIVANDER", "XENOPHILIUS", "PETUNIA", "VERNON", "DUDLEY", "WORMTAIL",
  "BELLATRIX", "LUCIUS", "NARCISSA", "MALFOY", "FRED", "GEORGE", "PERCY", "BILLWEASLEY", "CHARLIE",
  "MOLLY", "ARTHUR", "KINGSLEY", "SHACKLEBOLT", "MOODY", "POMFREY", "PADFOOT", "PRONGS", "MOONY",
  "CROOKSHANKS", "SCABBERS", "NAGINI", "FAWKES", "PIXIES", "THRESTRAL", "HIPPOGRIFF", "BASILISK",
  "DEMENTOR", "BOGGART", "SKREWT", "ACROMANTULA", "GRINDYLOW", "MERPEOPLE", "CENTAUR", "PHOENIX",
  "DRAGON", "OWLPOST", "HOWLER", "PORTKEY", "HORCRUX", "PENSIEVE", "TIMETURNER", "REMEMBRALL",
  "DELUMINATOR", "SNEAKOSCOPE", "OMNIOCULARS", "QUIDDITCH", "BLUDGER", "QUAFFLE", "SNITCH", "BEATER",
  "SEEKER", "KEEPER", "CHASER", "FIREBOLT", "NIMBUS", "BROOMSTICK", "BUTTERBEER", "PUMPKINJUICE",
  "POLYJUICE", "VERITASERUM", "FELIXFELICIS", "AMORTENTIA", "WOLFSBANE", "GILLYWEED", "MANDRAKE",
  "FLOONETWORK", "APPARITION", "DISAPPARATE", "LEGILIMENS", "OCCLUMENCY", "PATRONUS", "EXPELLIARMUS",
  "STUPEFY", "PETRIFICUS", "OBLIVIATE", "RIDDIKULUS", "LUMOS", "NOX", "ACCIO", "ALOHOMORA",
  "WINGARDIUM", "LEVIOSA", "CRUCIATUS", "IMPERIO", "AVADAKEDAVRA", "SECTUMSEMPRA", "MUFFLIATO",
  "CONFUNDO", "REPARO", "PROTEGO", "IMPEDIMENTA", "REDUCTO", "INCENDIO", "AGUAMENTI", "LEVICORPUS",
  "DIFFINDO", "GEMINIO", "TARANTALLEGRA", "HOGSMEADE", "DIAGONALLEY", "KNOCKTURN", "GRINGOTTS",
  "AZKABAN", "MINISTRY", "ATRIUM", "PRIVETDRIVE", "GODRICSHOLLOW", "LITTLEWHING", "BURROW",
  "SHELLCOTTAGE", "MALFOYMANOR", "SPINNERSEND", "HONEYDUKES", "ZONKOS", "BORGINBURKES", "OLLIVANDERS",
  "LEAKYCAULDRON", "SHRIEKING", "WILLOW", "FORBIDDEN", "GREATHALL", "COMMONROOM", "HEADMASTER",
  "PREFECT", "AUROR", "DEATHEATER", "ORDERPHOENIX", "PHILOSOPHER", "SORCERER", "HALFBLOOD", "HALLOWS",
  "ELDERWAND", "CLOAK", "STONE", "BEZOAR", "BOGROD", "GRIPHOOK", "PEEVES", "ERROL", "HERMES", "HOOCH",
  "RITA", "SKEETER", "BAGMAN", "YAXLEY", "KARKUS", "STANSHUNPIKE", "RUNCORN", "CROUCH"
];
const WORD_POOLS = {
  Random: DEFAULT_WORDS,
  "Harry Potter": HARRY_POTTER_WORDS,
  Aviation: [
    "AILERON", "AIRSPEED", "AIRWAY", "ALTIMETER", "APPROACH", "APRON", "ATTITUDE", "AVGAS", "AVIATOR",
    "BALLOON", "BANKING", "BEACON", "BLACKBOX", "BRIEFING", "CABINS", "CARGO", "CHECKLIST", "CLIMB",
    "COCKPIT", "COMPASS", "CONTRAIL", "CROSSWIND", "CRUISING", "DESCENT", "DIRECTIONS", "DRAG", "DRONE",
    "ELEVATOR", "EMPENNAGE", "ENGINE", "FERRY", "FINAL", "FLAPS", "FLARE", "FUSELAGE", "GLIDER",
    "GROUNDSPEED", "HANGAR", "HEADING", "HELIPAD", "HOLDING", "HORIZON", "JETWAY", "JOYSTICK", "LANDING",
    "LIFTOFF", "LOGBOOK", "MANEUVER", "MAYDAY", "NAVLIGHT", "NOSEDIVE", "OAT", "PARACHUTE", "PAYLOAD",
    "PITCH", "PROPELLER", "RADAR", "RUNWAY", "RUDDER", "SEAPLANE", "SIDESTICK", "SKIDS", "SLATS",
    "SLIPSTREAM", "SOARING", "SPOILER", "STALL", "STARBOARD", "STEWARD", "TAILWIND", "TAKEOFF", "TAXIWAY",
    "TERMINAL", "THROTTLE", "TOUCHDOWN", "TOWER", "TRAFFIC", "TRIM", "TURBINE", "TURNAROUND", "UPDRAFT",
    "VECTOR", "VFR", "VORTEX", "WEATHER", "WINGLET", "YAW", "YOKE", "AIRLINER", "AUTOPILOT", "BIRDSTRIKE",
    "DEICING", "GOAROUND", "HEADWIND", "JETSTREAM", "LAYOVER", "OVERSHOOT", "TAILPLANE", "WAYPOINT"
  ],
  Finance: [
    "ACCOUNT", "ACCRUAL", "AMORTIZE", "ANALYST", "ANNUITY", "ASSETS", "BALANCE", "BANKING", "BOND",
    "BROKER", "BUDGET", "BULLMARKET", "CAPITAL", "CASHFLOW", "CLEARING", "COLLATERAL", "COMMODITY",
    "COMPOUND", "COUPON", "CREDIT", "CURRENCY", "CUSTODIAN", "DEBIT", "DEFAULT", "DEPOSIT", "DERIVATIVE",
    "DIVIDEND", "EARNINGS", "EQUITY", "ESCROW", "EXPENSE", "FEDFUNDS", "FINANCE", "FORECAST", "FUTURES",
    "GAINS", "HEDGING", "HOLDINGS", "INCOME", "INDEX", "INFLATION", "INTEREST", "INVOICE", "ISSUER",
    "JOURNAL", "LEDGER", "LEVERAGE", "LIABILITY", "LIQUIDITY", "LOAN", "MARGIN", "MARKETCAP", "MATURITY",
    "MERGER", "MUTUALFUND", "NASDAQ", "NETWORTH", "NOTIONAL", "OPTION", "PAYABLE", "PAYEE", "PAYROLL",
    "PENSION", "PORTFOLIO", "PREMIUM", "PRINCIPAL", "PROFIT", "QUOTE", "RATING", "RECEIPT", "RECONCILE",
    "REFINANCE", "RESERVE", "REVENUE", "RISK", "ROYALTY", "SAVINGS", "SECURITY", "SETTLEMENT", "SHARES",
    "SHORTSALE", "SOLVENCY", "SPREAD", "STATEMENT", "STOCKS", "SWAP", "TARIFF", "TAXES", "TICKER", "TRADE",
    "TREASURY", "TURNOVER", "UNDERWRITE", "VALUATION", "VENTURE", "VOLATILITY", "WALLET", "WEALTH", "YIELD"
  ],
  Bookkeeping: [
    "ACCOUNT", "ACCRUAL", "AGING", "ALLOCATION", "AMORTIZE", "APLEDGER", "ARLEDGER", "ASSETS", "AUDIT",
    "BALANCE", "BANKFEED", "BANKREC", "BILLABLE", "BOOKKEEPER", "CAPITAL", "CASHBOOK", "CASHFLOW",
    "CHARTOFACCT", "CHECKNUM", "CLEARED", "CLOSING", "CODING", "COSTING", "CREDIT", "CREDITMEMO", "DAYBOOK",
    "DEBIT", "DEPRECIATE", "DISBURSE", "DRAWINGS", "EQUITY", "EXPENSE", "FISCALYEAR", "FIXEDASSET",
    "GENERALLEDG", "GROSSPAY", "INCOME", "INVOICE", "ITEMIZE", "JOURNAL", "LIABILITY", "LINEITEM",
    "MANUALENTRY", "MARKUP", "NETPAY", "OPENINGBAL", "OVERHEAD", "OWNERDRAW", "PAYABLE", "PAYEE", "PAYROLL",
    "PETTYCASH", "POSTING", "PREPAID", "PROFITLOSS", "PURCHASE", "QUICKBOOKS", "RECEIPT", "RECONCILE",
    "REMITTANCE", "RETAINED", "REVENUE", "SALES", "SALESTAX", "STATEMENT", "SUBLEDGER", "SUNDRY", "SUPPLIER",
    "TAXABLE", "TIMESHEET", "TRACKING", "TRANSACTION", "TRIALBAL", "UNAPPLIED", "VARIANCE", "VENDOR",
    "VOIDED", "WITHHOLDING", "WORKSHEET", "WRITEOFF", "YEAREND", "ADJUSTMENT", "ALLOWANCE", "BACKUP",
    "CASHBASIS", "CREDITNOTE", "DEBITNOTE", "DISCOUNT", "EFTPAYMENT", "ESTIMATE", "FILECOPY", "GROSSPROFIT",
    "INVENTORY", "OVERPAYMENT", "PURCHASEORD", "REFERENCE", "REVERSAL", "SERVICEITEM", "SUBTOTAL", "TRANSFER"
  ],
  Grilling: [
    "BACKYARD", "BARBECUE", "BASTING", "BRATWURST", "BRINE", "BRIQUETTE", "BRISKET", "BURGERS", "BUTCHER",
    "CHARCOAL", "CHICKEN", "CHIMICHURRI", "CHIMNEY", "COLESLAW", "CORNONCOB", "DRIPPINGS", "DRYRUB",
    "FLAREUP", "GRATE", "GRILL", "GRILLMARKS", "HICKORY", "HOTDOGS", "KABOBS", "KETTLE", "KINDLING",
    "LIGHTERFLUID", "MARINADE", "MESQUITE", "MOPSAUCE", "PELLETS", "PITMASTER", "PORKBUTT", "PROPANE",
    "PULLEDPORK", "RESTING", "RIBS", "ROTISSERIE", "SAUSAGE", "SEARING", "SKEWERS", "SMOKER", "SMOKERING",
    "SPARERIBS", "SPATULA", "SPICERUB", "STEAK", "TENDERLOIN", "THERMOMETER", "TONGS"
  ],
  "Mormon Words": [
    "AARONIC", "AGENCY", "ALTAR", "ATONEMENT", "BAPTISM", "BEEHIVE", "BISHOP", "BLESSINGS", "BOOKOFMORMON",
    "CALLING", "CELESTIAL", "CHARITY", "CONVERT", "COVENANT", "DEACON", "DESERET", "ENDOWMENT", "ENDURE",
    "ETERNAL", "EXALTATION", "FAITH", "FASTING", "FELLOWSHIP", "PREMORTALITY", "GENEALOGY", "GENTILES",
    "GOSPEL", "GRACE", "HEAVENLY", "HIGHPRIEST", "HOMEEVENING", "HOSANNA", "INSTITUTE", "IRONROD", "JEREDITES",
    "JOSEPHSMITH", "KINGBENJAMIN", "LAMANITES", "LEHI", "LIBERTYJAIL", "MAELCHIZEDEK", "MISSIONARY", "MODESTY",
    "MORONI", "NEPHI", "ORDINANCE", "PATRIARCH", "PIONEER", "PLANOFSALV", "PRAYER", "PRIESTHOOD", "PRIMARY",
    "PROPHET", "REDEEMER", "RELIEFSOC", "REPENTANCE", "RESTORATION", "RESURRECTION", "SABBATH", "SACRAMENT",
    "SALVATION", "SANCTIFY", "SEMINARY", "SERVICE", "SEVENTY", "STAKE", "STEWARDSHIP", "STRIPLING", "TABERNACLE",
    "TEMPLE", "TENDERMERCIES", "TESTIMONY", "TITHING", "WARD", "ZION", "YOUNGWOMEN", "YOUNGMEN",
    "BEOFGOODCHEER", "CTR", "COMEFOLLOWME", "ENDURETOEND", "FOREVERFAMILY", "FAITHINCHRIST",
    "FOLLOWPROPHET", "GATHERISRAEL", "HOLYGHOST", "HOLDTOROD", "HOUSEOFLORD", "IAMACHILD", "INTHEWORLD",
    "JOYINCHRIST", "COMMANDMENTS", "MINISTERONE", "SMALLVOICE", "TENDERMERCIES", "CELESTIAL",
    "TRUSTINGOD", "WALKINLIGHT"
  ],
  "Mormon and Bible Books": [
    "1NEPHI", "2NEPHI", "JACOB", "ENOS", "JAROM", "OMNI", "MOSIAH", "ALMA", "HELAMAN", "3NEPHI", "4NEPHI",
    "MORMON", "ETHER", "MORONI", "GENESIS", "EXODUS", "LEVITICUS", "NUMBERS", "DEUTERONOMY", "JOSHUA", "JUDGES",
    "RUTH", "1SAMUEL", "2SAMUEL", "1KINGS", "2KINGS", "1CHRONICLES", "2CHRONICLES", "EZRA", "NEHEMIAH", "ESTHER",
    "JOB", "PSALMS", "PROVERBS", "ECCLESIASTES", "SONGOFSONGS", "ISAIAH", "JEREMIAH", "LAMENTATIONS", "EZEKIEL",
    "DANIEL", "HOSEA", "JOEL", "AMOS", "OBADIAH", "JONAH", "MICAH", "NAHUM", "HABAKKUK", "ZEPHANIAH", "HAGGAI",
    "ZECHARIAH", "MALACHI", "MATTHEW", "MARK", "LUKE", "JOHN", "ACTS", "ROMANS", "1CORINTHIANS", "2CORINTHIANS",
    "GALATIANS", "EPHESIANS", "PHILIPPIANS", "COLOSSIANS", "1THESS", "2THESS", "1TIMOTHY",
    "2TIMOTHY", "TITUS", "PHILEMON", "HEBREWS", "JAMES", "1PETER", "2PETER", "1JOHN", "2JOHN", "3JOHN", "JUDE",
    "REVELATION", "MOSES", "ABRAHAM", "FACSIMILES", "JSTMATTHEW", "JSTGENESIS", "FAITHARTICLES", "DC1", "DC2",
    "DC3", "DC4", "DC5", "DC6", "DC7", "DC8", "DC9", "DC10", "DC20", "DC76", "DC89", "DC121", "DC122", "DC123"
  ]
};
const FOUND_WORD_COLORS = [
  "#e4572e",
  "#3a86ff",
  "#2a9d8f",
  "#ff006e",
  "#8338ec",
  "#ffbe0b",
  "#118ab2",
  "#ef476f",
  "#06d6a0",
  "#fb5607",
  "#4361ee",
  "#7cb518"
];
const THEME_STORAGE_KEY = "wordsearch-theme";
const LAYOUT_STORAGE_KEY = "wordsearch-layout";
const HUNT_HINT_BUDGET = 3;
const LAYOUTS = [
  {
    id: "classic",
    name: "Classic",
    description: "Word list above the board."
  },
  {
    id: "classic-rail",
    name: "Classic rail",
    description: "Compact word list above the board."
  },
  {
    id: "board-first",
    name: "Board first",
    description: "Board on top, word list underneath."
  },
  {
    id: "split-desk",
    name: "Split desk",
    description: "Board beside a sidebar that splits remaining words from solved ones."
  },
  {
    id: "hunt",
    name: "Hunt mode",
    description: "Highlights one target at a time, with a limited hint budget."
  },
  {
    id: "book",
    name: "Puzzle book",
    description: "Printed-page styling over the classic arrangement."
  }
];
const boardElement = document.getElementById("board");
const boardOverlayElement = document.getElementById("boardOverlay");
const wordListElement = document.getElementById("wordList");
const statusTextElement = document.getElementById("statusText");
const winSplashElement = document.getElementById("winSplash");
const winTimeElement = document.getElementById("winTime");
const winNewRoundButton = document.getElementById("winNewRoundButton");
const winSetupButton = document.getElementById("winSetupButton");
const restartButton = document.getElementById("restartButton");
const editSetupButton = document.getElementById("editSetupButton");
const themeToggleButton = document.getElementById("themeToggleButton");
const fullscreenButton = document.getElementById("fullscreenButton");
const timerTextElement = document.getElementById("timerText");
const setupScreenElement = document.getElementById("setupScreen");
const gameScreenElement = document.getElementById("gameScreen");
const setupFormElement = document.getElementById("setupForm");
const wordsInputElement = document.getElementById("wordsInput");
const wordListSelectElement = document.getElementById("wordListSelect");
const wordCountSelectElement = document.getElementById("wordCountSelect");
const boardSizeSelectElement = document.getElementById("boardSizeSelect");
const minimumSizeTextElement = document.getElementById("minimumSizeText");
const wordCountTextElement = document.getElementById("wordCountText");
const sizeHintTextElement = document.getElementById("sizeHintText");
const setupErrorElement = document.getElementById("setupError");
const gameScreenLayoutElement = document.getElementById("gameScreen");
const layoutSelectElement = document.getElementById("layoutSelect");
const setupLayoutSelectElement = document.getElementById("setupLayoutSelect");
const layoutSwitcherElement = document.getElementById("layoutSwitcher");
const sidePanelElement = document.getElementById("sidePanel");
const remainingListElement = document.getElementById("remainingList");
const solvedListElement = document.getElementById("solvedList");
const sideFoundCountElement = document.getElementById("sideFoundCount");
const sideProgressFillElement = document.getElementById("sideProgressFill");
const progressFillElement = document.getElementById("progressFill");
const boardTimerTextElement = document.getElementById("boardTimerText");
const puzzlePlateElement = document.getElementById("puzzlePlate");
const huntPanelElement = document.getElementById("huntPanel");
const huntWordElement = document.getElementById("huntWord");
const huntHintButton = document.getElementById("huntHintButton");
const huntSkipButton = document.getElementById("huntSkipButton");

let gameState = null;
let timerIntervalId = null;
let currentConfig = null;
let isApplyingStarterWords = false;
let currentTheme = "light";
let currentLayout = "classic";
let roundNumber = 0;
let lastStarterWords = [];

function getStoredTheme() {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage failures and keep the current in-memory theme.
  }
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme();

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeButton() {
  const nextThemeLabel = currentTheme === "dark" ? "Light" : "Dark";
  themeToggleButton.textContent = nextThemeLabel;
  themeToggleButton.setAttribute("aria-pressed", String(currentTheme === "dark"));
  themeToggleButton.setAttribute("aria-label", `Switch to ${nextThemeLabel.toLowerCase()} theme`);
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = currentTheme;
  updateThemeButton();

  if (gameState) {
    renderFoundWordOverlay();
  }
}

function getStoredLayout() {
  try {
    return window.localStorage.getItem(LAYOUT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLayout(layout) {
  try {
    window.localStorage.setItem(LAYOUT_STORAGE_KEY, layout);
  } catch {
    // Ignore storage failures and keep the current in-memory layout.
  }
}

function getPreferredLayout() {
  const storedLayout = getStoredLayout();
  return LAYOUTS.some((layout) => layout.id === storedLayout) ? storedLayout : "classic";
}

function populateLayoutOptions() {
  [layoutSelectElement, setupLayoutSelectElement].forEach((select) => {
    select.innerHTML = "";

    LAYOUTS.forEach((layout) => {
      const option = document.createElement("option");
      option.value = layout.id;
      option.textContent = layout.name;
      option.title = layout.description;
      select.appendChild(option);
    });
  });
}

function applyLayout(layoutId) {
  const layout = LAYOUTS.find((entry) => entry.id === layoutId) || LAYOUTS[0];
  currentLayout = layout.id;
  gameScreenLayoutElement.dataset.layout = layout.id;
  document.body.dataset.layout = layout.id;
  layoutSelectElement.value = layout.id;
  setupLayoutSelectElement.value = layout.id;
  layoutSelectElement.title = layout.description;

  if (gameState) {
    render();
  }
}

function changeLayout(layoutId) {
  applyLayout(layoutId);
  saveLayout(currentLayout);
}

function toggleTheme() {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch {
    // The game already fits the viewport if fullscreen is blocked.
  }
}

function buildPuzzleState(config) {
  const words = config.words.map((word) => word.toUpperCase());
  const { grid, placements } = generateGrid(words, config.size);
  return {
    words,
    size: config.size,
    grid,
    placements,
    hintCell: null,
    hintWord: null,
    hintIndex: 0,
    huntQueue: [...words],
    hintsLeft: HUNT_HINT_BUDGET,
    foundWords: new Set(),
    foundWordPaths: [],
    activeCells: [],
    pointerDown: false,
    activeDirection: null
  };
}

function getCellKey(row, column) {
  return `${row},${column}`;
}

function startGame(config) {
  const puzzle = buildPuzzleState(config);
  currentConfig = {
    words: [...config.words],
    size: config.size,
    source: config.source === "pool" ? "pool" : "custom"
  };
  gameState = puzzle;
  roundNumber += 1;
  winSplashElement.classList.add("hidden");
  resetTimer();
  renderScreen("game");
  render();
}

function generateGrid(words, size) {
  const directions = [
    { row: 0, column: 1 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: -1 },
    { row: 0, column: -1 },
    { row: -1, column: 0 },
    { row: -1, column: -1 },
    { row: -1, column: 1 }
  ];
  const diagonalDirections = directions.filter(({ row, column }) => row !== 0 && column !== 0);
  const straightDirections = directions.filter(({ row, column }) => row === 0 || column === 0);
  const orientedWords = words.filter((word) => word.length > 1);
  const maxDiagonalWords = Math.floor(orientedWords.length / 2);
  const minDiagonalWords = Math.min(maxDiagonalWords, Math.ceil(orientedWords.length / 4));
  const maxAttempts = 600;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const grid = Array.from({ length: size }, () => Array(size).fill(""));
    const placements = {};
    let allPlaced = true;
    const diagonalCount =
      minDiagonalWords + Math.floor(Math.random() * (maxDiagonalWords - minDiagonalWords + 1));
    const diagonalCandidates = shuffle([...orientedWords]);
    if (attempt >= 24 && attempt % 2 === 0) {
      // Shorter diagonals leave more room for long words on tight boards.
      diagonalCandidates.sort((left, right) => left.length - right.length);
    }
    const diagonalWords = new Set(diagonalCandidates.slice(0, diagonalCount));
    const placementOrder = shuffle([...words]).sort((left, right) => right.length - left.length);

    for (const word of placementOrder) {
      const candidates = [];
      const allowedDirections = diagonalWords.has(word) ? diagonalDirections : straightDirections;
      let bestOverlap = 0;

      for (let row = 0; row < size; row += 1) {
        for (let column = 0; column < size; column += 1) {
          for (const direction of allowedDirections) {
            const overlap = getPlacementOverlap(grid, word, row, column, direction);
            if (overlap < bestOverlap) {
              continue;
            }

            // Favor shared letters on tight boards and keep some attempts fully random.
            if (overlap > bestOverlap && attempt % 3 !== 0) {
              bestOverlap = overlap;
              candidates.length = 0;
            }
            candidates.push({ row, column, direction });
          }
        }
      }

      if (candidates.length === 0) {
        allPlaced = false;
        break;
      }

      const choice = candidates[Math.floor(Math.random() * candidates.length)];
      placeWord(grid, word, choice.row, choice.column, choice.direction);
      placements[word] = {
        row: choice.row,
        column: choice.column,
        direction: choice.direction
      };
    }

    if (allPlaced) {
      fillEmptyCells(grid);
      return { grid, placements };
    }
  }

  throw new Error("Unable to generate a valid puzzle grid.");
}

function getPlacementOverlap(grid, word, startRow, startColumn, direction) {
  let overlap = 0;

  for (let index = 0; index < word.length; index += 1) {
    const row = startRow + direction.row * index;
    const column = startColumn + direction.column * index;

    if (row < 0 || row >= grid.length || column < 0 || column >= grid.length) {
      return -1;
    }

    const currentValue = grid[row][column];
    if (currentValue === "") {
      continue;
    }

    if (currentValue !== word[index]) {
      return -1;
    }

    overlap += 1;
  }

  return overlap;
}

function placeWord(grid, word, startRow, startColumn, direction) {
  for (let index = 0; index < word.length; index += 1) {
    const row = startRow + direction.row * index;
    const column = startColumn + direction.column * index;
    grid[row][column] = word[index];
  }
}

function fillEmptyCells(grid) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let row = 0; row < grid.length; row += 1) {
    for (let column = 0; column < grid[row].length; column += 1) {
      if (grid[row][column] === "") {
        grid[row][column] = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }
  }
}

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }

  return items;
}

function getStarterWords() {
  const requestedCount = Number(wordCountSelectElement?.value || STARTER_WORD_COUNT);
  const selectedListName = wordListSelectElement?.value || "Random";
  const pool = WORD_POOLS[selectedListName] || DEFAULT_WORDS;
  const sourceWords = [...new Set(pool)].filter((word) => word.length <= MAX_BOARD_SIZE);

  for (let count = Math.min(requestedCount, sourceWords.length); count >= 2; count -= 1) {
    for (let attempt = 0; attempt < 300; attempt += 1) {
      const candidate = shuffle([...sourceWords]).slice(0, count);
      if (calculateMinimumBoardSize(candidate) <= MAX_BOARD_SIZE) {
        return candidate;
      }
    }

    const shortestFirst = shuffle([...sourceWords]).sort((left, right) => left.length - right.length).slice(0, count);
    if (calculateMinimumBoardSize(shortestFirst) <= MAX_BOARD_SIZE) {
      return shortestFirst;
    }
  }

  return shuffle([...sourceWords]).slice(0, Math.min(2, sourceWords.length));
}

function populateWordListOptions() {
  wordListSelectElement.innerHTML = "";

  Object.keys(WORD_POOLS).forEach((listName) => {
    const option = document.createElement("option");
    option.value = listName;
    option.textContent = listName;
    if (listName === "Random") {
      option.selected = true;
    }
    wordListSelectElement.appendChild(option);
  });
}

function populateWordCountOptions() {
  wordCountSelectElement.innerHTML = "";

  for (let count = 10; count <= MAX_WORD_COUNT_OPTION; count += 1) {
    const option = document.createElement("option");
    option.value = String(count);
    option.textContent = String(count);
    if (count === STARTER_WORD_COUNT) {
      option.selected = true;
    }
    wordCountSelectElement.appendChild(option);
  }
}

function applyStarterWords() {
  const starterWords = getStarterWords();
  lastStarterWords = [...starterWords];
  isApplyingStarterWords = true;
  wordsInputElement.value = starterWords.join("\n");
  wordCountSelectElement.value = String(starterWords.length);
  isApplyingStarterWords = false;
  clearSetupError();
  updateSetupPreview();
}

function render() {
  renderBoard();
  renderWordList();
  renderSidePanel();
  renderHuntPanel();
  updateStatus();
  renderFoundWordOverlay();
}

function getHuntTarget() {
  return gameState.huntQueue.find((word) => !gameState.foundWords.has(word)) || null;
}

function renderSidePanel() {
  const remainingWords = gameState.words.filter((word) => !gameState.foundWords.has(word));
  const solvedWords = gameState.words.filter((word) => gameState.foundWords.has(word));

  remainingListElement.innerHTML = "";
  solvedListElement.innerHTML = "";

  remainingWords.forEach((word) => {
    const item = document.createElement("li");
    const button = document.createElement("button");

    button.type = "button";
    button.className = "side-word";
    button.innerHTML = "";
    button.append(word);

    const count = document.createElement("span");
    count.className = "side-count";
    count.textContent = String(word.length);
    button.appendChild(count);

    button.title = "Show a hint";
    button.setAttribute("aria-label", `${word}: show a hint`);
    button.addEventListener("click", () => showHint(word));

    item.appendChild(button);
    remainingListElement.appendChild(item);
  });

  solvedWords.forEach((word) => {
    const item = document.createElement("li");
    item.textContent = word;
    solvedListElement.appendChild(item);
  });

  if (solvedWords.length === 0) {
    const item = document.createElement("li");
    item.className = "side-empty";
    item.textContent = "Nothing yet";
    solvedListElement.appendChild(item);
  }
}

function renderHuntPanel() {
  const target = getHuntTarget();

  huntWordElement.textContent = target || "All done";
  huntHintButton.disabled = !target || gameState.hintsLeft === 0;
  huntHintButton.textContent =
    gameState.hintsLeft > 0 ? `Hint · ${gameState.hintsLeft} left` : "No hints left";
  huntSkipButton.disabled = !target || gameState.huntQueue.length < 2;
}

function useHuntHint() {
  const target = getHuntTarget();

  if (!target || gameState.hintsLeft === 0) {
    return;
  }

  gameState.hintsLeft -= 1;
  showHint(target);
  renderHuntPanel();
}

function skipHuntWord() {
  const target = getHuntTarget();

  if (!target) {
    return;
  }

  gameState.huntQueue = gameState.huntQueue.filter((word) => word !== target).concat(target);
  clearHint();
  render();
}

function renderBoard() {
  boardElement.innerHTML = "";
  boardElement.style.setProperty("--board-size", gameState.size);

  for (let row = 0; row < gameState.grid.length; row += 1) {
    for (let column = 0; column < gameState.grid[row].length; column += 1) {
      const button = document.createElement("button");
      const key = getCellKey(row, column);

      button.type = "button";
      button.className = "cell";
      button.textContent = gameState.grid[row][column];
      button.dataset.row = String(row);
      button.dataset.column = String(column);
      button.setAttribute("role", "gridcell");
      button.setAttribute("aria-label", `Row ${row + 1} Column ${column + 1}: ${button.textContent}`);

      if (gameState.activeCells.some((cell) => cell.row === row && cell.column === column)) {
        button.classList.add("selected");
      }

      if (gameState.hintCell && gameState.hintCell.row === row && gameState.hintCell.column === column) {
        button.classList.add("hint");
      }

      button.addEventListener("pointerdown", handlePointerDown);
      boardElement.appendChild(button);
    }
  }
}

function renderFoundWordOverlay() {
  boardOverlayElement.innerHTML = "";

  const boardRect = boardElement.getBoundingClientRect();
  if (!boardRect.width || !boardRect.height) {
    return;
  }

  boardOverlayElement.setAttribute("viewBox", `0 0 ${boardRect.width} ${boardRect.height}`);

  gameState.foundWordPaths.forEach((entry) => {
    drawWordCapsule(entry.cells, entry.color, boardRect, false);
  });

  if (gameState.activeCells.length > 0) {
    const accent = readCssVariable("--accent");
    drawWordCapsule(gameState.activeCells, accent, boardRect, true);
  }
}

function readCssVariable(name) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function drawWordCapsule(cells, color, boardRect, isActive) {
  const firstCell = getCellElement(cells[0]);
  const lastCell = getCellElement(cells[cells.length - 1]);

  if (!firstCell || !lastCell) {
    return;
  }

  const firstRect = firstCell.getBoundingClientRect();
  const lastRect = lastCell.getBoundingClientRect();
  const startX = firstRect.left - boardRect.left + firstRect.width / 2;
  const startY = firstRect.top - boardRect.top + firstRect.height / 2;
  const endX = lastRect.left - boardRect.left + lastRect.width / 2;
  const endY = lastRect.top - boardRect.top + lastRect.height / 2;
  const cellSize = Math.min(firstRect.width, firstRect.height);
  const radius = Math.max(8, cellSize * 0.42);
  const outlineWidth = Math.max(2.5, cellSize * 0.1);
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const length = Math.hypot(deltaX, deltaY) || 1;
  const midpointX = (startX + endX) / 2;
  const midpointY = (startY + endY) / 2;
  const totalLength = length + radius * 1.8;
  const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

  const buildCapsule = (stroke, width, opacity) => {
    const shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    shape.setAttribute("x", String(midpointX - totalLength / 2));
    shape.setAttribute("y", String(midpointY - radius));
    shape.setAttribute("width", String(totalLength));
    shape.setAttribute("height", String(radius * 2));
    shape.setAttribute("rx", String(radius));
    shape.setAttribute("ry", String(radius));
    shape.setAttribute("fill", "none");
    shape.setAttribute("stroke", stroke);
    shape.setAttribute("stroke-width", String(width));
    shape.setAttribute("opacity", String(opacity));
    shape.setAttribute("transform", `rotate(${angle} ${midpointX} ${midpointY})`);
    return shape;
  };

  const halo = buildCapsule(readCssVariable("--overlay-halo"), outlineWidth + 2, 1);
  const stroke = buildCapsule(color, outlineWidth, isActive ? 1 : 0.95);

  if (isActive) {
    const fill = buildCapsule("none", 0, 1);
    fill.setAttribute("fill", color);
    fill.setAttribute("opacity", "0.16");
    boardOverlayElement.appendChild(fill);
    stroke.setAttribute("stroke-linecap", "round");
  }

  boardOverlayElement.appendChild(halo);
  boardOverlayElement.appendChild(stroke);
}

function getCellElement(cell) {
  return boardElement.querySelector(`[data-row="${cell.row}"][data-column="${cell.column}"]`);
}

function renderWordList() {
  wordListElement.innerHTML = "";

  gameState.words.forEach((word) => {
    const item = document.createElement("li");
    const chip = document.createElement(currentLayout === "hunt" ? "span" : "button");
    const isFound = gameState.foundWords.has(word);

    item.className = isFound ? "found" : "pending";

    chip.className = "word-chip";
    chip.textContent = word;

    if (chip instanceof HTMLButtonElement) {
      chip.type = "button";
      chip.disabled = isFound;
      if (!isFound) {
        chip.title = "Show a hint";
        chip.setAttribute("aria-label", `${word}: show a hint`);
        chip.addEventListener("click", () => showHint(word));
      }
    }

    item.appendChild(chip);
    wordListElement.appendChild(item);
  });
}

function showHint(word) {
  const placement = gameState.placements?.[word];

  if (!placement || gameState.foundWords.has(word)) {
    return;
  }

  const isSameWord = gameState.hintWord === word;
  const nextIndex = isSameWord ? (gameState.hintIndex + 1) % word.length : 0;
  const row = placement.row + placement.direction.row * nextIndex;
  const column = placement.column + placement.direction.column * nextIndex;

  gameState.hintWord = word;
  gameState.hintIndex = nextIndex;
  gameState.hintCell = { row, column };
  renderBoard();
}

function clearHint() {
  if (!gameState.hintCell) {
    return;
  }

  gameState.hintCell = null;
  gameState.hintWord = null;
  gameState.hintIndex = 0;
}

function updateStatus() {
  const foundCount = gameState.foundWords.size;
  const totalCount = gameState.words.length;
  const percentComplete = totalCount === 0 ? 0 : Math.round((foundCount / totalCount) * 100);

  statusTextElement.textContent = `${foundCount} of ${totalCount} words found`;
  progressFillElement.style.width = `${percentComplete}%`;
  sideProgressFillElement.style.width = `${percentComplete}%`;
  sideFoundCountElement.textContent = String(foundCount);
  sideFoundCountElement.nextElementSibling.textContent = `/ ${totalCount}`;
  puzzlePlateElement.textContent = `${wordListSelectElement.value || "Puzzle"} · No. ${roundNumber}`;

  const isComplete = totalCount > 0 && foundCount === totalCount;
  winSplashElement.classList.toggle("hidden", !isComplete);

  if (isComplete) {
    stopTimer();
    winTimeElement.textContent = timerTextElement.textContent;
    window.requestAnimationFrame(() => winNewRoundButton.focus());
  }
}

function handlePointerDown(event) {
  const button = event.currentTarget;
  const row = Number(button.dataset.row);
  const column = Number(button.dataset.column);

  event.preventDefault();
  clearHint();
  gameState.pointerDown = true;
  gameState.activeDirection = null;
  gameState.activeCells = [{ row, column }];

  renderBoard();
  renderFoundWordOverlay();
}

function handlePointerMove(event) {
  if (!gameState || !gameState.pointerDown) {
    return;
  }

  const target = document.elementFromPoint(event.clientX, event.clientY);
  const button = target?.closest(".cell");

  if (!button || !boardElement.contains(button)) {
    return;
  }

  const row = Number(button.dataset.row);
  const column = Number(button.dataset.column);
  const nextPath = getPathFromStart(row, column);

  if (nextPath.length > 0) {
    gameState.activeCells = nextPath;
    renderBoard();
    renderFoundWordOverlay();
  }
}

function handlePointerUp() {
  if (!gameState || !gameState.pointerDown) {
    return;
  }

  const selectedWord = gameState.activeCells
    .map(({ row, column }) => gameState.grid[row][column])
    .join("");
  const reversedWord = selectedWord.split("").reverse().join("");

  const matchedWord = gameState.words.find(
    (word) => !gameState.foundWords.has(word) && (word === selectedWord || word === reversedWord)
  );

  if (matchedWord) {
    if (gameState.hintWord === matchedWord) {
      clearHint();
    }

    gameState.foundWords.add(matchedWord);
    gameState.foundWordPaths.push({
      word: matchedWord,
      color: FOUND_WORD_COLORS[gameState.foundWordPaths.length % FOUND_WORD_COLORS.length],
      cells: gameState.activeCells.map(({ row, column }) => ({ row, column }))
    });
  }

  gameState.pointerDown = false;
  gameState.activeDirection = null;
  gameState.activeCells = [];
  render();
}

function getPathFromStart(targetRow, targetColumn) {
  const start = gameState.activeCells[0];
  const deltaRow = targetRow - start.row;
  const deltaColumn = targetColumn - start.column;

  const stepRow = Math.sign(deltaRow);
  const stepColumn = Math.sign(deltaColumn);
  const rowDistance = Math.abs(deltaRow);
  const columnDistance = Math.abs(deltaColumn);
  const isStraight = deltaRow === 0 || deltaColumn === 0 || rowDistance === columnDistance;

  if (!isStraight) {
    return gameState.activeCells;
  }

  if (gameState.activeDirection) {
    const sameDirection =
      gameState.activeDirection.stepRow === stepRow && gameState.activeDirection.stepColumn === stepColumn;

    if (!sameDirection && rowDistance + columnDistance > 0) {
      return gameState.activeCells;
    }
  }

  const distance = Math.max(rowDistance, columnDistance);
  const path = [];

  for (let offset = 0; offset <= distance; offset += 1) {
    path.push({
      row: start.row + stepRow * offset,
      column: start.column + stepColumn * offset
    });
  }

  if (distance > 0) {
    gameState.activeDirection = { stepRow, stepColumn };
  }

  return path;
}

boardElement.addEventListener("pointermove", handlePointerMove);
window.addEventListener("pointerup", handlePointerUp);
window.addEventListener("pointercancel", handlePointerUp);

function resetTimer() {
  stopTimer();
  gameState.startedAt = Date.now();
  updateTimerDisplay();
  timerIntervalId = window.setInterval(updateTimerDisplay, 1000);
}

function stopTimer() {
  if (timerIntervalId !== null) {
    window.clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

function updateTimerDisplay() {
  const elapsedSeconds = Math.floor((Date.now() - gameState.startedAt) / 1000);
  const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");
  timerTextElement.textContent = `${minutes}:${seconds}`;
  boardTimerTextElement.textContent = `${minutes}:${seconds}`;
}

function renderScreen(screen) {
  const isGame = screen === "game";
  document.documentElement.dataset.screen = screen;
  setupScreenElement.classList.toggle("hidden", isGame);
  gameScreenElement.classList.toggle("hidden", !isGame);
  restartButton.classList.toggle("hidden", !isGame);
  editSetupButton.classList.toggle("hidden", !isGame);
  layoutSwitcherElement.classList.toggle("hidden", !isGame);
  fullscreenButton.classList.toggle("hidden", !isGame || !document.fullscreenEnabled);

  if (!isGame) {
    winSplashElement.classList.add("hidden");
    if (document.fullscreenElement) {
      toggleFullscreen();
    }
  }
}

function normalizeWords(rawValue) {
  const words = rawValue
    .split(/\r?\n/)
    .map((word) => word.trim().toUpperCase().replace(/[^A-Z]/g, ""))
    .filter(Boolean);
  return [...new Set(words)];
}

function calculateMinimumBoardSize(words) {
  if (words.length === 0) {
    return 0;
  }

  const longestWord = Math.max(...words.map((word) => word.length));
  const totalLetters = words.reduce((sum, word) => sum + word.length, 0);
  return Math.max(longestWord, Math.ceil(Math.sqrt(totalLetters * 1.35)));
}

function buildSizeOptions(minimumSize) {
  if (minimumSize === 0) {
    return [];
  }

  const maxSize = Math.min(MAX_BOARD_SIZE, minimumSize + 8);
  const options = [];

  for (let size = minimumSize; size <= maxSize; size += 1) {
    options.push(size);
  }

  return options;
}

function updateSetupPreview() {
  const words = normalizeWords(wordsInputElement.value);
  const limitedWords = words.slice(0, MAX_WORDS);
  const ignoredWordCount = Math.max(0, words.length - MAX_WORDS);
  const minimumSize = calculateMinimumBoardSize(limitedWords);
  const sizeOptions = buildSizeOptions(minimumSize);
  const previousSelection = Number(boardSizeSelectElement.value);

  minimumSizeTextElement.textContent = `Minimum size: ${minimumSize} x ${minimumSize}`;
  wordCountTextElement.textContent =
    limitedWords.length === 1 ? "1 word ready" : `${limitedWords.length} words ready`;
  sizeHintTextElement.textContent =
    sizeOptions.length > 0
      ? `Available sizes: ${sizeOptions.map((size) => `${size} x ${size}`).join(", ")}`
      : "Add a few words to unlock size options.";

  if (ignoredWordCount > 0) {
    sizeHintTextElement.textContent += ` Only the first ${MAX_WORDS} words will be used.`;
  }

  boardSizeSelectElement.innerHTML = "";
  boardSizeSelectElement.disabled = sizeOptions.length === 0;

  if (sizeOptions.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Add words to choose a board size";
    boardSizeSelectElement.appendChild(option);
    return;
  }

  sizeOptions.forEach((size) => {
    const option = document.createElement("option");
    option.value = String(size);
    option.textContent = `${size} x ${size}`;
    boardSizeSelectElement.appendChild(option);
  });

  const nextSelection = sizeOptions.includes(previousSelection) ? previousSelection : sizeOptions[0];
  boardSizeSelectElement.value = String(nextSelection);
}

function showSetupError(message) {
  setupErrorElement.textContent = message;
  setupErrorElement.classList.remove("hidden");
}

function clearSetupError() {
  setupErrorElement.textContent = "";
  setupErrorElement.classList.add("hidden");
}

function handleSetupSubmit(event) {
  event.preventDefault();
  const normalizedWords = normalizeWords(wordsInputElement.value);

  if (normalizedWords.length > MAX_WORDS) {
    showSetupError(`Use ${MAX_WORDS} words or fewer to start a game.`);
    return;
  }

  const words = normalizedWords.slice(0, MAX_WORDS);

  if (words.length < 2) {
    showSetupError("Enter at least two words to build a puzzle.");
    return;
  }

  const minimumSize = calculateMinimumBoardSize(words);
  const selectedSize = Number(boardSizeSelectElement.value);

  if (!selectedSize || selectedSize < minimumSize) {
    showSetupError("Choose one of the available board sizes before starting.");
    return;
  }

  clearSetupError();

  const isStarterList =
    words.length === lastStarterWords.length && words.every((word, index) => word === lastStarterWords[index]);

  try {
    startGame({ words, size: selectedSize, source: isStarterList ? "pool" : "custom" });
  } catch (error) {
    showSetupError("That size is a little too tight for this list. Try a larger board.");
  }
}

function returnToSetup() {
  stopTimer();
  if (gameState) {
    gameState.pointerDown = false;
  }
  timerTextElement.textContent = "00:00";
  boardTimerTextElement.textContent = "00:00";
  renderScreen("setup");
}

function restartCurrentGame() {
  if (!currentConfig) {
    return;
  }

  if (currentConfig.source !== "pool") {
    startGame(currentConfig);
    return;
  }

  const previousWords = currentConfig.words.join("|");

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const words = getStarterWords();

    if (words.length < 2 || words.join("|") === previousWords) {
      continue;
    }

    const minimumSize = calculateMinimumBoardSize(words);
    const size = Math.min(MAX_BOARD_SIZE, Math.max(currentConfig.size, minimumSize));

    if (minimumSize > MAX_BOARD_SIZE) {
      continue;
    }

    try {
      startGame({ words, size, source: "pool" });
      lastStarterWords = [...words];
      isApplyingStarterWords = true;
      wordsInputElement.value = words.join("\n");
      isApplyingStarterWords = false;
      updateSetupPreview();
      return;
    } catch (error) {
      // That draw does not fit this board. Try another set of words.
    }
  }

  startGame(currentConfig);
}

layoutSelectElement.addEventListener("change", (event) => changeLayout(event.target.value));
setupLayoutSelectElement.addEventListener("change", (event) => changeLayout(event.target.value));
huntHintButton.addEventListener("click", useHuntHint);
huntSkipButton.addEventListener("click", skipHuntWord);
winNewRoundButton.addEventListener("click", restartCurrentGame);
winSetupButton.addEventListener("click", returnToSetup);
restartButton.addEventListener("click", restartCurrentGame);
editSetupButton.addEventListener("click", returnToSetup);
themeToggleButton.addEventListener("click", toggleTheme);
fullscreenButton.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", () => {
  fullscreenButton.textContent = document.fullscreenElement ? "Exit full screen" : "Full screen";
});
setupFormElement.addEventListener("submit", handleSetupSubmit);
wordsInputElement.addEventListener("input", () => {
  if (isApplyingStarterWords) {
    return;
  }

  clearSetupError();
  updateSetupPreview();
});

wordCountSelectElement.addEventListener("change", () => {
  applyStarterWords();
});

wordListSelectElement.addEventListener("change", () => {
  applyStarterWords();
});

function initializeApp() {
  applyTheme(getPreferredTheme());
  populateLayoutOptions();
  applyLayout(getPreferredLayout());
  populateWordListOptions();
  populateWordCountOptions();
  applyStarterWords();
  renderScreen("setup");
}

initializeApp();

new ResizeObserver(() => {
  if (gameState) {
    renderFoundWordOverlay();
  }
}).observe(boardElement);
