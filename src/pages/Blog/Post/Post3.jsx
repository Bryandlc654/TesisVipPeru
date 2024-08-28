import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/Button/Button";
import Footer from "../../../components/Footer/Footer";
import Imgblog3 from "../../../assets/img/Tesis3.webp"

const Post3 = () => {
    return (
        <>
            <header className="hero hero--blog">
                <Navbar />
                <Button />
                <section className="hero__main hero__main--center">
                    <h2 className="hero__title title">
                        <span className="one">Blog</span>
                    </h2>
                </section>
            </header>
            <main className="main__post">
                <article className="post container">
                    <header className="post__texts">
                        <h1 className="post__title title">
                            <span className="one">¿Qué es una tesis </span>
                            <span className="three">universitaria?</span>
                        </h1>
                        <p className="post__paragraph paragraph">
                            Una tesis universitaria es un trabajo de investigación final que los estudiantes deben realizar para obtener un título de grado, maestría o doctorado. Se trata de un proyecto extenso y complejo que requiere un alto nivel de compromiso, dedicación y habilidades investigativas.
                        </p>
                        <p className="post__paragraph paragraph">
                            El objetivo principal de una tesis es demostrar que el estudiante ha adquirido las competencias necesarias para realizar una investigación original y aportar conocimiento nuevo a su campo de estudio. La tesis debe ser un trabajo original, riguroso y metodológicamente sólido, que presente hallazgos relevantes y contribuya a la comprensión de un tema específico.
                        </p>
                    </header>
                    <figure className="post__figure">
                        <img
                            className="img"
                            src={Imgblog3}
                            alt="¿Cómo estructurar el marco teórico de mi tesis?"
                        />
                    </figure>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">Tipos de tesis universitarias:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>Tesis de investigación:</strong> Son las más comunes y se basan en la realización de un estudio original que busca responder a una pregunta de investigación.</li>
                            <li><strong>Tesis de compilación:</strong> Se basan en la recopilación y análisis de información existente sobre un tema específico.</li>
                            <li><strong>Tesis de intervención:</strong> Proponen una solución a un problema o una mejora a una situación existente mediante la implementación de una intervención o programa.</li>
                        </ul>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">Estructura de una tesis universitaria:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>Introducción:</strong> Presenta el tema de investigación, la pregunta de investigación, los objetivos y la metodología del estudio.</li>
                            <li><strong>Marco teórico:</strong> Revisa la literatura existente sobre el tema de investigación y presenta las teorías y conceptos relevantes.</li>
                            <li><strong>Metodología:</strong> Describe en detalle los métodos y técnicas utilizados para realizar la investigación.</li>
                            <li><strong>Resultados:</strong> Presenta los hallazgos del estudio de manera clara y organizada.</li>
                            <li><strong>Discusión:</strong> Analiza los resultados del estudio en relación con el marco teórico y la literatura existente.</li>
                            <li><strong>Conclusiones:</strong> Presenta las conclusiones principales del estudio y destaca su contribución al conocimiento.</li>
                        </ul>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">Consejos para escribir una tesis:</span>
                        </h2>
                        <ul className="post__ul">
                            <li>Elige un tema que te apasione y que sea relevante para tu campo de estudio.</li>
                            <li>Realiza una investigación exhaustiva sobre el tema de tu tesis.</li>
                            <li>Desarrolla un plan de trabajo claro y organizado.</li>
                            <li>Escribe de manera clara, concisa y precisa.</li>
                            <li>Cita tus fuentes correctamente.</li>
                            <li>Revisa tu tesis cuidadosamente antes de presentarla.</li>
                        </ul>
                    </section>

                </article>
                <section className="promo promo--careers">
                    <div className="promo__content container">
                        <div className="promo__group-call">
                            <div className="promo__icon">
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
                            </div>
                            <p className="promo__number">
                                <span className="text">Llama a Nuestros asesores</span>
                                <span className="number">+51 930 443 379</span>
                            </p>
                        </div>
                        <p className="promo__paragraph paragraph">
                            ¡No pierdas más tiempo! Agenda una reunión online con nuestros asesores
                            y da el primer paso hacia el éxito académico. ¡Haz clic para programar
                            tu sesión!
                        </p>
                        <a
                            className="btn-dark btn-dark--promo"
                            href="https://wa.link/70uspg"
                            target="_blank"
                            title="Contactar"
                            rel="noopener noreferrer"
                        >
                            Contactar
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Post3;
