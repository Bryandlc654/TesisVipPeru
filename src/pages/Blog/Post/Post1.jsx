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
                    <h2 className="hero__title title">
                        <span className="one">Blog</span>
                    </h2>
                </section>
            </header>
            <main>
                <article>
                    <header>
                        <h1>¿CÓMO ELEGIR EL TEMA DE MI TESIS?</h1>
                        <p>
                            El tema de tesis es el eje central de tu trabajo de investigación. Es el asunto o problema específico que te propones abordar y sobre el cual desarrollarás tu análisis, discusión y conclusiones. Elegir un buen tema de tesis es crucial, para ayudarte en este proceso, te presento algunos consejos:
                        </p>
                    </header>
                    <section>
                        <h2>1. Reflexiona sobre tus intereses y pasiones:</h2>
                        <ul>
                            <li><strong>¿Qué temas te apasionan?</strong></li>
                            <li><strong>¿En qué áreas te sientes más cómodo investigando?</strong></li>
                            <li><strong>¿Qué problemas te gustaría resolver o comprender mejor?</strong></li>
                        </ul>
                        <p>
                            Elegir un tema que te motive y te genere interés te permitirá mantenerte entusiasmado durante todo el proceso de investigación y escritura.
                        </p>
                    </section>
                    <section>
                        <h2>2. Considera tu carrera profesional:</h2>
                        <ul>
                            <li><strong>¿Cómo se relaciona el tema con tus objetivos profesionales?</strong></li>
                            <li><strong>¿Te ayudará a adquirir habilidades o conocimientos valiosos para tu futuro laboral?</strong></li>
                            <li><strong>¿Podrás aplicar los resultados de tu investigación en tu campo de trabajo?</strong></li>
                        </ul>
                        <p>
                            Un tema que esté alineado con tu carrera profesional te permitirá obtener un mayor retorno de la inversión de tiempo y esfuerzo que dedicarás a tu tesis.
                        </p>
                    </section>
                    <section>
                        <h2>3. Evalúa la viabilidad del tema:</h2>
                        <ul>
                            <li><strong>¿Existe suficiente información y recursos disponibles para investigar el tema?</strong></li>
                            <li><strong>¿Es posible realizar una investigación original y significativa sobre el tema?</strong></li>
                            <li><strong>¿El tema es lo suficientemente específico y delimitado para ser abordado en una tesis?</strong></li>
                        </ul>
                        <p>
                            Elegir un tema viable te asegurará que puedas completar tu investigación de manera exitosa y obtener resultados relevantes.
                        </p>
                    </section>
                    <section>
                        <h2>4. Consulta con tu director de tesis o tutor:</h2>
                        <ul>
                            <li><strong>¿Qué temas te recomiendan?</strong></li>
                            <li><strong>¿Qué profesores o investigadores podrían guiarte en este tema?</strong></li>
                            <li><strong>¿Existen recursos o becas disponibles para investigar este tema?</strong></li>
                        </ul>
                        <p>
                            Tu director de tesis o tutor puede brindarte valiosos consejos y apoyo para elegir un tema adecuado para tu tesis.
                        </p>
                    </section>
                    <section>
                        <h2>5. Investiga sobre temas potenciales:</h2>
                        <ul>
                            <li>Lee artículos académicos, libros y revistas especializadas.</li>
                            <li>Asiste a seminarios, conferencias y eventos académicos.</li>
                            <li>Habla con expertos en el campo de tu interés.</li>
                        </ul>
                        <p>
                            Investigar sobre temas potenciales te ayudará a comprender mejor el panorama actual de la investigación y a identificar áreas de interés que aún no han sido exploradas a fondo.
                        </p>
                    </section>
                    <section>
                        <h2>6. No te apresures en la decisión:</h2>
                        <ul>
                            <li>Tómate tu tiempo para reflexionar sobre las diferentes opciones.</li>
                            <li>Consulta con varias personas y busca diferentes perspectivas.</li>
                            <li>No tengas miedo de cambiar de opinión si encuentras un tema que te motiva más.</li>
                        </ul>
                        <p>
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