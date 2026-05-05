// AI Insights screen
const AIScreen = () => {
  const [filter, setFilter] = React.useState('all');
  const filtered = filter === 'all' ? INSIGHTS : INSIGHTS.filter(i => i.kind === filter);

  return (
    <div style={{ display:'grid', gap:20 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:6 }}>
            <Pill tone="accent">{I.sparkles({s:11})} BETA</Pill>
            <span style={{ fontSize:11.5, color:'var(--ink-3)' }}>Generated for you 12 min ago · {I.refresh()} <a style={{cursor:'pointer'}}>Refresh</a></span>
          </div>
          <div style={{ fontSize:28, fontWeight:600, letterSpacing:'-0.02em' }}>Insights</div>
          <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:4 }}>4 actionable ideas tailored to your portfolio</div>
        </div>
        <Tabs value={filter} onChange={setFilter} size="md" tabs={[
          {id:'all', label:'All'},
          {id:'rebalance', label:'Rebalance'},
          {id:'earnings', label:'Earnings'},
          {id:'tax', label:'Tax'},
          {id:'dividend', label:'Dividend'},
        ]}/>
      </div>

      {/* Hero AI summary */}
      <Card pad={28} style={{
        background:'linear-gradient(135deg, var(--accent-soft) 0%, oklch(0.97 0.02 240) 100%)',
        border:'1px solid oklch(0.90 0.04 60)'
      }}>
        <div style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:24, alignItems:'center' }}>
          <div style={{
            width:48, height:48, borderRadius:14, background:'var(--ink)', color:'var(--accent)',
            display:'grid', placeItems:'center', flexShrink:0
          }}>
            {I.sparkles({s:24})}
          </div>
          <div>
            <div style={{ fontSize:11.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.05em', fontWeight:500, marginBottom:4 }}>Today's brief</div>
            <div style={{ fontSize:18, fontWeight:600, letterSpacing:'-0.01em', lineHeight:1.4 }}>
              Your portfolio is up <span className="pos">+0.86% today</span>, driven by NVDA and AMZN. Consider trimming tech exposure — it's now <span style={{color:'var(--accent-deep)'}}>70% concentrated</span>.
            </div>
          </div>
          <Button variant="primary">Read full brief</Button>
        </div>
      </Card>

      {/* Insights grid */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        {filtered.map(ins => {
          const tone = ins.priority==='high' ? 'neg' : ins.priority==='med' ? 'accent' : 'cool';
          const kindLabels = { rebalance:'Rebalance', earnings:'Earnings', tax:'Tax', dividend:'Dividend' };
          return (
            <Card key={ins.id} pad={20} style={{ display:'flex', flexDirection:'column' }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
                <Pill tone={tone} size="md">{ins.priority.toUpperCase()}</Pill>
                <span style={{ fontSize:12, color:'var(--ink-3)' }}>{kindLabels[ins.kind]}</span>
                <div style={{ flex:1 }}/>
                <IconButton icon={I.bookmark()} title="Save"/>
              </div>
              <div style={{ fontSize:16, fontWeight:600, letterSpacing:'-0.01em', marginBottom:8 }}>{ins.title}</div>
              <div style={{ fontSize:13, color:'var(--ink-2)', lineHeight:1.55, flex:1 }}>{ins.body}</div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:18, paddingTop:14, borderTop:'1px solid var(--line)' }}>
                <span style={{ fontSize:11.5, color:'var(--ink-3)' }}>Confidence: {ins.priority==='high'?'92%':ins.priority==='med'?'78%':'64%'}</span>
                <Button variant="ghost" size="sm">{ins.action} {I.arrow_right({s:13})}</Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Alerts panel */}
      <Card>
        <SectionHeader title="Active alerts"
          action={<Button variant="ghost" size="sm" icon={I.plus({s:13})}>New alert</Button>}/>
        <div style={{ display:'grid', gap:0 }}>
          {[
            { sym:'NVDA', cond:'Price crosses above $210', status:'armed', set:'May 1' },
            { sym:'AAPL', cond:'RSI(14) drops below 30',   status:'armed', set:'Apr 28' },
            { sym:'MSFT', cond:'Reports earnings',          status:'armed', set:'Apr 22' },
            { sym:'SCHD', cond:'Ex-dividend date',          status:'triggered', set:'May 3' },
          ].map((a,i) => (
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'auto 80px 1fr auto auto',
              gap:14, padding:'14px 4px', alignItems:'center',
              borderBottom: i<3 ? '1px solid var(--line)':'none'
            }}>
              <SymbolBadge sym={a.sym} size={32}/>
              <div style={{ fontWeight:600, fontSize:13.5 }}>{a.sym}</div>
              <div style={{ fontSize:13, color:'var(--ink-2)' }}>{a.cond}</div>
              <Pill tone={a.status==='armed'?'cool':'pos'} size="sm">
                {a.status==='armed' ? <><span style={{width:5, height:5, borderRadius:'50%', background:'currentColor', display:'inline-block'}}/> Armed</> : <>{I.check({s:11})} Triggered</>}
              </Pill>
              <span style={{ fontSize:11.5, color:'var(--ink-3)', fontFamily:'var(--font-mono)' }}>{a.set}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

window.AIScreen = AIScreen;
