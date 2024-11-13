import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/Button/Button";
import Footer from "../../../components/Footer/Footer";
import Imgblog6 from "../../../assets/img/Tesis6.webp"

const Post6 = () => {
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
                            <span className="one">El Marco Teórico de una Tesis: </span>
                            <span className="three">Tu Brújula en la Investigación</span>
                        </h1>
                    </header>
                    <figure className="post__figure">
                        <img
                            className="img"
                            src={Imgblog6}
                            alt="El Marco Teórico de una Tesis: Tu Brújula en la Investigación"
                        />
                    </figure>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">¿Qué es un marco teórico?</span>
                        </h2>
                        <p className="post__paragraph paragraph">
                            Imagina que estás construyendo una casa. El marco teórico sería como los planos de esa casa. Te indica qué materiales necesitas, cómo unir las piezas y cuál será el resultado final. En una tesis, el marco teórico es ese conjunto de conceptos, teorías y estudios previos que te servirán de guía para investigar tu tema.
                        </p>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">¿Por qué es importante el marco teórico?</span>
                        </h2>
                        <ol className="post__ul">
                            <li><strong>Orientación:</strong> Te proporciona una dirección clara para tu investigación. Al conocer las teorías existentes, puedes identificar los vacíos de conocimiento y enfocar tu estudio en un aspecto específico.</li>
                            <li><strong>Justificación:</strong> Demuestra que tu investigación es relevante y necesaria. Al conectar tu trabajo con estudios anteriores, justificas por qué es importante abordar tu tema en particular.</li>
                            <li><strong>Consistencia:</strong> Ayuda a mantener la coherencia en tu investigación. Al basarte en teorías sólidas, evitas contradicciones y garantizas que tus conclusiones sean lógicas.</li>
                            <li><strong>Definición de conceptos:</strong> Clarifica el significado de los términos clave que utilizarás en tu investigación. Esto evita malentendidos y facilita la comunicación de tus ideas.</li>
                            <li><strong>Metodología:</strong> Te ayuda a seleccionar la metodología más adecuada para tu estudio. Al conocer los enfoques utilizados en investigaciones similares, puedes elegir el que mejor se adapte a tus objetivos.</li>
                        </ol>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">¿Cómo construir un buen marco teórico?</span>
                        </h2>
                        <ol className="post__ul">
                            <li><strong>Revisión bibliográfica:</strong> Investiga a fondo sobre tu tema. Busca artículos científicos, libros, tesis y otros documentos relevantes.</li>
                            <li><strong>Selección de teorías:</strong> Identifica las teorías que mejor se ajustan a tu tema de investigación.</li>
                            <li><strong>Análisis y síntesis:</strong> Analiza cada fuente y sintetiza la información más relevante.</li>
                            <li><strong>Relación entre teorías:</strong> Establece las conexiones entre las diferentes teorías y cómo se relacionan con tu investigación.</li>
                            <li><strong>Estructura clara:</strong> Organiza tu marco teórico de forma lógica y coherente.</li>
                        </ol>
                    </section>
                    <section className="post__section">
                        <p className="post__paragraph paragraph"><strong>En resumen,</strong> el marco teórico es una herramienta fundamental en cualquier investigación. Te brinda la base sólida que necesitas para llevar a cabo un estudio riguroso y original. ¡Así que no lo subestimes!</p>
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

export default Post6;
