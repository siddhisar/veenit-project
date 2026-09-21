import CyberBackground from './CyberBackground.jsx'

// Orbiting indicators map to the right-side content:
// scanning/VAPT, forensics, network security, evidence/compliance, vulnerability.
const NODES = [
  { a: '0deg', icon: 'bi-search' },
  { a: '72deg', icon: 'bi-fingerprint' },
  { a: '144deg', icon: 'bi-hdd-network' },
  { a: '216deg', icon: 'bi-file-earmark-lock' },
  { a: '288deg', icon: 'bi-bug' }
]

export default function CyberShieldVisual() {
  return (
    <div className="cyber-visual reveal from-left" aria-hidden="true">
      <div className="cv-bg">
        <CyberBackground />
        <div className="cv-grid" />
        <div className="cv-glow" />
      </div>

      <div className="cv-stage">
        <span className="cv-ring cv-ring-1" />
        <span className="cv-ring cv-ring-2" />
        <span className="cv-ring cv-ring-3" />
        <span className="cv-radar" />

        <div className="cv-orbit">
          {NODES.map((n, i) => (
            <span className="cv-node" style={{ '--a': n.a }} key={i}>
              <i className={`bi ${n.icon}`} />
            </span>
          ))}
        </div>

        <div className="cv-core">
          <svg className="cv-shield" viewBox="0 0 120 140">
            <defs>
              <linearGradient id="cvShieldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#6fd6f5" />
                <stop offset="1" stopColor="#1f7fc0" />
              </linearGradient>
            </defs>
            <path
              d="M60 6 L108 24 V70 C108 104 86 124 60 134 C34 124 12 104 12 70 V24 Z"
              fill="rgba(9,18,44,0.65)"
              stroke="url(#cvShieldGrad)"
              strokeWidth="3"
            />
            <path
              className="cv-check"
              d="M40 70 l14 14 l28 -32"
              fill="none"
              stroke="#7bdcf7"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="cv-status">
          <span className="cv-status-dot" /> Live Threat Monitoring
        </span>
      </div>
    </div>
  )
}
