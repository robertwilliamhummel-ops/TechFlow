import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-microchip" />
              <span>TechFlow Solutions</span>
            </div>
            <p>IT services and business automation for Toronto companies.</p>
            <div className="footer-social">
              <span className="social-placeholder" aria-label="Facebook"><i className="fab fa-facebook" /></span>
              <span className="social-placeholder" aria-label="LinkedIn"><i className="fab fa-linkedin" /></span>
              <a href="https://share.google/JQQ61Sg3nnPeTgXCQ" target="_blank" rel="noopener noreferrer" aria-label="Google Business"><i className="fab fa-google" /></a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link href="/it-services">IT Services</Link></li>
              <li><Link href="/business-automation">Automation</Link></li>
              <li><Link href="/invoicepro">InvoicePro</Link></li>
              <li><Link href="/website-design">Websites</Link></li>
              <li><Link href="/digital-growth">Digital Growth</Link></li>
              <li><Link href="/remote-support">Remote Support</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="footer-section">
            <h4>Service Areas</h4>
            <ul>
              <li>Toronto</li>
              <li>Mississauga</li>
              <li>Brampton</li>
              <li>Markham</li>
              <li>Richmond Hill</li>
              <li><Link href="/contact#service-area">View All Areas</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-phone" />
                <a href="tel:+16475728341">(647) 572-8341</a>
              </p>
              <p>
                <i className="fas fa-envelope" />
                <a href="mailto:rob@techflowsolutions.ca">rob@techflowsolutions.ca</a>
              </p>
              <p>
                <i className="fas fa-clock" />
                <span>Mon–Fri: 9AM–5PM<br />Weekends: 8AM–8PM<br />Consultations by appointment</span>
              </p>
              <p>
                <i className="fas fa-map-marker-alt" />
                <span>Serving Greater Toronto Area</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} TechFlow Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
