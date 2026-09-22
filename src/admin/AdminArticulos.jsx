import { useState } from 'react';
import PageEditor from './PageEditor';
import ArticleView from '../cms/ArticleView';
import { articleDefaults, articleOptions } from '../cms/defaultPosts';
import './admin.css';

const AdminArticulos = () => {
  const [slug, setSlug] = useState(articleOptions[0].slug);
  const current = articleOptions.find((option) => option.slug === slug) || articleOptions[0];

  return (
    <>
      <div className="admin-picker">
        <label htmlFor="article-select">Artículo a editar</label>
        <select id="article-select" value={slug} onChange={(event) => setSlug(event.target.value)}>
          {articleOptions.map((option) => (
            <option value={option.slug} key={option.slug}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <PageEditor
        key={slug}
        page={slug}
        defaults={articleDefaults(slug)}
        scope={['article']}
        title={current.label}
        preview={ArticleView}
      />
    </>
  );
};

export default AdminArticulos;
