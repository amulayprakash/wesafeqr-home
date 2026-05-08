import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 48
const MAX_CONNECT_DIST = 130
const MOUSE_ATTRACT_DIST = 180
const MOUSE_FORCE = 0.018

export default function InteractiveBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    /* ── Particle factory ── */
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1.8 + Math.random() * 2.2,
      // 80% periwinkle, 20% coral
      hue: Math.random() > 0.8 ? 350 : 237,
      sat: Math.random() > 0.8 ? 82 : 46,
      lit: Math.random() > 0.8 ? 60 : 62,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      /* Update particle positions */
      particles.forEach((p) => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < MOUSE_ATTRACT_DIST && dist > 1) {
          p.vx += (dx / dist) * MOUSE_FORCE
          p.vy += (dy / dist) * MOUSE_FORCE
        }

        p.vx *= 0.988
        p.vy *= 0.988
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx) }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx = -Math.abs(p.vx) }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy) }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy = -Math.abs(p.vy) }
      })

      /* Draw connection lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < MAX_CONNECT_DIST) {
            const alpha = (1 - dist / MAX_CONNECT_DIST) * 0.13
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `hsla(237,46%,62%,${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      /* Draw dots */
      particles.forEach((p) => {
        /* Glow ring for particles near cursor */
        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y)
        if (dist < MOUSE_ATTRACT_DIST) {
          const glow = (1 - dist / MOUSE_ATTRACT_DIST) * 0.18
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r + 4, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${p.hue},${p.sat}%,${p.lit}%,${glow})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue},${p.sat}%,${p.lit}%,0.22)`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9,
      }}
    />
  )
}
