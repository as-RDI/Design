/* global React */
function CTA() {
  return (<>
    <section style={ctaStyles.wrap}>
      <div style={ctaStyles.inner}>
        <div>
          <div className="rdi-eyebrow" style={{color: 'rgba(255,255,255,0.7)'}}>Get in touch</div>
          <h2 style={ctaStyles.h}>Let's visualize<br/>what you've been missing.</h2>
        </div>
        <div style={ctaStyles.right}>
          <p style={ctaStyles.p}>Request a demo and see Motion Amplification® on your equipment.</p>
          <button className="rdi-btn" style={{background: '#fff', color: '#1A1D22'}}>Request a demo</button>
        </div>
      </div>
    </section>
    <Footer/>
  </>);
}
function Footer() {
  return (
    <footer style={footStyles.wrap}>
      <div style={footStyles.inner}>
        <div style={footStyles.top}>
          <div>
            <img src={window.__resources.logoRdi} alt="RDI Technologies" height="42"/>
            <div style={footStyles.tagline}>Visualizing motion.<br/>Finding solutions.</div>
          </div>
          <div style={footStyles.cols}>
            {[
              ['Products', ['Iris aiONE', 'Iris M', 'Iris MA', 'Iris CM']],
              ['Services', ['Training', 'Certified Analysts', 'Case Studies']],
              ['Company', ['Our Story', 'Careers', 'Blog', 'Contact']],
            ].map(([h, items]) => (
              <div key={h}>
                <div style={footStyles.colH}>{h}</div>
                <ul style={footStyles.ul}>{items.map(i => <li key={i} style={footStyles.li}><a href="#" style={footStyles.a}>{i}</a></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div style={footStyles.bottom}>
          <span>© 2026 RDI Technologies. All rights reserved.</span>
          <span style={{fontFamily: "'JetBrains Mono', monospace"}}>10024 Investment Dr. Suite 150 · Knoxville, TN 37932</span>
        </div>
      </div>
    </footer>
  );
}
const ctaStyles = {
  wrap: { background: '#343A40', color: '#fff', padding: '96px 32px' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' },
  h: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '0.005em', margin: '14px 0 0', color: '#fff' },
  right: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 22 },
  p: { fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 },
};
const footStyles = {
  wrap: { background: 'var(--bg-1)', padding: '64px 32px 32px', borderTop: '1px solid var(--border-1)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto' },
  top: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, paddingBottom: 40, borderBottom: '1px solid var(--border-1)' },
  tagline: { fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, color: 'var(--fg-2)', marginTop: 16, lineHeight: 1.2 },
  cols: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 },
  colH: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 16 },
  ul: { listStyle: 'none', padding: 0, margin: 0 },
  li: { marginBottom: 10 },
  a: { color: 'var(--fg-1)', fontSize: 14, textDecoration: 'none' },
  bottom: { display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 12, color: 'var(--fg-3)' },
};
window.CTA = CTA;
window.Footer = Footer;
