const NAV_COLS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features',     href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing',      href: '#pricing' },
      { label: 'Open app',     href: 'https://web.wesafeqr.com', external: true },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Whitepaper',   href: 'https://wesafe.gitbook.io/wesafe-whitepaper/', external: true },
      { label: 'Get WeSafe',   href: 'https://web.wesafeqr.com/subscription/pack', external: true },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy policy',   href: 'https://web.wesafeqr.com/privacy', external: true },
      { label: 'Terms of service', href: 'https://web.wesafeqr.com/terms', external: true },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'hsl(237 40% 10%)',
      color: '#fff',
      padding: '0 0 2rem',
      position: 'relative',
    }}>
      {/* Subtle top gradient glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '180px',
        background: 'radial-gradient(ellipse 60% 100% at 50% 0%, hsl(237 46% 62% / 0.12) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      {/* Decorative footer-1 image */}
      <img
        src="/wesafe/footer-1.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', right: 0, bottom: 0,
          height: '70%', width: 'auto',
          objectFit: 'contain', objectPosition: 'right bottom',
          opacity: 0.055, pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      {/* Brand accent bar */}
      <div style={{
        height: 3,
        background: 'linear-gradient(90deg, hsl(237 46% 62%), hsl(350 82% 60%))',
        marginBottom: '4rem',
      }} />

      <div className="container">
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          marginBottom: '3rem',
        }} className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand-col">
            <img
              src="/wesafe/footer-logo.webp" alt="WeSafe"
              style={{ height: 36, width: 'auto', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              maxWidth: 280,
            }}>
              Emergency QR codes that store your medical information and emergency contacts.
              Safety, empowerment, and peace of mind — always on you.
            </p>
            <a href="https://web.wesafeqr.com"
              className="btn-primary"
              style={{ marginTop: '1.5rem', fontSize: '0.875rem', padding: '0.625rem 1.25rem', display: 'inline-flex' }}>
              Open WeSafe app
            </a>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.heading} className="footer-nav-col">
              <h4 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                fontSize: '0.75rem', letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: 'hsl(237 46% 72%)',
                marginBottom: '1.25rem',
              }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      style={{
                        fontSize: '0.9375rem',
                        color: 'rgba(255,255,255,0.75)',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'color 180ms',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#fff')}
                      onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.75)')}
                    >
                      {link.label}
                      {link.external && <span style={{ marginLeft: '0.25rem', opacity: 0.4, fontSize: '0.75rem' }}>↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, hsl(237 46% 62% / 0.3), transparent)', marginBottom: '1.75rem' }} />

        {/* Bottom bar */}
        <div className="footer-bottom-bar" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif" }}>
            © {year} WeSafe. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', fontFamily: "'Inter', sans-serif" }}>
            Made with care in India 🇮🇳
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 639px) {
          .footer-brand-col {
            text-align: center;
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .footer-brand-col p {
            max-width: 100% !important;
          }
          .footer-nav-col {
            text-align: center;
          }
          .footer-nav-col ul {
            align-items: center;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: center !important;
            text-align: center;
          }
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
