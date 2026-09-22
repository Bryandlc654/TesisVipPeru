import jwt from 'jsonwebtoken';
import { config } from './config.js';

export const signToken = (user) =>
  jwt.sign(
    {
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn },
  );

export const verifyToken = (token) => jwt.verify(token, config.jwt.secret);
