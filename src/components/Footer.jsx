import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/images/logo.svg'

const USEFUL_LINKS = [
  'Ransomware Removal & Data Theft Protection Solutions',
  '63 Certificate and Hash Value',
  'Digital Forensic Investigations',
  'Careers - We Are Hiring',
  'DPDP Act',
  'Digital Personal Data Protection Rules, 2025',
  'ISO 27001 Information Security Checklist',
  'ISO/IEC 27001:2022 – ISMS Standard'
]

const SERVICES = [
  'Cyber Security Audit & Risk Assessment',
  'Digital Personal Data Protection Act, 2023 Compliance',
  'Incident Response & Breach Preparedness',
  'ISO/IEC 27001 ISMS Advisory & Internal Audit',
  'PCI - DSS Compliance & Payment Security',
  'Vulnerability Assessment & Penetration Testing'
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
      <div className="footer-pattern" aria-hidden="true" />
      <Container className="position-relative">
        <Row className="gy-5">
          <Col lg={3} md={6} className="reveal d1">
            <div className="footer-brand">
              <img src={logo} alt="DTF-ISMS — Digital Task Force" className="footer-logo" />
              <h4 className="footer-brand-name">DTF-ISMS</h4>
              <p className="footer-brand-sub">Digital Task Force</p>
              <div className="footer-socials">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="footer-social">
                    <i className={`bi ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} className="reveal d2">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-geo-alt-fill" />
                <span>Pune, Maharashtra</span>
              </li>
              <li>
                <i className="bi bi-envelope-fill" />
                <a href="mailto:cyber@dtfservice.com">cyber@dtfservice.com</a>
              </li>
              <li>
                <i className="bi bi-telephone-fill" />
                <span>
                  +91 8530148055 - DTF-ISMS
                  <br />
                  +91 8956288055 - HR
                </span>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="reveal d3">
            <h5 className="footer-heading">Useful Links</h5>
            <ul className="footer-links">
              {USEFUL_LINKS.map((l) => (
                <li key={l}>
                  <a href="#home">
                    <i className="bi bi-caret-right-fill" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6} className="reveal d4">
            <h5 className="footer-heading">Our Services</h5>
            <ul className="footer-links">
              {SERVICES.map((l) => (
                <li key={l}>
                  <a href="#services">
                    <i className="bi bi-caret-right-fill" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <Container className="footer-bottom-inner">
          <p className="footer-copy">
            © 2026 <span>Digital Task Force - ISMS</span>
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
