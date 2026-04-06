import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'

import SlideReveal from '@/components/animations/SlideReveal'
import CursorGlow from '@/components/animations/CursorGlow'

export const metadata: Metadata = {
  title: 'About Rob | Toronto IT Engineer & Business Automation Expert | TechFlow Solutions',
  description: 'Meet Rob, founder of TechFlow Solutions. 15+ years of IT engineering helping Toronto businesses with reliable technology, automation, and professional websites.',
  alternates: { canonical: 'https://techflowsolutions.ca/about' },
  openGraph: {
    title: 'About TechFlow Solutions',
    description: 'Meet Rob — 15+ years helping Toronto businesses with IT, automation, and website design.',
    url: 'https://techflowsolutions.ca/about',
  },
}

const heroImages = [
  '/images/heroes/hero-about-1.png',
  '/images/heroes/hero-about-2.png',
  '/images/heroes/hero-about-3.png',
]

const values = [
  { icon: 'fa-heart',          title: 'Genuine Care',         desc: "I care about solving real problems, not upselling unnecessary services. Your success matters to me." },
  { icon: 'fa-handshake',      title: 'Honest Communication', desc: "I'll always tell you the truth — what you need, what you don't, and what can wait." },
  { icon: 'fa-graduation-cap', title: 'Always Learning',      desc: 'Technology evolves fast. I stay current so I can deliver modern, effective solutions.' },
  { icon: 'fa-users',          title: 'Clear Explanations',   desc: "I break things down in plain English so you always understand what's happening and why." },
  { icon: 'fa-smile',          title: 'Friendly Approach',    desc: "Working with a tech professional shouldn't feel intimidating. I keep things relaxed and approachable." },
  { icon: 'fa-clock',          title: 'Reliable Service',     desc: 'When I commit to something, I follow through. Your time and trust matter.' },
]

// Original approach points from the HTML source
const approachPoints = [
  { icon: 'fa-comments',   title: 'Listen First',          desc: 'I take time to understand your goals and challenges.' },
  { icon: 'fa-lightbulb',  title: 'Explain Clearly',       desc: 'I translate technical concepts into everyday language.' },
  { icon: 'fa-tools',      title: 'Solve the Root Cause',  desc: 'I focus on long-term solutions, not temporary fixes.' },
  { icon: 'fa-shield-alt', title: 'Stand Behind My Work',  desc: "I'm committed to quality and long-term reliability in everything I deliver." },
]

export default function AboutPage() {
  return (
    <>
      <Hero sectionClass="hero-about" images={heroImages}>
        <div className="hero-content">
          <FadeUp duration={700}>
            <h1 className="hero-title">
              Hi, I&apos;m <span className="highlight">Rob</span>
            </h1>
          </FadeUp>
          <FadeUp delay={400} duration={600}>
            <p className="hero-subtitle">IT Services &amp; Business Automation</p>
          </FadeUp>
          <FadeUp delay={600} duration={600}>
            <p className="hero-description">
              I started TechFlow Solutions to help Toronto businesses build reliable technology
              systems that actually support how they operate — from IT infrastructure and business
              automation to professional websites that integrate cleanly with those systems.
              <br /><br />
              With over 15 years of experience in IT engineering, including leadership roles
              supporting business-critical systems, I focus on practical, done-for-you solutions
              that reduce friction, eliminate manual work, and make technology dependable instead
              of frustrating.
              <br /><br />
              We also design and build professional websites — not as standalone marketing assets,
              but as systems that support your operations, workflows, and automation. Automation
              projects may include tools such as custom invoicing systems (InvoicePro), workflow
              automation, and system integrations.
              <br /><br />
              No jargon, no pressure — just honest, professional support focused on helping your
              business succeed.
            </p>
          </FadeUp>
        </div>
      </Hero>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <FadeUp><div className="section-header-about">
            <h2>What Drives Me</h2>
            <p>The values that guide everything I do</p>
          </div></FadeUp>
          <div className="values-grid">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 100}>
                <CursorGlow className="value-card">
                  <div className="value-icon"><i className={`fas ${v.icon}`} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Approach — original content restored */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header-about">
            <h2>My Approach to IT &amp; Automation</h2>
            <p>Good IT support and automation are more than fixing issues — they&apos;re about helping businesses operate confidently and efficiently. Here&apos;s how I work:</p>
          </div></FadeUp>

          <div className="content-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            {approachPoints.map((item, i) => (
              <SlideReveal key={item.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 100} duration={600}>
                <div className="content-card" style={{ opacity:1, transform:'none' }}>
                  <div className="icon-box"><i className={`fas ${item.icon}`} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </SlideReveal>
            ))}
          </div>

          {/* Quote block — restored from original */}
          <FadeUp delay={300}>
            <div style={{
              maxWidth: 700,
              margin: '3rem auto 0',
              background: 'rgba(102,126,234,0.08)',
              border: '1px solid rgba(102,126,234,0.25)',
              borderRadius: 20,
              padding: '2.5rem',
              textAlign: 'center',
            }}>
              <i className="fas fa-laptop-code" style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '1.25rem', display: 'block' }} />
              <p style={{
                fontStyle: 'italic',
                fontSize: '1.2rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.7,
                margin: 0,
              }}>
                &ldquo;Technology should make your life easier, not harder. My job is to make sure it does exactly that.&rdquo;
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <FadeUp><div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>Let&apos;s have a 15-minute call — no pressure, no sales pitch, just a conversation about your technology needs.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large"><i className="fas fa-envelope" /> Get in Touch</Link>
              <a href="tel:+16475728341" className="btn btn-outline btn-large"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
          </div></FadeUp>
        </div>
      </section>
    </>
  )
}
