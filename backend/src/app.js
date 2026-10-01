import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import contactRoutes from './routes/contactRoutes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: '10kb' }));

app.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'ok' });
});

app.use('/api/v1/contact', contactRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
