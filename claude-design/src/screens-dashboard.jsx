// Dashboard / Overview
const DashboardScreen = ({ onNav }) => {
  const [range, setRange] = React.useState('3M');
  const data = PORTFOLIO_HISTORY[range];
  const start = data[0], end = data[data.length-1];
  const change = end - start;
  const changePct = (change/start)*100;

  const dayChange = TOTAL_VALUE * 0.0086;

  return (
    <div style={{ display:'grid', gap:20 }}>
      {/* Header row */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:16 }}>
        <div>
          <div style={{ fontSize:13, color:'var(--ink-3)', marginBottom:4 }}>Good afternoon, Alex</div>
          <div style={{ fontSize:28, fontWeight:600, letterSpacing:'-0.02em' }}>Your portfolio</div>
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <Button variant="ghost" icon={I.download({s:14})} size="sm">Export</Button>
          <Button variant="primary" icon={I.plus()} size="sm">Add Holding</Button>
        </div>
      </div>

      {/* Hero card */}
      <Card pad={28} style={{ display:'grid', gridTemplateColumns:'minmax(280px, 360px) 1fr', gap:32, alignItems:'stretch' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:20, paddingRight:28, borderRight:'1px solid var(--line)' }}>
          <div>
            <div style={{ fontSize:11.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:500 }}>Total Value</div>
            <div className="num" style={{ fontSize:40, fontWeight:600, letterSpacing:'-0.025em', marginTop:6 }}>
              ${(TOTAL_VALUE).toLocaleString('en-US',{minimumFractionDigits:2, maximumFractionDigits:2})}
            </div>
            <div style={{ marginTop:8, display:'flex', alignItems:'center', gap:8 }}>
              <Delta value={dayChange} pct={0.86}/>
              <span style={{ fontSize:12, color:'var(--ink-3)' }}>today</span>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, paddingTop:18, borderTop:'1px solid var(--line)' }}>
            <div>
              <div style={{ fontSize:11, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Invested</div>
              <div className="num" style={{ fontSize:18, fontWeight:600, marginTop:4 }}>{fmt.money(TOTAL_INVESTED)}</div>
            </div>
            <div>
              <div style={{ fontSize:11, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Total P&L</div>
              <div className="num pos" style={{ fontSize:18, fontWeight:600, marginTop:4 }}>+{fmt.money(TOTAL_VALUE - TOTAL_INVESTED)}</div>
            </div>
            <div>
              <div style={{ fontSize:11, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Holdings</div>
              <div className="num" style={{ fontSize:18, fontWeight:600, marginTop:4 }}>{HOLDINGS.length}</div>
            </div>
            <div>
              <div style={{ fontSize:11, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.05em' }}>Cash</div>
              <div className="num" style={{ fontSize:18, fontWeight:600, marginTop:4 }}>$412.55</div>
            </div>
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <div>
              <div style={{ fontSize:11.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:500 }}>Performance</div>
              <div style={{ display:'flex', gap:8, alignItems:'baseline', marginTop:4 }}>
                <span className="num" style={{ fontSize:18, fontWeight:600, color: change>=0?'var(--pos)':'var(--neg)' }}>
                  {change>=0?'+':''}{fmt.money(Math.abs(change))}
                </span>
                <span className="num" style={{ fontSize:13, color:'var(--ink-3)' }}>
                  ({change>=0?'+':''}{changePct.toFixed(2)}% over {range})
                </span>
              </div>
            </div>
            <Tabs value={range} onChange={setRange} size="sm" tabs={[
              {id:'1W', label:'1W'},{id:'1M',label:'1M'},{id:'3M',label:'3M'},{id:'1Y',label:'1Y'},{id:'ALL',label:'ALL'}
            ]}/>
          </div>
          <div style={{ flex:1, minHeight:240 }}>
            <AreaChart data={data} height={240} color="var(--accent)"/>
          </div>
        </div>
      </Card>

      {/* Three-card row */}
      <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:20 }}>
        {/* Top movers */}
        <Card>
          <SectionHeader title="Today's movers" subtitle="Biggest swings in your portfolio"
            action={<Button variant="ghost" size="sm" onClick={() => onNav('portfolio')}>View all<span style={{marginLeft:4}}>{I.arrow_right({s:13})}</span></Button>}/>
          <div style={{ display:'grid', gap:2 }}>
            {[...HOLDINGS].sort((a,b) => Math.abs(b.plPct) - Math.abs(a.plPct)).slice(0,4).map(h => (
              <div key={h.sym} style={{
                display:'grid', gridTemplateColumns:'auto 1fr auto auto auto', gap:14, alignItems:'center',
                padding:'10px 4px', cursor:'pointer', borderRadius:8, transition:'background .15s'
              }}
                onMouseEnter={e => e.currentTarget.style.background='var(--bg-sunken)'}
                onMouseLeave={e => e.currentTarget.style.background=''}
                onClick={() => onNav('stock')}>
                <SymbolBadge sym={h.sym} size={36}/>
                <div>
                  <div style={{ fontWeight:600, fontSize:13.5 }}>{h.sym}</div>
                  <div style={{ fontSize:12, color:'var(--ink-3)' }}>{h.name}</div>
                </div>
                <Sparkline data={sparkline(h.sym.charCodeAt(0), 24, 0.002, 0.015)} w={80} h={28} color={h.plPct>=0?'var(--pos)':'var(--neg)'}/>
                <div className="num" style={{ fontSize:13, textAlign:'right' }}>{fmt.money(h.price)}</div>
                <Delta value={h.pl} pct={h.plPct}/>
              </div>
            ))}
          </div>
        </Card>

        {/* Allocation donut */}
        <Card>
          <SectionHeader title="Allocation" subtitle="By position"/>
          <div style={{ display:'flex', alignItems:'center', gap:16 }}>
            <div style={{ position:'relative', width:140, height:140 }}>
              <Donut size={140} thickness={18} data={HOLDINGS.map((h,i) => {
                const colors = ['var(--accent)','oklch(0.55 0.13 240)','oklch(0.62 0.13 165)','oklch(0.55 0.14 290)','oklch(0.65 0.14 100)','oklch(0.55 0.13 200)','oklch(0.55 0.13 25)'];
                return { value: h.value, color: colors[i % colors.length] };
              })}/>
              <div style={{ position:'absolute', inset:0, display:'grid', placeItems:'center', textAlign:'center' }}>
                <div>
                  <div style={{ fontSize:10.5, color:'var(--ink-3)' }}>Holdings</div>
                  <div className="num" style={{ fontSize:22, fontWeight:600 }}>{HOLDINGS.length}</div>
                </div>
              </div>
            </div>
            <div style={{ flex:1, display:'grid', gap:6, fontSize:12 }}>
              {HOLDINGS.slice(0,5).map((h,i) => {
                const colors = ['var(--accent)','oklch(0.55 0.13 240)','oklch(0.62 0.13 165)','oklch(0.55 0.14 290)','oklch(0.65 0.14 100)','oklch(0.55 0.13 200)','oklch(0.55 0.13 25)'];
                return (
                  <div key={h.sym} style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <div style={{ width:8, height:8, borderRadius:2, background: colors[i % colors.length] }}/>
                    <span style={{ flex:1, fontWeight:500 }}>{h.sym}</span>
                    <span className="num" style={{ color:'var(--ink-3)' }}>{h.allocation.toFixed(1)}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>

      {/* Watchlist + News + AI hint */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
        <Card>
          <SectionHeader title="Watchlist" subtitle="4 symbols"
            action={<Button variant="ghost" size="sm" icon={I.plus({s:13})}>Add</Button>}/>
          <div style={{ display:'grid', gap:0 }}>
            {WATCHLIST.map((w,i) => (
              <div key={w.sym} style={{
                display:'grid', gridTemplateColumns:'auto 1fr auto auto', gap:12, alignItems:'center',
                padding:'10px 0', borderTop: i===0?'none':'1px solid var(--line)'
              }}>
                <SymbolBadge sym={w.sym} size={32}/>
                <div>
                  <div style={{ fontWeight:600, fontSize:13 }}>{w.sym}</div>
                  <div style={{ fontSize:11.5, color:'var(--ink-3)' }}>{w.name}</div>
                </div>
                <Sparkline data={w.spark} w={70} h={24} color={w.ch>=0?'var(--pos)':'var(--neg)'}/>
                <div style={{ textAlign:'right' }}>
                  <div className="num" style={{ fontSize:13 }}>{fmt.money(w.price)}</div>
                  <Pill tone={w.ch>=0?'pos':'neg'} size="sm">{w.ch>=0?'+':''}{w.ch.toFixed(2)}%</Pill>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader title="AI insight" subtitle="Tailored to your holdings"
            action={<Pill tone="accent">{I.sparkles({s:11})} 4 new</Pill>}/>
          {INSIGHTS.slice(0,1).map(ins => (
            <div key={ins.id} style={{
              padding:16, borderRadius:12,
              background:'linear-gradient(135deg, var(--accent-soft), oklch(0.97 0.025 240))',
              border:'1px solid oklch(0.90 0.04 60)'
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
                <Pill tone="neg" size="sm">High priority</Pill>
                <span style={{ fontSize:11.5, color:'var(--ink-3)' }}>Rebalance suggestion</span>
              </div>
              <div style={{ fontSize:15, fontWeight:600, marginBottom:6, letterSpacing:'-0.01em' }}>{ins.title}</div>
              <div style={{ fontSize:13, color:'var(--ink-2)', lineHeight:1.55, marginBottom:12 }}>{ins.body}</div>
              <Button variant="primary" size="sm" onClick={() => onNav('ai')}>
                {ins.action} {I.arrow_right({s:13})}
              </Button>
            </div>
          ))}
        </Card>
      </div>

      {/* Recent transactions */}
      <Card>
        <SectionHeader title="Recent activity" subtitle="Last 6 transactions"
          action={<Button variant="ghost" size="sm">See all</Button>}/>
        <div style={{ display:'grid', gap:0 }}>
          <div style={{
            display:'grid', gridTemplateColumns:'90px 80px 1fr 80px 110px 110px',
            gap:12, padding:'8px 0', fontSize:11, textTransform:'uppercase',
            letterSpacing:'0.05em', color:'var(--ink-3)', fontWeight:500,
            borderBottom:'1px solid var(--line)'
          }}>
            <div>Date</div><div>Type</div><div>Symbol</div><div style={{textAlign:'right'}}>Qty</div><div style={{textAlign:'right'}}>Price</div><div style={{textAlign:'right'}}>Total</div>
          </div>
          {TRANSACTIONS.map((t,i) => (
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'90px 80px 1fr 80px 110px 110px',
              gap:12, padding:'12px 0', alignItems:'center',
              borderBottom: i<TRANSACTIONS.length-1 ? '1px solid var(--line)' : 'none'
            }}>
              <div className="num" style={{ fontSize:12.5, color:'var(--ink-2)' }}>{t.date}</div>
              <div><Pill tone={t.type==='BUY'?'cool':t.type==='SELL'?'neg':'pos'} size="sm">{t.type}</Pill></div>
              <div style={{ fontWeight:600, fontSize:13 }}>{t.sym}</div>
              <div className="num" style={{ textAlign:'right', fontSize:13 }}>{t.qty}</div>
              <div className="num" style={{ textAlign:'right', fontSize:13 }}>{fmt.money(t.price)}</div>
              <div className="num" style={{ textAlign:'right', fontSize:13, fontWeight:500, color: t.total>=0?'var(--pos)':'var(--ink)' }}>
                {t.total>=0?'+':''}{fmt.money(Math.abs(t.total))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

window.DashboardScreen = DashboardScreen;
