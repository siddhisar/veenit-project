import { Container, Row, Col } from 'react-bootstrap'
import CyberBackground from './CyberBackground.jsx'
import CyberShieldVisual from './CyberShieldVisual.jsx'
import heroVideo from '../assets/videos/cyber-hero.mp4'
import heroPoster from '../assets/videos/cyber-hero-poster.jpg'

const PARTICLES = [
  { l: '8%', d: '13s', delay: '0s' },
  { l: '16%', d: '17s', delay: '3s' },
  { l: '24%', d: '11s', delay: '6s' },
  { l: '34%', d: '15s', delay: '1.5s' },
  { l: '44%', d: '19s', delay: '4s' },
  { l: '54%', d: '12s', delay: '2s' },
  { l: '63%', d: '16s', delay: '7s' },
  { l: '72%', d: '14s', delay: '0.8s' },
  { l: '81%', d: '18s', delay: '5s' },
  { l: '90%', d: '12s', delay: '2.6s' },
  { l: '96%', d: '15s', delay: '6.5s' }
]

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
        <div className="hero-grid" />

        {/* faint circuit / network traces */}
        <svg
          className="hero-circuit"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g className="hero-circuit-lines" fill="none">
            <path d="M0 208 H360 L408 256 H628" />
            <path d="M1440 176 H1120 L1072 224 H852" />
            <path d="M0 700 H276 L330 646 H520" />
            <path d="M1440 724 H1150 L1096 670 H904" />
            <path d="M196 0 V120 L240 164 V308" />
            <path d="M1244 0 V140 L1198 186 V326" />
          </g>
          <g className="hero-circuit-nodes">
            <circle cx="628" cy="256" r="3.5" />
            <circle cx="852" cy="224" r="3.5" />
            <circle cx="520" cy="646" r="3" />
            <circle cx="904" cy="670" r="3" />
            <circle cx="240" cy="164" r="3" />
            <circle cx="1198" cy="186" r="3" />
          </g>
        </svg>

        {/* forensic shield emblem watermark */}
        <svg className="hero-emblem" viewBox="0 0 200 224" aria-hidden="true">
          <path
            className="hero-emblem-outer"
            d="M100 8 L182 40 V110 C182 170 143 202 100 216 C57 202 18 170 18 110 V40 Z"
            fill="none"
          />
          <path
            className="hero-emblem-inner"
            d="M100 26 L166 52 V108 C166 158 134 186 100 198 C66 186 34 158 34 108 V52 Z"
          />
          <path className="hero-emblem-check" d="M74 112 l18 18 l36 -40" fill="none" />
        </svg>

        {/* drifting data particles */}
        <div className="hero-particles" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              style={{ left: p.l, animationDuration: p.d, animationDelay: p.delay }}
            />
          ))}
        </div>

        <div className="hero-overlay" />
        <div className="hero-scan" aria-hidden="true" />
        <div className="hero-vignette" />
      </div>

      <Container className="hero-content">
        <Row className="align-items-center g-5 hero-row">
          <Col lg={6} className="hero-copy">
            <span className="hero-badge reveal from-left">
              <i className="bi bi-shield-lock" />
              Cyber Crime Cell · Digital Forensics
            </span>
            <p className="hero-eyebrow reveal from-left d1">Strengthening Security Through Compliance</p>
            <h1 className="hero-title reveal from-left d2">
              Cyber Crime Defence<sup className="brand-reg">®</sup>
            </h1>
            <p className="hero-desc reveal from-left d3">
              Delivering specialized cybersecurity and digital forensic solutions to protect
              information, investigate digital incidents, and strengthen organizational resilience.
            </p>
            <p className="hero-desc hero-desc-2 reveal from-left d4">
              Our services follow rigorous quality and information-security practices aligned with
              ISO 9001 and ISO 27001 standards.
            </p>
            <div className="hero-cta reveal from-left d5">
              <a href="#get-in-touch" className="btn-cyber hero-cta-btn">
                Request an Enquiry <i className="bi bi-arrow-right" />
              </a>
              <a href="#isms" className="hero-cta-ghost">
                Explore Our Services <i className="bi bi-chevron-down" />
              </a>
            </div>
          </Col>

          <Col lg={6} className="hero-visual-col reveal from-right d2">
            <div className="hero-visual-wrap">
              <CyberShieldVisual />
              <span className="hv-chip hv-chip-a">
                <span className="hv-chip-k">Uptime</span>
                <span className="hv-chip-v">99.98%</span>
              </span>
              <span className="hv-chip hv-chip-b">
                <span className="hv-chip-k">Events</span>
                <span className="hv-chip-v">1,241</span>
              </span>
              <span className="hv-chip hv-chip-c">
                <span className="hv-chip-k">Threat Level</span>
                <span className="hv-chip-v ok"><i className="bi bi-shield-check" /> Low</span>
              </span>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="hero-fade" />
    </section>
  )
}
