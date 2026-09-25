import { useState } from 'react'

// Interactive "digital evidence certification" workflow for the
// Section 63 Certification Support section. Left: a large forensic
// certification interface. Right: a 5-step vertical workflow whose
// hover/focus/selection drives the highlighted stage in the interface.
const STEPS = [
  {
    icon: 'bi-file-earmark-text',
    title: 'Electronic Record',
    text: 'A relevant electronic record is identified and captured.'
  },
  {
    icon: 'bi-shield-lock',
    title: 'Preservation',
    text: 'Secured in a structured, tamper-evident manner.'
  },
  {
    icon: 'bi-search',
    title: 'Examination',
    text: 'Analysed using sound forensic procedures.'
  },
  {
    icon: 'bi-journal-text',
    title: 'Documentation',
    text: 'Handling and findings are clearly recorded.'
  },
  {
    icon: 'bi-patch-check',
    title: 'Section 63 Support',
    text: 'Structured certification support is prepared.'
  }
]

const META = [
  { k: 'Case Ref', v: 'FAM · 2026 · 0417' },
  { k: 'Integrity', v: 'SHA-256 · 9F2A·C4E7' },
  { k: 'Method', v: 'Forensic Examination' }
]

export default function Section63Cert() {
  const [active, setActive] = useState(0)

  return (
    <div className="s63">
      {/* ---------- LEFT: certification interface ---------- */}
      <div className="s63-visual reveal from-left d2">
        <div className="s63-panel">
          <div className="s63-panel-head">
            <span className="s63-seal"><i className="bi bi-patch-check-fill" /></span>
            <div className="s63-panel-titles">
              <span className="s63-kicker">Section 63</span>
              <span className="s63-title">Certification Support</span>
            </div>
            <span className="s63-status">
              <i className="bi bi-broadcast-pin" />
              {STEPS[active].title}
            </span>
          </div>

          <div className="s63-doc">
            <span className="s63-doc-head">
              <i className="bi bi-file-earmark-lock2" /> Digital Evidence Certificate
            </span>
            <ul className="s63-meta">
              {META.map((m) => (
                <li key={m.k}>
                  <span className="s63-meta-k">{m.k}</span>
                  <span className="s63-meta-v">{m.v}</span>
                </li>
              ))}
              <li className="s63-meta-stage">
                <span className="s63-meta-k">Stage</span>
                <span className="s63-meta-v s63-meta-live">
                  {active + 1}/5 · {STEPS[active].title}
                </span>
              </li>
            </ul>
            <span className="s63-doc-line w1" />
            <span className="s63-doc-line w2" />
            <span className="s63-doc-line w3" />
            <span className="s63-scan" />
          </div>

          {/* progress ticks reflect the active stage */}
          <div className="s63-progress" aria-hidden="true">
            {STEPS.map((s, i) => (
              <span
                key={s.title}
                className={`s63-tick ${i <= active ? 'is-done' : ''} ${i === active ? 'is-active' : ''}`}
              />
            ))}
          </div>

          <span className={`s63-stamp ${active === STEPS.length - 1 ? 'is-verified' : ''}`}>
            <i className="bi bi-check2-circle" />
            {active === STEPS.length - 1 ? 'Verified' : 'In review'}
          </span>
        </div>
      </div>

      {/* ---------- RIGHT: 5-step vertical workflow ---------- */}
      <ol className="s63-steps">
        <span className="s63-steps-line" aria-hidden="true" />
        <span
          className="s63-steps-line-fill"
          aria-hidden="true"
          style={{ height: `${(active / (STEPS.length - 1)) * 100}%` }}
        />
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className={`s63-step reveal from-right ${i === active ? 'is-active' : ''} ${i < active ? 'is-done' : ''}`}
            style={{ transitionDelay: `${0.08 * i}s` }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            tabIndex={0}
          >
            <span className="s63-step-node">
              <i className={`bi ${s.icon}`} />
              <span className="s63-step-num">{i + 1}</span>
            </span>
            <div className="s63-step-body">
              <h3 className="s63-step-title">{s.title}</h3>
              <p className="s63-step-text">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
