import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/Button/Button";
import Footer from "../../../components/Footer/Footer";
import Imgblog4 from "../../../assets/img/Tesis4.webp"

const Post4 = () => {
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
                            <span className="one">¿Cómo escribir las conclusiones </span>
                            <span className="three">de una tesis?</span>
                        </h1>
                        <p className="post__paragraph paragraph">
                            Las conclusiones son la parte final de una tesis donde se sintetizan los resultados, se responde a la pregunta de investigación y se discute la relevancia de los hallazgos. Es una sección fundamental para comunicar de manera efectiva los aportes del estudio y su contribución al conocimiento científico.</p>
                    </header>
                    <figure className="post__figure">
                        <img
                            className="img"
                            src={Imgblog4}
                            alt="Cómo escribir las conclusiones de una tesis"
                        />
                    </figure>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">Pasos para escribir las conclusiones de tu tesis</span>
                        </h2>
                        <ol className="post__ul">
                            <li><strong>Revisa tus objetivos e hipótesis:</strong> Vuelve a leer los objetivos específicos que te planteaste al inicio de tu investigación y las hipótesis que buscabas comprobar. Esto te permitirá evaluar en qué medida lograste tus metas.</li>
                            <li><strong>Resume tus hallazgos principales:</strong> Sin entrar en demasiado detalle, resume de manera clara y concisa los resultados más importantes que obtuviste en tu investigación. Enfócate en aquellos que responden directamente a tus objetivos.
                            </li>
                            <li><strong>Responde a tu pregunta de investigación:</strong> La conclusión debe dar una respuesta clara y concisa a la pregunta de investigación que planteaste al inicio de tu trabajo.</li>
                            <li><strong>Evalúa tus hipótesis:</strong> Indica si tus hipótesis fueron confirmadas, refutadas o parcialmente confirmadas por los resultados obtenidos.
                            </li>
                            <li><strong>Discute la relevancia de tus hallazgos:</strong> Explica por qué tus resultados son importantes y cómo contribuyen al conocimiento existente en tu campo de estudio.</li>
                            <li><strong>Menciona las limitaciones de tu investigación:</strong> Sé honesto y reconoce las limitaciones de tu estudio, como el tamaño de la muestra, las variables no controladas, etc.</li>
                            <li><strong>Propón futuras líneas de investigación:</strong> Sugiere posibles direcciones futuras para la investigación en tu área, basadas en los resultados de tu trabajo.</li>
                            <li><strong>Redacta de forma clara y concisa:</strong> Utiliza un lenguaje claro y conciso, evitando tecnicismos innecesarios. Organiza tus ideas de manera lógica y coherente.</li>
                        </ol>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">Una estructura típica para las conclusiones podría ser:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>Introducción:</strong> Retoma brevemente la pregunta de investigación y los objetivos del estudio.</li>
                            <li><strong>Resumen de los hallazgos principales:</strong> Presenta los resultados más relevantes de forma concisa.</li>
                            <li><strong>Respuesta a la pregunta de investigación:</strong> Ofrece una respuesta clara y concisa a la pregunta de investigación.</li>
                            <li><strong>Evaluación de las hipótesis:</strong> Indica si las hipótesis fueron confirmadas o refutadas.</li>
                            <li><strong>Relevancia de los hallazgos:</strong> Explica la importancia de los resultados obtenidos.</li>
                            <li><strong>Limitaciones del estudio:</strong> Menciona las limitaciones de la investigación.</li>
                            <li><strong>Futuras líneas de investigación:</strong> Propón sugerencias para futuras investigaciones.</li>
                        </ul>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">Ejemplo</span>
                        </h2>
                        <ul className="post__ul">
                            <li><i>En conclusión, los resultados de este estudio demuestran que existe una relación significativa entre el nivel de estrés percibido y el rendimiento académico en estudiantes universitarios. Esta investigación confirma las hipótesis planteadas y contribuye a una mejor comprensión de los factores que influyen en el rendimiento académico. Sin embargo, es importante destacar que este estudio se llevó a cabo con una muestra limitada y en un contexto específico, por lo que los resultados no pueden generalizarse a toda la población estudiantil. Futuras investigaciones podrían explorar la relación entre el estrés y el rendimiento académico en diferentes disciplinas y culturas.</i></li>
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

export default Post4;
