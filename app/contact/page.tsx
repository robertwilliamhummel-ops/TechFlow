import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'

import CursorGlow from '@/components/animations/CursorGlow'
import SlideReveal from '@/components/animations/SlideReveal'
import ContactForm from '@/components/ContactForm'
import FAQItem from '@/components/FAQItem'

export const metadata: Metadata = {
  title: 'Contact TechFlow Solutions | Toronto IT Services & Business Automation — (647) 572-8341',
  description: 'Contact TechFlow Solutions for IT services, business automation, or website design in Toronto. Call (647) 572-8341 or send a message.',
  alternates: { canonical: 'https://techflowsolutions.ca/contact' },
  openGraph: {
    title: 'Contact TechFlow Solutions',
    description: 'Reach out for IT services, business automation, or professional website design.',
    url: 'https://techflowsolutions.ca/contact',
  },
}

const heroImages = [
  '/images/heroes/hero-contact-1.png',
  '/images/heroes/hero-contact-2.png',
  '/images/heroes/hero-contact-3.png',
]

// Original FAQ questions restored from contact.html
const faqs = [
  {
    q: 'How much do your IT services and automation projects cost?',
    a: 'It depends on the scope. IT support is available hourly or through a monthly managed plan — both are discussed during a free consultation with no obligation. Business automation projects are custom-scoped and typically start at $3,500, while website projects start at $799. The consultation is always free, and you\'ll receive a clear proposal before any work begins.',
  },
  {
    q: 'How quickly can you respond when something breaks?',
    a: 'I typically respond within 8 hours, often sooner. TechFlow Solutions operates on a project and scheduled support basis — I work evenings, weekends, and around my availability to deliver focused, quality work rather than rushed on-call responses. For businesses that need 24/7 emergency coverage, I\'ll always be upfront if a situation is outside what I can commit to.',
  },
  {
    q: 'Can you handle both IT support and business automation for my company?',
    a: 'Yes — and that combination is where TechFlow adds the most value. Many clients start with IT support to stabilize their systems, then move into automation to eliminate manual work like invoicing, client follow-ups, and workflow handoffs. Having one provider handle both means your technology and your custom tools are always built to work together.',
  },
  {
    q: 'What areas of the GTA do you serve, and do you offer remote support?',
    a: 'I serve Toronto and the full Greater Toronto Area including Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, and surrounding regions. Most IT issues and all automation work can be handled fully remotely through a secure, encrypted connection — meaning faster response times and no travel charges for your business.',
  },
  {
    q: 'Do you sign NDAs or confidentiality agreements?',
    a: 'Yes. I regularly work with law firms, accounting practices, medical offices, and other businesses that handle sensitive client data. NDAs and confidentiality agreements are standard for any engagement where required — just mention it during the consultation.',
  },
  {
    q: 'What does the process look like from first contact to getting started?',
    a: 'It starts with a free 15–20 minute consultation — no pressure, no sales pitch. I learn about your business, your challenges, and your goals. From there I provide a clear written proposal outlining the scope, timeline, and cost. Once approved, most IT projects begin within a few days and automation projects are kicked off with a detailed discovery session to map your exact workflow.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Hero sectionClass="hero-contact" images={heroImages}>
        <div className="hero-content">
          <h1 className="hero-title" style={{ animation: 'fadeInUp 0.7s ease both' }}>
            <span className="highlight">Contact</span> TechFlow Solutions
          </h1>
          <p className="hero-subtitle" style={{ animation: 'fadeInUp 0.7s ease 0.2s both' }}>Reach out for IT services, business automation, or professional website design</p>
          <div className="hero-cta-contact" style={{ animation: 'fadeInUp 0.65s ease 0.4s both' }}>
            <a href="tel:+16475728341" className="btn-hero btn-hero-primary"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            <a href="mailto:rob@techflowsolutions.ca" className="btn-hero btn-hero-secondary"><i className="fas fa-envelope" /> Email Me</a>
            <a href="#contact-form" className="btn-hero btn-hero-secondary"><i className="fas fa-message" /> Send a Message</a>
          </div>
        </div>
      </Hero>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Get in Touch</h2>
            <p>Choose the contact method that works best for you.</p>
          </div></FadeUp>
          <div className="contact-grid">
            <FadeUp delay={0}>
              <CursorGlow className="contact-card primary">
                <div className="contact-icon"><i className="fas fa-phone" /></div>
                <h3>Call Me</h3>
                <p>Speak directly with me about your IT, automation, or website needs</p>
                <div className="contact-details">
                  <p><strong>Phone:</strong> (647) 572-8341</p>
                  <p><strong>Availability:</strong> See schedule below</p>
                </div>
              </CursorGlow>
            </FadeUp>
            <FadeUp delay={120}>
              <CursorGlow className="contact-card">
                <div className="contact-icon"><i className="fas fa-envelope" /></div>
                <h3>Email Me</h3>
                <p>Send a detailed message and I&apos;ll get back to you promptly.</p>
                <div className="contact-details">
                  <p><strong>Email:</strong> <a href="mailto:rob@techflowsolutions.ca">rob@techflowsolutions.ca</a></p>
                </div>
              </CursorGlow>
            </FadeUp>
            <FadeUp delay={240}>
              <CursorGlow className="contact-card">
                <div className="contact-icon"><i className="fas fa-calendar-check" /></div>
                <h3>Send a Message</h3>
                <p>Use the contact form to request a quote, ask a question, or schedule a consultation</p>
                <div className="contact-details">
                  <p><strong>Benefits:</strong></p>
                  <p><i className="fas fa-check" /> Fast replies throughout the day</p>
                  <p><i className="fas fa-check" /> Free consultation available</p>
                  <p><i className="fas fa-check" /> No-obligation quotes</p>
                </div>
              </CursorGlow>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact Form — placed before map for faster conversion access */}
      <ContactForm />

      {/* Remote Support Banner */}
      <FadeUp>
        <section className="remote-support-section">
          <div className="container" style={{ maxWidth: 800 }}>
            <h3>Already working with TechFlow?</h3>
            <p>Start a remote support session for quick IT assistance</p>
            <Link href="/remote-support" className="btn btn-primary">
              <i className="fas fa-desktop" /> Go to Remote Support
            </Link>
          </div>
        </section>
      </FadeUp>

      {/* Service Area */}
      <section id="service-area" className="service-area-section">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Service Area</h2>
            <p>Professional IT services, business automation, and website design across the Greater Toronto Area</p>
          </div></FadeUp>
          <div className="service-area-content">
            <SlideReveal direction="left" duration={700}>
              <div className="area-map">
                <div className="map-container">
                  <div className="coverage-summary">
                    <div className="summary-card">
                      <i className="fas fa-map-marked-alt" />
                      <div><h4>Full GTA Coverage</h4><p>Serving businesses across Toronto, the GTA, and surrounding regions.</p></div>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57!2d-79.5181!3d43.7184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000"
                    width="100%" height="400"
                    style={{ border: 0, borderRadius: 12 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TechFlow Solutions Service Area — Greater Toronto Area"
                  />
                </div>
                <div className="business-hours-box">
                  <h3><i className="fas fa-clock" /> Business Hours</h3>
                  <p>Flexible scheduling to accommodate your business needs</p>
                  <div className="hours-schedule">
                    {[
                      { icon: 'fa-briefcase',     day: 'Monday – Friday',     hours: '9:00 AM – 5:00 PM',                      note: 'Business hours' },
                      { icon: 'fa-calendar-week', day: 'Saturday – Sunday',   hours: '8:00 AM – 8:00 PM',                      note: 'Weekend availability' },
                      { icon: 'fa-business-time', day: 'After-Hours Support', hours: 'Available for business-critical issues',  note: 'By appointment' },
                    ].map((row) => (
                      <div key={row.day} className="schedule-item">
                        <div><i className={`fas ${row.icon}`} /><span>{row.day}</span></div>
                        <div><div>{row.hours}</div><small>{row.note}</small></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideReveal>
            <SlideReveal direction="right" duration={700} delay={150}>
              <div className="area-details">
                <h3>Primary Service Areas</h3>
                <div className="cities-grid">
                  {[
                    { icon: 'fa-city',        name: 'Toronto Core', cities: ['Downtown Toronto','North York','Scarborough','Etobicoke'] },
                    { icon: 'fa-building',    name: 'West GTA',     cities: ['Mississauga','Brampton','Oakville','Burlington'] },
                    { icon: 'fa-map-pin',     name: 'North GTA',    cities: ['Markham','Richmond Hill','Vaughan','Newmarket'] },
                    { icon: 'fa-location-dot',name: 'East GTA',     cities: ['Pickering','Ajax','Whitby','Oshawa'] },
                  ].map((group) => (
                    <div key={group.name} className="city-group">
                      <h4><i className={`fas ${group.icon}`} /> {group.name}</h4>
                      <ul>{group.cities.map((c) => <li key={c}>{c}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* FAQ — original questions restored */}
      <section className="contact-faq">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about my services</p>
          </div></FadeUp>
          <FadeUp delay={200}>
            <div className="faq-grid">
              {faqs.map((f) => <FAQItem key={f.q} question={f.q} answer={f.a} />)}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
