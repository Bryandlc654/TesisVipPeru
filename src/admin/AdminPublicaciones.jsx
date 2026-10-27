import { useCallback, useEffect, useState } from 'react';
import PageEditor from './PageEditor';
import ArticleView from '../cms/ArticleView';
import { dynamicArticleDefaults } from '../cms/dynamicPosts';
import { createPost, deletePost, fetchPosts, fetchPost, updatePost, uploadImage } from '../cms/api';
import './admin.css';

const slugifyText = (text) =>
  String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const paragraphsFromBody = (body) => {
  const article = body?.article || body || {};
  const blocks = article.sections?.[0]?.blocks || [];
  return blocks
    .filter((b) => b && b.type === 'paragraph')
    .map((b) => b.text || '')
    .join('\n\n');
};

const PostForm = ({ initial = {}, submitLabel, onSubmit }) => {
  const [form, setForm] = useState({
    title: initial.title || '',
    excerpt: initial.excerpt || '',
    coverImage: initial.coverImage || '',
    coverAlt: initial.coverAlt || '',
    status: initial.status || 'published',
    body: paragraphsFromBody(initial.body),
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const slugPreview = slugifyText(form.title);

  const set = (key) => (event) => {
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCover = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setBusy(true);
    try {
      const result = await uploadImage(file);
      setForm((prev) => ({ ...prev, coverImage: result.url }));
    } catch {
      window.alert('No se pudo subir la imagen.');
    } finally {
      setBusy(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.title.trim()) {
      setError('El título es obligatorio');
      return;
    }
    const paragraphs = form.body
      .split(/\r?\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
    setBusy(true);
    setError('');
    try {
      await onSubmit({
        title: form.title.trim(),
        excerpt: form.excerpt.trim(),
        coverImage: form.coverImage.trim(),
        coverAlt: form.coverAlt.trim(),
        status: form.status,
        paragraphs,
      });
    } catch (err) {
      setError(err?.response?.data?.message || 'No se pudo guardar la publicación');
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="admin-form__grid">
        <label className="admin-field admin-field--wide">
          <span>Título</span>
          <input value={form.title} onChange={set('title')} required />
        </label>
        <div className="admin-field admin-field--wide">
          <span>URL del artículo</span>
          <div className="admin-slug">
            <code>/articulo/{slugPreview || 'sin-titulo'}</code>
            <span className="admin-slug__hint">
              Se genera automáticamente a partir del título. Si ya existe, se añade un sufijo.
            </span>
          </div>
        </div>
        <label className="admin-field admin-field--wide">
          <span>Cuerpo del artículo (separar párrafos con una línea en blanco)</span>
          <textarea value={form.body} onChange={set('body')} rows={12} />
        </label>
        <label className="admin-field">
          <span>Estado</span>
          <select value={form.status} onChange={set('status')}>
            <option value="published">Publicado</option>
            <option value="draft">Borrador</option>
          </select>
        </label>
        <label className="admin-field">
          <span>Extracto (resumen de la tarjeta)</span>
          <textarea value={form.excerpt} onChange={set('excerpt')} rows={3} />
        </label>
        <label className="admin-field admin-field--wide">
          <span>Texto alternativo de la portada</span>
          <input value={form.coverAlt} onChange={set('coverAlt')} />
        </label>
        <div className="admin-field admin-field--wide">
          <span>Imagen de portada</span>
          <div className="admin-cover">
            {form.coverImage ? (
              <img src={form.coverImage} alt={form.coverAlt || 'Portada'} />
            ) : (
              <span className="admin-cover__placeholder">Sin portada</span>
            )}
            <div className="admin-cover__tools">
              <label className="admin-btn admin-btn--ghost">
                {busy ? 'Subiendo…' : 'Subir imagen'}
                <input type="file" accept="image/*" hidden onChange={handleCover} />
              </label>
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                onClick={() => {
                  const url = window.prompt('URL de la portada', form.coverImage || '');
                  if (url !== null) setForm((prev) => ({ ...prev, coverImage: url }));
                }}
              >
                URL
              </button>
              {form.coverImage ? (
                <button
                  type="button"
                  className="admin-btn admin-btn--ghost"
                  onClick={() => setForm((prev) => ({ ...prev, coverImage: '' }))}
                >
                  Quitar
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {error ? <p className="admin-error">{error}</p> : null}
      <button type="submit" className="admin-btn admin-btn--primary" disabled={busy}>
        {submitLabel}
      </button>
    </form>
  );
};

const PostsList = ({ onEdit, onRefresh }) => {
  const [posts, setPosts] = useState(null);

  const load = useCallback(() => {
    fetchPosts({ view: 'all' })
      .then(({ posts: list }) => setPosts(list))
      .catch(() => setPosts([]));
  }, []);

  useEffect(() => {
    load();
  }, [load, onRefresh]);

  const handleDelete = async (post) => {
    if (!window.confirm(`¿Eliminar la publicación "${post.title}"? Esta acción no se puede deshacer.`)) {
      return;
    }
    try {
      await deletePost(post.slug);
      load();
    } catch {
      window.alert('No se pudo eliminar la publicación.');
    }
  };

  if (!posts) {
    return <p className="admin-muted">Cargando publicaciones…</p>;
  }

  if (posts.length === 0) {
    return <p className="admin-muted">Todavía no hay publicaciones. Crea la primera con el botón &quot;Nueva publicación&quot;.</p>;
  }

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Estado</th>
          <th>Publicada</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.slug}>
            <td>
              <strong>{post.title}</strong>
              <small>
                <a href={`/articulo/${encodeURIComponent(post.slug)}`} target="_blank" rel="noreferrer">
                  /articulo/{post.slug}
                </a>
              </small>
            </td>
            <td>{post.status === 'published' ? 'Publicado' : 'Borrador'}</td>
            <td>{post.publishedAt}</td>
            <td className="admin-table__actions">
              <button type="button" className="admin-btn admin-btn--ghost" onClick={() => onEdit(post)}>
                Editar
              </button>
              <button type="button" className="admin-btn admin-btn--danger" onClick={() => handleDelete(post)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const AdminPublicaciones = () => {
  const [mode, setMode] = useState('list');
  const [editing, setEditing] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const startCreate = async (form) => {
    const result = await createPost(form);
    setEditing(result.post);
    setMode('edit');
  };

  const startEdit = (post) => {
    fetchPost(post.slug)
      .then(({ post: full }) => {
        setEditing(full);
        setMode('edit');
      })
      .catch(() => window.alert('No se pudo cargar la publicación.'));
  };

  const saveMeta = async (form) => {
    const result = await updatePost(editing.slug, form);
    const full = await fetchPost(result.post.slug);
    setEditing(full.post);
    setRefresh((n) => n + 1);
  };

  if (mode === 'list') {
    return (
      <div className="admin-page">
        <div className="admin-page__head">
          <div>
            <h1>Publicaciones del blog</h1>
            <p>
              Crea y edita artículos publicados en el blog con su tarjeta, portada y cuerpo del texto.
            </p>
          </div>
          <button type="button" className="admin-btn admin-btn--primary" onClick={() => setMode('create')}>
            Nueva publicación
          </button>
        </div>
        <PostsList onEdit={startEdit} onRefresh={refresh} />
      </div>
    );
  }

  if (mode === 'create') {
    return (
      <div className="admin-page">
        <div className="admin-page__head">
          <div>
            <h1>Nueva publicación</h1>
          </div>
          <button type="button" className="admin-btn admin-btn--ghost" onClick={() => setMode('list')}>
            Volver
          </button>
        </div>
        <PostForm submitLabel="Crear publicación" onSubmit={startCreate} />
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page__head">
        <div>
          <h1>Editar publicación</h1>
          <p>
            Escribe el cuerpo del artículo en el campo &quot;Cuerpo del artículo&quot; y pulsa Guardar.
            Para formatos especiales (negritas, listas, enlaces) haz clic en el texto de la
            vista previa y usa el Guardar del editor.
          </p>
        </div>
        <button type="button" className="admin-btn admin-btn--ghost" onClick={() => setMode('list')}>
          Volver a la lista
        </button>
      </div>

      <PostForm key={editing.slug} initial={editing} submitLabel="Guardar datos de la tarjeta" onSubmit={saveMeta} />

      <hr className="admin-divider" />
      <h2 className="admin-h2">Cuerpo del artículo</h2>
      <PageEditor
        key={`${editing.slug}-${refresh}`}
        page={`articulo-${editing.slug}`}
        defaults={dynamicArticleDefaults(editing)}
        scope={['article']}
        title={editing.title}
        preview={ArticleView}
      />

      <div className="admin-page__foot">
        <button
          type="button"
          className="admin-btn admin-btn--danger"
          onClick={async () => {
            if (!window.confirm(`¿Eliminar la publicación "${editing.title}"?`)) return;
            try {
              await deletePost(editing.slug);
              setMode('list');
            } catch {
              window.alert('No se pudo eliminar la publicación.');
            }
          }}
        >
          Eliminar publicación
        </button>
      </div>
    </div>
  );
};

export default AdminPublicaciones;