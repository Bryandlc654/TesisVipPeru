import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import { useCMS } from './ContentContext';
import { IconField, ImageField, LinkField, Text } from './Editable';

const Block = ({ block, base }) => {
  if (block.type === 'title') {
    return (
      <h2 className="title">
        <Text path={`${base}.text`} as="span" className="three" />
      </h2>
    );
  }

  if (block.type === 'paragraph') {
    return (
      <p className="post__paragraph paragraph">
        {block.prefix ? (
          <>
            <strong>
              <Text path={`${base}.prefix`} as="span" />
            </strong>{' '}
          </>
        ) : null}
        {block.bold ? (
          <strong>
            <Text path={`${base}.text`} as="span" multiline />
          </strong>
        ) : (
          <Text path={`${base}.text`} as="span" multiline />
        )}
      </p>
    );
  }

  if (block.type === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag className="post__ul">
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>
            {item.bold ? (
              <>
                <strong>
                  <Text path={`${base}.items.${itemIndex}.bold`} as="span" />
                </strong>
                {item.text ? ' ' : null}
              </>
            ) : null}
            {item.text ? (
              item.italic ? (
                <i>
                  <Text path={`${base}.items.${itemIndex}.text`} as="span" multiline />
                </i>
              ) : (
                <Text path={`${base}.items.${itemIndex}.text`} as="span" multiline />
              )
            ) : null}
          </li>
        ))}
      </ListTag>
    );
  }

  return null;
};

const ArticleView = () => {
  const { get } = useCMS();
  const article = get('article') || { sections: [] };

  return (
    <>
      <header className="hero hero--blog">
        <Navbar />
        <Button />
        <section className="hero__main hero__main--center">
          <h2 className="hero__title title">
            <Text path="article.heroTitle" as="span" className="one" />
          </h2>
        </section>
      </header>
      <main className="main__post">
        <article className="post container">
          <header className="post__texts">
            <h1 className="post__title title">
              <Text path="article.title1" as="span" className="one" />
              <Text path="article.title2" as="span" className="three" />
            </h1>
            {(article.intro || []).map((_, index) => (
              <Text
                key={index}
                path={`article.intro.${index}`}
                as="p"
                className="post__paragraph paragraph"
                multiline
              />
            ))}
          </header>
          <figure className="post__figure">
            <ImageField path="article.image" className="img" alt={article.imageAlt} />
          </figure>
          {(article.sections || []).map((section, sectionIndex) => (
            <section className="post__section" key={sectionIndex}>
              {section.blocks.map((block, blockIndex) => (
                <Block
                  key={blockIndex}
                  block={block}
                  base={`article.sections.${sectionIndex}.blocks.${blockIndex}`}
                />
              ))}
            </section>
          ))}
        </article>
        <section className="promo promo--careers">
          <div className="promo__content container">
            <div className="promo__group-call">
              <div className="promo__icon">
                <IconField path="article.promo.icon" size={16} />
              </div>
              <p className="promo__number">
                <Text path="article.promo.title" as="span" className="text" />
                <Text path="article.promo.number" as="span" className="number" />
              </p>
            </div>
            <Text path="article.promo.paragraph" as="p" className="promo__paragraph paragraph" multiline />
            <LinkField path="article.promo.cta" className="btn-dark btn-dark--promo" title="Contactar" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticleView;
