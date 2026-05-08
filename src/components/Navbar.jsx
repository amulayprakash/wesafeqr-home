import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Features',     href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing',      href: '#pricing' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
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
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

            {/* Logo */}
            <a href="#" aria-label="WeSafe home" style={{ flexShrink: 0, zIndex: 60, position: 'relative' }}>
              <img src="/logo.png" alt="WeSafe" style={{ height: '32px', width: 'auto' }} />
            </a>

            {/* Desktop links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-links">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href} scrolled={scrolled}>{l.label}</NavLink>
              ))}
            </div>

            {/* Right side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Whitepaper — desktop only */}
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

              {/* Open App — desktop only */}
              <a
                href="https://web.wesafeqr.com"
                className="btn-primary nav-cta-desktop"
                style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
              >
                Open app
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                className="nav-hamburger"
                style={{
                  background: menuOpen
                    ? 'hsl(0 0% 100% / 0.12)'
                    : scrolled ? 'hsl(237 40% 12% / 0.07)' : 'hsl(0 0% 100% / 0.1)',
                  border: menuOpen
                    ? '1px solid hsl(0 0% 100% / 0.2)'
                    : scrolled ? '1px solid hsl(237 40% 12% / 0.12)' : '1px solid hsl(0 0% 100% / 0.18)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  width: '40px', height: '40px',
                  display: 'none',
                  alignItems: 'center', justifyContent: 'center',
                  borderRadius: '0.625rem',
                  transition: 'background 200ms, border-color 200ms',
                  color: menuOpen ? 'hsl(0 0% 100%)' : scrolled ? 'hsl(237 40% 12%)' : 'hsl(0 0% 100% / 0.9)',
                  flexShrink: 0,
                  position: 'relative', zIndex: 60,
                }}
              >
                <HamburgerIcon open={menuOpen} />
              </button>
            </div>
          </nav>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .nav-links          { display: none !important; }
            .nav-whitepaper     { display: none !important; }
            .nav-cta-desktop    { display: none !important; }
            .nav-hamburger      { display: flex !important; }
          }
        `}</style>
      </header>

      {/* ── Full-screen mobile overlay ─────────────────────────────────────────── */}
      <div
        className="mobile-menu-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 49,
          background: 'hsl(230 32% 5% / 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
        }}
      >
        {/* Subtle gradient accent top */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '280px', pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, hsl(237 46% 62% / 0.18) 0%, transparent 70%)',
        }} />

        {/* Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: 'calc(68px + 2.5rem) 1.75rem 2.5rem',
          position: 'relative',
          zIndex: 1,
        }}>

          {/* Nav links */}
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '2.5rem' }}>
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(1.75rem, 8vw, 2.25rem)',
                  color: 'hsl(0 0% 95%)',
                  padding: '0.625rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid hsl(0 0% 100% / 0.07)',
                  textDecoration: 'none',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 320ms cubic-bezier(0.22,1,0.36,1) ${80 + i * 60}ms, transform 320ms cubic-bezier(0.22,1,0.36,1) ${80 + i * 60}ms, color 180ms`,
                }}
                onTouchStart={(e) => (e.currentTarget.style.color = 'hsl(237 46% 72%)')}
                onTouchEnd={(e) => (e.currentTarget.style.color = 'hsl(0 0% 95%)')}
              >
                {l.label}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="hsl(237 46% 62%)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7, flexShrink: 0 }}>
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </a>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 320ms cubic-bezier(0.22,1,0.36,1) ${80 + links.length * 60 + 60}ms, transform 320ms cubic-bezier(0.22,1,0.36,1) ${80 + links.length * 60 + 60}ms`,
          }}>
            <a
              href="https://web.wesafeqr.com"
              onClick={closeMenu}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: 'hsl(230 32% 5%)',
                background: 'linear-gradient(135deg, hsl(237 46% 72%), hsl(350 82% 68%))',
                padding: '1rem 1.5rem',
                borderRadius: '0.875rem',
                textAlign: 'center',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 24px hsl(237 46% 62% / 0.35)',
              }}
            >
              Open app →
            </a>
            <a
              href="https://wesafe.gitbook.io/wesafe-whitepaper/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: 'hsl(0 0% 100% / 0.55)',
                background: 'hsl(0 0% 100% / 0.06)',
                border: '1px solid hsl(0 0% 100% / 0.1)',
                padding: '0.9rem 1.5rem',
                borderRadius: '0.875rem',
                textAlign: 'center',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Read Whitepaper ↗
            </a>
          </div>

          {/* Footer note */}
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.75rem',
            color: 'hsl(0 0% 100% / 0.22)',
            textAlign: 'center',
            marginTop: '2rem',
            letterSpacing: '0.02em',
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 320ms ease ${80 + links.length * 60 + 160}ms`,
          }}>
            © 2025 WeSafe · All rights reserved
          </p>
        </div>
      </div>
    </>
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
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <line
        x1="3" y1="5" x2="17" y2="5"
        style={{ transformOrigin: '10px 5px', transition: 'transform 280ms cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(45deg) translateY(5px)' : 'none' }}
      />
      <line
        x1="3" y1="10" x2="17" y2="10"
        style={{ transition: 'opacity 180ms, transform 180ms', opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }}
      />
      <line
        x1="3" y1="15" x2="17" y2="15"
        style={{ transformOrigin: '10px 15px', transition: 'transform 280ms cubic-bezier(0.4,0,0.2,1)', transform: open ? 'rotate(-45deg) translateY(-5px)' : 'none' }}
      />
    </svg>
  )
}
