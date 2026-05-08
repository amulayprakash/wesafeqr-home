import { motion } from 'framer-motion'

const OFFERINGS = [
  {
    img: '/offering-1.png',
    title: 'True peace of mind',
    desc: 'WeSafe provides you with a reliable representative in times of emergency. You can rest assured that you and your loved ones will receive the care they need — always.',
    tag: 'Peace of mind',
    color: 'hsl(237 46% 62%)',
    bg: 'hsl(237 46% 62% / 0.06)',
  },
  {
    img: '/offering-2.png',
    title: 'Empowers you to feel safe',
    desc: 'People should not worry about emergency medical response when in a dire situation. Download the app and let WeSafe represent you reliably in times of need.',
    tag: 'Empowerment',
    color: 'hsl(350 82% 60%)',
    bg: 'hsl(350 82% 60% / 0.06)',
  },
  {
    img: '/offering-3.png',
    title: 'Military-grade data security',
    desc: 'We take data security and privacy seriously. State-of-the-art encryption ensures your medical information stays protected — accessible only when it matters.',
    tag: 'Data security',
    color: 'hsl(160 76% 38%)',
    bg: 'hsl(160 76% 38% / 0.06)',
  },
]

export default function Offerings() {
  return (
    <section
      id="offerings"
      style={{ padding: '6rem 0', background: 'white', position: 'relative' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            className="section-label"
            style={{ justifyContent: 'center' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Offerings
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', fontWeight: 800, marginTop: '0.75rem' }}
          >
            What WeSafe gives you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            style={{
              marginTop: '0.75rem', color: 'hsl(230 12% 52%)',
              fontSize: '1.0625rem', maxWidth: '400px', margin: '0.75rem auto 0', lineHeight: 1.7,
            }}
          >
            Three pillars that make WeSafe the most trusted safety app in India.
          </motion.p>
        </div>

        {/* Zig-zag rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {OFFERINGS.map((o, i) => (
            <OfferingRow key={o.title} offering={o} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OfferingRow({ offering: o, index }) {
  const reversed = index % 2 === 1
  const imgX = reversed ? 60 : -60

  return (
    <div
      className="offering-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2.5rem',
        alignItems: 'center',
      }}
      data-reversed={reversed ? 'true' : 'false'}
    >
      {/* Image — slides in from left or right */}
      <motion.div
        className={reversed ? 'offering-img-right' : 'offering-img-left'}
        initial={{ opacity: 0, x: imgX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: o.bg,
          borderRadius: '1.5rem',
          padding: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '280px',
          position: 'relative',
          overflow: 'visible',
          order: reversed ? 2 : 1,
          border: `1px solid ${o.color.replace('hsl(', 'hsl(').replace(')', ' / 0.12)')}`,
        }}
      >
        <img
          src={o.img}
          alt={o.title}
          style={{
            maxHeight: 200, maxWidth: '100%', objectFit: 'contain',
            position: 'relative', zIndex: 1,
            filter: `drop-shadow(0 12px 28px ${o.color.replace('hsl(','hsl(').replace(')', ' / 0.25)')})`,
          }}
          loading="lazy"
        />
      </motion.div>

      {/* Text — slides up */}
      <motion.div
        style={{ order: reversed ? 1 : 2 }}
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      >
        <span style={{
          display: 'inline-block',
          background: o.bg,
          border: `1px solid ${o.color.replace('hsl(','hsl(').replace(')', ' / 0.2)')}`,
          borderRadius: '9999px',
          padding: '0.25rem 0.875rem',
          fontSize: '0.75rem',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: o.color,
          marginBottom: '1rem',
        }}>
          {o.tag}
        </span>

        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.375rem, 3.5vw, 2rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          marginBottom: '1rem',
          color: 'hsl(237 40% 12%)',
        }}>
          {o.title}
        </h3>

        <p style={{
          fontSize: '1rem',
          color: 'hsl(230 12% 52%)',
          lineHeight: 1.8,
          maxWidth: '460px',
        }}>
          {o.desc}
        </p>

        <a
          href="https://web.wesafeqr.com"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            marginTop: '1.5rem',
            fontFamily: "'Outfit', sans-serif", fontWeight: 600,
            fontSize: '0.9375rem',
            color: o.color,
            transition: 'gap 200ms ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = '0.75rem')}
          onMouseLeave={(e) => (e.currentTarget.style.gap = '0.5rem')}
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </motion.div>

      <style>{`
        @media (min-width: 768px) {
          .offering-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}
