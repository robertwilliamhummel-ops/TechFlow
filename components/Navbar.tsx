'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

const navLinks = [
  { href: '/', label: 'Home', icon: 'fa-house' },
  { href: '/it-services', label: 'IT Services', icon: 'fa-server' },
  { href: '/business-automation', label: 'Automation', icon: 'fa-cogs' },
  { href: '/website-design', label: 'Websites', icon: 'fa-globe' },
  { href: '/about', label: 'About', icon: 'fa-user' },
  { href: '/contact', label: 'Contact', icon: 'fa-envelope' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const backdropRef = useRef<HTMLDivElement>(null)
  const scrolled = useScrolled(60)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className="header"
        style={{
          padding: scrolled ? '0' : undefined,
          boxShadow: scrolled
            ? '0 4px 30px rgba(0,0,0,0.3)'
            : '0 1px 0 rgba(255,255,255,0.05)',
          transition: 'box-shadow 0.3s ease, background 0.3s ease',
          background: scrolled
            ? 'rgba(13,17,23,0.98)'
            : 'rgba(13,17,23,0.95)',
        }}
      >
        <nav className="navbar">
          <div
              className="nav-container"
              style={{
                height: scrolled ? '58px' : '70px',
                transition: 'height 0.3s ease',
              }}
            >
            <div className="nav-logo">
              <Link href="/">
                <i className="fas fa-microchip" />
                <span>TechFlow Solutions</span>
              </Link>
            </div>

            {/* Mobile backdrop */}
            <div
              ref={backdropRef}
              className={`mobile-menu-backdrop${menuOpen ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            />

            {/* Nav links */}
            <ul
              className={`nav-menu${menuOpen ? ' active' : ''}`}
              id="mobile-nav-menu"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((link, i) => (
                <li key={link.href} className="nav-item" style={{ '--item-index': i } as React.CSSProperties}>
                  <Link
                    href={link.href}
                    className={`nav-link${isActive(link.href) ? ' active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <i className={`fas ${link.icon}`} />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-menu-footer">
                <Link href="/contact#contact-form" className="mobile-cta-btn" onClick={() => setMenuOpen(false)}>
                  <i className="fas fa-calendar-check" /> Book Free Consultation
                </Link>
                <a href="tel:+16475728341" className="mobile-phone-link">
                  <i className="fas fa-phone" /> (647) 572-8341
                </a>
                <p className="mobile-tagline">IT Services · Automation · Websites</p>
              </li>
            </ul>

            {/* CTA button */}
            <div className="nav-emergency">
              <Link href="/contact#contact-form" className="emergency-btn">
                <i className="fas fa-envelope" />
                Free Consultation
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className={`hamburger${menuOpen ? ' active' : ''}`}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
