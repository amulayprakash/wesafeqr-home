import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features',     href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing',      href: '#pricing' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
        background: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid hsl(230 15% 88% / 0.8)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 16px hsl(237 40% 12% / 0.06)' : 'none',
      }}
    >
      <div className="container">
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo */}
          <a href="#" aria-label="WeSafe home" style={{ flexShrink: 0 }}>
            <img src="/logo.png" alt="WeSafe" style={{ height: '34px', width: 'auto' }} />
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-links">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} scrolled={scrolled}>{l.label}</NavLink>
            ))}
          </div>

          {/* Right CTA group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="https://wesafe.gitbook.io/wesafe-whitepaper/"
              target="_blank"
              rel="noreferrer"
              className="nav-whitepaper"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                fontSize: '0.9rem',
                color: scrolled ? 'hsl(237 40% 12% / 0.55)' : 'hsl(0 0% 100% / 0.6)',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => (e.target.style.color = scrolled ? 'hsl(237 40% 12%)' : 'hsl(0 0% 100%)')}
              onMouseLeave={(e) => (e.target.style.color = scrolled ? 'hsl(237 40% 12% / 0.55)' : 'hsl(0 0% 100% / 0.6)')}
            >
              Whitepaper
            </a>
            <a
              href="https://web.wesafeqr.com"
              className="btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
            >
              Open app
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="nav-hamburger"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.375rem',
                color: scrolled ? 'hsl(237 40% 12%)' : 'hsl(0 0% 100% / 0.85)',
                display: 'none',
                borderRadius: '0.5rem',
                transition: 'background 180ms',
              }}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            style={{
              padding: '0.75rem 0 1.25rem',
              borderTop: '1px solid hsl(230 15% 88%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.125rem',
              animation: 'fade-up 0.2s ease-out both',
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'hsl(237 40% 12% / 0.75)',
                  padding: '0.75rem 0.5rem',
                  borderRadius: '0.5rem',
                  display: 'block',
                  transition: 'color 180ms, background 180ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'hsl(237 46% 62%)'
                  e.currentTarget.style.background = 'hsl(237 46% 62% / 0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'hsl(237 40% 12% / 0.75)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wesafe.gitbook.io/wesafe-whitepaper/"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: '1rem',
                color: 'hsl(237 46% 62%)',
                padding: '0.75rem 0.5rem',
                display: 'block',
              }}
            >
              Whitepaper ↗
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-links      { display: none !important; }
          .nav-whitepaper { display: none !important; }
          .nav-hamburger  { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

function NavLink({ href, children, scrolled }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 500,
        fontSize: '0.9375rem',
        color: scrolled ? 'hsl(237 40% 12% / 0.65)' : 'hsl(0 0% 100% / 0.65)',
        transition: 'color 200ms',
        position: 'relative',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? 'hsl(237 46% 62%)' : 'hsl(0 0% 100%)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? 'hsl(237 40% 12% / 0.65)' : 'hsl(0 0% 100% / 0.65)')}
    >
      {children}
    </a>
  )
}

function HamburgerIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      {open ? (
        <>
          <line x1="4" y1="4" x2="18" y2="18" />
          <line x1="18" y1="4" x2="4" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="19" y2="6"  />
          <line x1="3" y1="11" x2="19" y2="11" />
          <line x1="3" y1="16" x2="19" y2="16" />
        </>
      )}
    </svg>
  )
}
