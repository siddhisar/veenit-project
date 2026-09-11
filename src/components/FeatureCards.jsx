import { Container, Row, Col } from 'react-bootstrap'

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

export default function FeatureCards() {
  return (
    <section className="feature-strip">
      <Container>
        <Row className="g-4 justify-content-center feature-row">
          {FEATURES.map((f, i) => (
            <Col key={f.title} xs={12} sm={6} lg={3}>
              <div className={`feature-card reveal d${i + 1}`}>
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
