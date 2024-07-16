import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Main from "./Main";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { useInView } from 'react-intersection-observer';

const Inicio = () => {
    const [formData, setFormData] = React.useState({
        nombres: "",
        carrera: "",
        celular: "",
        servicio: "",
        mensaje: ""
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { nombres, carrera, celular, servicio, mensaje } = formData;

        if (nombres && carrera && celular && servicio && mensaje) {
            const whatsappMessage = `Hola, soy ${nombres}, estudiante de ${carrera}. Me gustaría solicitar el servicio de ${servicio}. Mi número de celular es ${celular}. Mensaje adicional: ${mensaje}.`;
            const whatsappURL = `https://wa.me/+51930443379?text=${encodeURIComponent(whatsappMessage)}`; // Reemplaza 51XXXXXXXXX con el número de WhatsApp de destino

            window.open(whatsappURL, '_blank');
            setFormData({
                nombres: "",
                carrera: "",
                celular: "",
                servicio: "",
                mensaje: ""
            });
        } 
    };

    const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({
        threshold: 0,
    });

    return (
        <>
            <header className="hero hero--home">
                <Navbar />
                <Button />
                <section className="hero__main container">
                    <div className="hero__content">
                        <div className={`hero__texts hidden ${Secc1MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc1MeRef}>
                            <p className="hero__info">Aprobación Garantizada</p>
                            <h1 className="hero__title hero__title--home title">
                                <span className="one">Redacción y Asesoría de Tesis</span>
                                <span className="two">para Pregado y Postgrado</span>
                            </h1>
                        </div>
                        <div className={`form form--transparent hidden ${Secc1MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc1MeRef}>
                            <p className="form__title">Agenda una asesoría</p>
                            <p className="form__paragraph paragraph">
                                Completa el formulario de contacto para comunicarte con nosotros
                            </p>
                            <form className="form__form" onSubmit={handleFormSubmit}>
                                <input
                                    className="form__input"
                                    type="text"
                                    placeholder="Nombres"
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
                                        Seleccione una carrera
                                    </option>
                                    <option value="Ciencias Sociales">Ciencias Sociales</option>
                                    <option value="Ciencias de la Salud">Ciencias de la Salud</option>
                                    <option value="Ciencias Empresariales">Ciencias Empresariales</option>
                                    <option value="Ingenierías y Arquitectura">
                                        Ingenierías y Arquitectura
                                    </option>
                                    <option value="Ciencias Biológicas y Agrónomas">
                                        Ciencias Biológicas y Agrónomas
                                    </option>
                                    <option value="Carreras Técnicas">Carreras Técnicas</option>
                                    <option value="otros">Otros</option>
                                </select>
                                <input
                                    className="form__input"
                                    type="tel"
                                    placeholder="Celular"
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
                                        Seleccione un servicio
                                    </option>
                                    <option value="Redacción de Tesis de Pregrado">
                                        Redacción de Tesis de Pregrado
                                    </option>
                                    <option value="Redacción de Tesis de Postgrado">
                                        Redacción de Tesis de Postgrado
                                    </option>
                                    <option value="Levantamiento de Observaciones">
                                        Levantamiento de Observaciones
                                    </option>
                                    <option value="Parafraseo">Parafraseo</option>
                                </select>
                                <textarea
                                    className="form__input form__input--textarea"
                                    placeholder="Escribe tu mensaje aquí"
                                    value={formData.mensaje}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            mensaje: e.target.value,
                                        }))
                                    }
                                />
                                <input
                                    className="form__input form__input--submit"
                                    type="submit"
                                    value="Enviar"
                                />
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
