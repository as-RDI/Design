/* global React, lucide */
const { useEffect } = React;

function InspectorPanel({ asset }) {
  useEffect(() => { if (window.lucide) lucide.createIcons(); });
  if (!asset) return null;
  const rows = [
    ['Asset ID', asset.id],
    ['Type', asset.type],
    ['Displacement', `${asset.value} ${asset.unit}`],
    ['Peak freq', '241.6 Hz'],
    ['Phase', '142.8°'],
    ['Samples', '14,400'],
  ];
  const sevC = `var(--ts-${asset.status})`;
  return (
    <aside style={ipStyles.wrap}>
      <div style={ipStyles.header}>
        <div>
          <div style={ipStyles.eye}>Inspector</div>
          <div style={ipStyles.title}>{asset.name}</div>
        </div>
        <button style={ipStyles.close}><i data-lucide="x" style={{width: 14, height: 14}}/></button>
      </div>

      <div style={ipStyles.section}>
        <div style={ipStyles.sectionTitle}>Severity</div>
        <div style={{...ipStyles.severity, borderColor: `color-mix(in srgb, ${sevC} 35%, transparent)`, background: `color-mix(in srgb, ${sevC} 6%, transparent)`}}>
          <div style={ipStyles.sevRow}>
            <span style={{...ipStyles.sevDot, background: sevC}}/>
            <span style={ipStyles.sevLabel}>{asset.status.toUpperCase()}</span>
            <span style={ipStyles.sevStd}>ISO 10816 · Class II</span>
          </div>
          <div style={ipStyles.sevBar}>
            <div style={{...ipStyles.sevFill, width: sevPercent(asset.status) + '%', background: sevC}}/>
          </div>
          <div style={ipStyles.sevScale}>
            <span>0</span><span>Good</span><span>Caution</span><span>Alarm</span>
          </div>
        </div>
      </div>

      <div style={ipStyles.section}>
        <div style={ipStyles.sectionTitle}>Measurements</div>
        <div style={ipStyles.table}>
          {rows.map(([k, v], i) => (
            <div key={i} style={ipStyles.row}>
              <span style={ipStyles.k}>{k}</span>
              <span style={ipStyles.v}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={ipStyles.section}>
        <div style={ipStyles.sectionTitle}>Analyses</div>
        <button style={ipStyles.analysis}>
          <i data-lucide="waves" style={iconS}/>
          <span style={{flex: 1, textAlign: 'left'}}>Run Modal Analysis</span>
          <i data-lucide="chevron-right" style={iconS}/>
        </button>
        <button style={ipStyles.analysis}>
          <i data-lucide="rotate-cw" style={iconS}/>
          <span style={{flex: 1, textAlign: 'left'}}>Rotational Diagnostics</span>
          <i data-lucide="chevron-right" style={iconS}/>
        </button>
        <button style={ipStyles.analysis}>
          <i data-lucide="activity" style={iconS}/>
          <span style={{flex: 1, textAlign: 'left'}}>Pair Accelerometer</span>
          <i data-lucide="chevron-right" style={iconS}/>
        </button>
      </div>

      <div style={ipStyles.footer}>
        <button className="rdi-btn" style={{width: '100%', justifyContent: 'center'}}>Export Report</button>
      </div>
    </aside>
  );
}
const iconS = { width: 14, height: 14, strokeWidth: 1.75 };
function sevPercent(s) { return s === 'pass' ? 25 : s === 'caution' ? 62 : s === 'alarm' ? 92 : 0; }
const ipStyles = {
  wrap: { width: 320, background: 'var(--bg-1)', borderLeft: '1px solid var(--border-1)', display: 'flex', flexDirection: 'column', overflow: 'auto' },
  header: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '14px 16px', borderBottom: '1px solid var(--border-1)' },
  eye: { fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 },
  title: { fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, textTransform: 'uppercase', color: 'var(--fg-1)', letterSpacing: '0.02em' },
  close: { background: 'transparent', border: 0, color: 'var(--fg-3)', cursor: 'pointer' },
  section: { padding: '14px 16px', borderBottom: '1px solid var(--border-1)' },
  sectionTitle: { fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 10 },
  severity: { padding: 12, border: '1px solid', borderRadius: 6 },
  sevRow: { display: 'flex', alignItems: 'center', gap: 8 },
  sevDot: { width: 10, height: 10, borderRadius: 99 },
  sevLabel: { fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--fg-1)' },
  sevStd: { fontSize: 10, color: 'var(--fg-3)', marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace" },
  sevBar: { height: 4, background: 'var(--bg-3)', borderRadius: 2, marginTop: 12, overflow: 'hidden' },
  sevFill: { height: '100%', transition: 'width 420ms var(--ease-out)' },
  sevScale: { display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 9, color: 'var(--fg-3)', fontFamily: "'JetBrains Mono', monospace" },
  table: { display: 'flex', flexDirection: 'column', gap: 8 },
  row: { display: 'flex', justifyContent: 'space-between', fontSize: 12, paddingBottom: 8, borderBottom: '1px solid var(--border-1)' },
  k: { color: 'var(--fg-3)' },
  v: { fontFamily: "'JetBrains Mono', monospace", color: 'var(--fg-1)', fontWeight: 500 },
  analysis: { display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 0', background: 'transparent', border: 0, borderBottom: '1px solid var(--border-1)', color: 'var(--fg-1)', fontSize: 13, cursor: 'pointer' },
  footer: { padding: '14px 16px', marginTop: 'auto' },
};
window.InspectorPanel = InspectorPanel;
