import CyberBackground from './CyberBackground.jsx'

const APP_TILES = ['bi-chat-dots', 'bi-camera', 'bi-bag', 'bi-bank', 'bi-map', 'bi-envelope']

export default function MobileScanVisual() {
  return (
    <div className="mas-scan" aria-hidden="true">
      <div className="mas-scan-bg">
        <CyberBackground />
        <div className="mas-scan-grid" />
        <div className="mas-scan-glow" />
      </div>

      {/* app → API → backend connections */}
      <svg className="mas-net" viewBox="0 0 440 560" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(51,189,230,0.22)" strokeWidth="1" fill="none">
          <path d="M340 150 L410 120" />
          <path d="M350 300 L420 300" />
          <path d="M340 430 L410 460" />
        </g>
        <g fill="#33bde6">
          <circle cx="410" cy="120" r="4" className="mas-net-dot" />
          <circle cx="420" cy="300" r="4.5" className="mas-net-dot" />
          <circle cx="410" cy="460" r="4" className="mas-net-dot" />
        </g>
      </svg>

      <div className="mas-phone">
        <span className="mas-phone-notch" />
        <div className="mas-phone-screen">
          <div className="mas-app-head"><span className="mas-app-dot" /> App Security Scan</div>
          <div className="mas-app-tiles">
            {APP_TILES.map((t, i) => (
              <span className="mas-app-tile" key={i}><i className={`bi ${t}`} /></span>
            ))}
          </div>
          <div className="mas-app-rows"><span /><span /><span /></div>
          <div className="mas-app-hash">9F2A·C4E7 · analyzing…</div>
          <span className="mas-scanline" />
        </div>
        <div className="mas-phone-foot"><span className="mas-foot-dot" /> Static &amp; dynamic analysis</div>
      </div>

      <span className="mas-ind i1"><i className="bi bi-shield-check" /></span>
      <span className="mas-ind i2"><i className="bi bi-key" /></span>
      <span className="mas-ind i3"><i className="bi bi-hdd-network" /></span>

      <span className="mas-tag t1">APK / IPA</span>
      <span className="mas-tag t2">API</span>
    </div>
  )
}
