import Navbar from "../../../components/Navbar/Navbar"
import Button from "../../../components/Button/Button"
import Footer from "../../../components/Footer/Footer.jsx"

const Post1 = () => {
    return (
        <>
            <header className="hero hero--blog">
                <Navbar />
                <Button />
                <section className="hero__main hero__main--center">
                    <h1 className="hero__title title">
                        <span className="one">Blog</span>
                    </h1>
                </section>
            </header>
            <main className="main__post">
                <article className="post container">
                    <header className="post__texts">
                        <h2 className="post__title title">
                            <span className="one">¿CÓMO ELEGIR EL TEMA </span>
                            <span className="three">DE MI TESIS?</span>
                        </h2>
                        <p className="post__paragraph paragraph">
                            El tema de tesis es el eje central de tu trabajo de investigación. Es el asunto o problema específico que te propones abordar y sobre el cual desarrollarás tu análisis, discusión y conclusiones. Elegir un buen tema de tesis es crucial, para ayudarte en este proceso, te presento algunos consejos:
                        </p>
                    </header>
                    <figure className="post__figure">
                        <img className="img" src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="¿CÓMO ELEGIR EL TEMA DE MI TESIS?" />
                    </figure>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">1. Reflexiona sobre tus intereses y pasiones:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>¿Qué temas te apasionan?</strong></li>
                            <li><strong>¿En qué áreas te sientes más cómodo investigando?</strong></li>
                            <li><strong>¿Qué problemas te gustaría resolver o comprender mejor?</strong></li>
                        </ul>
                        <p className="post__paragraph paragraph">
                            Elegir un tema que te motive y te genere interés te permitirá mantenerte entusiasmado durante todo el proceso de investigación y escritura.
                        </p>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">2. Considera tu carrera profesional:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>¿Cómo se relaciona el tema con tus objetivos profesionales?</strong></li>
                            <li><strong>¿Te ayudará a adquirir habilidades o conocimientos valiosos para tu futuro laboral?</strong></li>
                            <li><strong>¿Podrás aplicar los resultados de tu investigación en tu campo de trabajo?</strong></li>
                        </ul>
                        <p className="post__paragraph paragraph">
                            Un tema que esté alineado con tu carrera profesional te permitirá obtener un mayor retorno de la inversión de tiempo y esfuerzo que dedicarás a tu tesis.
                        </p>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">3. Evalúa la viabilidad del tema:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>¿Existe suficiente información y recursos disponibles para investigar el tema?</strong></li>
                            <li><strong>¿Es posible realizar una investigación original y significativa sobre el tema?</strong></li>
                            <li><strong>¿El tema es lo suficientemente específico y delimitado para ser abordado en una tesis?</strong></li>
                        </ul>
                        <p className="post__paragraph paragraph">
                            Elegir un tema viable te asegurará que puedas completar tu investigación de manera exitosa y obtener resultados relevantes.
                        </p>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">4. Consulta con tu director de tesis o tutor:</span>
                        </h2>
                        <ul className="post__ul">
                            <li><strong>¿Qué temas te recomiendan?</strong></li>
                            <li><strong>¿Qué profesores o investigadores podrían guiarte en este tema?</strong></li>
                            <li><strong>¿Existen recursos o becas disponibles para investigar este tema?</strong></li>
                        </ul>
                        <p className="post__paragraph paragraph">
                            Tu director de tesis o tutor puede brindarte valiosos consejos y apoyo para elegir un tema adecuado para tu tesis.
                        </p>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">5. Investiga sobre temas potenciales:</span>
                        </h2>
                        <ul className="post__ul">
                            <li>Lee artículos académicos, libros y revistas especializadas.</li>
                            <li>Asiste a seminarios, conferencias y eventos académicos.</li>
                            <li>Habla con expertos en el campo de tu interés.</li>
                        </ul>
                        <p className="post__paragraph paragraph">
                            Investigar sobre temas potenciales te ayudará a comprender mejor el panorama actual de la investigación y a identificar áreas de interés que aún no han sido exploradas a fondo.
                        </p>
                    </section>
                    <section className="post__section">
                        <h2 className="title">
                            <span className="three">6. No te apresures en la decisión:</span>
                        </h2>
                        <ul className="post__ul">
                            <li>Tómate tu tiempo para reflexionar sobre las diferentes opciones.</li>
                            <li>Consulta con varias personas y busca diferentes perspectivas.</li>
                            <li>No tengas miedo de cambiar de opinión si encuentras un tema que te motiva más.</li>
                        </ul>
                        <p className="post__paragraph paragraph">
                            Elegir el tema de tu tesis es un proceso que requiere tiempo y reflexión. No te apresures en la decisión y asegúrate de seleccionar un tema que te inspire y te permita realizar un trabajo de investigación de alta calidad.
                        </p>
                    </section>
                </article>
            </main>

            <Footer />
        </>
    )
}

export default Post1