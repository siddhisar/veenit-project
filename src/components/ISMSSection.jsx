import { Container, Row, Col } from 'react-bootstrap'
import ismsVisual from '../assets/images/isms-visual.svg'

const APPROACH = [
  {
    n: '01',
    icon: 'bi-person-badge',
    title: 'Experienced Security Leadership',
    text: 'Every engagement is guided by senior professionals with more than 14 years of combined operational and consulting experience.'
  },
  {
    n: '02',
    icon: 'bi-diagram-3',
    title: 'Industry-Recognized Security Frameworks',
    text: 'Our assessment and testing practices draw from established frameworks and standards including OWASP, NIST SP 800-115, PTES, MITRE ATT&CK, and the OWASP LLM Top 10.'
  },
  {
    n: '03',
    icon: 'bi-bullseye',
    title: 'Business-Driven Security Assessments',
    text: 'We go beyond checklist-based testing. Each engagement is tailored to the technology, threat landscape, and business objectives, resulting in practical recommendations rather than generic reports.'
  },
  {
    n: '04',
    icon: 'bi-clipboard-check',
    title: 'Regulatory & Compliance Expertise',
    text: "We support organizations in addressing security and compliance requirements across ISO 27001, SOC 2, India's DPDP Act, GDPR, TISAX, RBI and SEBI regulatory expectations."
  },
  {
    n: '05',
    icon: 'bi-file-earmark-lock',
    title: 'Digital Evidence & Legal Support',
    text: 'Our forensic practice supports digital evidence preservation, examination, documentation, and certification requirements under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, helping make electronic evidence more structured and legally defensible.'
  }
]

export default function ISMSSection() {
  return (
    <section className="isms section" id="isms">
      <Container>
        <Row className="align-items-start g-5">
          <Col lg={6}>
            <div className="isms-visual reveal from-left">
              <img src={ismsVisual} alt="Cyber Crime Defence security illustration" />
            </div>
          </Col>
          <Col lg={6}>
            <h2 className="approach-statement reveal from-right">
              Security is strongest when it is challenged before an attacker gets the opportunity.
            </h2>
            <p className="approach-lead reveal from-right d1">
              We approach every engagement from an adversary&rsquo;s perspective, examine digital
              evidence with forensic discipline, and help engineering teams build security into the
              systems they create.
            </p>

            <h3 className="approach-heading reveal from-right d2">What Sets Our Approach Apart</h3>

            <div className="approach-list">
              <span className="approach-line reveal draw-y" aria-hidden="true" />
              {APPROACH.map((a, i) => (
                <div className={`approach-item reveal from-right d${i + 1}`} key={a.n}>
                  <span className="approach-marker">
                    <span className="approach-num">{a.n}</span>
                  </span>
                  <div className="approach-body">
                    <h4 className="approach-title">
                      <i className={`bi ${a.icon}`} />
                      {a.title}
                    </h4>
                    <p className="approach-text">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
