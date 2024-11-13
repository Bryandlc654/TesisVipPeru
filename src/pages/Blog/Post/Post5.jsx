import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/Button/Button";
import Footer from "../../../components/Footer/Footer";
import Imgblog5 from "../../../assets/img/Tesis5.webp"

const Post5 = () => {
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
                            <span className="one">¿Cómo escribir la introducción de una tesis </span>
                            <span className="three">en corto tiempo y sin dificultades?</span>
                        </h1>
                        <p className="post__paragraph paragraph">
                          La introducción es la carta de presentación de tu tesis. Debe ser atractiva, informativa y bien estructurada para captar la atención del lector y guiarle a través de tu investigación. Aquí te presento una guía concisa para que elabores una introducción sólida en poco tiempo.
                        </p>
                    </header>
                    <figure className="post__figure">
                        <img
                            className="img"
                            src={Imgblog5}
                            alt="¿Cómo escribir la introducción de una tesis en corto tiempo y sin dificultades?"
                        />
                    </figure>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">1. Comienza por el final:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>¿Cuál es tu conclusión principal?</strong> Antes de escribir la introducción, ten muy claro cuál es la respuesta a tu pregunta de investigación.</li>
                            <li><strong>¿Qué preguntas respondiste?</strong> Identifica los objetivos específicos que lograste con tu investigación.</li>
                        </ul>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">2. Estructura tu introducción:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>Gancho:</strong> Inicia con una frase impactante o una pregunta interesante que capte la atención del lector y lo motive a seguir leyendo.</li>
                            <li><strong>Contexto:</strong> Presenta el tema de manera general, ofreciendo una visión amplia del problema que estás investigando.</li>
                            <li><strong>Problema de investigación:</strong> Define claramente el problema específico que abordas en tu tesis.</li>
                            <li><strong>Justificación:</strong> Explica por qué tu investigación es relevante y qué aporta al conocimiento existente.</li>
                            <li><strong>Objetivos:</strong> Enuncia los objetivos específicos de tu estudio.</li>
                            <li><strong>Hipótesis:</strong> Si las tienes, preséntalas de manera clara y concisa.</li>
                            <li><strong>Estructura del trabajo:</strong> Ofrece una breve descripción de cómo está organizada tu tesis.</li>
                        </ul>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">3. Escribe con claridad y concisión:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>Lenguaje sencillo:</strong> Evita tecnicismos excesivos y utiliza un lenguaje claro y directo.</li>
                            <li><strong>Oraciones cortas:</strong> Facilita la comprensión del lector.</li>
                            <li><strong>Párrafos bien estructurados:</strong> Cada párrafo debe tratar una idea principal.</li>
                            <li><strong>Coherencia:</strong> Asegúrate de que las ideas fluyan de manera lógica y estén conectadas entre sí.</li>
                        </ul>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">4. Revisa y edita:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>Corrección ortográfica y gramatical:</strong> Utiliza herramientas de revisión para asegurarte de que tu texto esté libre de errores.</li>
                            <li><strong>Claridad y concisión:</strong> Elimina cualquier información redundante o innecesaria.</li>
                            <li><strong>Coherencia:</strong> Verifica que todas las partes de la introducción estén conectadas y contribuyan a la comprensión del lector.</li>
                        </ul>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">Ejemplo de estructura</span>
                        </h2>
                        <ol className="post__ul">
                            <li><strong>Gancho:</strong> El uso excesivo de dispositivos móviles ha generado preocupación por sus efectos en la salud mental de los adolescentes.</li>
                            <li><strong>Contexto:</strong> En las últimas décadas, la tecnología ha transformado la forma en que nos comunicamos e interactuamos.</li>
                            <li><strong>Problema:</strong> Se desconoce el impacto del uso intensivo de redes sociales en la autoestima de los adolescentes.</li>
                            <li><strong>Justificación:</strong> Esta investigación es relevante porque...</li>
                            <li><strong>Objetivos:</strong> El objetivo de este estudio es...</li>
                            <li><strong>Hipótesis:</strong> Se plantea que...</li>
                            <li><strong>Estructura:</strong> Este trabajo se divide en cinco capítulos...</li>
                        </ol>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">Consejos adicionales:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>Sé específico:</strong> Evita generalizaciones vagas y utiliza datos concretos para respaldar tus afirmaciones.</li>
                            <li><strong>Cita fuentes:</strong> Si utilizas información de otros autores, asegúrate de citarlas correctamente.</li>
                            <li><strong>Adapta el tono:</strong> El tono de tu introducción debe ser formal y académico, pero también atractivo para el lector.</li>
                            <li><strong>Pide feedback:</strong> Solicita la opinión de tu tutor o de otros colegas para mejorar tu introducción.</li>
                        </ul>
                    </section>
                    <section className="post__section">
                        <p className="post__paragraph paragraph"><strong>Aunque se coloca al principio de la tesis, es recomendable escribirla después de haber desarrollado el resto del trabajo. De esta manera, tendrás una visión más clara del conjunto y podrás redactar una introducción más precisa y coherente.</strong></p>
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

export default Post5;
