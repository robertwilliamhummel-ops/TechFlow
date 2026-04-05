'use client'

import { useEffect, useRef } from 'react'

interface HeroProps {
  /** CSS class for the outer section: 'hero', 'hero-about', 'hero-contact', etc. */
  sectionClass?: string
  images: string[]
  children: React.ReactNode
}

export default function Hero({ sectionClass = 'hero', images, children }: HeroProps) {
  const indexRef = useRef(0)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (images.length < 2) return

    const interval = setInterval(() => {
      const imgs = imageRefs.current
      if (!imgs[indexRef.current]) return

      imgs[indexRef.current]?.classList.remove('active')
      indexRef.current = (indexRef.current + 1) % images.length
      imgs[indexRef.current]?.classList.add('active')
    }, 6000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className={sectionClass}>
      {/* Background image slideshow */}
      <div className="hero-background">
        {images.map((img, i) => (
          <div
            key={i}
            ref={(el) => { imageRefs.current[i] = el }}
            className={`hero-image${i === 0 ? ' active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15,12,41,0.85) 0%, rgba(48,43,99,0.85) 100%), url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-container">
        {children}
      </div>
    </section>
  )
}
