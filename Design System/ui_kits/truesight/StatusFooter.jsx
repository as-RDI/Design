/* global React */
function StatusFooter({ recording }) {
  return (
    <div style={sfStyles.wrap}>
      <div style={sfStyles.left}>
        <span style={sfStyles.item}><span style={{...sfStyles.dot, background: recording ? 'var(--accent)' : 'var(--fg-4)'}}/>{recording ? 'RECORDING' : 'Idle'}</span>
        <span style={sfStyles.item}>Camera · Iris MA-24</span>
        <span style={sfStyles.item}>1920 × 1080</span>
        <span style={sfStyles.item}>1400 FPS</span>
        <span style={sfStyles.item}>Lens · 50mm</span>
      </div>
      <div style={sfStyles.right}>
        <span style={sfStyles.item}>CPU 34%</span>
        <span style={sfStyles.item}>RAM 2.1 GB</span>
        <span style={sfStyles.item}>v5.2.1</span>
      </div>
    </div>
  );
}
const sfStyles = {
  wrap: { display: 'flex', justifyContent: 'space-between', padding: '0 14px', height: 26, alignItems: 'center', background: 'var(--bg-1)', borderTop: '1px solid var(--border-1)', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--fg-3)' },
  left: { display: 'flex', gap: 16 },
  right: { display: 'flex', gap: 16 },
  item: { display: 'flex', alignItems: 'center', gap: 6 },
  dot: { width: 6, height: 6, borderRadius: 99 },
};
window.StatusFooter = StatusFooter;
