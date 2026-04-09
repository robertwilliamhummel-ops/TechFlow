import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'

import SlideReveal from '@/components/animations/SlideReveal'
import CursorGlow from '@/components/animations/CursorGlow'

export const metadata: Metadata = {
  title: 'Business Automation Solutions Toronto | TechFlow Solutions',
  description: 'Custom business automation for Toronto companies. Invoicing systems, workflow automation, payment processing, and client portals built to match your exact workflow.',
  alternates: { canonical: 'https://techflowsolutions.ca/business-automation' },
  openGraph: {
    title: 'Business Automation Solutions Toronto | TechFlow Solutions',
    description: 'Custom tools that streamline operations, reduce manual work, and scale faster.',
    url: 'https://techflowsolutions.ca/business-automation',
  },
}

const heroImages = [
  '/images/heroes/hero-automation-1.png',
  '/images/heroes/hero-automation-2.png',
  '/images/heroes/hero-automation-3.png',
  '/images/heroes/hero-automation-4.png',
  '/images/heroes/hero-automation-5.png',
]

const problems = [
  { icon: 'fa-clock',        title: 'Manual Processes Waste Time',   desc: 'Repetitive tasks like invoicing, data entry, and client follow-ups consume hours that could be spent growing your business.' },
  { icon: 'fa-puzzle-piece', title: "Generic Software Doesn't Fit",  desc: "Off-the-shelf tools force you to adapt your workflow instead of adapting to how you actually work." },
  { icon: 'fa-sliders-h',    title: 'Templates Require Compromise',  desc: "Pre-built solutions make you sacrifice functionality or efficiency to fit their limitations." },
  { icon: 'fa-tools',        title: 'You Need Custom Solutions',     desc: "Your business is unique. Your tools should be too. Custom automation gives you exactly what you need, nothing you don't." },
]

// Our Approach — restored from original
const approach = [
  { icon: 'fa-wrench',   title: 'Custom-Built Solutions',     desc: 'Every tool is built from scratch to match your exact workflow — no adapting your process to fit software.' },
  { icon: 'fa-code',     title: 'Modern Technology Stack',   desc: 'We use current, proven technology that scales with your business and stays maintainable long-term.' },
  { icon: 'fa-rocket',   title: 'Done-For-You Deployment',   desc: 'We handle everything from development to deployment and training — you just start using it.' },
  { icon: 'fa-headset',  title: 'Ongoing Support Included',  desc: 'Post-launch support is part of the service, not an extra charge. We stand behind what we build.' },
]

const solutions = [
  { icon: 'fa-diagram-project',     title: 'Custom Workflow Automation',          desc: 'Eliminate manual handoffs between systems and automate repetitive steps.',  features: ['Multi-system data sync','Automated notifications & alerts','Approval workflow automation','Document generation','Status tracking dashboards'] },
  { icon: 'fa-user-shield',         title: 'Authentication & User Systems',       desc: 'Secure login, user roles, and access control built into your custom tools.', features: ['Multi-user role management','Secure authentication','Client portal access','Session management','Audit trail logging'] },
  { icon: 'fa-credit-card',         title: 'Payment Integration',                 desc: 'Accept payments directly through your custom tools with Stripe and PayPal.',  features: ['Stripe & PayPal integration','Automated payment processing','Invoice payment tracking','Refund management','Financial reconciliation'] },
  { icon: 'fa-chart-bar',           title: 'Custom Dashboards',                   desc: 'Real-time visibility into your business metrics with custom dashboards.',     features: ['Real-time data visualization','KPI tracking & reporting','Multi-source data aggregation','Export & scheduling','Mobile-responsive design'] },
]

const steps = [
  { num: '1', title: 'Discovery Call',   desc: 'We discuss your business challenges, workflow pain points, and automation goals.' },
  { num: '2', title: 'Solution Design', desc: 'We map out a custom solution architecture tailored to your exact needs and budget.' },
  { num: '3', title: 'Development',     desc: 'We build your automation tools using modern, scalable technology.' },
  { num: '4', title: 'Deployment',      desc: 'We deploy, test, and train your team on the new system.' },
  { num: '5', title: 'Ongoing Support', desc: 'We provide continued support, updates, and enhancements as your business grows.' },
]

// Who We Serve — restored from original
const whoWeServe = [
  { icon: 'fa-hard-hat',       title: 'Contractors & Tradespeople' },
  { icon: 'fa-briefcase',      title: 'Consultants & Freelancers' },
  { icon: 'fa-concierge-bell', title: 'Service-Based Businesses' },
  { icon: 'fa-truck',          title: 'Mobile Service Providers' },
  { icon: 'fa-building',       title: 'Small-Medium Businesses' },
  { icon: 'fa-cogs',           title: 'Businesses with Custom Workflows' },
]

export default function BusinessAutomationPage() {
  return (
    <>
      <Hero sectionClass="hero-it-services" images={heroImages}>
        <div className="hero-content">
          <h1 className="hero-title" style={{ animation: 'fadeInUp 0.7s ease both' }}>
            <span className="highlight">Business Automation Solutions</span>
            {' '}for Toronto Businesses
          </h1>
          <p className="hero-subtitle" style={{ animation: 'fadeInUp 0.7s ease 0.2s both' }}>Custom tools that streamline operations, reduce manual work, and scale faster — from mobile invoicing to workflow automation.</p>
          <div className="hero-cta" style={{ animation: 'fadeInUp 0.65s ease 0.4s both' }}>
            <Link href="/contact" className="btn-hero btn-hero-primary"><i className="fas fa-calendar-check" /> Request Automation Consultation</Link>
            <a href="tel:+16475728341" className="btn-hero btn-hero-secondary"><i className="fas fa-phone" /> Call (647) 572-8341</a>
          </div>
        </div>
      </Hero>

      {/* What Is Automation */}
      <section className="page-section page-section--dark">
        <div className="container" style={{ maxWidth: 900, textAlign: 'center' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', color:'#fff', marginBottom:'1.5rem' }}>What is Business Automation?</h2>
            <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'1.1rem', lineHeight:1.8, marginBottom:'1.5rem' }}>
              Business automation means building custom tools that handle repetitive tasks, connect your systems, and streamline day-to-day operations. Instead of forcing your workflow into off-the-shelf software, we engineer solutions that fit exactly how your business works.
            </p>
            <div style={{ background:'rgba(102,126,234,0.1)', border:'1px solid rgba(102,126,234,0.3)', borderRadius:16, padding:'1.5rem 2rem', textAlign:'left' }}>
              <strong style={{ color:'#fff' }}>Business Automation includes:</strong>
              <p style={{ margin:'0.5rem 0 0', color:'rgba(255,255,255,0.8)' }}>
                Invoicing systems • Payment processing • Client portals • Workflow tools • Data synchronization • Process automation • Custom dashboards • Integration between systems
              </p>
            </div>
            <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.95rem', marginTop:'1.25rem' }}>
              Projects are custom-scoped and typically start at <strong style={{ color:'rgba(255,255,255,0.8)' }}>$3,500</strong>. Every engagement begins with a free consultation — no obligation.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Problems */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header"><h2>Common Problems We Solve</h2></div></FadeUp>
          <div className="content-grid">
            {problems.map((p, i) => (
              <FadeUp key={p.title} delay={i * 110}>
                <CursorGlow className="content-card">
                  <div className="icon-box"><i className={`fas ${p.icon}`} /></div>
                  <h3>{p.title}</h3><p>{p.desc}</p>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach — restored from original */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header"><h2>Our Approach to Business Automation</h2></div></FadeUp>
          <div className="content-grid">
            {approach.map((a, i) => (
              <FadeUp key={a.title} delay={i * 110}>
                <CursorGlow className="content-card">
                  <div className="icon-box"><i className={`fas ${a.icon}`} /></div>
                  <h3>{a.title}</h3><p>{a.desc}</p>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* InvoicePro — flagship product */}
      <section className="page-section page-section--darker">
        <div className="container" style={{ maxWidth: 950 }}>
          <SlideReveal direction="left" duration={700}>
            <div style={{ background: 'rgba(102,126,234,0.08)', border: '1px solid rgba(102,126,234,0.35)', borderRadius: 24, padding: 'clamp(2rem, 5vw, 3rem)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '1.5rem', right: 0, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', padding: '0.35rem 1.1rem 0.35rem 0.9rem', borderRadius: '4px 0 0 4px' }}>READY TO DEPLOY</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}><i className="fas fa-file-invoice-dollar" style={{ color: '#667eea', marginRight: '0.75rem' }} />InvoicePro — Invoicing for Service Businesses</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Our ready-to-deploy invoicing and quoting platform — built for contractors, trades, and service businesses. Professional invoicing, one-click quote-to-invoice conversion, recurring billing, client portal, and a service calculator pre-loaded with your rates. Configured with your branding and deployed on your domain.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                {['Invoicing & PDF generation', 'Quotes with one-click conversion', 'Recurring billing', 'Client portal', 'Customer CRM', 'Mobile friendly', 'Unlimited users', '$0 monthly fees'].map((f) => (
                  <span key={f}><i className="fas fa-check" style={{ color: '#667eea', marginRight: '0.4rem' }} />{f}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <span className="price-string" style={{ fontSize: '1.8rem', display: 'inline' }}>$999</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', marginLeft: '0.4rem' }}>with website</span>
                </div>
                <Link href="/invoicepro" className="btn btn-primary"><i className="fas fa-arrow-right" /> Learn More &amp; Try Demo</Link>
                <Link href="/contact" className="btn btn-outline">Get Started</Link>
              </div>
            </div>
          </SlideReveal>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header"><h2>Custom Automation Solutions</h2><p>Need something built from scratch? Custom projects start at $3,500.</p></div></FadeUp>
          <div className="services-grid">
            {solutions.map((s, i) => (
              <FadeUp key={s.title} delay={i * 120}>
                <CursorGlow className="service-card">
                  <div className="service-icon float-icon"><i className={`fas ${s.icon}`} /></div>
                  <h3>{s.title}</h3><p>{s.desc}</p>
                  <ul className="service-features">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  <Link href="/contact" className="service-link">Request Consultation <i className="fas fa-arrow-right" /></Link>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header"><h2>How It Works</h2></div></FadeUp>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <SlideReveal key={s.num} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 80} duration={600}>
                <div className="step-card" style={{ opacity:1, transform:'none' }}>
                  <div className="step-number">{s.num}</div>
                  <h3>{s.title}</h3><p>{s.desc}</p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve — restored from original */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Who We Serve</h2>
            <p>Business automation is ideal for service-based businesses, contractors, and companies with custom workflows that don&apos;t fit into off-the-shelf software.</p>
          </div></FadeUp>
          <div className="content-grid">
            {whoWeServe.map((w, i) => (
              <FadeUp key={w.title} delay={i * 100}>
                <CursorGlow className="content-card" style={{ textAlign:'center' }}>
                  <div className="icon-box" style={{ margin:'0 auto 1.25rem' }}><i className={`fas ${w.icon}`} /></div>
                  <h3>{w.title}</h3>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <FadeUp><div className="cta-content">
            <h2>Ready to Automate Your Business?</h2>
            <p>Let&apos;s discuss your specific automation needs and design a solution that works for you. Custom projects typically start at $3,500 — consultation is always free.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large"><i className="fas fa-calendar-check" /> Request Automation Consultation</Link>
              <a href="tel:+16475728341" className="btn btn-outline btn-large"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
          </div></FadeUp>
        </div>
      </section>
    </>
  )
}
