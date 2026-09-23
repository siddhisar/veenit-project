import { useEffect, useState } from 'react'

// Evidence categories — same content as before, reorganized for interactive exploration.
const CATEGORIES = [
  {
    key: 'calls', label: 'Call Records', title: 'Call Records', icon: 'bi-telephone-inbound',
    desc: 'Potentially relevant information can include:',
    items: ['Incoming calls', 'Outgoing calls', 'Missed calls', 'Call timestamps', 'Call duration', 'Associated contact information']
  },
  {
    key: 'contacts', label: 'Contacts', title: 'Contacts', icon: 'bi-person-lines-fill',
    desc: 'Contact-related artifacts may provide information such as:',
    items: ['Names', 'Telephone numbers', 'Email addresses', 'Contact metadata', 'Associated accounts']
  },
  {
    key: 'sms', label: 'SMS & Messaging', title: 'SMS & Messaging Data', icon: 'bi-chat-dots',
    desc: 'Depending on the platform and acquisition method, examination may include available messaging artifacts such as:',
    items: ['SMS messages', 'MMS content', 'Message timestamps', 'Attachments', 'Conversation metadata', 'Deleted or partially recoverable records'],
    note: 'Application-specific messaging data is dependent on the application, device state, encryption, and available forensic extraction capabilities.'
  },
  {
    key: 'media', label: 'Photos & Videos', title: 'Photographs & Videos', icon: 'bi-images',
    desc: 'Multimedia examination can help identify:',
    items: ['Images', 'Videos', 'Creation timestamps', 'Modification timestamps', 'File metadata', 'Associated locations where available', 'Thumbnails and cached media', 'Deleted-media remnants where technically recoverable']
  },
  {
    key: 'location', label: 'Location & Movement', title: 'Location & Movement Artifacts', icon: 'bi-geo-alt',
    desc: 'Potential sources may include:',
    items: ['GPS information', 'Location services', 'Wi-Fi-related artifacts', 'Cellular network information', 'Application-generated location records', 'Maps and navigation artifacts', 'Location metadata embedded in files'],
    note: 'Location information should be interpreted carefully because different sources can have different levels of accuracy and reliability.'
  },
  {
    key: 'email', label: 'Email & Attachments', title: 'Email & Attachments', icon: 'bi-envelope',
    desc: 'Where technically available, examination may identify:',
    items: ['Email messages', 'Sender and recipient information', 'Timestamps', 'Attachments', 'Account information', 'Local email artifacts']
  },
  {
    key: 'browser', label: 'Browser Activity', title: 'Internet & Browser Activity', icon: 'bi-globe2',
    desc: 'Depending on the device and available data, examination may include:',
    items: ['Browser history', 'Search activity', 'Bookmarks', 'Cookies', 'Cached information', 'Downloads', 'Visited websites']
  },
  {
    key: 'apps', label: 'Application Artifacts', title: 'Application Artifacts', icon: 'bi-grid-1x2',
    desc: 'Potential applications:',
    items: ['Messaging applications', 'Social-media applications', 'Email applications', 'Browsers', 'Cloud-storage applications', 'Navigation applications', 'Shopping applications', 'Financial applications', 'Productivity applications'],
    note: "The availability and interpretation of application artifacts depend heavily on the application's architecture, encryption mechanisms, storage method, and device configuration."
  },
  {
    key: 'documents', label: 'Documents & Files', title: 'Documents & Files', icon: 'bi-file-earmark-richtext',
    desc: 'Potential evidence can include:',
    items: ['PDFs', 'Office documents', 'Text files', 'Downloaded files', 'Audio recordings', 'Images', 'Videos', 'Compressed files', 'Application-generated documents']
  }
]

function PanelBody({ cat }) {
  return (
    <div className="afx-panel-inner" key={cat.key}>
      <div className="afx-panel-head">
        <span className="afx-panel-icon"><i className={`bi ${cat.icon}`} /></span>
        <h3 className="afx-panel-title">{cat.title}</h3>
      </div>
      <p className="afx-panel-desc">{cat.desc}</p>
      <ul className="afx-panel-items">
        {cat.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      {cat.note && (
        <p className="afx-panel-note"><i className="bi bi-info-circle" />{cat.note}</p>
      )}
    </div>
  )
}

export default function ArtifactExplorer() {
  const [active, setActive] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767.98px)')
    const apply = () => setIsMobile(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  if (isMobile) {
    return (
      <div className="afx-accordion reveal">
        {CATEGORIES.map((c, i) => {
          const open = mobileOpen === i
          return (
            <div className={`afx-acc-item ${open ? 'open' : ''}`} key={c.key}>
              <button
                type="button"
                className="afx-acc-btn"
                aria-expanded={open}
                onClick={() => setMobileOpen(open ? -1 : i)}
              >
                <span className="afx-tab-icon"><i className={`bi ${c.icon}`} /></span>
                <span className="afx-tab-label">{c.label}</span>
                <i className="bi bi-chevron-down afx-acc-caret" />
              </button>
              {open && (
                <div className="afx-acc-panel">
                  <PanelBody cat={c} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="afx reveal">
      <div className="afx-list" role="tablist" aria-label="Evidence categories">
        {CATEGORIES.map((c, i) => (
          <button
            type="button"
            key={c.key}
            role="tab"
            aria-selected={active === i}
            className={`afx-tab ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
          >
            <span className="afx-tab-icon"><i className={`bi ${c.icon}`} /></span>
            <span className="afx-tab-label">{c.label}</span>
            <i className="bi bi-chevron-right afx-tab-arrow" />
          </button>
        ))}
      </div>
      <div className="afx-panel" role="tabpanel">
        <PanelBody cat={CATEGORIES[active]} />
      </div>
    </div>
  )
}
