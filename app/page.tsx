import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FadeUp from '@/components/animations/FadeUp'
import StaggerGrid from '@/components/animations/StaggerGrid'
import SlideReveal from '@/components/animations/SlideReveal'
import CursorGlow from '@/components/animations/CursorGlow'
import CounterNumber from '@/components/animations/CounterNumber'

export const metadata: Metadata = {
  title: 'TechFlow Solutions | IT Services & Business Automation in Toronto',
  description: 'IT services and business automation for Toronto businesses. Custom workflow automation, invoicing systems, and professional websites backed by 15+ years of IT engineering experience.',
  alternates: { canonical: 'https://techflowsolutions.ca/' },
  openGraph: {
    title: 'TechFlow Solutions — IT Services & Business Automation in Toronto',
    description: 'IT services and business automation for Toronto businesses. Custom workflow automation, invoicing systems, and professional websites backed by 15+ years of IT engineering experience.',
    url: 'https://techflowsolutions.ca/',
  },
}

const heroImages = [
  '/images/heroes/hero-home-1.png',
  '/images/heroes/hero-home-2.png',
  '/images/heroes/hero-home-3.png',
  '/images/heroes/hero-home-4.png',
  '/images/heroes/hero-home-5.png',
]

const stats = [
  { target: 15,  suffix: '+',  label: 'Years Experience' },
  { target: 200, suffix: '+',  label: 'Businesses Helped' },
  { target: 98,  suffix: '%',  label: 'Client Satisfaction' },
  { target: 7,   suffix: '/7', label: 'Days a Week' },
]

export default function HomePage() {
  return (
    <>
      <Hero sectionClass="hero" images={heroImages}>
        <div className="hero-content">
          <FadeUp duration={700}>
            <h1 className="hero-title">
              IT Services &amp; Business Automation
              <span className="highlight"> for Toronto Businesses</span>
            </h1>
          </FadeUp>

          <FadeUp delay={400} duration={700}>
            <p className="hero-subtitle">
              Custom automation tools, workflow solutions, and professional websites. 15+ years of IT
              engineering experience helping GTA companies streamline operations and grow online.
            </p>
          </FadeUp>

          <FadeUp delay={600} duration={700}>
            <div className="hero-features">
              <Link href="/business-automation" className="feature">
                <i className="fas fa-cogs" /><span>Business Automation</span>
              </Link>
              <Link href="/it-services" className="feature">
                <i className="fas fa-tools" /><span>IT Services</span>
              </Link>
              <Link href="/website-design" className="feature">
                <i className="fas fa-paint-brush" /><span>Website Design</span>
              </Link>
              <Link href="/remote-support" className="feature">
                <i className="fas fa-desktop" /><span>Remote Support</span>
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={800} duration={700}>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
              <Link href="/it-services" className="btn btn-secondary">
                <i className="fas fa-tools" /> Explore IT Services
              </Link>
              <a href="tel:+16475728341" className="btn btn-outline">
                <i className="fas fa-phone" /> (647) 572-8341
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={1000} duration={700}>
            <div className="stats-row">
              {stats.map((s) => (
                <div key={s.label} className="stat-block">
                  <span className="stat-number">
                    <CounterNumber target={s.target} suffix={s.suffix} duration={2000} />
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </Hero>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>IT Services &amp; Automation Solutions</h2>
            <p>Professional IT support and custom automation tools for Toronto businesses</p>
          </div></FadeUp>
          <StaggerGrid className="services-grid" staggerDelay={120} initialDelay={100}>
            <CursorGlow className="service-card">
              <div className="service-icon float-icon"><i className="fas fa-cogs" /></div>
              <h3>Business Automation</h3>
              <p>Custom automation tools that streamline your operations and save hours every week. From invoicing to workflow management.</p>
              <ul className="service-features">
                <li>Custom Invoicing Systems</li>
                <li>Payment Processing Integration</li>
                <li>Workflow Automation Tools</li>
                <li>Client Portal Development</li>
              </ul>
              <Link href="/contact" className="service-link">Request Consultation <i className="fas fa-arrow-right" /></Link>
            </CursorGlow>
            <CursorGlow className="service-card">
              <div className="service-icon float-icon"><i className="fas fa-tools" /></div>
              <h3>Business IT Support</h3>
              <p>Reliable IT services to keep your business running smoothly with 15+ years of engineering experience.</p>
              <ul className="service-features">
                <li>Managed IT Support</li>
                <li>Network Setup &amp; Security</li>
                <li>Cloud Hosting &amp; Email Setup</li>
                <li>Workstation Configuration</li>
              </ul>
              <Link href="/it-services" className="service-link">Learn More <i className="fas fa-arrow-right" /></Link>
            </CursorGlow>
            <CursorGlow className="service-card">
              <div className="service-icon float-icon"><i className="fas fa-paint-brush" /></div>
              <h3>Website Design</h3>
              <p>Beautiful, conversion-focused websites that help your business stand out online and attract more customers.</p>
              <ul className="service-features">
                <li>Custom Responsive Design</li>
                <li>SEO Optimization Included</li>
                <li>Mobile-First Approach</li>
                <li>Content Management System</li>
              </ul>
              <Link href="/website-design" className="service-link">Explore Website Options <i className="fas fa-arrow-right" /></Link>
            </CursorGlow>
          </StaggerGrid>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>Why Choose TechFlow Solutions?</h2>
            <p>15+ years of IT engineering experience serving Toronto businesses</p>
          </div></FadeUp>
          <div className="why-features">
            {[
              { icon: 'fa-code',       title: 'Engineering Expertise', desc: '15+ years building custom automation tools and IT solutions for businesses', dir: 'left'  },
              { icon: 'fa-cogs',       title: 'Custom Automation',     desc: 'Tailored solutions that solve your specific business challenges, not generic templates', dir: 'right' },
              { icon: 'fa-home',       title: 'Local GTA Service',     desc: 'Serving the Greater Toronto Area with personalized, community-focused support', dir: 'left'  },
              { icon: 'fa-shield-alt', title: 'Reliable Support',      desc: 'Professional service with clear communication and dependable results', dir: 'right' },
            ].map((item, i) => (
              <SlideReveal key={item.title} direction={item.dir as 'left'|'right'} delay={i * 80} duration={650}>
                <div className="why-feature" style={{ opacity:1, transform:'none' }}>
                  <div className="why-icon"><i className={`fas ${item.icon}`} /></div>
                  <div className="why-info"><h4>{item.title}</h4><p>{item.desc}</p></div>
                </div>
              </SlideReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <FadeUp><div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real feedback from satisfied customers across the GTA</p>
          </div></FadeUp>
          <StaggerGrid className="testimonials-grid" staggerDelay={150} initialDelay={100}>
            {[
              { text: 'TechFlow helped streamline several internal workflows and clean up how our systems work together. Day-to-day tasks take less time, and everything feels more reliable and easier to manage.', author: 'Sarah M.', role: 'Accounting Firm Owner, Mississauga' },
              { text: 'What stood out was the systems-first approach. TechFlow improved our email, cloud access, and internal setup so the technology actually supports how we work instead of getting in the way.', author: 'Mike R.', role: 'Law Firm Partner, Toronto' },
              { text: 'TechFlow handled everything from our IT setup to internal workflow improvements, and also rebuilt our website to support the business properly. It finally feels like all our systems are working together.', author: 'Dr. Jennifer L.', role: 'Dental Practice, Markham' },
            ].map((t) => (
              <CursorGlow key={t.author} className="testimonial-card">
                <div className="testimonial-rating">
                  {[1,2,3,4,5].map(n => <i key={n} className="fas fa-star" />)}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="author-info"><h4>{t.author}</h4><span>{t.role}</span></div>
              </CursorGlow>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <FadeUp><div className="cta-content">
            <h2>Ready to Streamline and Grow Your Business?</h2>
            <p>Automate workflows, strengthen your IT infrastructure, and build a professional online presence</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large"><i className="fas fa-envelope" /> Book a Free Consultation</Link>
              <Link href="/website-design" className="btn btn-secondary btn-large"><i className="fas fa-laptop-code" /> View Website Services</Link>
              <a href="tel:+16475728341" className="btn btn-outline btn-large"><i className="fas fa-phone" /> Call (647) 572-8341</a>
            </div>
            <div className="cta-features">
              <div className="cta-feature"><i className="fas fa-chart-line" /><span>SEO Optimization</span></div>
              <div className="cta-feature"><i className="fas fa-cogs" /><span>Business Automation</span></div>
              <div className="cta-feature"><i className="fas fa-server" /><span>Business IT Support</span></div>
            </div>
          </div></FadeUp>
        </div>
      </section>
    </>
  )
}
