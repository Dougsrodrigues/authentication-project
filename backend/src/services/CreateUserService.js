import { hash } from 'bcryptjs';

import { uuid } from 'uuidv4';
import AppError from '../errors/AppError';

import User from '../models/User';

class CreateUserService {
  async execute({ name, email, password_hash: password }) {
    const checkUserExist = await User.findOne({
      where: { email },
    });

    if (checkUserExist) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = await User.create({
      id: uuid(),
      name,
      email,
      password_hash: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
