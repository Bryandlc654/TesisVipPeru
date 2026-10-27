import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar/Navbar';
import Main from './Main';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { useCMS } from '../../cms/ContentContext';
import { Text } from '../../cms/Editable';

const Inicio = () => {
  const { get, editMode } = useCMS();
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

    if (nombres && carrera && celular && servicio) {
      const extraMsg = mensaje ? ` Mensaje adicional: ${mensaje}.` : '';
      const whatsappMessage = `Hola, soy ${nombres}, estudiante de ${carrera}. Me gustaría solicitar el servicio de ${servicio}. Mi número de celular es ${celular}.${extraMsg}`;
      const phone = get('hero.form.whatsapp') || '51917622183';
      const cleanPhone = String(phone).replace(/\D/g, '');
      const whatsappURL = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappURL, '_blank');
      setFormData({
        nombres: '',
        carrera: '',
        celular: '',
        servicio: '',
        mensaje: '',
      });
    }
  };

  const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({
    threshold: 0,
  });

  const careers = get('hero.form.careers') || [];
  const services = get('hero.form.services') || [];
  const form = get('hero.form') || {};

  return (
    <>
      <header className="hero hero--home">
        <div className="hero__video-container" aria-hidden="true">
          <video
            className="hero__video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/web.mp4" type="video/mp4" />
          </video>
          <div className="hero__video-overlay" />
        </div>
        <Navbar />
        <Button />
        <section className="hero__main container">
          <div className="hero__content">
            <div className={`hero__texts hidden ${Secc1MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc1MeRef}>
              {(editMode || String(get('hero.info') ?? '').trim() !== '') && (
                <Text path="hero.info" as="p" className="hero__info" />
              )}
              <h1 className="hero__title hero__title--home title">
                <Text path="hero.title1" as="span" className="one" multiline />
                <Text path="hero.title2" as="span" className="two" multiline />
              </h1>
              <Text path="hero.subtitle" as="p" className="hero__subtitle" />
            </div>
            <div className={`form form--transparent hidden ${Secc1MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc1MeRef}>
              <Text path="hero.formTitle" as="p" className="form__title" />
              <Text path="hero.formParagraph" as="p" className="form__paragraph paragraph" />
              <form className="form__form" onSubmit={handleFormSubmit}>
                <input
                  className="form__input"
                  type="text"
                  placeholder={form.namePlaceholder}
                  value={formData.nombres}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      nombres: e.target.value,
                    }))
                  }
                />
                <select
                  className="form__input form__input--select"
                  value={formData.carrera}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      carrera: e.target.value,
                    }))
                  }
                >
                  <option value="" disabled>
                    {form.careerPlaceholder}
                  </option>
                  {careers.map((career) => (
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
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      celular: e.target.value,
                    }))
                  }
                />
                <select
                  className="form__input form__input--select"
                  value={formData.servicio}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      servicio: e.target.value,
                    }))
                  }
                >
                  <option value="" disabled>
                    {form.servicePlaceholder}
                  </option>
                  {services.map((service) => (
                    <option value={service} key={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <textarea
                  className="form__input form__input--textarea"
                  placeholder={form.messagePlaceholder}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      mensaje: e.target.value,
                    }))
                  }
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
      </header>
      <Main />
      <Footer />
    </>
  );
};

export default Inicio;
