import { config } from '../src/config.js';
import { pool } from '../src/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const BASE = process.env.QA_BASE_URL || `http://localhost:${config.port}`;
const allowedOrigin = config.corsOrigin[0] || 'http://localhost:5173';

const results = [];
let pass = 0;
let vuln = 0;
let info = 0;
const createdUploads = [];

const record = (status, name, detail = '') => {
  if (status === 'PASS') pass += 1;
  if (status === 'VULN') vuln += 1;
  if (status === 'INFO') info += 1;
  results.push(`  [${status}] ${name}${detail ? ` -> ${detail}` : ''}`);
};

const check = async (name, fn, { severity = 'VULN' } = {}) => {
  try {
    const outcome = await fn();
    if (outcome === 'INFO') record('INFO', name);
    else record('PASS', name);
  } catch (error) {
    record(severity, name, error.message);
  }
};

const expect = (condition, message) => {
  if (!condition) throw new Error(message);
};

const api = async (method, path, { body, token, formData, headers = {}, raw } = {}) => {
  const finalHeaders = { ...headers };
  if (token) finalHeaders.Authorization = `Bearer ${token}`;
  let payload = raw;
  if (body !== undefined) {
    finalHeaders['Content-Type'] = 'application/json';
    payload = JSON.stringify(body);
  }
  const res = await fetch(`${BASE}${path}`, { method, headers: finalHeaders, body: formData || payload });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  return { status: res.status, data, headers: res.headers };
};

const PNG_1x1 = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64',
);

const cleanup = async () => {
  await pool.execute('DELETE FROM content_pages WHERE page = ?', ['sec-test']).catch(() => {});
  await pool.execute('DELETE FROM users WHERE email = ?', ['qa-inactive@tesis-vip.com']).catch(() => {});
  const { unlink } = await import('node:fs/promises');
  const path = await import('node:path');
  const { fileURLToPath } = await import('node:url');
  const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../uploads');
  for (const url of createdUploads) {
    await unlink(path.join(dir, path.basename(url))).catch(() => {});
  }
  await pool.end();
};

const run = async () => {
  console.log(`\nQA DE SEGURIDAD  ->  ${BASE}\n`);

  let token = null;
  const login = await api('POST', '/api/auth/login', {
    body: { email: config.admin.email, password: config.admin.password },
  });
  token = login.data?.token;

  // ---------- A. Autenticación / JWT ----------
  await check('El token JWT usa HS256 y trae expiración', async () => {
    expect(token, 'no se obtuvo token');
    const decoded = jwt.decode(token, { complete: true });
    expect(decoded.header.alg === 'HS256', `alg=${decoded.header.alg}`);
    expect(typeof decoded.payload.exp === 'number', 'sin exp');
  });

  await check('Login con contraseña incorrecta no revela si el correo existe', async () => {
    const wrongPass = await api('POST', '/api/auth/login', {
      body: { email: config.admin.email, password: 'x-incorrecta' },
    });
    const noUser = await api('POST', '/api/auth/login', {
      body: { email: 'no-existe@tesis-vip.com', password: 'x-incorrecta' },
    });
    expect(wrongPass.status === 401 && noUser.status === 401, 'status distinto');
    expect(
      wrongPass.data.message === noUser.data.message,
      'mensajes distintos (enumeración de usuarios)',
    );
  });

  await check('La respuesta de login no expone password_hash', async () => {
    const raw = JSON.stringify(login.data);
    expect(!raw.includes('password_hash'), 'expone password_hash');
  });

  await check('JWT con algoritmo "none" es rechazado', async () => {
    const header = Buffer.from(JSON.stringify({ alg: 'none', typ: 'JWT' })).toString('base64url');
    const payload = Buffer.from(JSON.stringify({ sub: 1, role: 'admin' })).toString('base64url');
    const res = await api('GET', '/api/auth/me', { token: `${header}.${payload}.` });
    expect(res.status === 401, `status ${res.status}`);
  });

  await check('JWT firmado con secreto distinto es rechazado', async () => {
    const forged = jwt.sign({ sub: 1, role: 'admin' }, 'otro-secreto', { expiresIn: '1h' });
    const res = await api('GET', '/api/auth/me', { token: forged });
    expect(res.status === 401, `status ${res.status}`);
  });

  await check('JWT expirado es rechazado', async () => {
    const expired = jwt.sign({ sub: 1, role: 'admin' }, config.jwt.secret, { expiresIn: '-10s' });
    const res = await api('GET', '/api/auth/me', { token: expired });
    expect(res.status === 401, `status ${res.status}`);
  });

  await check('Usuario inactivo no puede iniciar sesión', async () => {
    const hash = await bcrypt.hash('Inactivo12345', 10);
    await pool.execute(
      'INSERT INTO users (name, email, password_hash, role, is_active) VALUES (?, ?, ?, ?, 0)',
      ['QA Inactivo', 'qa-inactive@tesis-vip.com', hash, 'admin'],
    );
    const res = await api('POST', '/api/auth/login', {
      body: { email: 'qa-inactive@tesis-vip.com', password: 'Inactivo12345' },
    });
    expect(res.status === 401, `status ${res.status}`);
  });

  await check('Contraseñas almacenadas con bcrypt (coste >= 10)', async () => {
    const rows = await pool.execute('SELECT password_hash FROM users WHERE email = ? LIMIT 1', [
      config.admin.email,
    ]);
    const hash = rows[0][0]?.password_hash || '';
    expect(/^\$2[aby]\$/.test(hash), 'no es bcrypt');
    const cost = Number(hash.split('$')[2]);
    expect(cost >= 10, `coste ${cost}`);
  });

  // ---------- B. Autorización ----------
  await check('PUT de contenido requiere token', async () => {
    const res = await api('PUT', '/api/content/sec-test', { body: { data: { a: 1 } } });
    expect(res.status === 401, `status ${res.status}`);
  });

  await check('Upload requiere token', async () => {
    const form = new FormData();
    form.append('file', new Blob([PNG_1x1], { type: 'image/png' }), 'a.png');
    const res = await api('POST', '/api/upload', { formData: form });
    expect(res.status === 401, `status ${res.status}`);
  });

  // ---------- C. Inyección ----------
  await check('Inyección SQL en login es neutralizada', async () => {
    const payloads = ["' OR '1'='1", "admin@tesis-vip.com'--", "' OR 1=1#", 'x" OR "1"="1'];
    for (const email of payloads) {
      const res = await api('POST', '/api/auth/login', { body: { email, password: 'x' } });
      expect(res.status === 401, `payload "${email}" -> ${res.status}`);
    }
  });

  await check('Inyección SQL en :page es rechazada (400, no 500)', async () => {
    const res = await api('GET', "/api/content/1';DROP%20TABLE%20users;--");
    expect(res.status === 400, `status ${res.status}`);
  });

  // ---------- D. Subida de archivos ----------
  await check('Path traversal en nombre de archivo es neutralizado', async () => {
    const form = new FormData();
    form.append('file', new Blob([PNG_1x1], { type: 'image/png' }), '../../evil.png');
    const res = await api('POST', '/api/upload', { token, formData: form });
    expect(res.status === 201, `status ${res.status}`);
    createdUploads.push(res.data.url);
    expect(!String(res.data.url).includes('..'), `url con traversal: ${res.data.url}`);
    expect(/^\/uploads\/[a-z0-9-]+\.png$/i.test(res.data.url), `url inesperada: ${res.data.url}`);
  });

  await check('Tipo MIME no permitido es rechazado', async () => {
    const form = new FormData();
    form.append('file', new Blob(['<script>alert(1)</script>'], { type: 'text/html' }), 'x.html');
    const res = await api('POST', '/api/upload', { token, formData: form });
    expect(res.status === 400, `status ${res.status}`);
  });

  await check('Archivo mayor al límite (8MB) es rechazado', async () => {
    const big = Buffer.alloc(9 * 1024 * 1024, 0x61);
    const form = new FormData();
    form.append('file', new Blob([big], { type: 'image/png' }), 'big.png');
    const res = await api('POST', '/api/upload', { token, formData: form });
    expect(res.status === 400 || res.status === 413, `status ${res.status}`);
  });

  await check('HTML disfrazado con MIME de imagen y extensión .html es rechazado', async () => {
    const evil = '<script>alert(1)</script>';
    const form = new FormData();
    form.append('file', new Blob([evil], { type: 'image/png' }), 'x.html');
    const res = await api('POST', '/api/upload', { token, formData: form });
    expect(res.status === 400, `status ${res.status} (se sirvió como HTML: ${res.raw})`);
  });

  await check('PNG válido conserva extensión de imagen (no la del nombre)', async () => {
    const form = new FormData();
    form.append('file', new Blob([PNG_1x1], { type: 'image/png' }), 'img.html');
    const res = await api('POST', '/api/upload', { token, formData: form });
    expect(res.status === 201, `status ${res.status}`);
    createdUploads.push(res.data.url);
    expect(/\.png$/i.test(res.data.url), `url inesperada: ${res.data.url}`);
  });

  await check('SVG subido (riesgo de XSS almacenado en mismo origen)', async () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" onload="alert(1)"></svg>';
    const form = new FormData();
    form.append('file', new Blob([svg], { type: 'image/svg+xml' }), 'x.svg');
    const res = await api('POST', '/api/upload', { token, formData: form });
    if (res.status === 201) {
      createdUploads.push(res.data.url);
      throw new Error('SVG aceptado y servido desde el mismo origen (XSS almacenado posible)');
    }
    return 'rechazado';
  });

  await check('Listado de directorio /uploads deshabilitado', async () => {
    const res = await fetch(`${BASE}/uploads/`);
    expect(res.status === 404 || res.status === 403, `status ${res.status}`);
  });

  // ---------- E. Cabeceras / CORS ----------
  await check('Cabeceras de seguridad HTTP presentes', async () => {
    const res = await fetch(`${BASE}/api/health`);
    const missing = [
      'x-content-type-options',
      'x-frame-options',
      'content-security-policy',
      'strict-transport-security',
      'referrer-policy',
    ].filter((h) => !res.headers.get(h));
    if (missing.length) throw new Error(`faltan: ${missing.join(', ')}`);
  });

  await check('CORS no refleja orígenes no permitidos', async () => {
    const res = await fetch(`${BASE}/api/health`, { headers: { Origin: 'http://evil.example' } });
    const acao = res.headers.get('access-control-allow-origin');
    expect(acao !== 'http://evil.example' && acao !== '*', `ACAO=${acao}`);
  });

  await check('CORS permite el origen configurado', async () => {
    const res = await fetch(`${BASE}/api/health`, { headers: { Origin: allowedOrigin } });
    const acao = res.headers.get('access-control-allow-origin');
    expect(acao === allowedOrigin, `ACAO=${acao}`);
  });

  await check('Cuerpo JSON excesivo (>4MB) es rechazado sin filtrar stack', async () => {
    const big = JSON.stringify({ data: { x: 'a'.repeat(5 * 1024 * 1024) } });
    const res = await api('PUT', '/api/content/sec-test', { token, raw: big, headers: { 'Content-Type': 'application/json' } });
    expect(res.status === 413 || res.status === 400, `status ${res.status} (debería ser 413)`);
    expect(!JSON.stringify(res.data).includes('at '), 'posible stack trace');
  }, { severity: 'INFO' });

  await check('Errores 500 no filtran stack traces', async () => {
    const res = await api('GET', '/api/content/home');
    expect(!JSON.stringify(res.data).includes('node_modules'), 'filtra rutas internas');
  });

  // ---------- F. Divulgación / config ----------
  await check('Longitud del secreto JWT >= 32 caracteres', async () => {
    expect((config.jwt.secret || '').length >= 32, `longitud ${(config.jwt.secret || '').length}`);
  });

  await check('JWT_SECRET no es el valor por defecto inseguro', async () => {
    expect(
      config.jwt.secret !== 'dev-secret-no-usar-en-produccion',
      'usa el secreto por defecto',
    );
  });

  await check('Sin rate limiting en /auth/login (fuerza bruta)', async () => {
    let blocked = false;
    for (let i = 0; i < 12; i += 1) {
      const res = await api('POST', '/api/auth/login', {
        body: { email: config.admin.email, password: `bad-${i}` },
      });
      if (res.status === 429) blocked = true;
    }
    if (!blocked) throw new Error('12 intentos fallidos sin bloqueo/429');
  });

  await check('No se usa dangerouslySetInnerHTML en el frontend', async () => {
    const { execSync } = await import('node:child_process');
    const out = execSync(
      'powershell -NoProfile -Command "Get-ChildItem -Recurse -Path src -Include *.jsx | Select-String -Pattern dangerouslySetInnerHTML | Measure-Object | Select-Object -ExpandProperty Count"',
      { cwd: process.cwd(), encoding: 'utf8' },
    ).trim();
    expect(out === '0', `encontrados ${out}`);
  });

  await check('El secreto JWT no aparece en el bundle del frontend', async () => {
    const { existsSync, readdirSync, readFileSync } = await import('node:fs');
    const path = await import('node:path');
    const distAssets = path.resolve(process.cwd(), '../dist/assets');
    if (!existsSync(distAssets)) return 'INFO';
    const files = readdirSync(distAssets).filter((f) => f.endsWith('.js'));
    for (const file of files) {
      const content = readFileSync(path.join(distAssets, file), 'utf8');
      if (content.includes(config.jwt.secret)) {
        throw new Error(`secreto encontrado en ${file}`);
      }
    }
    return 'ok';
  });

  console.log(results.join('\n'));
  console.log(`\nResumen seguridad: ${pass} PASS | ${vuln} VULN | ${info} INFO\n`);
  return { pass, vuln, info };
};

run()
  .then(async ({ vuln: v }) => {
    await cleanup();
    process.exit(v > 0 ? 1 : 0);
  })
  .catch(async (error) => {
    console.error('Error fatal en QA de seguridad:', error.message);
    await cleanup().catch(() => {});
    process.exit(1);
  });
