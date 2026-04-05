'use client'

import { useEffect, useRef, ReactNode, Children, cloneElement, isValidElement, CSSProperties } from 'react'

interface StaggerGridProps {
  children: ReactNode
  staggerDelay?: number   // ms between each child, default 100
  initialDelay?: number   // ms before first child, default 0
  distance?: number       // px to travel up, default 40
  duration?: number       // animation duration ms, default 600
  className?: string
  style?: CSSProperties
}

export default function StaggerGrid({
  children,
  staggerDelay = 100,
  initialDelay = 0,
  distance = 40,
  duration = 600,
  className = '',
  style,
}: StaggerGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = Array.from(container.children) as HTMLElement[]

    // Set initial hidden state on every direct child
    items.forEach((item, i) => {
      item.style.opacity = '0'
      item.style.transform = `translateY(${distance}px)`
      item.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`
      item.style.transitionDelay = `${initialDelay + i * staggerDelay}ms`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item) => {
            item.style.opacity = '1'
            item.style.transform = 'translateY(0)'
          })
          observer.unobserve(container)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [staggerDelay, initialDelay, distance, duration])

  return (
    <div ref={containerRef} className={className} style={style}>
      {children}
    </div>
  )
}
