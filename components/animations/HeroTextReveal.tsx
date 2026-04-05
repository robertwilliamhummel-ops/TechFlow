'use client'

import { useEffect, useRef, CSSProperties } from 'react'

interface HeroTextRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  style?: CSSProperties
  wordDelay?: number    // ms between each word, default 80
  initialDelay?: number // ms before first word, default 200
}

export default function HeroTextReveal({
  text,
  as: Tag = 'h1',
  className = '',
  style,
  wordDelay = 80,
  initialDelay = 200,
}: HeroTextRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const words = el.querySelectorAll<HTMLSpanElement>('.hero-word')
    words.forEach((word, i) => {
      word.style.opacity = '0'
      word.style.transform = 'translateY(20px)'
      word.style.display = 'inline-block'
      word.style.transition = `opacity 500ms ease, transform 500ms ease`
      word.style.transitionDelay = `${initialDelay + i * wordDelay}ms`
    })

    // Small rAF to ensure styles are painted before triggering
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        words.forEach((word) => {
          word.style.opacity = '1'
          word.style.transform = 'translateY(0)'
        })
      })
    })
  }, [wordDelay, initialDelay])

  // Split text into word spans, preserve spacing
  const words = text.split(' ')
  const content = words.map((word, i) => (
    <span key={i} className="hero-word">
      {word}
      {i < words.length - 1 ? '\u00A0' : ''}
    </span>
  ))

  const Component = Tag as any
  return (
    <Component ref={ref} className={className} style={style}>
      {content}
    </Component>
  )
}
