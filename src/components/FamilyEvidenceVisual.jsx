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

        <div className="dfd-cluster">
          {/* verified legal document / certificate */}
          <div className="dfd-cert2">
            <span className="dfd-cert2-seal"><i className="bi bi-patch-check-fill" /></span>
            <span className="dfd-cert2-line l1" />
            <span className="dfd-cert2-line l2" />
            <span className="dfd-cert2-line l3" />
            <span className="dfd-cert2-line l4" />
            <span className="dfd-cert2-scan" />
          </div>

          {/* phone of digital conversations */}
          <div className="dfd-phone">
            <span className="dfd-phone-notch" />
            <div className="dfd-phone-screen">
              <span className="dfd-bubble b-in" />
              <span className="dfd-bubble b-out" />
              <span className="dfd-bubble b-in b-in2" />
              <span className="dfd-bubble b-out b-out2" />
              <span className="dfd-phone-scan" />
            </div>
          </div>

          {/* subtle legal / courtroom element */}
          <span className="dfd-gavel">
            <svg viewBox="0 0 40 40" width="20" height="20">
              <g transform="rotate(-32 20 17)" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" fill="none">
                <rect x="8" y="10" width="24" height="9" rx="4" fill="rgba(255,255,255,0.15)" />
                <line x1="20" y1="19" x2="20" y2="33" />
              </g>
              <line x1="10" y1="36" x2="30" y2="36" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
            </svg>
          </span>
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
