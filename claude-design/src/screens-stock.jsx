// Stock detail screen — AAPL with full chart, key metrics, news
const StockScreen = ({ onBack, sym = 'AAPL', tweaks = {} }) => {
  const [range, setRange] = React.useState('1M');
  const [chartType, setChartType] = React.useState('candle');

  return (
    <div style={{ display:'grid', gap:20 }}>
      <button onClick={onBack} style={{ display:'flex', alignItems:'center', gap:6, color:'var(--ink-3)', fontSize:13 }}>
        {I.arrow_left({s:14})} Back
      </button>

      {/* Header */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:24, alignItems:'flex-start' }}>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <SymbolBadge sym="AAPL" size={56}/>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ fontSize:32, fontWeight:600, letterSpacing:'-0.025em' }}>AAPL</div>
              <Pill tone="neutral">NASDAQ</Pill>
              <Pill tone="cool">Technology</Pill>
            </div>
            <div style={{ fontSize:14, color:'var(--ink-3)', marginTop:4 }}>Apple Inc. · Consumer Electronics</div>
          </div>
        </div>
        <div style={{ textAlign:'right' }}>
          <div className="num" style={{ fontSize:32, fontWeight:600, letterSpacing:'-0.025em' }}>$276.83</div>
          <div style={{ marginTop:4 }}>
            <Pill tone="neg">−3.31 (−1.18%) today</Pill>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
        <Button variant="primary" size="md">Buy</Button>
        <Button variant="ghost" size="md">Sell</Button>
        <Button variant="ghost" size="md" icon={I.bookmark()}>Add to watchlist</Button>
        <Button variant="ghost" size="md" icon={I.bell()}>Set alert</Button>
        <div style={{ flex:1 }}/>
        <Tabs value={chartType} onChange={setChartType} size="sm" tabs={[
          {id:'candle', label:'Candles'}, {id:'area', label:'Area'}
        ]}/>
        <Tabs value={range} onChange={setRange} size="sm" tabs={[
          {id:'1D',label:'1D'},{id:'1W',label:'1W'},{id:'1M',label:'1M'},{id:'3M',label:'3M'},{id:'1Y',label:'1Y'},{id:'5Y',label:'5Y'}
        ]}/>
      </div>

      {/* Chart card */}
      <Card pad={20}>
        {chartType === 'candle' ? (
          <CandleChart candles={AAPL_CANDLES} rsi={AAPL_RSI}
            showVolume={tweaks.candleVolume !== false}
            showRSI={tweaks.rsi !== false}
            height={420}/>
        ) : (
          <AreaChart data={AAPL_CANDLES.map(c => c.close)} height={360} color="var(--cool)"/>
        )}
      </Card>

      {/* Position + Key metrics */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20 }}>
        <Card>
          <SectionHeader title="Your position"/>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
            <div>
              <div style={{ fontSize:11, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Shares</div>
              <div className="num" style={{ fontSize:22, fontWeight:600, marginTop:4 }}>—</div>
              <div style={{ fontSize:11.5, color:'var(--ink-3)', marginTop:2 }}>Not held</div>
            </div>
            <div>
              <div style={{ fontSize:11, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Market Cap</div>
              <div className="num" style={{ fontSize:22, fontWeight:600, marginTop:4 }}>$4.06T</div>
            </div>
          </div>
          <div style={{ marginTop:16, padding:14, borderRadius:10, background:'var(--bg-sunken)', fontSize:12.5, color:'var(--ink-2)', lineHeight:1.55 }}>
            You don't own AAPL yet. Adding it would shift your tech allocation to ~73%.
          </div>
        </Card>

        <Card>
          <SectionHeader title="Key metrics"/>
          <div style={{ display:'grid', gap:10, fontSize:13 }}>
            {[
              ['P/E Ratio', '33.93'],
              ['EPS (TTM)', '$8.16'],
              ['Dividend Yield', '0.38%'],
              ['52w Range', '$164.08 – $292.45'],
              ['Avg Volume', '52.3M'],
              ['Beta', '1.24'],
            ].map(([k,v]) => (
              <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'4px 0' }}>
                <span style={{ color:'var(--ink-3)' }}>{k}</span>
                <span className="num" style={{ fontWeight:500 }}>{v}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader title="Analyst consensus"/>
          <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:12 }}>
            <span className="num" style={{ fontSize:32, fontWeight:600 }}>$298</span>
            <span style={{ fontSize:13, color:'var(--ink-3)' }}>12-mo target</span>
          </div>
          <Pill tone="pos">+7.6% upside</Pill>
          <div style={{ marginTop:16 }}>
            <div style={{ display:'flex', height:8, borderRadius:4, overflow:'hidden', background:'var(--bg-sunken)' }}>
              <div style={{ width:'62%', background:'var(--pos)' }}/>
              <div style={{ width:'28%', background:'oklch(0.75 0.04 70)' }}/>
              <div style={{ width:'10%', background:'var(--neg)' }}/>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:11.5, color:'var(--ink-3)', marginTop:8 }}>
              <span>Buy 28</span><span>Hold 13</span><span>Sell 4</span>
            </div>
          </div>
        </Card>
      </div>

      {/* News */}
      <Card>
        <SectionHeader title="News" subtitle="Latest from your sources"
          action={<Pill tone="accent">{I.sparkles({s:11})} AI summarized</Pill>}/>
        <div style={{ display:'grid', gap:0 }}>
          {AAPL_NEWS.map((n, i) => (
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'80px 1fr auto', gap:16, padding:'14px 0',
              alignItems:'flex-start',
              borderBottom: i<AAPL_NEWS.length-1 ? '1px solid var(--line)':'none',
              cursor:'pointer'
            }}>
              <div style={{ fontSize:11.5, color:'var(--ink-3)', paddingTop:2, fontFamily:'var(--font-mono)' }}>{n.time}</div>
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                  <span style={{ fontSize:11.5, fontWeight:600, color:'var(--ink-2)' }}>{n.src}</span>
                  <Pill tone={n.sentiment==='pos'?'pos':n.sentiment==='neg'?'neg':'neutral'} size="sm">
                    {n.sentiment==='pos'?'Bullish':n.sentiment==='neg'?'Bearish':'Neutral'}
                  </Pill>
                </div>
                <div style={{ fontWeight:600, fontSize:14, marginBottom:4, letterSpacing:'-0.005em' }}>{n.title}</div>
                <div style={{ fontSize:13, color:'var(--ink-3)', lineHeight:1.5 }}>{n.summary}</div>
              </div>
              <div style={{ color:'var(--ink-3)', paddingTop:2 }}>{I.external()}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

window.StockScreen = StockScreen;
