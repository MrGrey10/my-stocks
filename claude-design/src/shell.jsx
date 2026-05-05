// App shell: Side nav + Top bar
const Shell = ({ current, onNav, onSignOut, children, tweaks, setTweak }) => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const onKey = e => {
      if ((e.metaKey||e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(s => !s); }
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navItems = [
    { id:'dashboard', label:'Dashboard', icon:I.home },
    { id:'portfolios', label:'Portfolios', icon:I.briefcase },
    { id:'discover', label:'Discover', icon:I.compass },
    { id:'ai', label:'Insights', icon:I.sparkles, badge:'4' },
    { id:'analytics', label:'Analytics', icon:I.pie },
  ];
  const bottomNav = [
    { id:'settings', label:'Settings', icon:I.cog },
  ];

  // Map screen routes to nav state
  const navOf = c => c==='portfolio' ? 'portfolios' : c==='stock' ? 'portfolios' : c;

  // Search results filter
  const allSyms = [
    ...HOLDINGS.map(h => ({ sym:h.sym, name:h.name, kind:'holding' })),
    ...TRENDING.map(t => ({ sym:t.sym, name:t.name, kind:'trending' })),
    ...WATCHLIST.map(w => ({ sym:w.sym, name:w.name, kind:'watchlist' })),
  ].filter((v,i,a) => a.findIndex(x=>x.sym===v.sym)===i);
  const results = query
    ? allSyms.filter(s => s.sym.toLowerCase().includes(query.toLowerCase()) || s.name.toLowerCase().includes(query.toLowerCase()))
    : allSyms.slice(0,6);

  const NAV_W = 232;

  return (
    <div style={{ minHeight:'100vh', background:'var(--bg)' }}>
      {/* Side nav */}
      <aside style={{
        position:'fixed', top:0, bottom:0, left:0, width:NAV_W,
        background:'var(--bg-nav)',
        borderRight:'1px solid var(--line)',
        padding:'16px 12px', display:'flex', flexDirection:'column'
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, padding:'4px 8px 16px' }}>
          <StarMark size={32}/>
          <span style={{ fontSize:16, fontWeight:600, letterSpacing:'-0.01em' }}>MyStocks</span>
        </div>

        <div style={{ display:'grid', gap:2, marginTop:8 }}>
          <div style={{ fontSize:10.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:600, padding:'8px 10px 4px' }}>Workspace</div>
          {navItems.map(n => {
            const active = navOf(current) === n.id;
            return (
              <button key={n.id} onClick={() => onNav(n.id)} style={{
                display:'flex', alignItems:'center', gap:10,
                padding:'9px 10px', borderRadius:8, fontSize:13.5, fontWeight:500,
                color: active ? 'var(--ink)' : 'var(--ink-2)',
                background: active ? 'var(--bg-elev)' : 'transparent',
                boxShadow: active ? 'var(--shadow-sm), 0 0 0 1px var(--line)' : 'none',
                textAlign:'left', position:'relative', transition:'all .15s'
              }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background='var(--bg-sunken)'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background=''; }}>
                <span style={{ color: active ? 'var(--accent-deep)' : 'var(--ink-3)' }}>{n.icon()}</span>
                <span style={{ flex:1 }}>{n.label}</span>
                {n.badge && <Pill tone="accent" size="sm">{n.badge}</Pill>}
              </button>
            );
          })}
        </div>

        {/* Portfolios mini list */}
        <div style={{ marginTop:20 }}>
          <div style={{ fontSize:10.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:600, padding:'4px 10px 6px' }}>Your Portfolios</div>
          <div style={{ display:'grid', gap:2 }}>
            {PORTFOLIOS.map(p => (
              <button key={p.id} onClick={() => p.id==='main' && onNav('portfolio')} style={{
                display:'flex', alignItems:'center', gap:10, padding:'7px 10px',
                borderRadius:7, fontSize:13, color:'var(--ink-2)', textAlign:'left',
                transition:'background .15s'
              }}
                onMouseEnter={e => e.currentTarget.style.background='var(--bg-sunken)'}
                onMouseLeave={e => e.currentTarget.style.background=''}>
                <div style={{ width:8, height:8, borderRadius:2, background:p.color, flexShrink:0 }}/>
                <span style={{ flex:1 }}>{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ flex:1 }}/>

        {/* Bottom nav */}
        <div style={{ display:'grid', gap:2, marginBottom:8 }}>
          {bottomNav.map(n => {
            const active = current === n.id;
            return (
              <button key={n.id} onClick={() => onNav(n.id)} style={{
                display:'flex', alignItems:'center', gap:10,
                padding:'9px 10px', borderRadius:8, fontSize:13.5, fontWeight:500,
                color: active ? 'var(--ink)' : 'var(--ink-2)',
                background: active ? 'var(--bg-elev)' : 'transparent',
                boxShadow: active ? 'var(--shadow-sm), 0 0 0 1px var(--line)' : 'none',
                textAlign:'left', transition:'all .15s'
              }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background='var(--bg-sunken)'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background=''; }}>
                <span style={{ color: active ? 'var(--accent-deep)' : 'var(--ink-3)' }}>{n.icon()}</span>
                <span>{n.label}</span>
              </button>
            );
          })}
        </div>

        {/* User card */}
        <button onClick={onSignOut} style={{
          display:'flex', alignItems:'center', gap:10, padding:8, borderRadius:10,
          background:'var(--bg-elev)', border:'1px solid var(--line)',
          textAlign:'left', transition:'background .15s'
        }}
          onMouseEnter={e => e.currentTarget.style.background='var(--bg-sunken)'}
          onMouseLeave={e => e.currentTarget.style.background='var(--bg-elev)'}>
          <div style={{
            width:32, height:32, borderRadius:'50%',
            background:'linear-gradient(135deg, oklch(0.55 0.13 240), oklch(0.55 0.14 290))',
            color:'#fff', display:'grid', placeItems:'center', fontWeight:600, fontSize:12
          }}>AB</div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:12.5, fontWeight:600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>Alex Bondarenko</div>
            <div style={{ fontSize:11, color:'var(--ink-3)' }}>Pro plan</div>
          </div>
          <span style={{ color:'var(--ink-3)' }}>{I.logout()}</span>
        </button>
      </aside>

      {/* Top bar */}
      <header style={{
        position:'sticky', top:0, zIndex:10,
        marginLeft:NAV_W,
        background:'oklch(0.985 0.004 70 / 0.85)', backdropFilter:'blur(8px)',
        borderBottom:'1px solid var(--line)',
        padding:'12px 32px',
        display:'flex', alignItems:'center', gap:16
      }}>
        <button onClick={() => setSearchOpen(true)} style={{
          flex:1, maxWidth:480,
          display:'flex', alignItems:'center', gap:10,
          height:38, padding:'0 12px',
          background:'var(--bg-elev)', border:'1px solid var(--line)',
          borderRadius:10, color:'var(--ink-3)', fontSize:13, textAlign:'left'
        }}>
          <span>{I.search()}</span>
          <span style={{ flex:1 }}>Search stocks, ETFs, news…</span>
          <span style={{
            display:'flex', gap:2,
            fontSize:10.5, fontFamily:'var(--font-mono)', color:'var(--ink-3)'
          }}>
            <kbd style={{ padding:'2px 5px', background:'var(--bg-sunken)', border:'1px solid var(--line)', borderRadius:4 }}>⌘</kbd>
            <kbd style={{ padding:'2px 5px', background:'var(--bg-sunken)', border:'1px solid var(--line)', borderRadius:4 }}>K</kbd>
          </span>
        </button>

        <div style={{ flex:1 }}/>

        <div style={{ display:'flex', alignItems:'center', gap:12, fontSize:12, color:'var(--ink-3)' }}>
          <span style={{ display:'flex', alignItems:'center', gap:6 }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--pos)' }}/>
            Markets open
          </span>
          <span className="num">14:23 ET</span>
        </div>

        <IconButton icon={I.bell()} title="Notifications" style={{ position:'relative' }}/>
      </header>

      {/* Page */}
      <main style={{
        marginLeft:NAV_W, padding:'28px 32px 64px', maxWidth: 1400
      }}>
        <div className="anim-in" key={current}>
          {children}
        </div>
      </main>

      {/* Search modal */}
      {searchOpen && (
        <div style={{
          position:'fixed', inset:0, zIndex:100,
          background:'oklch(0.18 0.012 60 / 0.4)', backdropFilter:'blur(2px)',
          display:'grid', placeItems:'flex-start center', paddingTop:96
        }} onClick={() => setSearchOpen(false)}>
          <div onClick={e => e.stopPropagation()} style={{
            width:'min(560px, 92vw)', background:'var(--bg-elev)',
            border:'1px solid var(--line)', borderRadius:14,
            boxShadow:'var(--shadow-lg)', overflow:'hidden'
          }} className="anim-in">
            <div style={{ display:'flex', alignItems:'center', gap:10, padding:'14px 16px', borderBottom:'1px solid var(--line)' }}>
              <span style={{ color:'var(--ink-3)' }}>{I.search({s:18})}</span>
              <input autoFocus value={query} onChange={e => setQuery(e.target.value)}
                placeholder="Search symbols, news, ideas…"
                style={{ flex:1, border:'none', outline:'none', fontSize:15, background:'transparent' }}/>
              <kbd style={{ padding:'2px 6px', fontSize:10.5, background:'var(--bg-sunken)', border:'1px solid var(--line)', borderRadius:4, fontFamily:'var(--font-mono)', color:'var(--ink-3)' }}>ESC</kbd>
            </div>
            <div style={{ maxHeight:360, overflowY:'auto', padding:8 }}>
              {results.length === 0 && <div style={{ padding:24, textAlign:'center', color:'var(--ink-3)', fontSize:13 }}>No results for "{query}"</div>}
              {results.map(r => (
                <button key={r.sym} onClick={() => { setSearchOpen(false); onNav('stock'); }} style={{
                  display:'grid', gridTemplateColumns:'auto 1fr auto', gap:12, alignItems:'center',
                  width:'100%', padding:'10px', borderRadius:8, textAlign:'left',
                  transition:'background .15s'
                }}
                  onMouseEnter={e => e.currentTarget.style.background='var(--bg-sunken)'}
                  onMouseLeave={e => e.currentTarget.style.background=''}>
                  <SymbolBadge sym={r.sym} size={32}/>
                  <div>
                    <div style={{ fontWeight:600, fontSize:13.5 }}>{r.sym}</div>
                    <div style={{ fontSize:12, color:'var(--ink-3)' }}>{r.name}</div>
                  </div>
                  <Pill tone="neutral" size="sm">{r.kind}</Pill>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

window.Shell = Shell;
