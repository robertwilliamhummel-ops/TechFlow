'use client'

import { useState, ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="accordion-item">
      <button
        className={`accordion-header${open ? ' active' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <i className={`fas fa-chevron-down accordion-icon`} />
      </button>
      <div className={`accordion-content${open ? ' active' : ''}`}>
        {children}
      </div>
    </div>
  )
}
