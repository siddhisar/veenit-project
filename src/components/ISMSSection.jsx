import { Container, Row, Col } from 'react-bootstrap'
import ismsVisual from '../assets/images/isms-visual.svg'

const TILES = [
  {
    icon: 'bi-hdd-network',
    title: 'DPDP Act 2023 Compliance',
    text: 'Lawful Data Handling, Consent Control, and Breach Readiness.',
    variant: 'dark'
  },
  {
    icon: 'bi-phone',
    title: 'ISMS Implementation (ISO 27001)',
    text: 'Protecting Confidentiality, Integrity, and Availability of Information.',
    variant: 'blue'
  },
  {
    icon: 'bi-shield-lock',
    title: 'Risk Assessment & Data Governance',
    text: 'Identifying Data Exposure and Access Control Gaps.',
    variant: 'blue'
  },
  {
    icon: 'bi-clipboard-check',
    title: 'Audit-Ready & Regulatory Alignment',
    text: 'CERT-In Aligned Controls and Compliance Reporting.',
    variant: 'dark'
  }
]

export default function ISMSSection() {
  return (
    <section className="isms section" id="isms">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="isms-visual reveal">
              <img src={ismsVisual} alt="DPDP Act and ISMS compliance illustration" />
            </div>
          </Col>
          <Col lg={6}>
            <p className="eyebrow text-start reveal" style={{ textAlign: 'left' }}>
              DPDP Act &amp; ISMS Compliance
            </p>
            <h2 className="isms-heading reveal d1">
              Enabling Privacy, Governance &amp; Information Security Through Structured Compliance
              Frameworks
            </h2>

            <Row className="g-3 mt-2 isms-tiles">
              {TILES.map((t, i) => (
                <Col xs={12} sm={6} key={t.title}>
                  <div className={`isms-tile ${t.variant} reveal d${(i % 4) + 1}`}>
                    <span className="isms-tile-icon">
                      <i className={`bi ${t.icon}`} />
                    </span>
                    <h4 className="isms-tile-title">{t.title}</h4>
                    <p className="isms-tile-text">{t.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
