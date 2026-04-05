'use client'

import { useState, useRef } from 'react'
import FormSuccessBurst from '@/components/animations/FormSuccessBurst'

// ─── Config ───────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykblgzk'

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

interface FieldErrors {
  name?: string
  email?: string
  message?: string
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', serviceType: '', message: '',
  })
  const [errors, setErrors]           = useState<FieldErrors>({})
  const [loading, setLoading]         = useState(false)
  const [submitted, setSubmitted]     = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [burstCount, setBurstCount]   = useState(0)
  const burstOriginRef = useRef<{ x: number; y: number } | undefined>(undefined)

  // Ref used to measure origin before layout changes on submit
  const containerRef = useRef<HTMLDivElement>(null)

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const e: FieldErrors = {}
    if (!formData.name.trim())    e.name    = 'Full name is required'
    if (!formData.email.trim())   e.email   = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  e.email   = 'Please enter a valid email address'
    if (!formData.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  // ── Field handlers ──────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FieldErrors])
      setErrors(prev => ({ ...prev, [name]: undefined }))
    if (submitError) setSubmitError('')
  }

  const formatPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '')
    const m = digits.match(/^(\d{3})(\d{3})(\d{4})$/)
    setFormData(prev => ({ ...prev, phone: m ? `(${m[1]}) ${m[2]}-${m[3]}` : e.target.value }))
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setSubmitError('')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:        formData.name,
          email:       formData.email,
          phone:       formData.phone       || 'Not provided',
          serviceType: formData.serviceType || 'Not specified',
          message:     formData.message,
          _subject:    `New enquiry from ${formData.name} — TechFlow Solutions`,
        }),
      })

      if (res.ok) {
        // Capture origin NOW, before setSubmitted re-renders the layout
        const rect = containerRef.current?.getBoundingClientRect()
        burstOriginRef.current = rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : undefined
        setSubmitted(true)
        setBurstCount(prev => prev + 1)
      } else {
        const data = await res.json().catch(() => ({}))
        const msg = Array.isArray(data?.errors)
          ? data.errors.map((err: { message: string }) => err.message).join(' ')
          : `Server error (${res.status}) — please try again.`
        throw new Error(msg)
      }
    } catch (err) {
      console.error('Formspree error:', err)
      setSubmitError(
        'Something went wrong sending your message. Please call (647) 572-8341 directly.'
      )
    } finally {
      setLoading(false)
    }
  }

  // ── Reset back to blank form ─────────────────────────────────────────────────
  const handleReset = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
    setErrors({})
    setSubmitError('')
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Confetti — fires from the form container centre, z-index 99999,
          never overlaps the success message because the message is in the DOM
          below the canvas layer */}
      <FormSuccessBurst trigger={burstCount} origin={burstOriginRef.current} />

      <section id="contact-form" className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">

            {/* Header hides once submitted so the success state has full room */}
            {!submitted && (
              <div className="form-info">
                <h2>Send Me a Message</h2>
                <p>I respond quickly and personally to every message.</p>
              </div>
            )}

            {/* containerRef is what the confetti anchors its origin to */}
            <div className="contact-form-container" ref={containerRef}>

              {submitted ? (

                /* ── SUCCESS STATE ──────────────────────────────────────────── */
                <div
                  className="form-success-state"
                  role="status"
                  aria-live="polite"
                  aria-label="Message sent successfully"
                >
                  <div className="form-success-icon" aria-hidden="true">
                    <i className="fas fa-check" />
                  </div>

                  <h3>Message Sent!</h3>

                  <p>
                    Thanks for reaching out. I&rsquo;ll get back to you personally
                    — usually within a few hours during business hours.
                  </p>

                  <button
                    type="button"
                    className="form-success-reset"
                    onClick={handleReset}
                  >
                    Send another message
                  </button>
                </div>

              ) : (

                /* ── FORM ───────────────────────────────────────────────────── */
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">

                  {/* Row 1: Name + Email */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        autoComplete="name"
                        required
                      />
                      {errors.name && (
                        <div id="name-error" className="field-error" role="alert">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        autoComplete="email"
                        required
                      />
                      {errors.email && (
                        <div id="email-error" className="field-error" role="alert">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone + Service */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formData.phone} onChange={formatPhone}
                        placeholder="(416) 555-0123"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="serviceType">Service Needed</label>
                      <select
                        id="serviceType" name="serviceType"
                        value={formData.serviceType} onChange={handleChange}
                      >
                        <option value="">Select service type</option>
                        <option value="automation-consultation">Request Automation Consultation</option>
                        <option value="it-services">IT Services Inquiry</option>
                        <option value="website-design">Website Design Inquiry</option>
                        <option value="general-inquiry">General Question</option>
                      </select>
                      <p style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.85rem',
                        marginTop: '0.4rem',
                        marginBottom: 0,
                      }}>
                        Looking to automate invoicing, payments, or workflows?
                        Select &ldquo;Automation Consultation&rdquo;.
                      </p>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={formData.message} onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      placeholder="Tell me about your project or the support you need"
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      required
                    />
                    {errors.message && (
                      <div id="message-error" className="field-error" role="alert">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit + inline error */}
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-large"
                      disabled={loading}
                      aria-disabled={loading}
                      style={{ opacity: loading ? 0.7 : 1 }}
                    >
                      {loading ? (
                        <>
                          <i className="fas fa-spinner fa-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane" aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </button>

                    {submitError && (
                      <div className="form-submit-error" role="alert">
                        <i className="fas fa-exclamation-circle" aria-hidden="true" />
                        {submitError}
                      </div>
                    )}
                  </div>

                </form>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
