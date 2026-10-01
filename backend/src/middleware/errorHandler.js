export class AppError extends Error {
  constructor(message, statusCode = 400, errorCode = 'BAD_REQUEST') {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}

export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
    errorCode: 'NOT_FOUND',
  });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const errorCode = err.errorCode || 'INTERNAL_ERROR';

  if (statusCode >= 500) {
    console.error('[error]', err);
  }

  res.status(statusCode).json({
    success: false,
    message: statusCode >= 500 ? 'Something went wrong. Please try again later.' : err.message,
    errorCode,
  });
}
