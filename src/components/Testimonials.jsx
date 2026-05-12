import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: 'WeSafe is a safety assurance for my entire family. The peace of mind it gives me knowing my parents have their emergency info always on them is priceless.',
    author: 'Priya S.',
    role: 'Parent of two · Bengaluru',
    avatar: '/wesafe/parent-avatar-1.webp',
    stars: 5,
    accent: 'hsl(237 46% 62%)',
  },
  {
    quote: 'My parents stay alone and I live in a different city. WeSafe is the perfect caretaker companion — I know first responders will have everything they need.',
    author: 'Arjun M.',
    role: 'Working professional · Mumbai',
    avatar: '/wesafe/parent-avatar-2.webp',
    stars: 5,
    accent: 'hsl(350 82% 60%)',
  },
  {
    quote: 'Simple to set up, works perfectly. My doctor was impressed that I had my full medical history accessible on a QR code. This should be standard for everyone.',
    author: 'Kavitha R.',
    role: 'Senior citizen · Chennai',
    avatar: null,
    stars: 5,
    accent: 'hsl(160 76% 38%)',
  },
]

const STATS = [
  { value: '1,000+', label: 'Families protected' },
  { value: '4,800+', label: 'QR codes active' },
  { value: '20+',    label: 'Languages' },
  { value: '< 5 min', label: 'Setup time' },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '0.2rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="hsl(38 88% 50%)" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function InitialsAvatar({ name, accent }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <div style={{
      width: 44, height: 44, borderRadius: '50%',
      background: `linear-gradient(135deg, ${accent}, hsl(350 82% 60%))`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Outfit', sans-serif", fontWeight: 700,
      fontSize: '1rem', color: 'white', flexShrink: 0,
    }}>
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '6rem 0', background: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '40%', height: '100%',
        background: 'hsl(237 46% 62% / 0.03)',
        clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', fontWeight: 800, marginTop: '0.75rem', maxWidth: '480px' }}
          >
            Trusted by families across India
          </motion.h2>
        </div>

        {/* Family hero image with gradient fade */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            marginBottom: '3rem',
            height: 'clamp(180px, 28vw, 320px)',
          }}
        >
          <img
            src="/wesafe/parent-family.webp"
            alt="WeSafe families across India"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 30%',
              display: 'block',
            }}
            loading="lazy"
          />
          {/* Gradient overlays */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 30%, white 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, hsl(237 40% 10% / 0.4) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          {/* Overlay text */}
          <div style={{
            position: 'absolute', bottom: '2rem', left: '2rem',
          }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 'clamp(1.1rem, 3vw, 1.75rem)',
              color: 'white',
              textShadow: '0 2px 12px hsl(237 40% 10% / 0.6)',
              letterSpacing: '-0.02em',
            }}>
              Trusted by 1,000+ families across India
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '4rem',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.author} t={t} delay={i * 0.12} />
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
          }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              style={{
                textAlign: 'center',
                background: 'hsl(230 22% 97%)',
                border: '1px solid hsl(230 15% 88%)',
                borderRadius: '1rem',
                padding: '1.25rem 1rem',
              }}
            >
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                fontSize: 'clamp(1.375rem, 3.5vw, 1.75rem)',
                letterSpacing: '-0.03em',
                color: 'hsl(237 46% 55%)',
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: '0.8125rem', color: 'hsl(230 12% 52%)',
                marginTop: '0.25rem', fontFamily: "'Outfit', sans-serif", fontWeight: 500,
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ t, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -4, boxShadow: '0 12px 36px hsl(237 40% 12% / 0.1)' }}
      style={{
        background: 'white',
        border: '1px solid hsl(230 15% 88%)',
        borderRadius: '1.25rem',
        padding: '1.75rem',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        boxShadow: '0 2px 12px hsl(237 40% 12% / 0.05)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent left border */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
        background: t.accent, borderRadius: '1.25rem 0 0 1.25rem',
      }} />

      <Stars count={t.stars} />

      {/* Large quote mark */}
      <div style={{
        fontFamily: 'Georgia, serif', fontSize: '3.5rem', lineHeight: 1,
        color: t.accent, opacity: 0.15, userSelect: 'none',
        marginTop: '-0.75rem', marginBottom: '-1.25rem',
      }}>
        "
      </div>

      <p style={{
        fontSize: '0.9375rem',
        color: 'hsl(237 40% 20%)',
        lineHeight: 1.75,
      }}>
        {t.quote}
      </p>

      {/* Author */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        marginTop: 'auto', paddingTop: '1rem',
        borderTop: '1px solid hsl(230 15% 92%)',
      }}>
        {t.avatar ? (
          <img
            src={t.avatar} alt={t.author}
            style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            loading="lazy"
          />
        ) : (
          <InitialsAvatar name={t.author} accent={t.accent} />
        )}
        <div>
          <div style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 600,
            fontSize: '0.9375rem', color: 'hsl(237 40% 12%)',
          }}>
            {t.author}
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'hsl(230 12% 52%)', marginTop: '0.125rem' }}>
            {t.role}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
