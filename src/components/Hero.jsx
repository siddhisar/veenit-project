import { Container } from 'react-bootstrap'
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
      </Container>

      <div className="hero-fade" />
    </section>
  )
}
