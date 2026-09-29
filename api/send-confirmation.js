import nodemailer from 'nodemailer'

// Serverless (Vercel) function: sends a confirmation email to the person who
// submitted the contact form. Runs server-side only — the Gmail credential
// lives in environment variables and is NEVER exposed to the frontend.
// Required env vars (set in Vercel → Settings → Environment Variables):
//   GMAIL_USER          e.g. cybercrimedeff88@gmail.com
//   GMAIL_APP_PASSWORD  a Google "App Password" (not the account password)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
    const name = (body.name || '').toString().trim().slice(0, 80)
    const email = (body.email || '').toString().trim().slice(0, 120)
    const service = (body.service || '').toString().trim().slice(0, 120)
    const reference = (body.reference || '').toString().trim().slice(0, 40)

    // Validate the recipient email before attempting to send.
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email address' })
    }

    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_APP_PASSWORD
    if (!user || !pass) {
      return res.status(500).json({ success: false, error: 'Email service not configured' })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    })

    const safeName = name || 'there'
    const refLine = reference ? `Reference ID: ${reference}` : ''
    const svcLine = service && service !== 'Not specified' ? `Service / Case Type: ${service}` : ''

    const html = `
    <div style="margin:0;padding:24px;background:#0a0e30;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e0e6f0;">
        <div style="background:linear-gradient(90deg,#0700b8,#33bde6);padding:22px 28px;">
          <div style="color:#fff;font-size:18px;font-weight:800;letter-spacing:.3px;">Cyber Crime Defence PVT LTD</div>
          <div style="color:#dbeefb;font-size:12px;margin-top:4px;">Cybersecurity &amp; Digital Forensics</div>
        </div>
        <div style="padding:28px;color:#2b3040;font-size:15px;line-height:1.65;">
          <p style="margin:0 0 14px;">Dear ${safeName},</p>
          <p style="margin:0 0 14px;">
            Thank you for contacting <strong>Cyber Crime Defence PVT LTD</strong>. We have received your
            enquiry successfully. Our team will review your query and get back to you as soon as possible.
          </p>
          <p style="margin:0 0 14px;">
            Your enquiry has been logged securely and will be handled with strict confidentiality, in line
            with our information-security practices.
          </p>
          ${(refLine || svcLine) ? `<div style="background:#f4f7fb;border:1px solid #e0e6f0;border-radius:10px;padding:14px 16px;margin:0 0 16px;font-size:14px;color:#474d5e;">
            ${refLine ? `<div><strong>${refLine}</strong></div>` : ''}
            ${svcLine ? `<div style="margin-top:4px;">${svcLine}</div>` : ''}
          </div>` : ''}
          <p style="margin:0 0 6px;">Warm regards,</p>
          <p style="margin:0;font-weight:700;color:#111528;">Team Cyber Crime Defence</p>
          <p style="margin:2px 0 0;font-size:13px;color:#6a7185;">Pune, Maharashtra &middot; cybercrimedeff88@gmail.com</p>
        </div>
        <div style="background:#f4f7fb;padding:14px 28px;font-size:11px;color:#8b93a8;border-top:1px solid #e0e6f0;">
          This is an automated confirmation of your website enquiry. Please do not share sensitive credentials by email.
        </div>
      </div>
    </div>`

    const text =
`Dear ${safeName},

Thank you for contacting Cyber Crime Defence PVT LTD. We have received your enquiry successfully. Our team will review your query and get back to you as soon as possible.

${refLine}
${svcLine}

Warm regards,
Team Cyber Crime Defence
Pune, Maharashtra`

    await transporter.sendMail({
      from: `"Cyber Crime Defence PVT LTD" <${user}>`,
      to: email,
      subject: 'We have received your enquiry – Cyber Crime Defence PVT LTD',
      replyTo: user,
      html,
      text
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ success: false, error: 'send_failed' })
  }
}
