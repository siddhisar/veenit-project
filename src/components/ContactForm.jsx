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

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      // Front-end only — no backend wired up yet.
      setSubmitted(true)
      setValues(INITIAL)
      setTimeout(() => setSubmitted(false), 6000)
    }
  }

  return (
    <Form className="contact-form" noValidate onSubmit={handleSubmit}>
      {submitted && (
        <Alert variant="success" className="contact-alert">
          <i className="bi bi-check-circle-fill me-2" />
          Thank you — your case has been received. Our experts will reach out shortly.
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
          <Button type="submit" className="btn-cyber submit-case">
            <span>Submit Your Case</span>
            <i className="bi bi-arrow-right" />
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
