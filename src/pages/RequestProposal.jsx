import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ContactForm from '../components/ContactForm.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

export default function RequestProposal() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main className="rp-page">
        {/* Intro */}
        <section className="rp-intro section">
          <div className="rp-intro-pattern" aria-hidden="true" />
          <Container className="position-relative">
            <div className="rp-intro-card reveal">
              <span className="rp-pill">Why Contact Cyber Crime Defence - ISMS</span>
              <h1 className="rp-title">
                &ldquo;Security Is Not a Product &mdash; It&rsquo;s a Process&rdquo;
              </h1>
              <p className="rp-lead">
                When you contact <strong>Cyber Crime Defence - ISMS</strong>, you are not engaging a
                vendor &mdash; you are gaining a trusted Cyber Security partner led by a team of{' '}
                <strong>ISO-Certified Auditors</strong>.
              </p>
              <p className="rp-emph">
                Your <span className="hl">SECURITY</span> cannot wait. Connect with our{' '}
                <span className="hl">EXPERTS</span> today.
              </p>
            </div>
          </Container>
        </section>

        {/* Case / proposal form */}
        <section className="rp-form-section section" id="request-form">
          <div className="contact-pattern" aria-hidden="true" />
          <Container className="position-relative">
            <p className="eyebrow reveal">Request For Proposal</p>
            <h2 className="section-title reveal">Submit Your Case</h2>
            <p className="rp-form-sub reveal d1">
              Share a few details and our experts will respond with a tailored proposal.
            </p>
            <div className="contact-card reveal d1">
              <ContactForm />
            </div>
            <div className="rp-back reveal d2">
              <Link to="/" className="rp-back-link">
                <i className="bi bi-arrow-left" /> Back to Home
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
