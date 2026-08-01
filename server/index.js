import express from 'express';
import cors from 'cors';
import sendEmail from './mailer.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

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
    return res.status(500).json({ error: 'Unable to send message at this time. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Nodemailer SMTP server running on http://localhost:${PORT}`);
});
