import { useState } from 'react'

const VULNS = [
  { icon: 'bi-database', name: 'Injection Vulnerabilities', back: 'Tests whether untrusted input can reach an interpreter — SQL, command, and similar injection flaws.' },
  { icon: 'bi-code-slash', name: 'Cross-Site Scripting (XSS)', back: 'Checks whether input can execute scripts in other users’ browsers — reflected, stored, and DOM-based.' },
  { icon: 'bi-key', name: 'Authentication & Session Management', back: 'Reviews login mechanisms, session handling, tokens, and password controls for weaknesses.' },
  { icon: 'bi-shield-lock', name: 'Access Control & IDOR', back: 'Verifies privilege boundaries and whether users can reach unauthorized objects or actions.' },
  { icon: 'bi-sliders', name: 'Security Misconfigurations', back: 'Looks for insecure defaults, exposed services, missing headers, and hardening gaps.' },
  { icon: 'bi-hdd-network', name: 'API Security Vulnerabilities', back: 'Assesses endpoint authentication, input validation, and data exposure across APIs.' },
  { icon: 'bi-diagram-2', name: 'Business Logic Flaws', back: 'Examines whether workflows can be abused to bypass intended rules, limits, or sequences.' },
  { icon: 'bi-file-earmark-lock', name: 'Sensitive Data Exposure', back: 'Checks how sensitive data is stored, transmitted, and exposed within application responses.' }
]

export default function VulnFlipCards() {
  const [flipped, setFlipped] = useState(-1)

  return (
    <div className="wpt-vulns reveal">
      {VULNS.map((v, i) => (
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
              <span className="wpt-flip-name">{v.name}</span>
              <span className="wpt-flip-hint"><i className="bi bi-arrow-repeat" /> details</span>
            </span>
            <span className="wpt-flip-face wpt-flip-back">
              <span className="wpt-flip-back-name">{v.name}</span>
              <span className="wpt-flip-back-text">{v.back}</span>
            </span>
          </span>
        </button>
      ))}
    </div>
  )
}
