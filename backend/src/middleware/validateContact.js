import { AppError } from './errorHandler.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(req, res, next) {
  const { name, email, phone, subject, message } = req.body || {};
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    errors.push('A valid email address is required.');
  }
  if (phone && !/^[0-9+\-\s()]{7,15}$/.test(phone.trim())) {
    errors.push('Phone number format is invalid.');
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
    errors.push('Subject must be at least 2 characters.');
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.');
  }
  if (name && name.length > 100) errors.push('Name is too long.');
  if (subject && subject.length > 150) errors.push('Subject is too long.');
  if (message && message.length > 2000) errors.push('Message is too long.');

  if (errors.length > 0) {
    return next(new AppError(errors.join(' '), 422, 'VALIDATION_ERROR'));
  }

  req.body.name = name.trim();
  req.body.email = email.trim();
  req.body.phone = phone ? phone.trim() : '';
  req.body.subject = subject.trim();
  req.body.message = message.trim();

  next();
}
