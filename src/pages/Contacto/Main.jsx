import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCMS } from '../../cms/ContentContext';
import { IconField, ImageField, LinkField, Text } from '../../cms/Editable';

const Main = () => {
  const { get, editable, set } = useCMS();
  const info = get('info') || { items: [] };
  const socials = get('socials') || [];
  const form = get('form') || {};
  const mapEmbed = get('map.embed');

  const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({ threshold: 0 });
  const { ref: Secc2MeRef, inView: Secc2MeInView } = useInView({ threshold: 0 });
  const { ref: Secc3MeRef, inView: Secc3MeInView } = useInView({ threshold: 0 });
  const { ref: Secc4MeRef, inView: Secc4MeInView } = useInView({ threshold: 0 });

  const [formData, setFormData] = React.useState({
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
      const phone = get('form.whatsapp') || '';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      setFormData({ nombres: '', carrera: '', celular: '', servicio: '', mensaje: '' });
    }
  };

  return (
    <main className="main">
      <section className="info-contact">
        <div className={`info-contact__content container hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
          <div className="info-contact__texts center">
            <Text path="info.guide" as="span" className="info-contact__guide guide" />
            <h2 className="info-contact__title title">
              <Text path="info.title1" as="span" className="one" />
              <Text path="info.title2" as="span" className="three" />
            </h2>
            <Text path="info.paragraph" as="p" className="info-contact__paragraph paragraph" multiline />
          </div>
          <ul className="info-contact__group">
            {info.items.map((_, index) => (
              <li className="info-contact__item" key={index}>
                <IconField path={`info.items.${index}.icon`} size={16} />
                <div className="info-contact__contact">
                  <Text path={`info.items.${index}.name`} as="p" className="info-contact__name paragraph" />
                  <Text path={`info.items.${index}.value`} as="p" className="info-contact__info paragraph" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <section className="contact__icons">
          <ul className="data__menu">
            {socials.map((social, index) => (
              <li className="data__item" key={`${social.label}-${index}`}>
                <LinkField path={`socials.${index}`} className="data__link" title={`Ir a ${social.label}`}>
                  <IconField path={`socials.${index}.icon`} size={16} />
                </LinkField>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className="form-contact">
        <div className="form-contact__content container">
          <article className={`form-contact__info hidden ${Secc2MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc2MeRef}>
            <div className="form-contact__icon">
              <IconField path="form.icon" size={16} />
            </div>
            <div className="form-contact__group">
              <Text path="form.name" as="p" className="form-contact__name paragraph" />
              <Text path="form.text" as="p" className="form-contact__text paragraph" multiline />
              <LinkField path="form.cta" className="btn-white btn-white--contact" />
            </div>
          </article>
          <div className="form-contact__img">
            <ImageField
              path="form.image"
              className="img"
              alt={form.imageAlt}
              aria-hidden="true"
              role="presentation"
            />
          </div>
          <div className={`form hidden ${Secc3MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc3MeRef}>
            <div className="form-contact__texts">
              <Text path="form.guide" as="span" className="form-contact__guide guide" />
              <h2 className="form-contact__title title">
                <Text path="form.title" as="span" className="one" />
              </h2>
            </div>
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
              {editable('form.submitLabel') ? (
                <button className="form__input form__input--submit" type="button">
                  <Text path="form.submitLabel" as="span" />
                </button>
              ) : (
                <input className="form__input form__input--submit" type="submit" value={form.submitLabel} />
              )}
            </form>
          </div>
        </div>
      </section>
      <section className="map-contact">
        <div className={`map-contact__content container hidden ${Secc4MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc4MeRef}>
          <iframe
            src={mapEmbed}
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          />
          {editable('map.embed') ? (
            <button
              type="button"
              className="cms-chip cms-chip--corner"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                const next = window.prompt('URL del mapa (Google Maps embed)', mapEmbed || '');
                if (next !== null) set('map.embed', next);
              }}
            >
              Cambiar mapa
            </button>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Main;
