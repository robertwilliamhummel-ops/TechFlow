'use client'

import { useState, useRef } from 'react'
import FormSuccessBurst from '@/components/animations/FormSuccessBurst'

// ─── Constants ────────────────────────────────────────────────────────────────
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

type NotifType = 'success' | 'error' | null

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  const [errors, setErrors]   = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [notif, setNotif]     = useState<{ type: NotifType; msg: string }>({ type: null, msg: '' })
  const [burst, setBurst]     = useState(false)
  const formRef               = useRef<HTMLFormElement>(null)

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const newErrors: FieldErrors = {}

    if (!formData.name.trim())
      newErrors.name = 'Full name is required'

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim())
      newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Field handlers ──────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear the field-level error as the user types
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const formatPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '')
    const match  = digits.match(/^(\d{3})(\d{3})(\d{4})$/)
    const formatted = match ? `(${match[1]}) ${match[2]}-${match[3]}` : e.target.value
    setFormData((prev) => ({ ...prev, phone: formatted }))
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name:        formData.name,
          email:       formData.email,
          phone:       formData.phone       || 'Not provided',
          serviceType: formData.serviceType || 'Not specified',
          message:     formData.message,
          _subject:    `New enquiry from ${formData.name} — TechFlow Solutions`,
        }),
      })

      if (response.ok) {
        setNotif({ type: 'success', msg: "Message sent successfully! I'll get back to you soon." })
        setBurst(true)
        setTimeout(() => setBurst(false), 100)
        setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
      } else {
        // Formspree returns structured JSON errors on 4xx
        const data = await response.json().catch(() => ({}))
        const serverMsg =
          Array.isArray(data?.errors)
            ? data.errors.map((err: { message: string }) => err.message).join(' ')
            : null
        throw new Error(serverMsg || `Server responded with status ${response.status}`)
      }
    } catch (err) {
      console.error('Formspree error:', err)
      setNotif({
        type: 'error',
        msg:  'Sorry, there was an error sending your message. Please try calling (647) 572-8341 directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  const dismissNotif = () => setNotif({ type: null, msg: '' })

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      <FormSuccessBurst trigger={burst} />

      {/* Notification overlay */}
      {notif.type && (
        <>
          <div
            role="presentation"
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999 }}
            onClick={dismissNotif}
          />
          <div
            role="alertdialog"
            aria-live="assertive"
            aria-modal="true"
            aria-label={notif.type === 'success' ? 'Message sent' : 'Submission error'}
            className={`notification notification-${notif.type} show`}
          >
            <div className="notification-content">
              <span className="notification-message">{notif.msg}</span>
              <button
                type="button"
                className="notification-close"
                onClick={dismissNotif}
                aria-label="Dismiss notification"
              >
                Got it!
              </button>
            </div>
          </div>
        </>
      )}

      {/* Contact form */}
      <section id="contact-form" className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <div className="form-info">
              <h2>Send Me a Message</h2>
              <p>I respond quickly and personally to every message.</p>
            </div>

            <div className="contact-form-container">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                {/* Row 1: Name + Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={formatPhone}
                      placeholder="(416) 555-0123"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceType">Service Needed</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="">Select service type</option>
                      <option value="automation-consultation">Request Automation Consultation</option>
                      <option value="it-services">IT Services Inquiry</option>
                      <option value="website-design">Website Design Inquiry</option>
                      <option value="general-inquiry">General Question</option>
                    </select>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '0.85rem',
                        marginTop: '0.4rem',
                        marginBottom: 0,
                      }}
                    >
                      Looking to automate invoicing, payments, or workflows? Select &ldquo;Automation
                      Consultation&rdquo;.
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
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

                {/* Submit */}
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
