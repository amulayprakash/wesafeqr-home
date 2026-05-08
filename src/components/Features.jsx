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
      style={{ width: 100, height: 100 }} aria-hidden="true">
      <defs>
        <clipPath id="qr-card-clip"><rect width="120" height="120" rx="8" /></clipPath>
      </defs>
      {/* QR finder — top-left */}
      <rect x="8" y="8" width="32" height="32" rx="4" stroke="hsl(237,46%,62%)" strokeWidth="2.5" fill="none" />
      <rect x="14" y="14" width="20" height="20" rx="2" fill="hsl(237,46%,62%)" opacity="0.8" />
      {/* QR finder — top-right */}
      <rect x="80" y="8" width="32" height="32" rx="4" stroke="hsl(237,46%,62%)" strokeWidth="2.5" fill="none" />
      <rect x="86" y="14" width="20" height="20" rx="2" fill="hsl(237,46%,62%)" opacity="0.8" />
      {/* QR finder — bottom-left */}
      <rect x="8" y="80" width="32" height="32" rx="4" stroke="hsl(237,46%,62%)" strokeWidth="2.5" fill="none" />
      <rect x="14" y="86" width="20" height="20" rx="2" fill="hsl(237,46%,62%)" opacity="0.8" />
      {/* Data modules */}
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
      {[
        ['M4 20 L4 4 L20 4', 'M100 4 L116 4 L116 20', 'M4 100 L4 116 L20 116', 'M116 100 L116 116 L100 116']
      ][0].map((d, i) => (
        <path key={i} d={d} stroke="hsl(237,46%,62%)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
      ))}
    </svg>
  )
}

/* ── Animated shield SVG ─────────────────────────────────────────────────── */
function ShieldSVG() {
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 80, height: 88 }} aria-hidden="true">
      <ellipse cx="50" cy="55" rx="42" ry="46"
        stroke="hsl(237,46%,62%)" strokeWidth="1.5" fill="none">
        <animate attributeName="rx" values="40;44;40" dur="2.5s" repeatCount="indefinite" calcMode="easeInOut" />
        <animate attributeName="ry" values="44;48;44" dur="2.5s" repeatCount="indefinite" calcMode="easeInOut" />
        <animate attributeName="opacity" values="0.25;0.08;0.25" dur="2.5s" repeatCount="indefinite" calcMode="easeInOut" />
      </ellipse>
      <ellipse cx="50" cy="55" rx="34" ry="38"
        stroke="hsl(237,46%,62%)" strokeWidth="1" fill="none">
        <animate attributeName="rx" values="32;36;32" dur="2.5s" begin="0.4s" repeatCount="indefinite" calcMode="easeInOut" />
        <animate attributeName="ry" values="36;40;36" dur="2.5s" begin="0.4s" repeatCount="indefinite" calcMode="easeInOut" />
        <animate attributeName="opacity" values="0.15;0.04;0.15" dur="2.5s" begin="0.4s" repeatCount="indefinite" calcMode="easeInOut" />
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

/* ── Lock-screen SVG ─────────────────────────────────────────────────────── */
function LockScreenSVG() {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 72, height: 90 }} aria-hidden="true">
      <rect x="4" y="4" width="72" height="92" rx="14" fill="hsl(237,46%,62%)" opacity="0.06" stroke="hsl(237,46%,62%)" strokeWidth="1.5" />
      <rect x="30" y="4" width="20" height="6" rx="3" fill="hsl(237,46%,62%)" opacity="0.3" />
      <text x="40" y="32" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="11" fontWeight="700" fill="hsl(237,40%,12%)" opacity="0.55">9:41</text>
      <rect x="28" y="46" width="24" height="20" rx="4" fill="hsl(237,46%,62%)" opacity="0.85" />
      <path d="M32 46 V40 A8 8 0 0 1 48 40 V46" stroke="hsl(237,46%,62%)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="40" cy="55" r="3" fill="white" opacity="0.9" />
      <text x="40" y="80" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="hsl(237,40%,12%)" opacity="0.45">Scan to access</text>
      <rect x="25" y="84" width="30" height="10" rx="3" fill="hsl(237,46%,62%)" opacity="0.15" />
      <rect x="27" y="86" width="6" height="6" rx="1" fill="hsl(237,46%,62%)" opacity="0.5" />
      <rect x="35" y="86" width="4" height="3" rx="0.5" fill="hsl(237,46%,62%)" opacity="0.4" />
      <rect x="35" y="90" width="4" height="2" rx="0.5" fill="hsl(237,46%,62%)" opacity="0.4" />
      <rect x="41" y="86" width="4" height="6" rx="1" fill="hsl(237,46%,62%)" opacity="0.5" />
      <rect x="47" y="86" width="6" height="6" rx="1" fill="hsl(237,46%,62%)" opacity="0.5" />
    </svg>
  )
}

/* ── Family SVG ──────────────────────────────────────────────────────────── */
function FamilySVG() {
  return (
    <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 100, height: 70 }} aria-hidden="true">
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

const FEATURES = [
  {
    id: 'qr',
    svg: <QRScanSVG />,
    title: 'Emergency info on a QR code',
    desc: 'All your critical medical data, emergency contacts, and health information encoded in a single scannable QR tag — always on you.',
    accent: 'hsl(237 46% 62%)',
    accentBg: 'hsl(237 46% 62% / 0.06)',
    large: true,
  },
  {
    id: 'lock',
    svg: <LockScreenSVG />,
    title: 'Lock-screen medical access',
    desc: 'First responders scan your QR directly from the lock screen. No PIN. Critical info always accessible when seconds count.',
    accent: 'hsl(197 84% 44%)',
    accentBg: 'hsl(197 84% 44% / 0.06)',
    large: false,
  },
  {
    id: 'shield',
    svg: <ShieldSVG />,
    title: 'Your safety representative',
    desc: 'WeSafe acts as your digital representative — storing emergency contacts and medical info so you never have to worry.',
    accent: 'hsl(350 82% 60%)',
    accentBg: 'hsl(350 82% 60% / 0.06)',
    large: false,
  },
  {
    id: 'family',
    svg: <FamilySVG />,
    title: 'Protect your whole family',
    desc: 'Child profiles, multi-user management, and family plans. One subscription covers everyone you love.',
    accent: 'hsl(160 76% 38%)',
    accentBg: 'hsl(160 76% 38% / 0.06)',
    large: true,
  },
]

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

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="bento-grid">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="bento-row-1">
            <BentoCard feature={FEATURES[0]} delay={0.08} />
            <BentoCard feature={FEATURES[1]} delay={0.18} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="bento-row-2">
            <BentoCard feature={FEATURES[2]} delay={0.08} />
            <BentoCard feature={FEATURES[3]} delay={0.18} />
          </div>
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
              href="https://web.wesafeqr.com/subscription/pack"
              className="btn-primary"
              style={{ fontSize: '0.9375rem', padding: '0.875rem 2rem', whiteSpace: 'nowrap' }}
            >
              Get WeSafe Now
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .bento-row-1 { grid-template-columns: 3fr 2fr !important; }
          .bento-row-2 { grid-template-columns: 2fr 3fr !important; }
        }
        @media (min-width: 1024px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function BentoCard({ feature: f, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -4, boxShadow: `0 8px 32px ${f.accent.replace('hsl(','hsl(').replace(')', ' / 0.15)')}` }}
      style={{
        background: 'white',
        border: '1px solid hsl(230 15% 88%)',
        borderRadius: '1.25rem',
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
        background: f.accent,
        borderRadius: '1.25rem 1.25rem 0 0',
      }} />

      {/* Background tint */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '50%', height: '60%',
        background: f.accentBg, borderRadius: '0 1.25rem 0 50%',
        pointerEvents: 'none',
      }} />

      {/* SVG illustration */}
      <div style={{
        display: 'flex', justifyContent: 'flex-end',
        position: 'relative', zIndex: 1,
      }}>
        {f.svg}
      </div>

      {/* Text */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 700,
          fontSize: '1.125rem', letterSpacing: '-0.015em', lineHeight: 1.35,
          marginBottom: '0.625rem', color: 'hsl(237 40% 12%)',
        }}>
          {f.title}
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'hsl(230 12% 52%)', lineHeight: 1.7 }}>
          {f.desc}
        </p>
      </div>
    </motion.div>
  )
}
