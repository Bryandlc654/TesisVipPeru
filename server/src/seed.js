import bcrypt from 'bcryptjs';
import { pool, query, testConnection } from './db.js';
import { config } from './config.js';

const run = async () => {
  try {
    await testConnection();
    console.log('Conexión a MySQL establecida.');

    const passwordHash = await bcrypt.hash(config.admin.password, 10);
    const existing = await query('SELECT id FROM users WHERE email = ? LIMIT 1', [
      config.admin.email,
    ]);

    if (existing[0]) {
      await query('UPDATE users SET name = ?, password_hash = ?, role = ? WHERE id = ?', [
        config.admin.name,
        passwordHash,
        'admin',
        existing[0].id,
      ]);
      console.log(`Usuario administrador actualizado: ${config.admin.email}`);
    } else {
      await query(
        'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
        [config.admin.name, config.admin.email, passwordHash, 'admin'],
      );
      console.log(`Usuario administrador creado: ${config.admin.email}`);
    }

    console.log(`Contraseña: ${config.admin.password}`);
    console.log('Listo. Ya puedes iniciar sesión en /admin/login');
  } catch (error) {
    console.error('Error al ejecutar el seed:', error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
};

run();
