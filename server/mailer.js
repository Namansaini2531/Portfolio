import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Pure Node.js + Nodemailer Express/Node SMTP Mailer Service
 * 
 * Usage:
 * Call `sendEmail({ to, subject, text, html })` from any Node.js backend controller or script.
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,     // Your SMTP email address
    pass: process.env.SMTP_PASSWORD  // Your SMTP password or App Password
  }
});

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || 'Naman Saini'}" <${process.env.SMTP_USER}>`,
      to: to || process.env.SMTP_USER,
      subject,
      text,
      html
    });

    console.log('✅ Email sent successfully via Nodemailer SMTP:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Nodemailer SMTP Error:', error);
    return { success: false, error: error.message };
  }
};

export default sendEmail;
