import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import './ProgressBar.css';
import { useCMS } from '../../cms/ContentContext';
import {
  Counter,
  IconField,
  ImageField,
  LinkField,
  ResultCircle,
  Text,
  VideoField,
} from '../../cms/Editable';

const Main = () => {
  const { get, editMode } = useCMS();
  const videoRef = useRef(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const [formData, setFormData] = useState({
    nombres: '',
    carrera: '',
    celular: '',
    servicio: '',
    mensaje: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { nombres, carrera, celular, servicio, mensaje } = formData;

    if (nombres && carrera && celular && servicio && mensaje) {
      const whatsappMessage = `Hola, soy ${nombres}, estudiante de ${carrera}. Me gustaría solicitar el servicio de ${servicio}. Mi número de celular es ${celular}. Mensaje adicional: ${mensaje}.`;
      const phone = get('hero.form.whatsapp') || '';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      setFormData({ nombres: '', carrera: '', celular: '', servicio: '', mensaje: '' });
    }
  };

  const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({ threshold: 0 });
  const { ref: Secc2MeRef, inView: Secc2MeInView } = useInView({ threshold: 0 });
  const { ref: Secc3MeRef, inView: Secc3MeInView } = useInView({ threshold: 0 });
  const { ref: Secc4MeRef, inView: Secc4MeInView } = useInView({ threshold: 0 });
  const { ref: Secc5MeRef, inView: Secc5MeInView } = useInView({ threshold: 0 });
  const { ref: Secc6MeRef, inView: Secc6MeInView } = useInView({ threshold: 0 });
  const { ref: Secc7MeRef, inView: Secc7MeInView } = useInView({ threshold: 0 });
  const { ref: Secc8MeRef, inView: Secc8MeInView } = useInView({ threshold: 0 });
  const { ref: Secc10MeRef, inView: Secc10MeInView } = useInView({ threshold: 0 });
  const { ref: Secc11MeRef, inView: Secc11MeInView } = useInView({ threshold: 0 });
  const { ref: Secc12MeRef, inView: Secc12MeInView } = useInView({ threshold: 0 });
  const { ref: Secc13MeRef, inView: Secc13MeInView } = useInView({ threshold: 0 });
  const { ref: Secc14MeRef, inView: Secc14MeInView } = useInView({ threshold: 0 });
  const { ref: Secc15MeRef, inView: Secc15MeInView } = useInView({ threshold: 0 });
  const { ref: Secc16MeRef, inView: Secc16MeInView } = useInView({ threshold: 0 });

  const benefits = get('benefits') || { items: [] };
  const about = get('about') || { images: [], list: [] };
  const results = get('results') || { items: [] };
  const processes = get('processes') || { items: [] };
  const services = get('services') || { items: [] };
  const opinions = get('opinions') || { items: [] };
  const faqs = get('faqs') || { items: [] };
  const contact = get('contact') || { ways: [] };
  const info = get('info') || { items: [] };
  const form = get('hero.form') || {};
  const promoPhone = String(get('promo.number') || '');

  return (
    <main>
      <section className="benefits">
        <div className="benefits__content container">
          <div className={`benefits__texts hidden ${Secc1MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc1MeRef}>
            <Text path="benefits.guide" as="span" className="guide" />
            <h2 className="benefits__title title">
              <Text path="benefits.title1" as="span" className="one" />
              <Text path="benefits.title2" as="span" className="two" />
            </h2>
            <Text path="benefits.paragraph" as="p" className="benefits__paragraph paragraph" multiline />
            <div className="benefits__group">
              <LinkField path="benefits.cta" className="btn-primary btn-primary--benefits" title="Contactar por Whatsapp" />
            </div>
          </div>
          <div className={`benefits__list hidden ${Secc2MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc2MeRef}>
            {benefits.items.map((item, index) => (
              <article className="benefit" key={index} tabIndex={0}>
                <div className="benefit__content">
                  <p className="benefit__number">
                    <ImageField path={`benefits.items.${index}.image`} alt="" />
                  </p>
                  <p className="benefit__paragraph">
                    <Text path={`benefits.items.${index}.line1`} as="span" className="one" />
                    <Text path={`benefits.items.${index}.line2`} as="span" className="two" />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="promo">
        <div className={`promo__content promo__content--split container hidden ${Secc3MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc3MeRef}>
          <div className="promo__texts">
            <h2 className="promo__title">
              <Text path="promo.title" as="span" />
            </h2>
            <Text path="promo.paragraph" as="p" className="promo__paragraph paragraph" />
          </div>
          <div className="promo__actions">
            <LinkField path="promo.cta" className="btn-dark btn-dark--promo" />
            {editMode ? (
              <Text path="promo.number" as="span" className="promo__phone" />
            ) : (
              <a className="promo__phone" href={`tel:${promoPhone.replace(/\D/g, '')}`}>
                <Text path="promo.number" as="span" />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about__content container">
          <div className={`about__images hidden ${Secc4MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc4MeRef}>
            {about.images.map((_, index) => (
              <figure className={`about__figure about__figure--${['one', 'two', 'three'][index] || index}`} key={index}>
                <ImageField
                  path={`about.images.${index}`}
                  className="about__img"
                  loading="lazy"
                  alt="Quienes somos en Tesis Vip"
                />
              </figure>
            ))}
          </div>
          <div className={`about__texts hidden ${Secc5MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc5MeRef}>
            <Text path="about.guide" as="span" className="guide" />
            <h2 className="about__title title">
              <Text path="about.title1" as="span" className="one" />
              <Text path="about.title2" as="span" className="three" />
            </h2>
            <Text path="about.paragraph" as="p" className="about__paragraph paragraph" multiline />
            <div className="about__group">
              <ul className="about__list">
                {about.list.map((_, index) => (
                  <Text key={index} path={`about.list.${index}`} as="li" className="about__item" />
                ))}
              </ul>
            </div>
            <LinkField path="about.cta" className="btn-primary btn-primary--about" />
          </div>
        </div>
      </section>

      <section className="results">
        <div className="results__background background">
          <ImageField
            path="results.background"
            className="img"
            alt="Resultados"
            loading="lazy"
            aria-hidden="true"
            role="presentation"
          />
        </div>
        <div className="results__content container">
          <div className={`results__group-one hidden ${Secc6MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc6MeRef}>
            <Text path="results.guide" as="span" className="guide results__guide" />
            <h2 className="results__title title">
              <Text path="results.title1" as="span" className="one" />
              <Text path="results.title2" as="span" className="two" />
            </h2>
            <Text path="results.paragraph" as="p" className="results__paragraph paragraph" />
          </div>
          <div className={`results__group-two hidden ${Secc7MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc7MeRef}>
            {results.items.map((_, index) => (
              <ResultCircle
                key={index}
                valuePath={`results.items.${index}.value`}
                labelPath={`results.items.${index}.title`}
                textPath={`results.items.${index}.paragraph`}
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={Secc8MeRef} className="processes">
        <div className={`processes__texts center container hidden ${Secc8MeInView ? 'fade-in-fwd' : 'fade-in'}`}>
          <Text path="processes.guide" as="span" className="processes__guide guide" />
          <h2 className="processes__title title">
            <Text path="processes.title1" as="span" className="one" />
            <Text path="processes.title2" as="span" className="three" />
          </h2>
          <Text path="processes.paragraph" as="p" className="processes__paragraph paragraph" multiline />
        </div>
        <div className="processes__group">
          <div className="processes__background">
            <ImageField
              path="processes.background"
              className="img"
              alt=""
              loading="lazy"
              aria-hidden="true"
              role="presentation"
            />
          </div>
          <div className="processes__group-content container">
            {processes.items.map((_, index) => (
              <article className={`process hidden ${Secc8MeInView ? 'scale-in-bl' : 'fade-in'}`} key={index}>
                <Text path={`processes.items.${index}.number`} as="p" className="process__number" />
                <p className="process__title">
                  <strong>
                    <Text path={`processes.items.${index}.title`} as="span" />
                  </strong>
                </p>
                <Text path={`processes.items.${index}.paragraph`} as="p" className="process__paragraph paragraph" multiline />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="video">
        <div className={`video__content container hidden ${Secc10MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc10MeRef}>
          <div className="video__container-img">
            <VideoField
              path="video.src"
              className="video__img"
              innerRef={videoRef}
              title={get('video.title')}
              id="custom-video"
            />
          </div>
          {isButtonVisible ? (
            <div className="video__group">
              <button
                className="video__btn"
                id="custom-play-btn"
                onClick={() => {
                  videoRef.current?.play();
                  setIsButtonVisible(false);
                }}
              >
                <IconField path="video.icon" size={16} />
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <section className="services">
        <div className="services__content container">
          <div className={`services__texts center hidden ${Secc11MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc11MeRef}>
            <Text path="services.guide" as="span" className="services__guide guide" />
            <h2 className="services__title title">
              <Text path="services.title1" as="span" className="one" />
              <Text path="services.title2" as="span" className="three" />
            </h2>
            <Text path="services.paragraph" as="p" className="services__paragraph paragraph" multiline />
          </div>

          <Swiper
            spaceBetween={10}
            loop={!editMode}
            autoplay={editMode ? false : { delay: 2500 }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper fade-in-fwd"
          >
            {services.items.map((item, index) => (
              <SwiperSlide key={index}>
                <article className="service">
                  <figure className="service__figure">
                    <ImageField path={`services.items.${index}.image`} className="service__img" alt={item.alt} />
                  </figure>
                  <div className="service__texts">
                    <p className="service__title">
                      <strong>
                        <Text path={`services.items.${index}.title`} as="span" />
                      </strong>
                    </p>
                    <Text path={`services.items.${index}.paragraph`} as="p" className="service__paragraph" />
                    <LinkField path={`services.items.${index}.cta`} className="service__cta" />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="opinions">
        <div className="opinions__content container">
          <div className={`opinions__texts center hidden ${Secc12MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc12MeRef}>
            <Text path="opinions.guide" as="span" className="opinions__guide guide" />
            <h2 className="opinions__title title">
              <Text path="opinions.title1" as="span" className="one" />
              <Text path="opinions.title2" as="span" className="three" />
            </h2>
            <Text path="opinions.paragraph" as="p" className="opinions__paragraph paragraph" multiline />
          </div>
          <div className="opinions__group">
            <Swiper
              className="opinions__slider mySwiper fade-in-fwd"
              spaceBetween={10}
              loop={!editMode}
              autoplay={editMode ? false : { delay: 2500 }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 4, spaceBetween: 50 },
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {opinions.items.map((item, index) => (
                <SwiperSlide key={index}>
                  <figure className="opinions__figure">
                    <ImageField path={`opinions.items.${index}.image`} className="opinions__img" alt={item.alt} />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="faqs">
        <div className="faqs__content container">
          <div className="faqs__group">
            <figure className="faqs__figure">
              <ImageField
                path="faqs.image"
                className="faqs__img"
                loading="lazy"
                alt={faqs.imageAlt}
              />
            </figure>
            <div className="faqs__group-texts">
              <p className="faqs__info paragraph">
                <IconField path="faqs.badgeIcon" size={16} />
                <strong>
                  <Text path="faqs.badgeTitle" as="span" />
                </strong>
              </p>
              <p className="faqs__info-text paragraph">
                <strong>
                  <Text path="faqs.badgeText" as="span" />
                </strong>
              </p>
              <LinkField path="faqs.badgeCta" className="btn-dark btn-dark--faqs" />
            </div>
          </div>
          <div className={`faqs__texts hidden ${Secc14MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc14MeRef}>
            <Text path="faqs.guide" as="span" className="faqs__guide guide" />
            <h2 className="faqs__title title">
              <Text path="faqs.title1" as="span" className="one" />
              <Text path="faqs.title2" as="span" className="three" />
            </h2>
            <Text path="faqs.paragraph" as="p" className="faqs__paragraph paragraph" />
            <div className="faqs__container">
              {faqs.items.map((_, index) => (
                <details className="faq" name="faq" key={index}>
                  <summary className="faq__title">
                    <Text path={`faqs.items.${index}.question`} as="span" />
                  </summary>
                  <Text path={`faqs.items.${index}.answer`} as="p" className="faq__paragraph paragraph" multiline />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact__background background">
          <ImageField
            path="contact.background"
            className="img"
            alt="Fondo"
            loading="lazy"
            aria-hidden="true"
            role="presentation"
          />
        </div>
        <div className="contact__content container">
          <div className="contact__img">
            <ImageField
              path="contact.studentImage"
              className="img"
              alt={contact.studentAlt}
              loading="lazy"
              aria-hidden="true"
              role="presentation"
            />
          </div>
          <div className={`contact__texts hidden ${Secc15MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc15MeRef}>
            <Text path="contact.guide" as="span" className="contact__guide guide" />
            <h2 className="contact__title title">
              <Text path="contact.title1" as="span" className="one" />
              <Text path="contact.title2" as="span" className="three" />
            </h2>
            <Text path="contact.paragraph" as="p" className="contact__paragraph paragraph" multiline />
            <ul className="contact__way">
              {contact.ways.map((way, index) => (
                <li className="contact__item" key={index}>
                  <span className="contact__icon">
                    <IconField path={`contact.ways.${index}.icon`} size={16} />
                  </span>
                  <div className="contact__text">
                    <Text path={`contact.ways.${index}.name`} as="p" className="contact__name paragraph" />
                    <Text path={`contact.ways.${index}.value`} as="p" className="contact__data paragraph" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`form hidden ${Secc16MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc16MeRef}>
            <Text path="contact.formTitle" as="p" className="form__title" />
            <Text path="contact.formParagraph" as="p" className="form__paragraph paragraph" />
            <form className="form__form" onSubmit={handleFormSubmit}>
              <input
                className="form__input"
                type="text"
                placeholder={form.namePlaceholder}
                value={formData.nombres}
                onChange={(e) => setFormData((prev) => ({ ...prev, nombres: e.target.value }))}
              />
              <select
                className="form__input form__input--select"
                aria-label="Carrera"
                value={formData.carrera}
                onChange={(e) => setFormData((prev) => ({ ...prev, carrera: e.target.value }))}
              >
                <option value="" disabled>
                  {form.careerPlaceholder}
                </option>
                {(form.careers || []).map((career) => (
                  <option value={career} key={career}>
                    {career}
                  </option>
                ))}
              </select>
              <input
                className="form__input"
                type="tel"
                placeholder={form.phonePlaceholder}
                value={formData.celular}
                onChange={(e) => setFormData((prev) => ({ ...prev, celular: e.target.value }))}
              />
              <select
                className="form__input form__input--select"
                aria-label="Servicio"
                value={formData.servicio}
                onChange={(e) => setFormData((prev) => ({ ...prev, servicio: e.target.value }))}
              >
                <option value="" disabled>
                  {form.servicePlaceholder}
                </option>
                {(form.services || []).map((service) => (
                  <option value={service} key={service}>
                    {service}
                  </option>
                ))}
              </select>
              <textarea
                className="form__input form__input--textarea"
                placeholder={form.messagePlaceholder}
                value={formData.mensaje}
                onChange={(e) => setFormData((prev) => ({ ...prev, mensaje: e.target.value }))}
              />
              {editMode ? (
                <button className="form__input form__input--submit" type="button">
                  <Text path="hero.form.submitLabel" as="span" />
                </button>
              ) : (
                <input className="form__input form__input--submit" type="submit" value={form.submitLabel} />
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="info">
        <div className={`info__content container hidden ${Secc13MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc13MeRef}>
          {info.items.map((_, index) => (
            <div className="info__texts" key={index}>
              <span className="info__icon">
                <IconField path={`info.items.${index}.icon`} size={16} />
              </span>
              <p className="info__text">
                <Text path={`info.items.${index}.prefix`} as="span" />
                <Counter path={`info.items.${index}.value`} />
                <Text path={`info.items.${index}.suffix`} as="span" />
              </p>
              <Text path={`info.items.${index}.label`} as="p" className="info__name" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
