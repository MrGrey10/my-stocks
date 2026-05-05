// Sign in screen — refined version of original
const SignInScreen = ({ onSignIn }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div style={{
      minHeight:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr',
      background:'var(--bg)'
    }}>
      {/* Left — form */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:48 }}>
        <div style={{ width:'100%', maxWidth:380 }} className="anim-in">
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:32 }}>
            <StarMark size={36}/>
            <span style={{ fontSize:18, fontWeight:600, letterSpacing:'-0.01em' }}>MyStocks</span>
          </div>
          <div style={{ fontSize:32, fontWeight:600, letterSpacing:'-0.025em', marginBottom:6 }}>Welcome back</div>
          <div style={{ color:'var(--ink-3)', marginBottom:28 }}>Sign in to your account to continue.</div>

          <form onSubmit={e => { e.preventDefault(); onSignIn(); }}>
            <div style={{ display:'grid', gap:14, marginBottom:18 }}>
              <Field label="Email">
                <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" type="email"/>
              </Field>
              <Field label="Password" hint={<a style={{ color:'var(--accent-deep)', textDecoration:'none' }}>Forgot password?</a>}>
                <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" type="password"/>
              </Field>
            </div>

            <Button variant="primary" size="lg" type="submit"
              style={{ width:'100%', justifyContent:'center', marginBottom:14 }}>Sign in</Button>

            <div style={{ display:'flex', alignItems:'center', gap:12, margin:'18px 0', color:'var(--ink-3)', fontSize:12 }}>
              <div style={{ flex:1, height:1, background:'var(--line)' }}/>
              <span>or continue with</span>
              <div style={{ flex:1, height:1, background:'var(--line)' }}/>
            </div>

            <Button variant="ghost" size="lg" icon={I.google()}
              style={{ width:'100%', justifyContent:'center' }}>Continue with Google</Button>
          </form>

          <div style={{ marginTop:24, fontSize:13, color:'var(--ink-3)' }}>
            Don't have an account? <a style={{ color:'var(--accent-deep)', fontWeight:500, cursor:'pointer' }}>Sign up</a>
          </div>
        </div>
      </div>

      {/* Right — visual panel */}
      <div style={{
        background:'var(--ink)', color:'oklch(0.95 0 0)',
        position:'relative', overflow:'hidden',
        display:'flex', flexDirection:'column', justifyContent:'space-between',
        padding:48
      }}>
        {/* Decorative gradient */}
        <div style={{
          position:'absolute', inset:0,
          background:'radial-gradient(ellipse at 70% 30%, oklch(0.30 0.10 50) 0%, transparent 60%)',
          opacity:0.6
        }}/>
        <div style={{ position:'relative', display:'flex', alignItems:'center', gap:8, fontSize:13, opacity:.7 }}>
          <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--pos)' }}/>
          <span>Markets open • NYSE 14:23 ET</span>
        </div>

        <div style={{ position:'relative' }}>
          <div style={{ fontSize:48, fontWeight:600, letterSpacing:'-0.03em', lineHeight:1.05, marginBottom:24, maxWidth: 460 }}>
            Track every dollar.<br/>Trade with intent.
          </div>
          <div style={{ fontSize:15, opacity:.7, maxWidth:420, lineHeight:1.55 }}>
            A clean, friendly home for your portfolio — with the data you need and none of the noise you don't.
          </div>

          {/* Mini market preview */}
          <div style={{
            marginTop:36,
            background:'oklch(0.22 0.012 60)',
            border:'1px solid oklch(0.28 0.012 60)',
            borderRadius:14, padding:16, maxWidth:380
          }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:10, fontSize:12, opacity:.6 }}>
              <span>S&P 500 · 1D</span>
              <span className="num" style={{ color:'var(--pos)' }}>+0.42%</span>
            </div>
            <div style={{ height:60 }}>
              <Sparkline data={sparkline(7, 60, 0.001, 0.012)} w={340} h={60} color="oklch(0.78 0.18 60)" stroke={1.8}/>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginTop:8, fontSize:11, opacity:.5, fontFamily:'var(--font-mono)' }}>
              <span>09:30</span><span>11:00</span><span>13:00</span><span>16:00</span>
            </div>
          </div>
        </div>

        <div style={{ position:'relative', display:'flex', gap:16, fontSize:12, opacity:.55 }}>
          <span>SOC 2 Type II</span>
          <span>•</span>
          <span>SIPC Insured</span>
          <span>•</span>
          <span>256-bit encryption</span>
        </div>
      </div>
    </div>
  );
};

window.SignInScreen = SignInScreen;
