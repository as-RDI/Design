/* global React */
function StatsBar() {
  const stats = [
    { n: '62+', l: 'Countries' }, { n: '38+', l: 'Industries served' },
    { n: '650+', l: 'Corporate clients' }, { n: '5,000+', l: 'Certified analysts' },
  ];
  return (
    <section style={sbStyles.wrap}>
      <div style={sbStyles.inner}>
        {stats.map((s, i) => (
          <div key={s.l} style={{...sbStyles.stat, borderLeft: i === 0 ? 'none' : '1px solid var(--border-2)'}}>
            <div style={sbStyles.n}>{s.n}</div>
            <div style={sbStyles.l}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
const sbStyles = {
  wrap: { background: 'var(--bg-1)', padding: '72px 32px', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' },
  stat: { padding: '8px 32px', textAlign: 'center' },
  n: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.015em' },
  l: { fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginTop: 14 },
};
window.StatsBar = StatsBar;
