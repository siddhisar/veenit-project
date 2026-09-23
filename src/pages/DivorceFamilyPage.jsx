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

const CHRONO = [
  { icon: 'bi-clock-history', title: 'Chronology', text: 'Establish a sequence of relevant digital events.' },
  { icon: 'bi-chat-square-text', title: 'Communication Patterns', text: 'Understand relevant communication and interaction patterns.' },
  { icon: 'bi-credit-card', title: 'Financial Activity', text: 'Review relevant digital payment or transaction records.' },
  { icon: 'bi-diagram-3', title: 'Relationship Between Events', text: 'Connect different digital records to understand the context surrounding an event.' },
  { icon: 'bi-folder2-open', title: 'Supporting Documentation', text: 'Organize relevant electronic records and associated documentation.' }
]

const INTEGRITY_POINTS = ['Authenticity', 'Relevance', 'Integrity', 'Proper documentation', 'Applicable legal requirements']

const INTEGRITY_FLOW = [
  { icon: 'bi-file-earmark', title: 'Digital Record', text: 'A relevant electronic record is identified.' },
  { icon: 'bi-shield-lock', title: 'Preservation', text: 'The record is preserved in a structured manner.' },
  { icon: 'bi-search', title: 'Forensic Examination', text: 'The evidence is examined using forensic procedures.' },
  { icon: 'bi-journal-text', title: 'Documentation', text: 'Handling and findings are clearly documented.' },
  { icon: 'bi-patch-check', title: 'Certification Support', text: 'Section 63-related certification support is provided.' }
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

        {/* 4. EVIDENCE → CHRONOLOGY → CONTEXT */}
        <section className="dfd-light section">
          <Container>
            <p className="eyebrow reveal">Context</p>
            <h2 className="section-title reveal d1">Evidence, Chronology &amp; Context</h2>
            <p className="dfd-flowline reveal d2">
              Digital Record <i className="bi bi-arrow-right" /> Timestamp <i className="bi bi-arrow-right" /> Event
              <i className="bi bi-arrow-right" /> Related Evidence <i className="bi bi-arrow-right" /> Timeline
            </p>
            <div className="dfd-tl">
              <span className="dfd-tl-track reveal draw-x" aria-hidden="true" />
              {CHRONO.map((c, i) => (
                <div className="dfd-tl-item reveal" key={c.title} style={{ transitionDelay: `${0.1 * i}s` }}>
                  <span className="dfd-tl-node"><i className={`bi ${c.icon}`} /></span>
                  <h3 className="dfd-tl-title">{c.title}</h3>
                  <p className="dfd-tl-text">{c.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. AUTHENTICITY & INTEGRITY */}
        <section className="dfd-dark section">
          <div className="dfd-bg" aria-hidden="true"><div className="mf-art-grid" /><div className="mf-art-glow" /></div>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Standards</p>
            <h2 className="section-title on-dark reveal d1">Evidence Integrity &amp; Legal Documentation</h2>
            <p className="wpt-lead on-dark reveal d2">
              Digital evidence should be considered with attention to:
            </p>
            <div className="dfd-pills reveal d2">
              {INTEGRITY_POINTS.map((p, i) => (
                <span className="dfd-pill reveal zoom-in" key={p} style={{ transitionDelay: `${0.05 * i}s` }}>
                  <i className="bi bi-check2-circle" />{p}
                </span>
              ))}
            </div>
            <div className="wpt-remed-flow dfd-remed">
              {INTEGRITY_FLOW.map((r, i) => (
                <div className={`wpt-remed-step reveal from-left ${i === INTEGRITY_FLOW.length - 1 ? 'is-verified' : ''}`} key={r.title} style={{ transitionDelay: `${0.09 * i}s` }}>
                  <span className="wpt-remed-icon"><i className={`bi ${r.icon}`} /></span>
                  <div className="wpt-remed-body">
                    <h3 className="wpt-remed-title">{r.title}</h3>
                    <p className="wpt-remed-text">{r.text}</p>
                  </div>
                  {i < INTEGRITY_FLOW.length - 1 && <span className="wpt-remed-line" aria-hidden="true" />}
                </div>
              ))}
            </div>
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
