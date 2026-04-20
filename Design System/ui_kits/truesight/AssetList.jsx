/* global React, lucide */
const { useEffect } = React;

function AssetList({ assets, selected, onSelect }) {
  useEffect(() => { if (window.lucide) lucide.createIcons(); });
  return (
    <aside style={alStyles.wrap}>
      <div style={alStyles.header}>
        <span style={alStyles.title}>Assets</span>
        <span style={alStyles.count}>{assets.length}</span>
      </div>
      <div style={alStyles.subheader}>
        <i data-lucide="target" style={{width: 12, height: 12, marginRight: 6, color: 'var(--accent)'}}></i>
        <span>TrueSight ID · auto-detected</span>
      </div>
      <div style={alStyles.list}>
        {assets.map(a => (
          <button key={a.id} onClick={() => onSelect(a.id)} style={{
            ...alStyles.item,
            ...(selected === a.id ? alStyles.itemActive : {}),
          }}>
            <span style={{...alStyles.dot, background: statusColor(a.status)}}/>
            <div style={{flex: 1, minWidth: 0}}>
              <div style={alStyles.name}>{a.name}</div>
              <div style={alStyles.meta}>{a.value} · {a.unit}</div>
            </div>
            <span style={{...alStyles.statusPill, ...statusPillStyle(a.status)}}>{a.status}</span>
          </button>
        ))}
      </div>
      <div style={alStyles.footerNote}>
        <i data-lucide="info" style={{width: 12, height: 12, marginRight: 6}}></i>
        Click the + to add an ROI
      </div>
    </aside>
  );
}
function statusColor(s) { return `var(--ts-${s})`; }
function statusPillStyle(s) {
  const c = `var(--ts-${s})`;
  return {
    background: `color-mix(in srgb, ${c} 16%, transparent)`,
    color: c,
    boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${c} 28%, transparent)`
  };
}
const alStyles = {
  wrap: { width: 280, background: 'var(--bg-1)', borderRight: '1px solid var(--border-1)', display: 'flex', flexDirection: 'column' },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px 6px' },
  title: { fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-1)' },
  count: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--fg-3)' },
  subheader: { display: 'flex', alignItems: 'center', padding: '0 16px 12px', fontSize: 11, color: 'var(--fg-3)', borderBottom: '1px solid var(--border-1)' },
  list: { flex: 1, overflow: 'auto', padding: 4 },
  item: { display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 12px', background: 'transparent', border: 0, borderLeft: '2px solid transparent', color: 'var(--fg-1)', textAlign: 'left', cursor: 'pointer', borderRadius: 3 },
  itemActive: { background: 'var(--bg-2)', borderLeftColor: 'var(--accent)' },
  dot: { width: 8, height: 8, borderRadius: 99, flexShrink: 0 },
  name: { fontSize: 13, fontWeight: 500, color: 'var(--fg-1)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  meta: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--fg-3)', marginTop: 2 },
  statusPill: { fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 7px', borderRadius: 99 },
  footerNote: { display: 'flex', alignItems: 'center', padding: '10px 16px', fontSize: 11, color: 'var(--fg-3)', borderTop: '1px solid var(--border-1)' },
};
window.AssetList = AssetList;
