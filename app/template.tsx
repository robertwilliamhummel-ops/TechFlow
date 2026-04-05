'use client'

import { ReactNode, useEffect, useRef } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Start invisible and slightly down
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    el.style.transition = 'none'

    // Next frame: start the transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 350ms ease, transform 350ms ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
  }, [])

  return <div ref={ref}>{children}</div>
}
