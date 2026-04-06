import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'

import CursorGlow from '@/components/animations/CursorGlow'
import SlideReveal from '@/components/animations/SlideReveal'
import Accordion from '@/components/Accordion'

export const metadata: Metadata = {
  title: 'Digital Growth & Search Visibility Toronto | TechFlow Solutions',
  description: 'Technical SEO and digital growth for Toronto businesses. Performance optimization and search visibility included with website, IT, and automation projects.',
  alternates: { canonical: 'https://techflowsolutions.ca/digital-growth' },
  openGraph: {
    title: 'Digital Growth & Search Visibility Toronto | TechFlow Solutions',
    description: 'Technical SEO, performance optimization, and structural improvements for Toronto businesses.',
    url: 'https://techflowsolutions.ca/digital-growth',
  },
}

const heroImages = [
  '/images/heroes/hero-it-1.png','/images/heroes/hero-it-2.png',
  '/images/heroes/hero-it-3.png','/images/heroes/hero-it-4.png',
]

const capabilities = [
  { icon:'fa-search-plus',   title:'Technical SEO Audit & Optimization', desc:"Comprehensive analysis and fixes for your website's technical foundation.", items:['Site speed analysis and optimization','Mobile responsiveness testing','Core Web Vitals improvements','XML sitemap configuration','Schema markup implementation'], note:'Applied as needed for website projects' },
  { icon:'fa-key',           title:'Keyword Research & Strategy',         desc:'Data-driven keyword targeting that matches how your customers search.',    items:['Competitor analysis','Search volume assessment','Local vs. national targeting','Content gap identification','Long-tail keyword opportunities'], note:'Included in website and automation projects' },
  { icon:'fa-file-alt',      title:'Content Optimization',               desc:'Improving existing content structure and search optimization.',             items:['On-page SEO (titles, meta, headers)','Content structure improvements','Internal linking strategy','Image optimization','Content improvements when required'], note:'Applied to website content as needed' },
  { icon:'fa-map-marker-alt',title:'Local Search Presence',              desc:'Local search optimization and business profile setup.',                    items:['Google Business Profile setup','Local directory presence','Review management guidance','NAP consistency verification','Local search optimization'], note:'Included with business website projects' },
  { icon:'fa-chart-line',    title:'Analytics & Monitoring',             desc:'Performance tracking and technical monitoring setup.',                     items:['Google Analytics configuration','Search Console integration','Performance reporting during active projects','Technical monitoring setup','Traffic analysis tools'], note:'Provided with all website projects' },
]

const processPhases = [
  { title:'Phase 1: Technical Foundation',              items:['Site structure and performance audit','Core Web Vitals optimization','Mobile responsiveness verification','Google Analytics and Search Console setup','Technical SEO foundation implemented'] },
  { title:'Phase 2: Content & Structure',              items:['On-page optimization implemented','Content structure improvements','Internal linking strategy','Schema markup where applicable','Image and media optimization'] },
  { title:'Phase 3: Local Presence (When Applicable)', items:['Google Business Profile optimization','NAP consistency verification','Local directory presence','Review management guidance','Local search optimization'] },
  { title:'Post-Launch Support (As Needed)',           items:['Performance review after launch','Technical updates when required','Search Console monitoring during active projects','Recommendations provided as part of website, IT, or automation work'] },
]

const faqs = [
  { q:'How long does SEO take to work?',                             a:'Search visibility improvements are typically gradual. Technical changes can show early impact within a few months, while more significant gains depend on competition, site quality, and scope.' },
  { q:'Can you guarantee #1 rankings?',                              a:"No. Search rankings depend on many external factors. Our focus is on improving technical quality, structure, and visibility in a way that aligns with Google's guidelines — not chasing specific ranking positions." },
  { q:"What's the difference between SEO and paid ads?",             a:"Search optimization improves long-term visibility by strengthening your site's technical foundation. Paid ads provide immediate visibility but stop when campaigns end. We focus on organic visibility as part of the systems we build." },
  { q:'Do I need a new website for search visibility improvements?', a:"Not always. If your site is technically sound, improvements can often be made without a full rebuild. This is assessed during consultation." },
  { q:'How do you measure success?',                                 a:'Success is evaluated based on technical improvements, performance gains, visibility trends, and how well the website supports your business goals.' },
  { q:'Do you offer ongoing SEO services?',                          a:'Digital growth work is typically provided as part of website, IT, or automation projects. Any additional support is discussed during consultation — not sold as a predefined SEO package.' },
]

export default function DigitalGrowthPage() {
  return (
    <>
      <Hero sectionClass="hero hero-growth" images={heroImages}>
        <div className="hero-content">
          <h1 className="hero-title">
            Digital Growth &amp; Search Visibility
            <span className="highlight"> Supporting the Websites and Systems We Build</span>
          </h1>
          <p className="hero-subtitle">Technical SEO, performance optimization, and structural improvements that help businesses remain visible and competitive online — without gimmicks or unrealistic promises.</p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary"><i className="fas fa-comments" /> Discuss Website Performance</Link>
            <a href="tel:+16475728341" className="btn btn-outline"><i className="fas fa-phone" /> Call (647) 572-8341</a>
          </div>
        </div>
      </Hero>

      {/* Technical Statement */}
      <section className="page-section page-section--dark" style={{ background:'rgba(0,0,0,0.3)' }}>
        <div className="container" style={{ maxWidth:900, textAlign:'center' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.5rem)', color:'#fff', marginBottom:'1rem' }}>Technical Foundation for Online Success</h2>
            <p style={{ fontSize:'1.2rem', lineHeight:1.8, color:'rgba(255,255,255,0.9)', marginBottom:'2rem' }}>
              Digital growth capabilities are included as part of website, IT, and automation projects we build. We handle technical SEO, performance optimization, and search visibility as supporting elements — not standalone marketing campaigns.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'1.5rem', textAlign:'left' }}>
              {['Included with all website projects','No standalone SEO packages sold','Honest, realistic expectations','Technical approach, not marketing hype'].map((text, i) => (
                <FadeUp key={text} delay={i * 100}>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:'1rem 1.25rem' }}>
                    <i className="fas fa-check-circle" style={{ color:'#667eea', fontSize:'1.3rem', flexShrink:0 }} />
                    <span style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.95rem' }}>{text}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Capabilities */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Technical Capabilities We Apply</h2>
            <p>Search visibility and performance improvements applied as part of our projects</p>
          </div></FadeUp>
          <div className="services-grid">
            {capabilities.map((cap, i) => (
              <FadeUp key={cap.title} delay={i * 120}>
                <CursorGlow className="service-card">
                  <div className="service-icon float-icon"><i className={`fas ${cap.icon}`} /></div>
                  <h3>{cap.title}</h3><p>{cap.desc}</p>
                  <ul className="service-features">{cap.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  <p style={{ marginTop:'1.25rem', fontWeight:600, color:'#667eea', fontSize:'0.9rem', marginBottom:0 }}>{cap.note}</p>
                </CursorGlow>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Technical Implementation Process</h2>
            <p>How we support your project from start to finish</p>
          </div></FadeUp>
          <div className="steps-grid">
            {processPhases.map((phase, i) => (
              <SlideReveal key={phase.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 90} duration={600}>
                <div className="step-card" style={{ opacity:1, transform:'none' }}>
                  <div className="step-number">{i + 1}</div>
                  <h3>{phase.title}</h3>
                  <ul style={{ paddingLeft:'1.2rem', marginTop:'0.75rem' }}>
                    {phase.items.map((item) => <li key={item} style={{ color:'rgba(255,255,255,0.7)', marginBottom:'0.4rem', fontSize:'0.9rem', lineHeight:1.5 }}>{item}</li>)}
                  </ul>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="page-section page-section--dark">
        <div className="container">
          <SlideReveal direction="right" duration={700}>
            <div className="accordion-container">
              <Accordion title="Frequently Asked Questions">
                <div style={{ padding:'0 2rem 0.5rem' }}>
                  {faqs.map((faq) => (
                    <div key={faq.q} style={{ borderBottom:'1px solid rgba(255,255,255,0.08)', padding:'1.25rem 0' }}>
                      <h4 style={{ color:'#fff', marginBottom:'0.6rem', fontSize:'1rem', fontWeight:600 }}>{faq.q}</h4>
                      <p style={{ color:'rgba(255,255,255,0.7)', lineHeight:1.7, margin:0, fontSize:'0.95rem' }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          </SlideReveal>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <FadeUp><div className="cta-content">
            <h2>Need Technical Support for Your Website or Systems?</h2>
            <p>Digital growth capabilities are included as part of our website, IT, and automation projects.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large"><i className="fas fa-comments" /> Discuss Your Project</Link>
              <a href="tel:+16475728341" className="btn btn-outline btn-large"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
            <div className="cta-features">
              <div className="cta-feature"><i className="fas fa-search" /><span>Technical SEO</span></div>
              <div className="cta-feature"><i className="fas fa-bolt" /><span>Performance Optimization</span></div>
              <div className="cta-feature"><i className="fas fa-map-marker-alt" /><span>Local GTA Focus</span></div>
            </div>
          </div></FadeUp>
        </div>
      </section>
    </>
  )
}
