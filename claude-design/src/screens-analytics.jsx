// Analytics — allocation breakdowns, performance
const AnalyticsScreen = () => {
  const sectorAlloc = {};
  HOLDINGS.forEach(h => {
    sectorAlloc[h.sector] = (sectorAlloc[h.sector] || 0) + h.value;
  });
  const sectorData = Object.entries(sectorAlloc).map(([k,v],i) => {
    const colors = ['var(--accent)','oklch(0.55 0.13 240)','oklch(0.62 0.13 165)','oklch(0.55 0.14 290)','oklch(0.65 0.14 100)','oklch(0.55 0.13 200)'];
    return { name:k, value:v, color: colors[i % colors.length], pct:(v/TOTAL_VALUE)*100 };
  }).sort((a,b)=>b.value-a.value);

  return (
    <div style={{ display:'grid', gap:20 }}>
      <div>
        <div style={{ fontSize:28, fontWeight:600, letterSpacing:'-0.02em' }}>Analytics</div>
        <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:4 }}>Diversification, performance, and risk for Main portfolio</div>
      </div>

      {/* Top stats row */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16 }}>
        {[
          { label:'1Y Return', v:'+18.42%', tone:'pos', sub:'vs S&P +12.1%' },
          { label:'Volatility', v:'14.6%', sub:'30-day stdev' },
          { label:'Sharpe Ratio', v:'1.42', tone:'pos', sub:'Above 1.0 healthy' },
          { label:'Max Drawdown', v:'−8.2%', tone:'neg', sub:'Mar 2026' },
        ].map(s => (
          <Card key={s.label} pad={20}>
            <StatTile label={s.label} value={s.v} tone={s.tone}
              sub={<span style={{ fontSize:11.5, color:'var(--ink-3)' }}>{s.sub}</span>}/>
          </Card>
        ))}
      </div>

      {/* Sector + Asset class side by side */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
        <Card>
          <SectionHeader title="By sector"/>
          <div style={{ display:'flex', gap:24, alignItems:'center' }}>
            <Donut size={180} thickness={22} data={sectorData}/>
            <div style={{ flex:1, display:'grid', gap:10 }}>
              {sectorData.map(s => (
                <div key={s.name} style={{ display:'grid', gridTemplateColumns:'10px 1fr auto auto', gap:10, alignItems:'center' }}>
                  <div style={{ width:10, height:10, borderRadius:2, background:s.color }}/>
                  <span style={{ fontSize:13 }}>{s.name}</span>
                  <span className="num" style={{ fontSize:12, color:'var(--ink-3)' }}>{fmt.money(s.value)}</span>
                  <span className="num" style={{ fontSize:13, fontWeight:500, minWidth:48, textAlign:'right' }}>{s.pct.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <SectionHeader title="By asset class"/>
          <div style={{ display:'grid', gap:14 }}>
            {[
              { name:'Equities (single stock)',  pct: 34.91, color:'var(--accent)' },
              { name:'ETFs (Index/Dividend)',     pct: 65.09, color:'oklch(0.55 0.13 240)' },
            ].map(c => (
              <div key={c.name}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                  <span style={{ fontSize:13, fontWeight:500 }}>{c.name}</span>
                  <span className="num" style={{ fontSize:13, fontWeight:500 }}>{c.pct.toFixed(2)}%</span>
                </div>
                <div style={{ height:10, background:'var(--bg-sunken)', borderRadius:5, overflow:'hidden' }}>
                  <div style={{ width:`${c.pct}%`, height:'100%', background:c.color, borderRadius:5 }}/>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:24 }}>
            <SectionHeader title="By geography"/>
            <div style={{ display:'grid', gap:14 }}>
              {[
                { name:'United States', pct:91.4, color:'var(--accent)' },
                { name:'International', pct:5.2,  color:'oklch(0.55 0.13 240)' },
                { name:'Emerging',      pct:3.4,  color:'oklch(0.65 0.14 100)' },
              ].map(c => (
                <div key={c.name}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                    <span style={{ fontSize:13 }}>{c.name}</span>
                    <span className="num" style={{ fontSize:13 }}>{c.pct.toFixed(1)}%</span>
                  </div>
                  <div style={{ height:8, background:'var(--bg-sunken)', borderRadius:4, overflow:'hidden' }}>
                    <div style={{ width:`${c.pct}%`, height:'100%', background:c.color, borderRadius:4 }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Performance vs benchmark */}
      <Card>
        <SectionHeader title="Performance vs S&P 500"
          subtitle="Indexed to 100 · 1 Year"
          action={<div style={{ display:'flex', gap:14, fontSize:12, color:'var(--ink-3)' }}>
            <span><span style={{display:'inline-block', width:10, height:2, background:'var(--accent)', verticalAlign:'middle', marginRight:6}}/>Your portfolio</span>
            <span><span style={{display:'inline-block', width:10, height:2, background:'var(--ink-3)', verticalAlign:'middle', marginRight:6}}/>S&P 500</span>
          </div>}/>
        <div style={{ position:'relative' }}>
          <AreaChart data={makeHistory(252, 100, 0.011)} height={260} color="var(--accent)"/>
        </div>
      </Card>
    </div>
  );
};

window.AnalyticsScreen = AnalyticsScreen;
