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
            <path d="M628 256 L720 348" />
            <path d="M852 224 L720 348" />
          </g>
          <g className="hero-circuit-nodes">
            <circle cx="628" cy="256" r="3.5" />
            <circle cx="852" cy="224" r="3.5" />
            <circle cx="520" cy="646" r="3" />
            <circle cx="904" cy="670" r="3" />
            <circle cx="240" cy="164" r="3" />
            <circle cx="1198" cy="186" r="3" />
            <circle cx="720" cy="348" r="4.5" className="hero-node-pulse" />
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
          <path
            className="hero-emblem-check"
            d="M74 112 l18 18 l36 -40"
            fill="none"
          />
        </svg>

        <div className="hero-overlay" />
        <div className="hero-scan" aria-hidden="true" />
        <div className="hero-vignette" />
      </div>

      <Container className="hero-content">
        <span className="hero-badge reveal">
          <i className="bi bi-shield-lock" />
          Cyber Crime Cell · Digital Forensics
        </span>
        <p className="hero-eyebrow reveal d1">Strengthening Security Through Compliance</p>
        <h1 className="hero-title reveal d2">
          Cyber Crime Defence <span className="hero-title-accent">PVT LTD</span>
        </h1>
        <p className="hero-desc reveal d3">
          Delivering specialized cybersecurity and digital forensic solutions to protect
          information, investigate digital incidents, and strengthen organizational resilience.
          Our services follow rigorous quality and information-security practices aligned with
          ISO 9001 and ISO 27001 standards.
        </p>
        <div className="hero-standards reveal d4">
          <span className="hero-standard"><i className="bi bi-patch-check" /> ISO 9001</span>
          <span className="hero-standard"><i className="bi bi-patch-check" /> ISO 27001</span>
          <span className="hero-standard"><i className="bi bi-fingerprint" /> Digital Forensics</span>
          <span className="hero-standard"><i className="bi bi-search" /> VAPT &amp; Audits</span>
        </div>
      </Container>

      <div className="hero-fade" />
    </section>
  )
}
