/* global React, lucide */
const { useEffect } = React;

function FeatureTriad() {
  useEffect(() => { if (window.lucide) lucide.createIcons(); });
  const features = [
    { icon: 'eye', title: 'Visualize', body: 'Detect sub-micron motion and convert it to a level visible to the naked eye — on the video itself.' },
    { icon: 'ruler', title: 'Measure', body: 'Turn every pixel into a displacement sensor with accuracy that rivals contacting instruments.' },
    { icon: 'search', title: 'Troubleshoot', body: 'Filter data and visualize motion at specific frequencies to isolate the root cause of failures.' },
  ];
  return (
    <section style={ftStyles.wrap}>
      <div style={ftStyles.inner}>
        <div style={ftStyles.head}>
          <div className="rdi-eyebrow">How we measure motion</div>
          <h2 style={ftStyles.h}>The power of Motion Amplification<sup>®</sup></h2>
        </div>
        <div style={ftStyles.grid}>
          {features.map(f => (
            <article key={f.title} style={ftStyles.card}>
              <div style={ftStyles.iconBox}><i data-lucide={f.icon} style={{width: 22, height: 22, strokeWidth: 1.75, color: 'var(--accent)'}}></i></div>
              <h3 style={ftStyles.ct}>{f.title}</h3>
              <p style={ftStyles.cb}>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const ftStyles = {
  wrap: { background: 'var(--bg-0)', padding: '96px 32px' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  head: { maxWidth: 720, marginBottom: 56 },
  h: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 48, lineHeight: 1.08, letterSpacing: '0.005em', textTransform: 'uppercase', color: 'var(--fg-1)', margin: '16px 0 0' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 },
  card: { background: 'var(--bg-card)', border: '1px solid var(--border-2)', borderRadius: 14, padding: '32px 28px', transition: 'all 180ms' },
  iconBox: { width: 48, height: 48, borderRadius: 10, background: 'var(--accent-soft)', display: 'grid', placeItems: 'center', marginBottom: 22 },
  ct: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 26, textTransform: 'uppercase', letterSpacing: '0.01em', color: 'var(--fg-1)', margin: '0 0 10px' },
  cb: { fontSize: 15, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0 },
};
window.FeatureTriad = FeatureTriad;
