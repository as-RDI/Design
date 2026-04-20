/* global React, lucide */
const { useEffect, useState } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (window.lucide) lucide.createIcons();
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{...navStyles.wrap, boxShadow: scrolled ? '0 1px 0 var(--border-2)' : 'none'}}>
      <div style={navStyles.inner}>
        <a href="#" style={navStyles.logo}>
          <img src={window.__resources.logoRdi} alt="RDI Technologies" height="36" />
        </a>
        <ul style={navStyles.menu}>
          {['Iris aiONE', 'Products', 'Industries', 'Services', 'Support'].map(l => (
            <li key={l}><a href="#" style={navStyles.link}>{l} <i data-lucide="chevron-down" style={{width: 12, height: 12, marginLeft: 2, strokeWidth: 2, opacity: 0.6}}></i></a></li>
          ))}
        </ul>
        <div style={navStyles.actions}>
          <a href="#" style={navStyles.linkAlt}>Login</a>
          <button className="rdi-btn">Contact</button>
        </div>
      </div>
    </header>
  );
}
const navStyles = {
  wrap: { position: 'sticky', top: 0, zIndex: 20, background: 'color-mix(in srgb, var(--bg-0) 88%, transparent)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-1)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', height: 'var(--nav-h)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' },
  logo: { display: 'flex', alignItems: 'center' },
  menu: { display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0 },
  link: { display: 'inline-flex', alignItems: 'center', padding: '10px 14px', fontSize: 14, fontWeight: 500, color: 'var(--fg-1)', textDecoration: 'none', borderRadius: 'var(--r-2)', transition: 'background 120ms' },
  linkAlt: { fontSize: 14, fontWeight: 500, color: 'var(--fg-2)', textDecoration: 'none', padding: '8px 12px' },
  actions: { display: 'flex', alignItems: 'center', gap: 12 },
};
window.Nav = Nav;
