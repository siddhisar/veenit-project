import { useState } from 'react'

const MODES = {
  static: {
    label: 'Static Analysis',
    icon: 'bi-file-earmark-binary',
    flow: [
      { i: 'bi-file-earmark-binary', l: 'Application Binary' },
      { i: 'bi-code-square', l: 'Code / Components' },
      { i: 'bi-shield-exclamation', l: 'Security Findings' }
    ],
    points: ['Application binaries', 'Source-level artifacts', 'Embedded secrets', 'Permissions', 'Components', 'Libraries', 'SDKs', 'Configuration']
  },
  dynamic: {
    label: 'Dynamic Analysis',
    icon: 'bi-cpu',
    flow: [
      { i: 'bi-phone', l: 'Mobile Device' },
      { i: 'bi-window', l: 'Running App' },
      { i: 'bi-hdd-network', l: 'Network / API' },
      { i: 'bi-server', l: 'Backend' }
    ],
    points: ['Runtime behavior', 'Authentication', 'Data handling', 'Network communication', 'API interaction', 'Security controls']
  }
}

export default function StaticDynamic() {
  const [mode, setMode] = useState('static')
  const m = MODES[mode]

  return (
    <div className="mas-sd reveal">
      <div className="mas-sd-toggle" role="tablist" aria-label="Analysis type">
        {['static', 'dynamic'].map((k) => (
          <button
            type="button"
            key={k}
            role="tab"
            aria-selected={mode === k}
            className={`mas-sd-btn ${mode === k ? 'active' : ''}`}
            onClick={() => setMode(k)}
            onMouseEnter={() => setMode(k)}
          >
            <i className={`bi ${MODES[k].icon}`} /> {MODES[k].label}
          </button>
        ))}
      </div>

      <div className="mas-sd-panel">
        <div className="mas-sd-inner" key={mode}>
          <div className="mas-sd-flow">
            {m.flow.map((f, i) => (
              <span className="mas-sd-flowitem" key={f.l}>
                <span className="mas-sd-node"><span className="mas-sd-node-icon"><i className={`bi ${f.i}`} /></span>{f.l}</span>
                {i < m.flow.length - 1 && <i className="bi bi-chevron-right mas-sd-arrow" />}
              </span>
            ))}
          </div>
          <ul className="mas-sd-points">
            {m.points.map((p) => (
              <li key={p}><i className="bi bi-check2" />{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
