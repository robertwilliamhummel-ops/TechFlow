import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'

import SlideReveal from '@/components/animations/SlideReveal'
import CursorGlow from '@/components/animations/CursorGlow'

export const metadata: Metadata = {
  title: 'IT Services Toronto | Business IT Support | TechFlow Solutions',
  description: 'Professional IT services for Toronto businesses. Network setup, cloud hosting, managed IT support, workstation configuration, and cybersecurity solutions.',
  alternates: { canonical: 'https://techflowsolutions.ca/it-services' },
  openGraph: {
    title: 'IT Services Toronto | Business IT Support | TechFlow Solutions',
    description: 'Reliable, scalable technology support that keeps your operations running smoothly.',
    url: 'https://techflowsolutions.ca/it-services',
  },
}

const heroImages = [
  '/images/heroes/hero-it-1.png','/images/heroes/hero-it-2.png',
  '/images/heroes/hero-it-3.png','/images/heroes/hero-it-4.png',
  '/images/heroes/hero-it-5.png','/images/heroes/hero-it-6.png',
]

const services = [
  { icon:'fa-network-wired', title:'Network Setup & Security',        desc:'Professional network design, setup, and security for small businesses.', features:['Router & switch configuration','Wi-Fi setup & optimization','Firewall & security configuration','VPN setup for remote teams','Network monitoring'] },
  { icon:'fa-cloud',         title:'Cloud Hosting & Email Solutions', desc:'Microsoft 365, Google Workspace, and cloud hosting setup and migration.', features:['Microsoft 365 setup & migration','Google Workspace configuration','Business email setup','Cloud storage & file sharing','Domain & DNS management'] },
  { icon:'fa-headset',       title:'Managed IT Support',              desc:'Ongoing IT support and maintenance to keep your systems running smoothly.', features:['Remote & on-site support','Proactive system monitoring','Software updates & patching','User account management','Help desk support'] },
  { icon:'fa-database',      title:'Backup & Disaster Recovery',      desc:"Protect your business data with automated backups and a clear recovery plan.", features:['Automated backup solutions','Cloud backup configuration','Disaster recovery planning','Data restoration testing','Ransomware protection'] },
  { icon:'fa-laptop',        title:'Business Workstation Config',     desc:'New computer setup, software installation, and user migration.', features:['New PC & Mac setup','Software installation & licensing','Data migration from old systems','User profile configuration','Security hardening'] },
]

const clients = [
  { icon:'fa-store',       title:'Small Businesses',          desc:'Independent businesses that need reliable IT without a full-time IT department.' },
  { icon:'fa-briefcase',   title:'Professional Offices',      desc:'Law firms, accounting firms, and consultancies that depend on secure, reliable systems.' },
  { icon:'fa-shopping-bag',title:'Retail Stores',             desc:'Point-of-sale systems, payment processing, and network connectivity.' },
  { icon:'fa-home',        title:'Real Estate Teams',         desc:'Mobile-friendly setups, cloud access, and communication tools.' },
  { icon:'fa-tooth',       title:'Medical & Dental Clinics',  desc:'HIPAA-aware IT setup and reliable systems for healthcare providers.' },
  { icon:'fa-hard-hat',    title:'Trades & Service Companies',desc:'Field-friendly technology and mobile device management.' },
]

// Common Issues We Solve — restored from original
const issues = [
  { icon:'fa-envelope',           title:'Email Migrations & Configuration',           desc:'Microsoft 365 and Google Workspace setup, migration, and troubleshooting' },
  { icon:'fa-wifi',               title:'Network Connectivity & Performance Issues',  desc:'WiFi optimization, router configuration, and secure network design' },
  { icon:'fa-cloud',              title:'Cloud Access & Sync Problems',               desc:'OneDrive, SharePoint, Google Drive, and cloud application issues' },
  { icon:'fa-desktop',            title:'Workstation Setup & User Provisioning',      desc:'New employee onboarding, device configuration, and account setup' },
  { icon:'fa-shield-alt',         title:'Security Threats & Vulnerabilities',         desc:'Firewall setup, endpoint protection, and security audits' },
  { icon:'fa-exclamation-triangle',title:'Software Errors & Compatibility Issues',    desc:'Application crashes, licensing problems, and integration support' },
  { icon:'fa-lock',               title:'VPN & Remote Access Problems',               desc:'Secure remote access setup and troubleshooting for remote teams' },
  { icon:'fa-database',           title:'Backup Failures & Data Recovery Planning',   desc:'Cloud backup configuration, monitoring, and restoration support' },
  { icon:'fa-print',              title:'Printer & Device Integration',               desc:'Network printer setup, driver installation, and device connectivity' },
]

// How It Works — restored from original
const howItWorks = [
  { num:'1', icon:'fa-comments',      title:'Initial Consultation', desc:'Free consultation to assess your technology needs and challenges. We\'ll discuss your goals and recommend solutions.' },
  { num:'2', icon:'fa-file-alt',      title:'Custom Proposal',     desc:'Receive a detailed proposal outlining services, timeline, and transparent pricing tailored to your business.' },
  { num:'3', icon:'fa-cogs',          title:'Implementation',      desc:'I handle all setup, configuration, and migration with minimal disruption to your daily operations.' },
  { num:'4', icon:'fa-life-ring',     title:'Ongoing Support',     desc:'Continuous monitoring, maintenance, and support to keep your technology running smoothly.' },
]

export default function ITServicesPage() {
  return (
    <>
      <Hero sectionClass="hero-it-services" images={heroImages}>
        <div className="hero-content">
          <FadeUp duration={700}>
            <h1 className="hero-title">
              <span className="highlight">Professional IT Services</span>
              {' '}for Toronto Businesses
            </h1>
          </FadeUp>
          <FadeUp delay={400}><p className="hero-subtitle">Reliable, scalable technology support that keeps your operations running smoothly — with optional workflow automation for growing teams.</p></FadeUp>
          <FadeUp delay={600}>
            <div className="hero-cta">
              <Link href="/contact" className="btn-hero btn-hero-primary"><i className="fas fa-calendar-check" /> Request Consultation</Link>
              <a href="tel:+16475728341" className="btn-hero btn-hero-secondary"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
          </FadeUp>
        </div>
      </Hero>

      {/* Intro — second paragraph restored from original */}
      <section className="page-section page-section--dark">
        <div className="container" style={{ maxWidth:900, textAlign:'center' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', color:'#fff', marginBottom:'1.5rem' }}>Complete IT Solutions for Modern Businesses</h2>
            <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'1.1rem', lineHeight:1.8, marginBottom:'1rem' }}>
              TechFlow Solutions provides professional IT services designed for small to medium-sized businesses in Toronto and the GTA. From network setup and cloud migration to ongoing support and cybersecurity, I handle your technology so you can focus on growing your business.
            </p>
            <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'1.1rem', lineHeight:1.8 }}>
              Whether you need on-site support, remote assistance, or a complete IT infrastructure overhaul, I have the expertise to deliver reliable, scalable solutions.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Our IT Services */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header"><h2>Our IT Services</h2></div></FadeUp>
          <div className="services-grid">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 120}>
                <CursorGlow className="service-card">
                  <div className="service-icon float-icon"><i className={`fas ${s.icon}`} /></div>
                  <h3>{s.title}</h3><p>{s.desc}</p>
                  <ul className="service-features">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  <Link href="/contact" className="service-link">Learn More <i className="fas fa-arrow-right" /></Link>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues We Solve — restored from original */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Common Issues We Solve</h2>
            <p>From everyday tech frustrations to critical business problems, we handle it all with professional, efficient solutions.</p>
          </div></FadeUp>
          <div className="content-grid">
            {issues.map((issue, i) => (
              <FadeUp key={issue.title} delay={i * 90}>
                <CursorGlow className="content-card">
                  <div className="icon-box"><i className={`fas ${issue.icon}`} /></div>
                  <h3>{issue.title}</h3>
                  <p>{issue.desc}</p>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — restored from original */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header"><h2>How It Works</h2></div></FadeUp>
          <div className="steps-grid">
            {howItWorks.map((s, i) => (
              <SlideReveal key={s.num} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 90} duration={650}>
                <div className="step-card" style={{ opacity:1, transform:'none' }}>
                  <div className="step-number">{s.num}</div>
                  <h3>{s.title}</h3><p>{s.desc}</p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Automation upsell */}
      <section className="page-section page-section--dark">
        <div className="container" style={{ maxWidth:900 }}>
          <SlideReveal direction="left" duration={700}>
            <div style={{ background:'rgba(102,126,234,0.1)', border:'1px solid rgba(102,126,234,0.3)', borderRadius:24, padding:'3rem', textAlign:'center' }}>
              <h2 style={{ color:'#fff', marginBottom:'1rem' }}>Need More Than IT Support?</h2>
              <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'1.1rem', lineHeight:1.7, marginBottom:'2rem' }}>
                Many businesses that start with IT support also benefit from business automation. Custom invoicing systems, workflow tools, and client portals complement your IT infrastructure and save your team hours every week.
              </p>
              <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
                <Link href="/business-automation" className="btn btn-primary"><i className="fas fa-cogs" /> Explore Business Automation</Link>
                <Link href="/contact" className="btn btn-secondary"><i className="fas fa-comments" /> Discuss Your Needs</Link>
              </div>
            </div>
          </SlideReveal>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header"><h2>Who We Serve</h2></div></FadeUp>
          <div className="content-grid">
            {clients.map((c, i) => (
              <FadeUp key={c.title} delay={i * 100}>
                <CursorGlow className="content-card">
                  <div className="icon-box"><i className={`fas ${c.icon}`} /></div>
                  <h3>{c.title}</h3><p>{c.desc}</p>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area banner — restored from original */}
      <FadeUp>
        <section style={{ padding:'3rem 2rem', background:'linear-gradient(180deg,#1a1a2e 0%,#16213e 100%)', textAlign:'center' }}>
          <div className="container">
            <p style={{ fontSize:'1.2rem', color:'rgba(255,255,255,0.9)', margin:0 }}>
              <i className="fas fa-map-marker-alt" style={{ color:'#667eea', marginRight:'0.5rem' }} />
              <strong>Service Area:</strong> Proudly serving Toronto, Scarborough, North York, Markham, Vaughan, and the entire Greater Toronto Area (GTA)
            </p>
          </div>
        </section>
      </FadeUp>

      <section className="cta-section">
        <div className="container">
          <FadeUp><div className="cta-content">
            <h2>Ready to Get Your IT Under Control?</h2>
            <p>Let&apos;s discuss your IT challenges and create a plan that works for your business.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large"><i className="fas fa-envelope" /> Request IT Consultation</Link>
              <a href="tel:+16475728341" className="btn btn-outline btn-large"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
            <div className="cta-features">
              <div className="cta-feature"><i className="fas fa-shield-alt" /><span>Security First</span></div>
              <div className="cta-feature"><i className="fas fa-clock" /><span>Fast Response</span></div>
              <div className="cta-feature"><i className="fas fa-map-marker-alt" /><span>Serving GTA</span></div>
            </div>
          </div></FadeUp>
        </div>
      </section>
    </>
  )
}
