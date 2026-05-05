// Settings screen
const SettingsScreen = () => {
  const [section, setSection] = React.useState('profile');
  const sections = [
    { id:'profile', label:'Profile' },
    { id:'preferences', label:'Preferences' },
    { id:'notifications', label:'Notifications' },
    { id:'security', label:'Security' },
    { id:'connections', label:'Connections' },
    { id:'billing', label:'Billing' },
  ];

  return (
    <div style={{ display:'grid', gap:20 }}>
      <div>
        <div style={{ fontSize:28, fontWeight:600, letterSpacing:'-0.02em' }}>Settings</div>
        <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:4 }}>Manage your account, preferences, and connections.</div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'200px 1fr', gap:24 }}>
        {/* Side rail */}
        <nav style={{ display:'grid', gap:2, alignContent:'start' }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              padding:'9px 12px', textAlign:'left', borderRadius:8, fontSize:13.5,
              fontWeight: s.id===section ? 600 : 500,
              color: s.id===section ? 'var(--ink)' : 'var(--ink-2)',
              background: s.id===section ? 'var(--bg-sunken)' : 'transparent',
              transition:'all .15s'
            }}>{s.label}</button>
          ))}
        </nav>

        {/* Content */}
        <div style={{ display:'grid', gap:16 }}>
          {section === 'profile' && (
            <>
              <Card pad={24}>
                <SectionHeader title="Profile" subtitle="Your public account details"/>
                <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
                  <div style={{
                    width:64, height:64, borderRadius:'50%',
                    background:'linear-gradient(135deg, oklch(0.55 0.13 240), oklch(0.55 0.14 290))',
                    color:'#fff', display:'grid', placeItems:'center',
                    fontWeight:600, fontSize:24
                  }}>AB</div>
                  <div>
                    <div style={{ fontWeight:600, fontSize:16 }}>Alex Bondarenko</div>
                    <div style={{ fontSize:13, color:'var(--ink-3)' }}>Member since Jan 2024 · Pro plan</div>
                  </div>
                  <div style={{ flex:1 }}/>
                  <Button variant="ghost" size="sm">Change avatar</Button>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                  <Field label="Full name"><Input value="Alex Bondarenko" onChange={()=>{}}/></Field>
                  <Field label="Display name"><Input value="alex" onChange={()=>{}}/></Field>
                  <Field label="Email"><Input value="alex@example.com" onChange={()=>{}}/></Field>
                  <Field label="Time zone"><Input value="Europe/Kyiv (UTC+2)" onChange={()=>{}}/></Field>
                </div>
                <div style={{ marginTop:20, display:'flex', justifyContent:'flex-end', gap:8 }}>
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="primary">Save changes</Button>
                </div>
              </Card>
            </>
          )}

          {section === 'preferences' && (
            <Card pad={24}>
              <SectionHeader title="Preferences"/>
              {[
                { k:'Default currency', v:'USD' },
                { k:'Number format', v:'1,234.56' },
                { k:'Dark mode (auto)', toggle:false },
                { k:'Show extended hours data', toggle:true },
                { k:'Group small holdings in charts', toggle:true },
                { k:'Hide zero balances', toggle:false },
              ].map((r,i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'14px 0', borderTop: i===0?'none':'1px solid var(--line)'
                }}>
                  <div>
                    <div style={{ fontWeight:500, fontSize:14 }}>{r.k}</div>
                  </div>
                  {'toggle' in r
                    ? <Toggle value={r.toggle} onChange={()=>{}}/>
                    : <span className="num" style={{ fontSize:13, color:'var(--ink-2)' }}>{r.v}</span>}
                </div>
              ))}
            </Card>
          )}

          {section === 'notifications' && (
            <Card pad={24}>
              <SectionHeader title="Notifications"/>
              {[
                { k:'Daily portfolio brief',     desc:'AI summary delivered at 8am ET',   v:true },
                { k:'Price alerts',              desc:'Triggered alerts via push & email', v:true },
                { k:'Earnings reminders',        desc:'2 days before reporting',           v:true },
                { k:'Dividend payments',         desc:'On ex-div and pay dates',           v:false },
                { k:'Weekly performance digest', desc:'Sundays at 6pm',                    v:true },
                { k:'Marketing emails',          desc:'Product updates and tips',          v:false },
              ].map((r,i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'14px 0', borderTop: i===0?'none':'1px solid var(--line)'
                }}>
                  <div>
                    <div style={{ fontWeight:500, fontSize:14 }}>{r.k}</div>
                    <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:2 }}>{r.desc}</div>
                  </div>
                  <Toggle value={r.v} onChange={()=>{}}/>
                </div>
              ))}
            </Card>
          )}

          {section === 'security' && (
            <>
              <Card pad={24}>
                <SectionHeader title="Security"/>
                <div style={{ display:'grid', gap:0 }}>
                  {[
                    { k:'Password', v:'Last changed 3 months ago', action:'Change' },
                    { k:'Two-factor authentication', v:'Authenticator app enabled', action:'Manage', tone:'pos' },
                    { k:'Active sessions', v:'2 devices · MacBook, iPhone', action:'View' },
                    { k:'Login history', v:'Last login from Kyiv, UA', action:'See log' },
                  ].map((r,i) => (
                    <div key={i} style={{
                      display:'flex', alignItems:'center', justifyContent:'space-between',
                      padding:'16px 0', borderTop: i===0?'none':'1px solid var(--line)'
                    }}>
                      <div>
                        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                          <span style={{ fontWeight:500, fontSize:14 }}>{r.k}</span>
                          {r.tone==='pos' && <Pill tone="pos" size="sm">{I.check({s:11})} Active</Pill>}
                        </div>
                        <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:2 }}>{r.v}</div>
                      </div>
                      <Button variant="ghost" size="sm">{r.action}</Button>
                    </div>
                  ))}
                </div>
              </Card>
              <Card pad={20} style={{ borderColor:'oklch(0.88 0.06 25)' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div>
                    <div style={{ fontWeight:600, fontSize:14, color:'var(--neg)' }}>Danger zone</div>
                    <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:2 }}>Permanently delete your account and all data.</div>
                  </div>
                  <Button variant="danger" size="sm">Delete account</Button>
                </div>
              </Card>
            </>
          )}

          {section === 'connections' && (
            <Card pad={24}>
              <SectionHeader title="Connected brokers" subtitle="Sync holdings automatically"/>
              {[
                { name:'Charles Schwab',    status:'connected', last:'Updated 2 min ago', acct:'****4827' },
                { name:'Fidelity',          status:'connected', last:'Updated 5 min ago', acct:'****1192' },
                { name:'Interactive Brokers', status:'disconnected' },
                { name:'Robinhood',         status:'disconnected' },
              ].map((b,i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', gap:16, padding:'14px 0',
                  borderTop: i===0?'none':'1px solid var(--line)'
                }}>
                  <div style={{ width:40, height:40, borderRadius:10, background:'var(--bg-sunken)', display:'grid', placeItems:'center', fontWeight:600, fontSize:14 }}>
                    {b.name[0]}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:500, fontSize:14 }}>{b.name}</div>
                    <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:2 }}>
                      {b.status==='connected' ? `${b.acct} · ${b.last}` : 'Not connected'}
                    </div>
                  </div>
                  {b.status==='connected'
                    ? <><Pill tone="pos" size="sm">{I.check({s:11})} Synced</Pill><Button variant="ghost" size="sm">Disconnect</Button></>
                    : <Button variant="primary" size="sm">Connect</Button>}
                </div>
              ))}
            </Card>
          )}

          {section === 'billing' && (
            <Card pad={24}>
              <SectionHeader title="Plan & billing"/>
              <div style={{
                padding:20, borderRadius:12,
                background:'var(--ink)', color:'oklch(0.95 0 0)',
                marginBottom:20
              }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                  <div>
                    <div style={{ fontSize:11.5, opacity:.6, textTransform:'uppercase', letterSpacing:'0.05em' }}>Current plan</div>
                    <div style={{ fontSize:24, fontWeight:600, marginTop:4 }}>MyStocks Pro</div>
                    <div style={{ fontSize:13, opacity:.7, marginTop:4 }}>Renews May 28, 2026 · $12/mo</div>
                  </div>
                  <Pill tone="accent">Active</Pill>
                </div>
                <div style={{ display:'flex', gap:8, marginTop:18 }}>
                  <Button variant="soft" size="sm">Manage subscription</Button>
                  <Button variant="soft" size="sm">Cancel plan</Button>
                </div>
              </div>
              <div style={{ fontSize:13, color:'var(--ink-3)' }}>Next invoice: $12.00 on May 28, 2026 — Visa ending 4242</div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

window.SettingsScreen = SettingsScreen;
