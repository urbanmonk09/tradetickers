// ===============================
// Navigation
// ===============================
export const NAV_ITEMS = [
  { href: "/", title: "Dashboard" },
  { href: "/chart", title: "Charts" },
  { href: "/ai-alerts", title: "AI Alerts" },
  { href: "/watchlist", title: "Watchlist" },
  { href: "/blog", title: "Blog" },
];


// ===============================
// Sign-up form select options
// ===============================
export const INVESTMENT_GOALS = [
  { value: "Growth", label: "Growth" },
  { value: "Income", label: "Income" },
  { value: "Balanced", label: "Balanced" },
  { value: "Conservative", label: "Conservative" },
];

export const RISK_TOLERANCE_OPTIONS = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

export const PREFERRED_INDUSTRIES = [
  { value: "Technology", label: "Technology" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Finance", label: "Finance" },
  { value: "Energy", label: "Energy" },
  { value: "Consumer Goods", label: "Consumer Goods" },
];

// ===============================
// Popular Symbols (Single Source)
// ===============================
export const POPULAR_STOCK_SYMBOLS = [
  
  "RELIANCE", "TCS", "INFY", "HDFCBANK", "ICICIBANK",
  "SBIN", "ITC", "LT", "BHARTIARTL", "AXISBANK",
  "BTCUSD", "ETHUSD", "XAUUSD",
  "AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "META", "NVDA", "NFLX"
];

// ===============================
// Market Overview (Popular Stocks)
// ===============================
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
  colorTheme: "dark",
  locale: "en",
  width: "100%",
  height: 600,
  showSymbolLogo: true,
  isTransparent: true,

  tabs: [
    {
      title: "Popular Stocks",
      symbols: POPULAR_STOCK_SYMBOLS
        .filter(s => !s.includes("USD"))
        .map(symbol => ({
          s: symbol,
          d: symbol,
        })),
    },
  ],
};

// ===============================
// Stock Heatmap (Popular Stocks)
// ===============================
export const STOCK_HEATMAP_WIDGET_CONFIG = {
  colorTheme: "dark",
  locale: "en",
  width: "100%",
  height: 600,

  hasTopBar: true,
  isZoomEnabled: true,
  hasSymbolTooltip: true,

  blockSize: "market_cap_basic",
  blockColor: "change",

  symbols: POPULAR_STOCK_SYMBOLS
    .filter(s => !s.includes("USD"))
    .map(symbol => ({ s: symbol })),
};

// ===============================
// Market News (Stock Market Scope)
// ===============================
export const TOP_STORIES_WIDGET_CONFIG = {
  displayMode: "regular",
  feedMode: "market",
  market: "stock",
  colorTheme: "dark",
  locale: "en",
  isTransparent: true,
  width: "100%",
  height: 600,
};

// ===============================
// Market Quotes (Popular Stocks)
// ===============================
export const MARKET_DATA_WIDGET_CONFIG = {
  title: "Popular Stocks",
  width: "100%",
  height: 600,
  locale: "en",
  showSymbolLogo: true,
  colorTheme: "dark",
  isTransparent: false,
  backgroundColor: "#0F0F0F",

  symbolsGroups: [
    {
      name: "Popular",
      symbols: POPULAR_STOCK_SYMBOLS
        .filter(s => !s.includes("USD"))
        .map(symbol => ({
          name: symbol,
          displayName: symbol,
        })),
    },
  ],
};
