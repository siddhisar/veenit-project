import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import BackToTop from '../components/BackToTop.jsx'
import CyberBackground from '../components/CyberBackground.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

// Lightweight placeholder for service pages that are not built out yet.
// Reuses the shared hero styling, theme, typography and animations.
export default function ServicePlaceholder({ title, eyebrow = 'VAPT', icon = 'bi-shield-check' }) {
  useScrollReveal()

  return (
    <>
      <Header />
      <main className="ee-page">
        <section className="svc-hero svc-hero-placeholder">
          <div className="svc-hero-bg" aria-hidden="true">
            <CyberBackground />
            <div className="svc-hero-grid" />
            <div className="svc-hero-glow" />
          </div>
          <Container className="svc-hero-inner">
            <span className="svc-eyebrow reveal from-top">
              <i className={`bi ${icon}`} /> {eyebrow}
            </span>
            <h1 className="svc-title reveal d1">{title}</h1>
            <p className="svc-tagline reveal d2">
              Detailed information about this service is coming soon.
            </p>
            <div className="svc-hero-actions reveal d3">
              <Link to="/#get-in-touch" className="btn-cyber">
                Request for Enquiry <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <BackToTop />
    </>
  )
}
