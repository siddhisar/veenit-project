import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header.jsx'
import BackToTop from '../components/BackToTop.jsx'
import CyberBackground from '../components/CyberBackground.jsx'
import MobileScanVisual from '../components/MobileScanVisual.jsx'
import FlipGrid from '../components/FlipGrid.jsx'
import MasMethodology from '../components/MasMethodology.jsx'
import StaticDynamic from '../components/StaticDynamic.jsx'
import PlatformTabs from '../components/PlatformTabs.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

const APPSEC = [
  { icon: 'bi-phone', name: 'Application', front: 'Behavior, functionality & security controls.', points: ['Application behavior', 'Core functionality', 'Security controls', 'Input handling'] },
  { icon: 'bi-database-lock', name: 'Data', front: 'Local storage, sensitive info & data handling.', points: ['Local data storage', 'Sensitive information', 'Data handling', 'Caching & residue'] },
  { icon: 'bi-key', name: 'Authentication', front: 'Login, session & authentication controls.', points: ['Login mechanisms', 'Session management', 'Token handling', 'Authentication controls'] },
  { icon: 'bi-hdd-network', name: 'APIs', front: 'Communication with backend services.', points: ['Endpoint security', 'Authentication', 'Authorization', 'Data exposure'] },
  { icon: 'bi-shield-lock', name: 'Platform', front: 'Android/iOS permissions & components.', points: ['Permissions', 'Exported components', 'Platform APIs', 'Configuration'] },
  { icon: 'bi-wifi', name: 'Network', front: 'TLS, transport security & communication.', points: ['TLS / transport security', 'Certificate validation', 'Traffic protection', 'Communication channels'] }
]

const WEAK = [
  { icon: 'bi-hdd', name: 'Insecure Local Storage', back: 'Checks whether sensitive information is stored insecurely on the device.' },
  { icon: 'bi-key', name: 'Weak Authentication & Sessions', back: 'Reviews login, tokens and session handling for weaknesses.' },
  { icon: 'bi-shield-slash', name: 'Inadequate TLS / Transport Security', back: 'Assesses whether traffic is properly encrypted and validated.' },
  { icon: 'bi-sliders', name: 'Improper Platform Configuration', back: 'Looks for insecure platform settings, components and defaults.' },
  { icon: 'bi-ui-checks-grid', name: 'Excessive Permissions', back: 'Evaluates whether the app requests more access than it needs.' },
  { icon: 'bi-window-stack', name: 'Insecure WebView & Deep Links', back: 'Examines WebView usage and deep-link handling for abuse.' },
  { icon: 'bi-hdd-network', name: 'API & Backend Weaknesses', back: 'Assesses backend endpoints, authentication and data exposure.' },
  { icon: 'bi-file-earmark-binary', name: 'Reverse-Engineering & Tampering', back: 'Checks resistance to code inspection, tampering and repackaging.' }
]

const EXPLOIT = [
  { icon: 'bi-bug', label: 'Vulnerability' },
  { icon: 'bi-crosshair', label: 'Controlled Attack' },
  { icon: 'bi-check2-circle', label: 'Validation' },
  { icon: 'bi-graph-up-arrow', label: 'Impact' }
]
const EXPLOIT_NOTES = [
  'Validate identified vulnerabilities using controlled attack scenarios.',
  'Assess access to sensitive information.',
  'Assess application functionality and backend resources.',
  'Evaluate API abuse.',
  'Evaluate data exposure.',
  'Evaluate authentication bypass.',
  'Evaluate application tampering.'
]

const REMED = [
  { icon: 'bi-bug', title: 'Finding Identified', text: 'A validated vulnerability is documented with evidence and severity.' },
  { icon: 'bi-tools', title: 'Security Fix', text: 'Your team applies fixes addressing the underlying issue.' },
  { icon: 'bi-arrow-repeat', title: 'Retesting', text: 'Reassess the application and verify reported vulnerabilities have been resolved.' },
  { icon: 'bi-diagram-2', title: 'Regression Testing', text: 'Conduct targeted regression testing to ensure remediation introduced no new weaknesses.' },
  { icon: 'bi-patch-check', title: 'Verified', text: 'Confirm the application’s security posture has improved.' }
]

const REPORT_FIELDS = [
  { k: 'Validated vulnerabilities', v: 'Confirmed through controlled testing' },
  { k: 'Technical evidence', v: 'Requests, responses & supporting proof' },
  { k: 'Severity', v: 'Rated by exploitability, impact & risk' },
  { k: 'Business impact', v: 'What a successful attack could achieve' },
  { k: 'Reproduction steps', v: 'Clear steps to reproduce the finding' },
  { k: 'Affected components', v: 'App, API & backend elements involved' },
  { k: 'Risk explanation', v: 'Why the issue matters in context' },
  { k: 'Actionable remediation', v: 'Practical steps to fix the root cause' }
]

export default function MobileAppSecPage() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main className="ee-page mas-page">
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
                  <i className="bi bi-phone" /> VAPT · Mobile Application
                </span>
                <h1 className="ee-hero-title reveal d1">Mobile Application Security Testing</h1>
                <p className="ee-hero-p reveal d2">
                  Mobile applications have become the primary way people bank, communicate, work, and
                  store sensitive information &mdash; which also makes them a high-value target. Mobile
                  Application Penetration Testing is a controlled security assessment that evaluates an
                  app, its APIs, and its supporting services the way a real attacker would.
                </p>
                <p className="ee-hero-p reveal d3">
                  Our security experts combine static and dynamic analysis to examine the application
                  binary, its runtime behaviour, local data storage, authentication, and network
                  communication across Android and iOS. Findings are validated through controlled
                  testing and documented with clear risk ratings and remediation guidance.
                </p>
                <p className="ee-hero-p reveal d4">
                  By proactively testing your mobile application, organizations can reduce their attack
                  surface, protect user data, strengthen platform-specific security controls, and build
                  greater confidence in their mobile platforms.
                </p>
              </Col>
              <Col lg={6} className="ee-hero-visual-col reveal from-right">
                <MobileScanVisual />
              </Col>
            </Row>
          </Container>
        </section>

        {/* 2. MOBILE APPLICATION SECURITY (flip cards, light) */}
        <section className="mas-appsec section">
          <Container>
            <p className="eyebrow reveal">Coverage</p>
            <h2 className="section-title reveal d1">Mobile Application Security</h2>
            <p className="wpt-lead reveal d2">What a mobile assessment examines &mdash; hover or tap a card to see the details.</p>
            <FlipGrid items={APPSEC} />
          </Container>
        </section>

        {/* 3. METHODOLOGY (dark) */}
        <section className="wpt-method section">
          <div className="wpt-method-bg" aria-hidden="true"><div className="mf-art-grid" /><div className="mf-art-glow" /></div>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Methodology</p>
            <h2 className="section-title on-dark reveal d1">Our Mobile Application Security Testing Approach</h2>
            <p className="wpt-lead on-dark reveal d2">A structured, six-stage assessment &mdash; hover a stage to see what it involves.</p>
            <MasMethodology />
          </Container>
        </section>

        {/* 4. STATIC & DYNAMIC (light) */}
        <section className="mas-static section">
          <Container>
            <p className="eyebrow reveal">Analysis</p>
            <h2 className="section-title reveal d1">Static &amp; Dynamic Security Analysis</h2>
            <p className="wpt-lead reveal d2">Switch between the two complementary analysis techniques.</p>
            <StaticDynamic />
          </Container>
        </section>

        {/* 5. MOBILE SECURITY WEAKNESSES (flip cards, dark) */}
        <section className="mas-weak section">
          <div className="wpt-method-bg" aria-hidden="true"><div className="mf-art-grid" /><div className="mf-art-glow" /></div>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Threat Focus</p>
            <h2 className="section-title on-dark reveal d1">Mobile Security Weaknesses</h2>
            <p className="wpt-lead on-dark reveal d2">Common weakness classes we assess &mdash; hover or tap to see what each covers.</p>
            <FlipGrid items={WEAK} />
          </Container>
        </section>

        {/* 6. CONTROLLED EXPLOITATION (dark) */}
        <section className="wpt-exploit section">
          <div className="wpt-exploit-bg" aria-hidden="true"><div className="mf-art-grid" /><span className="wpt-exploit-scan" /></div>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Controlled Lab</p>
            <h2 className="section-title on-dark reveal d1">Controlled Exploitation &amp; Attack Simulation</h2>
            <div className="wpt-flow reveal d2">
              {EXPLOIT.map((e, i) => (
                <div className="wpt-flow-item" key={e.label}>
                  <div className="wpt-flow-node reveal zoom-in" style={{ transitionDelay: `${0.14 * i}s` }}>
                    <span className="wpt-flow-icon"><i className={`bi ${e.icon}`} /></span>
                    <span className="wpt-flow-label">{e.label}</span>
                  </div>
                  {i < EXPLOIT.length - 1 && (
                    <span className="wpt-flow-arrow reveal" style={{ transitionDelay: `${0.14 * i + 0.07}s` }} aria-hidden="true"><i className="bi bi-chevron-right" /></span>
                  )}
                </div>
              ))}
            </div>
            <Row className="g-3 justify-content-center wpt-exploit-notes">
              {EXPLOIT_NOTES.map((n, i) => (
                <Col xs={12} md={6} lg={4} key={n}>
                  <div className="wpt-exploit-note reveal" style={{ transitionDelay: `${0.04 * i}s` }}>
                    <i className="bi bi-shield-check" />
                    <span>{n}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* 7. ANDROID / iOS (light tabs) */}
        <section className="mas-platform section">
          <Container>
            <p className="eyebrow reveal">Platform</p>
            <h2 className="section-title reveal d1">Android &amp; iOS Security</h2>
            <p className="wpt-lead reveal d2">The assessment considers platform-specific security controls.</p>
            <PlatformTabs />
          </Container>
        </section>

        {/* 8. FINDINGS & REPORTING (dark) */}
        <section className="wpt-report section">
          <div className="wpt-method-bg" aria-hidden="true"><div className="mf-art-grid" /><div className="mf-art-glow" /></div>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Reporting</p>
            <h2 className="section-title on-dark reveal d1">Security Findings &amp; Technical Reporting</h2>
            <p className="wpt-lead on-dark reveal d2">A professional penetration-testing deliverable for every validated finding.</p>
            <div className="wpt-report-card reveal d2">
              <div className="wpt-report-top">
                <span className="wpt-report-title"><i className="bi bi-file-earmark-text" /> Mobile Security Report</span>
                <span className="wpt-sev wpt-sev-high">HIGH</span>
              </div>
              <div className="wpt-report-flow">
                {['Finding', 'Severity', 'Evidence', 'Affected Component', 'Impact', 'Remediation'].map((f) => (
                  <span className="wpt-report-chip" key={f}>{f}</span>
                ))}
              </div>
              <div className="wpt-report-grid">
                {REPORT_FIELDS.map((r) => (
                  <div className="wpt-report-field" key={r.k}>
                    <span className="wpt-report-k">{r.k}</span>
                    <span className="wpt-report-v">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 9. REMEDIATION VALIDATION & RETESTING (dark) */}
        <section className="wpt-remed section">
          <div className="wpt-remed-bg" aria-hidden="true"><div className="mf-art-grid" /><div className="mf-art-glow" /></div>
          <Container className="position-relative">
            <p className="eyebrow on-dark reveal">Verification</p>
            <h2 className="section-title on-dark reveal d1">Remediation Validation &amp; Retesting</h2>
            <div className="wpt-remed-flow">
              {REMED.map((r, i) => (
                <div className={`wpt-remed-step reveal from-left ${i === REMED.length - 1 ? 'is-verified' : ''}`} key={r.title} style={{ transitionDelay: `${0.09 * i}s` }}>
                  <span className="wpt-remed-icon"><i className={`bi ${r.icon}`} /></span>
                  <div className="wpt-remed-body">
                    <h3 className="wpt-remed-title">{r.title}</h3>
                    <p className="wpt-remed-text">{r.text}</p>
                  </div>
                  {i < REMED.length - 1 && <span className="wpt-remed-line" aria-hidden="true" />}
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
