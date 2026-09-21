import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm.jsx'

export default function ContactSection() {
  return (
    <section className="contact section" id="get-in-touch">
      <div className="contact-pattern" aria-hidden="true" />
      <Container className="position-relative">
        <p className="eyebrow reveal from-top">Get In Touch</p>
        <h2 className="contact-title contact-why reveal">Why Contact Cyber Crime Defence?</h2>
        <p className="contact-lead reveal d1">
          When you engage Cyber Crime Defence PVT LTD, you gain more than a cybersecurity service
          provider &mdash; you gain a trusted security partner backed by experienced professionals
          and structured security practices.
        </p>

        <div className="contact-card reveal d2">
          <span className="contact-card-badge">
            <i className="bi bi-shield-lock" />
            Confidential Case Intake
          </span>
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}
