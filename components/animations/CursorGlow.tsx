'use client'

import { useRef, ReactNode, CSSProperties, MouseEvent } from 'react'

interface CursorGlowProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  glowColor?: string     // default purple matching brand
  glowSize?: number      // px radius, default 300
  glowOpacity?: number   // 0-1, default 0.15
}

export default function CursorGlow({
  children,
  className = '',
  style,
  glowColor = '102, 126, 234',   // matches --primary-purple RGB
  glowSize = 300,
  glowOpacity = 0.15,
}: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.background = `
      radial-gradient(
        ${glowSize}px circle at ${x}px ${y}px,
        rgba(${glowColor}, ${glowOpacity}),
        rgba(255, 255, 255, 0.05) 40%,
        rgba(255, 255, 255, 0.03)
      )
    `
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.background = 'rgba(255, 255, 255, 0.05)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        transition: 'background 0.1s ease',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
