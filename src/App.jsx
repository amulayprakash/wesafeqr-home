import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Offerings from './components/Offerings'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import InteractiveBackground from './components/InteractiveBackground'

export default function App() {

  /* ── Smooth scroll with nav offset for anchor links ─────────────────────── */
  useEffect(() => {
    const NAV_HEIGHT = 76

    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
      window.scrollTo({ top, behavior: 'smooth' })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <InteractiveBackground />
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
    </div>
  )
}
