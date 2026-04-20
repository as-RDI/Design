/* global React, lucide */
const { useEffect } = React;

function Toolbar({ recording, onToggle, amp, onAmp }) {
  useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <div style={tbStyles.wrap}>
      <div style={tbStyles.left}>
        <img src="../../assets/logo-rdi-white.png" alt="RDI" height="22"/>
        <div style={tbStyles.sep}/>
        <span style={tbStyles.productMark}>TrueSight<sup style={{fontSize: 9}}>™</sup></span>
        <div style={tbStyles.sep}/>
        <span style={tbStyles.file}>Pump-04B · 2026-04-20_14:22.rdi</span>
      </div>
      <div style={tbStyles.center}>
        <button style={tbStyles.iconBtn} title="TrueSight ID"><i data-lucide="target" style={iconStyle}/></button>
        <button style={tbStyles.iconBtn} title="TrueSight Limit"><i data-lucide="gauge" style={iconStyle}/></button>
        <button style={tbStyles.iconBtn} title="TrueSight Modal"><i data-lucide="waves" style={iconStyle}/></button>
        <button style={tbStyles.iconBtn} title="TrueSight Accel"><i data-lucide="activity" style={iconStyle}/></button>
        <button style={tbStyles.iconBtn} title="TrueSight Rotate"><i data-lucide="rotate-cw" style={iconStyle}/></button>
        <div style={tbStyles.sep}/>
        <button onClick={onToggle} style={{...tbStyles.iconBtn, color: recording ? 'var(--accent)' : 'var(--fg-1)'}}>
          <i data-lucide={recording ? 'square' : 'circle'} style={iconStyle}/>
          <span style={{marginLeft: 6, fontSize: 11, fontWeight: 600, letterSpacing: '0.12em'}}>{recording ? 'STOP' : 'REC'}</span>
        </button>
      </div>
      <div style={tbStyles.right}>
        <div style={tbStyles.ampBlock}>
          <span style={tbStyles.ampLabel}>Amplification</span>
          <input type="range" min="1" max="20" value={amp} onChange={e => onAmp(+e.target.value)} style={tbStyles.slider}/>
          <span style={tbStyles.ampValue}>{amp}×</span>
        </div>
        <button style={tbStyles.iconBtn}><i data-lucide="share-2" style={iconStyle}/></button>
        <button style={tbStyles.iconBtn}><i data-lucide="settings" style={iconStyle}/></button>
      </div>
    </div>
  );
}
const iconStyle = { width: 16, height: 16, strokeWidth: 1.75 };
const tbStyles = {
  wrap: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 48, padding: '0 14px', background: 'var(--bg-1)', borderBottom: '1px solid var(--border-1)' },
  left: { display: 'flex', alignItems: 'center', gap: 14 },
  center: { display: 'flex', alignItems: 'center', gap: 4 },
  right: { display: 'flex', alignItems: 'center', gap: 14 },
  sep: { width: 1, height: 24, background: 'var(--border-2)' },
  productMark: { fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 700, color: 'var(--fg-1)', letterSpacing: '0.04em', textTransform: 'uppercase' },
  file: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--fg-3)' },
  iconBtn: { display: 'inline-flex', alignItems: 'center', padding: '6px 10px', background: 'transparent', border: '1px solid transparent', borderRadius: 3, color: 'var(--fg-1)', cursor: 'pointer' },
  ampBlock: { display: 'flex', alignItems: 'center', gap: 8 },
  ampLabel: { fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fg-3)' },
  slider: { width: 120, accentColor: 'var(--accent)' },
  ampValue: { fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--accent)', minWidth: 30 },
};
window.Toolbar = Toolbar;
