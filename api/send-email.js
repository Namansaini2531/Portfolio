import { sendEmail } from '../server/mailer.js';

export default async function handler(req, res) {
  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  try {
    const result = await sendEmail({
      subject: `Portfolio Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #141414; border-radius: 8px;">
          <h2 style="color: #141414; margin-top: 0;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 12px; border-left: 4px solid #ffe600; margin: 0;">
            ${message.replace(/\n/g, '<br/>')}
          </blockquote>
        </div>
      `
    });

    if (result.success) {
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } else {
      return res.status(500).json({ error: result.error || 'Failed to send email.' });
    }
  } catch (err) {
    console.error('Vercel API error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
