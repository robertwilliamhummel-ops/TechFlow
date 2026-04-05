'use client'

import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

interface SlideRevealProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up'
  delay?: number
  duration?: number
  distance?: number
  className?: string
  style?: CSSProperties
}

export default function SlideReveal({
  children,
  direction = 'left',
  delay = 0,
  duration = 700,
  distance = 60,
  className = '',
  style,
}: SlideRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const getTransform = () => {
      if (direction === 'left') return `translateX(-${distance}px)`
      if (direction === 'right') return `translateX(${distance}px)`
      return `translateY(${distance}px)`
    }

    el.style.opacity = '0'
    el.style.transform = getTransform()
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translate(0, 0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [direction, delay, duration, distance])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
