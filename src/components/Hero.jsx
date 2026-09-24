import { Container } from 'react-bootstrap'
import CyberBackground from './CyberBackground.jsx'
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

        {/* Cyber analyst working at a command-center console (silhouette, from behind) */}
        <svg
          className="hero-scene"
          viewBox="0 0 760 470"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgba(51,189,230,0)" />
              <stop offset="50%" stopColor="rgba(123,220,247,0.5)" />
              <stop offset="100%" stopColor="rgba(51,189,230,0)" />
            </linearGradient>
            <radialGradient id="screenLight" cx="50%" cy="0%" r="80%">
              <stop offset="0" stopColor="rgba(51,189,230,0.5)" />
              <stop offset="100%" stopColor="rgba(51,189,230,0)" />
            </radialGradient>
            <clipPath id="scrL"><rect x="70" y="118" width="162" height="112" rx="9" /></clipPath>
            <clipPath id="scrC"><rect x="252" y="92" width="212" height="138" rx="9" /></clipPath>
            <clipPath id="scrR"><rect x="484" y="118" width="162" height="112" rx="9" /></clipPath>
          </defs>

          {/* ambient glow */}
          <ellipse className="scene-glow" cx="380" cy="200" rx="340" ry="170" fill="rgba(51,189,230,0.14)" />

          {/* LEFT monitor — live line chart */}
          <g className="scene-mon">
            <rect x="70" y="118" width="162" height="112" rx="9" fill="rgba(9,18,40,0.94)" stroke="rgba(51,189,230,0.55)" strokeWidth="1.6" />
            <g clipPath="url(#scrL)">
              <line x1="70" y1="188" x2="232" y2="188" stroke="rgba(51,189,230,0.18)" strokeWidth="1" />
              <polyline className="mon-line" points="80,214 108,190 132,200 158,168 184,182 208,150 228,164" fill="none" stroke="#33bde6" strokeWidth="2.4" />
            </g>
          </g>

          {/* CENTER monitor — code + scanning bar */}
          <g className="scene-mon">
            <rect x="252" y="92" width="212" height="138" rx="9" fill="rgba(9,18,40,0.96)" stroke="rgba(51,189,230,0.7)" strokeWidth="1.8" />
            <g clipPath="url(#scrC)">
              <g className="scene-code" fill="rgba(140,220,245,0.7)">
                <rect x="268" y="110" width="80" height="7" rx="3.5" />
                <rect x="268" y="126" width="126" height="7" rx="3.5" />
                <rect x="286" y="142" width="94" height="7" rx="3.5" />
                <rect x="286" y="158" width="138" height="7" rx="3.5" />
                <rect x="268" y="174" width="66" height="7" rx="3.5" />
                <rect x="268" y="190" width="112" height="7" rx="3.5" />
                <rect x="286" y="206" width="90" height="7" rx="3.5" />
              </g>
              <rect className="scene-cursor" x="384" y="206" width="9" height="8" fill="#7bdcf7" />
              <rect className="scene-scan" x="252" y="92" width="212" height="34" fill="url(#scanGrad)" />
            </g>
          </g>

          {/* RIGHT monitor — bar chart + radar */}
          <g className="scene-mon">
            <rect x="484" y="118" width="162" height="112" rx="9" fill="rgba(9,18,40,0.94)" stroke="rgba(51,189,230,0.55)" strokeWidth="1.6" />
            <g clipPath="url(#scrR)">
              <g className="scene-bars" fill="#33bde6">
                <rect x="502" y="176" width="16" height="42" rx="2" />
                <rect x="526" y="158" width="16" height="60" rx="2" />
                <rect x="550" y="188" width="16" height="30" rx="2" />
                <rect x="574" y="146" width="16" height="72" rx="2" />
              </g>
              <circle cx="616" cy="164" r="24" fill="none" stroke="rgba(51,189,230,0.45)" strokeWidth="1.3" />
              <circle cx="616" cy="164" r="12" fill="none" stroke="rgba(51,189,230,0.3)" strokeWidth="1" />
              <line className="scene-radar" x1="616" y1="164" x2="616" y2="140" stroke="#7bdcf7" strokeWidth="1.8" />
            </g>
          </g>

          {/* screen light spilling onto the analyst */}
          <ellipse cx="380" cy="300" rx="150" ry="90" fill="url(#screenLight)" />

          {/* desk surface */}
          <rect x="40" y="292" width="680" height="9" rx="4" fill="rgba(51,189,230,0.28)" />
          <rect x="40" y="292" width="680" height="3" rx="2" fill="rgba(123,220,247,0.6)" />

          {/* analyst silhouette from behind */}
          <g className="scene-person">
            <rect x="312" y="300" width="136" height="170" rx="42" fill="#0c1730" stroke="rgba(51,189,230,0.4)" strokeWidth="1.6" />
            <path d="M320 470 q60 -104 120 0 Z" fill="#0c1730" stroke="rgba(51,189,230,0.4)" strokeWidth="1.6" />
            <circle cx="380" cy="300" r="46" fill="#0c1730" stroke="rgba(51,189,230,0.5)" strokeWidth="1.8" />
            {/* cyan rim / screen light on head + shoulders */}
            <path d="M341 286 a46 46 0 0 1 78 0" fill="none" stroke="rgba(123,220,247,0.75)" strokeWidth="2.4" />
            <path d="M330 452 q50 -80 100 0" fill="none" stroke="rgba(123,220,247,0.4)" strokeWidth="2" />
          </g>
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
        <div className="hero-frame reveal zoom-in">
          <span className="hf-corner tl" aria-hidden="true" />
          <span className="hf-corner tr" aria-hidden="true" />
          <span className="hf-corner bl" aria-hidden="true" />
          <span className="hf-corner br" aria-hidden="true" />
          <span className="hf-scan" aria-hidden="true" />

          <span className="hero-badge reveal d1">
            <i className="bi bi-shield-lock" />
            Cyber Crime Cell · Digital Forensics
          </span>
          <p className="hero-eyebrow reveal d2">Strengthening Security Through Compliance</p>
          <h1 className="hero-title reveal d3">
            Cyber Crime Defence<sup className="brand-reg">®</sup>
          </h1>
          <p className="hero-desc reveal d4">
            Delivering specialized cybersecurity and digital forensic solutions to protect
            information, investigate digital incidents, and strengthen organizational resilience.
            Our services follow rigorous quality and information-security practices aligned with
            ISO 9001 and ISO 27001 standards.
          </p>
        </div>
      </Container>

      <div className="hero-fade" />
    </section>
  )
}
