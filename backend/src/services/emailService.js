import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { AppError } from '../middleware/errorHandler.js';

let transporter = null;

function getTransporter() {
  if (!env.smtp.user || !env.smtp.password) {
    return null;
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.port === 465,
      auth: {
        user: env.smtp.user,
        pass: env.smtp.password,
      },
    });
  }
  return transporter;
}

export async function sendContactMessage({ name, email, phone, subject, message }) {
  const mailer = getTransporter();

  if (!mailer) {
    console.warn('[emailService] SMTP not configured — logging message instead of sending.');
    console.info('[contact-message]', { name, email, phone, subject, message });
    return;
  }

  try {
    await mailer.sendMail({
      from: `"Ruchira Masale Website" <${env.smtp.user}>`,
      to: env.contactReceiverEmail || env.smtp.user,
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\n${message}`,
    });
  } catch {
    throw new AppError('Unable to send your message right now. Please try again later.', 502, 'EMAIL_SEND_FAILED');
  }
}
