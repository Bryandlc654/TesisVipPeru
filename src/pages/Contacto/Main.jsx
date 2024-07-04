import ContactoImg1 from "../../assets/img/estudiante-contacto.webp"

const Main = () => {
    return (
        <>
            <main className="main">
                <section className="info-contact">
                    <div className="info-contact__content container">
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
                                    <p className="info-contact__info paragraph">+51 921 777 947</p>
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
                            <li className="info-contact__item">
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
                </section>
                <section className="form-contact">
                    <div className="form-contact__content container">
                        <article className="form-contact__info">
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
                                    href="#"
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
                        <div className="form">
                            <div className="form-contact__texts">
                                <span className="form-contact__guide guide">Déjanos tus datos</span>
                                <h2 className="form-contact__title title">
                                    <span className="one">Contáctanos</span>
                                </h2>
                            </div>
                            <form className="form__form" action="" method="post">
                                <input className="form__input" type="text" placeholder="Nombres" />
                                <select className="form__input form__input--select">
                                    <option value="" selected="" disabled="">
                                        Seleccione una carrera
                                    </option>
                                    <option value="ciencias-sociales">Ciencias Sociales</option>
                                    <option value="ciencias-de-la-salud">Ciencias de la Salud</option>
                                    <option value="ciencias-empresariales">
                                        Ciencias Empresariales
                                    </option>
                                    <option value="ingenierias-y-arquitectura">
                                        Ingenierías y Arquitectura
                                    </option>
                                    <option value="ciencias-biologicas-y-agronomas">
                                        Ciencias Biológicas y Agrónomas
                                    </option>
                                    <option value="ciencias-basicas">Ciencias Básicas</option>
                                    <option value="carreras-tecnicas">Carreras Técnicas</option>
                                    <option value="otros">Otros</option>
                                </select>
                                <input className="form__input" type="tel" placeholder="Celular" />
                                <select className="form__input form__input--select">
                                    <option value="" selected="" disabled="">
                                        Seleccione un servicio
                                    </option>
                                    <option value="redaccion-tesis-pregrado">
                                        Redacción de Tesis de Pregrado
                                    </option>
                                    <option value="redaccion-tesis-postgrado">
                                        Redacción de Tesis de Postgrado
                                    </option>
                                    <option value="levantamiento-observaciones">
                                        Levantamiento de Observaciones
                                    </option>
                                    <option value="parafraseo">Parafraseo</option>
                                </select>
                                <textarea
                                    className="form__input form__input--textarea"
                                    placeholder="Escribe tu mensaje aquí"
                                    defaultValue={""}
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
                    <div className="map-contact__content container">
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