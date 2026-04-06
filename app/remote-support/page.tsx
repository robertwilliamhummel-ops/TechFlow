import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'
import StaggerGrid from '@/components/animations/StaggerGrid'
import SlideReveal from '@/components/animations/SlideReveal'
import CursorGlow from '@/components/animations/CursorGlow'
import FAQItem from '@/components/FAQItem'

export const metadata: Metadata = {
  title: 'Remote IT Support Toronto | Fast & Secure Assistance | TechFlow Solutions',
  description: 'Fast, secure remote IT support for Toronto businesses. Encrypted troubleshooting, software fixes, and technical assistance without the wait or travel fees.',
  alternates: { canonical: 'https://techflowsolutions.ca/remote-support' },
  openGraph: {
    title: 'Remote IT Support Toronto | Fast & Secure Assistance | TechFlow Solutions',
    description: 'Fast, secure remote IT support for Toronto businesses. Self-hosted, encrypted troubleshooting and technical assistance without the wait.',
    url: 'https://techflowsolutions.ca/remote-support',
  },
}

const DOWNLOAD_URL = 'https://github.com/robertwilliamhummel-ops/git-learning-lab/raw/main/TechFlowRemoteSupport/TechFlow-Remote-Support.exe'

const heroImages = [
  '/images/heroes/hero-remote-1.png',
  '/images/heroes/hero-remote-2.png',
]

const steps = [
  { num:'1', icon:'fa-download',    title:'Download TechFlow Remote Support', desc:'Click the download button to get TechFlow Remote Support — a secure, pre-configured remote access tool. No installation hassle, runs immediately, and connects directly to my secure server.' },
  { num:'2', icon:'fa-id-card',     title:'Share Your Connection ID',         desc:'Open TechFlow Remote Support and provide your unique connection ID when you call. This ID is temporary and session-specific for your security.' },
  { num:'3', icon:'fa-shield-alt',  title:'I Connect Securely',               desc:'I connect to your workstation using end-to-end encrypted, permission-based access. You control what I can see and do at all times.' },
  { num:'4', icon:'fa-check-circle',title:'Issue Resolved',                   desc:'I diagnose and resolve your IT issue quickly and professionally — no travel time, no commute charges, just expert support when you need it.' },
]

const securityFeatures = [
  { icon:'fa-lock',       title:'End-to-End Encrypted',      desc:'TLS 1.3 and RSA 2048 asymmetric key exchange. Every session is fully encrypted.' },
  { icon:'fa-server',     title:'Self-Hosted Infrastructure', desc:'Runs on my own secure server — your data never passes through third-party servers.' },
  { icon:'fa-user-check', title:'You Stay in Control',       desc:'You grant and revoke access at any time. Sessions are temporary and permission-based.' },
  { icon:'fa-file-shield',title:'Compliance Ready',          desc:'Technical security documentation available on request for compliance and auditing purposes.' },
]

const services = [
  { icon:'fa-envelope',      title:'Email & Workspace Issues',             desc:'Microsoft 365, Google Workspace, Outlook, Gmail — email setup, migration, sync problems, and access issues resolved fast.', items:['Email account configuration and migration','Microsoft 365 and Google Workspace administration','Outlook and Gmail troubleshooting','Calendar, contacts, and shared mailbox setup','Multi-device email sync issues'] },
  { icon:'fa-cloud',         title:'Cloud & Business Applications',        desc:'OneDrive, SharePoint, Google Drive, QuickBooks, CRM tools — cloud access, sync issues, and application errors fixed remotely.', items:['Cloud storage configuration and sync repair','SharePoint and OneDrive troubleshooting','Business software setup and licensing','QuickBooks and accounting software support','CRM and POS system configuration'] },
  { icon:'fa-desktop',       title:'Workstation Performance & Errors',     desc:'Slow computers, software crashes, update problems, and system errors — I diagnose and fix performance issues remotely.', items:['Software installation and updates','Performance optimization and cleanup','Error diagnosis and resolution','System configuration and settings','Driver and compatibility issues'] },
  { icon:'fa-network-wired', title:'Network & Security Configuration',     desc:'VPN setup, firewall rules, secure remote access, and network connectivity — I handle complex network configuration remotely.', items:['VPN configuration and troubleshooting','Network connectivity diagnosis','Firewall and security policy setup','Remote desktop and secure access','Wi-Fi and network adapter issues'] },
  { icon:'fa-user-plus',     title:'User Setup & Onboarding',              desc:'New employee workstation setup, account creation, permissions, and software deployment — I get new users up and running fast.', items:['User account creation and configuration','Permission and access management','Software deployment for new hires','Email and application setup','Training and onboarding support'] },
  { icon:'fa-headset',       title:'Ongoing IT Support & Training',        desc:'Technical guidance, software training, best practices, and troubleshooting — ongoing support to keep your team productive.', items:['Software training and guidance','IT best practices and recommendations','Troubleshooting and diagnostics','Technical documentation','Proactive monitoring and maintenance'] },
]


const faqs = [
  { q:'Is remote support secure?', a:'Yes — I use TechFlow Remote Support, which is built on MeshCentral — an enterprise-grade, open-source remote management platform hosted on my own secure server. All sessions use end-to-end encryption with TLS 1.3 and RSA 2048 asymmetric key exchange. Your data never passes through third-party servers, and you maintain full control over what I can access during each session. Technical security documentation is available on request for compliance purposes.' },
  { q:'Can you help with Microsoft 365 and Google Workspace?', a:"Absolutely — I specialize in Microsoft 365 and Google Workspace environments. This includes email setup and migration, SharePoint and OneDrive configuration, user management, licensing, security settings, and troubleshooting sync issues." },
  { q:'Do you support teams and multiple users?', a:'Yes — I support multi-user environments and distributed teams regularly. Whether your team works in-office, remotely, or hybrid, I can provide remote support to any workstation with an internet connection.' },
  { q:'How quickly can you respond to IT issues?', a:'Most remote support requests are handled within 2 hours during business hours (9AM–5PM weekdays). Business-critical issues receive priority response, often within 30–60 minutes. After-hours and weekend support is available at the priority rate of $175/hour.' },
  { q:'Do you offer monthly support plans?', a:"Yes — I offer flexible managed IT plans that include remote support, proactive monitoring, and priority access. Contact me to discuss a plan that fits your budget and requirements." },
  { q:'What payment methods do you accept?', a:"I accept e-transfer (preferred), all major credit cards, cash, and can provide invoices for business accounting purposes. Payment is due upon completion of service for hourly work, or monthly via automatic billing for managed IT clients." },
]

export default function RemoteSupportPage() {
  return (
    <>
      <Hero sectionClass="hero-remote" images={heroImages}>
        <div className="hero-content">
          <FadeUp duration={700}>
            <h1 className="hero-title">
              Professional <span className="highlight">Remote IT Support</span> for Toronto Businesses
            </h1>
          </FadeUp>
          <FadeUp delay={400} duration={650}>
            <p className="hero-subtitle">
              Fast, secure remote assistance for software issues, email problems, cloud access, workstation troubleshooting, and more — without the wait or cost of an on-site visit.
            </p>
          </FadeUp>
          <FadeUp delay={600} duration={650}>
            <p className="hero-subtitle" style={{ fontSize:'1.05rem', marginTop:'0.75rem', color:'rgba(255,255,255,0.8)' }}>
              I use TechFlow Remote Support — a secure, self-hosted remote access tool built on enterprise-grade infrastructure. Your data stays private, encrypted, and under your control at all times.
            </p>
          </FadeUp>
          <FadeUp delay={800} duration={650}>
            <div className="hero-cta">
              <a href={DOWNLOAD_URL} download className="btn btn-primary">
                <i className="fas fa-download" /> Download TechFlow Remote Support
              </a>
              <a href="tel:+16475728341" className="btn btn-secondary">
                <i className="fas fa-phone" /> Call (647) 572-8341
              </a>
            </div>
          </FadeUp>
        </div>
      </Hero>

      {/* How It Works */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>How Remote Support Works</h2>
            <p>Secure remote assistance in 4 simple steps</p>
          </div></FadeUp>
          <StaggerGrid className="steps-grid" staggerDelay={120} initialDelay={100}>
            {steps.map((s) => (
              <CursorGlow key={s.num} className="step-card" style={{ textAlign:'center' }}>
                <div className="step-number-rs" style={{ margin:'0 auto 1rem' }}>{s.num}</div>
                <div className="step-icon-rs"><i className={`fas ${s.icon}`} /></div>
                <h3>{s.title}</h3><p>{s.desc}</p>
              </CursorGlow>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Download Section — two column slide in */}
      <section className="page-section page-section--darker">
        <div className="download-content" style={{ padding:'0 2rem' }}>

          <SlideReveal direction="left" duration={700}>
            <div className="download-info">
              <h2>Built for Business Security</h2>
              <p>TechFlow Remote Support is not a generic tool — it&apos;s a purpose-built, self-hosted solution running on my own secure server. No third-party relay, no shared infrastructure, just a direct encrypted connection between you and me.</p>
              <div className="security-features">
                {securityFeatures.map((f) => (
                  <div key={f.title} className="security-feature">
                    <i className={`fas ${f.icon}`} />
                    <div className="security-feature-text">
                      <h4>{f.title}</h4><p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/it-services" className="service-link">View all IT Services <i className="fas fa-arrow-right" /></Link>
            </div>
          </SlideReveal>

          <SlideReveal direction="right" duration={700} delay={150}>
            <div className="download-card-modern">
              {/* Mock app window */}
              <div className="demo-window" style={{ marginBottom:'2rem' }}>
                <div className="demo-header">
                  <div className="demo-dots">
                    <div className="demo-dot red" /><div className="demo-dot yellow" /><div className="demo-dot green" />
                  </div>
                  <span className="demo-title">TechFlow Remote Support</span>
                </div>
                <div className="demo-body">
                  <div className="connection-status">
                    <i className="fas fa-circle" />
                    <span>Ready to Connect</span>
                  </div>
                  <div>
                    {[
                      { icon:'fa-lock',       text:'End-to-End Encrypted' },
                      { icon:'fa-server',     text:'Self-Hosted Server' },
                      { icon:'fa-user-check', text:'Permission-Based Access' },
                      { icon:'fa-clock',      text:'Session-Only Connection' },
                    ].map((f) => (
                      <div key={f.text} className="demo-feature">
                        <i className={`fas ${f.icon}`} /><span>{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3>TechFlow Remote Support</h3>
              <p className="subtitle">Secure · Self-Hosted · Encrypted</p>

              <a href={DOWNLOAD_URL} download className="btn-download-large">
                <i className="fas fa-download" /> Download Now (.exe — Windows)
              </a>

              <div className="download-note">
                <i className="fas fa-shield-alt" />
                <span>Free to download — only pay for the support session</span>
              </div>

              <div className="quick-steps">
                <h4>Quick-start in 3 steps:</h4>
                <ol>
                  <li>Download and open TechFlow Remote Support</li>
                  <li>Call (647) 572-8341 and share your ID</li>
                  <li>I connect and resolve your issue</li>
                </ol>
              </div>
            </div>
          </SlideReveal>
        </div>
      </section>

      {/* What I Can Fix */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>What I Can Fix Remotely</h2>
            <p>Most business IT issues can be resolved remotely — saving you time and money without an on-site visit</p>
          </div></FadeUp>
          <StaggerGrid className="services-grid" staggerDelay={110} initialDelay={100}>
            {services.map((s) => (
              <CursorGlow key={s.title} className="service-card rs-card">
                <div className="service-icon float-icon"><i className={`fas ${s.icon}`} /></div>
                <h3>{s.title}</h3><p>{s.desc}</p>
                <ul>{s.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </CursorGlow>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about remote IT support</p>
          </div></FadeUp>
          <FadeUp delay={150}>
            <div className="faq-grid" style={{ maxWidth:900, margin:'0 auto' }}>
              {faqs.map((f) => <FAQItem key={f.q} question={f.q} answer={f.a} />)}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <FadeUp><div className="cta-content">
            <h2>Ready to Get IT Support Without the Wait?</h2>
            <p>Download TechFlow Remote Support and connect with me in minutes. Secure, encrypted, and purpose-built for business IT assistance. No third-party servers — just fast professional support when you need it.</p>
            <div className="cta-buttons">
              <a href={DOWNLOAD_URL} download className="btn btn-primary btn-large" style={{ background:'#fff', color:'#667eea' }}>
                <i className="fas fa-download" /> Download TechFlow Remote Support
              </a>
              <a href="tel:+16475728341" className="btn btn-outline btn-large">
                <i className="fas fa-phone" /> Call (647) 572-8341
              </a>
            </div>
            <div className="cta-features">
              <div className="cta-feature"><i className="fas fa-clock" /><span>Fast Connection</span></div>
              <div className="cta-feature"><i className="fas fa-shield-alt" /><span>End-to-End Encrypted</span></div>
              <div className="cta-feature"><i className="fas fa-server" /><span>Self-Hosted &amp; Secure</span></div>
              <div className="cta-feature"><i className="fas fa-dollar-sign" /><span>No Travel Charges</span></div>
            </div>
          </div></FadeUp>
        </div>
      </section>
    </>
  )
}
