import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ArticleView from '../../cms/ArticleView';
import { ContentProvider } from '../../cms/ContentContext';
import { dynamicArticleDefaults, articleScope } from '../../cms/dynamicPosts';
import { fetchPost } from '../../cms/api';

const DynamicArticle = () => {
  const { slug } = useParams();
  const [state, setState] = useState({ loading: true, post: null, missing: false });

  useEffect(() => {
    let active = true;
    setState({ loading: true, post: null, missing: false });

    fetchPost(slug)
      .then(({ post }) => {
        if (!active) return;
        if (post.status !== 'published') {
          setState({ loading: false, post: null, missing: true });
          return;
        }
        setState({ loading: false, post, missing: false });
      })
      .catch(() => {
        if (!active) return;
        setState({ loading: false, post: null, missing: true });
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (state.loading) {
    return <div className="container" style={{ padding: '60px 0' }}>Cargando artículo…</div>;
  }

  if (state.missing || !state.post) {
    return <Navigate to="/Blog" replace />;
  }

  return (
    <ContentProvider
      page={`articulo-${state.post.slug}`}
      defaults={dynamicArticleDefaults(state.post)}
      scope={articleScope}
    >
      <ArticleView />
    </ContentProvider>
  );
};

export default DynamicArticle;