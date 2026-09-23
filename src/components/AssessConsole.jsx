import { useState } from 'react'

const TABS = [
  {
    key: 'application', label: 'Application', icon: 'bi-window',
    items: ['Application workflows', 'Input handling & validation', 'Output encoding', 'Error handling', 'Exposed functionality']
  },
  {
    key: 'authentication', label: 'Authentication', icon: 'bi-key',
    items: ['Login mechanisms', 'Session handling', 'Password controls', 'Authentication weaknesses']
  },
  {
    key: 'authorization', label: 'Authorization', icon: 'bi-shield-lock',
    items: ['Access-control enforcement', 'Privilege boundaries', 'IDOR', 'Unauthorized resource access']
  },
  {
    key: 'apis', label: 'APIs', icon: 'bi-hdd-network',
    items: ['Endpoint security', 'Input validation', 'Authentication', 'Data exposure']
  },
  {
    key: 'logic', label: 'Business Logic', icon: 'bi-diagram-2',
    items: ['Workflow abuse', 'Rule & limit bypass', 'Sequence & state handling', 'Transaction integrity']
  },
  {
    key: 'data', label: 'Data Exposure', icon: 'bi-file-earmark-lock',
    items: ['Data in transit', 'Data at rest', 'Sensitive data in responses', 'Information leakage']
  }
]

export default function AssessConsole() {
  const [active, setActive] = useState(0)
  const t = TABS[active]

  return (
    <div className="wac reveal">
      <div className="wac-tabs" role="tablist" aria-label="What we assess">
        {TABS.map((tab, i) => (
          <button
            type="button"
            key={tab.key}
            role="tab"
            aria-selected={active === i}
            className={`wac-tab ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <i className={`bi ${tab.icon}`} />
            {tab.label}
          </button>
        ))}
      </div>
      <div className="wac-panel" role="tabpanel">
        <div className="wac-panel-inner" key={t.key}>
          <div className="wac-panel-head">
            <span className="wac-panel-icon"><i className={`bi ${t.icon}`} /></span>
            <h3 className="wac-panel-title">{t.label}</h3>
            <span className="wac-panel-badge"><span className="wac-panel-dot" /> assessed</span>
          </div>
          <ul className="wac-panel-items">
            {t.items.map((it) => (
              <li key={it}><i className="bi bi-check2" />{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
