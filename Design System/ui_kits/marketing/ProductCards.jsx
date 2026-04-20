/* global React */
function ProductCards() {
  const products = [
    { name: 'Iris M™', tag: 'Bench analysis', bullets: ['Live Motion Amplification®','Displacement measurement','Frequency-based filtering'] },
    { name: 'Iris MA™', tag: 'High-speed field', bullets: ['Up to 1,400 FPS in HD','Calibrated displacement','Portable field unit'] },
    { name: 'Iris CM™', tag: 'Continuous monitoring', bullets: ['Multi-camera sync','Threshold triggering','24/7 edge capture'] },
  ];
  return (
    <section style={pcStyles.wrap}>
      <div style={pcStyles.inner}>
        <div style={{marginBottom: 40}}>
          <div className="rdi-eyebrow">Products</div>
          <h2 style={pcStyles.h}>Vibration monitoring equipment</h2>
        </div>
        <div style={pcStyles.grid}>
          {products.map(p => (
            <article key={p.name} style={pcStyles.card}>
              <div style={pcStyles.imgPlaceholder}>
                <div style={pcStyles.mock}></div>
              </div>
              <div style={pcStyles.body}>
                <div style={pcStyles.tag}>{p.tag}</div>
                <h3 style={pcStyles.name}>{p.name}</h3>
                <ul style={pcStyles.ul}>
                  {p.bullets.map(b => <li key={b} style={pcStyles.li}><span style={pcStyles.tick}>—</span>{b}</li>)}
                </ul>
                <a href="#" style={pcStyles.more}>Learn more <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const pcStyles = {
  wrap: { background: 'var(--bg-0)', padding: '96px 32px' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  h: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 48, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '0.005em', color: 'var(--fg-1)', margin: '16px 0 0' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 },
  card: { background: 'var(--bg-card)', border: '1px solid var(--border-2)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  imgPlaceholder: { height: 200, background: 'linear-gradient(135deg, var(--bg-2) 0%, var(--bg-3) 100%)', display: 'grid', placeItems: 'center', borderBottom: '1px solid var(--border-2)' },
  mock: { width: '60%', height: '60%', background: 'var(--border-3)', borderRadius: 6, boxShadow: 'var(--shadow-2)' },
  body: { padding: 24 },
  tag: { fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)' },
  name: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 30, textTransform: 'uppercase', letterSpacing: '0.01em', color: 'var(--fg-1)', margin: '8px 0 14px' },
  ul: { listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 6 },
  li: { fontSize: 14, color: 'var(--fg-2)', display: 'flex', gap: 10, alignItems: 'flex-start' },
  tick: { color: 'var(--accent)', flexShrink: 0 },
  more: { fontSize: 13, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center', letterSpacing: '0.02em' },
};
window.ProductCards = ProductCards;
