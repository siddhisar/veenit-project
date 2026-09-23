import { useState } from 'react'

const STEPS = [
  {
    n: '01', icon: 'bi-clipboard-check', title: 'Scope & Assessment Planning',
    desc: 'Define what will be tested and why, before any activity begins.',
    points: [
      "Understand the application's business purpose, architecture, user roles, and critical functions.",
      'Establish testing boundaries, targets, authentication requirements, and assessment objectives.',
      'Identify critical assets and areas requiring additional attention.'
    ]
  },
  {
    n: '02', icon: 'bi-diagram-3', title: 'Application Mapping & Reconnaissance',
    desc: 'Build a complete picture of the application and its attack surface.',
    points: [
      'Map application functionality, APIs, endpoints, parameters, and user workflows.',
      'Identify technologies, frameworks, third-party components, and exposed services.',
      "Analyze the application's attack surface and potential security entry points."
    ]
  },
  {
    n: '03', icon: 'bi-search', title: 'Security Testing & Vulnerability Identification',
    desc: 'Combine automated scanning with in-depth manual testing.',
    points: [
      'Perform automated scanning alongside detailed manual security testing.',
      'Evaluate common and application-specific weaknesses across the application.'
    ],
    note: 'The vulnerability categories assessed are detailed in the next section.'
  },
  {
    n: '04', icon: 'bi-bullseye', title: 'Controlled Exploitation & Impact Assessment',
    desc: 'Safely prove real risk without disrupting the application.',
    points: [
      'Safely validate significant findings through controlled exploitation.',
      'Determine the level of access or data exposure that could result from a successful attack.',
      'Assess business impact and potential attack paths without unnecessarily disrupting the application.'
    ]
  },
  {
    n: '05', icon: 'bi-file-earmark-bar-graph', title: 'Findings, Risk Rating & Reporting',
    desc: 'Turn findings into a clear, actionable report.',
    points: [
      'Consolidate validated vulnerabilities into a clear technical report.',
      'Assign severity based on exploitability, impact, and business risk.',
      'Provide evidence, affected components, reproduction details, and practical remediation guidance.'
    ]
  },
  {
    n: '06', icon: 'bi-patch-check', title: 'Remediation Verification',
    desc: 'Confirm that fixes actually resolved the issues.',
    points: [
      'Reassess previously identified vulnerabilities after fixes are deployed.',
      'Confirm that remediation has effectively addressed the underlying security issue.',
      'Perform regression checks to identify whether the changes introduced related weaknesses.'
    ]
  }
]

export default function WptMethodology() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]
  const fill = (active / (STEPS.length - 1)) * 100

  return (
    <div className="wm reveal">
      <div className="wm-rail" role="tablist" aria-label="Assessment methodology stages">
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
          <p className="wm-panel-desc">{s.desc}</p>
          <ul className="wm-panel-points">
            {s.points.map((p) => (
              <li key={p}><i className="bi bi-check2" />{p}</li>
            ))}
          </ul>
          {s.note && <p className="wm-panel-note"><i className="bi bi-arrow-right-circle" />{s.note}</p>}
        </div>
      </div>
    </div>
  )
}
