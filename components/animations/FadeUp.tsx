'use client'

import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface FadeUpProps {
  children: ReactNode
  delay?: number        // milliseconds, for staggering manually
  duration?: number     // ms, default 600
  distance?: number     // px to travel upward, default 40
  className?: string
  style?: CSSProperties
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 600,
  distance = 40,
  className = '',
  style,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Start state — invisible and shifted down
    el.style.opacity = '0'
    el.style.transform = `translateY(${distance}px)`
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, duration, distance])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
