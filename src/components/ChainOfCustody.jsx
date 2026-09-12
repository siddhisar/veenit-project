import { Container } from 'react-bootstrap'

const LINKS = [
  { icon: 'bi-inbox', title: 'Evidence Received', text: 'Logged and uniquely identified on intake.' },
  { icon: 'bi-lock', title: 'Evidence Preserved', text: 'Write-protected and securely stored.' },
  { icon: 'bi-hdd', title: 'Forensic Imaging', text: 'Bit-for-bit copies with verified hash values.' },
  { icon: 'bi-cpu', title: 'Analysis', text: 'Examination performed only on working copies.' },
  { icon: 'bi-clipboard-check', title: 'Review', text: 'Findings peer-reviewed for accuracy.' },
  { icon: 'bi-file-earmark-text', title: 'Report', text: 'Documented, auditable, regulator-ready.' }
]

export default function ChainOfCustody() {
  return (
    <section className="custody section" id="chain-of-custody">
      <div className="custody-pattern" aria-hidden="true" />
      <Container className="position-relative">
        <p className="eyebrow on-dark reveal">Trust &amp; Integrity</p>
        <h2 className="section-title on-dark reveal">An Unbroken Chain of Custody</h2>
        <p className="custody-lead reveal d1">
          Traceability at every step &mdash; from the moment evidence arrives to the final report.
        </p>

        <div className="custody-timeline">
          <span className="custody-line reveal draw-y" aria-hidden="true" />
          {LINKS.map((l, i) => (
            <div className={`custody-item reveal ${i % 2 ? 'from-right' : 'from-left'}`} key={l.title}>
              <span className="custody-dot" aria-hidden="true" />
              <div className="custody-card">
                <span className="custody-icon">
                  <i className={`bi ${l.icon}`} />
                </span>
                <div>
                  <h3 className="custody-title">{l.title}</h3>
                  <p className="custody-text">{l.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
