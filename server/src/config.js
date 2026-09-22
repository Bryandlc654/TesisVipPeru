import 'dotenv/config';

export const config = {
  port: Number(process.env.PORT || 4000),
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tesisvip',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'dev-secret-no-usar-en-produccion',
    expiresIn: process.env.JWT_EXPIRES_IN || '8h',
  },
  corsOrigin: (process.env.CORS_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  admin: {
    name: process.env.ADMIN_NAME || 'Administrador',
    email: process.env.ADMIN_EMAIL || 'admin@tesis-vip.com',
    password: process.env.ADMIN_PASSWORD || 'Admin12345',
  },
};
