import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { validateContact } from '../middleware/validateContact.js';
import { submitContactForm } from '../controllers/contactController.js';

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many messages sent. Please try again later.',
    errorCode: 'RATE_LIMITED',
  },
});

router.post('/', contactLimiter, validateContact, submitContactForm);

export default router;
