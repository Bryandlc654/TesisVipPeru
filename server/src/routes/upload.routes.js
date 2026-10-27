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

const MIME_EXT = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
};

const ALLOWED = new Set(Object.keys(MIME_EXT));

const sanitizeBase = (name) => {
  const raw = path.basename(name);
  const noExt = raw.substring(0, raw.lastIndexOf('.')) || raw;
  return (
    noExt
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'archivo'
  );
};

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = MIME_EXT[file.mimetype] || '.jpg';
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    cb(null, `${sanitizeBase(file.originalname)}-${unique}${ext}`);
  },
});

const toHeader = (filePath) => {
  const fd = fs.openSync(filePath, 'r');
  try {
    const buffer = Buffer.alloc(12);
    fs.readSync(fd, buffer, 0, buffer.length, 0);
    return buffer;
  } finally {
    fs.closeSync(fd);
  }
};

const isJpeg = (header) => header[0] === 0xff && header[1] === 0xd8 && header[2] === 0xff;
const isPng = (header) => header.slice(0, 4).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47]));
const isGif = (header) => header.slice(0, 4).equals(Buffer.from('GIF8'));
const isWebp = (header) =>
  header.slice(0, 4).equals(Buffer.from('RIFF')) && header.slice(8, 12).equals(Buffer.from('WEBP'));

const VALIDATORS = {
  'image/jpeg': isJpeg,
  'image/png': isPng,
  'image/gif': isGif,
  'image/webp': isWebp,
};

const isValidImage = (filePath, mimetype) => {
  const validator = VALIDATORS[mimetype];
  if (!validator) return false;
  try {
    return validator(toHeader(filePath));
  } catch {
    return false;
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024, files: 1 },
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

    if (!isValidImage(req.file.path, req.file.mimetype)) {
      fs.unlink(req.file.path, () => {});
      res.status(400).json({ message: 'El archivo no es una imagen válida' });
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