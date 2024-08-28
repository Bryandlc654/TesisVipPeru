import React from 'react';
import ContactoImg1 from "../../assets/img/estudiante-contacto.webp"
import { useInView } from 'react-intersection-observer';

const Main = () => {
    const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });
    const { ref: Secc2MeRef, inView: Secc2MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });
    const { ref: Secc3MeRef, inView: Secc3MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });
    const { ref: Secc4MeRef, inView: Secc4MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });

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
            const whatsappURL = `https://wa.me/+51901815850?text=${encodeURIComponent(whatsappMessage)}`; // Reemplaza 51XXXXXXXXX con el número de WhatsApp de destino

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
    return (
        <>
            <main className="main">
                <section className="info-contact">
                    <div className={`info-contact__content container hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
                        <div className="info-contact__texts center">
                            <span className="info-contact__guide guide">Medios de atención</span>
                            <h2 className="info-contact__title title">
                                <span className="one">Información de </span>
                                <span className="three">Contacto</span>
                            </h2>
                            <p className="info-contact__paragraph paragraph">
                                Nuestro equipo de soporte está listo para ayudarte con cualquier duda
                                que puedas tener. ¡No dudes en ponerte en contacto con nosotros!
                            </p>
                        </div>
                        <ul className="info-contact__group">
                            <li className="info-contact__item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                <div className="info-contact__contact">
                                    <p className="info-contact__name paragraph">Oficina</p>
                                    <p className="info-contact__info paragraph">
                                        Miguel Grau, Chaclacayo 15476
                                    </p>
                                </div>
                            </li>
                            <li className="info-contact__item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-telephone"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                                <div className="info-contact__contact">
                                    <p className="info-contact__name paragraph">Celular</p>
                                    <p className="info-contact__info paragraph">+51 930 443 379</p>
                                </div>
                            </li>
                            <li className="info-contact__item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-envelope"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                                <div className="info-contact__contact">
                                    <p className="info-contact__name paragraph">Correo</p>
                                    <p className="info-contact__info paragraph">info@tesis-vip.com</p>
                                </div>
                            </li>
                            <li className="info-contact__item ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-camera-video"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
                                    />
                                </svg>
                                <div className="info-contact__contact">
                                    <p className="info-contact__name paragraph">Asesoría</p>
                                    <p className="info-contact__info paragraph">Agendar ahora</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <section className="contact__icons">
                        <ul className="data__menu">
                            <li className="data__item">
                                <a className="data__link" href="https://www.facebook.com/TesisVipPeru/" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-facebook"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </a>
                            </li>
                            <li className="data__item">
                                <a className="data__link" href="https://www.instagram.com/tesis_vip_asesoria/" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-instagram"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </a>
                            </li>
                            <li className="data__item">
                                <a className="data__link" href="https://www.tiktok.com/@tesisvipasesorias" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-tiktok"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="data__item">
                                <a className="data__link" href="https://www.linkedin.com/company/tesis-vip/" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-linkedin"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="data__item">
                                <a className="data__link" href="https://www.youtube.com/@tesisvip-asesoriamientoyca5851" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-youtube"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>

                <section className="form-contact">
                    <div className="form-contact__content container">
                        <article className={`form-contact__info hidden ${Secc2MeInView ? 'fade-in-left' : 'fade-in'}`} ref={Secc2MeRef}>
                            <div className="form-contact__icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-headset"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                                </svg>
                            </div>
                            <div className="form-contact__group">
                                <p className="form-contact__name paragraph">Asesoría Personalizada</p>
                                <p className="form-contact__text paragraph">
                                    Diseñado para ofrecerte soluciones adaptadas a tus necesidades
                                    específicas
                                </p>
                                <a
                                    className="btn-white btn-white--contact"
                                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ST_cfzAXUmKy1YHXaKWXlgYYgropwbZcXo1SPR-jnE1WBrkB76Mj8YVsUmkmRbopBmMW8o4_k"
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    Agendar ahora
                                </a>
                            </div>
                        </article>
                        <div className="form-contact__img">
                            <img
                                className="img"
                                src={ContactoImg1}
                                alt="Estudiante"
                                aria-hidden="true"
                                role="presentation"
                            />
                        </div>
                        <div className={`form hidden ${Secc3MeInView ? 'fade-in-right' : 'fade-in'}`} ref={Secc3MeRef}>
                            <div className="form-contact__texts">
                                <span className="form-contact__guide guide">Déjanos tus datos</span>
                                <h2 className="form-contact__title title">
                                    <span className="one">Contáctanos</span>
                                </h2>
                            </div>
                            <form className="form__form" onSubmit={handleFormSubmit}>
                                <input className="form__input" type="text" placeholder="Nombres" value={formData.nombres}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            nombres: e.target.value,
                                        }))
                                    } />
                                <select className="form__input form__input--select" aria-label="Carrera" value={formData.carrera}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            carrera: e.target.value,
                                        }))
                                    }>
                                    <option value="" selected="" disabled="">
                                        Seleccione una carrera
                                    </option>
                                    <option value="Ciencias Sociales">Ciencias Sociales</option>
                                    <option value="Ciencias de la Salud">Ciencias de la Salud</option>
                                    <option value="Ciencias Empresariales">
                                        Ciencias Empresariales
                                    </option>
                                    <option value="Ingenierías y Arquitectura">
                                        Ingenierías y Arquitectura
                                    </option>
                                    <option value="Ciencias Biológicas y Agrónomas">
                                        Ciencias Biológicas y Agrónomas
                                    </option>
                                    <option value="Ciencias Básicas">Ciencias Básicas</option>
                                    <option value="Carreras Técnicas">Carreras Técnicas</option>
                                    <option value="otros">Otros</option>
                                </select>
                                <input className="form__input" type="tel" placeholder="Celular" value={formData.celular}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            celular: e.target.value,
                                        }))
                                    } />
                                <select className="form__input form__input--select" aria-label="Servicio" value={formData.servicio}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            servicio: e.target.value,
                                        }))
                                    }>
                                    <option value="" selected="" disabled="">
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
                                    defaultValue={""} value={formData.mensaje}
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
                                    defaultValue="Enviar"
                                />
                            </form>
                        </div>
                    </div>
                </section>
                <section className="map-contact">
                    <div className={`map-contact__content container hidden ${Secc4MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc4MeRef}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.84857798488!2d-76.8138152!3d-11.984977599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e832af55bf3b%3A0x68ae0a0505825193!2sMiguel%20Grau%2C%20Chaclacayo%2015476!5e0!3m2!1ses!2spe!4v1719786283274!5m2!1ses!2spe"
                            width={600}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main