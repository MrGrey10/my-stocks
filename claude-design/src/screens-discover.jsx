// Discover / Market overview
const DiscoverScreen = ({ onOpenStock }) => {
  const maxSec = Math.max(...SECTORS.map(s => Math.abs(s.ch)));
  return (
    <div style={{ display:'grid', gap:20 }}>
      <div>
        <div style={{ fontSize:28, fontWeight:600, letterSpacing:'-0.02em' }}>Discover</div>
        <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:4 }}>Markets at a glance · Updated 2 min ago</div>
      </div>

      {/* Index strip */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16 }}>
        {MARKET_INDEXES.map(m => (
          <Card key={m.sym} pad={16}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
              <div>
                <div style={{ fontSize:11.5, color:'var(--ink-3)', fontFamily:'var(--font-mono)' }}>{m.sym}</div>
                <div style={{ fontWeight:600, fontSize:14 }}>{m.name}</div>
              </div>
              <Pill tone={m.ch>=0?'pos':'neg'} size="sm">{m.ch>=0?'+':''}{m.ch.toFixed(2)}%</Pill>
            </div>
            <div className="num" style={{ fontSize:20, fontWeight:600, marginTop:10 }}>{m.price.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
            <div style={{ height:36, marginTop:8 }}>
              <Sparkline data={m.spark} w={200} h={36} color={m.ch>=0?'var(--pos)':'var(--neg)'} stroke={1.6}/>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:20 }}>
        {/* Trending */}
        <Card>
          <SectionHeader title="Trending today" subtitle="Most active in the last hour"
            action={<Tabs value="all" onChange={()=>{}} size="sm" tabs={[{id:'all',label:'All'},{id:'gain',label:'Gainers'},{id:'lose',label:'Losers'}]}/>}/>
          <div style={{ display:'grid', gap:0 }}>
            <div style={{
              display:'grid', gridTemplateColumns:'auto 1fr 100px 90px 90px 80px',
              gap:14, padding:'10px 4px', fontSize:11, textTransform:'uppercase',
              letterSpacing:'0.05em', color:'var(--ink-3)', fontWeight:500,
              borderBottom:'1px solid var(--line)'
            }}>
              <div style={{width:36}}></div><div>Symbol</div><div style={{textAlign:'right'}}>Price</div><div style={{textAlign:'right'}}>Change</div><div style={{textAlign:'right'}}>Volume</div><div></div>
            </div>
            {TRENDING.map(t => (
              <div key={t.sym} style={{
                display:'grid', gridTemplateColumns:'auto 1fr 100px 90px 90px 80px',
                gap:14, padding:'12px 4px', alignItems:'center', cursor:'pointer',
                transition:'background .15s', borderRadius:8
              }}
                onMouseEnter={e => e.currentTarget.style.background='var(--bg-sunken)'}
                onMouseLeave={e => e.currentTarget.style.background=''}
                onClick={() => onOpenStock(t.sym)}>
                <SymbolBadge sym={t.sym} size={32}/>
                <div>
                  <div style={{ fontWeight:600, fontSize:13.5 }}>{t.sym}</div>
                  <div style={{ fontSize:11.5, color:'var(--ink-3)' }}>{t.name}</div>
                </div>
                <div className="num" style={{ textAlign:'right', fontSize:13 }}>{fmt.money(t.price)}</div>
                <div style={{ textAlign:'right' }}>
                  <Pill tone={t.ch>=0?'pos':'neg'} size="sm">{t.ch>=0?'+':''}{t.ch.toFixed(2)}%</Pill>
                </div>
                <div className="num" style={{ textAlign:'right', fontSize:12, color:'var(--ink-3)' }}>{t.vol}</div>
                <div style={{ display:'flex', justifyContent:'flex-end' }}>
                  <IconButton icon={I.plus({s:14})} title="Add to watchlist"/>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Sector heatmap */}
        <Card>
          <SectionHeader title="Sectors today"/>
          <div>
            {SECTORS.map(s => <SectorBar key={s.name} name={s.name} ch={s.ch} max={maxSec}/>)}
          </div>
        </Card>
      </div>

      {/* Themes / collections */}
      <Card>
        <SectionHeader title="Themes" subtitle="Curated collections"/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }}>
          {[
            { name:'AI Leaders',        count:12, ch: 2.41, color:'oklch(0.55 0.14 290)' },
            { name:'Dividend Aristocrats', count:64, ch: 0.36, color:'oklch(0.62 0.13 165)' },
            { name:'Clean Energy',      count:28, ch:-1.12, color:'oklch(0.62 0.14 145)' },
            { name:'Magnificent 7',     count: 7, ch: 1.85, color:'var(--accent)' },
          ].map(t => (
            <div key={t.name} style={{
              padding:16, borderRadius:12, border:'1px solid var(--line)',
              cursor:'pointer', transition:'all .15s', position:'relative', overflow:'hidden'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--ink-2)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--line)'; }}>
              <div style={{ width:32, height:32, borderRadius:8, background:t.color, opacity:0.18, marginBottom:12 }}/>
              <div style={{ fontWeight:600, fontSize:14 }}>{t.name}</div>
              <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:2 }}>{t.count} symbols</div>
              <div style={{ marginTop:10 }}>
                <Pill tone={t.ch>=0?'pos':'neg'} size="sm">{t.ch>=0?'+':''}{t.ch.toFixed(2)}%</Pill>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

window.DiscoverScreen = DiscoverScreen;
