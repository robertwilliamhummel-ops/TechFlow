'use client'

import { useEffect, useRef, ReactNode, ElementType } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  as?: ElementType
}

export default function AnimateOnScroll({
  children,
  className = '',
  style,
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any
  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  )
}
