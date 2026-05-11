import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

/* ── Animated QR scan SVG ─────────────────────────────────────────────────── */
function QRScanSVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 110, height: 110 }} aria-hidden="true">
      <defs>
        <clipPath id="qr-card-clip"><rect width="120" height="120" rx="8" /></clipPath>
      </defs>
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="hsl(237,46%,62%)" strokeWidth="2.5" fill="none" />
      <rect x="14" y="14" width="20" height="20" rx="2" fill="hsl(237,46%,62%)" opacity="0.8" />
      <rect x="80" y="8" width="32" height="32" rx="4" stroke="hsl(237,46%,62%)" strokeWidth="2.5" fill="none" />
      <rect x="86" y="14" width="20" height="20" rx="2" fill="hsl(237,46%,62%)" opacity="0.8" />
      <rect x="8" y="80" width="32" height="32" rx="4" stroke="hsl(237,46%,62%)" strokeWidth="2.5" fill="none" />
      <rect x="14" y="86" width="20" height="20" rx="2" fill="hsl(237,46%,62%)" opacity="0.8" />
      {[
        [48,8],[56,8],[64,8],[72,8],
        [48,16],[64,16],[72,16],
        [48,24],[56,24],[64,24],
        [8,48],[16,48],[24,48],[32,48],
        [8,56],[24,56],[32,56],
        [8,64],[16,64],[24,64],[32,64],
        [48,48],[64,48],[72,48],[80,48],[88,48],[96,48],
        [48,56],[56,56],[72,56],[88,56],
        [48,64],[64,64],[80,64],[96,64],
        [48,72],[56,72],[64,72],[72,72],[80,72],
        [48,80],[64,80],[88,80],[96,80],
        [48,88],[56,88],[72,88],[80,88],[96,88],
        [48,96],[56,96],[64,96],[80,96],
        [48,104],[72,104],[88,104],[96,104],
        [48,112],[56,112],[64,112],[72,112],[80,112],[96,112],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="6" height="6" rx="1"
          fill="hsl(237,40%,12%)" opacity="0.65" />
      ))}
      <rect x="8" width="104" height="3" rx="1.5"
        fill="hsl(237,46%,62%)"
        clipPath="url(#qr-card-clip)">
        <animate attributeName="y" from="-3" to="120" dur="2.2s" repeatCount="indefinite" calcMode="easeInOut" />
        <animate attributeName="opacity" values="0;0.75;0.75;0" keyTimes="0;0.08;0.92;1" dur="2.2s" repeatCount="indefinite" />
      </rect>
      {['M4 20 L4 4 L20 4', 'M100 4 L116 4 L116 20', 'M4 100 L4 116 L20 116', 'M116 100 L116 116 L100 116'].map((d, i) => (
        <path key={i} d={d} stroke="hsl(237,46%,62%)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
      ))}
    </svg>
  )
}

/* ── Animated shield SVG ─────────────────────────────────────────────────── */
function ShieldSVG() {
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 72, height: 80 }} aria-hidden="true">
      <ellipse cx="50" cy="55" rx="42" ry="46"
        stroke="hsl(237,46%,62%)" strokeWidth="1.5" fill="none">
        <animate attributeName="rx" values="40;44;40" dur="2.5s" repeatCount="indefinite" calcMode="easeInOut" />
        <animate attributeName="ry" values="44;48;44" dur="2.5s" repeatCount="indefinite" calcMode="easeInOut" />
        <animate attributeName="opacity" values="0.25;0.08;0.25" dur="2.5s" repeatCount="indefinite" calcMode="easeInOut" />
      </ellipse>
      <path d="M50 8 L84 22 L84 52 C84 72 68 86 50 94 C32 86 16 72 16 52 L16 22 Z"
        fill="hsl(237,46%,62%)" opacity="0.1" stroke="hsl(237,46%,62%)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M50 68 C50 68 34 57 34 46 C34 40 38.5 36 43.5 36 C46.5 36 49 37.5 50 39.5 C51 37.5 53.5 36 56.5 36 C61.5 36 66 40 66 46 C66 57 50 68 50 68Z"
        fill="hsl(350,82%,60%)" opacity="0.85" />
      <path d="M40 52 L47 59 L62 44"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Family SVG ──────────────────────────────────────────────────────────── */
function FamilySVG() {
  return (
    <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 90, height: 63 }} aria-hidden="true">
      <circle cx="20" cy="20" r="10" fill="hsl(237,46%,62%)" opacity="0.8" />
      <path d="M4 55 C4 40 36 40 36 55" stroke="hsl(237,46%,62%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="16" r="12" fill="hsl(350,82%,60%)" opacity="0.8" />
      <path d="M30 55 C30 38 70 38 70 55" stroke="hsl(350,82%,60%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="20" r="10" fill="hsl(160,76%,38%)" opacity="0.8" />
      <path d="M64 55 C64 40 96 40 96 55" stroke="hsl(160,76%,38%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 66 C50 66 44 61 44 57 C44 54.5 46 53 48 53 C49 53 50 53.8 50 53.8 C50 53.8 51 53 52 53 C54 53 56 54.5 56 57 C56 61 50 66 50 66Z"
        fill="hsl(350,82%,60%)" opacity="0.9" />
    </svg>
  )
}

export default function Features() {
  return (
    <section id="features" style={{ padding: '6rem 0', background: 'white', position: 'relative' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <motion.div className="section-label" {...fadeUp(0)}>Features</motion.div>
          <motion.h2 {...fadeUp(0.08)}
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', fontWeight: 800, marginTop: '0.75rem', maxWidth: '480px' }}>
            Everything you need to stay safe
          </motion.h2>
          <motion.p {...fadeUp(0.16)}
            style={{ marginTop: '0.75rem', color: 'hsl(230 12% 52%)', fontSize: '1.0625rem', maxWidth: '440px', lineHeight: 1.7 }}>
            One QR code. A lifetime of peace of mind.
          </motion.p>
        </div>

        {/* Featured card — QR */}
        <motion.div
          {...fadeUp(0.08)}
          whileHover={{ y: -4, boxShadow: '0 16px 48px hsl(237 46% 62% / 0.14)' }}
          style={{
            background: 'white',
            border: '1px solid hsl(230 15% 88%)',
            borderRadius: '1.5rem',
            padding: 'clamp(2rem, 4vw, 2.75rem)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
            flexWrap: 'wrap',
            cursor: 'default',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
        >
          {/* Accent top border */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'hsl(237 46% 62%)',
            borderRadius: '1.5rem 1.5rem 0 0',
          }} />

          {/* Background glow */}
          <div style={{
            position: 'absolute', top: '-20%', right: '-5%',
            width: '45%', height: '160%',
            background: 'radial-gradient(ellipse at center, hsl(237 46% 62% / 0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Text — left */}
          <div style={{ flex: 1, minWidth: 220, position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              background: 'hsl(237 46% 62% / 0.1)',
              borderRadius: '2rem', padding: '0.25rem 0.875rem',
              marginBottom: '1rem',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'hsl(237 46% 62%)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', color: 'hsl(237 46% 50%)', textTransform: 'uppercase' }}>
                Core feature
              </span>
            </div>
            <h3 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 700,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', letterSpacing: '-0.02em',
              lineHeight: 1.3, color: 'hsl(237 40% 12%)', marginBottom: '0.875rem',
            }}>
              Emergency info on a QR code
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'hsl(230 12% 48%)', lineHeight: 1.75, maxWidth: 440 }}>
              All your critical medical data, emergency contacts, and health information encoded in a single scannable QR tag — always on you, readable without a login.
            </p>

            {/* Pill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
              {['No app needed', 'Instant access', 'AES-256 encrypted'].map(tag => (
                <span key={tag} style={{
                  fontSize: '0.8125rem', fontWeight: 500,
                  color: 'hsl(237 40% 40%)',
                  background: 'hsl(237 46% 62% / 0.08)',
                  border: '1px solid hsl(237 46% 62% / 0.2)',
                  borderRadius: '2rem', padding: '0.25rem 0.75rem',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Illustration — right */}
          <div style={{
            flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 'clamp(120px, 18vw, 180px)', height: 'clamp(120px, 18vw, 180px)',
            borderRadius: '1.25rem',
            background: 'hsl(237 46% 62% / 0.06)',
            position: 'relative', zIndex: 1,
          }}>
            <QRScanSVG />
          </div>
        </motion.div>

        {/* Secondary cards row */}
        <div className="features-row-2">
          <SecondaryCard
            svg={<ShieldSVG />}
            title="Your safety representative"
            desc="WeSafe acts as your digital representative — storing emergency contacts and medical info so you never have to worry."
            accent="hsl(350 82% 60%)"
            accentBg="hsl(350 82% 60% / 0.06)"
            accentText="hsl(350 82% 45%)"
            label="Always available"
            delay={0.14}
          />
          <SecondaryCard
            svg={<FamilySVG />}
            title="Protect your whole family"
            desc="Child profiles, multi-user management, and family plans. One subscription covers everyone you love."
            accent="hsl(160 76% 38%)"
            accentBg="hsl(160 76% 38% / 0.06)"
            accentText="hsl(160 76% 28%)"
            label="Family plans"
            delay={0.22}
          />
        </div>

        {/* CTA Block */}
        <motion.div {...fadeUp(0.1)} style={{
          marginTop: '2.5rem',
          borderRadius: '1.5rem',
          background: 'hsl(237 40% 12%)',
          padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-40%', right: '-10%',
            width: '50%', height: '200%',
            background: 'radial-gradient(ellipse at center, hsl(237 46% 62% / 0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-50%', left: '20%',
            width: '30%', height: '150%',
            background: 'radial-gradient(ellipse at center, hsl(350 82% 60% / 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '480px' }}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.8rem', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'hsl(237 46% 72%)',
              marginBottom: '0.625rem',
            }}>
              One-time setup · Lifetime protection
            </p>
            <h3 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'hsl(0 0% 97%)',
              lineHeight: 1.2,
              margin: 0,
            }}>
              Your safety QR, ready in minutes.
            </h3>
            <p style={{
              marginTop: '0.75rem',
              fontSize: '0.9375rem',
              color: 'hsl(230 10% 58%)',
              lineHeight: 1.7,
            }}>
              AES-256 encrypted · Instant lock-screen access · Family plans available
            </p>
          </div>

          <div style={{
            position: 'relative', zIndex: 1,
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', gap: '0.875rem',
            flexShrink: 0,
          }}>
            <div>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '2.25rem', fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'hsl(0 0% 97%)',
              }}>₹1,075</span>
              <span style={{
                marginLeft: '0.5rem',
                fontSize: '0.875rem',
                color: 'hsl(230 10% 50%)',
                fontFamily: "'Outfit', sans-serif",
              }}>one-time</span>
            </div>
            <a
              href="https://web.wesafeqr.com"
              className="btn-primary"
              style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem', whiteSpace: 'nowrap' }}
            >
              Get WeSafe Now
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .features-row-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .features-row-2 {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}

function SecondaryCard({ svg, title, desc, accent, accentBg, accentText, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -4, boxShadow: `0 12px 36px ${accent.replace(')', ' / 0.14)')}` }}
      style={{
        background: 'white',
        border: '1px solid hsl(230 15% 88%)',
        borderRadius: '1.5rem',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        cursor: 'default',
      }}
    >
      {/* Accent top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: accent,
        borderRadius: '1.5rem 1.5rem 0 0',
      }} />

      {/* Background tint */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '55%', height: '55%',
        background: accentBg, borderRadius: '0 1.5rem 0 60%',
        pointerEvents: 'none',
      }} />

      {/* Illustration */}
      <div style={{
        display: 'flex', justifyContent: 'flex-end',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 90, height: 90,
          borderRadius: '1rem',
          background: accentBg,
        }}>
          {svg}
        </div>
      </div>

      {/* Label */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
          marginBottom: '0.625rem',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, display: 'inline-block' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em', color: accentText, textTransform: 'uppercase' }}>
            {label}
          </span>
        </div>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 700,
          fontSize: '1.125rem', letterSpacing: '-0.015em', lineHeight: 1.35,
          marginBottom: '0.625rem', color: 'hsl(237 40% 12%)',
        }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'hsl(230 12% 52%)', lineHeight: 1.7 }}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}
