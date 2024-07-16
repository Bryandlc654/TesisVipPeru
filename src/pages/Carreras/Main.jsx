import { useInView } from 'react-intersection-observer';
import ServiceImg1 from '../../assets/img/economia.webp';
import ServiceImg2 from '../../assets/img/salud.webp';
import ServiceImg3 from '../../assets/img/administrador.webp';
import ServiceImg4 from '../../assets/img/ingeniero.webp';
import ServiceImg5 from '../../assets/img/agronomo.webp';

const Main = () => {
    const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });
    const { ref: Secc3MeRef, inView: Secc3MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });
    const { ref: Secc5MeRef, inView: Secc5MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });

    return (
        <>
            <main className="main">
                <section className="careers">
                    <div className="careers__content container">
                        <div className={`careers__texts center hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
                            <span className="careers__guide guide">Carreras</span>
                            <h2 className="careers__title title">
                                <span className="one">Somos </span>
                                <span className="three">Especialistas</span>
                            </h2>
                            <p className="careers__paragraph paragraph">
                                Nuestro equipo de expertos está preparado para apoyarte en disciplinas
                                como ciencias sociales, ingeniería, medicina y muchas más.
                            </p>
                        </div>
                        <div className="careers__group">
                            <article className="service service--careers">
                                <figure className="service__figure" >
                                    <img
                                        className="service__img"
                                        src={ServiceImg1}
                                     
                                        alt=""
                                    />
                                </figure>
                                <div className="service__texts">
                                    <p className="service__title">
                                        <strong className="career-texts">
                                            <span>Ciencias</span>
                                            <span>Sociales</span>
                                        </strong>
                                    </p>
                                    <a className="service__cta" href="https://api.whatsapp.com/send?phone=51901815850
" target='_blank'>
                                        Contratar
                                    </a>
                                </div>
                            </article>
                            <article className="service service--careers">
                                <figure className="service__figure" >
                                    <img
                                        className="service__img"
                                        src={ServiceImg2}
                                     
                                        alt=""
                                    />
                                </figure>
                                <div className="service__texts">
                                    <p className="service__title">
                                        <strong className="career-texts">
                                            <span>Ciencias</span>
                                            <span>de la Salud</span>
                                        </strong>
                                    </p>
                                    <a className="service__cta" href="https://api.whatsapp.com/send?phone=51901815850
" target='_blank'>
                                        Contratar
                                    </a>
                                </div>
                            </article>
                            <article className="service service--careers">
                                <figure className="service__figure" >
                                    <img
                                        className="service__img"
                                        src={ServiceImg3}
                                        alt=""
                                    />
                                </figure>
                                <div className="service__texts">
                                    <p className="service__title">
                                        <strong className="career-texts">
                                            <span>Ciencias</span>
                                            <span>Empresariales</span>
                                        </strong>
                                    </p>
                                    <a className="service__cta" href="https://api.whatsapp.com/send?phone=51901815850
" target='_blank'>
                                        Contratar
                                    </a>
                                </div>
                            </article>
                            <article className="service service--careers">
                                <figure className="service__figure" >
                                    <img
                                        className="service__img"
                                        src={ServiceImg4}
                                        alt=""
                                    />
                                </figure>
                                <div className="service__texts">
                                    <p className="service__title">
                                        <strong className="career-texts">
                                            <span>Ingenierías y</span>
                                            <span>Arquitectura</span>
                                        </strong>
                                    </p>
                                    <a className="service__cta" href="https://api.whatsapp.com/send?phone=51901815850
" target='_blank'>
                                        Contratar
                                    </a>
                                </div>
                            </article>
                            <article className="service service--careers">
                                <figure className="service__figure" >
                                    <img
                                        className="service__img"
                                        src={ServiceImg5}
                                        alt=""
                                    />
                                </figure>
                                <div className="service__texts">
                                    <p className="service__title">
                                        <strong className="career-texts">
                                            <span>Ciencias Biológicas</span>
                                            <span>y Agrónomas</span>
                                        </strong>
                                    </p>
                                    <a className="service__cta" href="https://api.whatsapp.com/send?phone=51901815850
" target='_blank'>
                                        Contratar
                                    </a>
                                </div>
                            </article>
                            <article className="service service--careers">
                                <figure className="service__figure" >
                                    <img
                                        className="service__img"
                                        src={ServiceImg3}
                                        alt=""
                                    />
                                </figure>
                                <div className="service__texts">
                                    <p className="service__title">
                                        <strong className="career-texts">
                                            <span>Carreras</span>
                                            <span>Técnicas</span>
                                        </strong>
                                    </p>
                                    <a className="service__cta" href="https://api.whatsapp.com/send?phone=51921777947" target='_blank'>
                                        Contratar
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                <section className="how">
                    <div className="how__content container">
                        <div className={`how__texts center hidden ${Secc3MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc3MeRef}>
                            <span className="how__guide guide">Nuestros procesos</span>
                            <h2 className="how__title title">
                                <span className="one">¿Cómo </span>
                                <span className="three">Trabajamos?  </span>
                            </h2>
                            <p className="how__paragraph paragraph">
                                Gracias a nuestros procesos detallados y meticulosos, garantizamos el
                                éxito en cada proyecto, asegurando un servicio de alta calidad y
                                satisfacción para todos nuestros clientes
                            </p>
                        </div>
                        <div className="how__group">
                            <div className="how__item">
                                <p className="how__item-number">01</p>
                                <p className="how__item-paragraph paragraph">
                                    Proporcionar estructura o esquema de Tesis
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">02</p>
                                <p className="how__item-paragraph paragraph">
                                    Realizas el Abono Inicial
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">03</p>
                                <p className="how__item-paragraph paragraph">
                                    Realizamos el Contrato de Garantía
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">04</p>
                                <p className="how__item-paragraph paragraph">
                                    Te agregamos al grupo de Whatsapp
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">05</p>
                                <p className="how__item-paragraph paragraph">
                                    Te asesoramos para definir los posibles temas
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">06</p>
                                <p className="how__item-paragraph paragraph">
                                    Proporcionamos los 3 temas para la elección
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">07</p>
                                <p className="how__item-paragraph paragraph">
                                    Eliges un tema junto con tu Asesor
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">08</p>
                                <p className="how__item-paragraph paragraph">
                                    Avance según cronograma
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">09</p>
                                <p className="how__item-paragraph paragraph">
                                    Levantamiento de Observaciones
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">10</p>
                                <p className="how__item-paragraph paragraph">
                                    Asesoría personalizada + explicación de avances
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">11</p>
                                <p className="how__item-paragraph paragraph">
                                    Aprobación de Proyecto de Tesis
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">12</p>
                                <p className="how__item-paragraph paragraph">
                                    Aplicas el tema de Campo
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">13</p>
                                <p className="how__item-paragraph paragraph">
                                    Avanzamos de acuerdo al cronograma
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">14</p>
                                <p className="how__item-paragraph paragraph">
                                    Levantamiento de Observaciones
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">15</p>
                                <p className="how__item-paragraph paragraph">
                                    Asesoría personalizada + explicación de avances
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">16</p>
                                <p className="how__item-paragraph paragraph">
                                    Entrega de documento Final + Porcentaje Turnitin
                                </p>
                            </div>
                            <div className="how__item">
                                <p className="how__item-number">17</p>
                                <p className="how__item-paragraph paragraph">
                                    Aprobación de la Tesis Completa
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="promo promo--careers ">
                    <div className={`promo__content container hidden ${Secc5MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc5MeRef}>
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
                                <span className="number">+51 901 815 850     </span>
                            </p>
                        </div>
                        <p className="promo__paragraph paragraph">
                            ¡No pierdas más tiempo! Agenda una reunión online con nuestros asesores
                            y da el primer paso hacia el éxito académico. ¡Haz clic para programar
                            tu sesión!
                        </p>
                        <a
                            className="btn-dark btn-dark--promo"
                            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ST_cfzAXUmKy1YHXaKWXlgYYgropwbZcXo1SPR-jnE1WBrkB76Mj8YVsUmkmRbopBmMW8o4_k"
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            Agendar ahora
                        </a>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Main