import express from 'express';
import 'express-async-errors';

import routes from './routes';

import AppError from './errors/AppError';

import './database';

require('dotenv/config');

const app = express();

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(process.env.DB_USERNAME);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
});

export default app;
