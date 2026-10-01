import app from './app.js';
import { env } from './config/env.js';

const server = app.listen(env.port, () => {
  console.log(`Ruchira Masale API running on port ${env.port}`);
});

function shutdown() {
  console.log('Shutting down gracefully...');
  server.close(() => process.exit(0));
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
