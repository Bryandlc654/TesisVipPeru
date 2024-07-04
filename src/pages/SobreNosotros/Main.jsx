import NosotrosImg1 from "../../assets/img/sobre-nosotros.webp"
import NosotrosImg2 from "../../assets/img/sobre-nosotros-dos.webp"
import NosotrosImg3 from "../../assets/img/sobre-la-empresa.webp"
import NosotrosImg4 from "../../assets/img/sobre-nosotros-vision.webp"
import NosotrosImg5 from "../../assets/img/sobre-nosotros-mision.webp"

const Main = () => {
    return (
        <>
            <main className="main">
                <section className="what-is">
                    <div className="what-is__content container">
                        <div className="what-is__principal">
                            <div className="what-is__texts">
                                <span className="what-is__guide guide">Conoce</span>
                                <h2 className="what-is__title title">
                                    <span className="one">¿Qué es </span>
                                    <span className="three">Tesis VIP?</span>
                                </h2>
                                <div className="paragraphs">
                                    <p className="what-is__paragraph paragraph">
                                        En Tesis VIP, ofrecemos asesoría y redacción de tesis de alta
                                        calidad, guiando a los estudiantes en cada etapa.
                                    </p>
                                    <p className="what-is__paragraph paragraph">
                                        Somos tu aliado estratégico, ayudándote a alcanzar tus metas
                                        académicas y profesionales con un enfoque personalizado.
                                    </p>
                                </div>
                            </div>
                            <div className="what-is__cards">
                                <article className="what-is__card">
                                    <span className="what-is__icon">
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
                                    </span>
                                    <div className="what-is__text">
                                        <p className="what-is__name paragraph">Asesoría Integral</p>
                                        <p className="what-is__info paragraph">
                                            Apoyo en todas las etapas del proceso
                                        </p>
                                    </div>
                                </article>
                                <article className="what-is__card">
                                    <span className="what-is__icon what-is__icon--dark">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-award"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                                        </svg>
                                    </span>
                                    <div className="what-is__text">
                                        <p className="what-is__name paragraph">Calidad Garantizada</p>
                                        <p className="what-is__info paragraph">
                                            Servicio que cumplen con los más altos estándares
                                        </p>
                                    </div>
                                </article>
                                <article className="what-is__card">
                                    <span className="what-is__icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-chat-left-dots"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                        </svg>
                                    </span>
                                    <div className="what-is__text">
                                        <p className="what-is__name paragraph">Enfoque Personalizado</p>
                                        <p className="what-is__info paragraph">
                                            Soluciones adaptadas a tus necesidades
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="what-is__group">
                            <figure className="what-is__figure">
                                <img
                                    className="what-is__img"
                                    src={NosotrosImg1}
                                    alt="Grupo de estudiantes con batas de graduación celebrando, y en el aire hay confeti"
                                />
                            </figure>
                            <figure className="what-is__figure">
                                <img
                                    className="what-is__img"
                                    src={NosotrosImg2}
                                    alt="Gente de negocios chocando las palmas de las manos alegres de su trabajo"
                                />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="about-company">
                    <div className="about-company__content container">
                        <figure className="about-company__figure">
                            <img
                                className="about-company__img"
                                src={NosotrosImg3}
                                loading="lazy"
                                alt="Un hombre joven feliz mirando de frente"
                            />
                        </figure>
                        <div className="about-company__texts">
                            <span className="about-company__guide guide">Nuestra historia</span>
                            <h2 className="about-company__title title">
                                <span className="three">Sobre la empresa</span>
                            </h2>
                            <div className="about-company__socials">
                                <ul className="about-company__list">
                                    <li>
                                        <a
                                            className="about-company__item"
                                            href=""
                                            rel="noopener noreferrer"
                                        >
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
                                    <li>
                                        <a
                                            className="about-company__item"
                                            href=""
                                            rel="noopener noreferrer"
                                        >
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
                                    <li>
                                        <a
                                            className="about-company__item"
                                            href=""
                                            rel="noopener noreferrer"
                                        >
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
                                    <li>
                                        <a
                                            className="about-company__item"
                                            href=""
                                            rel="noopener noreferrer"
                                        >
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
                                    <li>
                                        <a
                                            className="about-company__item"
                                            href=""
                                            rel="noopener noreferrer"
                                        >
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
                                </ul>
                            </div>
                            <div className="paragraphs">
                                <p className="about-company__paragraph paragraph">
                                    Desde nuestros inicios, nos hemos comprometido a proporcionar
                                    asesoría experta y un acompañamiento constante a cada estudiante,
                                    garantizando que cada tesis cumpla con los más estrictos estándares
                                    de rigor académico y ético. Con una dedicación incansable y un
                                    enfoque en la excelencia, hemos ayudado a cientos de estudiantes a
                                    alcanzar sus metas académicas y profesionales.
                                </p>
                                <p className="about-company__paragraph paragraph">
                                    A lo largo de los años, hemos evolucionado y crecido, adaptándonos a
                                    las nuevas tecnologías y metodologías de investigación para ofrecer
                                    servicios innovadores y de calidad. Hoy en día, somos reconocidos
                                    por nuestra capacidad para manejar proyectos de gran escala y por
                                    nuestra eficiencia en la entrega de resultados sobresalientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mission">
                    <div className="mission__content container">
                        <div className="mission__texts">
                            <span className="mission__guide guide">Nuestro propósito</span>
                            <h2 className="mission__title title">
                                <span className="three">Misión</span>
                            </h2>
                            <div className="paragraphs">
                                <p className="mission__paragraph paragraph">
                                    En Tesis VIP PROFESSIONALS CORPORATION, nuestra misión es ser tu
                                    aliado estratégico hacia el éxito académico.
                                </p>
                                <p className="mission__paragraph paragraph">
                                    Ofrecemos asesoría integral en la elaboración de tesis, garantizando
                                    alta calidad y rigurosidad ética. Nos comprometemos a brindar un
                                    servicio personalizado, desde la selección del tema hasta la
                                    revisión final, promoviendo la originalidad y el desarrollo
                                    profesional de cada estudiante.
                                </p>
                                <p className="mission__paragraph paragraph">
                                    Guiamos a nuestros estudiantes en cada paso del proceso, asegurando
                                    que sus trabajos cumplan con los estándares académicos y editoriales
                                    más exigentes, fomentando siempre la honestidad intelectual y la
                                    integridad académica.
                                </p>
                            </div>
                        </div>
                        <figure className="mission__figure">
                            <img
                                className="mission__img"
                                src={NosotrosImg5}
                                loading="lazy"
                                alt="Una reunión de compañeros"
                            />
                        </figure>
                    </div>
                </section>
                <section className="vision">
                    <div className="vision__content container">
                        <figure className="vision__figure">
                            <img
                                className="vision__img"
                                src={NosotrosImg4}
                                loading="lazy"
                                alt="Una estudiante con bata de graduación mirando de frente sonriendo"
                            />
                        </figure>
                        <div className="vision__texts">
                            <span className="vision__guide guide">Nuestro futuro</span>
                            <h2 className="vision__title title">
                                <span className="three">Visión</span>
                            </h2>
                            <div className="paragraphs">
                                <p className="vision__paragraph paragraph">
                                    Aspiramos a ser la empresa líder en asesoría y elaboración de tesis,
                                    reconocida por la calidad excepcional de nuestros servicios y la
                                    experiencia de nuestro equipo de profesionales.
                                </p>
                                <p className="vision__paragraph paragraph">
                                    Nos comprometemos con el éxito académico de cada estudiante, siendo
                                    la referencia de confianza para aquellos que buscan alcanzar la
                                    excelencia en sus trabajos de tesis.
                                </p>
                                <p className="vision__paragraph paragraph">
                                    Queremos posicionarnos como un pilar fundamental en la formación
                                    académica y profesional de nuestros clientes, ofreciendo un apoyo
                                    integral y de alta calidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="values">
                    <div className="values__content container">
                        <h2 className="values__title title">
                            <span className="one">Nuestros </span>
                            <span className="three">Valores</span>
                        </h2>
                        <div className="values__group">
                            <div className="value">
                                <p className="value__number">1</p>
                                <p className="value__name paragraph">Profesionalismo</p>
                            </div>
                            <div className="value">
                                <p className="value__number">2</p>
                                <p className="value__name paragraph">Compromiso</p>
                            </div>
                            <div className="value">
                                <p className="value__number">3</p>
                                <p className="value__name paragraph">Calidad</p>
                            </div>
                            <div className="value">
                                <p className="value__number">4</p>
                                <p className="value__name paragraph">Innovación</p>
                            </div>
                            <div className="value">
                                <p className="value__number">5</p>
                                <p className="value__name paragraph">Confianza</p>
                            </div>
                            <div className="value">
                                <p className="value__number">6</p>
                                <p className="value__name paragraph">Responsabilidad</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Main