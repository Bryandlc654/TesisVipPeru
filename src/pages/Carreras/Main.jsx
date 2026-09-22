import { useInView } from 'react-intersection-observer';
import { useCMS } from '../../cms/ContentContext';
import { IconField, ImageField, LinkField, Text } from '../../cms/Editable';

const Main = () => {
  const { get } = useCMS();
  const careers = get('careers') || { items: [] };
  const how = get('how') || { items: [] };

  const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({ threshold: 0 });
  const { ref: Secc3MeRef, inView: Secc3MeInView } = useInView({ threshold: 0 });
  const { ref: Secc5MeRef, inView: Secc5MeInView } = useInView({ threshold: 0 });

  return (
    <main className="main">
      <section className="careers">
        <div className="careers__content container">
          <div className={`careers__texts center hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
            <Text path="careers.guide" as="span" className="careers__guide guide" />
            <h2 className="careers__title title">
              <Text path="careers.title1" as="span" className="one" />
              <Text path="careers.title2" as="span" className="three" />
            </h2>
            <Text path="careers.paragraph" as="p" className="careers__paragraph paragraph" multiline />
          </div>
          <div className="careers__group">
            {careers.items.map((_, index) => (
              <article className="service service--careers" key={index}>
                <figure className="service__figure">
                  <ImageField path={`careers.items.${index}.image`} className="service__img" alt="" />
                </figure>
                <div className="service__texts">
                  <p className="service__title">
                    <strong className="career-texts">
                      <Text path={`careers.items.${index}.line1`} as="span" />
                      <Text path={`careers.items.${index}.line2`} as="span" />
                    </strong>
                  </p>
                  <LinkField path={`careers.items.${index}.cta`} className="service__cta" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how">
        <div className="how__content container">
          <div className={`how__texts center hidden ${Secc3MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc3MeRef}>
            <Text path="how.guide" as="span" className="how__guide guide" />
            <h2 className="how__title title">
              <Text path="how.title1" as="span" className="one" />
              <Text path="how.title2" as="span" className="three" />
            </h2>
            <Text path="how.paragraph" as="p" className="how__paragraph paragraph" multiline />
          </div>
          <div className="how__group">
            {how.items.map((_, index) => (
              <div className="how__item" key={index}>
                <Text path={`how.items.${index}.number`} as="p" className="how__item-number" />
                <Text path={`how.items.${index}.text`} as="p" className="how__item-paragraph paragraph" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="promo promo--careers ">
        <div className={`promo__content container hidden ${Secc5MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc5MeRef}>
          <div className="promo__group-call">
            <div className="promo__icon">
              <IconField path="promo.icon" size={16} />
            </div>
            <p className="promo__number">
              <Text path="promo.title" as="span" className="text" />
              <Text path="promo.number" as="span" className="number" />
            </p>
          </div>
          <Text path="promo.paragraph" as="p" className="promo__paragraph paragraph" />
          <LinkField path="promo.cta" className="btn-dark btn-dark--promo" />
        </div>
      </section>
    </main>
  );
};

export default Main;
