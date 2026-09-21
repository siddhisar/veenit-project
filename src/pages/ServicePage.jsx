import { Link, useParams, Navigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'
import CyberBackground from '../components/CyberBackground.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

const SERVICES = {
  'electronic-evidence': {
    heroIcon: 'bi-file-earmark-check',
    title: 'Electronic Evidence & Section 63 Certification',
    tagline:
      'Court-admissible digital evidence, preserved and certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.',
    overview:
      'We preserve, examine, document, and certify electronic evidence so it holds up to legal scrutiny. Every engagement maintains an unbroken chain of custody and produces Section 63 certification that makes digital evidence structured, verifiable, and legally defensible.',
    features: [
      { icon: 'bi-patch-check', title: 'Section 63 Certification', text: 'Formal certification of electronic records for admissibility in Indian courts.' },
      { icon: 'bi-hash', title: 'Hash Verification & Integrity', text: 'Cryptographic hashing that proves evidence has not been altered.' },
      { icon: 'bi-link-45deg', title: 'Chain of Custody', text: 'Documented, tamper-evident handling from acquisition to reporting.' },
      { icon: 'bi-journal-text', title: 'Forensic Documentation', text: 'Clear, defensible reports suitable for legal and regulatory use.' }
    ]
  },
  'mobile-forensics': {
    heroIcon: 'bi-phone',
    title: 'Mobile Forensics',
    tagline: 'Forensic extraction and analysis of smartphones, tablets, and mobile applications.',
    overview:
      'We recover, preserve, and analyze data from mobile devices — including deleted records, application data, messages, and location artifacts — using forensically sound methods that protect evidentiary integrity end to end.',
    features: [
      { icon: 'bi-phone', title: 'Device Acquisition', text: 'Forensic imaging of Android and iOS devices without compromising data.' },
      { icon: 'bi-chat-dots', title: 'App & Message Analysis', text: 'Recovery and examination of chats, call logs, media, and app artifacts.' },
      { icon: 'bi-geo-alt', title: 'Location & Timeline', text: 'Reconstruct events with location history and activity timelines.' },
      { icon: 'bi-arrow-counterclockwise', title: 'Deleted Data Recovery', text: 'Recover deleted files and records wherever technically feasible.' }
    ]
  },
  vapt: {
    heroIcon: 'bi-bug',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    tagline: 'Find and fix security weaknesses before an attacker gets the opportunity.',
    overview:
      "We test your web, mobile, API, cloud, and network assets from an adversary's perspective — aligned with OWASP, NIST SP 800-115, PTES, and MITRE ATT&CK — and deliver prioritized, practical remediation guidance instead of generic checklist reports.",
    features: [
      { icon: 'bi-bug', title: 'Web, Mobile & API Testing', text: 'Deep testing of applications and APIs against OWASP standards.' },
      { icon: 'bi-hdd-network', title: 'Network & Infrastructure', text: 'Internal, external, cloud, and infrastructure security assessments.' },
      { icon: 'bi-diagram-3', title: 'Red Team / Blue Team', text: 'Adversary simulation and defensive validation exercises.' },
      { icon: 'bi-clipboard-data', title: 'Actionable Reporting', text: 'Risk-ranked findings with clear, prioritized remediation steps.' }
    ]
  },
  'cyber-law-advocacy': {
    heroIcon: 'bi-bank',
    title: 'Cyber Law Advocacy',
    tagline: 'Expert legal counsel for cyber law, compliance, and digital disputes.',
    overview:
      'Our advocacy practice supports organizations and individuals across cyber law matters — from regulatory compliance and incident response to representation in cybercrime and data-protection disputes.',
    features: [
      { icon: 'bi-journal-check', title: 'Legal Advisory', text: 'Guidance on the IT Act, DPDP Act, and evolving cyber regulations.' },
      { icon: 'bi-shield-check', title: 'Compliance Support', text: 'Align policies and practices with regulatory expectations.' },
      { icon: 'bi-exclamation-octagon', title: 'Incident & Breach Counsel', text: 'Legal support during and after security incidents.' },
      { icon: 'bi-people', title: 'Representation & Advocacy', text: 'Representation in cybercrime and data-protection matters.' }
    ]
  }
}

export default function ServicePage() {
  useScrollReveal()
  const { slug } = useParams()
  const service = SERVICES[slug]

  if (!service) return <Navigate to="/" replace />

  const dirs = ['from-left', 'from-right', 'from-left', 'from-right']

  return (
    <>
      <Header />
      <main className="svc-page">
        <section className="svc-hero">
          <div className="svc-hero-bg" aria-hidden="true">
            <CyberBackground />
            <div className="svc-hero-grid" />
            <div className="svc-hero-glow" />
          </div>
          <Container className="svc-hero-inner">
            <span className="svc-eyebrow reveal from-top">
              <i className="bi bi-grid-3x3-gap" /> Our Services
            </span>
            <span className="svc-hero-icon reveal d1">
              <i className={`bi ${service.heroIcon}`} />
            </span>
            <h1 className="svc-title reveal d2">{service.title}</h1>
            <p className="svc-tagline reveal d3">{service.tagline}</p>
            <div className="svc-hero-actions reveal d4">
              <Link to="/#get-in-touch" className="btn-cyber">
                Request for Enquiry <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </Container>
        </section>

        <section className="svc-intro section">
          <Container>
            <p className="eyebrow reveal">Overview</p>
            <h2 className="section-title reveal d1">What We Deliver</h2>
            <p className="svc-intro-text reveal d2">{service.overview}</p>
          </Container>
        </section>

        <section className="svc-features section">
          <Container>
            <Row className="g-4 justify-content-center">
              {service.features.map((f, i) => (
                <Col xs={12} sm={6} lg={3} key={f.title}>
                  <div className={`svc-card reveal ${dirs[i % 4]} d${i + 1}`}>
                    <span className="svc-card-icon">
                      <i className={`bi ${f.icon}`} />
                    </span>
                    <h3 className="svc-card-title">{f.title}</h3>
                    <p className="svc-card-text">{f.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="svc-cta section-sm">
          <Container className="svc-cta-inner reveal">
            <h2>Ready to strengthen your security?</h2>
            <p>Talk to our experts about {service.title}.</p>
            <Link to="/#get-in-touch" className="btn-cyber">
              Request for Enquiry <i className="bi bi-arrow-right" />
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
