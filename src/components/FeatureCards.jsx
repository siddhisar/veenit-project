import { Container, Row, Col } from 'react-bootstrap'
import CyberBackground from './CyberBackground.jsx'

const FEATURES = [
  {
    icon: 'bi-shield-check',
    title: 'Compliance-First\nCyber Security',
    text: 'We Design Security Programs Aligned with Indian Cyber Laws.'
  },
  {
    icon: 'bi-file-earmark-text',
    title: 'Audit-Ready by\nDefault',
    text: 'Every Engagement is Documented, Traceable, and Regulator-Friendly.'
  },
  {
    icon: 'bi-person-check',
    title: 'CISO-Led\nAssessments',
    text: 'Strategic oversight from experienced Cyber Security leadership.'
  },
  {
    icon: 'bi-globe',
    title: 'India-Focused,\nGlobally Aligned.',
    text: 'Local Regulatory Alignment with Global Security Standards.'
  }
]

const CELL_PARTICLES = [
  { l: '10%', d: '15s', delay: '0s' },
  { l: '28%', d: '19s', delay: '4s' },
  { l: '46%', d: '13s', delay: '2s' },
  { l: '64%', d: '17s', delay: '6s' },
  { l: '82%', d: '14s', delay: '1s' },
  { l: '93%', d: '18s', delay: '3.5s' }
]

export default function FeatureCards() {
  return (
    <section className="feature-strip cyber-cell">
      <div className="cyber-cell-bg" aria-hidden="true">
        <CyberBackground />
        <div className="cell-grid" />
        <div className="cell-glow" />
        <div className="cell-particles">
          {CELL_PARTICLES.map((p, i) => (
            <span key={i} style={{ left: p.l, animationDuration: p.d, animationDelay: p.delay }} />
          ))}
        </div>
      </div>
      <Container>
        <Row className="g-4 justify-content-center feature-row">
          {FEATURES.map((f, i) => (
            <Col key={f.title} xs={12} sm={6} lg={3}>
              <div className={`feature-card reveal ${i % 2 ? 'from-right' : 'from-left'} d${i + 1}`}>
                <span className="feature-icon">
                  <i className={`bi ${f.icon}`} />
                </span>
                <h3 className="feature-title">
                  {f.title.split('\n').map((line, k) => (
                    <span key={k}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
                <p className="feature-text">{f.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
