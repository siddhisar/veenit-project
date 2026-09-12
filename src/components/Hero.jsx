import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CyberBackground from './CyberBackground.jsx'
import heroVideo from '../assets/videos/cyber-hero.mp4'
import heroPoster from '../assets/videos/cyber-hero-poster.jpg'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <video
          className="hero-video"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <CyberBackground />
        <div className="hero-overlay" />
        <div className="hero-grid" />
      </div>

      <Container className="hero-content">
        <p className="hero-eyebrow reveal">Where Compliance Meets Cyber Resilience</p>
        <h1 className="hero-title reveal d1">Digital Task Force - ISMS</h1>
        <p className="hero-tagline reveal d2">Your Cyber Security is Our Responsibility.</p>
        <p className="hero-desc reveal d3">
          Digital Task Force - ISMS is a <strong>Regulatory-Aligned Cyber Security firm</strong>{' '}
          delivering <strong>End-to-End Cyber Audits, VAPT, and Compliance Assurance</strong> for
          Enterprises, Startups.
        </p>
        <div className="hero-actions reveal d4">
          <Button as={Link} to="/request-proposal" className="btn-cyber">
            Request For Proposal
          </Button>
          <Button className="btn-ghost" href="#services">
            Explore Services
          </Button>
        </div>

        <div className="hero-flow" aria-hidden="true">
          <span className="hero-chip reveal zoom-in d1">Data</span>
          <span className="hero-chip reveal zoom-in d2">Device</span>
          <span className="hero-chip reveal zoom-in d3">Email</span>
          <span className="hero-chip reveal zoom-in d4">Network</span>
          <i className="bi bi-arrow-right hero-flow-arrow reveal d5" />
          <span className="hero-chip strong reveal zoom-in d5">Investigation</span>
          <i className="bi bi-arrow-right hero-flow-arrow reveal d6" />
          <span className="hero-chip strong reveal zoom-in d6">Report</span>
        </div>
      </Container>

      <div className="hero-fade" />
    </section>
  )
}
