import { compare } from 'bcryptjs';

import User from '../models/User';

import AppError from '../errors/AppError';

class SessionsService {
  async execute({ email, password }) {
    const user = await User.findOne({ where: email });

    if (!user) {
      throw new AppError('Email/password wrong ');
    }

    const hashedPassword = await compare(password, user.password);

    if (!hashedPassword) {
      throw new AppError('Email/password wrong ');
    }

    return user;
  }
}

export default SessionsService;
