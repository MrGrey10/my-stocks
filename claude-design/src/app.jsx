// App entrypoint
const TWEAK_DEFAULTS = JSON.parse(document.getElementById('tweaks-defaults').textContent.replace(/\/\*EDITMODE-(BEGIN|END)\*\//g,''));

function App() {
  const [signedIn, setSignedIn] = React.useState(true);
  const [route, setRoute] = React.useState('dashboard'); // dashboard|portfolios|portfolio|stock|discover|ai|analytics|settings
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);

  // Edit-mode protocol
  React.useEffect(() => {
    const onMsg = e => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setEditOpen(true);
      if (d.type === '__deactivate_edit_mode') setEditOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const [editOpen, setEditOpen] = React.useState(false);

  const setTweak = (k, v) => {
    setTweaks(prev => {
      const next = { ...prev, [k]: v };
      window.parent.postMessage({ type:'__edit_mode_set_keys', edits:{ [k]: v }}, '*');
      return next;
    });
  };

  const onNav = (where) => {
    setRoute(where);
    window.scrollTo({ top:0, behavior:'instant' });
  };

  if (!signedIn) {
    return <SignInScreen onSignIn={() => setSignedIn(true)}/>;
  }

  return (
    <Shell current={route} onNav={onNav} onSignOut={() => setSignedIn(false)} tweaks={tweaks} setTweak={setTweak}>
      <div data-screen-label={route}>
        {route === 'dashboard' && <DashboardScreen onNav={onNav}/>}
        {route === 'portfolios' && <PortfoliosScreen onOpenPortfolio={() => onNav('portfolio')}/>}
        {route === 'portfolio'  && <PortfolioDetailScreen onBack={() => onNav('portfolios')} onOpenStock={() => onNav('stock')}/>}
        {route === 'stock'      && <StockScreen onBack={() => onNav('portfolio')} tweaks={tweaks}/>}
        {route === 'discover'   && <DiscoverScreen onOpenStock={() => onNav('stock')}/>}
        {route === 'ai'         && <AIScreen/>}
        {route === 'analytics'  && <AnalyticsScreen/>}
        {route === 'settings'   && <SettingsScreen/>}
      </div>

      {editOpen && (
        <div style={{
          position:'fixed', right:24, bottom:24, width:300, zIndex:200,
          background:'var(--bg-elev)', border:'1px solid var(--line)',
          borderRadius:14, boxShadow:'var(--shadow-lg)', padding:16
        }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <div style={{ fontWeight:600, fontSize:14 }}>Tweaks</div>
            <IconButton icon={<span style={{fontSize:14}}>×</span>} onClick={() => { setEditOpen(false); window.parent.postMessage({type:'__edit_mode_dismissed'},'*'); }}/>
          </div>
          <div style={{ display:'grid', gap:12 }}>
            {[
              ['candleVolume','Show volume in candle chart'],
              ['rsi','Show RSI indicator'],
              ['showAI','Show AI insight on dashboard'],
            ].map(([k,label]) => (
              <div key={k} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:13 }}>
                <span>{label}</span>
                <Toggle value={!!tweaks[k]} onChange={v => setTweak(k, v)}/>
              </div>
            ))}
            <div style={{ paddingTop:8, borderTop:'1px solid var(--line)', fontSize:11.5, color:'var(--ink-3)' }}>
              Quick navigate:
              <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginTop:6 }}>
                {['dashboard','portfolios','portfolio','stock','discover','ai','analytics','settings'].map(r => (
                  <button key={r} onClick={() => onNav(r)} style={{
                    fontSize:11, padding:'3px 7px', borderRadius:6,
                    background: route===r?'var(--ink)':'var(--bg-sunken)',
                    color: route===r?'#fff':'var(--ink-2)',
                    border:'1px solid var(--line)'
                  }}>{r}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
