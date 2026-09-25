import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import CyberBackground from './CyberBackground.jsx'
import heroVideo from '../assets/videos/cyber-hero.mp4'
import heroPoster from '../assets/videos/cyber-hero-poster.jpg'

const SERVICES = [
  { title: 'Electronic Evidence & Section 63 Certification', to: '/services/electronic-evidence' },
  { title: 'Mobile Forensics', to: '/services/mobile-forensics' },
  { title: 'Web Application Penetration Testing', to: '/services/web-penetration-testing' },
  { title: 'Mobile Application Security Testing', to: '/services/mobile-application-security-testing' },
  { title: 'Vulnerability Assessment & Penetration Testing (VAPT)', to: '/services/vapt' },
  { title: 'Cyber Law Advocacy', to: '/services/cyber-law-advocacy' }
]

const SOCIALS = [
  { icon: 'bi-facebook', href: '#', label: 'Facebook' },
  { icon: 'bi-instagram', href: '#', label: 'Instagram' },
  { icon: 'bi-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'bi-youtube', href: '#', label: 'YouTube' }
]

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* same ambient background as the Hero section */}
      <div className="footer-bg" aria-hidden="true">
        <video
          className="footer-video"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
        <CyberBackground />
        <div className="footer-grid" />
        <div className="footer-glow" />
        <div className="footer-overlay" />
        <div className="footer-vignette" />
      </div>
      <Container className="position-relative">
        <Row className="gy-5 align-items-start footer-row">
          <Col xs={{ span: 12, order: 3 }} md={{ span: 6, order: 3 }} lg={{ span: 4, order: 3 }} className="footer-services-col reveal d3">
            <h5 className="footer-heading">Our Services</h5>
            <ul className="footer-links">
              {SERVICES.map((s) => (
                <li key={s.to}>
                  <Link to={s.to}>
                    <i className="bi bi-caret-right-fill" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 4, order: 2 }} className="footer-brand-col reveal d2">
            <div className="footer-brand footer-brand--center">
              <img src={logo} alt="Cyber Crime Defence" className="footer-logo" />
              <h4 className="footer-brand-name">Cyber Crime Defence<sup className="brand-reg">®</sup></h4>
              <div className="footer-socials">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="footer-social">
                    <i className={`bi ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} lg={{ span: 4, order: 1 }} id="contact-info" className="footer-contact-col reveal d1">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-geo-alt-fill" />
                <div className="fc-body">
                  <span className="fc-label">Location</span>
                  <span className="fc-value">Pune, Maharashtra</span>
                </div>
              </li>
              <li>
                <i className="bi bi-envelope-fill" />
                <div className="fc-body">
                  <span className="fc-label">Email</span>
                  <a className="fc-value" href="mailto:cybercrimedeff88@gmail.com">cybercrimedeff88@gmail.com</a>
                </div>
              </li>
              <li>
                <i className="bi bi-telephone-fill" />
                <div className="fc-body">
                  <span className="fc-label">Cyber Crime Defence</span>
                  <a className="fc-value" href="tel:+919405644094">Veenit Birje &ndash; +91 9405644094</a>
                </div>
              </li>
              <li>
                <i className="bi bi-person-badge-fill" />
                <div className="fc-body">
                  <span className="fc-label">Advocate</span>
                  <a className="fc-value" href="tel:+917755988489">Harshita Birje &ndash; +91 77559 88489</a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <Container className="footer-bottom-inner">
          <p className="footer-copy">
            © 2026 <span>Cyber Crime Defence</span>
          </p>
          <div className="footer-legal">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Use</a>
          </div>
        </Container>
      </div>
    </footer>
  )
}
