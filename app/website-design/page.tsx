import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'
import StaggerGrid from '@/components/animations/StaggerGrid'
import SlideReveal from '@/components/animations/SlideReveal'
import CursorGlow from '@/components/animations/CursorGlow'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Website Design Toronto | TechFlow Solutions',
  description: 'Professional website design in Toronto. Custom, mobile-responsive, search-optimized websites that complement your business automation and IT services.',
  alternates: { canonical: 'https://techflowsolutions.ca/website-design' },
  openGraph: {
    title: 'Website Design Toronto | TechFlow Solutions',
    description: 'Professional website design in Toronto. Custom, mobile-responsive, search-optimized websites.',
    url: 'https://techflowsolutions.ca/website-design',
  },
}

const heroImages = [
  '/images/heroes/hero-design-1.png','/images/heroes/hero-design-2.png',
  '/images/heroes/hero-design-3.png','/images/heroes/hero-design-4.png',
  '/images/heroes/hero-design-5.png',
]

const features = [
  { icon:'fa-paint-brush', title:'Custom Design',       desc:'Unique, brand-focused designs tailored specifically for your business. No templates, just original creativity.' },
  { icon:'fa-mobile-alt',  title:'Mobile Responsive',   desc:'Every website looks perfect on all devices — desktop, tablet, and mobile — with a mobile-first approach.' },
  { icon:'fa-search',      title:'Search-Engine Ready', desc:'Built with technical SEO best practices from day one — structured data, fast load times, and proper markup.' },
  { icon:'fa-bolt',        title:'Lightning Fast',      desc:'Optimized performance that keeps visitors engaged and improves your search rankings with fast load times.' },
  { icon:'fa-shield-alt',  title:'Secure & Reliable',  desc:'SSL certificates, secure hosting, and regular backups keep your website protected and online.' },
  { icon:'fa-bullseye',    title:'Conversion Focused',  desc:'Strategic layouts and clear calls-to-action designed to turn visitors into leads and customers.' },
]

const packages = [
  { name:'Starter',    price:'$799',          desc:'Perfect for freelancers, consultants and solo operators', badge:null,          primary:false, features:['4 pages (Home, About, Services, Contact)','Mobile responsive design','Contact form','Domain setup assistance','Fast loading, SEO ready','1 month support included'] },
  { name:'Business',   price:'$1,500–$2,500', desc:'For small businesses ready to grow online',              badge:'Most Popular', primary:true,  features:['6–8 pages','Custom design','SEO optimization','Google Analytics setup','1 month support included'] },
  { name:'Growth',     price:'$2,500–$4,500', desc:'For established businesses wanting more',                badge:null,          primary:false, features:['8–12 pages','Advanced features','Booking or payment integration','Performance optimization','1 month support included'] },
  { name:'Enterprise', price:'$5,000+',       desc:'E-commerce and automation integration',                  badge:null,          primary:false, features:['Custom functionality','Full automation integration','1 month support included','Ongoing support package'] },
]

const processSteps = [
  { num:'1', title:'Discovery & Planning',  desc:'I learn about your business, goals, and target audience to create the perfect strategy.' },
  { num:'2', title:'Design & Development', desc:'Your custom website is designed and built with your feedback throughout the process.' },
  { num:'3', title:'Testing & Launch',     desc:'Thorough testing across all devices and browsers before your website goes live.' },
  { num:'4', title:'Support & Growth',     desc:'Ongoing support and optimization to help your website grow with your business.' },
]

export default function WebsiteDesignPage() {
  return (
    <>
      <Hero sectionClass="hero-it-services" images={heroImages}>
        <div className="hero-content">
          <FadeUp duration={700}>
            <h1 className="hero-title">
              Professional Website Design
              <span className="gradient-text"> for Toronto Businesses</span>
            </h1>
          </FadeUp>
          <FadeUp delay={400}><p className="hero-subtitle">Professional websites designed to support your IT systems and business automation workflows. We build digital experiences that integrate cleanly with your operations and help your business stand out in the Greater Toronto Area.</p></FadeUp>
          <FadeUp delay={600}>
            <div className="hero-cta">
              <a href="#contact-form" className="btn-hero btn-hero-primary"><i className="fas fa-rocket" /> Discuss Website Needs</a>
              <a href="tel:+16475728341" className="btn-hero btn-hero-secondary"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
          </FadeUp>
        </div>
      </Hero>

      {/* Features */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Why Choose Our Website Design Services</h2>
            <p>We combine creativity, technology, and strategy to build websites that deliver results</p>
          </div></FadeUp>
          <StaggerGrid className="content-grid" staggerDelay={110} initialDelay={100}>
            {features.map((f) => (
              <CursorGlow key={f.title} className="content-card">
                <div className="icon-box float-icon"><i className={`fas ${f.icon}`} /></div>
                <h3>{f.title}</h3><p>{f.desc}</p>
              </CursorGlow>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Automation integration banner */}
      <SlideReveal direction="left" duration={700}>
        <section className="page-section" style={{ background:'linear-gradient(135deg,rgba(102,126,234,0.1) 0%,rgba(118,75,162,0.1) 100%)', borderTop:'1px solid rgba(102,126,234,0.2)', borderBottom:'1px solid rgba(102,126,234,0.2)' }}>
          <div className="container" style={{ maxWidth:900, textAlign:'center' }}>
            <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', color:'#fff', marginBottom:'1.5rem' }}>Websites That Support Automation</h2>
            <p style={{ fontSize:'1.1rem', color:'rgba(255,255,255,0.8)', lineHeight:1.8, marginBottom:'2rem' }}>
              We design websites that integrate cleanly with your systems, workflows, and automation — not standalone marketing assets. Every site we build works as part of your larger operational ecosystem.
            </p>
            <Link href="/business-automation" className="btn-hero btn-hero-primary" style={{ display:'inline-flex' }}>
              <i className="fas fa-cogs" /> Looking to automate workflows? View Business Automation solutions
            </Link>
          </div>
        </section>
      </SlideReveal>

      {/* Pricing */}
      <section className="page-section page-section--darker">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Website Packages</h2>
            <p>Every project starts with a free consultation — no obligation, no pressure.</p>
          </div></FadeUp>
          <StaggerGrid style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'2rem', maxWidth:1200, margin:'0 auto' }} staggerDelay={120} initialDelay={100}>
            {packages.map((pkg) => (
              <CursorGlow key={pkg.name} className="service-card" style={{ position:'relative', ...(pkg.primary ? { border:'2px solid rgba(102,126,234,0.6)', boxShadow:'0 20px 60px rgba(102,126,234,0.25)' } : {}) }}>
                {pkg.badge && (
                  <div style={{ position:'absolute', top:'-14px', left:'50%', transform:'translateX(-50%)', background:'linear-gradient(135deg,#667eea,#764ba2)', color:'#fff', padding:'0.3rem 1.2rem', borderRadius:20, fontSize:'0.8rem', fontWeight:700, whiteSpace:'nowrap' }}>{pkg.badge}</div>
                )}
                <div style={{ marginBottom:'1.5rem' }}>
                  <h3 style={{ color:'#fff', fontSize:'1.4rem', marginBottom:'0.5rem' }}>{pkg.name}</h3>
                  <div style={{ fontSize:'clamp(1.6rem,3vw,2rem)', fontWeight:800, background:'linear-gradient(135deg,#667eea,#f093fb)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:'0.5rem', fontFamily:'Poppins,sans-serif' }}>{pkg.price}</div>
                  <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.9rem', margin:0 }}>{pkg.desc}</p>
                </div>
                <ul className="service-features" style={{ marginBottom:'1.5rem' }}>{pkg.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <a href="#contact-form" className={`btn ${pkg.primary ? 'btn-primary' : 'btn-secondary'}`} style={{ width:'100%', justifyContent:'center' }}>Get Started</a>
              </CursorGlow>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Process */}
      <section className="page-section page-section--dark">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Our Design Process</h2>
            <p>Simple, transparent process from concept to launch</p>
          </div></FadeUp>
          <div className="steps-grid">
            {processSteps.map((s, i) => (
              <SlideReveal key={s.num} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 90} duration={600}>
                <div className="step-card" style={{ opacity:1, transform:'none' }}>
                  <div className="step-number">{s.num}</div>
                  <h3>{s.title}</h3><p>{s.desc}</p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Looking for More Than a Website? — restored from original */}
      <section className="page-section page-section--darker">
        <div className="container" style={{ maxWidth:900, textAlign:'center' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', color:'#fff', marginBottom:'1.5rem' }}>Looking for More Than a Website?</h2>
            <p style={{ fontSize:'1.1rem', color:'rgba(255,255,255,0.8)', lineHeight:1.8, marginBottom:'2rem' }}>
              For businesses looking to go further, we also offer website + automation projects. Combined projects typically start at $8,500 and are scoped during consultation.
            </p>
            <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:15, padding:'2rem', marginTop:'1rem' }}>
              <p style={{ fontStyle:'italic', color:'rgba(255,255,255,0.9)', fontSize:'1.05rem', lineHeight:1.7, marginBottom:'1rem' }}>
                &ldquo;TechFlow automated our invoicing and internal workflows, and also built a website that supports how we operate day‑to‑day. Everything works together seamlessly.&rdquo;
              </p>
              <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'0.95rem', margin:0 }}>— Sarah M., Small Business Owner, Toronto</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <section className="cta-section">
        <div className="container">
          <FadeUp><div className="cta-content">
            <h2>Ready to Build Your Perfect Website?</h2>
            <p>Let&apos;s create a website that not only looks great but drives real results for your business.</p>
            <div className="cta-buttons">
              <a href="#contact-form" className="btn btn-primary btn-large"><i className="fas fa-rocket" /> Start Your Project</a>
              <a href="tel:+16475728341" className="btn btn-outline btn-large"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
            <div className="cta-features">
              <div className="cta-feature"><i className="fas fa-search" /><span>SEO Optimized</span></div>
              <div className="cta-feature"><i className="fas fa-mobile-alt" /><span>Mobile Responsive</span></div>
              <div className="cta-feature"><i className="fas fa-headset" /><span>1 Month Support</span></div>
            </div>
          </div></FadeUp>
        </div>
      </section>
    </>
  )
}
