import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from './config.js';
import { testConnection } from './db.js';
import authRoutes from './routes/auth.routes.js';
import contentRoutes from './routes/content.routes.js';
import uploadRoutes from './routes/upload.routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadsDir = path.resolve(__dirname, '../uploads');

const app = express();

app.disable('x-powered-by');

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", 'data:', 'blob:', 'https:'],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
      },
    },
  }),
);

app.use(
  cors({
    origin: config.corsOrigin,
    credentials: true,
  }),
);
app.use(express.json({ limit: '4mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan(config.env === 'production' ? 'combined' : 'dev'));

app.use('/uploads', express.static(uploadsDir, { maxAge: '7d', index: false }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', env: config.env });
});

app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/upload', uploadRoutes);

app.use((_req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// eslint-disable-next-line no-unused-vars
app.use((error, _req, res, _next) => {
  const status = error.status || error.statusCode || 500;

  if (status === 413) {
    return res.status(413).json({ message: 'El contenido enviado es demasiado grande' });
  }

  if (status === 400 && (error.type === 'entity.parse.failed' || error instanceof SyntaxError)) {
    return res.status(400).json({ message: 'JSON inválido en la solicitud' });
  }

  if (status >= 500) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }

  return res.status(status).json({ message: error.message || 'Solicitud inválida' });
});

const start = async () => {
  try {
    await testConnection();
    console.log('MySQL conectado.');
  } catch (error) {
    console.error('No se pudo conectar a MySQL:', error.message);
    console.error('Revisa server/.env y ejecuta server/sql/schema.sql');
    process.exit(1);
  }

  app.listen(config.port, () => {
    console.log(`API escuchando en http://localhost:${config.port}`);
  });
};

start();
