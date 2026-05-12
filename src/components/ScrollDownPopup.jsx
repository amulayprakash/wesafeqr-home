import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollDownPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show after a short delay so it doesn't flash immediately on load
    const showTimer = setTimeout(() => setVisible(true), 1800)

    const handleScroll = () => {
      if (window.scrollY > 40) setVisible(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(showTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 16, x: '-50%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            zIndex: 9999,
            display: 'none',
            pointerEvents: 'none',
          }}
          className="scroll-popup"
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(18, 18, 24, 0.82)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '999px',
            padding: '10px 20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          }}>
            <span style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '0.75rem',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Scroll to explore
            </span>
            {/* Bouncing arrow */}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
