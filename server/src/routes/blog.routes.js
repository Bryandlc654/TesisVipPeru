import { Router } from 'express';
import { query } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const SLUG_PATTERN = /^[a-z0-9-_]+$/i;
const PAGE_KEY_PREFIX = 'articulo-';

const PROMO = {
  icon: 'telephone',
  title: 'Llama a Nuestros asesores',
  number: '+51 930 443 379',
  paragraph:
    '¡No pierdas más tiempo! Agenda una reunión online con nuestros asesores y da el primer paso hacia el éxito académico. ¡Haz clic para programar tu sesión!',
  cta: { label: 'Contactar', href: 'https://wa.link/70uspg', target: '_blank' },
};

const slugify = (text) =>
  String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

const uniqueSlug = async (base) => {
  const candidate = base.slice(0, 76);
  let slug = candidate;
  let index = 2;
  for (;;) {
    const rows = await query('SELECT id FROM blog_posts WHERE slug = ? LIMIT 1', [slug]);
    if (!rows[0]) return slug;
    const suffix = String(index);
    slug = `${candidate.slice(0, 76 - suffix.length - 1)}-${suffix}`;
    index += 1;
  }
};

const paragraphBlocks = (paragraphs) =>
  (Array.isArray(paragraphs) ? paragraphs : [])
    .map((text) => String(text || '').trim())
    .filter(Boolean)
    .map((text) => ({ type: 'paragraph', text }));

const buildBody = ({ title, excerpt, coverImage, coverAlt, paragraphs }) => ({
  article: {
    heroTitle: 'Blog',
    title1: title,
    title2: '',
    intro: [excerpt || ''],
    image: coverImage || '',
    imageAlt: coverAlt || '',
    sections: [
      {
        blocks: paragraphBlocks(paragraphs).length
          ? paragraphBlocks(paragraphs)
          : [{ type: 'paragraph', text: 'Escribe aquí el contenido de tu artículo…' }],
      },
    ],
    promo: { ...PROMO },
  },
});

const mapRow = (row) =>
  row
    ? {
        id: row.id,
        slug: row.slug,
        title: row.title,
        excerpt: row.excerpt,
        coverImage: row.cover_image,
        coverAlt: row.cover_alt,
        status: row.status,
        publishedAt: row.published_at,
        updatedAt: row.updated_at,
      }
    : null;

const getPost = async (slug) => {
  const rows = await query('SELECT * FROM blog_posts WHERE slug = ? LIMIT 1', [slug]);
  return mapRow(rows[0]);
};

const getBody = async (slug) => {
  const rows = await query(
    'SELECT data FROM content_pages WHERE page = ? LIMIT 1',
    [`${PAGE_KEY_PREFIX}${slug}`],
  );
  if (!rows[0]) return null;
  return typeof rows[0].data === 'string' ? JSON.parse(rows[0].data) : rows[0].data;
};

const setBody = async (slug, body, userId) => {
  await query(
    `INSERT INTO content_pages (page, data, updated_by)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE data = VALUES(data), updated_by = VALUES(updated_by)`,
    [`${PAGE_KEY_PREFIX}${slug}`, JSON.stringify(body), userId],
  );
};

router.get('/posts', async (req, res, next) => {
  try {
    if (req.query.view === 'all') {
      await requireAuth(req, res, next);
      if (res.headersSent) return;
    }
    const onlyPublished = req.query.view !== 'all';
    const where = onlyPublished ? 'WHERE status = ?' : '';
    const rows = await query(
      `SELECT * FROM blog_posts ${where} ORDER BY published_at DESC, id DESC`,
      onlyPublished ? ['published'] : [],
    );
    return res.json({ posts: rows.map(mapRow) });
  } catch (error) {
    return next(error);
  }
});

router.get('/posts/:slug', async (req, res, next) => {
  try {
    const { slug } = req.params;
    const post = await getPost(slug);
    if (!post) return res.status(404).json({ message: 'Publicación no encontrada' });

    let body = await getBody(slug);
    if (!body) {
      body = buildBody(post);
      await setBody(slug, body, null);
    }

    return res.json({ post: { ...post, body } });
  } catch (error) {
    return next(error);
  }
});

router.post('/posts', requireAuth, async (req, res, next) => {
  try {
    const { title, slug, excerpt, coverImage, coverAlt, status, paragraphs } = req.body || {};

    if (!title || !String(title).trim()) {
      return res.status(400).json({ message: 'El título es obligatorio' });
    }

    const baseSlug = slugify(slug && String(slug).trim() ? slug : title);
    if (!SLUG_PATTERN.test(baseSlug)) {
      return res.status(400).json({ message: 'Slug inválido' });
    }
    const finalSlug = await uniqueSlug(baseSlug);

    const cleanTitle = String(title).trim();
    const cleanExcerpt = String(excerpt || '').trim();
    const finalStatus = status === 'draft' ? 'draft' : 'published';
    const finalCover = String(coverImage || '').trim();
    const finalAlt = String(coverAlt || '').trim();

    await query(
      `INSERT INTO blog_posts (slug, title, excerpt, cover_image, cover_alt, status, updated_by)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [finalSlug, cleanTitle, cleanExcerpt, finalCover, finalAlt, finalStatus, req.user.sub],
    );

    const body = buildBody({
      title: cleanTitle,
      excerpt: cleanExcerpt,
      coverImage: finalCover,
      coverAlt: finalAlt,
      paragraphs,
    });
    await setBody(finalSlug, body, req.user.sub);

    return res.status(201).json({ post: { ...(await getPost(finalSlug)), body } });
  } catch (error) {
    return next(error);
  }
});

router.put('/posts/:slug', requireAuth, async (req, res, next) => {
  try {
    const { slug: oldSlug } = req.params;
    const { title, slug, excerpt, coverImage, coverAlt, status, paragraphs } = req.body || {};

    const existing = await getPost(oldSlug);
    if (!existing) return res.status(404).json({ message: 'Publicación no encontrada' });
    if (title !== undefined && (!title || !String(title).trim())) {
      return res.status(400).json({ message: 'El título es obligatorio' });
    }

    const newSlug = slug !== undefined && slug !== oldSlug ? slugify(slug) : oldSlug;
    if (!SLUG_PATTERN.test(newSlug)) {
      return res.status(400).json({ message: 'Slug inválido' });
    }

    if (newSlug !== oldSlug) {
      const clash = await query('SELECT id FROM blog_posts WHERE slug = ? LIMIT 1', [newSlug]);
      if (clash[0]) {
        return res.status(409).json({ message: 'Ya existe una publicación con ese slug' });
      }
    }

    await query(
      `UPDATE blog_posts
       SET slug = ?, title = ?, excerpt = ?, cover_image = ?, cover_alt = ?, status = ?, updated_by = ?
       WHERE slug = ?`,
      [
        newSlug,
        title !== undefined ? String(title).trim() : existing.title,
        excerpt !== undefined ? String(excerpt).trim() : existing.excerpt,
        coverImage !== undefined ? String(coverImage).trim() : existing.coverImage,
        coverAlt !== undefined ? String(coverAlt).trim() : existing.coverAlt,
        status === 'draft' ? 'draft' : status === 'published' ? 'published' : existing.status,
        req.user.sub,
        oldSlug,
      ],
    );

    if (newSlug !== oldSlug) {
      await query(
        'UPDATE content_pages SET page = ?, updated_by = ? WHERE page = ?',
        [`${PAGE_KEY_PREFIX}${newSlug}`, req.user.sub, `${PAGE_KEY_PREFIX}${oldSlug}`],
      );
    }

    if (paragraphs !== undefined) {
      const blocks = paragraphBlocks(paragraphs);
      const current = await getBody(newSlug);
      const data = current && current.article ? current : { article: current || {} };
      data.article.sections = [
        { blocks: blocks.length ? blocks : [{ type: 'paragraph', text: '' }] },
      ];
      await setBody(newSlug, data, req.user.sub);
    }

    return res.json({ post: await getPost(newSlug) });
  } catch (error) {
    return next(error);
  }
});

router.delete('/posts/:slug', requireAuth, async (req, res, next) => {
  try {
    const { slug } = req.params;
    const existing = await getPost(slug);
    if (!existing) return res.status(404).json({ message: 'Publicación no encontrada' });

    await query('DELETE FROM content_pages WHERE page = ?', [`${PAGE_KEY_PREFIX}${slug}`]);
    await query('DELETE FROM blog_posts WHERE slug = ?', [slug]);

    return res.json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

export default router;