'use client'

import { useEffect, useRef, RefObject } from 'react'

interface FormSuccessBurstProps {
  trigger: boolean
  anchorRef?: RefObject<HTMLElement | null>
}

const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#ffffff']
const PARTICLE_COUNT = 70
const FADE_FRAMES    = 30   // canvas fades over the last N frames of particle life

interface Particle {
  x: number; y: number
  vx: number; vy: number
  color: string; size: number
  life: number; maxLife: number
  rotation: number; rotationSpeed: number
}

export default function FormSuccessBurst({ trigger, anchorRef }: FormSuccessBurstProps) {
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)
  const safetyRef    = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!trigger) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Match canvas to viewport
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    // Fire from the centre of the form container, fallback to viewport centre
    let cx = canvas.width  / 2
    let cy = canvas.height / 2
    if (anchorRef?.current) {
      const r = anchorRef.current.getBoundingClientRect()
      cx = r.left + r.width  / 2
      cy = r.top  + r.height / 2
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = 4 + Math.random() * 10
      const life  = 70 + Math.floor(Math.random() * 60)
      return {
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size:  4 + Math.random() * 7,
        life,
        maxLife: life,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
      }
    })

    // Reset canvas opacity in case previous run left it low
    canvas.style.transition = 'none'
    canvas.style.opacity    = '1'

    // Safety valve: force-hide after 5 s in case tab was backgrounded
    safetyRef.current = setTimeout(() => {
      cancelAnimationFrame(animFrameRef.current)
      canvas.style.transition = 'opacity 0.4s ease'
      canvas.style.opacity    = '0'
    }, 5000)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let alive   = false
      let minLife = Infinity

      for (const p of particles) {
        if (p.life <= 0) continue
        alive = true
        if (p.life < minLife) minLife = p.life

        p.x  += p.vx
        p.y  += p.vy
        p.vy += 0.25    // gravity
        p.vx *= 0.98    // air drag
        p.rotation += p.rotationSpeed
        p.life--

        ctx.save()
        ctx.globalAlpha = p.life / p.maxLife
        ctx.fillStyle   = p.color
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        ctx.restore()
      }

      if (alive) {
        // Smoothly fade the whole canvas as last particles wind down
        if (minLife <= FADE_FRAMES) {
          canvas.style.transition = 'none'
          canvas.style.opacity    = String((minLife / FADE_FRAMES).toFixed(3))
        }
        animFrameRef.current = requestAnimationFrame(animate)
      } else {
        // All done — clean up
        canvas.style.opacity = '0'
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (safetyRef.current) clearTimeout(safetyRef.current)
      }
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      if (safetyRef.current) clearTimeout(safetyRef.current)
    }
  }, [trigger, anchorRef])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',   // never blocks clicks
        zIndex:        99999,    // above everything, below nothing
      }}
    />
  )
}
