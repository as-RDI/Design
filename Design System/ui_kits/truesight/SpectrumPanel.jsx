/* global React */
function SpectrumPanel() {
  const bars = Array.from({length: 80}, (_, i) => {
    const f = i / 80;
    return 0.08 + 0.3 * Math.exp(-((f - 0.18) ** 2) / 0.002) + 0.6 * Math.exp(-((f - 0.42) ** 2) / 0.0008) + 0.22 * Math.exp(-((f - 0.78) ** 2) / 0.003) + Math.random() * 0.06;
  });
  return (
    <div style={spStyles.wrap}>
      <div style={spStyles.header}>
        <div>
          <span style={spStyles.title}>Frequency Spectrum</span>
          <span style={spStyles.mono}>· Pump-04B · motor bearing DE</span>
        </div>
        <div style={spStyles.controls}>
          <span style={spStyles.chip}>Peak · 241.6 Hz</span>
          <span style={spStyles.chip}>RMS · 0.0834 mils</span>
          <span style={{...spStyles.chip, color: 'var(--ts-caution)', borderColor: 'color-mix(in srgb, var(--ts-caution) 40%, transparent)'}}>ISO 10816 · Caution</span>
        </div>
      </div>
      <div style={spStyles.chart}>
        <svg viewBox="0 0 800 140" preserveAspectRatio="none" style={{width: '100%', height: '100%', display: 'block'}}>
          <g stroke="var(--border-1)" strokeWidth="1">
            {[0,1,2,3,4].map(i => <line key={i} x1="0" x2="800" y1={i*35} y2={i*35}/>)}
          </g>
          <line x1="0" x2="800" y1="60" y2="60" stroke="var(--ts-caution)" strokeWidth="1" strokeDasharray="4 4" opacity="0.7"/>
          <text x="795" y="57" textAnchor="end" fontFamily="JetBrains Mono" fontSize="9" fill="var(--ts-caution)">CAUTION 0.045 mils</text>
          <line x1="0" x2="800" y1="30" y2="30" stroke="var(--ts-alarm)" strokeWidth="1" strokeDasharray="4 4" opacity="0.7"/>
          <text x="795" y="27" textAnchor="end" fontFamily="JetBrains Mono" fontSize="9" fill="var(--ts-alarm)">ALARM 0.071 mils</text>
          {bars.map((h, i) => {
            const x = i * 10; const barH = h * 120; const over = h * 120 > 80;
            return <rect key={i} x={x} y={140 - barH} width="8" height={barH}
              fill={over ? 'var(--ts-alarm)' : 'var(--accent)'} opacity={over ? 0.9 : 0.8}/>;
          })}
        </svg>
      </div>
      <div style={spStyles.axis}>
        <span>0</span><span>250</span><span>500</span><span>750</span><span>1000 Hz</span>
      </div>
    </div>
  );
}
const spStyles = {
  wrap: { height: 220, background: 'var(--bg-1)', borderTop: '1px solid var(--border-1)', display: 'flex', flexDirection: 'column' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid var(--border-1)' },
  title: { fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-1)' },
  mono: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--fg-3)', marginLeft: 10 },
  controls: { display: 'flex', gap: 8 },
  chip: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 500, color: 'var(--fg-2)', padding: '4px 8px', border: '1px solid var(--border-2)', borderRadius: 3 },
  chart: { flex: 1, padding: '8px 16px 0' },
  axis: { display: 'flex', justifyContent: 'space-between', padding: '4px 16px 10px', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--fg-3)' },
};
window.SpectrumPanel = SpectrumPanel;
