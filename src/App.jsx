import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Offerings from './components/Offerings'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ScrollDownPopup from './components/ScrollDownPopup'

export default function App() {

  /* ── Ultra-smooth scroll with easeInOutQuart easing ─────────────────────── */
  useEffect(() => {
    const NAV_HEIGHT = 76

    function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
    }

    function smoothScrollTo(targetY, duration = 920) {
      const startY = window.scrollY
      const diff = targetY - startY
      if (Math.abs(diff) < 1) return
      let startTime = null
      let rafId = null

      function step(timestamp) {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        window.scrollTo(0, startY + diff * easeInOutQuart(progress))
        if (progress < 1) rafId = requestAnimationFrame(step)
      }

      rafId = requestAnimationFrame(step)
      return () => cancelAnimationFrame(rafId)
    }

    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
      smoothScrollTo(top)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
<Navbar />
      <main>
        <Hero />
        <Features />
        <Offerings />
        <HowItWorks />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      <ScrollDownPopup />
    </div>
  )
}
