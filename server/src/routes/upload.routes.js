import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { requireAuth } from '../middleware/auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadsDir = path.resolve(__dirname, '../../uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const ALLOWED = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const base = path
      .basename(file.originalname, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40);
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    cb(null, `${base || 'archivo'}-${unique}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED.has(file.mimetype)) {
      return cb(new Error('Formato de imagen no permitido'));
    }
    return cb(null, true);
  },
});

const router = Router();

router.post('/', requireAuth, (req, res) => {
  upload.single('file')(req, res, (error) => {
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    if (!req.file) {
      res.status(400).json({ message: 'No se recibió ningún archivo' });
      return;
    }

    res.status(201).json({
      url: `/uploads/${req.file.filename}`,
      filename: req.file.filename,
      size: req.file.size,
    });
  });
});

export default router;
