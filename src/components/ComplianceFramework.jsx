import { Container, Row, Col } from 'react-bootstrap'

const FRAMEWORKS = [
  {
    icon: 'bi-bank',
    title: 'RBI, SEBI & NPCI',
    text: 'Cyber Security Guidelines'
  },
  {
    icon: 'bi-credit-card-2-front',
    title: 'PCI-DSS',
    text: 'Payment & FinTech Ecosystems'
  },
  {
    icon: 'bi-shield-lock',
    title: 'CERT-In Directions (April 2022)',
    text: 'Incident Reporting, Log Retention & SOC Readiness'
  },
  {
    icon: 'bi-hammer',
    title: 'Information Technology Act, 2000',
    text: 'IT Amendment Act, 2008'
  },
  {
    icon: 'bi-person-lock',
    title: 'DPDP Act, 2023',
    text: 'Digital Personal Data Protection Compliance'
  }
]

export default function ComplianceFramework() {
  return (
    <section className="framework section" id="framework">
      <Container>
        <p className="eyebrow reveal from-top">Regulatory Alignment</p>
        <h2 className="section-title reveal clip">Legal &amp; Compliance Framework</h2>

        <Row className="g-4 justify-content-center framework-row mt-4">
          {FRAMEWORKS.map((f, i) => (
            <Col key={f.title} xs={12} sm={6} md={4} lg>
              <div className={`framework-card reveal ${['from-left', '', 'from-right', 'zoom-in', 'from-left'][i % 5]} d${(i % 5) + 1}`}>
                <span className="framework-icon">
                  <i className={`bi ${f.icon}`} />
                </span>
                <h3 className="framework-title">{f.title}</h3>
                <p className="framework-text">{f.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
