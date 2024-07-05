import { useRef, useEffect, useState } from 'react';
import N1 from "../../assets/icons/1.svg"
import N2 from "../../assets/icons/2.svg"
import N3 from "../../assets/icons/3.svg"
import N4 from "../../assets/icons/4.svg"
import AboutImg1 from "../../assets/img/quienes-somos-uno.webp"
import AboutImg2 from "../../assets/img/quienes-somos-dos.webp"
import AboutImg3 from "../../assets/img/quienes-somos-tres.webp"
import ResultImg from "../../assets/img/fondo-resultados.webp"
import ServiceImg1 from "../../assets/img/servicios-uno.webp"
import ServiceImg2 from "../../assets/img/servicios-dos.webp"
import ServiceImg3 from "../../assets/img/servicios-tres.webp"
import ServiceImg4 from "../../assets/img/servicios-cuatro.webp"
import ServiceImg5 from "../../assets/img/asesora.webp"
import ServiceImg6 from "../../assets/img/turnitin.webp"
import ServiceImg7 from "../../assets/img/trabajos.webp"
import TestimonialImg1 from "../../assets/img/opinion-uno.webp"
import TestimonialImg2 from "../../assets/img/opinion-dos.webp"
import TestimonialImg3 from "../../assets/img/opinion-tres.webp"
import TestimonialImg4 from "../../assets/img/opinion4.webp"
import TestimonialImg5 from "../../assets/img/opinion5.webp"
import TestimonialImg6 from "../../assets/img/opinion6.webp"
import FaqsImg from "../../assets/img/dudas-frecuentes.webp"
import FooterImg from "../../assets/img/fondo-contacto.webp"
import FooterImg2 from "../../assets/img/estudiante-contacto.webp"
import PlaneImg from "../../assets/icons/plane.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './ProgressBar.css'

const Main = () => {
    const iframeRef = useRef(null);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const textRef = useRef(null);

    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [years, setYears] = useState(0);
    const [recommendation, setRecommendation] = useState(0);

    useEffect(() => {
        const onYouTubeIframeAPIReady = () => {
            new window.YT.Player(iframeRef.current, {
                events: {
                    onReady: onPlayerReady,
                },
            });
        };

        const onPlayerReady = (event) => {
            const customPlayBtn = document.getElementById('custom-play-btn');
            customPlayBtn.addEventListener('click', () => {
                event.target.playVideo();
                setIsButtonVisible(false);
            });
        };

        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        } else {
            onYouTubeIframeAPIReady();
        }
    }, []);

    useEffect(() => {
        let start = null;
        const duration = 5000; // Duración de la animación en milisegundos

        const animateText = (timestamp) => {
            if (!start) start = timestamp;
            const progressTime = timestamp - start;
            const percentage = Math.min(Math.floor((progressTime / duration) * 100), 100);
            setProgress(percentage);

            if (progressTime < duration) {
                requestAnimationFrame(animateText);
            }
        };

        requestAnimationFrame(animateText);
    }, []);

    useEffect(() => {
        const animateValue = (setValue, targetValue, duration) => {
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const value = Math.min(Math.floor((progress / duration) * targetValue), targetValue);
                setValue(value);

                if (progress < duration) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        };

        animateValue(setClients, 120, 2000); // 120 clientes en 2 segundos
        animateValue(setProjects, 100, 2000); // 100% proyectos en 2 segundos
        animateValue(setYears, 10, 2000); // 10 años en 2 segundos
        animateValue(setRecommendation, 100, 2000); // 100% recomendado en 2 segundos
    }, []);

    return (
        <>
            <main>
                <section className="benefits">
                    <div className="benefits__content container">
                        <div className="benefits__texts fade-in-left">
                            <span className="guide">Beneficios</span>
                            <h2 className="benefits__title title">
                                <span className="one">¿Por qué elegir</span>
                                <span className="two">a Tesis Vip?</span>
                            </h2>
                            <p className="benefits__paragraph paragraph">
                                Nos especializamos en brindarte un acompañamiento integral y
                                personalizado en cada etapa de tu tesis. Nuestros servicios están
                                diseñados para garantizar tu éxito académico y profesional. Descubre
                                cómo podemos ayudarte:
                            </p>
                            <div className="benefits__group">
                                <div className="benefits__group-number">
                                    <div className="benefits__icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-whatsapp"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                        </svg>
                                    </div>
                                    <p className="benefits__number">
                                        <span className="number">+51 901 724 896</span>
                                        <span className="text">Whatsapp</span>
                                    </p>
                                </div>
                                <a
                                    className="btn-primary btn-primary--benefits"
                                    href="https://wa.link/sf967w"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Contáctanos
                                </a>
                            </div>
                        </div>
                        <div className="benefits__list">
                            <article className="benefit">
                                <div className="benefit__content">
                                    <p className="benefit__number"><img src={N1} alt="" /></p>
                                    <p className="benefit__paragraph">
                                        <span className="one">Asesores Privados</span>
                                        <span className="two">Altamente Calificados</span>
                                    </p>
                                </div>
                            </article>
                            <article className="benefit">
                                <div className="benefit__content">
                                    <p className="benefit__number"><img src={N2} alt="" /></p>
                                    <p className="benefit__paragraph">
                                        <span className="one">Experiencia 100%</span>
                                        <span className="two">Personalizada</span>
                                    </p>
                                </div>
                            </article>
                            <article className="benefit">
                                <div className="benefit__content">
                                    <p className="benefit__number"><img src={N3} alt="" /></p>
                                    <p className="benefit__paragraph">
                                        <span className="one">Te preparamos</span>
                                        <span className="two">de Inicio a Fin</span>
                                    </p>
                                </div>
                            </article>
                            <article className="benefit">
                                <div className="benefit__content">
                                    <p className="benefit__number"><img src={N4} alt="" /></p>
                                    <p className="benefit__paragraph">
                                        <span className="one">Tu éxito Académico</span>
                                        <span className="two">es nuestra prioridad</span>
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                <section className="promo ">
                    <div className="promo__content container fade-in-fwd">
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
                                <span className="number">+51 921 777 947</span>
                            </p>
                        </div>
                        <p className="promo__paragraph paragraph">
                            ¡No pierdas más tiempo! Agenda una reunión online con nuestros asesores
                            y da el primer paso hacia el éxito académico. ¡Haz clic para programar
                            tu sesión!
                        </p>
                        <a
                            className="btn-dark btn-dark--promo"
                            href="#"
                            rel="noopener noreferrer"
                        >
                            Agendar ahora
                        </a>
                    </div>
                </section>
                <section className="about">
                    <div className="about__content container">
                        <div className="about__images">
                            <figure className="about__figure about__figure--one">
                                <img
                                    className="about__img"
                                    src={AboutImg1}
                                    loading="lazy"
                                    alt="Quienes somos en Tesis Vip, imagen uno referente a una empresa"
                                />
                            </figure>
                            <figure className="about__figure about__figure--two">
                                <img
                                    className="about__img"
                                    src={AboutImg2}
                                    loading="lazy"
                                    alt="Quienes somos en Tesis Vip, imagen dos referente a una empresa"
                                />
                            </figure>
                            <figure className="about__figure about__figure--three">
                                <img
                                    className="about__img"
                                    src={AboutImg3}
                                    loading="lazy"
                                    alt="Quienes somos en Tesis Vip, imagen tres referente a una empresa"
                                />
                            </figure>
                        </div>
                        <div className="about__texts fade-in-right">
                            <span className="guide">Nosotros</span>
                            <h2 className="about__title title">
                                <span className="one">¿Quiénes </span>
                                <span className="three">Somos?</span>
                            </h2>
                            <p className="about__paragraph paragraph">
                                En Tesis VIP, somos un equipo diverso y capacitado, dedicado a ofrecer
                                soluciones personalizadas para asegurar tu éxito académico, con
                                calidad garantizada.
                            </p>
                            <div className="about__group">
                                <ul className="about__list">
                                    <li className="about__item">Asesoría personalizada</li>
                                    <li className="about__item">Entregas parciales y seguras</li>
                                    <li className="about__item">Software anti-plagio avanzado</li>
                                    <li className="about__item">Análisis estadístico especializado</li>
                                    <li className="about__item">
                                        Elaboración de artículos científicos
                                    </li>
                                    <li className="about__item">
                                        Presentaciones académicas profesionales
                                    </li>
                                </ul>
                                <div className="about__experience">
                                    <p className="number">10</p>
                                    <p className="year">años</p>
                                    <p className="xp">de experiencia</p>
                                </div>
                            </div>
                            <a className="btn-primary btn-primary--about" href="https://wa.link/sf967w" target="_blank">
                                Más información
                            </a>
                        </div>
                    </div>
                </section>
                <section className="results">
                    <div className="results__background background">
                        <img
                            className="img"
                            src={ResultImg}
                            alt="Resultados"
                            loading="lazy"
                            aria-hidden="true"
                            role="presentation"
                        />
                    </div>
                    <div className="results__content container">
                        <div className="results__group-one fade-in-left">
                            <span className="guide results__guide">Éxito garantizado</span>
                            <h2 className="results__title title">
                                <span className="one">Resultados que </span>
                                <span className="two">Importan</span>
                            </h2>
                            <p className="results__paragraph paragraph">
                                Demuestran nuestro compromiso con cada cliente
                            </p>
                        </div>
                        <div className="results__group-two">
                            <article className="result fade-in-fwd">
                                <svg width="120" height="100" viewBox="0 0 250 250" className="circular-progress">
                                    <circle className="bg"></circle>
                                    <circle className="fg"></circle>
                                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="number" ref={textRef}>
                                        {progress}%
                                    </text>
                                </svg>
                                <div className="result__texts">
                                    <p className="result__title">
                                        <strong>Satisfacción</strong>
                                    </p>
                                    <p className="result__paragraph paragraph">
                                        Nuestros clientes son nuestra mejor referencia
                                    </p>
                                </div>
                            </article>
                            <article className="result fade-in-fwd">
                                <svg width="120" height="100" viewBox="0 0 250 250" className="circular-progress">
                                    <circle className="bg"></circle>
                                    <circle className="fg"></circle>
                                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="number" ref={textRef}>
                                        {progress}%
                                    </text>
                                </svg>
                                <div className="result__texts">
                                    <p className="result__title">
                                        <strong>Cumplimiento</strong>
                                    </p>
                                    <p className="result__paragraph paragraph">
                                        Siempre cumpliendo con las expectativas
                                    </p>
                                </div>
                            </article>
                            <article className="result fade-in-fwd">
                                <svg width="120" height="100" viewBox="0 0 250 250" className="circular-progress">
                                    <circle className="bg"></circle>
                                    <circle className="fg"></circle>
                                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="number" ref={textRef}>
                                        {progress}%
                                    </text>
                                </svg>
                                <div className="result__texts">
                                    <p className="result__title">
                                        <strong>Calidad</strong>
                                    </p>
                                    <p className="result__paragraph paragraph">
                                        Avalados por nuestros rigurosos estándares
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                <section className="processes">
                    <div className="processes__texts center container fade-in-fwd">
                        <span className="processes__guide guide">Nuestros Procesos</span>
                        <h2 className="processes__title title">
                            <span className="one">¿Cómo logramos</span>
                            <span className="three">el éxito?</span>
                        </h2>
                        <p className="processes__paragraph paragraph">
                            Gracias a nuestros procesos detallados y meticulosos, garantizamos el
                            éxito en cada proyecto, asegurando un servicio de alta calidad y
                            satisfacción para todos nuestros clientes
                        </p>
                    </div>
                    <div className="processes__group fade-in-fwd">
                        <div className="processes__background">
                            <img
                                className="img"
                                src={PlaneImg}
                                alt=""
                                loading="lazy"
                                aria-hidden="true"
                                role="presentation"
                            />
                        </div>
                        <div className="processes__group-content container">
                            <article className="process">
                                <p className="process__number">01</p>
                                <p className="process__title">
                                    <strong>Evaluación Inicial</strong>
                                </p>
                                <p className="process__paragraph paragraph">
                                    Analizamos tus necesidades y establecemos un plan personalizado de
                                    asesorías
                                </p>
                            </article>
                            <article className="process">
                                <p className="process__number">02</p>
                                <p className="process__title">
                                    <strong>Desarrollo y Entregas</strong>
                                </p>
                                <p className="process__paragraph paragraph">
                                    Trabajamos en entregas parciales, brindando informes de progreso
                                </p>
                            </article>
                            <article className="process">
                                <p className="process__number">03</p>
                                <p className="process__title">
                                    <strong>Revisión y Finalización</strong>
                                </p>
                                <p className="process__paragraph paragraph">
                                    Realizamos revisiones detalladas y preparamos tu presentación final
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="video">
                    <div className="video__content container fade-in-left">
                        <div className="video__container-img">
                            <iframe
                                ref={iframeRef}
                                className="video__img"
                                src="https://www.youtube.com/embed/8HdyujrW_58?enablejsapi=1"
                                title="¿Cómo lo hacemos? | Tesis vip Servicio de asesoría y redacción"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                id="youtube-video"
                            ></iframe>
                        </div>
                        {isButtonVisible && (
                            <div className="video__group">
                                <button className="video__btn" id="custom-play-btn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-play-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </section>
                <section className="services">
                    <div className="services__content container">
                        <div className="services__texts center fade-in-fwd">
                            <span className="services__guide guide">Lo que hacemos</span>
                            <h2 className="services__title title">
                                <span className="one">Nuestros </span>
                                <span className="three">Servicios</span>
                            </h2>
                            <p className="services__paragraph paragraph">
                                Nuestro enfoque es personalizado y nos comprometemos con tu éxito
                                académico, garantizando calidad, confidencialidad y apoyo continuo.
                            </p>
                        </div>

                        <Swiper
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper fade-in-fwd"
                        >
                            <SwiperSlide>
                                <article className="service ">
                                    <figure className="service__figure">
                                        <img
                                            className="service__img"
                                            src={ServiceImg1}
                                            loading="lazy"
                                            alt="Una joven mujer en una graduación de pie frente al escenario"
                                        />
                                    </figure>
                                    <div className="service__texts">
                                        <p className="service__title">
                                            <strong>Redacción de Tesis de Pregrado</strong>
                                        </p>
                                        <a className="service__cta" href="https://wa.link/i003n2" target='_blank'>
                                            Contratar
                                        </a>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="service">
                                    <figure className="service__figure">
                                        <img
                                            className="service__img"
                                            src={ServiceImg2}
                                            loading="lazy"
                                            alt="Un joven hombre con anteojos en una graduación de pie"
                                        />
                                    </figure>
                                    <div className="service__texts">
                                        <p className="service__title">
                                            <strong>Redacción de Tesis de Postgrado</strong>
                                        </p>
                                        <a className="service__cta" href="https://wa.link/5nat26" target='_blank'>
                                            Contratar
                                        </a>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="service">
                                    <figure className="service__figure">
                                        <img
                                            className="service__img"
                                            src={ServiceImg3}
                                            loading="lazy"
                                            alt="Un retrato elegante profesional de una mujer de negocios"
                                        />
                                    </figure>
                                    <div className="service__texts">
                                        <p className="service__title">
                                            <strong>Levantamiento de Observaciones</strong>
                                        </p>
                                        <a className="service__cta" href="https://wa.link/ejdi2d" target='_blank'>
                                            Contratar
                                        </a>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="service">
                                    <figure className="service__figure">
                                        <img
                                            className="service__img"
                                            src={ServiceImg4}
                                            loading="lazy"
                                            alt="Un abogado en un retrato profesional"
                                        />
                                    </figure>
                                    <div className="service__texts">
                                        <p className="service__title">
                                            <strong>Parafraseo</strong>
                                        </p>
                                        <a className="service__cta" href="https://wa.link/bsqec9" target='_blank'>
                                            Contratar
                                        </a>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="service">
                                    <figure className="service__figure">
                                        <img
                                            className="service__img"
                                            src={ServiceImg6}
                                            loading="lazy"
                                            alt="Un abogado en un retrato profesional"
                                        />
                                    </figure>
                                    <div className="service__texts">
                                        <p className="service__title">
                                            <strong>Revisión con Turnitin</strong>
                                        </p>
                                        <a className="service__cta" href="https://wa.link/0pbepd" target='_blank'>
                                            Contratar
                                        </a>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="service">
                                    <figure className="service__figure">
                                        <img
                                            className="service__img"
                                            src={ServiceImg5}
                                            loading="lazy"
                                            alt="Un abogado en un retrato profesional"
                                        />
                                    </figure>
                                    <div className="service__texts">
                                        <p className="service__title">
                                            <strong>Asesoría de Tesis</strong>
                                        </p>
                                        <a className="service__cta" href="https://wa.link/3qfuz1" target='_blank'>
                                            Contratar
                                        </a>
                                    </div>
                                </article>
                            </SwiperSlide>
                            <SwiperSlide>
                                <article className="service">
                                    <figure className="service__figure">
                                        <img
                                            className="service__img"
                                            src={ServiceImg7}
                                            loading="lazy"
                                            alt="Un abogado en un retrato profesional"
                                        />
                                    </figure>
                                    <div className="service__texts">
                                        <p className="service__title">
                                            <strong>Redacción de Trabajos Universitarios</strong>
                                        </p>
                                        <a className="service__cta" href="https://wa.link/wjfg8a" target='_blank'>
                                            Contratar
                                        </a>
                                    </div>
                                </article>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="opinions">
                    <div className="opinions__content container">
                        <div className="opinions__texts center fade-in-fwd">
                            <h2 className="opinions__title title">
                                <span className="one">¿Qué dicen </span>
                                <span className="three">Nuestros Clientes?</span>
                            </h2>
                            <p className="opinions__paragraph paragraph">
                                Sus testimonios reflejan la satisfacción y éxito alcanzados gracias a
                                nuestro compromiso y dedicación en cada proyecto.
                            </p>
                        </div>
                        <div className="opinions__group ">
                            <Swiper className="opinions__slider mySwiper fade-in-fwd" spaceBetween={10}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Autoplay, Pagination, Navigation]}>
                                <SwiperSlide>
                                    <figure className="opinions__figure">
                                        <img
                                            className="opinions__img"
                                            src={TestimonialImg1}
                                            loading="lazy"
                                            alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                                        />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure className="opinions__figure">
                                        <img
                                            className="opinions__img"
                                            src={TestimonialImg2}
                                            loading="lazy"
                                            alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                                        />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure className="opinions__figure">
                                        <img
                                            className="opinions__img"
                                            src={TestimonialImg3}
                                            loading="lazy"
                                            alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                                        />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure className="opinions__figure">
                                        <img
                                            className="opinions__img"
                                            src={TestimonialImg4}
                                            loading="lazy"
                                            alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                                        />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure className="opinions__figure">
                                        <img
                                            className="opinions__img"
                                            src={TestimonialImg5}
                                            loading="lazy"
                                            alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                                        />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <figure className="opinions__figure">
                                        <img
                                            className="opinions__img"
                                            src={TestimonialImg6}
                                            loading="lazy"
                                            alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos"
                                        />
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className="faqs">
                    <div className="faqs__content container">
                        <div className="faqs__group fade-in-left">
                            <figure className="faqs__figure">
                                <img
                                    className="faqs__img"
                                    src={FaqsImg}
                                    loading="lazy"
                                    alt="Dos personas consultando algo en sus tabletas"
                                />
                            </figure>
                            <div className="faqs__group-texts">
                                <p className="faqs__info paragraph">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-check-circle"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                    </svg>
                                    <strong>¡No lo dudes más!</strong>
                                </p>
                                <p className="faqs__info-text paragraph">
                                    <strong>
                                        Soluciones claras para tus preguntas. ¡Tu éxito académico es
                                        nuestra prioridad!
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div className="faqs__texts fade-in-right">
                            <span className="faqs__guide guide">Preguntas comunes</span>
                            <h2 className="faqs__title title">
                                <span className="one">Dudas </span>
                                <span className="three">Frecuentes</span>
                            </h2>
                            <p className="faqs__paragraph paragraph">
                                Aquí aclaramos tus dudas sobre nuestros servicios, para que tomes una
                                decisión informada y segura.
                            </p>
                            <div className="faqs__container">
                                <details className="faq" name="faq">
                                    <summary className="faq__title">
                                        ¿Cómo se realizaran las asesorías?
                                    </summary>
                                    <p className="faq__paragraph paragraph">
                                        Tenemos un plan personalizado de asesorías para cada alumno dependiendo de sus necesidades.
                                        Podemos ayudarte con tu proyecto desde cero o retomarlo desde donde lo tengas.
                                        <br />
                                        - Plan Básico: 30 minutos.
                                        <br />
                                        - Plan Premium: 45 minutos
                                        <br />
                                        - Plan Gold: 60 minutos.
                                        <br />
                                        Todos cuentan con un profesional especializado en tu área de estudio y Correo electrónico con sugerencias.
                                    </p>
                                </details>
                                <details className="faq" name="faq">
                                    <summary className="faq__title">¿Por qué elegirnos para hacer tu Tesis?</summary>
                                    <p className="faq__paragraph paragraph">
                                        Realizamos entregas y pagos parciales, nunca solicitamos el monto total por adelantado.
                                        Trabajamos por presentaciones para que puedas revisar y presentar avances a tu tutor. <br />
                                        Usamos un avanzado software anti plagio y con cada entrega proporcionamos un informe de plagio.
                                        Nos adaptamos a cualquier etapa de tu proyecto y ofrecemos precios justos, sin costos excesivos.

                                    </p>
                                </details>
                                <details className="faq" name="faq">
                                    <summary className="faq__title">
                                        ¿Por qué elegirnos para tu Artículo Científico?
                                    </summary>
                                    <p className="faq__paragraph paragraph">
                                        En nuestra consultora, nos enfocamos en brindar soluciones efectivas a los problemas y desafíos que enfrentan nuestros clientes, nosotros vamos directo al asunto.
                                        Ofrecemos servicios personalizados y adaptados a las necesidades específicas de cada tesista, garantizando un servicio confidencial y de alta calidad.
                                        No estamos para hacerte perder el tiempo, realizamos tu Artículo Científico hasta que tu jurado lo apruebe.
                                    </p>
                                </details>
                                <details className="faq" name="faq">
                                    <summary className="faq__title">¿Por qué confiarnos tu Ensayo?</summary>
                                    <p className="faq__paragraph paragraph">
                                        Nuestros expertos poseen licenciaturas, maestrías o doctorados en diversas áreas de estudio, lo que respalda tu proyecto de Ensayo con un sólido conocimiento teórico y práctico.
                                        Además, nos comprometemos a elaborar tu trabajo académico con calidad y dedicación, asignando un especialista en tu campo para asegurar el mejor resultado posible.
                                        También te proporcionamos asistencia personalizada a través de un asesor educativo especializado en tu área de estudio, manteniendo una comunicación directa a través de nuestra plataforma.
                                        Puedes confiar plenamente en nosotros para la elaboración de tu ensayo, con Tesis Vip tienes una aprobación asegurada.
                                    </p>
                                </details>
                                <details className="faq" name="faq">
                                    <summary className="faq__title">
                                        ¿Por qué nosotros para tu Monografía?
                                    </summary>
                                    <p className="faq__paragraph paragraph">
                                        En primer lugar, nuestro servicio es 100% confidencial y seguro, tu tranquilidad es muy importante para nosotros.
                                        Además, contamos con un equipo de asesores especialistas en Monografía Científica, dispuestos a responder todas tus dudas durante el proceso del desarrollo.

                                        Somos los únicos que contamos con la licencia de para de nuestro software facilitaremos el informe anti plagio y garantizarte que su Monografía es único.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="contact__background background">
                        <img
                            className="img"
                            src={FooterImg}
                            alt="Fondo"
                            loading="lazy"
                            aria-hidden="true"
                            role="presentation"
                        />
                    </div>
                    <div className="contact__content container">
                        <div className="contact__img">
                            <img
                                className="img"
                                src={FooterImg2}
                                alt="Estudiante"
                                loading="lazy"
                                aria-hidden="true"
                                role="presentation"
                            />
                        </div>
                        <div className="contact__texts fade-in-left">
                            <span className="contact__guide guide">Déjanos tus datos</span>
                            <h2 className="contact__title title">
                                <span className="one">Contáctanos </span>
                                <span className="three">Ahora</span>
                            </h2>
                            <p className="contact__paragraph paragraph">
                                Estamos aquí para escucharte. Ponte en contacto con nuestro equipo
                                para cualquier consulta o sugerencia que tengas.
                            </p>
                            <ul className="contact__way">
                                <li className="contact__item">
                                    <span className="contact__icon">
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
                                    </span>
                                    <div className="contact__text">
                                        <p className="contact__name paragraph">Oficina</p>
                                        <p className="contact__data paragraph">
                                            Miguel Grau, Chaclacayo 15476, Perú
                                        </p>
                                    </div>
                                </li>
                                <li className="contact__item">
                                    <span className="contact__icon">
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
                                    </span>
                                    <div className="contact__text">
                                        <p className="contact__name paragraph">Celular</p>
                                        <p className="contact__data paragraph">+51 921 777 947</p>
                                    </div>
                                </li>
                                <li className="contact__item">
                                    <span className="contact__icon">
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
                                    </span>
                                    <div className="contact__text">
                                        <p className="contact__name paragraph">Correo</p>
                                        <p className="contact__data paragraph">info@tesis-vip.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="form fade-in-right">
                            <p className="form__title">Contáctanos</p>
                            <p className="form__paragraph paragraph">
                                Completa el formulario de contacto para comunicarte con nosotros
                            </p>
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
                <section className="info ">
                    <div className="info__content container fade-in-fwd">
                        <div className="info__texts">
                            <span className="info__icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-person"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                            </span>
                            <p className="info__text">+ {clients}</p>
                            <p className="info__name">Clientes</p>
                        </div>
                        <div className="info__texts">
                            <span className="info__icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-journal-richtext"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                </svg>
                            </span>
                            <p className="info__text">{projects}%</p>
                            <p className="info__name">Proyectos Completados</p>
                        </div>
                        <div className="info__texts">
                            <span className="info__icon">
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
                            <p className="info__text">+ {years}</p>
                            <p className="info__name">Años de Experiencia</p>
                        </div>
                        <div className="info__texts">
                            <span className="info__icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-star"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                </svg>
                            </span>
                            <p className="info__text">{recommendation}%</p>
                            <p className="info__name">Recomendado</p>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Main