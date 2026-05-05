// Mock data for MyStocks platform
const HOLDINGS = [
  { sym:'SCHD', name:'Schwab U.S. Dividend Equity ETF', qty:54, avg:30.9963, price:31.52, sector:'ETF — Dividend' },
  { sym:'MSFT', name:'Microsoft Corp.',                qty:1,  avg:399.19, price:413.62, sector:'Technology' },
  { sym:'QQQM', name:'Invesco NASDAQ 100 ETF',         qty:1,  avg:251.49, price:277.05, sector:'ETF — Index' },
  { sym:'AMZN', name:'Amazon.com, Inc.',               qty:1,  avg:200.28, price:272.05, sector:'Consumer Cyclical' },
  { sym:'NVDA', name:'NVIDIA Corporation',             qty:1,  avg:185.76, price:198.48, sector:'Technology' },
  { sym:'NFLX', name:'Netflix, Inc.',                  qty:1,  avg:84.12,  price:91.02,  sector:'Communication Services' },
  { sym:'SWMR', name:'Swarmer, Inc',                   qty:1,  avg:43.00,  price:33.60,  sector:'Defense' },
];

// Compute derived values for holdings
const ENRICHED_HOLDINGS = HOLDINGS.map(h => {
  const invested = h.qty * h.avg;
  const value = h.qty * h.price;
  const pl = value - invested;
  const plPct = (pl / invested) * 100;
  return { ...h, invested, value, pl, plPct };
});
const TOTAL_VALUE = ENRICHED_HOLDINGS.reduce((s,h)=>s+h.value,0);
const TOTAL_INVESTED = ENRICHED_HOLDINGS.reduce((s,h)=>s+h.invested,0);
ENRICHED_HOLDINGS.forEach(h => h.allocation = (h.value/TOTAL_VALUE)*100);

// Portfolios
const PORTFOLIOS = [
  { id:'main', name:'Main', holdings: ENRICHED_HOLDINGS, color: 'var(--accent)' },
  { id:'div',  name:'Dividend Income',  color: 'oklch(0.65 0.13 165)',
    summary: { value: 14820.31, invested: 13900.00, pl: 920.31, plPct: 6.62, count: 12 } },
  { id:'spec', name:'Speculative',      color: 'oklch(0.60 0.15 290)',
    summary: { value: 4210.50, invested: 4800.00, pl: -589.50, plPct: -12.28, count: 5 } },
];

// Sparkline generator — deterministic from a seed
function sparkline(seed, n=24, drift=0.005, volatility=0.02) {
  const out = [];
  let v = 100;
  for (let i = 0; i < n; i++) {
    const r = Math.sin(seed * 9301 + i * 49297) * 0.5;
    v = v * (1 + drift + r * volatility);
    out.push(v);
  }
  return out;
}

// Portfolio history (90 days, with realistic drift)
function makeHistory(days, base, vol) {
  const arr = [];
  let v = base;
  for (let i = 0; i < days; i++) {
    const noise = Math.sin(i * 0.6) * 0.4 + Math.cos(i * 0.31) * 0.3 + (Math.sin(i * 9301) * 0.5);
    v = v * (1 + 0.0008 + noise * vol);
    arr.push(+v.toFixed(2));
  }
  return arr;
}
const PORTFOLIO_HISTORY = {
  '1W': makeHistory(7, 2960, 0.006),
  '1M': makeHistory(30, 2900, 0.008),
  '3M': makeHistory(90, 2780, 0.009),
  '1Y': makeHistory(252, 2400, 0.011),
  'ALL': makeHistory(500, 2000, 0.012),
};

// Generate candlestick data (OHLC + volume)
function makeCandles(days, base) {
  const arr = [];
  let close = base;
  for (let i = 0; i < days; i++) {
    const open = close;
    const trend = Math.sin(i * 0.4) * 0.6 + Math.cos(i * 0.13) * 0.4;
    const drift = trend * 0.012 + (Math.sin(i * 9301 + 7) * 0.5) * 0.018;
    close = +(open * (1 + drift)).toFixed(2);
    const high = +Math.max(open, close, open * (1 + Math.abs(Math.sin(i*3.7)) * 0.012)).toFixed(2);
    const low  = +Math.min(open, close, open * (1 - Math.abs(Math.cos(i*2.3)) * 0.012)).toFixed(2);
    const volume = Math.round(20 + Math.abs(Math.sin(i * 0.7) + Math.cos(i*1.3)) * 60 + Math.abs(close-open) * 30);
    arr.push({ open, close, high, low, volume });
  }
  return arr;
}

// Compute simple RSI(14) from closes
function computeRSI(closes, period = 14) {
  const rsi = [];
  for (let i = 0; i < closes.length; i++) {
    if (i < period) { rsi.push(null); continue; }
    let gains = 0, losses = 0;
    for (let j = i - period + 1; j <= i; j++) {
      const d = closes[j] - closes[j-1];
      if (d > 0) gains += d; else losses -= d;
    }
    const avgG = gains/period, avgL = losses/period;
    if (avgL === 0) { rsi.push(100); continue; }
    const rs = avgG / avgL;
    rsi.push(+(100 - 100/(1+rs)).toFixed(1));
  }
  return rsi;
}

const AAPL_CANDLES = makeCandles(30, 264);
const AAPL_RSI = computeRSI(AAPL_CANDLES.map(c => c.close));

// Market / Discover lists
const MARKET_INDEXES = [
  { sym:'^GSPC',  name:'S&P 500',       price: 5612.43, ch: 0.42, spark: sparkline(1) },
  { sym:'^IXIC',  name:'Nasdaq',        price: 17648.10, ch: 0.65, spark: sparkline(2) },
  { sym:'^DJI',   name:'Dow Jones',     price: 41280.55, ch: -0.12, spark: sparkline(3, 24, 0, 0.018) },
  { sym:'BTC',    name:'Bitcoin',       price: 71240.18, ch: 1.86, spark: sparkline(4, 24, 0.008, 0.03) },
];
const TRENDING = [
  { sym:'NVDA', name:'NVIDIA Corp.',     price:198.48, ch: 6.85,  vol:'42.1M' },
  { sym:'TSLA', name:'Tesla, Inc.',      price:241.07, ch: 3.12,  vol:'38.2M' },
  { sym:'AAPL', name:'Apple Inc.',       price:276.83, ch:-1.18,  vol:'29.8M' },
  { sym:'MSFT', name:'Microsoft Corp.',  price:413.62, ch: 0.84,  vol:'18.4M' },
  { sym:'AMZN', name:'Amazon.com',       price:272.05, ch: 2.21,  vol:'24.1M' },
  { sym:'META', name:'Meta Platforms',   price:528.30, ch: 1.05,  vol:'12.3M' },
];
const SECTORS = [
  { name:'Technology',          ch: 1.32 },
  { name:'Healthcare',          ch: 0.18 },
  { name:'Financials',          ch:-0.45 },
  { name:'Consumer Cyclical',   ch: 0.92 },
  { name:'Energy',              ch:-1.12 },
  { name:'Industrials',         ch: 0.31 },
  { name:'Communication',       ch: 0.71 },
  { name:'Utilities',           ch:-0.22 },
  { name:'Real Estate',         ch:-0.66 },
  { name:'Materials',           ch: 0.05 },
];

// AI Insights
const INSIGHTS = [
  { id:1, kind:'rebalance', priority:'high',
    title:'Your portfolio is 70% Technology weighted',
    body:'Consider trimming MSFT or NVDA to bring tech allocation closer to your 50% target. Diversifying into Healthcare or Industrials could reduce overall volatility by an estimated 14%.',
    action:'View rebalance plan' },
  { id:2, kind:'earnings', priority:'med',
    title:'NVDA reports earnings in 6 days',
    body:'Implied volatility on NVDA options has risen to 64%. Historical earnings moves average ±8.3%. You hold 1 share — a covered-call strategy could harvest premium.',
    action:'See playbook' },
  { id:3, kind:'tax', priority:'med',
    title:'Tax-loss harvesting opportunity in SWMR',
    body:'SWMR is down −21.86% on your cost basis. Realizing the loss before year-end could offset roughly $9.40 of capital gains from MSFT and NVDA.',
    action:'Review trade' },
  { id:4, kind:'dividend', priority:'low',
    title:'SCHD ex-div date this Friday',
    body:'You\'ll receive an estimated $14.40 in qualified dividends on May 15. DRIP is currently OFF — toggling it on would compound automatically.',
    action:'Enable DRIP' },
];

// News for AAPL detail
const AAPL_NEWS = [
  { src:'Bloomberg', time:'2h ago', title:'Apple beats Q2 estimates on iPhone strength, services hit record',
    summary:'Revenue rose 4.5% YoY to $94.8B; services revenue crossed $25B for the first time.', sentiment:'pos' },
  { src:'Reuters', time:'5h ago', title:'Apple unveils on-device AI features for iOS 19, expands partnership with Anthropic',
    summary:'New Intelligence layer ships in beta this fall; investors react positively to private-compute architecture.', sentiment:'pos' },
  { src:'WSJ', time:'1d ago', title:'EU widens DMA probe into App Store fee structure',
    summary:'Regulators question whether the new "core technology fee" complies with March ruling.', sentiment:'neg' },
  { src:'CNBC', time:'2d ago', title:'Buffett trims Apple stake further in Q1 13-F',
    summary:'Berkshire reduced position by ~13% but Apple remains its largest equity holding by value.', sentiment:'neu' },
];

// Recent transactions
const TRANSACTIONS = [
  { date:'May 2',  type:'BUY',  sym:'NVDA', qty:1, price:185.76, total:-185.76 },
  { date:'Apr 28', type:'DIV',  sym:'SCHD', qty:54, price:0.27,  total: 14.58 },
  { date:'Apr 24', type:'BUY',  sym:'AMZN', qty:1, price:200.28, total:-200.28 },
  { date:'Apr 18', type:'BUY',  sym:'NFLX', qty:1, price:84.12,  total:-84.12 },
  { date:'Apr 12', type:'SELL', sym:'TSLA', qty:2, price:215.40, total: 430.80 },
  { date:'Apr 02', type:'BUY',  sym:'MSFT', qty:1, price:399.19, total:-399.19 },
];

// Watchlist
const WATCHLIST = [
  { sym:'GOOG', name:'Alphabet Inc.',     price:182.40, ch: 0.68, target: 200, spark: sparkline(11) },
  { sym:'TSLA', name:'Tesla, Inc.',       price:241.07, ch: 3.12, target: 280, spark: sparkline(12) },
  { sym:'COST', name:'Costco Wholesale',  price:910.55, ch: 0.21, target: 950, spark: sparkline(13) },
  { sym:'V',    name:'Visa Inc.',         price:288.30, ch:-0.34, target: 310, spark: sparkline(14) },
];

Object.assign(window, {
  HOLDINGS: ENRICHED_HOLDINGS, TOTAL_VALUE, TOTAL_INVESTED,
  PORTFOLIOS, PORTFOLIO_HISTORY,
  AAPL_CANDLES, AAPL_RSI, AAPL_NEWS,
  MARKET_INDEXES, TRENDING, SECTORS,
  INSIGHTS, TRANSACTIONS, WATCHLIST,
  sparkline, makeHistory
});
