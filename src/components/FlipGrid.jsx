import { useState } from 'react'

// Reusable 3D flip-card grid. Each item: { icon, name, front?, backTitle?, back?, points? }
// - hover flips on desktop; click/tap flips on mobile.
export default function FlipGrid({ items }) {
  const [flipped, setFlipped] = useState(-1)

  return (
    <div className="wpt-vulns reveal">
      {items.map((v, i) => (
        <button
          type="button"
          key={v.name}
          className={`wpt-flip ${flipped === i ? 'is-flipped' : ''}`}
          aria-pressed={flipped === i}
          onClick={() => setFlipped(flipped === i ? -1 : i)}
        >
          <span className="wpt-flip-inner">
            <span className="wpt-flip-face wpt-flip-front">
              <span className="wpt-flip-icon"><i className={`bi ${v.icon}`} /></span>
              <span className="wpt-flip-txt">
                <span className="wpt-flip-name">{v.name}</span>
                {v.front && <span className="wpt-flip-sub">{v.front}</span>}
              </span>
              <span className="wpt-flip-hint"><i className="bi bi-arrow-repeat" /> details</span>
            </span>
            <span className="wpt-flip-face wpt-flip-back">
              <span className="wpt-flip-back-name">{v.backTitle || v.name}</span>
              {v.points ? (
                <ul className="wpt-flip-points">
                  {v.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              ) : (
                <span className="wpt-flip-back-text">{v.back}</span>
              )}
            </span>
          </span>
        </button>
      ))}
    </div>
  )
}
