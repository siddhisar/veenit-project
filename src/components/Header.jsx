import { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setExpanded(false)
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
          <img src={logo} alt="DTF-ISMS — Cyber Crime Defence" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">DTF-ISMS</span>
            <span className="brand-sub">CYBER CRIME DEFENCE</span>
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
            <Nav.Link href="/#services" onClick={close}>
              Services
            </Nav.Link>
            <Nav.Link href="/#isms" onClick={close}>
              DTF DPO 360
            </Nav.Link>
            <Nav.Link href="/#framework" onClick={close}>
              Grow With Us
            </Nav.Link>
            <Nav.Link href="/#clients" onClick={close}>
              Blogs
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
