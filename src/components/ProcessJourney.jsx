import { Container } from 'react-bootstrap'

const STEPS = [
  { n: '01', icon: 'bi-search', title: 'Identify', text: 'Scope the incident and locate relevant data sources.' },
  { n: '02', icon: 'bi-hdd-stack', title: 'Acquire', text: 'Collect data using sound, defensible methods.' },
  { n: '03', icon: 'bi-shield-lock', title: 'Preserve', text: 'Protect integrity with hashing and controlled handling.' },
  { n: '04', icon: 'bi-cpu', title: 'Analyze', text: 'Examine artifacts, logs, and timelines in depth.' },
  { n: '05', icon: 'bi-diagram-3', title: 'Correlate', text: 'Connect findings across systems into a clear picture.' },
  { n: '06', icon: 'bi-file-earmark-text', title: 'Report', text: 'Deliver documented, regulator-ready conclusions.' }
]

export default function ProcessJourney() {
  return (
    <section className="journey section" id="process">
      <Container>
        <p className="eyebrow reveal">How We Investigate</p>
        <h2 className="section-title reveal">A Traceable Investigation Pipeline</h2>
        <p className="journey-lead reveal d1">
          Every engagement follows a disciplined, documented path &mdash; so findings hold up to
          scrutiny.
        </p>

        <div className="journey-track">
          <span className="journey-line reveal draw-x" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <div className={`journey-step reveal ${i % 2 ? 'from-right' : 'from-left'} d${i + 1}`} key={s.title}>
              <span className="journey-node">
                <i className={`bi ${s.icon}`} />
              </span>
              <span className="journey-num">{s.n}</span>
              <h3 className="journey-title">{s.title}</h3>
              <p className="journey-text">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
