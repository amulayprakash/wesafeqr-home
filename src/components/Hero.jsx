import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const MARQUEE_ITEMS = [
  { icon: <LockIcon />,   label: 'AES-256 Encrypted' },
  { icon: <BoltIcon />,   label: 'Instant QR access' },
  { icon: <GlobeIcon />,  label: '20+ languages' },
  { icon: <UsersIcon />,  label: 'Family plans' },
  { icon: <ShieldIcon />, label: 'No PIN required' },
  { icon: <HeartIcon />,  label: 'Full medical profile' },
]

export default function Hero() {
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onReady = () => setVideoLoaded(true)
    v.addEventListener('canplay', onReady)
    return () => v.removeEventListener('canplay', onReady)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        overflow: 'hidden',
        background: 'hsl(230 32% 8%)',
      }}
    >

      {/* ── Full-screen video ─────────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        preload="auto"
        x-webkit-airplay="allow"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 1.1s ease',
          display: 'block',
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Skeleton shimmer while loading */}
      {!videoLoaded && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'hsl(230 28% 10%)' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(90deg, transparent 0%, hsl(237 46% 62% / 0.07) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.8s ease-in-out infinite',
          }} />
        </div>
      )}

      {/* ── Gradient overlay — transparent top → dark bottom ─────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: [
          'linear-gradient(to bottom,',
          '  hsl(230 32% 6% / 0.18) 0%,',
          '  hsl(230 32% 6% / 0.06) 18%,',
          '  hsl(230 32% 6% / 0.35) 50%,',
          '  hsl(230 32% 6% / 0.82) 75%,',
          '  hsl(230 32% 6% / 0.97) 100%)',
        ].join(' '),
      }} />

      {/* ── Content — bottom anchored ─────────────────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 2,
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>

        <div className="container hero-container-pad">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              background: 'hsl(0 0% 100% / 0.09)',
              border: '1px solid hsl(0 0% 100% / 0.16)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '9999px',
              padding: '0.35rem 0.875rem',
              marginBottom: '1.25rem',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.8rem', fontWeight: 600,
              color: 'hsl(0 0% 88%)',
              letterSpacing: '0.035em',
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'hsl(160 76% 50%)',
              boxShadow: '0 0 8px hsl(160 76% 50% / 0.9)',
              animation: 'pulse-dot 2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            Your personal QR safety representative
          </motion.div>

          {/* ── Two-column bottom row: headline left · subtext+CTA right ── */}
          <div className="hero-bottom-row">

            {/* Headline */}
            <div className="hero-headline-col">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(2.6rem, 6.5vw, 5.25rem)',
                  fontWeight: 800, lineHeight: 1.02,
                  letterSpacing: '-0.045em',
                  color: 'hsl(0 0% 97%)',
                  margin: 0,
                  textShadow: '0 4px 24px hsl(230 32% 4% / 0.4)',
                }}
              >
                Safety,{' '}
                <span className="text-gradient">Empowerment</span>
                <br />and Peace of Mind
              </motion.h1>
            </div>

            {/* Subtext + CTAs */}
            <motion.div
              className="hero-cta-col"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{
                fontSize: '1rem',
                color: 'hsl(230 10% 66%)',
                lineHeight: 1.75,
                marginBottom: '1.625rem',
                maxWidth: '340px',
              }}>
                Scan the WeSafe QR to instantly access medical info and emergency
                contacts — no PIN required.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="#how-it-works"
                  className="btn-hero-glass"
                  style={{ fontSize: '0.9375rem', padding: '0.8rem 1.625rem' }}
                >
                  See how it works
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Animated marquee strip ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            borderTop: '1px solid hsl(0 0% 100% / 0.08)',
            background: 'hsl(230 32% 5% / 0.55)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            overflow: 'hidden',
            padding: '0.875rem 0',
          }}
        >
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="marquee-item">
                {item.icon}
                {item.label}
                <span className="marquee-sep" />
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(1.35); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Hero layout ── */
        .hero-container-pad {
          padding-bottom: clamp(1.5rem, 5vw, 3rem);
        }

        .hero-bottom-row {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .hero-bottom-row {
            flex-direction: row;
            align-items: flex-end;
            gap: clamp(2.5rem, 5vw, 5rem);
          }
          .hero-headline-col { flex: 1; }
          .hero-cta-col      { flex-shrink: 0; max-width: 360px; }
        }

        /* ── Mobile-specific hero fixes ── */
        @media (max-width: 640px) {
          .hero-cta-col p {
            font-size: 0.9375rem !important;
            max-width: 100% !important;
            margin-bottom: 1.25rem !important;
          }
          .btn-hero-glass {
            width: 100%;
            justify-content: center;
            font-size: 0.9375rem !important;
            padding: 0.875rem 1.25rem !important;
          }
        }

        /* ── Marquee ── */
        .marquee-track {
          display: flex !important;
          width: max-content !important;
          will-change: transform;
          animation-name: marquee !important;
          animation-duration: 35s !important;
          animation-timing-function: linear !important;
          animation-iteration-count: infinite !important;
          animation-play-state: running !important;
        }
        .marquee-track:hover {
          animation-play-state: paused !important;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0 2rem;
          white-space: nowrap;
          font-family: 'Outfit', sans-serif;
          font-size: 0.825rem;
          font-weight: 500;
          color: hsl(230 10% 60%);
          letter-spacing: 0.01em;
          transition: color 180ms;
        }
        .marquee-item:hover { color: hsl(230 10% 82%); }
        .marquee-sep {
          display: inline-block;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: hsl(237 46% 62% / 0.45);
          margin-left: 2rem;
        }

        /* ── Glass outline button ── */
        .btn-hero-glass {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: hsl(0 0% 100% / 0.08);
          color: hsl(0 0% 90%);
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          border-radius: 0.625rem;
          border: 1.5px solid hsl(0 0% 100% / 0.18);
          cursor: pointer;
          transition: background 200ms, border-color 200ms, transform 150ms;
          letter-spacing: -0.01em;
          white-space: nowrap;
          text-decoration: none;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .btn-hero-glass:hover {
          background: hsl(0 0% 100% / 0.14);
          border-color: hsl(0 0% 100% / 0.28);
          transform: translateY(-1px);
        }
        .btn-hero-glass:active { transform: scale(0.98); }
      `}</style>
    </section>
  )
}

/* ── Micro-icons ─────────────────────────────────────────────────────────────── */
function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="2" y="5.5" width="8" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 5.5V3.5a2 2 0 0 1 4 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
function BoltIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M7 1L2.5 6.5H6L5 11L9.5 5.5H6L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}
function GlobeIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 1.5C6 1.5 4 4 4 6s2 4.5 2 4.5M6 1.5C6 1.5 8 4 8 6s-2 4.5-2 4.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M1.5 6h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
function UsersIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="4.5" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 10c0-2 1.6-3 3.5-3S8 8 8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8.5 5a1.5 1.5 0 0 1 0 3M11 10c0-1.4-1-2.3-2.5-2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
function ShieldIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 1.5L2 3v3c0 2.5 1.8 4.4 4 5 2.2-.6 4-2.5 4-5V3L6 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M4.2 6L5.5 7.3 7.8 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function HeartIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 10S1.5 7 1.5 4a2.5 2.5 0 0 1 4.5-1.5A2.5 2.5 0 0 1 10.5 4C10.5 7 6 10 6 10Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}
