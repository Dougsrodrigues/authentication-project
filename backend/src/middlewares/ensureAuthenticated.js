import { verify } from 'jsonwebtoken';
import AppError from '../errors/AppError';

import authConfig from '../config/auth';

export default function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded;

    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT token');
  }
}
