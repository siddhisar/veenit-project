import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'
import CyberBackground from '../components/CyberBackground.jsx'
import MobileForensicVisual from '../components/MobileForensicVisual.jsx'
import ArtifactExplorer from '../components/ArtifactExplorer.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

const IDENTIFY = [
  { icon: 'bi-chat-square-text', label: 'Communications between individuals' },
  { icon: 'bi-chat-dots', label: 'Deleted or existing messages' },
  { icon: 'bi-telephone', label: 'Call and contact information' },
  { icon: 'bi-images', label: 'Photographs and videos' },
  { icon: 'bi-file-earmark-text', label: 'Documents and downloaded files' },
  { icon: 'bi-grid-1x2', label: 'Application-related artifacts' },
  { icon: 'bi-globe2', label: 'Browser and search activity' },
  { icon: 'bi-geo-alt', label: 'Location-related information' },
  { icon: 'bi-phone', label: 'Device and system information' },
  { icon: 'bi-person-badge', label: 'Account and authentication artifacts' },
  { icon: 'bi-clock-history', label: 'Timestamps and metadata' },
  { icon: 'bi-search', label: 'Relevant digital activity associated with an investigation' }
]

const STEPS = [
  {
    n: '01',
    icon: 'bi-clipboard-check',
    title: 'Case Intake & Scope Definition',
    desc: 'Every examination begins by understanding the purpose and scope of the investigation.',
    items: [
      'Device make and model',
      'Operating system and version',
      'Device condition',
      'Identification details where appropriate',
      'Available passcode or authorization',
      'Nature of the investigation',
      'Specific evidence requirements',
      'Applicable legal or organizational requirements'
    ],
    end: 'A clearly defined scope helps ensure that the examination remains focused and appropriately documented.'
  },
  {
    n: '02',
    icon: 'bi-clipboard-data',
    title: 'Device Identification & Documentation',
    desc: 'Before acquisition, the device and its condition are documented.',
    items: [
      'Device photographs',
      'Model and serial information',
      'IMEI or other device identifiers',
      'SIM and storage details',
      'Physical condition',
      'Power state',
      'Screen state',
      'Available network connections',
      'Relevant accessories or storage media'
    ],
    end: 'This initial documentation helps establish the condition of the evidence when it was received.'
  },
  {
    n: '03',
    icon: 'bi-download',
    title: 'Forensic Data Acquisition',
    desc: 'The next stage involves obtaining available information using an appropriate forensic acquisition technique.',
    pre: 'Depending on the device and circumstances, acquisition may involve logical, file-system, physical, or other supported forensic methods.',
    listIntro: 'The acquisition method is selected according to factors such as:',
    items: [
      'Android or iOS platform',
      'Device model',
      'OS version',
      'Security configuration',
      'Device accessibility',
      'Encryption',
      'Available forensic capabilities',
      'Scope of the investigation'
    ],
    end: 'Where technically feasible, acquisition is performed in a manner designed to minimize changes to the original evidence.'
  },
  {
    n: '04',
    icon: 'bi-hash',
    title: 'Evidence Integrity & Hashing',
    desc: 'Maintaining evidence integrity is a fundamental component of digital forensics.',
    pre: 'Where applicable, forensic images, extracted datasets, and evidence files can be assigned cryptographic hash values. These values can subsequently be used to demonstrate whether the associated forensic data has changed.',
    listIntro: 'Relevant examination records may include:',
    items: [
      'Acquisition details',
      'Tool and software information',
      'Date and time',
      'Examiner information',
      'Evidence identifiers',
      'Hash values',
      'Processing activities',
      'Examination notes'
    ],
    end: 'This creates a documented trail from evidence acquisition through analysis and reporting.'
  }
]

const FLOW = [
  { icon: 'bi-phone', label: 'Device' },
  { icon: 'bi-hdd', label: 'Storage' },
  { icon: 'bi-collection', label: 'Artifacts' },
  { icon: 'bi-search', label: 'Examination' },
  { icon: 'bi-arrow-counterclockwise', label: 'Potential Recovery' }
]

const LIMITS = [
  'Time elapsed since deletion',
  'Subsequent device usage',
  'Encryption',
  'Storage technology',
  'Application behavior',
  'Operating-system security',
  'Database structures',
  'Factory resets',
  'Secure deletion mechanisms',
  'Data overwriting'
]

export default function MobileForensicsPage() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main className="ee-page mf-page">
        {/* 1. HERO */}
        <section className="ee-hero">
          <div className="svc-hero-bg" aria-hidden="true">
            <CyberBackground />
            <div className="svc-hero-grid" />
            <div className="svc-hero-glow" />
          </div>
          <Container className="ee-hero-inner">
            <Row className="align-items-center g-5 ee-hero-row">
              <Col lg={6} className="ee-hero-visual-col reveal from-left">
                <MobileForensicVisual />
              </Col>
              <Col lg={6} className="ee-hero-copy">
                <span className="svc-eyebrow reveal from-top">
                  <i className="bi bi-phone" /> Digital Forensics
                </span>
                <h1 className="ee-hero-title reveal d1">Mobile Forensics</h1>
                <p className="mf-hero-tagline reveal d2">
                  Turning Mobile Device Data into Actionable Digital Evidence
                </p>
                <p className="ee-hero-p reveal d3">
                  Mobile phones have evolved into personal digital archives. Conversations,
                  photographs, emails, application data, location information, documents, browser
                  activity, account information, and other digital traces can provide valuable
                  insight during an investigation.
                </p>
                <p className="ee-hero-p reveal d4">
                  At Cyber Crime Defence, our mobile forensic services are designed to help
                  organizations, legal professionals, investigators, and authorized agencies
                  acquire, preserve, examine, and document digital evidence from mobile devices in a
                  controlled and methodical manner.
                </p>
                <p className="ee-hero-p reveal d5">
                  Our objective is not simply to extract information from a device. We focus on
                  maintaining the integrity, traceability, documentation, and forensic relevance of
                  the evidence throughout the examination process.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* 2. WHAT IS MOBILE FORENSICS? */}
        <section className="ee-matters section">
          <Container>
            <p className="eyebrow reveal">Overview</p>
            <h2 className="section-title reveal d1">What Is Mobile Forensics?</h2>
            <div className="mf-prose reveal d2">
              <p>
                Mobile forensics is the practice of acquiring, preserving, examining, and
                documenting digital information from mobile devices in a structured and
                methodical manner. It applies established forensic principles to smartphones,
                tablets, and similar devices so that relevant data can be reviewed without
                compromising its integrity.
              </p>
              <p>
                Because mobile devices store large volumes of personal and application data, a
                careful, well-documented approach is essential to ensure that any information
                identified can be clearly explained and relied upon during an investigation.
              </p>
            </div>
            <p className="ee-sub reveal d2">A forensic examination can potentially help identify:</p>
            <Row className="g-3 justify-content-center">
              {IDENTIFY.map((m, i) => (
                <Col xs={12} sm={6} lg={6} key={m.label}>
                  <div className={`ee-matter reveal ${i % 2 ? 'from-right' : 'from-left'}`} style={{ transitionDelay: `${0.03 * i}s` }}>
                    <span className="ee-matter-icon"><i className={`bi ${m.icon}`} /></span>
                    <span>{m.label}</span>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="mf-note reveal d2">
              <span className="mf-note-icon"><i className="bi bi-info-circle" /></span>
              <div>
                <span className="mf-note-tag">Forensic limitation</span>
                <p>
                  The availability of particular data is dependent on factors such as the device
                  model, operating-system version, security controls, encryption, application
                  architecture, acquisition method, and whether the original information has been
                  overwritten.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. EXAMINATION PROCESS — alternating timeline */}
        <section className="ee-workflow section">
          <Container>
            <p className="eyebrow reveal">Methodology</p>
            <h2 className="section-title reveal d1">Our Mobile Forensic Examination Process</h2>
            <p className="ee-workflow-lead reveal d2">
              At Cyber Crime Defence, mobile forensic work follows a structured workflow intended
              to minimize unnecessary interaction with the original device and maintain a clear
              record of the examination.
            </p>
            <div className="ee-timeline">
              <span className="ee-timeline-line reveal draw-y" aria-hidden="true" />
              {STEPS.map((s, i) => (
                <div className={`ee-step ${i % 2 ? 'right' : 'left'}`} key={s.n}>
                  <div className="ee-step-card mf-step-card reveal mf-rise">
                    <span className="ee-step-icon"><i className={`bi ${s.icon}`} /></span>
                    <h3 className="ee-step-title">{s.title}</h3>
                    <p className="ee-step-text">{s.desc}</p>
                    {s.pre && <p className="mf-step-pre">{s.pre}</p>}
                    {s.listIntro && <p className="mf-step-intro">{s.listIntro}</p>}
                    <ul className="mf-step-items">
                      {s.items.map((it) => (
                        <li key={it}><i className="bi bi-check2" />{it}</li>
                      ))}
                    </ul>
                    <p className="mf-step-end"><i className="bi bi-arrow-return-right" />{s.end}</p>
                  </div>
                  <span className="ee-node reveal mf-rise">{s.n}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. WHAT INFORMATION CAN BE EXAMINED? */}
        <section className="ee-approach section mf-artifacts">
          <Container>
            <p className="eyebrow reveal">Artifacts</p>
            <h2 className="section-title reveal d1">What Information Can Be Examined?</h2>
            <p className="ee-approach-lead reveal d2">
              The exact information available varies from device to device. Subject to technical
              feasibility and authorization, a mobile forensic examination may identify and analyze
              a broad range of artifacts.
            </p>
            <ArtifactExplorer />
          </Container>
        </section>

        {/* 5. DELETED DATA RECOVERY */}
        <section className="ee-support section mf-recovery">
          <svg className="ee-support-net" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g stroke="rgba(51,189,230,0.24)" strokeWidth="1" fill="none">
              <path d="M120 90 L340 180 L560 110 L800 200 L1040 120" />
              <path d="M160 320 L360 240 L600 300 L820 230 L1060 300" />
            </g>
            <g fill="#33bde6">
              <circle cx="340" cy="180" r="4" className="ee-net-pulse" />
              <circle cx="800" cy="200" r="5" className="ee-net-pulse" />
              <circle cx="600" cy="300" r="5" className="ee-net-pulse" />
            </g>
          </svg>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Recovery</p>
            <h2 className="section-title on-dark reveal d1">Deleted Data Recovery</h2>
            <div className="mf-recovery-intro">
              <p className="reveal d2">
                One of the most frequently requested areas of mobile forensics is the recovery of
                deleted information.
              </p>
              <p className="reveal d2">
                When a file, message, photograph, or other record is deleted, the underlying
                information may not immediately disappear from every storage location. Depending on
                how the operating system and application manage storage, remnants, databases,
                caches, thumbnails, backups, or other artifacts may remain.
              </p>
              <p className="reveal d3">
                Our forensic examination can therefore include an assessment for potentially
                recoverable deleted artifacts.
              </p>
            </div>

            <div className="mf-flow">
              {FLOW.map((f, i) => (
                <div className="mf-flow-item" key={f.label}>
                  <div className="mf-flow-node reveal zoom-in" style={{ transitionDelay: `${0.12 * i}s` }}>
                    <span className="mf-flow-icon"><i className={`bi ${f.icon}`} /></span>
                    <span className="mf-flow-label">{f.label}</span>
                  </div>
                  {i < FLOW.length - 1 && (
                    <span className="mf-flow-arrow reveal" style={{ transitionDelay: `${0.12 * i + 0.06}s` }} aria-hidden="true">
                      <i className="bi bi-chevron-right" />
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mf-limitation reveal from-right">
              <div className="mf-limitation-head">
                <span className="mf-limitation-icon"><i className="bi bi-info-circle" /></span>
                <h3>Deleted-data recovery is not guaranteed.</h3>
              </div>
              <p className="mf-limitation-lead">Successful recovery depends on factors including:</p>
              <ul className="mf-limitation-list">
                {LIMITS.map((l) => (
                  <li key={l}><i className="bi bi-dash-lg" />{l}</li>
                ))}
              </ul>
              <p className="mf-limitation-note">
                Accordingly, Cyber Crime Defence does not guarantee recovery of a particular deleted
                file or message.
              </p>
            </div>
          </Container>
        </section>

        {/* 6. FINAL CTA */}
        <section className="svc-cta section-sm">
          <Container className="svc-cta-inner reveal">
            <h2>Need Assistance With Mobile Forensics?</h2>
            <p>Talk to our forensic team about acquiring, preserving, examining, and documenting evidence from mobile devices.</p>
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
