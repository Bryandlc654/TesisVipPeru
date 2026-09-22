import { performance } from 'node:perf_hooks';
import { config } from '../src/config.js';
import { pool } from '../src/db.js';

const BASE = process.env.QA_BASE_URL || `http://localhost:${config.port}`;
const QA_PAGE = 'qa-test';
const results = [];
let passed = 0;
let failed = 0;

const assert = (condition, message) => {
  if (!condition) throw new Error(message || 'assertion failed');
};

const test = async (name, fn) => {
  const start = performance.now();
  try {
    await fn();
    passed += 1;
    results.push(`  PASS  ${name} (${Math.round(performance.now() - start)}ms)`);
  } catch (error) {
    failed += 1;
    results.push(`  FAIL  ${name} -> ${error.message}`);
  }
};

const api = async (method, path, { body, token, formData, headers = {} } = {}) => {
  const finalHeaders = { ...headers };
  if (token) finalHeaders.Authorization = `Bearer ${token}`;
  let payload = body;
  if (body !== undefined && !formData) {
    finalHeaders['Content-Type'] = 'application/json';
    payload = JSON.stringify(body);
  }
  const response = await fetch(`${BASE}${path}`, {
    method,
    headers: finalHeaders,
    body: formData || payload,
  });
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  return { status: response.status, data, raw: text };
};

const PNG_1x1 = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64',
);

const run = async () => {
  console.log(`\nQA Tesis VIP API  ->  ${BASE}\n`);

  let token = null;
  let uploadedUrl = null;

  await test('GET /api/health responde ok', async () => {
    const res = await api('GET', '/api/health');
    assert(res.status === 200, `status ${res.status}`);
    assert(res.data.status === 'ok', 'status != ok');
  });

  await test('GET ruta inexistente devuelve 404 JSON', async () => {
    const res = await api('GET', '/api/does-not-exist');
    assert(res.status === 404, `status ${res.status}`);
    assert(res.data.message, 'sin mensaje');
  });

  await test('POST /auth/login sin datos -> 400', async () => {
    const res = await api('POST', '/api/auth/login', { body: {} });
    assert(res.status === 400, `status ${res.status}`);
  });

  await test('POST /auth/login con credenciales inválidas -> 401', async () => {
    const res = await api('POST', '/api/auth/login', {
      body: { email: config.admin.email, password: 'incorrecta' },
    });
    assert(res.status === 401, `status ${res.status}`);
  });

  await test('POST /auth/login válido -> token + usuario', async () => {
    const res = await api('POST', '/api/auth/login', {
      body: { email: config.admin.email, password: config.admin.password },
    });
    assert(res.status === 200, `status ${res.status}`);
    assert(typeof res.data.token === 'string' && res.data.token.length > 20, 'token inválido');
    assert(res.data.user?.role === 'admin', 'rol incorrecto');
    token = res.data.token;
  });

  await test('GET /auth/me sin token -> 401', async () => {
    const res = await api('GET', '/api/auth/me');
    assert(res.status === 401, `status ${res.status}`);
  });

  await test('GET /auth/me con token manipulado -> 401', async () => {
    const res = await api('GET', '/api/auth/me', { token: `${token}tampered` });
    assert(res.status === 401, `status ${res.status}`);
  });

  await test('GET /auth/me con token válido -> usuario', async () => {
    const res = await api('GET', '/api/auth/me', { token });
    assert(res.status === 200, `status ${res.status}`);
    assert(res.data.user.email === config.admin.email, 'email distinto');
  });

  await test('GET /content/home es público y responde 200', async () => {
    const res = await api('GET', '/api/content/home');
    assert(res.status === 200, `status ${res.status}`);
    assert(res.data.page === 'home', 'page distinto');
  });

  await test('PUT /content sin token -> 401', async () => {
    const res = await api('PUT', `/api/content/${QA_PAGE}`, { body: { data: { a: 1 } } });
    assert(res.status === 401, `status ${res.status}`);
  });

  await test('PUT /content con array en data -> 400', async () => {
    const res = await api('PUT', `/api/content/${QA_PAGE}`, { token, body: { data: [1, 2, 3] } });
    assert(res.status === 400, `status ${res.status}`);
  });

  await test('PUT /content con página inválida -> 400', async () => {
    const res = await api('PUT', '/api/content/bad%20page!', { token, body: { data: { a: 1 } } });
    assert(res.status === 400, `status ${res.status}`);
  });

  const payload = {
    hero: { title1: 'QA Título', info: 'QA Info' },
    services: { items: [{ title: 'Servicio QA', cta: { label: 'Ir', href: 'https://x.com' } }] },
  };

  await test('PUT /content válido -> guarda y eco', async () => {
    const res = await api('PUT', `/api/content/${QA_PAGE}`, { token, body: { data: payload } });
    assert(res.status === 200, `status ${res.status}`);
    assert(res.data.message, 'sin mensaje');
  });

  await test('GET /content devuelve exactamente lo guardado', async () => {
    const res = await api('GET', `/api/content/${QA_PAGE}`);
    assert(res.status === 200, `status ${res.status}`);
    assert(JSON.stringify(res.data.data) === JSON.stringify(payload), 'datos distintos');
  });

  await test('PUT /content sobrescribe (upsert) correctamente', async () => {
    const second = { hero: { title1: 'QA Título 2' } };
    await api('PUT', `/api/content/${QA_PAGE}`, { token, body: { data: second } });
    const res = await api('GET', `/api/content/${QA_PAGE}`);
    assert(res.data.data.hero.title1 === 'QA Título 2', 'no actualizó');
  });

  await test('POST /upload sin token -> 401', async () => {
    const form = new FormData();
    form.append('file', new Blob([PNG_1x1], { type: 'image/png' }), 'qa.png');
    const res = await api('POST', '/api/upload', { formData: form });
    assert(res.status === 401, `status ${res.status}`);
  });

  await test('POST /upload con archivo no permitido -> 400', async () => {
    const form = new FormData();
    form.append('file', new Blob(['hola'], { type: 'text/plain' }), 'nota.txt');
    const res = await api('POST', '/api/upload', { token, formData: form });
    assert(res.status === 400, `status ${res.status}`);
  });

  await test('POST /upload PNG válido -> 201 + url', async () => {
    const form = new FormData();
    form.append('file', new Blob([PNG_1x1], { type: 'image/png' }), 'qa-test.png');
    const res = await api('POST', '/api/upload', { token, formData: form });
    assert(res.status === 201, `status ${res.status}`);
    assert(String(res.data.url).startsWith('/uploads/'), 'url inesperada');
    uploadedUrl = res.data.url;
  });

  await test('El archivo subido se sirve por /uploads', async () => {
    assert(uploadedUrl, 'no hubo url previa');
    const res = await fetch(`${BASE}${uploadedUrl}`);
    assert(res.status === 200, `status ${res.status}`);
    const type = res.headers.get('content-type') || '';
    assert(type.includes('image'), `content-type ${type}`);
  });

  console.log(results.join('\n'));
  console.log(`\nResultado: ${passed} aprobadas, ${failed} fallidas de ${passed + failed}\n`);

  return { passed, failed, uploadedUrl };
};

const cleanup = async (uploadedUrl) => {
  await pool.execute('DELETE FROM content_pages WHERE page = ?', [QA_PAGE]);
  if (uploadedUrl) {
    const { unlink } = await import('node:fs/promises');
    const path = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../uploads');
    await unlink(path.join(dir, path.basename(uploadedUrl))).catch(() => {});
  }
  await pool.end();
};

run()
  .then(async ({ failed: failCount, uploadedUrl }) => {
    await cleanup(uploadedUrl);
    process.exit(failCount > 0 ? 1 : 0);
  })
  .catch(async (error) => {
    console.error('Error fatal en QA:', error.message);
    await cleanup(null).catch(() => {});
    process.exit(1);
  });
