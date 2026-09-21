import CyberBackground from './CyberBackground.jsx'

// Evidence types orbiting the central document — audio, video, chat, hash, print.
const NODES = [
  { a: '0deg', icon: 'bi-mic' },
  { a: '72deg', icon: 'bi-camera-video' },
  { a: '144deg', icon: 'bi-chat-dots' },
  { a: '216deg', icon: 'bi-hash' },
  { a: '288deg', icon: 'bi-fingerprint' }
]

export default function EvidenceVisual() {
  return (
    <div className="ev-visual" aria-hidden="true">
      <div className="ev-bg">
        <CyberBackground />
        <div className="ev-grid" />
        <div className="ev-glow" />
      </div>

      <div className="ev-stage">
        <span className="ev-ring ev-ring-1" />
        <span className="ev-ring ev-ring-2" />

        <div className="ev-orbit">
          {NODES.map((n, i) => (
            <span className="ev-node" style={{ '--a': n.a }} key={i}>
              <i className={`bi ${n.icon}`} />
            </span>
          ))}
        </div>

        {/* Central digital document being examined */}
        <div className="ev-doc">
          <div className="ev-doc-head">
            <span className="ev-doc-seal"><i className="bi bi-file-earmark-check" /></span>
            <span className="ev-doc-meta">
              <b />
              <i />
            </span>
          </div>
          <div className="ev-doc-body">
            <span /><span /><span /><span /><span /><span />
          </div>
          <div className="ev-hash">
            <i className="bi bi-hash" /> 9F2A·C4E7·B1D0 — integrity verified
          </div>
          <span className="ev-scan" />
        </div>

        <span className="ev-verified">
          <span className="ev-verified-dot" /> Section 63 Verified
        </span>
      </div>
    </div>
  )
}
