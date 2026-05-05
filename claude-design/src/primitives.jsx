// Reusable UI primitives

const Card = ({ children, style, pad = 20, className }) => (
  <div className={className} style={{
    background:'var(--bg-elev)', border:'1px solid var(--line)',
    borderRadius:'var(--r-lg)', padding: pad, boxShadow:'var(--shadow-sm)', ...style
  }}>{children}</div>
);

const Button = ({ children, variant='primary', size='md', icon, onClick, style, type }) => {
  const sizes = {
    sm: { padding:'6px 10px', fontSize:12, h:30, gap:6 },
    md: { padding:'8px 14px', fontSize:13, h:36, gap:8 },
    lg: { padding:'12px 18px', fontSize:14, h:44, gap:10 },
  };
  const s = sizes[size];
  const variants = {
    primary: { background:'var(--ink)', color:'oklch(0.98 0.005 70)', border:'1px solid var(--ink)' },
    ghost:   { background:'transparent', color:'var(--ink)', border:'1px solid var(--line-2)' },
    accent:  { background:'var(--accent)', color:'#fff', border:'1px solid var(--accent-deep)' },
    soft:    { background:'var(--bg-sunken)', color:'var(--ink)', border:'1px solid var(--line)' },
    danger:  { background:'var(--neg-soft)', color:'var(--neg)', border:'1px solid oklch(0.88 0.06 25)' },
  };
  return (
    <button type={type} onClick={onClick} style={{
      ...variants[variant], padding:s.padding, fontSize:s.fontSize, height:s.h,
      borderRadius: 10, fontWeight:500,
      display:'inline-flex', alignItems:'center', gap:s.gap, whiteSpace:'nowrap',
      transition:'transform .12s ease, opacity .15s ease, filter .15s ease',
      ...style
    }}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={e => e.currentTarget.style.transform = ''}
      onMouseLeave={e => e.currentTarget.style.transform = ''}>
      {icon}{children}
    </button>
  );
};

const IconButton = ({ icon, onClick, title, style }) => (
  <button onClick={onClick} title={title} style={{
    width:32, height:32, borderRadius:8, display:'grid', placeItems:'center',
    border:'1px solid transparent', color:'var(--ink-2)',
    transition:'background .15s, color .15s, border-color .15s', ...style
  }}
  onMouseEnter={e => { e.currentTarget.style.background='var(--bg-sunken)'; e.currentTarget.style.color='var(--ink)'; }}
  onMouseLeave={e => { e.currentTarget.style.background=''; e.currentTarget.style.color='var(--ink-2)'; }}
  >{icon}</button>
);

const Pill = ({ children, tone='neutral', size='md', style }) => {
  const tones = {
    neutral: { bg:'var(--bg-sunken)', fg:'var(--ink-2)', bd:'var(--line)' },
    pos:     { bg:'var(--pos-soft)', fg:'var(--pos)', bd:'transparent' },
    neg:     { bg:'var(--neg-soft)', fg:'var(--neg)', bd:'transparent' },
    accent:  { bg:'var(--accent-soft)', fg:'var(--accent-deep)', bd:'transparent' },
    cool:    { bg:'var(--cool-soft)', fg:'var(--cool)', bd:'transparent' },
  };
  const t = tones[tone];
  const sm = size==='sm';
  return <span style={{
    display:'inline-flex', alignItems:'center', gap:4,
    fontFamily:'var(--font-mono)', fontVariantNumeric:'tabular-nums',
    fontSize: sm?10.5:11.5, fontWeight:500, padding: sm?'2px 6px':'3px 8px',
    borderRadius:6, background:t.bg, color:t.fg, border:`1px solid ${t.bd}`, ...style
  }}>{children}</span>;
};

const Delta = ({ value, pct, size='md' }) => {
  const pos = value >= 0;
  const sign = pos ? '+' : '';
  return <Pill tone={pos?'pos':'neg'} size={size}>
    {pos
      ? <svg width="9" height="9" viewBox="0 0 10 10"><path d="M5 1l4 5H1z" fill="currentColor"/></svg>
      : <svg width="9" height="9" viewBox="0 0 10 10"><path d="M5 9L1 4h8z" fill="currentColor"/></svg>}
    {value!=null && <span>{sign}{Math.abs(value).toFixed(2)}</span>}
    {pct!=null && <span style={{opacity:.85}}>({sign}{Math.abs(pct).toFixed(2)}%)</span>}
  </Pill>;
};

const Tabs = ({ value, onChange, tabs, size='md' }) => {
  return (
    <div style={{
      display:'inline-flex', gap:2, padding:3, background:'var(--bg-sunken)',
      borderRadius:10, border:'1px solid var(--line)'
    }}>
      {tabs.map(t => {
        const active = t.id === value;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            padding: size==='sm'?'4px 10px':'6px 12px',
            fontSize: size==='sm'?12:13, fontWeight:500,
            borderRadius:7,
            background: active ? 'var(--bg-elev)' : 'transparent',
            color: active ? 'var(--ink)' : 'var(--ink-3)',
            boxShadow: active ? 'var(--shadow-sm), 0 0 0 1px var(--line)' : 'none',
            transition:'all .15s ease',
          }}>{t.label}</button>
        );
      })}
    </div>
  );
};

const SymbolBadge = ({ sym, size = 36, color }) => {
  // Pick a color from sym hash if not given
  const palette = [
    ['oklch(0.95 0.04 65)', 'oklch(0.55 0.16 50)'],   // orange
    ['oklch(0.95 0.04 240)','oklch(0.50 0.13 240)'],  // blue
    ['oklch(0.94 0.05 150)','oklch(0.45 0.13 150)'],  // green
    ['oklch(0.95 0.04 290)','oklch(0.48 0.14 290)'],  // purple
    ['oklch(0.95 0.04 25)', 'oklch(0.55 0.15 25)'],   // red
    ['oklch(0.95 0.04 200)','oklch(0.48 0.10 200)'],  // teal
  ];
  let h = 0; for (let i=0;i<sym.length;i++) h = (h*31 + sym.charCodeAt(i)) >>> 0;
  const [bg, fg] = color || palette[h % palette.length];
  return (
    <div style={{
      width:size, height:size, borderRadius: size*0.28,
      background: bg, color: fg,
      display:'grid', placeItems:'center', flexShrink:0,
      fontFamily:'var(--font-mono)', fontWeight:600, fontSize: size*0.32,
      letterSpacing:'-0.02em',
    }}>{sym.slice(0,3)}</div>
  );
};

const StatTile = ({ label, value, sub, tone, mono = true }) => (
  <div>
    <div style={{ fontSize:11.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:'0.05em', fontWeight:500 }}>{label}</div>
    <div style={{
      fontSize:24, fontWeight:600, marginTop:6,
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontVariantNumeric:'tabular-nums', letterSpacing:'-0.02em',
      color: tone==='pos'?'var(--pos)' : tone==='neg'?'var(--neg)' : 'var(--ink)'
    }}>{value}</div>
    {sub && <div style={{ marginTop:6 }}>{sub}</div>}
  </div>
);

const SectionHeader = ({ title, subtitle, action }) => (
  <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:16, gap:16 }}>
    <div>
      <div style={{ fontSize:18, fontWeight:600, letterSpacing:'-0.01em' }}>{title}</div>
      {subtitle && <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:2 }}>{subtitle}</div>}
    </div>
    {action}
  </div>
);

const Field = ({ label, children, hint }) => (
  <label style={{ display:'block' }}>
    <div style={{ fontSize:12.5, fontWeight:500, color:'var(--ink-2)', marginBottom:6 }}>{label}</div>
    {children}
    {hint && <div style={{ fontSize:11.5, color:'var(--ink-3)', marginTop:5 }}>{hint}</div>}
  </label>
);

const Input = ({ value, onChange, placeholder, type='text', icon, ...rest }) => (
  <div style={{
    display:'flex', alignItems:'center', gap:8,
    padding:'0 12px', height:40,
    background:'var(--bg-elev)', border:'1px solid var(--line-2)', borderRadius:10,
    transition:'border-color .15s, box-shadow .15s'
  }}
    onFocus={e => e.currentTarget.style.borderColor='var(--accent)'}
    onBlur={e => e.currentTarget.style.borderColor='var(--line-2)'}>
    {icon && <span style={{ color:'var(--ink-3)' }}>{icon}</span>}
    <input type={type} value={value} onChange={onChange} placeholder={placeholder}
      style={{ flex:1, border:'none', outline:'none', background:'transparent', fontSize:14 }}
      {...rest}/>
  </div>
);

const Toggle = ({ value, onChange }) => (
  <button onClick={() => onChange(!value)} style={{
    width:36, height:22, borderRadius:11, padding:2,
    background: value ? 'var(--accent)' : 'oklch(0.86 0.005 70)',
    transition:'background .2s'
  }}>
    <div style={{
      width:18, height:18, borderRadius:'50%', background:'#fff',
      transform: value ? 'translateX(14px)' : 'translateX(0)',
      transition:'transform .2s', boxShadow:'0 1px 3px rgba(0,0,0,.2)'
    }}/>
  </button>
);

const fmt = {
  money: (v, d=2) => `$${v.toLocaleString('en-US',{minimumFractionDigits:d, maximumFractionDigits:d})}`,
  pct: (v, d=2) => `${v >= 0 ? '+' : ''}${v.toFixed(d)}%`,
  num: (v, d=2) => v.toLocaleString('en-US',{minimumFractionDigits:d, maximumFractionDigits:d}),
  compact: (v) => {
    if (Math.abs(v) >= 1e12) return '$'+(v/1e12).toFixed(2)+'T';
    if (Math.abs(v) >= 1e9)  return '$'+(v/1e9).toFixed(2)+'B';
    if (Math.abs(v) >= 1e6)  return '$'+(v/1e6).toFixed(2)+'M';
    if (Math.abs(v) >= 1e3)  return '$'+(v/1e3).toFixed(2)+'K';
    return '$'+v.toFixed(2);
  }
};

Object.assign(window, { Card, Button, IconButton, Pill, Delta, Tabs, SymbolBadge, StatTile, SectionHeader, Field, Input, Toggle, fmt });
