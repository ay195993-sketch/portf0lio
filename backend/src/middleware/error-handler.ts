import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);

  const status = typeof err.status === 'number' ? err.status : 500;
  const message = status >= 500 ? 'Internal server error' : String(err.message ?? 'Request failed');

  res.status(status).json({ message });
};
