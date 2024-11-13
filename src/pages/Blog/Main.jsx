import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ServiceImg1 from "../../assets/img/servicios-uno.webp"
import Imgblog2 from "../../assets/img/Tesis2.webp"
import Imgblog3 from "../../assets/img/Tesis3.webp"
import Imgblog4 from "../../assets/img/Tesis4.webp"
import Imgblog5 from "../../assets/img/Tesis5.webp"
import Imgblog6 from "../../assets/img/Tesis6.webp"




const Main = () => {
    const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });
    const { ref: Secc2MeRef, inView: Secc2MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });

    return (
        <>
            <main className="main">
                <section className="blog">
                    <div className="blog__content container">
                        <div className={`blog__texts center hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
                            <span className="blog__guide guide">Consejos útiles</span>
                            <h2 className="blog__title title">
                                <span className="one">Nuestro </span>
                                <span className="three">Blog</span>
                            </h2>
                            <p className="blog__paragraph paragraph">
                                En esta sección, ofrecemos recomendaciones y estrategias clave para
                                ayudarte en cada etapa de tu tesis.
                            </p>
                        </div>

                        <div className="blog__articles">
                            <article className={`article hidden ${Secc2MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc2MeRef}>
                                <figure className="article__figure" >
                                    <img src={ServiceImg1} alt="¿Cómo elegir el Tema de mi Tesis?" className='article__figure' />
                                </figure>

                                <div className="article__texts">
                                    <strong className="article__title">¿Cómo elegir el Tema de mi Tesis?</strong>
                                    <p className="article__paragraph paragraph">
                                        El tema de tesis es el eje central de tu trabajo de investigación,es el asunto o problema específico que te propones abordar.
                                    </p>
                                    <Link className="article__cta" to="/ComoElegirTemaTesis">
                                        Ver más
                                    </Link>
                                </div>
                            </article>
                            <article className={`article hidden ${Secc2MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc2MeRef}>
                                <figure className="article__figure" >
                                    <img src={Imgblog2} alt="¿Cómo estructurar el marco teórico de mi tesis y no morir en el intento?" className='article__figure' />
                                </figure>

                                <div className="article__texts">
                                    <strong className="article__title">¿Cómo estructurar el marco teórico de mi tesis y no morir en el intento?</strong>
                                    <p className="article__paragraph paragraph">
                                        El marco teórico de tu tesis es una pieza fundamental que sustenta tu investigación y le da solidez a tus
                                        argumentos.
                                    </p>
                                    <Link className="article__cta" to="/Marco-Teorico">
                                        Ver más
                                    </Link>
                                </div>
                            </article>
                            <article className={`article hidden ${Secc2MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc2MeRef}>
                                <figure className="article__figure" >
                                    <img src={Imgblog3} alt="¿Qué es una tesis universitaria?" className='article__figure' />
                                </figure>

                                <div className="article__texts">
                                    <strong className="article__title">¿Qué es una tesis universitaria?</strong>
                                    <p className="article__paragraph paragraph">
                                        Se trata de un proyecto extenso y complejo que requiere un alto nivel de compromiso, dedicación y habilidades investigativas.
                                    </p>
                                    <Link className="article__cta" to="/Tesis-Universitaria">
                                        Ver más
                                    </Link>
                                </div>
                            </article>
                            <article className={`article hidden ${Secc2MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc2MeRef}>
                                <figure className="article__figure" >
                                    <img src={Imgblog4} alt="¿Cómo escribir las conclusiones?" className='article__figure' />
                                </figure>

                                <div className="article__texts">
                                    <strong className="article__title">¿Cómo escribir las conclusiones?</strong>
                                    <p className="article__paragraph paragraph">
                                        Las conclusiones son la parte final de una tesis donde se sintetizan los resultados, se responde a la pregunta de investigación y se discute la relevancia de los hallazgos. 
                                    </p>
                                    <Link className="article__cta" to="/Conclusiones">
                                        Ver más
                                    </Link>
                                </div>
                            </article>
                            <article className={`article hidden ${Secc2MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc2MeRef}>
                                <figure className="article__figure" >
                                    <img src={Imgblog5} alt="¿Cómo escribir la introducción de una tesis en corto tiempo y sin dificultades?" className='article__figure' />
                                </figure>

                                <div className="article__texts">
                                    <strong className="article__title">¿Cómo escribir la introducción de una tesis en corto tiempo y sin dificultades?</strong>
                                    <p className="article__paragraph paragraph">
                                      La introducción es la carta de presentación de tu tesis. Debe ser atractiva, informativa y bien estructurada. 
                                    </p>
                                    <Link className="article__cta" to="/Como-Escribir-Introduccion-Tesis">
                                        Ver más
                                    </Link>
                                </div>
                            </article>
                            <article className={`article hidden ${Secc2MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc2MeRef}>
                                <figure className="article__figure" >
                                    <img src={Imgblog6} alt="¿Cómo escribir la introducción de una tesis en corto tiempo y sin dificultades?" className='article__figure' />
                                </figure>

                                <div className="article__texts">
                                    <strong className="article__title">El Marco Teórico de una Tesis: </strong>
                                    <p className="article__paragraph paragraph">
                                    El marco teórico sería como los planos de esa casa. Te indica qué materiales necesitas, cómo unir las piezas y cuál será el resultado final. 
                                    </p>
                                    <Link className="article__cta" to="/Como-Escribir-Introduccion-Tesis">
                                        Ver más
                                    </Link>
                                </div>
                            </article>
                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}

export default Main