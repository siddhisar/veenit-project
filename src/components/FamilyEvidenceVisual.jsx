import CyberBackground from './CyberBackground.jsx'

// Electronic Evidence + Family Law + Digital Forensics:
// a phone of conversations + a verified legal document/certificate + a subtle
// gavel, framed by evidence-source chips and an integrity hash.
const CHIPS = [
  { icon: 'bi-chat-dots', name: 'conversations', cls: 'eh-file-a' },
  { icon: 'bi-envelope', name: 'emails', cls: 'eh-file-b' },
  { icon: 'bi-images', name: 'photos & video', cls: 'eh-file-c' },
  { icon: 'bi-credit-card', name: 'payments', cls: 'eh-file-d' },
  { icon: 'bi-geo-alt', name: 'location', cls: 'eh-file-e' }
]

export default function FamilyEvidenceVisual() {
  return (
    <div className="eh-visual dfd-visual" aria-hidden="true">
      <div className="eh-bg">
        <CyberBackground />
        <div className="eh-grid" />
        <div className="eh-glow" />
      </div>

      <svg className="eh-net" viewBox="0 0 440 560" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(51,189,230,0.2)" strokeWidth="1" fill="none">
          <path d="M90 120 L210 260 L120 410" />
          <path d="M360 120 L250 260 L350 420" />
        </g>
        <g fill="#33bde6">
          <circle cx="90" cy="120" r="3.5" /><circle cx="210" cy="260" r="4" className="eh-net-pulse" />
          <circle cx="120" cy="410" r="3.5" /><circle cx="360" cy="120" r="3.5" />
          <circle cx="250" cy="260" r="4" className="eh-net-pulse" /><circle cx="350" cy="420" r="3.5" />
        </g>
      </svg>

      <span className="eh-particle p1" />
      <span className="eh-particle p2" />
      <span className="eh-particle p3" />

      <div className="eh-core">
        <span className="eh-ring eh-ring-1" />
        <span className="eh-ring eh-ring-2" />
        <span className="eh-radar" />

        <div className="dfd-scene">
          {/* the two parties in a family/matrimonial matter */}
          <span className="dfd-party pa"><i className="bi bi-person" /></span>
          <span className="dfd-link" />
          <span className="dfd-party pb"><i className="bi bi-person" /></span>

          {/* the digital evidence under consideration */}
          <div className="dfd-evi">
            <span className="dfd-evi-seal"><i className="bi bi-file-earmark-check" /></span>
            <span className="dfd-evi-line l1" />
            <span className="dfd-evi-line l2" />
            <span className="dfd-evi-check"><i className="bi bi-check-lg" /></span>
            <span className="dfd-evi-scan" />
          </div>

          {/* scales of justice — legal proceedings */}
          <svg className="dfd-scales" viewBox="0 0 180 150" aria-hidden="true">
            <g stroke="#7bdcf7" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="90" y1="30" x2="90" y2="118" />
              <line x1="26" y1="38" x2="154" y2="38" />
              <line x1="70" y1="118" x2="110" y2="118" />
              <line x1="90" y1="118" x2="90" y2="130" />
              <line x1="74" y1="130" x2="106" y2="130" />
              <line x1="26" y1="38" x2="26" y2="56" />
              <path d="M8 56 Q26 80 44 56" />
              <line x1="154" y1="38" x2="154" y2="56" />
              <path d="M136 56 Q154 80 172 56" />
            </g>
            <circle cx="90" cy="27" r="6" fill="#7bdcf7" />
          </svg>
        </div>
      </div>

      {CHIPS.map((c) => (
        <span className={`eh-file ${c.cls}`} key={c.name}>
          <i className={`bi ${c.icon}`} />
          {c.name}
        </span>
      ))}

      <span className="eh-lock"><i className="bi bi-shield-lock" /></span>
      <span className="eh-hash">
        <i className="bi bi-check2-circle" /> SHA-256 · evidence preserved
      </span>
    </div>
  )
}
