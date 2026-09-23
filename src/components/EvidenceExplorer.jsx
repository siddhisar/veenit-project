import { useEffect, useState } from 'react'

const CATS = [
  { icon: 'bi-phone', name: 'Smartphones', desc: 'Device data, apps, and on-device records.' },
  { icon: 'bi-laptop', name: 'Computers & Laptops', desc: 'Files, documents, and system activity.' },
  { icon: 'bi-envelope', name: 'Email Accounts', desc: 'Sent and received email correspondence.' },
  { icon: 'bi-chat-dots', name: 'Messaging Applications', desc: 'Chat conversations and shared media.' },
  { icon: 'bi-share', name: 'Social-Media Platforms', desc: 'Posts, messages, and account activity.' },
  { icon: 'bi-cloud', name: 'Cloud Storage', desc: 'Backed-up files, photos, and documents.' },
  { icon: 'bi-credit-card', name: 'Digital Payment Applications', desc: 'Transaction and payment records.' },
  { icon: 'bi-images', name: 'Photographs & Videos', desc: 'Images, videos, and their metadata.' },
  { icon: 'bi-mic', name: 'Audio Recordings', desc: 'Voice notes and audio files.' },
  { icon: 'bi-file-earmark-text', name: 'Electronic Documents', desc: 'PDFs, agreements, and records.' },
  { icon: 'bi-telephone', name: 'Call Records', desc: 'Call logs, timestamps, and duration.' },
  { icon: 'bi-geo-alt', name: 'Location-Related Records', desc: 'Location data associated with records.' }
]

const R = 38 // svg line radius (of 50)
const points = CATS.map((_, i) => {
  const a = ((i * 360) / CATS.length - 90) * (Math.PI / 180)
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a), deg: (i * 360) / CATS.length - 90 }
})

export default function EvidenceExplorer() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767.98px)')
    const apply = () => setIsMobile(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const a = CATS[active]

  const panel = (
    <div className="dex-panel" key={active}>
      <span className="dex-panel-icon"><i className={`bi ${a.icon}`} /></span>
      <div>
        <h3 className="dex-panel-title">{a.name}</h3>
        <p className="dex-panel-desc">{a.desc}</p>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <div className="dex-mobile reveal">
        <div className="dex-grid">
          {CATS.map((c, i) => (
            <button
              type="button"
              key={c.name}
              className={`dex-gbtn ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <i className={`bi ${c.icon}`} />
              <span>{c.name}</span>
            </button>
          ))}
        </div>
        {panel}
      </div>
    )
  }

  return (
    <div className="dex reveal">
      <div className="dex-ring">
        <svg className="dex-lines" viewBox="0 0 100 100" aria-hidden="true">
          {points.map((p, i) => (
            <line
              key={i}
              x1="50" y1="50" x2={p.x} y2={p.y}
              className={`dex-line ${active === i ? 'active' : ''}`}
            />
          ))}
        </svg>
        <div className="dex-core"><i className="bi bi-shield-lock" /><span>Digital<br />Evidence</span></div>
        {CATS.map((c, i) => (
          <button
            type="button"
            key={c.name}
            aria-label={c.name}
            className={`dex-node ${active === i ? 'active' : ''}`}
            style={{ '--a': `${points[i].deg}deg` }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <i className={`bi ${c.icon}`} />
          </button>
        ))}
      </div>
      {panel}
    </div>
  )
}
