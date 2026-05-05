// SVG Charts — sparkline, area, candle+volume, RSI, donut, bar

const Sparkline = ({ data, w=120, h=32, color, stroke=1.5, fill=true }) => {
  if (!data || !data.length) return null;
  const min = Math.min(...data), max = Math.max(...data);
  const r = max - min || 1;
  const pts = data.map((v,i) => [i/(data.length-1)*w, h - ((v-min)/r)*(h-2) - 1]);
  const d = pts.map((p,i) => (i?'L':'M') + p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join(' ');
  const fillD = d + ` L ${w} ${h} L 0 ${h} Z`;
  const c = color || (data[data.length-1] >= data[0] ? 'var(--pos)' : 'var(--neg)');
  const id = `spk-${Math.random().toString(36).slice(2,8)}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} preserveAspectRatio="none">
      {fill && <defs><linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={c} stopOpacity="0.22"/>
        <stop offset="100%" stopColor={c} stopOpacity="0"/>
      </linearGradient></defs>}
      {fill && <path d={fillD} fill={`url(#${id})`}/>}
      <path d={d} fill="none" stroke={c} strokeWidth={stroke} strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  );
};

// Area chart with axes + tooltip
const AreaChart = ({ data, height=280, label='Value', color='var(--accent)' }) => {
  const ref = React.useRef();
  const [hover, setHover] = React.useState(null);
  const padL = 8, padR = 56, padT = 16, padB = 28;
  const [w, setW] = React.useState(800);

  React.useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(es => setW(es[0].contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const inner = w - padL - padR, innerH = height - padT - padB;
  const min = Math.min(...data), max = Math.max(...data);
  const r = max - min || 1;
  const x = i => padL + (i/(data.length-1))*inner;
  const y = v => padT + (1 - (v-min)/r)*innerH;
  const d = data.map((v,i) => (i?'L':'M') + x(i).toFixed(2) + ' ' + y(v).toFixed(2)).join(' ');
  const fillD = d + ` L ${x(data.length-1)} ${padT+innerH} L ${x(0)} ${padT+innerH} Z`;

  const ticks = 4;
  const yTicks = Array.from({length:ticks+1}, (_,i) => min + (r*i/ticks));

  const onMove = e => {
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const i = Math.round(((px - padL)/inner) * (data.length-1));
    if (i>=0 && i<data.length) setHover({ i, px });
  };

  return (
    <div ref={ref} style={{ position:'relative', width:'100%' }}
      onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      <svg width={w} height={height}>
        <defs>
          <linearGradient id="area-g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
            <stop offset="100%" stopColor={color} stopOpacity="0"/>
          </linearGradient>
        </defs>
        {yTicks.map((t,i) => (
          <g key={i}>
            <line x1={padL} x2={padL+inner} y1={y(t)} y2={y(t)} stroke="var(--line)" strokeDasharray={i===0?'':'2 4'}/>
            <text x={padL+inner+8} y={y(t)+4} fontSize="10.5" fill="var(--ink-3)" fontFamily="var(--font-mono)">{fmt.compact(t)}</text>
          </g>
        ))}
        <path d={fillD} fill="url(#area-g)"/>
        <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
        {hover && (
          <g>
            <line x1={x(hover.i)} x2={x(hover.i)} y1={padT} y2={padT+innerH} stroke="var(--ink-3)" strokeDasharray="3 3"/>
            <circle cx={x(hover.i)} cy={y(data[hover.i])} r="5" fill={color} stroke="#fff" strokeWidth="2"/>
          </g>
        )}
      </svg>
      {hover && (
        <div style={{
          position:'absolute', left: Math.min(Math.max(hover.px-60, 0), w-padR-120), top: 4,
          background:'var(--ink)', color:'oklch(0.98 0 0)', padding:'6px 10px', borderRadius:8,
          fontSize:11.5, fontFamily:'var(--font-mono)', pointerEvents:'none', whiteSpace:'nowrap'
        }}>
          <div style={{ opacity:.6, fontSize:10 }}>Day {hover.i+1}</div>
          <div style={{ fontSize:13, fontWeight:600 }}>{fmt.money(data[hover.i])}</div>
        </div>
      )}
    </div>
  );
};

// Candlestick + Volume + RSI combo
const CandleChart = ({ candles, rsi, showVolume = true, showRSI = true, height = 360 }) => {
  const ref = React.useRef();
  const [w, setW] = React.useState(800);
  const [hover, setHover] = React.useState(null);

  React.useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(es => setW(es[0].contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const padL = 8, padR = 60;
  const volH = showVolume ? 60 : 0;
  const rsiH = showRSI ? 60 : 0;
  const gap = 8;
  const priceH = height - volH - rsiH - (showVolume?gap:0) - (showRSI?gap:0);

  const inner = w - padL - padR;
  const n = candles.length;
  const cw = inner / n;
  const bw = Math.max(2, cw * 0.65);

  const allHigh = Math.max(...candles.map(c=>c.high));
  const allLow  = Math.min(...candles.map(c=>c.low));
  const r = allHigh - allLow || 1;
  const py = v => ((allHigh - v)/r) * (priceH - 16) + 8;

  const maxVol = Math.max(...candles.map(c=>c.volume));

  const onMove = e => {
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const i = Math.floor((px - padL)/cw);
    if (i>=0 && i<n) setHover({ i, px });
  };

  // Y-axis ticks
  const ticks = 5;
  const yTicks = Array.from({length:ticks+1}, (_,i) => allLow + (r*i/ticks));

  const last = candles[n-1];

  return (
    <div ref={ref} style={{ position:'relative', width:'100%' }}
      onMouseMove={onMove} onMouseLeave={()=>setHover(null)}>
      <svg width={w} height={height}>
        {/* Price grid */}
        {yTicks.map((t,i) => (
          <g key={i}>
            <line x1={padL} x2={padL+inner} y1={py(t)} y2={py(t)} stroke="var(--line)" strokeDasharray={i===0||i===ticks?'':'2 4'}/>
            <text x={padL+inner+6} y={py(t)+4} fontSize="10.5" fill="var(--ink-3)" fontFamily="var(--font-mono)">{t.toFixed(2)}</text>
          </g>
        ))}

        {/* Last price line */}
        <line x1={padL} x2={padL+inner} y1={py(last.close)} y2={py(last.close)}
              stroke={last.close >= last.open ? 'var(--pos)':'var(--neg)'} strokeDasharray="3 3" strokeWidth="1"/>
        <rect x={padL+inner+2} y={py(last.close)-9} width={padR-4} height={18} rx={3}
              fill={last.close >= last.open ? 'var(--pos)':'var(--neg)'}/>
        <text x={padL+inner+6} y={py(last.close)+4} fontSize="10.5" fill="#fff" fontFamily="var(--font-mono)" fontWeight="600">{last.close.toFixed(2)}</text>

        {/* Candles */}
        {candles.map((c,i) => {
          const cx = padL + i*cw + cw/2;
          const isUp = c.close >= c.open;
          const col = isUp ? 'var(--pos)' : 'var(--neg)';
          const yOpen = py(c.open), yClose = py(c.close);
          const yTop = Math.min(yOpen, yClose), yBot = Math.max(yOpen, yClose);
          return (
            <g key={i}>
              <line x1={cx} x2={cx} y1={py(c.high)} y2={py(c.low)} stroke={col} strokeWidth="1"/>
              <rect x={cx - bw/2} y={yTop} width={bw} height={Math.max(1, yBot - yTop)} fill={col}/>
            </g>
          );
        })}

        {/* X-axis tick labels */}
        {[0, Math.floor(n/4), Math.floor(n/2), Math.floor(3*n/4), n-1].map(i => (
          <text key={i} x={padL + i*cw + cw/2} y={priceH+12} fontSize="10" fill="var(--ink-3)" textAnchor="middle" fontFamily="var(--font-mono)">
            {`Apr ${i+5}`}
          </text>
        ))}

        {/* Volume */}
        {showVolume && (
          <g transform={`translate(0, ${priceH + gap})`}>
            <text x={padL+inner+6} y={12} fontSize="10" fill="var(--ink-3)" fontFamily="var(--font-mono)">VOL</text>
            {candles.map((c,i) => {
              const cx = padL + i*cw + cw/2;
              const h = (c.volume/maxVol)*(volH-8);
              const isUp = c.close >= c.open;
              return <rect key={i} x={cx-bw/2} y={volH - h} width={bw} height={h}
                fill={isUp?'var(--pos)':'var(--neg)'} opacity="0.45"/>;
            })}
            <line x1={padL} x2={padL+inner} y1={volH} y2={volH} stroke="var(--line)"/>
          </g>
        )}

        {/* RSI */}
        {showRSI && rsi && (
          <g transform={`translate(0, ${priceH + (showVolume?gap+volH:0) + gap})`}>
            <text x={padL+inner+6} y={12} fontSize="10" fill="var(--ink-3)" fontFamily="var(--font-mono)">RSI 14</text>
            {/* OB/OS bands */}
            <line x1={padL} x2={padL+inner} y1={(1-0.7)*rsiH} y2={(1-0.7)*rsiH} stroke="var(--neg)" strokeDasharray="2 4" strokeWidth="0.8" opacity="0.5"/>
            <line x1={padL} x2={padL+inner} y1={(1-0.3)*rsiH} y2={(1-0.3)*rsiH} stroke="var(--pos)" strokeDasharray="2 4" strokeWidth="0.8" opacity="0.5"/>
            <text x={padL+2} y={(1-0.7)*rsiH-2} fontSize="9" fill="var(--neg)" fontFamily="var(--font-mono)">70</text>
            <text x={padL+2} y={(1-0.3)*rsiH-2} fontSize="9" fill="var(--pos)" fontFamily="var(--font-mono)">30</text>
            <path
              d={rsi.map((v,i) => v==null ? null : `${i===0||rsi[i-1]==null?'M':'L'} ${(padL + i*cw + cw/2).toFixed(2)} ${((1-v/100)*rsiH).toFixed(2)}`).filter(Boolean).join(' ')}
              fill="none" stroke="var(--cool)" strokeWidth="1.5"/>
            <line x1={padL} x2={padL+inner} y1={rsiH} y2={rsiH} stroke="var(--line)"/>
          </g>
        )}

        {/* Hover crosshair */}
        {hover && (
          <g>
            <line x1={padL + hover.i*cw + cw/2} x2={padL + hover.i*cw + cw/2}
                  y1={0} y2={height-2} stroke="var(--ink-3)" strokeDasharray="2 3" strokeWidth="0.8"/>
          </g>
        )}
      </svg>

      {hover && (
        <div style={{
          position:'absolute', left: Math.min(Math.max(hover.px+8, 0), w-180), top: 8,
          background:'var(--ink)', color:'oklch(0.98 0 0)', padding:'8px 12px', borderRadius:8,
          fontSize:11, fontFamily:'var(--font-mono)', pointerEvents:'none',
          minWidth:140, lineHeight:1.7
        }}>
          <div style={{ opacity:.55, fontSize:10, marginBottom:4 }}>{`Day ${hover.i+1}`}</div>
          <div>O <span style={{float:'right'}}>{candles[hover.i].open.toFixed(2)}</span></div>
          <div>H <span style={{float:'right', color:'var(--pos)'}}>{candles[hover.i].high.toFixed(2)}</span></div>
          <div>L <span style={{float:'right', color:'var(--neg)'}}>{candles[hover.i].low.toFixed(2)}</span></div>
          <div>C <span style={{float:'right', fontWeight:600}}>{candles[hover.i].close.toFixed(2)}</span></div>
          <div style={{borderTop:'1px solid rgba(255,255,255,.1)', marginTop:4, paddingTop:4}}>
            VOL <span style={{float:'right'}}>{candles[hover.i].volume}M</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Donut chart — for allocation
const Donut = ({ data, size=200, thickness=22 }) => {
  const total = data.reduce((s,d)=>s+d.value, 0);
  let acc = 0;
  const cx = size/2, cy = size/2;
  const r = (size-thickness)/2;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--bg-sunken)" strokeWidth={thickness}/>
      {data.map((d, i) => {
        const a0 = (acc/total) * Math.PI * 2 - Math.PI/2;
        acc += d.value;
        const a1 = (acc/total) * Math.PI * 2 - Math.PI/2;
        const large = (a1 - a0) > Math.PI ? 1 : 0;
        const x0 = cx + r*Math.cos(a0), y0 = cy + r*Math.sin(a0);
        const x1 = cx + r*Math.cos(a1), y1 = cy + r*Math.sin(a1);
        return <path key={i}
          d={`M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`}
          fill="none" stroke={d.color} strokeWidth={thickness} strokeLinecap="butt"/>;
      })}
    </svg>
  );
};

// Horizontal bar — sector heatmap
const SectorBar = ({ name, ch, max }) => {
  const pos = ch >= 0;
  const w = Math.min(100, Math.abs(ch)/max*100);
  return (
    <div style={{ display:'grid', gridTemplateColumns:'130px 1fr 60px', alignItems:'center', gap:12, padding:'8px 0' }}>
      <div style={{ fontSize:13 }}>{name}</div>
      <div style={{ position:'relative', height:18, background:'var(--bg-sunken)', borderRadius:4, overflow:'hidden' }}>
        <div style={{ position:'absolute', left:'50%', top:0, bottom:0, width:1, background:'var(--line-2)' }}/>
        <div style={{
          position:'absolute', top:0, bottom:0,
          left: pos ? '50%' : `${50 - w/2}%`,
          width: `${w/2}%`,
          background: pos ? 'var(--pos)' : 'var(--neg)',
          opacity:.85,
          borderRadius: pos ? '0 3px 3px 0' : '3px 0 0 3px'
        }}/>
      </div>
      <div className="num" style={{ fontSize:12, textAlign:'right', color: pos?'var(--pos)':'var(--neg)', fontWeight:500 }}>
        {pos?'+':''}{ch.toFixed(2)}%
      </div>
    </div>
  );
};

Object.assign(window, { Sparkline, AreaChart, CandleChart, Donut, SectorBar });
