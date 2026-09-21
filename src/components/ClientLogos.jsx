import { Container } from 'react-bootstrap'

// Neutral placeholder client marks (original monograms — not real brand logos).
const CLIENTS = [
  { mark: 'bi-bank2', name: 'FinCore Bank' },
  { mark: 'bi-hospital', name: 'MediTrust' },
  { mark: 'bi-cpu', name: 'NovaTech' },
  { mark: 'bi-shop', name: 'RetailOne' },
  { mark: 'bi-building', name: 'UrbanGov' },
  { mark: 'bi-hdd-rack', name: 'DataVault' },
  { mark: 'bi-cart3', name: 'PayLink' },
  { mark: 'bi-mortarboard', name: 'EduSphere' }
]

export default function ClientLogos() {
  const loop = [...CLIENTS, ...CLIENTS]
  return (
    <section className="clients section-sm" id="clients">
      <Container>
        <p className="eyebrow reveal from-top">Our Trusted Clients</p>
        <h2 className="section-title reveal clip">Some of Our Incredible Clients</h2>
      </Container>

      <div className="client-marquee reveal d1">
        <div className="client-track">
          {loop.map((c, i) => (
            <div className="client-logo" key={`${c.name}-${i}`}>
              <i className={`bi ${c.mark}`} />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
