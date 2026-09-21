import { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const ABOUT = [
  { icon: 'bi-people', title: 'Our Team', href: '/#framework' },
  { icon: 'bi-shield-lock', title: 'Cyber Crime Defence', href: '/#isms' },
  { icon: 'bi-headset', title: 'Cyber Crime Helpline', href: '/#get-in-touch' }
]

// Each service routes to its own dedicated page.
const SERVICES = [
  {
    icon: 'bi-file-earmark-check',
    title: 'Electronic Evidence & Section 63 Certification',
    to: '/services/electronic-evidence'
  },
  {
    icon: 'bi-phone',
    title: 'Mobile Forensics',
    to: '/services/mobile-forensics'
  },
  {
    icon: 'bi-bug',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    to: '/services/vapt'
  },
  {
    icon: 'bi-bank',
    title: 'Cyber Law Advocacy',
    to: '/services/cyber-law-advocacy'
  }
]

const isDesktop = () => window.matchMedia('(min-width: 1200px)').matches
const isMobile = () => window.matchMedia('(max-width: 1199.98px)').matches

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [openMenu, setOpenMenu] = useState(null) // 'about' | 'services' | null
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => {
    setExpanded(false)
    setOpenMenu(null)
  }
  // On inner pages (over a light background) keep the header solid for contrast.
  const solid = scrolled || pathname !== '/'

  const renderMega = (key, label, items) => (
    <div
      className={`services-mega ${openMenu === key ? 'is-open' : ''}`}
      onMouseEnter={() => { if (isDesktop()) setOpenMenu(key) }}
      onMouseLeave={() => { if (isDesktop()) setOpenMenu((m) => (m === key ? null : m)) }}
    >
      <button
        type="button"
        className="nav-link services-toggle"
        aria-expanded={openMenu === key}
        onClick={() => { if (isMobile()) setOpenMenu((m) => (m === key ? null : key)) }}
      >
        {label}
        <i className="bi bi-chevron-down services-caret" />
      </button>

      <div className="services-panel" role="menu">
        <div className="services-panel-inner">
          <div className="services-grid">
            {items.map((it, i) => {
              const inner = (
                <>
                  <span className="service-item-icon">
                    <i className={`bi ${it.icon}`} />
                  </span>
                  <span className="service-item-body">
                    <span className="service-item-title">{it.title}</span>
                  </span>
                  <i className="bi bi-arrow-right service-item-arrow" />
                </>
              )
              return it.to ? (
                <Link
                  key={it.title}
                  to={it.to}
                  className="service-item"
                  role="menuitem"
                  style={{ '--i': i }}
                  onClick={close}
                >
                  {inner}
                </Link>
              ) : (
                <a
                  key={it.title}
                  href={it.href}
                  className="service-item"
                  role="menuitem"
                  style={{ '--i': i }}
                  onClick={close}
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Navbar
      expand="xl"
      variant="dark"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-header ${solid ? 'is-scrolled' : ''}`}
    >
      <Container className="header-inner">
        <Navbar.Brand as={Link} to="/" className="brand" onClick={close}>
          <img src={logo} alt="Cyber Crime Defence" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">CYBER CRIME DEFENCE<sup className="brand-reg">®</sup></span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="nav-toggle" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-xl-center main-nav">
            <Nav.Link href="/#home" onClick={close}>
              Home
            </Nav.Link>

            {renderMega('about', 'About Us', ABOUT)}
            {renderMega('services', 'Services', SERVICES)}

            <Nav.Link href="/#framework" onClick={close}>
              Grow With Us
            </Nav.Link>
            <Nav.Link href="/#contact-info" onClick={close}>
              Contact Us
            </Nav.Link>
            <Button
              as="a"
              href="/#get-in-touch"
              className="btn-cyber rfp-btn ms-xl-3"
              onClick={close}
            >
              Request for Enquiry
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
