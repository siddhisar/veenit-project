import { useState } from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'

const SERVICE_TYPES = [
  'Electronic Evidence & Section 63 Certification',
  'Mobile Forensics',
  'VAPT',
  'Web Application Penetration Testing',
  'Mobile Application Security Testing',
  'Cyber Law Advocacy',
  'Divorce & Family Disputes – Electronic Evidence & Section 63 Certification',
  'Other'
]

const URGENCY_LEVELS = ['Low', 'Medium', 'High / Critical']

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  solution: '',
  caseDetails: '',
  urgency: '',
  organization: '',
  consent: false
}

// Web3Forms — free form-to-email service. The access key is PUBLIC and
// safe to expose in the frontend; the recipient business email is bound
// to the key on web3forms.com (never stored in code). An env var can
// override it in Vercel, otherwise the committed key below is used.
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '9bb82b1b-e85c-4ea0-b5c2-5d3bd9889abe'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
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
    if (!values.solution) next.solution = 'Please select a service / case type.'
    if (!values.caseDetails.trim()) {
      next.caseDetails = 'Please describe your issue or requirement.'
    } else if (values.caseDetails.trim().length < 10) {
      next.caseDetails = 'Please add a little more detail (at least 10 characters).'
    }
    if (!values.consent) next.consent = 'Please provide your consent to proceed.'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return // prevent duplicate submissions

    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    if (!WEB3FORMS_ACCESS_KEY) {
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
      'Service / Case Type': values.solution,
      'Case Details': values.caseDetails,
      'Urgency Level': values.urgency || 'Not specified',
      'Organization / Company': values.organization || 'Not specified',
      Consent: 'Yes — consented to be contacted',
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
              Full Name <span className="req">*</span>
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
            <Form.Label>
              Service / Case Type <span className="req">*</span>
            </Form.Label>
            <div className="cf-input">
              <i className="bi bi-shield-check" />
              <Form.Select
                name="solution"
                value={values.solution}
                onChange={handleChange}
                isInvalid={!!errors.solution}
              >
                <option value="">Select service / case type</option>
                {SERVICE_TYPES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.solution}</Form.Control.Feedback>
            </div>
          </Form.Group>
        </Col>

        <Col xs={12}>
          <Form.Group controlId="cf-casedetails" className="cf-field reveal d3">
            <Form.Label>
              Case Details <span className="req">*</span>
            </Form.Label>
            <div className="cf-input cf-input--area">
              <i className="bi bi-chat-left-text" />
              <Form.Control
                as="textarea"
                rows={4}
                name="caseDetails"
                value={values.caseDetails}
                onChange={handleChange}
                isInvalid={!!errors.caseDetails}
                placeholder="Briefly describe your issue or requirement"
              />
              <Form.Control.Feedback type="invalid">{errors.caseDetails}</Form.Control.Feedback>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="cf-urgency" className="cf-field reveal from-left d3">
            <Form.Label>Urgency Level (Optional)</Form.Label>
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
          <Form.Group controlId="cf-organization" className="cf-field reveal from-right d3">
            <Form.Label>Organization / Company (Optional)</Form.Label>
            <div className="cf-input">
              <i className="bi bi-building" />
              <Form.Control
                type="text"
                name="organization"
                value={values.organization}
                onChange={handleChange}
                placeholder="Your organization or company name"
              />
            </div>
          </Form.Group>
        </Col>

        <Col xs={12} className="reveal d4">
          <label className={`cf-consent ${errors.consent ? 'is-invalid' : ''}`}>
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={handleChange}
            />
            <span className="cf-consent-box" aria-hidden="true">
              <i className="bi bi-check-lg" />
            </span>
            <span className="cf-consent-text">
              I consent to being contacted regarding my enquiry. <span className="req">*</span>
            </span>
          </label>
          {errors.consent && <div className="cf-consent-error">{errors.consent}</div>}
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
