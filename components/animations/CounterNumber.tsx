'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterNumberProps {
  target: number
  suffix?: string       // e.g. '+' or '%' or 'k'
  prefix?: string       // e.g. '$'
  duration?: number     // ms, default 2000
  className?: string
}

export default function CounterNumber({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: CounterNumberProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          observer.unobserve(el)

          const startTime = performance.now()
          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic — fast start, slow finish
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
