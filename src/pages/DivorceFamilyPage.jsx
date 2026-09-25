import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import BackToTop from '../components/BackToTop.jsx'
import CyberBackground from '../components/CyberBackground.jsx'
import FamilyEvidenceVisual from '../components/FamilyEvidenceVisual.jsx'
import EvidenceExplorer from '../components/EvidenceExplorer.jsx'
import Section63Cert from '../components/Section63Cert.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

const CONCEPTS = [
  { icon: 'bi-chat-dots', label: 'Conversations' },
  { icon: 'bi-envelope', label: 'Emails' },
  { icon: 'bi-images', label: 'Photos & Videos' },
  { icon: 'bi-share', label: 'Social Media' },
  { icon: 'bi-geo-alt', label: 'Location' },
  { icon: 'bi-credit-card', label: 'Digital Payments' },
  { icon: 'bi-file-earmark-text', label: 'Documents' }
]


const PRESERVE = [
  { icon: 'bi-search', label: 'Identify' },
  { icon: 'bi-shield-lock', label: 'Preserve' },
  { icon: 'bi-cpu', label: 'Examine' },
  { icon: 'bi-journal-text', label: 'Document' },
  { icon: 'bi-bank', label: 'Present for Legal Evaluation' }
]

export default function DivorceFamilyPage() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main className="ee-page dfd-page">
        {/* 1. HERO */}
        <section className="ee-hero">
          <div className="svc-hero-bg" aria-hidden="true">
            <CyberBackground />
            <div className="svc-hero-grid" />
            <div className="svc-hero-glow" />
          </div>
          <Container className="ee-hero-inner">
            <Row className="align-items-center g-5 ee-hero-row">
              <Col lg={6} className="ee-hero-copy">
                <span className="svc-eyebrow reveal from-top">
                  <i className="bi bi-bank" /> Cyber Law Advocacy
                </span>
                <h1 className="ee-hero-title reveal d1">Divorce &amp; Family Disputes</h1>
                <p className="mf-hero-tagline reveal d2">Electronic Evidence &amp; Section 63 Certification</p>
                <p className="ee-hero-p reveal d3">
                  Digital Evidence Support for Matrimonial &amp; Family-Law Matters. We help preserve,
                  examine, document, and support certification of relevant electronic records for
                  legally authorized proceedings.
                </p>
              </Col>
              <Col lg={6} className="ee-hero-visual-col reveal from-right">
                <FamilyEvidenceVisual />
              </Col>
            </Row>
          </Container>
        </section>

        {/* 2. INTRODUCTION */}
        <section className="dfd-light section">
          <Container>
            <p className="eyebrow reveal">Overview</p>
            <h2 className="section-title reveal d1">Digital Evidence in Family Disputes</h2>
            <p className="dfd-intro-lead reveal d2">
              Modern family and matrimonial disputes increasingly involve electronic communications
              and digital records. Conversations between spouses, emails, photographs, videos,
              social-media activity, location information, digital payments, documents, and other
              electronic records can become relevant when facts are disputed in a legal proceeding.
            </p>
            <div className="dfd-chips reveal d2">
              {CONCEPTS.map((c, i) => (
                <span className="dfd-chip reveal zoom-in" key={c.label} style={{ transitionDelay: `${0.04 * i}s` }}>
                  <i className={`bi ${c.icon}`} />{c.label}
                </span>
              ))}
            </div>
            <p className="dfd-intro-lead reveal d3">
              At Cyber Crime Defence, we provide digital evidence preservation, forensic examination,
              electronic evidence documentation, and Section 63-related certification support for
              legally authorized matrimonial and family-law matters.
            </p>
            <p className="dfd-intro-lead reveal d3">
              Our objective is to help preserve relevant electronic information in a structured and
              technically defensible manner so that legal professionals can evaluate the evidence and
              determine how it may be used in the appropriate proceedings.
            </p>
          </Container>
        </section>

        {/* 3. WHY ELECTRONIC EVIDENCE MATTERS — evidence explorer */}
        <section className="dfd-dark section">
          <div className="dfd-bg" aria-hidden="true"><div className="mf-art-grid" /><div className="mf-art-glow" /></div>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Evidence Sources</p>
            <h2 className="section-title on-dark reveal d1">Why Electronic Evidence Matters in Family Disputes</h2>
            <p className="wpt-lead on-dark reveal d2">
              A significant portion of modern communication takes place through digital platforms.
              Hover or tap a source to see how it connects to the evidence picture.
            </p>
            <EvidenceExplorer />
          </Container>
        </section>

        {/* 6. SECTION 63 CERTIFICATION SUPPORT */}
        <section className="dfd-light section dfd-s63">
          <div className="dfd-s63-bg" aria-hidden="true">
            <svg className="dfd-s63-scales" viewBox="0 0 240 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="120" y1="26" x2="120" y2="170" />
              <line x1="40" y1="52" x2="200" y2="52" />
              <line x1="96" y1="170" x2="144" y2="170" />
              <line x1="120" y1="170" x2="120" y2="182" />
              <line x1="94" y1="182" x2="146" y2="182" />
              <path d="M40 52 L20 96 h40 z" />
              <path d="M200 52 L180 96 h40 z" />
              <circle cx="120" cy="22" r="6" />
            </svg>
            <span className="dfd-s63-node n1" /><span className="dfd-s63-node n2" />
            <span className="dfd-s63-node n3" /><span className="dfd-s63-node n4" />
          </div>
          <Container className="position-relative">
            <p className="eyebrow reveal">Certification</p>
            <h2 className="section-title reveal d1">Section 63 Certification Support</h2>
            <p className="wpt-lead reveal d2">
              Cyber Crime Defence provides Section 63-related certification support for legally
              authorized matters &mdash; preparing structured documentation for the electronic records
              examined, so legal professionals can evaluate the evidence within the appropriate
              proceedings.
            </p>
            <Section63Cert />
          </Container>
        </section>

        {/* 7. DIGITAL EVIDENCE PRESERVATION */}
        <section className="dfd-dark section">
          <div className="dfd-bg" aria-hidden="true"><div className="mf-art-grid" /><span className="wpt-exploit-scan" /></div>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Workflow</p>
            <h2 className="section-title on-dark reveal d1">Preserving Relevant Digital Evidence</h2>
            <div className="wpt-flow reveal d2">
              {PRESERVE.map((e, i) => (
                <div className="wpt-flow-item" key={e.label}>
                  <div className="wpt-flow-node reveal zoom-in" style={{ transitionDelay: `${0.12 * i}s` }}>
                    <span className="wpt-flow-icon"><i className={`bi ${e.icon}`} /></span>
                    <span className="wpt-flow-label">{e.label}</span>
                  </div>
                  {i < PRESERVE.length - 1 && (
                    <span className="wpt-flow-arrow reveal" style={{ transitionDelay: `${0.12 * i + 0.06}s` }} aria-hidden="true"><i className="bi bi-chevron-right" /></span>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <BackToTop />
    </>
  )
}
