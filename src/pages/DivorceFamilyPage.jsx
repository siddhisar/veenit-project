import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import BackToTop from '../components/BackToTop.jsx'
import CyberBackground from '../components/CyberBackground.jsx'
import FamilyEvidenceVisual from '../components/FamilyEvidenceVisual.jsx'
import EvidenceExplorer from '../components/EvidenceExplorer.jsx'
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

const S63_FLOW = [
  { icon: 'bi-file-earmark', label: 'Electronic Record' },
  { icon: 'bi-shield-lock', label: 'Preservation' },
  { icon: 'bi-search', label: 'Examination' },
  { icon: 'bi-journal-text', label: 'Documentation' },
  { icon: 'bi-patch-check', label: 'Section 63 Support' }
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
        <section className="dfd-light section">
          <Container>
            <p className="eyebrow reveal">Certification</p>
            <h2 className="section-title reveal d1">Section 63 Certification Support</h2>
            <p className="dfd-intro-lead reveal d2">
              Cyber Crime Defence provides Section 63-related certification support for legally
              authorized matters &mdash; preparing structured documentation for the electronic records
              examined, so legal professionals can evaluate the evidence within the appropriate
              proceedings.
            </p>
            <div className="dfd-cert reveal d2">
              <div className="dfd-cert-card">
                <div className="dfd-cert-head">
                  <span className="dfd-cert-seal"><i className="bi bi-patch-check-fill" /></span>
                  <div>
                    <span className="dfd-cert-kicker">Section 63</span>
                    <span className="dfd-cert-title">Certification Support</span>
                  </div>
                </div>
                <span className="dfd-cert-line l1" />
                <span className="dfd-cert-line l2" />
                <span className="dfd-cert-line l3" />
                <span className="dfd-cert-scan" />
              </div>
              <div className="dfd-cert-flow">
                {S63_FLOW.map((f, i) => (
                  <div className="wpt-flow-item" key={f.label}>
                    <div className="dfd-cert-node reveal zoom-in" style={{ transitionDelay: `${0.1 * i}s` }}>
                      <span className="dfd-cert-node-icon"><i className={`bi ${f.icon}`} /></span>
                      <span>{f.label}</span>
                    </div>
                    {i < S63_FLOW.length - 1 && <span className="dfd-cert-arrow" aria-hidden="true"><i className="bi bi-chevron-right" /></span>}
                  </div>
                ))}
              </div>
            </div>
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
