import { useState } from 'react'
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
// to the key on web3forms.com (never stored in code). Configured via an
// env var so it can be set in Vercel without code changes.
// e.g. VITE_WEB3FORMS_ACCESS_KEY="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

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
    setErrors(next)
    if (Object.keys(next).length > 0) return

    if (!WEB3FORMS_ACCESS_KEY) {
      // Misconfiguration — never pretend the email was sent.
      console.error('VITE_WEB3FORMS_ACCESS_KEY is not set; cannot submit the enquiry.')
      setStatus('error')
      return
    }

    setStatus('submitting')

    // Human-readable payload so the team email is easy to read.
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New Case Enquiry – Cyber Crime Defence',
      from_name: 'Cyber Crime Defence Website',
      replyto: values.email,
      Name: values.name,
      Email: values.email,
      Phone: values.phone,
      'Service / Case Type': values.solution || 'Not specified',
      'Urgency Level': values.urgency || 'Not specified',
      'System Count': values.systems || 'Not specified',
      'Last Audit Date': values.lastAudit || 'Not specified',
      Submitted: new Date().toLocaleString(),
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
        setStatus('success')
        setValues(INITIAL)
        setTimeout(() => setStatus('idle'), 8000)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
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
                placeholder="you@company.com"
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
          <Button type="submit" className="btn-cyber submit-case" disabled={submitting}>
            <span>{submitting ? 'Submitting…' : 'Submit Your Case'}</span>
            <i className={`bi ${submitting ? 'bi-arrow-repeat' : 'bi-arrow-right'}`} />
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
