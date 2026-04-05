'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import FormSuccessBurst from '@/components/animations/FormSuccessBurst'

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

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [notif, setNotif] = useState<{ type: NotifType; msg: string }>({ type: null, msg: '' })
  const [burst, setBurst] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const validate = (): boolean => {
    const newErrors: FieldErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const formatPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '')
    const match = digits.match(/^(\d{3})(\d{3})(\d{4})$/)
    const formatted = match ? `(${match[1]}) ${match[2]}-${match[3]}` : e.target.value
    setFormData((prev) => ({ ...prev, phone: formatted }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)

    try {
      // EmailJS browser SDK loaded via Script tag in layout
      const emailjs = (window as any).emailjs
      if (!emailjs) throw new Error('EmailJS not loaded')

      emailjs.init('QPLcDCj74Fq0lTwK-')

      await emailjs.send('service_fpx3i2b', 'template_dwmz48t', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        serviceType: formData.serviceType || 'Not specified',
        message: formData.message,
        form_type: 'contact',
        submission_date: new Date().toLocaleString('en-CA'),
        to_email: 'rob@techflowsolutions.ca',
      })

      setNotif({ type: 'success', msg: "Message sent successfully! I'll get back to you soon." })
      setBurst(true)
      setTimeout(() => setBurst(false), 100) // reset so it can fire again if needed
      setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setNotif({
        type: 'error',
        msg: 'Sorry, there was an error sending your message. Please try calling (647) 572-8341 directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  const dismissNotif = () => setNotif({ type: null, msg: '' })

  return (
    <>
      <FormSuccessBurst trigger={burst} />
      {/* Notification */}
      {notif.type && (
        <>
          <div style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9999,
          }} onClick={dismissNotif} />
          <div className={`notification notification-${notif.type} show`}>
            <div className="notification-content">
              <span className="notification-message">{notif.msg}</span>
              <button className="notification-close" onClick={dismissNotif}>Got it!</button>
            </div>
          </div>
        </>
      )}

      <section id="contact-form" className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <div className="form-info">
              <h2>Send Me a Message</h2>
              <p>I respond quickly and personally to every message.</p>
            </div>

            <div className="contact-form-container">
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
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
                      required
                    />
                    {errors.name && <div className="field-error">{errors.name}</div>}
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
                      required
                    />
                    {errors.email && <div className="field-error">{errors.email}</div>}
                  </div>
                </div>

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
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.4rem', marginBottom: 0 }}>
                      Looking to automate invoicing, payments, or workflows? Select "Automation Consultation".
                    </p>
                  </div>
                </div>

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
                    required
                  />
                  {errors.message && <div className="field-error">{errors.message}</div>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-large"
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane" />
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
