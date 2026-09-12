import { Container, Row, Col } from 'react-bootstrap'
import ServiceCard from './ServiceCard.jsx'

const SERVICES = [
  {
    title: 'Cyber Security Audit & Risk Assessment',
    items: [
      'IT Act & CERT-In Compliance Audits',
      'DPDP Act Compliance Gap Assessments',
      'Board-Level Cyber Risk Reporting'
    ]
  },
  {
    title: 'Vulnerability Assessment & Penetration Testing',
    items: [
      'Web, Mobile, API & Cloud VAPT',
      'Network & Infrastructure Testing',
      'Red Team / Blue Team Exercises'
    ]
  },
  {
    title: 'Regulatory & Compliance Readiness',
    items: [
      'ISO/IEC 27001 Implementation & Audits',
      'RBI / SEBI / PCI-DSS Compliance',
      'Incident Response Preparedness'
    ]
  },
  {
    title: 'Data Protection & Privacy Advisory',
    items: [
      'DPDP Act Compliance Strategy',
      'Data Flow & Consent Architecture',
      'Breach Notification Playbooks'
    ]
  }
]

export default function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="services-pattern" aria-hidden="true" />
      <Container className="position-relative">
        <p className="eyebrow on-dark reveal from-top">Our Services</p>
        <h2 className="section-title on-dark reveal from-right">
          Cyber Security Solutions Aligned with
          <br />
          India&rsquo;s Regulatory Landscape
        </h2>

        <Row className="g-4 mt-4">
          {SERVICES.map((s, i) => (
            <Col key={s.title} xs={12} md={6} lg={3}>
              <ServiceCard
                title={s.title}
                items={s.items}
                delay={(i % 4) + 1}
                dir={['from-left', 'from-top', 'from-top', 'from-right'][i % 4]}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
