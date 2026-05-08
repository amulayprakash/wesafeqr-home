import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Build your profile',
    desc: 'Create your account at web.wesafeqr.com. Fill in your medical info, blood group, allergies, and emergency contacts. Takes under 5 minutes.',
    href: 'https://web.wesafeqr.com',
    color: 'hsl(237 46% 62%)',
    bg: 'hsl(237 46% 62% / 0.08)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <line x1="14" y1="6" x2="20" y2="6" /><line x1="17" y1="3" x2="17" y2="9" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Get your QR tag',
    desc: 'Subscribe and receive your personalised WeSafe QR tag. Attach it to your keys, bag, or phone — so it\'s always with you.',
    href: 'https://web.wesafeqr.com/subscription/pack',
    color: 'hsl(350 82% 60%)',
    bg: 'hsl(350 82% 60% / 0.08)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Stay safe, always',
    desc: 'Anyone can scan your QR — even from your lock screen — to instantly access your critical info and contact your family in an emergency.',
    color: 'hsl(160 76% 38%)',
    bg: 'hsl(160 76% 38% / 0.08)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: '6rem 0', background: 'hsl(230 22% 97%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative phone watermark */}
      <div style={{
        position: 'absolute', right: '-60px', top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.04, pointerEvents: 'none', zIndex: 0,
      }}>
        <svg width="320" height="480" viewBox="0 0 80 120" fill="none">
          <rect x="4" y="4" width="72" height="112" rx="14" stroke="hsl(237,46%,62%)" strokeWidth="3" />
          <rect x="28" y="4" width="24" height="7" rx="3.5" fill="hsl(237,46%,62%)" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            How it works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', fontWeight: 800, marginTop: '0.75rem', maxWidth: '440px' }}
          >
            3 steps to start feeling safe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            style={{ marginTop: '0.75rem', color: 'hsl(230 12% 52%)', fontSize: '1.0625rem', maxWidth: '400px', lineHeight: 1.7 }}
          >
            Set up takes under 5 minutes. Your QR works immediately.
          </motion.p>
        </div>

        {/* Desktop: horizontal steps with SVG connector */}
        <div className="steps-desktop">
          <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <svg
              viewBox="0 0 900 4"
              style={{ width: '100%', height: 4, display: 'block' }}
              preserveAspectRatio="none"
            >
              <line x1="150" y1="2" x2="750" y2="2"
                stroke="hsl(230,15%,88%)"
                strokeWidth="2"
                strokeDasharray="600"
                strokeDashoffset="600"
              >
                <animate attributeName="stroke-dashoffset" from="600" to="0" dur="1.5s" fill="freeze" calcMode="easeOut" />
              </line>
              {[150, 450, 750].map((cx, i) => (
                <circle key={cx} cx={cx} cy="2" r="6" fill="white" stroke={STEPS[i].color.replace('hsl(', 'hsl(').replace(')', '')} strokeWidth="2" />
              ))}
            </svg>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} delay={i * 0.12} />
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="steps-mobile" style={{ display: 'none' }}>
          <div style={{ position: 'relative', paddingLeft: '3rem' }}>
            <div style={{
              position: 'absolute', left: '18px', top: '24px',
              bottom: '24px', width: '2px',
              background: 'linear-gradient(to bottom, hsl(237 46% 62%), hsl(350 82% 60%), hsl(160 76% 38%))',
              borderRadius: '1px', opacity: 0.3,
            }} />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                style={{ position: 'relative', marginBottom: i < STEPS.length - 1 ? '2.5rem' : 0 }}
              >
                <div style={{
                  position: 'absolute', left: '-2.625rem', top: '0.25rem',
                  width: '1.25rem', height: '1.25rem', borderRadius: '50%',
                  background: step.color, border: '3px solid white',
                  boxShadow: `0 0 0 3px ${step.bg}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }} />

                <div style={{
                  background: 'white', border: '1px solid hsl(230 15% 88%)',
                  borderRadius: '1rem', padding: '1.5rem',
                  boxShadow: '0 2px 12px hsl(237 40% 12% / 0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 40, height: 40, borderRadius: '0.625rem',
                      background: step.bg, color: step.color,
                    }}>
                      {step.icon}
                    </div>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: '1.75rem', color: 'hsl(230 15% 88%)',
                      letterSpacing: '-0.04em',
                    }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                    fontSize: '1.0625rem', letterSpacing: '-0.01em',
                    marginBottom: '0.5rem', color: 'hsl(237 40% 12%)',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'hsl(230 12% 52%)', lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                  {step.href && (
                    <a href={step.href} target="_blank" rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                        marginTop: '1rem', fontSize: '0.875rem',
                        fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                        color: step.color,
                        transition: 'gap 200ms ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.gap = '0.625rem')}
                      onMouseLeave={(e) => (e.currentTarget.style.gap = '0.375rem')}
                    >
                      Get started →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .steps-desktop { display: none !important; }
          .steps-mobile  { display: block !important; }
        }
      `}</style>
    </section>
  )
}

function StepCard({ step, delay }) {
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
        padding: '2rem',
        display: 'flex', flexDirection: 'column', gap: '1.25rem',
        boxShadow: '0 2px 12px hsl(237 40% 12% / 0.05)',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 52, height: 52, borderRadius: '0.875rem',
          background: step.bg, color: step.color,
          boxShadow: `0 4px 12px ${step.bg}`,
          flexShrink: 0,
        }}>
          {step.icon}
        </div>
        <span style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 800,
          fontSize: '3rem', lineHeight: 1,
          color: 'hsl(230 15% 92%)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
        }}>
          {step.number}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Outfit', sans-serif", fontWeight: 700,
        fontSize: '1.125rem', letterSpacing: '-0.015em', lineHeight: 1.3,
        color: 'hsl(237 40% 12%)',
      }}>
        {step.title}
      </h3>

      <p style={{ fontSize: '0.9375rem', color: 'hsl(230 12% 52%)', lineHeight: 1.75 }}>
        {step.desc}
      </p>

      {step.href && (
        <a href={step.href} target="_blank" rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
            marginTop: 'auto', fontSize: '0.875rem',
            fontFamily: "'Outfit', sans-serif", fontWeight: 600,
            color: step.color,
            transition: 'gap 200ms ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = '0.625rem')}
          onMouseLeave={(e) => (e.currentTarget.style.gap = '0.375rem')}
        >
          Get started
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      )}
    </motion.div>
  )
}
