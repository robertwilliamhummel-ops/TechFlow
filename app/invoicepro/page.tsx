import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'

import SlideReveal from '@/components/animations/SlideReveal'
import CursorGlow from '@/components/animations/CursorGlow'

export const metadata: Metadata = {
  title: 'InvoicePro — Invoicing & Quote System for Service Businesses | TechFlow Solutions',
  description: 'Professional invoicing, quoting, and client management built for contractors, trades, and service businesses in Toronto. Mobile-friendly, recurring billing, one-click quote-to-invoice conversion. Launch Package from $999.',
  alternates: { canonical: 'https://techflowsolutions.ca/invoicepro' },
  openGraph: {
    title: 'InvoicePro — Invoicing & Quote System for Service Businesses',
    description: 'Stop chasing invoices in Excel. Professional invoicing, quoting, recurring billing, and a client portal — deployed and configured for your business.',
    url: 'https://techflowsolutions.ca/invoicepro',
  },
}

const heroImages = [
  '/images/heroes/hero-home-1.png',
  '/images/heroes/hero-home-2.png',
  '/images/heroes/hero-home-3.png',
]

const coreFeatures = [
  { icon: 'fa-file-invoice-dollar', title: 'Professional Invoicing', desc: 'Create and send polished invoices in seconds. Auto-numbered, branded with your business details, and delivered as PDF directly to your client\'s inbox.', highlights: ['Auto-incrementing invoice numbers', 'Branded PDF generation', 'Email invoices directly to clients', 'Track paid, unpaid, and cancelled'] },
  { icon: 'fa-file-signature', title: 'Quotes & Estimates', desc: 'Send professional quotes with expiration dates and terms. When approved, convert to an invoice with a single click — no re-entering data.', highlights: ['Quote-to-invoice in one click', 'Expiration date tracking', 'Notes and terms fields', 'Draft, Sent, Accepted, Declined status'] },
  { icon: 'fa-sync-alt', title: 'Recurring Invoices', desc: 'Set up monthly, quarterly, or yearly recurring invoices that generate and send automatically. Never forget to bill a retainer client again.', highlights: ['Monthly, quarterly, or yearly billing', 'Auto-send to clients on schedule', 'Pause and resume anytime', 'Tracks every generated invoice'] },
  { icon: 'fa-calculator', title: 'Service Calculator', desc: 'Pre-loaded with your services, rates, and materials. Add hourly work, line items, and expenses — totals calculate in real time including tax.', highlights: ['Your custom service catalog and rates', 'Material and expense line items', 'Recently-used autocomplete', 'Real-time subtotal, tax, and total'] },
  { icon: 'fa-users', title: 'Customer Management', desc: 'Built-in CRM that saves your client details. Select a customer from the dropdown and their info auto-fills across invoices and quotes.', highlights: ['Save client name, company, phone, email', 'Auto-fill on future invoices', 'Alphabetical dropdown selection', 'Update or remove clients anytime'] },
  { icon: 'fa-user-shield', title: 'Client Portal', desc: 'Your clients get their own login to view invoices, check payment status, and download PDFs. Or share a direct link — no login needed.', highlights: ['Client dashboard with payment summary', 'View invoices and quotes online', 'Download PDF invoices', 'Public shareable invoice links'] },
]

const whyNotSpreadsheets = [
  { icon: 'fa-clock', problem: 'Manually creating invoices in Word or Excel', solution: 'One-click invoicing with auto-filled client details and service rates' },
  { icon: 'fa-search', problem: 'Losing track of who paid and who didn\'t', solution: 'Dashboard shows outstanding, paid, and total revenue at a glance' },
  { icon: 'fa-copy', problem: 'Re-typing the same info from quotes into invoices', solution: 'Convert any quote to an invoice in one click' },
  { icon: 'fa-calendar-times', problem: 'Forgetting to send recurring bills', solution: 'Automatic recurring invoices on the schedule you set' },
  { icon: 'fa-mobile-alt', problem: 'Can\'t invoice from a job site', solution: 'Fully mobile — create and send invoices from your phone' },
  { icon: 'fa-dollar-sign', problem: 'No idea what\'s outstanding this month', solution: 'Real-time stats: total invoiced, collected, and owing' },
]

const includedInLaunch = [
  'Professional website (4+ pages, mobile responsive, SEO ready)',
  'InvoicePro portal configured with your branding and logo',
  'Your service catalog, rates, and materials pre-loaded',
  'Customer accounts set up and ready to use',
  'Client portal for your customers to view invoices',
  'Domain setup and hosting assistance',
  'Training walkthrough so you\'re confident from day one',
  '1 month of support included',
]

export default function InvoiceProPage() {
  return (
    <>
      <Hero sectionClass="hero-it-services" images={heroImages}>
        <div className="hero-content">
          <h1 className="hero-title" style={{ animation: 'fadeInUp 0.7s ease both' }}>
            <span className="highlight">InvoicePro</span>
            {' '}— Invoicing Built for Service Businesses
          </h1>
          <p className="hero-subtitle" style={{ animation: 'fadeInUp 0.7s ease 0.2s both' }}>
            Professional invoicing, quoting, recurring billing, and a client portal — configured for your business and ready to use. Stop chasing spreadsheets.
          </p>
          <div className="hero-cta" style={{ animation: 'fadeInUp 0.65s ease 0.4s both' }}>
            <a href="https://demo.techflowsolutions.ca" target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-primary">
              <i className="fas fa-external-link-alt" /> Try the Live Demo
            </a>
            <Link href="/contact" className="btn-hero btn-hero-secondary">
              <i className="fas fa-calendar-check" /> Get InvoicePro for Your Business
            </Link>
          </div>
        </div>
      </Hero>

      {/* What is InvoicePro */}
      <section className="page-section page-section--dark">
        <div className="container" style={{ maxWidth: 900, textAlign: 'center' }}>
          <FadeUp>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#fff', marginBottom: '1.5rem' }}>
              Your Invoicing System, Not a Subscription
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              InvoicePro isn&apos;t another monthly SaaS fee. It&apos;s a complete invoicing and quoting platform deployed under your brand, on your domain, configured with your services and rates. You own it. No per-user fees, no transaction cuts, no feature limits.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#667eea' }}>$0</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Monthly fees</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#667eea' }}>Unlimited</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Users &amp; invoices</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#667eea' }}>Your Brand</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Your logo &amp; colors</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pain Points — leads with emotion before logic */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Still Invoicing with Excel or Word?</h2>
            <p>Here&apos;s what changes when you switch to InvoicePro</p>
          </div></FadeUp>
          <div className="content-grid">
            {whyNotSpreadsheets.map((item, i) => (
              <FadeUp key={item.problem} delay={i * 100}>
                <CursorGlow className="content-card">
                  <div className="icon-box"><i className={`fas ${item.icon}`} /></div>
                  <h3 style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', fontWeight: 400, textDecoration: 'line-through', marginBottom: '0.5rem' }}>{item.problem}</h3>
                  <p style={{ color: '#fff', fontWeight: 500 }}>{item.solution}</p>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features — detailed proof after pain */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Everything You Need to Get Paid Faster</h2>
            <p>Built for trades, contractors, and service businesses who need invoicing that actually works</p>
          </div></FadeUp>
          <div className="services-grid">
            {coreFeatures.map((f, i) => (
              <FadeUp key={f.title} delay={i * 110}>
                <CursorGlow className="service-card">
                  <div className="service-icon float-icon"><i className={`fas ${f.icon}`} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <ul className="service-features">{f.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Try the Demo */}
      <section className="page-section page-section--darker">
        <div className="container" style={{ maxWidth: 900 }}>
          <SlideReveal direction="left" duration={700}>
            <div style={{ background: 'rgba(102,126,234,0.1)', border: '1px solid rgba(102,126,234,0.3)', borderRadius: 24, padding: '3rem', textAlign: 'center' }}>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Try It Yourself</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                Explore the full InvoicePro interface — create invoices, build quotes, manage customers, and see the service calculator in action. No sign-up required.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Demo mode — PDF generation and email delivery are disabled in the demo environment.
              </p>
              <a href="https://demo.techflowsolutions.ca" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                <i className="fas fa-external-link-alt" /> Open Live Demo
              </a>
            </div>
          </SlideReveal>
        </div>
      </section>

      {/* Launch Package Pricing */}
      <section className="page-section page-section--dark">
        <div className="container" style={{ maxWidth: 700 }}>
          <FadeUp>
            <div className="pricing-card-glass featured">
              <div className="featured-ribbon">LAUNCH PACKAGE</div>
              <div className="pricing-header-glass" style={{ textAlign: 'center' }}>
                <h3 style={{ paddingRight: 0 }}>Website + InvoicePro</h3>
                <div className="price-display" style={{ justifyContent: 'center' }}>
                  <span className="price-string" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>$999</span>
                  <span className="price-period">one-time</span>
                </div>
                <p>Professional website + full invoicing system, deployed and ready to use</p>
              </div>
              <ul className="pricing-features-list">
                {includedInLaunch.map((item) => (
                  <li key={item}><i className="fas fa-check" />{item}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-calendar-check" /> Get Started — Free Consultation
                </Link>
                <a href="tel:+16475728341" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-phone" /> Call (647) 572-8341
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Need More? */}
      <section className="page-section page-section--dark">
        <div className="container" style={{ maxWidth: 900, textAlign: 'center' }}>
          <FadeUp>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need More Than Invoicing?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              InvoicePro is our ready-to-deploy solution. If your business needs custom workflows, integrations, dashboards, or tools built from scratch — we do that too. Custom automation projects start at $3,500.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/business-automation" className="btn btn-secondary"><i className="fas fa-cogs" /> Explore Custom Automation</Link>
              <Link href="/contact" className="btn btn-outline"><i className="fas fa-comments" /> Discuss Your Needs</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <FadeUp><div className="cta-content">
            <h2>Ready to Stop Chasing Spreadsheets?</h2>
            <p>Get a professional website and InvoicePro configured for your business — $999, one-time, no monthly fees.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large"><i className="fas fa-calendar-check" /> Book Free Consultation</Link>
              <a href="https://demo.techflowsolutions.ca" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large"><i className="fas fa-external-link-alt" /> Try the Demo</a>
              <a href="tel:+16475728341" className="btn btn-outline btn-large"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
            <div className="cta-features">
              <div className="cta-feature"><i className="fas fa-dollar-sign" /><span>$0 Monthly Fees</span></div>
              <div className="cta-feature"><i className="fas fa-users" /><span>Unlimited Users</span></div>
              <div className="cta-feature"><i className="fas fa-mobile-alt" /><span>Mobile Friendly</span></div>
              <div className="cta-feature"><i className="fas fa-paint-brush" /><span>Your Brand</span></div>
            </div>
          </div></FadeUp>
        </div>
      </section>
    </>
  )
}
