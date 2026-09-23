import CyberBackground from './CyberBackground.jsx'

// Abstract browser/application window being security-scanned.
export default function BrowserScanVisual() {
  return (
    <div className="wpt-scan" aria-hidden="true">
      <div className="wpt-scan-bg">
        <CyberBackground />
        <div className="wpt-scan-grid" />
        <div className="wpt-scan-glow" />
      </div>

      <div className="wpt-browser">
        <div className="wpt-browser-bar">
          <span className="wpt-dot" /><span className="wpt-dot" /><span className="wpt-dot" />
          <span className="wpt-url"><i className="bi bi-shield-lock" /> https://your-application</span>
        </div>
        <div className="wpt-browser-body">
          <div className="wpt-ui-row">
            <span className="wpt-ui-block b1" />
            <span className="wpt-ui-block b2" />
          </div>
          <div className="wpt-ui-lines">
            <span /><span /><span /><span />
          </div>
          <div className="wpt-ui-row">
            <span className="wpt-ui-card" />
            <span className="wpt-ui-card" />
          </div>
          <span className="wpt-marker m1"><i className="bi bi-exclamation" /></span>
          <span className="wpt-marker m2"><i className="bi bi-exclamation" /></span>
          <span className="wpt-scanline" />
        </div>
        <div className="wpt-browser-foot">
          <span className="wpt-foot-dot" /> Scanning endpoints &amp; parameters…
        </div>
      </div>

      <span className="wpt-tag t1">SQLi</span>
      <span className="wpt-tag t2">XSS</span>
      <span className="wpt-tag t3">IDOR</span>
    </div>
  )
}
