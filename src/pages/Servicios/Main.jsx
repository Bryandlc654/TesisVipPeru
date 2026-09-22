import { useInView } from 'react-intersection-observer';
import { useCMS } from '../../cms/ContentContext';
import { IconField, ImageField, LinkField, Text } from '../../cms/Editable';

const Main = () => {
  const { get } = useCMS();
  const services = get('services') || { items: [] };

  const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({ threshold: 0 });
  const { ref: Secc2MeRef, inView: Secc2MeInView } = useInView({ threshold: 0 });
  const { ref: Secc3MeRef, inView: Secc3MeInView } = useInView({ threshold: 0 });
  const { ref: Secc4MeRef, inView: Secc4MeInView } = useInView({ threshold: 0 });
  const { ref: Secc5MeRef, inView: Secc5MeInView } = useInView({ threshold: 0 });
  const { ref: Secc6MeRef, inView: Secc6MeInView } = useInView({ threshold: 0 });
  const { ref: Secc7MeRef, inView: Secc7MeInView } = useInView({ threshold: 0 });

  const views = [
    { ref: Secc2MeRef, inView: Secc2MeInView },
    { ref: Secc3MeRef, inView: Secc3MeInView },
    { ref: Secc4MeRef, inView: Secc4MeInView },
    { ref: Secc5MeRef, inView: Secc5MeInView },
    { ref: Secc6MeRef, inView: Secc6MeInView },
    { ref: Secc7MeRef, inView: Secc7MeInView },
  ];

  return (
    <main className="main">
      <section className="services service--page">
        <div className="services__content container">
          <div className={`services__texts center hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
            <Text path="intro.guide" as="span" className="services__guide guide" />
            <h2 className="services__title title">
              <Text path="intro.title1" as="span" className="one" />
              <Text path="intro.title2" as="span" className="three" />
            </h2>
            <Text path="intro.paragraph" as="p" className="services__paragraph paragraph" multiline />
          </div>
        </div>
      </section>
      <section className="services-group">
        <div className="services-group__content container">
          {services.items.map((item, index) => (
            <div
              className={`services-group__service hidden ${views[index]?.inView ? 'fade-in-fwd' : 'fade-in'}`}
              ref={views[index]?.ref}
              key={index}
            >
              <div className="service-group__texts">
                <Text path={`services.items.${index}.guide`} as="span" className="guide" />
                <h2 className="service-group__title title">
                  <Text path={`services.items.${index}.title1`} as="span" className="one" />
                  <Text path={`services.items.${index}.title2`} as="span" className="three" />
                </h2>
                <Text path={`services.items.${index}.paragraph`} as="p" className="service-group__paragraph paragraph" multiline />
                <div className="service-group__group">
                  <div className="service-group__group-number">
                    <div className="service-group__icon">
                      <IconField path={`services.items.${index}.icon`} size={16} />
                    </div>
                    <p className="service-group__number">
                      <Text path={`services.items.${index}.phone`} as="span" className="number" />
                      <Text path={`services.items.${index}.phoneLabel`} as="span" className="text" />
                    </p>
                  </div>
                  <LinkField
                    path={`services.items.${index}.cta`}
                    className="btn-primary btn-primary--service-group"
                    title="Contactar por whatsapp"
                  />
                </div>
              </div>
              <figure className="service-group__figure">
                <ImageField path={`services.items.${index}.image`} className="img" alt="" />
              </figure>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
