import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Setup Nodemailer transporter with SMTP credentials (Gmail App Password is recommended)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,       // Set in Vercel project Environment Variables
      pass: process.env.SMTP_PASSWORD    // Set in Vercel project Environment Variables
    }
  })

  try {
    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('SMTP Email Error:', error)
    return res.status(500).json({ error: 'Failed to send email. Check server configuration.' })
  }
}
