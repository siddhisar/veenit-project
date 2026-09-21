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
        <p className="hero-eyebrow reveal">Strengthening Security Through Compliance</p>
        <h1 className="hero-title reveal d1">Cyber Crime Defence PVT LTD</h1>
        <p className="hero-desc reveal d3">
          Delivering specialized cybersecurity and digital forensic solutions to protect
          information, investigate digital incidents, and strengthen organizational resilience.
          Our services follow rigorous quality and information-security practices aligned with
          ISO 9001 and ISO 27001 standards.
        </p>
      </Container>

      <div className="hero-fade" />
    </section>
  )
}
