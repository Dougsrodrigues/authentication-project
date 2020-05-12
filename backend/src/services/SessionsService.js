import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';

class SessionsService {
  async execute({ email, password }) {
    const { secret, expiresIn } = authConfig.jwt;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Email/password is wrong');
    }

    const passwordMatched = await compare(password, user.password_hash);

    if (!passwordMatched) {
      throw new AppError('Email/password is wrong ');
    }

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default SessionsService;
