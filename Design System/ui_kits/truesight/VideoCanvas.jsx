/* global React */
const { useEffect, useRef, useState } = React;

function VideoCanvas({ assets, selected, onSelect, amp, time }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let raf; const start = performance.now();
    const tick = (t) => { setPhase(((t - start) / 1000) * 2 * Math.PI * 2.4); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={vcStyles.wrap}>
      <svg viewBox="0 0 800 500" style={{width: '100%', height: '100%', display: 'block'}}>
        <defs>
          <radialGradient id="vignette" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#545B64"/>
            <stop offset="100%" stopColor="#343A40"/>
          </radialGradient>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.03)"/>
          </pattern>
        </defs>
        <rect width="800" height="500" fill="url(#vignette)"/>
        <rect width="800" height="500" fill="url(#dots)"/>

        <g stroke="#6A717B" strokeWidth="1" fill="#4A5058">
          <rect x="100" y="380" width="600" height="40"/>
          <rect x="180" y="240" width="200" height="140" rx="4"/>
          <rect x="380" y="260" width="160" height="120" rx="4"/>
          <circle cx="280" cy="310" r="38" fill="#262C34"/>
          <circle cx="460" cy="320" r="30" fill="#262C34"/>
          <path d="M 460 320 L 460 200 L 600 200 L 600 380" fill="none" stroke="#4A525D" strokeWidth="14" strokeLinecap="square"/>
        </g>
        <text x="440" y="330" fontFamily="JetBrains Mono" fontSize="10" fill="#6B7380">PUMP-04B</text>

        <g stroke="rgba(186,37,40,0.06)" strokeWidth="1">
          {Array.from({length: 20}).map((_, i) => <line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="500"/>)}
          {Array.from({length: 13}).map((_, i) => <line key={`h${i}`} x1="0" y1={i*40} x2="800" y2={i*40}/>)}
        </g>

        {assets.map(a => {
          const isSel = a.id === selected;
          const wobble = Math.sin(phase + a.phase) * (a.amp * amp * 0.4);
          const stroke = `var(--ts-${a.status})`;
          return (
            <g key={a.id} transform={`translate(${a.x + wobble} ${a.y + wobble * 0.4})`}
               onClick={() => onSelect(a.id)} style={{cursor: 'pointer'}}>
              <rect x="-18" y="-18" width="36" height="36" fill="none"
                stroke={stroke} strokeWidth={isSel ? 2 : 1}
                strokeDasharray={isSel ? '0' : '4 2'}/>
              <circle r="3" fill={stroke}/>
              <text y="-22" fontFamily="JetBrains Mono" fontSize="9" fill={stroke} textAnchor="middle">{a.label}</text>
              {isSel && (
                <text y="30" fontFamily="JetBrains Mono" fontSize="9" fill="#fff" textAnchor="middle">{a.value} {a.unit}</text>
              )}
            </g>
          );
        })}
      </svg>

      <div style={vcStyles.liveBadge}>
        <span style={{...vcStyles.liveDot, animation: 'pulse 1.2s ease-in-out infinite'}}/>
        <span>LIVE</span>
        <span style={{color: 'var(--fg-3)', marginLeft: 10}}>{time}</span>
      </div>
      <div style={vcStyles.ampBadge}>
        <span>AMP ×{amp}</span>
      </div>
      <div style={vcStyles.fpsBadge}>1400 FPS · 1920×1080 · IRIS MA</div>
      <style>{`@keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.3 } }`}</style>
    </div>
  );
}
const vcStyles = {
  wrap: { flex: 1, position: 'relative', background: '#343A40', overflow: 'hidden', minHeight: 0 },
  liveBadge: { position: 'absolute', top: 14, left: 14, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(52,58,64,0.78)', backdropFilter: 'blur(8px)', padding: '6px 10px', borderRadius: 3, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: '#fff', border: '1px solid rgba(255,255,255,0.08)' },
  liveDot: { width: 8, height: 8, borderRadius: 99, background: 'var(--accent)' },
  ampBadge: { position: 'absolute', top: 14, right: 14, background: 'rgba(52,58,64,0.78)', backdropFilter: 'blur(8px)', padding: '6px 10px', borderRadius: 3, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#fff', border: '1px solid rgba(255,255,255,0.08)' },
  fpsBadge: { position: 'absolute', bottom: 14, left: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' },
};
window.VideoCanvas = VideoCanvas;
