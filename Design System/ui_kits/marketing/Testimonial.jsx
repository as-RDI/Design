/* global React */
function Testimonial() {
  return (
    <section style={tStyles.wrap}>
      <div style={tStyles.inner}>
        <div className="rdi-eyebrow" style={{color: 'var(--accent)'}}>Testimonials</div>
        <blockquote style={tStyles.q}>
          "The best part is I'm delivering actionable information back to my mechanical engineers.
          Before, they may never have done anything based on accelerometer measurements alone.
          Now, they can look at the video and say, this is what I can change to fix it."
        </blockquote>
        <div style={tStyles.by}>
          <div style={tStyles.name}>Ken L.</div>
          <div style={tStyles.role}>Hardware Test Engineer · Google, Inc.</div>
        </div>
      </div>
    </section>
  );
}
const tStyles = {
  wrap: { background: 'var(--bg-1)', padding: '96px 32px', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' },
  inner: { maxWidth: 860, margin: '0 auto', textAlign: 'center' },
  q: { fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500, fontSize: 36, lineHeight: 1.25, color: 'var(--fg-1)', margin: '24px 0 32px', letterSpacing: '0.005em' },
  by: { display: 'inline-block', borderTop: '1px solid var(--border-2)', paddingTop: 18 },
  name: { fontSize: 15, fontWeight: 600, color: 'var(--fg-1)' },
  role: { fontSize: 13, color: 'var(--fg-3)', marginTop: 4 },
};
window.Testimonial = Testimonial;
