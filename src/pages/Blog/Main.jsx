import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useCMS } from '../../cms/ContentContext';
import { ImageField, LinkField, Text } from '../../cms/Editable';
import { fetchPosts } from '../../cms/api';

const Main = () => {
  const { get } = useCMS();
  const blog = get('blog') || { items: [] };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let active = true;
    fetchPosts()
      .then(({ posts: list }) => {
        if (active) setPosts(list);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({ threshold: 0 });
  const { ref: Secc2MeRef, inView: Secc2MeInView } = useInView({ threshold: 0 });

  return (
    <main className="main">
      <section className="blog">
        <div className="blog__content container">
          <div className={`blog__texts center hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
            <Text path="blog.guide" as="span" className="blog__guide guide" />
            <h2 className="blog__title title">
              <Text path="blog.title1" as="span" className="one" />
              <Text path="blog.title2" as="span" className="three" />
            </h2>
            <Text path="blog.paragraph" as="p" className="blog__paragraph paragraph" multiline />
          </div>

          <div className="blog__articles">
            {blog.items.map((item, index) => (
              <article className={`article hidden ${Secc2MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc2MeRef} key={index}>
                <figure className="article__figure">
                  <ImageField path={`blog.items.${index}.image`} className="article__figure" alt={item.imageAlt} />
                </figure>
                <div className="article__texts">
                  <strong className="article__title">
                    <Text path={`blog.items.${index}.title`} as="span" />
                  </strong>
                  <Text path={`blog.items.${index}.excerpt`} as="p" className="article__paragraph paragraph" multiline />
                  <LinkField path={`blog.items.${index}.cta`} className="article__cta" />
                </div>
              </article>
            ))}

            {posts.map((post) => (
              <article className="article" key={post.slug}>
                <figure className="article__figure">
                  <img className="article__figure" src={post.coverImage} alt={post.coverAlt || post.title} />
                </figure>
                <div className="article__texts">
                  <strong className="article__title">{post.title}</strong>
                  <p className="article__paragraph paragraph">{post.excerpt}</p>
                  <Link className="article__cta" to={`/articulo/${encodeURIComponent(post.slug)}`}>
                    Ver más
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;