import { sendContactMessage } from '../services/emailService.js';

export async function submitContactForm(req, res, next) {
  try {
    await sendContactMessage(req.body);

    res.status(200).json({
      success: true,
      message: 'Thank you for reaching out. We will get back to you soon.',
    });
  } catch (err) {
    next(err);
  }
}
