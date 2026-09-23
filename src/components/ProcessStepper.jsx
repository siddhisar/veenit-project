import { useState } from 'react'

const STEPS = [
  {
    n: '01', icon: 'bi-clipboard-check', title: 'Case Intake & Scope Definition',
    desc: 'Every examination begins by understanding the purpose and scope of the investigation.',
    listIntro: 'Scope is established around details such as:',
    items: [
      'Device make and model',
      'Operating system and version',
      'Device condition',
      'Identification details where appropriate',
      'Available passcode or authorization',
      'Nature of the investigation',
      'Specific evidence requirements',
      'Applicable legal or organizational requirements'
    ],
    end: 'A clearly defined scope helps ensure that the examination remains focused and appropriately documented.'
  },
  {
    n: '02', icon: 'bi-clipboard-data', title: 'Device Identification & Documentation',
    desc: 'Before acquisition, the device and its condition are documented.',
    listIntro: 'Documentation typically records:',
    items: [
      'Device photographs',
      'Model and serial information',
      'IMEI or other device identifiers',
      'SIM and storage details',
      'Physical condition',
      'Power state',
      'Screen state',
      'Available network connections',
      'Relevant accessories or storage media'
    ],
    end: 'This initial documentation helps establish the condition of the evidence when it was received.'
  },
  {
    n: '03', icon: 'bi-download', title: 'Forensic Data Acquisition',
    desc: 'The next stage involves obtaining available information using an appropriate forensic acquisition technique.',
    pre: 'Depending on the device and circumstances, acquisition may involve logical, file-system, physical, or other supported forensic methods.',
    listIntro: 'The acquisition method is selected according to factors such as:',
    items: [
      'Android or iOS platform',
      'Device model',
      'OS version',
      'Security configuration',
      'Device accessibility',
      'Encryption',
      'Available forensic capabilities',
      'Scope of the investigation'
    ],
    end: 'Where technically feasible, acquisition is performed in a manner designed to minimize changes to the original evidence.'
  },
  {
    n: '04', icon: 'bi-hash', title: 'Evidence Integrity & Hashing',
    desc: 'Maintaining evidence integrity is a fundamental component of digital forensics.',
    pre: 'Where applicable, forensic images, extracted datasets, and evidence files can be assigned cryptographic hash values. These values can subsequently be used to demonstrate whether the associated forensic data has changed.',
    listIntro: 'Relevant examination records may include:',
    items: [
      'Acquisition details',
      'Tool and software information',
      'Date and time',
      'Examiner information',
      'Evidence identifiers',
      'Hash values',
      'Processing activities',
      'Examination notes'
    ],
    end: 'This creates a documented trail from evidence acquisition through analysis and reporting.'
  }
]

export default function ProcessStepper() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]
  const fill = STEPS.length > 1 ? (active / (STEPS.length - 1)) * 100 : 0

  return (
    <div className="pst reveal">
      <div className="pst-rail" role="tablist" aria-label="Examination process steps">
        <span className="pst-rail-track" aria-hidden="true">
          <span className="pst-rail-fill" style={{ width: `${fill}%` }} />
        </span>
        {STEPS.map((step, i) => (
          <button
            type="button"
            key={step.n}
            role="tab"
            aria-selected={active === i}
            className={`pst-step ${active === i ? 'active' : ''} ${i < active ? 'done' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="pst-node">{step.n}</span>
            <span className="pst-step-title">{step.title}</span>
          </button>
        ))}
      </div>

      <div className="pst-panel" role="tabpanel">
        <div className="pst-panel-inner" key={active}>
          <div className="pst-panel-head">
            <span className="pst-panel-icon"><i className={`bi ${s.icon}`} /></span>
            <div className="pst-panel-heading">
              <span className="pst-panel-step">Step {s.n} of {STEPS.length.toString().padStart(2, '0')}</span>
              <h3 className="pst-panel-title">{s.title}</h3>
            </div>
          </div>
          <p className="pst-panel-desc">{s.desc}</p>
          {s.pre && <p className="pst-panel-pre">{s.pre}</p>}
          {s.listIntro && <p className="pst-panel-intro">{s.listIntro}</p>}
          <ul className="pst-panel-items">
            {s.items.map((it) => (
              <li key={it}><i className="bi bi-check2" />{it}</li>
            ))}
          </ul>
          <p className="pst-panel-end"><i className="bi bi-arrow-return-right" />{s.end}</p>
        </div>
      </div>
    </div>
  )
}
