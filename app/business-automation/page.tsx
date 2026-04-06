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
  { icon: 'fa-file-invoice-dollar', title: 'InvoicePro: Mobile-First Invoicing',  desc: 'A complete invoicing solution purpose-built for field service businesses. Built on React, Firebase, Stripe, and Cloud Run.', features: ['Mobile-first invoice creation','Automated payment reminders','Client management portal','Financial reporting dashboard','Stripe payment integration'] },
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
          <h1 className="hero-title">
            <span className="highlight">Business Automation Solutions</span>
            {' '}for Toronto Businesses
          </h1>
          <p className="hero-subtitle">Custom tools that streamline operations, reduce manual work, and scale faster — from mobile invoicing to workflow automation.</p>
          <div className="hero-cta">
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

      {/* Solutions */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header"><h2>Automation Solutions We Build</h2></div></FadeUp>
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
            <p>Let&apos;s discuss your specific automation needs and design a solution that works for you.</p>
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
