import { useState } from 'react'

const STEPS = [
  {
    n: '01', icon: 'bi-clipboard-check', title: 'Scope & Test Planning',
    desc: 'Define the application, target platforms and objectives before testing begins.',
    points: ['Application & target devices', 'Android / iOS platforms', 'Testing boundaries & objectives', 'Critical functionality & data'],
    viz: [{ i: 'bi-phone', l: 'App' }, { i: 'bi-ui-checks', l: 'Scope' }, { i: 'bi-bullseye', l: 'Targets' }]
  },
  {
    n: '02', icon: 'bi-diagram-3', title: 'Application Reconnaissance & Architecture Review',
    desc: 'Map how the application, its APIs and backend services fit together.',
    points: ['Application components & flows', 'API endpoints & parameters', 'Backend & third-party services', 'Attack surface analysis'],
    viz: [{ i: 'bi-phone', l: 'App' }, { i: 'bi-hdd-network', l: 'API' }, { i: 'bi-server', l: 'Backend' }]
  },
  {
    n: '03', icon: 'bi-search', title: 'Static & Dynamic Security Analysis',
    desc: 'Examine the application binary and its behaviour at runtime.',
    points: ['Static binary & code analysis', 'Runtime / dynamic testing', 'Data handling & storage', 'Network & API interaction'],
    viz: [{ i: 'bi-file-earmark-binary', l: 'Binary' }, { i: 'bi-cpu', l: 'Runtime' }, { i: 'bi-shield-lock', l: 'Findings' }]
  },
  {
    n: '04', icon: 'bi-bullseye', title: 'Controlled Exploitation & Attack Simulation',
    desc: 'Safely validate findings through controlled attack scenarios.',
    points: ['Controlled attack scenarios', 'Access & data exposure', 'API abuse & auth bypass', 'Application tampering'],
    viz: [{ i: 'bi-bug', l: 'Vuln' }, { i: 'bi-crosshair', l: 'Attack' }, { i: 'bi-check2-circle', l: 'Validate' }]
  },
  {
    n: '05', icon: 'bi-file-earmark-bar-graph', title: 'Security Findings & Technical Reporting',
    desc: 'Deliver validated findings with severity, evidence and remediation.',
    points: ['Validated vulnerabilities', 'Severity & business impact', 'Evidence & reproduction', 'Actionable remediation'],
    viz: [{ i: 'bi-file-earmark-text', l: 'Report' }, { i: 'bi-flag', l: 'Severity' }, { i: 'bi-wrench', l: 'Fix' }]
  },
  {
    n: '06', icon: 'bi-patch-check', title: 'Remediation Validation & Retesting',
    desc: 'Confirm fixes are effective and introduce no new weaknesses.',
    points: ['Reassess after fixes', 'Verify issues resolved', 'Targeted regression testing', 'No new weaknesses introduced'],
    viz: [{ i: 'bi-bug', l: 'Finding' }, { i: 'bi-tools', l: 'Fix' }, { i: 'bi-patch-check', l: 'Verified' }]
  }
]

export default function MasMethodology() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]
  const fill = (active / (STEPS.length - 1)) * 100

  return (
    <div className="wm reveal">
      <div className="wm-rail" role="tablist" aria-label="Mobile testing methodology stages">
        <span className="wm-rail-track" aria-hidden="true"><span className="wm-rail-fill" style={{ height: `${fill}%` }} /></span>
        {STEPS.map((step, i) => (
          <button
            type="button"
            key={step.n}
            role="tab"
            aria-selected={active === i}
            className={`wm-step ${active === i ? 'active' : ''} ${i < active ? 'done' : ''}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className="wm-node">{step.n}</span>
            <span className="wm-step-label">{step.title}</span>
          </button>
        ))}
      </div>

      <div className="wm-panel" role="tabpanel">
        <div className="wm-panel-inner" key={active}>
          <div className="wm-panel-head">
            <span className="wm-panel-icon"><i className={`bi ${s.icon}`} /></span>
            <div>
              <span className="wm-panel-step">Stage {s.n} of 06</span>
              <h3 className="wm-panel-title">{s.title}</h3>
            </div>
          </div>
          <div className="wm-viz" aria-hidden="true">
            {s.viz.map((v, j) => (
              <span className="wm-viz-item" key={v.l}>
                <span className="wm-viz-chip"><i className={`bi ${v.i}`} />{v.l}</span>
                {j < s.viz.length - 1 && <i className="bi bi-arrow-right wm-viz-arrow" />}
              </span>
            ))}
          </div>
          <p className="wm-panel-desc">{s.desc}</p>
          <ul className="wm-panel-points">
            {s.points.map((p) => (
              <li key={p}><i className="bi bi-check2" />{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
