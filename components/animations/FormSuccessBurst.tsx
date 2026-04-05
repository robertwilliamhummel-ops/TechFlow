'use client'

import { useEffect, useRef } from 'react'

interface FormSuccessBurstProps {
  trigger: boolean   // set to true to fire, resets itself
}

const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#ffffff']
const PARTICLE_COUNT = 60

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  life: number
  maxLife: number
  rotation: number
  rotationSpeed: number
}

export default function FormSuccessBurst({ trigger }: FormSuccessBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    if (!trigger) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Full viewport canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Burst from center of screen
    const cx = canvas.width / 2
    const cy = canvas.height / 2

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = 4 + Math.random() * 8
      const life = 80 + Math.floor(Math.random() * 40)
      return {
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 4 + Math.random() * 6,
        life,
        maxLife: life,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      }
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let alive = false
      particles.forEach((p) => {
        if (p.life <= 0) return
        alive = true

        p.x += p.vx
        p.y += p.vy
        p.vy += 0.25        // gravity
        p.vx *= 0.98        // air resistance
        p.rotation += p.rotationSpeed
        p.life--

        const alpha = p.life / p.maxLife
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.fillStyle = p.color
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        // Draw a small rectangle (confetti shape)
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        ctx.restore()
      })

      if (alive) {
        animFrameRef.current = requestAnimationFrame(animate)
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    animFrameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [trigger])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',   // never blocks clicks
        zIndex: 99999,
      }}
    />
  )
}
