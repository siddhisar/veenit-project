import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm.jsx'

export default function ContactSection() {
  return (
    <section className="contact section" id="get-in-touch">
      <div className="contact-pattern" aria-hidden="true" />
      <Container className="position-relative">
        <p className="rp-emph contact-emph reveal from-top">
          Your <span className="hl">SECURITY</span> cannot wait. Connect with our{' '}
          <span className="hl">EXPERTS</span> today.
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
