import { useState, useEffect, useRef } from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'

const SOLUTION_TYPES = [
  'Cyber Security Audit / VAPT',
  'Regulatory Compliance (DPDP Act, RBI, SEBI)',
  'Digital Forensics & Incident Response',
  'Maharashtra State Audit Mandate',
  'Cyber Law Advocacy'
]

const URGENCY_LEVELS = ['Low', 'Medium', 'High-Critical']

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  message: '',
  solution: '',
  urgency: '',
  systems: '',
  lastAudit: ''
}

// Web3Forms — free form-to-email service. The access key is PUBLIC and
// safe to expose in the frontend; the recipient business email is bound
// to the key on web3forms.com (never stored in code). An env var can
// override it in Vercel, otherwise the committed key below is used.
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '9bb82b1b-e85c-4ea0-b5c2-5d3bd9889abe'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

// hCaptcha — anti-bot. Using Web3Forms' shared hCaptcha site key means
// Web3Forms verifies the token server-side (no secret key in the frontend,
// no extra account needed). Override with VITE_HCAPTCHA_SITE_KEY if desired.
const HCAPTCHA_SITE_KEY =
  import.meta.env.VITE_HCAPTCHA_SITE_KEY || '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [captchaToken, setCaptchaToken] = useState('')
  const captchaRef = useRef(null)
  const widgetIdRef = useRef(null)

  // Load and render the hCaptcha widget (explicit render) once.
  useEffect(() => {
    let cancelled = false
    const renderWidget = () => {
      if (cancelled || !window.hcaptcha || !captchaRef.current) return
      if (captchaRef.current.childElementCount > 0) return
      try {
        widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
          sitekey: HCAPTCHA_SITE_KEY,
          size: typeof window !== 'undefined' && window.innerWidth <= 360 ? 'compact' : 'normal',
          callback: (token) => {
            setCaptchaToken(token)
            setErrors((er) => ({ ...er, captcha: '' }))
          },
          'expired-callback': () => setCaptchaToken(''),
          'error-callback': () => setCaptchaToken('')
        })
      } catch (e) {
        /* already rendered */
      }
    }
    if (window.hcaptcha && window.hcaptcha.render) {
      renderWidget()
    } else {
      let s = document.querySelector('script[data-hcaptcha]')
      if (!s) {
        s = document.createElement('script')
        s.src = 'https://js.hcaptcha.com/1/api.js?render=explicit&recaptchacompat=off'
        s.async = true
        s.defer = true
        s.setAttribute('data-hcaptcha', '1')
        document.head.appendChild(s)
      }
      const iv = setInterval(() => {
        if (window.hcaptcha && window.hcaptcha.render) {
          clearInterval(iv)
          renderWidget()
        }
      }, 300)
      setTimeout(() => clearInterval(iv), 10000)
    }
    return () => {
      cancelled = true
    }
  }, [])

  const resetCaptcha = () => {
    setCaptchaToken('')
    if (window.hcaptcha && widgetIdRef.current !== null) {
      try {
        window.hcaptcha.reset(widgetIdRef.current)
      } catch (e) {
        /* ignore */
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
    if (status === 'error') setStatus('idle')
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.phone.trim()) {
      next.phone = 'Please enter your phone number.'
    } else if (!/^[+\d][\d\s-]{7,}$/.test(values.phone)) {
      next.phone = 'Please enter a valid phone number.'
    }
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return // prevent duplicate submissions

    const next = validate()
    if (!captchaToken) next.captcha = 'Please complete the verification.'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    if (!WEB3FORMS_ACCESS_KEY) {
      // Misconfiguration — never pretend the email was sent.
      console.error('VITE_WEB3FORMS_ACCESS_KEY is not set; cannot submit the enquiry.')
      setStatus('error')
      return
    }

    setStatus('submitting')

    // Reference id shared between the business email and the user confirmation.
    const reference = 'CCD-' + Date.now().toString().slice(-8)

    // Human-readable payload so the team email is easy to read.
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New Case Enquiry – Cyber Crime Defence',
      from_name: 'Cyber Crime Defence Website',
      replyto: values.email,
      Reference: reference,
      Name: values.name,
      Email: values.email,
      Phone: values.phone,
      'Service / Case Type': values.solution || 'Not specified',
      'Urgency Level': values.urgency || 'Not specified',
      'System Count': values.systems || 'Not specified',
      'Last Audit Date': values.lastAudit || 'Not specified',
      Submitted: new Date().toLocaleString(),
      'h-captcha-response': captchaToken, // verified server-side by Web3Forms
      botcheck: '' // honeypot — must stay empty
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok && data.success) {
        // Business email delivered — send the user a confirmation (best-effort,
        // server-side function; never blocks or fails the visible success).
        const confirmPayload = {
          name: values.name,
          email: values.email,
          service: values.solution || 'Not specified',
          reference
        }
        fetch('/api/send-confirmation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(confirmPayload)
        }).catch(() => {})

        setStatus('success')
        setValues(INITIAL)
        resetCaptcha()
        setTimeout(() => setStatus('idle'), 8000)
      } else {
        setStatus('error')
        resetCaptcha()
      }
    } catch (err) {
      setStatus('error')
      resetCaptcha()
    }
  }

  const submitting = status === 'submitting'

  return (
    <Form className="contact-form" noValidate onSubmit={handleSubmit}>
      {status === 'success' && (
        <Alert variant="success" className="contact-alert">
          <i className="bi bi-check-circle-fill me-2" />
          Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly.
        </Alert>
      )}

      {status === 'error' && (
        <Alert variant="danger" className="contact-alert">
          <i className="bi bi-exclamation-triangle-fill me-2" />
          We couldn&apos;t submit your enquiry right now. Please try again or contact us directly at
          {' '}cybercrimedeff88@gmail.com.
        </Alert>
      )}

      <Row className="g-4">
        <Col md={6}>
          <Form.Group controlId="cf-name" className="cf-field reveal from-left d1">
            <Form.Label>
              Name <span className="req">*</span>
            </Form.Label>
            <div className="cf-input">
              <i className="bi bi-person" />
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                placeholder="Your full name"
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cf-email" className="cf-field reveal from-right d1">
            <Form.Label>
              Email <span className="req">*</span>
            </Form.Label>
            <div className="cf-input">
              <i className="bi bi-envelope" />
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="Enter your email address"
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cf-phone" className="cf-field reveal from-left d2">
            <Form.Label>
              Phone <span className="req">*</span>
            </Form.Label>
            <div className="cf-input">
              <i className="bi bi-telephone" />
              <Form.Control
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
                placeholder="+91 00000 00000"
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cf-solution" className="cf-field reveal from-right d2">
            <Form.Label>Tell Us How We Can Help Your Organization</Form.Label>
            <div className="cf-input">
              <i className="bi bi-shield-check" />
              <Form.Select name="solution" value={values.solution} onChange={handleChange}>
                <option value="">Solution Type</option>
                {SOLUTION_TYPES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Form.Select>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cf-urgency" className="cf-field reveal from-left d3">
            <Form.Label>Urgency Level</Form.Label>
            <div className="cf-input">
              <i className="bi bi-exclamation-triangle" />
              <Form.Select name="urgency" value={values.urgency} onChange={handleChange}>
                <option value="">Select urgency</option>
                {URGENCY_LEVELS.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </Form.Select>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cf-systems" className="cf-field reveal from-right d3">
            <Form.Label>Your System Count?</Form.Label>
            <div className="cf-input">
              <i className="bi bi-pc-display" />
              <Form.Control
                type="number"
                min="0"
                name="systems"
                value={values.systems}
                onChange={handleChange}
                placeholder="e.g. 120"
              />
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cf-lastaudit" className="cf-field reveal from-left d4">
            <Form.Label>Last Audit Date</Form.Label>
            <div className="cf-input">
              <i className="bi bi-calendar-event" />
              <Form.Control
                type="date"
                name="lastAudit"
                value={values.lastAudit}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
        </Col>

        <Col xs={12} className="reveal d4">
          <div className="cf-submit-row">
            <div className="cf-captcha">
              <div ref={captchaRef} className="cf-hcaptcha" />
              {errors.captcha && <span className="cf-captcha-error">{errors.captcha}</span>}
            </div>
            <Button type="submit" className="btn-cyber submit-case" disabled={submitting}>
              <span>{submitting ? 'Submitting…' : 'Submit Your Case'}</span>
              <i className={`bi ${submitting ? 'bi-arrow-repeat' : 'bi-arrow-right'}`} />
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}
