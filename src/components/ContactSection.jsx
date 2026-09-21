import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm.jsx'

export default function ContactSection() {
  return (
    <section className="contact section" id="get-in-touch">
      <div className="contact-pattern" aria-hidden="true" />
      <Container className="position-relative">
        <p className="eyebrow reveal from-top">Get In Touch</p>
        <h2 className="contact-title reveal clip">Let&rsquo;s Secure Your Digital Frontier</h2>
        <p className="contact-lead reveal d1">
          Whether you are navigating the complexities of the DPDP Act 2023, requiring an urgent
          CERT-In Incident Response, or strengthening your defenses with a VAPT Audit, Cyber Crime
          Defence PVT LTD is ready to deploy.
        </p>
        <p className="contact-sub reveal d2">Your security cannot wait. Connect with our experts today.</p>

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
