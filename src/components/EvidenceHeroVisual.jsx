import CyberBackground from './CyberBackground.jsx'

// Floating "evidence file" chips that drift around the protected core.
const FILES = [
  { icon: 'bi-camera-video', name: 'CCTV footage', cls: 'eh-file-a' },
  { icon: 'bi-chat-dots', name: 'chat records', cls: 'eh-file-b' },
  { icon: 'bi-mic', name: 'audio log', cls: 'eh-file-c' }
]

export default function EvidenceHeroVisual() {
  return (
    <div className="eh-visual" aria-hidden="true">
      <div className="eh-bg">
        <CyberBackground />
        <div className="eh-grid" />
        <div className="eh-glow" />
      </div>

      {/* forensic data paths + pulsing nodes */}
      <svg className="eh-net" viewBox="0 0 440 560" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(51,189,230,0.22)" strokeWidth="1" fill="none">
          <path d="M60 120 L170 200 L120 330 L70 430" />
          <path d="M380 100 L280 210 L330 350 L360 460" />
          <path d="M170 200 L280 210" />
          <path d="M120 330 L330 350" />
        </g>
        <g fill="#33bde6">
          <circle cx="60" cy="120" r="3.5" /><circle cx="170" cy="200" r="4" className="eh-net-pulse" />
          <circle cx="120" cy="330" r="3.5" /><circle cx="70" cy="430" r="3" />
          <circle cx="380" cy="100" r="3.5" /><circle cx="280" cy="210" r="4" className="eh-net-pulse" />
          <circle cx="330" cy="350" r="3.5" /><circle cx="360" cy="460" r="3" />
        </g>
      </svg>

      <span className="eh-particle p1" />
      <span className="eh-particle p2" />
      <span className="eh-particle p3" />
      <span className="eh-particle p4" />
      <span className="eh-particle p5" />

      <div className="eh-core">
        <span className="eh-ring eh-ring-1" />
        <span className="eh-ring eh-ring-2" />
        <span className="eh-radar" />

        {/* fingerprint watermark */}
        <svg className="eh-print" viewBox="0 0 120 120">
          <g fill="none" stroke="url(#ehPrint)" strokeWidth="2" strokeLinecap="round">
            <path d="M60 20 a40 40 0 0 1 40 40 v14" />
            <path d="M60 32 a28 28 0 0 1 28 28 v18" />
            <path d="M60 44 a16 16 0 0 1 16 16 v22" />
            <path d="M60 20 a40 40 0 0 0 -40 40 v14" />
            <path d="M60 32 a28 28 0 0 0 -28 28 v18" />
            <path d="M60 44 a16 16 0 0 0 -16 16 v22" />
            <circle cx="60" cy="60" r="5" />
          </g>
          <defs>
            <linearGradient id="ehPrint" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7bdcf7" />
              <stop offset="1" stopColor="#1f7fc0" />
            </linearGradient>
          </defs>
        </svg>

        {/* legal gavel — Section 63 / court admissibility */}
        <div className="eh-gavel">
          <svg className="eh-gavel-svg" viewBox="0 0 180 180">
            <defs>
              <linearGradient id="ehGavel" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7bdcf7" />
                <stop offset="1" stopColor="#1f7fc0" />
              </linearGradient>
              <linearGradient id="ehGavelBand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#33bde6" />
                <stop offset="1" stopColor="#0700b8" />
              </linearGradient>
            </defs>
            {/* mallet + handle, angled like an auction gavel */}
            <g transform="rotate(-34 90 78)">
              {/* handle */}
              <rect x="84" y="74" width="13" height="70" rx="6.5" fill="rgba(9,16,42,0.92)" stroke="url(#ehGavel)" strokeWidth="3" />
              {/* mallet head */}
              <rect x="40" y="44" width="100" height="40" rx="14" fill="rgba(9,16,42,0.92)" stroke="url(#ehGavel)" strokeWidth="3" />
              {/* end rings */}
              <rect x="52" y="40" width="12" height="48" rx="5" fill="url(#ehGavel)" opacity="0.85" />
              <rect x="116" y="40" width="12" height="48" rx="5" fill="url(#ehGavel)" opacity="0.85" />
              {/* central accent band */}
              <rect x="80" y="40" width="20" height="48" rx="5" fill="url(#ehGavelBand)" />
            </g>
            {/* sound block (base) */}
            <rect x="46" y="146" width="88" height="16" rx="8" fill="rgba(9,16,42,0.92)" stroke="url(#ehGavel)" strokeWidth="3" />
          </svg>
          <span className="eh-gavel-strike" />
        </div>
      </div>

      {FILES.map((f) => (
        <span className={`eh-file ${f.cls}`} key={f.name}>
          <i className={`bi ${f.icon}`} />
          {f.name}
        </span>
      ))}

      <span className="eh-lock"><i className="bi bi-shield-lock" /></span>

      <span className="eh-hash">
        <i className="bi bi-check2-circle" /> SHA-256 · 9F2A·C4E7·B1D0 — integrity verified
      </span>
    </div>
  )
}
