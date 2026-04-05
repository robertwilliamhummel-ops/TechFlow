'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' active' : ''}`}>
      <div className="faq-question" onClick={() => setOpen((v) => !v)} role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen((v) => !v)}>
        <span>{question}</span>
        <i className={`fas ${open ? 'fa-minus' : 'fa-plus'}`} />
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}
