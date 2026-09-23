import CyberBackground from './CyberBackground.jsx'

// Artifact types extracted from the device, drifting out around the phone.
const CHIPS = [
  { icon: 'bi-telephone', cls: 'mf-chip-a' },
  { icon: 'bi-chat-dots', cls: 'mf-chip-b' },
  { icon: 'bi-image', cls: 'mf-chip-c' },
  { icon: 'bi-geo-alt', cls: 'mf-chip-d' },
  { icon: 'bi-envelope', cls: 'mf-chip-e' }
]

export default function MobileForensicVisual() {
  return (
    <div className="mf-visual" aria-hidden="true">
      <div className="mf-visual-bg">
        <CyberBackground />
        <div className="mf-visual-grid" />
        <div className="mf-visual-glow" />
      </div>

      <span className="mf-particle mp1" />
      <span className="mf-particle mp2" />
      <span className="mf-particle mp3" />
      <span className="mf-particle mp4" />

      <div className="mf-phone">
        <span className="mf-phone-notch" />
        <div className="mf-phone-screen">
          <div className="mf-screen-head">
            <span className="mf-screen-dot" /> Forensic Extraction
          </div>
          <div className="mf-screen-rows">
            <span className="r1" /><span className="r2" /><span className="r3" />
            <span className="r4" /><span className="r5" />
          </div>
          <div className="mf-progress"><span /></div>
          <div className="mf-screen-hash">9F2A·C4E7 · acquiring…</div>
          <span className="mf-scan" />
        </div>
      </div>

      {CHIPS.map((c) => (
        <span className={`mf-chip ${c.cls}`} key={c.cls}>
          <i className={`bi ${c.icon}`} />
        </span>
      ))}

      <span className="mf-hash-badge">
        <i className="bi bi-check2-circle" /> SHA-256 · integrity preserved
      </span>
    </div>
  )
}
