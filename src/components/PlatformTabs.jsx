import { useState } from 'react'

const PLATFORMS = [
  {
    key: 'android', label: 'Android', icon: 'bi-android2',
    items: ['Application permissions', 'Exported components', 'Deep links', 'WebViews', 'Application architecture', 'SDKs', 'Data storage', 'API communication']
  },
  {
    key: 'ios', label: 'iOS', icon: 'bi-apple',
    items: ['Permissions & entitlements', 'URL schemes & universal links', 'WebView (WKWebView) usage', 'Keychain & data storage', 'App Transport Security', 'Inter-app communication', 'Third-party SDKs', 'API communication']
  }
]

export default function PlatformTabs() {
  const [active, setActive] = useState(0)
  const p = PLATFORMS[active]

  return (
    <div className="wac reveal">
      <div className="wac-tabs" role="tablist" aria-label="Platform security">
        {PLATFORMS.map((tab, i) => (
          <button
            type="button"
            key={tab.key}
            role="tab"
            aria-selected={active === i}
            className={`wac-tab ${active === i ? 'active' : ''}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <i className={`bi ${tab.icon}`} /> {tab.label}
          </button>
        ))}
      </div>
      <div className="wac-panel" role="tabpanel">
        <div className="wac-panel-inner" key={p.key}>
          <div className="wac-panel-head">
            <span className="wac-panel-icon"><i className={`bi ${p.icon}`} /></span>
            <h3 className="wac-panel-title">{p.label} Security</h3>
            <span className="wac-panel-badge"><span className="wac-panel-dot" /> assessed</span>
          </div>
          <ul className="wac-panel-items">
            {p.items.map((it) => (
              <li key={it}><i className="bi bi-check2" />{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
