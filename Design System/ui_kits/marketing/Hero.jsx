/* global React */
function Hero() {
  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.inner}>
        <div style={heroStyles.eyebrow}>The Power of Technology</div>
        <h1 style={heroStyles.title}>
          <span style={{color: 'var(--fg-1)'}}>Seeing is</span>{' '}
          <span style={{color: 'var(--accent)'}}>believing.</span>
        </h1>
        <p style={heroStyles.lead}>Motion Amplification® turns every pixel in a camera's view into a sensor — so you can see, measure, and communicate vibration that's invisible to the naked eye.</p>
        <div style={heroStyles.ctas}>
          <button className="rdi-btn">Request a demo</button>
          <button className="rdi-btn rdi-btn--ghost">See how it works</button>
        </div>
        <div style={heroStyles.plate}>
          <div style={heroStyles.plateInner}>
            <div style={{...heroStyles.badge, color: 'var(--accent)'}}>● LIVE</div>
            <div style={heroStyles.plateCaption}>1,400 FPS · Iris MA · Pump-04B</div>
            <svg viewBox="0 0 800 360" style={{width: '100%', borderRadius: 8}}>
              <defs>
                <linearGradient id="plateBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F4F6F8"/><stop offset="1" stopColor="#E1E5EA"/>
                </linearGradient>
              </defs>
              <rect width="800" height="360" fill="url(#plateBg)"/>
              <g stroke="rgba(20,24,29,0.06)">
                {Array.from({length: 20}).map((_, i) => <line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="360"/>)}
                {Array.from({length: 10}).map((_, i) => <line key={`h${i}`} x1="0" y1={i*40} x2="800" y2={i*40}/>)}
              </g>
              <g fill="#9099A5" stroke="#5F6773">
                <rect x="120" y="230" width="560" height="30"/>
                <rect x="200" y="140" width="180" height="90" rx="3" fill="#B0B7C0"/>
                <rect x="400" y="150" width="150" height="80" rx="3" fill="#B0B7C0"/>
                <circle cx="290" cy="185" r="34" fill="#CED3DA"/>
                <circle cx="475" cy="190" r="26" fill="#CED3DA"/>
              </g>
              <g>
                {[{x: 290, y: 185, l: 'M-DE', c: '#D97706'},
                  {x: 475, y: 190, l: 'P-IN', c: '#BA2528'},
                  {x: 600, y: 160, l: 'PIPE', c: '#16A34A'}].map(p => (
                  <g key={p.l} transform={`translate(${p.x} ${p.y})`}>
                    <rect x="-18" y="-18" width="36" height="36" fill="none" stroke={p.c} strokeWidth="1.5" strokeDasharray="3 2"/>
                    <circle r="3" fill={p.c}/>
                    <text y="-22" fontFamily="JetBrains Mono" fontSize="10" fill={p.c} textAnchor="middle" fontWeight="600">{p.l}</text>
                  </g>
                ))}
              </g>
              <text x="20" y="340" fontFamily="JetBrains Mono" fontSize="10" fill="#5F6773">0.0834 mils pk-pk · 241.6 Hz</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
const heroStyles = {
  wrap: { background: 'var(--bg-0)', paddingTop: 80, paddingBottom: 96, borderBottom: '1px solid var(--border-1)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 32px', textAlign: 'center' },
  eyebrow: { fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 },
  title: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(56px, 9vw, 120px)', lineHeight: 1.02, letterSpacing: '0.005em', textTransform: 'uppercase', margin: 0 },
  lead: { fontSize: 20, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: 620, margin: '22px auto 0' },
  ctas: { display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, marginBottom: 56 },
  plate: { background: 'var(--bg-1)', border: '1px solid var(--border-2)', borderRadius: 14, padding: 14, boxShadow: 'var(--shadow-2)', maxWidth: 960, margin: '0 auto' },
  plateInner: { position: 'relative' },
  badge: { position: 'absolute', top: 12, left: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', zIndex: 2 },
  plateCaption: { position: 'absolute', bottom: 12, right: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--fg-3)', zIndex: 2 },
};
window.Hero = Hero;
