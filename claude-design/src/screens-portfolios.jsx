// Portfolios list + Portfolio detail (holdings table)

const PortfoliosScreen = ({ onOpenPortfolio }) => {
  return (
    <div style={{ display:'grid', gap:20 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
        <div>
          <div style={{ fontSize:28, fontWeight:600, letterSpacing:'-0.02em' }}>My Portfolios</div>
          <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:4 }}>3 portfolios · {fmt.money(TOTAL_VALUE + 14820.31 + 4210.50)} total</div>
        </div>
        <Button variant="primary" icon={I.plus()}>New Portfolio</Button>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(340px, 1fr))', gap:16 }}>
        {PORTFOLIOS.map(p => {
          const isMain = p.id === 'main';
          const value = isMain ? TOTAL_VALUE : p.summary.value;
          const invested = isMain ? TOTAL_INVESTED : p.summary.invested;
          const pl = value - invested;
          const plPct = (pl / invested) * 100;
          const count = isMain ? p.holdings.length : p.summary.count;
          const hist = makeHistory(30, value*0.95, 0.008);
          return (
            <Card key={p.id} pad={20} style={{
              cursor:'pointer', transition:'transform .15s, box-shadow .15s, border-color .15s'
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow='var(--shadow-lg)'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow='var(--shadow-sm)'; e.currentTarget.style.transform=''; }}
              onClick={() => isMain && onOpenPortfolio(p.id)}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
                <div style={{ width:8, height:8, borderRadius:2, background: p.color }}/>
                <div style={{ fontWeight:600, fontSize:15, flex:1 }}>{p.name}</div>
                <IconButton icon={I.trash()} title="Delete" style={{ color:'var(--neg)' }}/>
              </div>
              <div className="num" style={{ fontSize:28, fontWeight:600, letterSpacing:'-0.02em' }}>{fmt.money(value)}</div>
              <div style={{ marginTop:6, display:'flex', alignItems:'center', gap:8 }}>
                <Delta value={pl} pct={plPct}/>
                <span style={{ fontSize:11.5, color:'var(--ink-3)' }}>all time</span>
              </div>
              <div style={{ height:48, margin:'14px -4px 0' }}>
                <Sparkline data={hist} w={300} h={48} color={pl>=0?'var(--pos)':'var(--neg)'}/>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, paddingTop:14, borderTop:'1px solid var(--line)', marginTop:12 }}>
                <div>
                  <div style={{ fontSize:10.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.04em' }}>Invested</div>
                  <div className="num" style={{ fontSize:13, fontWeight:500, marginTop:2 }}>{fmt.money(invested)}</div>
                </div>
                <div>
                  <div style={{ fontSize:10.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.04em' }}>Holdings</div>
                  <div className="num" style={{ fontSize:13, fontWeight:500, marginTop:2 }}>{count}</div>
                </div>
                <div>
                  <div style={{ fontSize:10.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.04em' }}>30d</div>
                  <div className="num" style={{ fontSize:13, fontWeight:500, marginTop:2, color:pl>=0?'var(--pos)':'var(--neg)' }}>
                    {pl>=0?'+':''}{(plPct/3).toFixed(2)}%
                  </div>
                </div>
              </div>
            </Card>
          );
        })}

        {/* Add card */}
        <button style={{
          background:'transparent', border:'1.5px dashed var(--line-2)', borderRadius:'var(--r-lg)',
          padding:32, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8,
          color:'var(--ink-3)', minHeight:240, transition:'all .15s'
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent-deep)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--line-2)'; e.currentTarget.style.color='var(--ink-3)'; }}>
          <div style={{ width:40, height:40, borderRadius:10, background:'var(--bg-sunken)', display:'grid', placeItems:'center' }}>
            {I.plus({s:18})}
          </div>
          <div style={{ fontWeight:500, fontSize:14 }}>Create new portfolio</div>
          <div style={{ fontSize:12 }}>Group holdings by strategy</div>
        </button>
      </div>
    </div>
  );
};

const PortfolioDetailScreen = ({ onBack, onOpenStock }) => {
  const [sortBy, setSortBy] = React.useState('alloc');
  const sorted = React.useMemo(() => {
    const arr = [...HOLDINGS];
    arr.sort((a,b) => {
      if (sortBy==='alloc') return b.allocation - a.allocation;
      if (sortBy==='pl') return b.pl - a.pl;
      if (sortBy==='sym') return a.sym.localeCompare(b.sym);
      return 0;
    });
    return arr;
  }, [sortBy]);

  const totalPL = TOTAL_VALUE - TOTAL_INVESTED;
  const totalPLPct = (totalPL/TOTAL_INVESTED)*100;

  return (
    <div style={{ display:'grid', gap:20 }}>
      {/* Header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
        <div>
          <button onClick={onBack} style={{ display:'flex', alignItems:'center', gap:6, color:'var(--ink-3)', fontSize:13, marginBottom:8 }}>
            {I.arrow_left({s:14})} Portfolios
          </button>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:12, height:12, borderRadius:3, background:'var(--accent)' }}/>
            <div style={{ fontSize:28, fontWeight:600, letterSpacing:'-0.02em' }}>Main</div>
            <Pill tone="neutral">{HOLDINGS.length} holdings</Pill>
          </div>
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <Button variant="ghost" icon={I.filter()} size="sm">Filter</Button>
          <Button variant="ghost" icon={I.download({s:14})} size="sm">Export</Button>
          <Button variant="primary" icon={I.plus()} size="sm">Add Holding</Button>
        </div>
      </div>

      {/* Summary tiles */}
      <Card pad={24}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:32 }}>
          <StatTile label="Total Value" value={fmt.money(TOTAL_VALUE)} sub={<Delta value={TOTAL_VALUE*0.0086} pct={0.86}/>}/>
          <StatTile label="Invested" value={fmt.money(TOTAL_INVESTED)}/>
          <StatTile label="Total P&L" value={fmt.money(totalPL)} tone={totalPL>=0?'pos':'neg'}
            sub={<span className="num pos" style={{fontSize:12, fontWeight:500}}>{fmt.pct(totalPLPct)}</span>}/>
          <StatTile label="Best performer" value="AMZN" mono={false}
            sub={<Pill tone="pos">+35.83%</Pill>}/>
        </div>
      </Card>

      {/* Holdings table */}
      <Card pad={0}>
        <div style={{ padding:'18px 24px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontWeight:600, fontSize:15 }}>Holdings</div>
          <Tabs value={sortBy} onChange={setSortBy} size="sm" tabs={[
            {id:'alloc', label:'Allocation'}, {id:'pl', label:'P&L'}, {id:'sym', label:'A–Z'}
          ]}/>
        </div>
        <div style={{ overflow:'hidden' }}>
          <div style={{
            display:'grid',
            gridTemplateColumns:'auto minmax(0, 2fr) 80px 110px 110px 120px 150px 1fr 36px',
            gap:14, padding:'12px 24px', fontSize:11, textTransform:'uppercase',
            letterSpacing:'0.05em', color:'var(--ink-3)', fontWeight:500,
            background:'var(--bg-sunken)', borderBottom:'1px solid var(--line)',
            alignItems:'center'
          }}>
            <div style={{width:36}}></div>
            <div>Symbol / Name</div>
            <div style={{textAlign:'right'}}>Qty</div>
            <div style={{textAlign:'right'}}>Avg Buy</div>
            <div style={{textAlign:'right'}}>Price</div>
            <div style={{textAlign:'right'}}>Invested</div>
            <div style={{textAlign:'right'}}>P&L</div>
            <div>Allocation</div>
            <div></div>
          </div>
          {sorted.map((h,i) => (
            <div key={h.sym} style={{
              display:'grid',
              gridTemplateColumns:'auto minmax(0, 2fr) 80px 110px 110px 120px 150px 1fr 36px',
              gap:14, padding:'14px 24px', alignItems:'center', cursor:'pointer',
              borderBottom: i<sorted.length-1 ? '1px solid var(--line)' : 'none',
              transition:'background .15s'
            }}
              onMouseEnter={e => e.currentTarget.style.background='var(--bg-sunken)'}
              onMouseLeave={e => e.currentTarget.style.background=''}
              onClick={() => onOpenStock(h.sym)}>
              <SymbolBadge sym={h.sym} size={36}/>
              <div style={{ minWidth:0 }}>
                <div style={{ fontWeight:600, fontSize:13.5 }}>{h.sym}</div>
                <div style={{ fontSize:12, color:'var(--ink-3)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{h.name}</div>
              </div>
              <div className="num" style={{ textAlign:'right', fontSize:13 }}>{h.qty}</div>
              <div className="num" style={{ textAlign:'right', fontSize:13, color:'var(--ink-2)' }}>${h.avg.toFixed(2)}</div>
              <div className="num" style={{ textAlign:'right', fontSize:13, fontWeight:500 }}>{fmt.money(h.price)}</div>
              <div className="num" style={{ textAlign:'right', fontSize:13, color:'var(--ink-2)' }}>{fmt.money(h.invested)}</div>
              <div style={{ textAlign:'right' }}>
                <div className="num" style={{ fontSize:13, fontWeight:500, color: h.pl>=0?'var(--pos)':'var(--neg)' }}>
                  {h.pl>=0?'+':''}{fmt.money(Math.abs(h.pl))}
                </div>
                <div className="num" style={{ fontSize:11, color: h.pl>=0?'var(--pos)':'var(--neg)', opacity:.8 }}>
                  ({h.pl>=0?'+':''}{h.plPct.toFixed(2)}%)
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ flex:1, height:6, borderRadius:3, background:'var(--bg-sunken)', overflow:'hidden' }}>
                  <div style={{ width:`${h.allocation}%`, height:'100%', background:'var(--accent)', borderRadius:3 }}/>
                </div>
                <div className="num" style={{ fontSize:12, color:'var(--ink-2)', minWidth:50, textAlign:'right' }}>{h.allocation.toFixed(2)}%</div>
              </div>
              <IconButton icon={I.trash()} title="Remove" style={{ color:'var(--neg)' }}/>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

window.PortfoliosScreen = PortfoliosScreen;
window.PortfolioDetailScreen = PortfolioDetailScreen;
