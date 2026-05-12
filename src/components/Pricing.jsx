import { motion } from 'framer-motion'

const FEATURES_LIST = [
  'Physical WeSafe QR tag',
  'Personalised app profile',
  'Emergency contact storage',
  'Medical info & blood group',
  'Lock-screen scan access',
  'Child profile support',
  'Lost & Found QR',
  '20+ language support',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: '6rem 0', background: 'hsl(230 22% 97%)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Wave decoration at top */}
      <img
        src="/wesafe/wave-overlay-cta.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          width: '100%', height: 'auto',
          objectFit: 'cover', objectPosition: 'top',
          opacity: 0.18, pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      {/* Ellipse background blob */}
      <img
        src="/wesafe/ellipse.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', top: '10%', left: '50%',
          transform: 'translateX(-50%)',
          width: '70%', height: 'auto',
          opacity: 0.1, filter: 'blur(40px)',
          pointerEvents: 'none', userSelect: 'none',
        }}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div
            className="section-label"
            style={{ justifyContent: 'center' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', fontWeight: 800, marginTop: '0.75rem' }}
          >
            Simple, one-time pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            style={{
              marginTop: '0.75rem', color: 'hsl(230 12% 52%)',
              fontSize: '1.0625rem', maxWidth: '360px', margin: '0.75rem auto 0', lineHeight: 1.7,
            }}
          >
            Pay once. Protect your family forever. No hidden fees.
          </motion.p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          <div className="gradient-border card-shadow-lg" style={{ padding: '2px' }}>
            <div style={{
              background: 'white',
              borderRadius: '1.125rem',
              overflow: 'hidden',
            }}>
              {/* Top gradient strip */}
              <div style={{
                height: 4,
                background: 'linear-gradient(90deg, hsl(237 46% 62%), hsl(350 82% 60%))',
              }} />

              <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Header row */}
                <div className="pricing-header-row" style={{
                  display: 'flex', alignItems: 'flex-start',
                  justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem',
                }}>
                  <div className="pricing-title-block">
                    <span style={{
                      display: 'block',
                      fontSize: '0.75rem', fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'hsl(237 46% 62%)',
                      marginBottom: '0.5rem',
                    }}>
                      WeSafe QR Kit
                    </span>
                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)',
                      letterSpacing: '-0.02em', lineHeight: 1.2,
                      color: 'hsl(237 40% 12%)',
                      maxWidth: 300,
                    }}>
                      Your complete personal safety kit
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="pricing-price-block" style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'hsl(230 12% 70%)',
                      textDecoration: 'line-through',
                      marginBottom: '0.2rem',
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      ₹1,499
                    </div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
                      fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                      letterSpacing: '-0.03em', lineHeight: 1,
                      color: 'hsl(237 40% 12%)',
                    }}>
                      ₹1,075
                    </div>
                    <div style={{
                      display: 'inline-block',
                      background: 'hsl(160 76% 38% / 0.1)',
                      color: 'hsl(160 76% 34%)',
                      fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                      fontSize: '0.75rem', letterSpacing: '0.04em',
                      borderRadius: '9999px',
                      padding: '0.2rem 0.625rem',
                      marginTop: '0.375rem',
                    }}>
                      Save 28%
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="separator" />

                {/* Features grid */}
                <ul style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '0.75rem',
                  listStyle: 'none', padding: 0,
                }}>
                  {FEATURES_LIST.map((feat) => (
                    <li key={feat} style={{
                      display: 'flex', alignItems: 'center', gap: '0.625rem',
                      fontSize: '0.9375rem', color: 'hsl(237 40% 20%)',
                    }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: 20, height: 20, borderRadius: '50%',
                        background: 'hsl(160 76% 38% / 0.12)',
                        color: 'hsl(160 76% 34%)', flexShrink: 0,
                      }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pricing-cta-row" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <a href="https://web.wesafeqr.com"
                    className="btn-primary"
                    style={{ fontSize: '1.0625rem', padding: '0.9375rem 2rem' }}>
                    Get WeSafe now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(160 76% 38%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span style={{ fontSize: '0.8125rem', color: 'hsl(230 12% 52%)' }}>
                      Secure payment via Razorpay
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.8125rem', color: 'hsl(230 12% 65%)' }}>
                  Includes physical QR tag shipped to your address · Activate instantly in the app
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
