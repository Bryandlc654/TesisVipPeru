import Navbar from "../../../components/Navbar/Navbar"
import Button from "../../../components/Button/Button"
import Footer from "../../../components/Footer/Footer.jsx"
import Imgblog2 from "../../../assets/img/Tesis2.webp"

const Post2 = () => {
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
              <span className="one">¿Cómo estructurar el marco teórico </span>
              <span className="three">de mi tesis y no morir en el intento?</span>
            </h1>
            <p className="post__paragraph paragraph">
              El marco teórico de tu tesis es una pieza fundamental que sustenta tu
              investigación y le da solidez a tus argumentos. Elaborarlo puede parecer
              una tarea titánica, pero con la organización y estrategia adecuadas,
              puedes hacerlo de manera eficiente y sin morir en el intento. Aquí te
              presento algunos pasos y consejos para estructurar el marco teórico de
              tu tesis:
            </p>
          </header>
          <figure className="post__figure">
            <img
              className="img"
              src={Imgblog2}
              alt="¿Cómo estructurar el marco teórico de mi tesis?"
            />
          </figure>
          <section className="post__section">
            <h2 className="title">
              <span className="three">1. Define el alcance del marco teórico:</span>
            </h2>
            <p className="post__paragraph paragraph">
              Determina el periodo de tiempo, la región geográfica y las áreas temáticas
              que abarcará tu revisión de literatura. Esto te ayudará a enfocarte en la
              información más relevante para tu investigación.
            </p>
          </section>
          <section className="post__section">
            <h2 className="title">
              <span className="three">2. Reúne fuentes de información confiables:</span>
            </h2>
            <p className="post__paragraph paragraph">
              Busca libros, artículos científicos, revistas especializadas, tesis
              doctorales y otras fuentes de información de alta calidad. Asegúrate de
              que las fuentes sean confiables y relevantes para tu tema de
              investigación.
            </p>
          </section>
          <section className="post__section">
            <h2 className="title">
              <span className="three">3. Clasifica y organiza la información:</span>
            </h2>
            <p className="post__paragraph paragraph">
              Utiliza un sistema de clasificación que te permita organizar la
              información por temas, autores, conceptos clave o metodologías. Esto te
              ayudará a encontrar la información que necesitas de manera rápida y
              eficiente.
            </p>
          </section>
          <section className="post__section">
            <h2 className="title">
              <span className="three">4. Elabora un esquema o mapa mental:</span>
            </h2>
            <p className="post__paragraph paragraph">
              Visualiza la estructura del marco teórico utilizando un esquema o mapa
              mental. Esto te ayudará a identificar las relaciones entre los diferentes
              conceptos y temas que abordarás.
            </p>
          </section>
          <section className="post__section">
            <h2 className="title">
              <span className="three">5. Redacta el marco teórico:</span>
            </h2>
            <p className="post__paragraph paragraph">
              Comienza con una introducción que presente el tema de investigación y la
              importancia del marco teórico. Luego, desarrolla cada uno de los temas o
              subtemas que has identificado, utilizando un lenguaje claro y conciso.
              Asegúrate de citar correctamente todas las fuentes de información que
              utilices.
            </p>
          </section>
          <section className="post__section">
            <h2 className="title">
              <span className="three">6. Revisa y edita tu trabajo:</span>
            </h2>
            <p className="post__paragraph paragraph">
              Relee cuidadosamente tu marco teórico para identificar errores
              gramaticales, ortográficos o de estilo. También asegúrate de que la
              información esté bien organizada y que fluya de manera lógica.
            </p>
          </section>
          <section className="post__section">
            <p className="post__paragraph paragraph">
              <strong>¡Recuerda!</strong>
            </p>
            <ul className="post__ul">
              <li><strong>La paciencia es clave:</strong> El marco teórico requiere tiempo, dedicación y esfuerzo. No te desanimes si encuentras dificultades en el camino.</li>
              <li><strong>La organización es fundamental:</strong> Utiliza herramientas y estrategias que te permitan organizar la información de manera eficiente.</li>
              <li><strong>La consulta es esencial:</strong> No dudes en consultar a tu director de tesis, profesores, compañeros o buscar asesoría externa si tienes dudas o necesitas apoyo.</li>
            </ul>
          </section>
        </article>
        <section className="promo promo--careers ">
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
  )
}

export default Post2