import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'
import CyberBackground from '../components/CyberBackground.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

const EVIDENCE_TYPES = [
  { icon: 'bi-mic', label: 'Audio and video transcription' },
  { icon: 'bi-camera-video', label: 'CCTV and surveillance footage' },
  { icon: 'bi-envelope', label: 'Email communications' },
  { icon: 'bi-chat-dots', label: 'WhatsApp and other messaging conversations' },
  { icon: 'bi-share', label: 'Social media records' },
  { icon: 'bi-file-earmark-image', label: 'Digital photographs and documents' },
  { icon: 'bi-hash', label: 'Hash value and integrity reports' },
  { icon: 'bi-folder2-open', label: 'Digital evidence documentation' },
  { icon: 'bi-cloud-arrow-down', label: 'Cloud storage and account records' },
  { icon: 'bi-person-badge', label: 'Expert assistance and testimony, where appropriate' }
]

const MATTERS = [
  { icon: 'bi-shield-exclamation', label: 'Cybercrime and online fraud' },
  { icon: 'bi-bank', label: 'Financial and banking disputes' },
  { icon: 'bi-briefcase', label: 'Employment and commercial disputes' },
  { icon: 'bi-house', label: 'Property and civil matters' },
  { icon: 'bi-people', label: 'Family and matrimonial disputes' },
  { icon: 'bi-file-earmark-text', label: 'Insurance and financial claims' },
  { icon: 'bi-shield-lock', label: 'Law-enforcement investigations' },
  { icon: 'bi-hammer', label: 'Proceedings before courts and other competent authorities' }
]

const STEPS = [
  {
    n: '01',
    icon: 'bi-download',
    title: 'Digital Data Acquisition',
    text: 'Collection or extraction of relevant information from supported devices, storage media, applications, and digital sources using appropriate forensic procedures.'
  },
  {
    n: '02',
    icon: 'bi-shield-lock',
    title: 'Evidence Preservation',
    text: 'Maintain the integrity of acquired evidence and document relevant acquisition details, handling procedures, and identifiers.'
  },
  {
    n: '03',
    icon: 'bi-arrow-counterclockwise',
    title: 'Data Recovery & Examination',
    text: 'Where technically feasible, assist with the recovery and examination of deleted, inaccessible, corrupted, or otherwise difficult-to-access digital information.'
  },
  {
    n: '04',
    icon: 'bi-mic',
    title: 'Audio, Video & Communication Transcription',
    text: 'Convert relevant audio, video, CCTV footage, emails, and messaging conversations into organized transcripts or supporting documentation.'
  },
  {
    n: '05',
    icon: 'bi-hash',
    title: 'Hash & Integrity Verification',
    text: 'Generate cryptographic hash values for relevant digital files or forensic images to provide a means of verifying whether the examined data has changed.'
  },
  {
    n: '06',
    icon: 'bi-file-earmark-check',
    title: 'Section 63 Documentation',
    text: 'Prepare supporting documentation and certificates based on the applicable requirements of Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, using the information and technical details available for the electronic record.'
  }
]

const APPROACH = [
  { icon: 'bi-shield-lock', label: 'Evidence acquisition and preservation' },
  { icon: 'bi-hash', label: 'Hash value generation and verification' },
  { icon: 'bi-pc-display', label: 'Mobile and computer forensic examination' },
  { icon: 'bi-camera-video', label: 'CCTV and multimedia evidence processing' },
  { icon: 'bi-envelope-check', label: 'Communication and email evidence documentation' },
  { icon: 'bi-clipboard-data', label: 'Technical analysis and reporting' },
  { icon: 'bi-easel', label: 'Evidence presentation support' },
  { icon: 'bi-person-badge', label: 'Expert assistance and testimony, where legally and professionally appropriate' }
]

const WHY = [
  { icon: 'bi-fingerprint', title: 'Digital Forensics Expertise', text: 'Structured handling and examination of electronic evidence.' },
  { icon: 'bi-hash', title: 'Evidence Integrity', text: 'Hash-based verification and documented evidence handling procedures.' },
  { icon: 'bi-journal-text', title: 'Legal-Focused Documentation', text: 'Reports designed to clearly communicate technical findings to legal and investigative stakeholders.' },
  { icon: 'bi-tools', title: 'Technical Capability', text: 'Use of appropriate forensic tools and examination methodologies.' },
  { icon: 'bi-diagram-3', title: 'End-to-End Assistance', text: 'Support ranging from evidence acquisition and analysis to reporting and, where applicable, expert testimony.' }
]

export default function ElectronicEvidencePage() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main className="ee-page">
        {/* 1. HERO */}
        <section className="ee-hero">
          <div className="svc-hero-bg" aria-hidden="true">
            <CyberBackground />
            <div className="svc-hero-grid" />
            <div className="svc-hero-glow" />
          </div>
          <Container className="ee-hero-inner">
            <span className="svc-eyebrow reveal from-top">
              <i className="bi bi-file-earmark-check" /> Digital Forensics
            </span>
            <h1 className="ee-hero-title reveal d1">Electronic Evidence &amp; Section 63 Certification</h1>
            <p className="ee-hero-p reveal d2">
              Digital evidence can play a decisive role in legal proceedings, investigations, and
              dispute resolution. However, maintaining the integrity, authenticity, provenance, and
              proper documentation of electronic records is essential when such material is intended
              for use as evidence.
            </p>
            <p className="ee-hero-p reveal d3">
              Our Electronic Evidence and Section 63 Certification services are designed to help
              legal professionals, organizations, investigators, and individuals properly document
              and preserve digital records in accordance with applicable Indian evidentiary
              requirements.
            </p>
            <div className="ee-evidence-panel">
              <p className="ee-lead-text reveal d3">Our services cover a wide range of digital evidence, including:</p>
              <span className="ee-lead-bar reveal d3" aria-hidden="true" />
              <Row className="g-3 ee-evidence-grid">
                {EVIDENCE_TYPES.map((e, i) => (
                  <Col xs={12} sm={6} key={e.label}>
                    <div className="ee-chip reveal zoom-in" style={{ transitionDelay: `${0.05 + (i % 2) * 0.06 + Math.floor(i / 2) * 0.04}s` }}>
                      <span className="ee-chip-icon"><i className={`bi ${e.icon}`} /></span>
                      <span className="ee-chip-label">{e.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        {/* 2. WHY DOCUMENTATION MATTERS */}
        <section className="ee-matters section">
          <Container>
            <p className="eyebrow reveal">Legal Framework</p>
            <h2 className="section-title reveal d1">Why Proper Electronic Evidence Documentation Matters</h2>
            <div className="ee-callout reveal d2">
              <i className="bi bi-bank2 ee-callout-icon" />
              <p>
                The Bharatiya Sakshya Adhiniyam, 2023 (BSA) provides the current legal framework
                governing the admissibility and proof of electronic and digital records in India.
                Section 63 deals with the admissibility of electronic records subject to the
                conditions specified by the law, including the prescribed certificate requirements.
              </p>
            </div>
            <p className="ee-sub reveal d2">Proper evidence handling can be particularly important in matters involving:</p>
            <Row className="g-3 justify-content-center">
              {MATTERS.map((m, i) => (
                <Col xs={12} sm={6} lg={6} key={m.label}>
                  <div className={`ee-matter reveal ${i % 2 ? 'from-right' : 'from-left'}`} style={{ transitionDelay: `${0.04 * i}s` }}>
                    <span className="ee-matter-icon"><i className={`bi ${m.icon}`} /></span>
                    <span>{m.label}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* 3. DIGITAL EVIDENCE SERVICES — alternating timeline */}
        <section className="ee-workflow section">
          <Container>
            <p className="eyebrow reveal">Workflow</p>
            <h2 className="section-title reveal d1">Digital Evidence Services</h2>
            <p className="ee-workflow-lead reveal d2">
              We provide an end-to-end workflow focused on preserving digital information and
              documenting its integrity throughout the examination process.
            </p>
            <div className="ee-timeline">
              <span className="ee-timeline-line reveal draw-y" aria-hidden="true" />
              {STEPS.map((s, i) => (
                <div className={`ee-step ${i % 2 ? 'right' : 'left'}`} key={s.n}>
                  <div className={`ee-step-card reveal ${i % 2 ? 'from-right' : 'from-left'}`}>
                    <span className="ee-step-icon"><i className={`bi ${s.icon}`} /></span>
                    <h3 className="ee-step-title">{s.title}</h3>
                    <p className="ee-step-text">{s.text}</p>
                  </div>
                  <span className="ee-node reveal zoom-in">{s.n}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. OUR APPROACH */}
        <section className="ee-approach section">
          <Container>
            <p className="eyebrow reveal">Methodology</p>
            <h2 className="section-title reveal d1">Our Approach to Digital Evidence</h2>
            <p className="ee-approach-lead reveal d2">
              Digital evidence requires more than simply producing a copy or screenshot. Our process
              focuses on preservation, documentation, examination, integrity verification, and
              traceability so that the handling of relevant electronic records can be clearly
              explained when required.
            </p>
            <p className="ee-sub reveal d2">Depending on the nature of the matter, our team can assist with:</p>
            <Row className="g-4 justify-content-center">
              {APPROACH.map((a, i) => (
                <Col xs={12} sm={6} lg={3} key={a.label}>
                  <div className="ee-approach-card reveal" style={{ transitionDelay: `${0.05 + (i % 4) * 0.07}s` }}>
                    <span className="ee-approach-icon"><i className={`bi ${a.icon}`} /></span>
                    <p>{a.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* 5. WHY WORK WITH US */}
        <section className="ee-whyus section">
          <div className="ee-whyus-bg" aria-hidden="true" />
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Our Value</p>
            <h2 className="section-title on-dark reveal d1">Why Work With Us?</h2>
            <Row className="g-4 justify-content-center mt-2">
              {WHY.map((w, i) => (
                <Col xs={12} md={6} key={w.title}>
                  <div className="ee-why-card reveal zoom-in" style={{ transitionDelay: `${0.05 + i * 0.06}s` }}>
                    <span className="ee-why-icon"><i className={`bi ${w.icon}`} /></span>
                    <div>
                      <h3 className="ee-why-title">{w.title}</h3>
                      <p className="ee-why-text">{w.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* 6. SUPPORTING TEAMS */}
        <section className="ee-support section">
          <svg className="ee-support-net" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g stroke="rgba(51,189,230,0.28)" strokeWidth="1" fill="none">
              <path d="M120 90 L340 180 L560 110 L800 200 L1040 120" />
              <path d="M160 320 L360 240 L600 300 L820 230 L1060 300" />
              <path d="M340 180 L360 240" />
              <path d="M560 110 L600 300" />
              <path d="M800 200 L820 230" />
            </g>
            <g fill="#33bde6">
              <circle cx="120" cy="90" r="4" /><circle cx="340" cy="180" r="4" />
              <circle cx="560" cy="110" r="4" /><circle cx="800" cy="200" r="5" className="ee-net-pulse" />
              <circle cx="1040" cy="120" r="4" /><circle cx="360" cy="240" r="4" />
              <circle cx="600" cy="300" r="5" className="ee-net-pulse" /><circle cx="820" cy="230" r="4" />
              <circle cx="1060" cy="300" r="4" /><circle cx="160" cy="320" r="4" />
            </g>
          </svg>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Nationwide</p>
            <h2 className="section-title on-dark reveal d1">Supporting Legal &amp; Investigative Teams Across India</h2>
            <div className="ee-support-text">
              <p className="reveal d2">
                Digital evidence can originate from phones, computers, cloud services, email
                accounts, messaging platforms, CCTV systems, and other digital sources. We help
                clients organize, preserve, examine, and document such material so that its
                technical characteristics and handling history can be clearly presented to the
                relevant legal or investigative authority.
              </p>
              <p className="reveal d3">
                Whether the matter involves cybercrime, financial fraud, digital disputes, corporate
                investigations, or other proceedings involving electronic records, our objective is
                to provide technically sound evidence handling and clear forensic documentation.
              </p>
            </div>
          </Container>
        </section>

        {/* 7. FINAL CTA */}
        <section className="svc-cta section-sm">
          <Container className="svc-cta-inner reveal">
            <h2>Need Assistance With Digital Evidence?</h2>
            <p>Talk to our forensic team about preserving, examining, and certifying your electronic records.</p>
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
