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

        {/* 3D animated legal gavel — Section 63 / court admissibility */}
        <div className="eh-gavel3d">
          <svg className="eh-gavel3d-svg" viewBox="0 0 260 260">
            <defs>
              {/* cylindrical shading for the mallet head */}
              <linearGradient id="ehgHead" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#24406f" />
                <stop offset="0.32" stopColor="#3f6ea3" />
                <stop offset="0.5" stopColor="#9fd8f2" />
                <stop offset="0.68" stopColor="#3f6ea3" />
                <stop offset="1" stopColor="#16264a" />
              </linearGradient>
              <linearGradient id="ehgHandle" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#16264a" />
                <stop offset="0.5" stopColor="#5f8fc0" />
                <stop offset="1" stopColor="#16264a" />
              </linearGradient>
              <linearGradient id="ehgBand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#bff0ff" />
                <stop offset="0.5" stopColor="#33bde6" />
                <stop offset="1" stopColor="#0a4f86" />
              </linearGradient>
              <radialGradient id="ehgCap" cx="50%" cy="40%" r="65%">
                <stop offset="0" stopColor="#6fa6d6" />
                <stop offset="1" stopColor="#16264a" />
              </radialGradient>
              <linearGradient id="ehgBase" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#2a4a78" />
                <stop offset="1" stopColor="#0e1c3e" />
              </linearGradient>
              <radialGradient id="ehgBaseTop" cx="50%" cy="45%" r="60%">
                <stop offset="0" stopColor="#4f80b4" />
                <stop offset="1" stopColor="#16294f" />
              </radialGradient>
            </defs>

            {/* sound block (base) */}
            <g className="ehg-base">
              <ellipse cx="130" cy="232" rx="66" ry="15" fill="#050a1c" opacity="0.55" />
              <rect x="70" y="212" width="120" height="20" rx="10" fill="url(#ehgBase)" stroke="rgba(51,189,230,0.5)" strokeWidth="1.4" />
              <ellipse cx="130" cy="212" rx="60" ry="13" fill="url(#ehgBaseTop)" stroke="rgba(123,220,247,0.6)" strokeWidth="1.4" />
            </g>

            {/* impact ripple on strike */}
            <ellipse className="ehg-impact" cx="130" cy="210" rx="42" ry="9" fill="none" stroke="#7bdcf7" strokeWidth="2" />

            {/* the hammer (head + handle) — swings to strike */}
            <g className="ehg-hammer">
              {/* handle */}
              <g transform="rotate(38 130 120)">
                <rect x="122" y="118" width="16" height="104" rx="8" fill="url(#ehgHandle)" stroke="rgba(51,189,230,0.45)" strokeWidth="1.4" />
                <circle cx="130" cy="222" r="9" fill="url(#ehgCap)" stroke="rgba(123,220,247,0.6)" strokeWidth="1.4" />
              </g>
              {/* mallet head — horizontal cylinder */}
              <g transform="rotate(-16 130 96)">
                <rect x="66" y="72" width="128" height="48" rx="16" fill="url(#ehgHead)" stroke="rgba(51,189,230,0.55)" strokeWidth="1.6" />
                {/* end caps */}
                <ellipse cx="72" cy="96" rx="11" ry="26" fill="url(#ehgCap)" stroke="rgba(123,220,247,0.55)" strokeWidth="1.4" />
                <ellipse cx="188" cy="96" rx="11" ry="26" fill="url(#ehgCap)" stroke="rgba(123,220,247,0.55)" strokeWidth="1.4" />
                {/* metallic centre band */}
                <rect x="116" y="68" width="30" height="56" rx="6" fill="url(#ehgBand)" stroke="rgba(191,240,255,0.7)" strokeWidth="1.2" />
                {/* specular highlight */}
                <rect x="74" y="80" width="112" height="7" rx="3.5" fill="rgba(255,255,255,0.35)" />
              </g>
            </g>
          </svg>
          <span className="eh-gavel3d-glow" />
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
