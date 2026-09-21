import { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

// Service links point to the Services section for now; swap `href` for a
// dedicated route/page per service when those are built.
const SERVICES = [
  {
    icon: 'bi-file-earmark-check',
    title: 'Electronic Evidence & Section 63 Certification',
    desc: 'Court-admissible digital evidence with Section 63 certification.',
    href: '/#services'
  },
  {
    icon: 'bi-phone',
    title: 'Mobile Forensics',
    desc: 'Forensic extraction and analysis of mobile devices.',
    href: '/#services'
  },
  {
    icon: 'bi-bug',
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    desc: 'Find and fix security weaknesses before attackers do.',
    href: '/#services'
  },
  {
    icon: 'bi-bank',
    title: 'Cyber Law Advocacy',
    desc: 'Expert legal counsel for cyber law and compliance.',
    href: '/#services'
  }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => {
    setExpanded(false)
    setServicesOpen(false)
  }
  // On inner pages (over a light background) keep the header solid for contrast.
  const solid = scrolled || pathname !== '/'

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
            <span className="brand-name">CYBER CRIME DEFENCE</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="nav-toggle" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-xl-center main-nav">
            <Nav.Link href="/#home" onClick={close}>
              Home
            </Nav.Link>
            <NavDropdown title="About Us" id="about-dd" className="about-dd">
              <NavDropdown.Item href="/#framework" onClick={close}>
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item href="/#isms" onClick={close}>
                Cyber Crime Defence
              </NavDropdown.Item>
              <NavDropdown.Item href="/#contact" onClick={close}>
                Cyber Crime Helpline
              </NavDropdown.Item>
              <NavDropdown.Item href="/#contact" onClick={close}>
                Partner With Us
              </NavDropdown.Item>
            </NavDropdown>

            <div
              className={`services-mega ${servicesOpen ? 'is-open' : ''}`}
              onMouseEnter={() => {
                // Hover opens on desktop only; mobile uses tap (below).
                if (window.matchMedia('(min-width: 1200px)').matches) setServicesOpen(true)
              }}
              onMouseLeave={() => {
                if (window.matchMedia('(min-width: 1200px)').matches) setServicesOpen(false)
              }}
            >
              <button
                type="button"
                className="nav-link services-toggle"
                aria-expanded={servicesOpen}
                onClick={() => {
                  // Tap toggles the accordion on mobile (< xl).
                  if (window.matchMedia('(max-width: 1199.98px)').matches) {
                    setServicesOpen((o) => !o)
                  }
                }}
              >
                Services
                <i className="bi bi-chevron-down services-caret" />
              </button>

              <div className="services-panel" role="menu">
                <div className="services-panel-inner">
                  <div className="services-grid">
                    {SERVICES.map((s, i) => (
                      <a
                        key={s.title}
                        href={s.href}
                        className="service-item"
                        role="menuitem"
                        style={{ '--i': i }}
                        onClick={close}
                      >
                        <span className="service-item-icon">
                          <i className={`bi ${s.icon}`} />
                        </span>
                        <span className="service-item-body">
                          <span className="service-item-title">{s.title}</span>
                        </span>
                        <i className="bi bi-arrow-right service-item-arrow" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Nav.Link href="/#framework" onClick={close}>
              Grow With Us
            </Nav.Link>
            <Nav.Link href="/#contact" onClick={close}>
              Contact Us
            </Nav.Link>
            <Button
              as={Link}
              to="/request-proposal"
              className="btn-cyber rfp-btn ms-xl-3"
              onClick={close}
            >
              Request For Proposal
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
