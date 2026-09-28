import { Container } from 'react-bootstrap'
import tv9 from '../assets/images/clients/tv9-marathi.png'
import navipolice from '../assets/images/clients/navi-mumbai-police.png'
import rubyhall from '../assets/images/clients/ruby-hall-clinic.png'
import storyboard18 from '../assets/images/clients/storyboard18.png'
import cyberintelsys from '../assets/images/clients/cyberintelsys.png'
import etciso from '../assets/images/clients/et-ciso.png'
import systools from '../assets/images/clients/systools.png'
import clientFlame from '../assets/images/clients/client-flame.png'

// Client logos. `dark: true` puts the logo on a dark chip (for white/
// light-ink logos so they stay visible on the light section).
const CLIENTS = [
  { src: tv9, name: 'TV9 Marathi' },
  { src: navipolice, name: 'Navi Mumbai Police' },
  { src: rubyhall, name: 'Ruby Hall Clinic' },
  { src: storyboard18, name: 'Storyboard18' },
  { src: cyberintelsys, name: 'Cyberintelsys' },
  { src: etciso, name: 'ET CISO' },
  { src: systools, name: 'SysTools', dark: true },
  { src: clientFlame, name: 'Apollo Hospitals', dark: true }
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
            <div className={`client-logo ${c.dark ? 'client-logo--dark' : ''}`} key={`${c.name}-${i}`}>
              <img src={c.src} alt={c.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
