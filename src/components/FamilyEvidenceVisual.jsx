import CyberBackground from './CyberBackground.jsx'

// Family-law digital-evidence hub: a verified evidence record at the centre,
// with evidence-source chips connected into a timeline around it.
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
        <g stroke="rgba(51,189,230,0.22)" strokeWidth="1" fill="none">
          <path d="M90 120 L200 250 L120 400" />
          <path d="M360 120 L250 250 L340 420" />
          <path d="M200 250 L250 250" />
        </g>
        <g fill="#33bde6">
          <circle cx="90" cy="120" r="3.5" /><circle cx="200" cy="250" r="4" className="eh-net-pulse" />
          <circle cx="120" cy="400" r="3.5" /><circle cx="360" cy="120" r="3.5" />
          <circle cx="250" cy="250" r="4" className="eh-net-pulse" /><circle cx="340" cy="420" r="3.5" />
        </g>
      </svg>

      <span className="eh-particle p1" />
      <span className="eh-particle p2" />
      <span className="eh-particle p3" />

      <div className="eh-core">
        <span className="eh-ring eh-ring-1" />
        <span className="eh-ring eh-ring-2" />
        <span className="eh-radar" />
        <div className="dfd-doc">
          <span className="eh-doc-seal"><i className="bi bi-file-earmark-check" /></span>
          <span className="eh-doc-line l1" />
          <span className="eh-doc-line l2" />
          <span className="eh-doc-line l3" />
          <span className="eh-doc-check"><i className="bi bi-check-lg" /></span>
          <span className="eh-doc-scan" />
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
