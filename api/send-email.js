import { sendEmail } from '../server/mailer.js';

// Helper to escape HTML characters and prevent XSS injection in email templates
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Strict email regex validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate Limiter: In-memory sliding window (max 5 requests per 10 minutes per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export default async function handler(req, res) {
  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Rate Limiting Check by Client IP
  const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1').split(',')[0].trim();
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many messages sent from your IP. Please wait 10 minutes before trying again.' });
  }

  let { name, email, message, website } = req.body || {};

  // Honeypot bot trap check
  if (website) {
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  }

  // Sanitize and trim inputs
  name = typeof name === 'string' ? name.trim() : '';
  email = typeof email === 'string' ? email.trim() : '';
  message = typeof message === 'string' ? message.trim() : '';

  // Required Field Checks
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  // Validate Input Lengths to prevent DoS / payload attacks
  if (name.length > 100) {
    return res.status(400).json({ error: 'Name must not exceed 100 characters.' });
  }
  if (email.length > 150 || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (message.length > 3000) {
    return res.status(400).json({ error: 'Message must not exceed 3000 characters.' });
  }

  // Escape HTML entities to eliminate XSS vulnerability in email client renderers
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  try {
    const result = await sendEmail({
      subject: `Portfolio Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #141414; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #141414; margin-top: 0;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${safeName} (&lt;${safeEmail}&gt;)</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 12px; border-left: 4px solid #ffe600; margin: 0; white-space: pre-wrap;">
            ${safeMessage}
          </blockquote>
        </div>
      `
    });

    if (result.success) {
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } else {
      return res.status(500).json({ error: 'Failed to send email.' });
    }
  } catch (err) {
    console.error('Vercel API error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
