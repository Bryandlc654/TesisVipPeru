import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const envFile = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.env');
dotenv.config({ path: envFile, quiet: true });
const envRaw = dotenv.parse(fs.readFileSync(envFile));

const parseCors = (value) =>
  (value || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

export const config = {
  port: Number(envRaw.PORT || process.env.PORT || 4000),
  host: envRaw.HOST || process.env.HOST || undefined,
  env: envRaw.NODE_ENV || process.env.NODE_ENV || 'development',
  db: {
    host: envRaw.DB_HOST || process.env.DB_HOST || '127.0.0.1',
    port: Number(envRaw.DB_PORT || process.env.DB_PORT || 3306),
    user: envRaw.DB_USER || process.env.DB_USER || 'root',
    password: envRaw.DB_PASSWORD || process.env.DB_PASSWORD || '',
    database: envRaw.DB_NAME || process.env.DB_NAME || 'tesisvip',
  },
  jwt: {
    secret: envRaw.JWT_SECRET || process.env.JWT_SECRET || 'dev-secret-no-usar-en-produccion',
    expiresIn: envRaw.JWT_EXPIRES_IN || process.env.JWT_EXPIRES_IN || '8h',
  },
  corsOrigin: parseCors(envRaw.CORS_ORIGIN || process.env.CORS_ORIGIN),
  admin: {
    name: envRaw.ADMIN_NAME || process.env.ADMIN_NAME || 'Administrador',
    email: envRaw.ADMIN_EMAIL || process.env.ADMIN_EMAIL || 'admin@tesis-vip.com',
    password: envRaw.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || 'Admin12345',
  },
};