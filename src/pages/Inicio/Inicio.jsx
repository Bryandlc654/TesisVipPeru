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

    if (nombres && carrera && celular && servicio && mensaje) {
      const whatsappMessage = `Hola, soy ${nombres}, estudiante de ${carrera}. Me gustaría solicitar el servicio de ${servicio}. Mi número de celular es ${celular}. Mensaje adicional: ${mensaje}.`;
      const phone = get('hero.form.whatsapp') || '';
      const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

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
        <Navbar />
        <Button />
        <section className="hero__main container">
          <div className="hero__content">
            <div className={`hero__texts hidden ${Secc1MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc1MeRef}>
              <Text path="hero.info" as="p" className="hero__info" />
              <h1 className="hero__title hero__title--home title">
                <Text path="hero.title1" as="span" className="one" />
                <Text path="hero.title2" as="span" className="two" />
              </h1>
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
