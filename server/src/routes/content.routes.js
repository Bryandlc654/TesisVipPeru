import { Router } from 'express';
import { query } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const PAGE_PATTERN = /^[a-z0-9-_]+$/i;

router.get('/:page', async (req, res, next) => {
  try {
    const { page } = req.params;

    if (!PAGE_PATTERN.test(page)) {
      return res.status(400).json({ message: 'Página inválida' });
    }

    const rows = await query(
      'SELECT page, data, updated_at FROM content_pages WHERE page = ? LIMIT 1',
      [page],
    );

    if (!rows[0]) {
      return res.json({ page, data: null, updatedAt: null });
    }

    const data = typeof rows[0].data === 'string' ? JSON.parse(rows[0].data) : rows[0].data;

    return res.json({ page: rows[0].page, data, updatedAt: rows[0].updated_at });
  } catch (error) {
    return next(error);
  }
});

router.put('/:page', requireAuth, async (req, res, next) => {
  try {
    const { page } = req.params;
    const { data } = req.body || {};

    if (!PAGE_PATTERN.test(page)) {
      return res.status(400).json({ message: 'Página inválida' });
    }

    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return res.status(400).json({ message: 'El contenido debe ser un objeto JSON' });
    }

    await query(
      `INSERT INTO content_pages (page, data, updated_by)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE data = VALUES(data), updated_by = VALUES(updated_by)`,
      [page, JSON.stringify(data), req.user.sub],
    );

    const rows = await query(
      'SELECT page, updated_at FROM content_pages WHERE page = ? LIMIT 1',
      [page],
    );

    return res.json({ page, updatedAt: rows[0]?.updated_at || null, message: 'Contenido guardado' });
  } catch (error) {
    return next(error);
  }
});

export default router;
