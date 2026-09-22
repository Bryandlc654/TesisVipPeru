import { Router } from 'express';
import bcrypt from 'bcryptjs';
import rateLimit from 'express-rate-limit';
import { query } from '../db.js';
import { signToken } from '../auth.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: { message: 'Demasiados intentos fallidos. Intenta nuevamente en unos minutos.' },
});

router.post('/login', loginLimiter, async (req, res, next) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: 'Correo y contraseña son obligatorios' });
    }

    const rows = await query(
      'SELECT id, name, email, password_hash, role, is_active FROM users WHERE email = ? LIMIT 1',
      [email],
    );
    const user = rows[0];

    if (!user || !user.is_active) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = signToken(user);

    return res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    return next(error);
  }
});

router.get('/me', requireAuth, async (req, res, next) => {
  try {
    const rows = await query(
      'SELECT id, name, email, role FROM users WHERE id = ? LIMIT 1',
      [req.user.sub],
    );

    if (!rows[0]) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ user: rows[0] });
  } catch (error) {
    return next(error);
  }
});

export default router;
