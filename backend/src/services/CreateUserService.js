import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

class CreateUserService {
  async execute({ name, email, password }) {
    const checkUserExist = await User.findOne({
      where: { email },
    });

    if (checkUserExist) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
