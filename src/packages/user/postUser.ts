import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { User } from '../../typeorm/entity/user';
import { validate } from 'class-validator';
import { UserService } from './userService';
import config from '../../config/config';

export const postUser = async (req: Request, res: Response): Promise<void> => {
  const userService = new UserService();
  const { username, password, role } = req.body;
  const user = new User();
  user.username = username;
  user.password = password;
  user.role = role || 'MEMBER';

  const errors = await validate(user);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }

  user.hashPassword();

  try {
    await userService.save(user);
  } catch (e) {
    res.status(409).send('Username already in use');
    return;
  }

  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username,
    },
    config.jwtSecret,
    { expiresIn: '1h' },
  );

  res.status(201).send(token);
};
