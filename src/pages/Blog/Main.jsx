import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import ServiceImg1 from "../../assets/img/servicios-uno.webp"
import Imgblog2 from "../../assets/img/Tesis2.webp"
import Imgblog3 from "../../assets/img/Tesis3.webp"



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
                                    <img src={ServiceImg1} alt="" className='article__figure' />
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
                                    <img src={Imgblog2} alt="" className='article__figure' />
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
                                    <img src={Imgblog3} alt="" className='article__figure' />
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
                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}

export default Main