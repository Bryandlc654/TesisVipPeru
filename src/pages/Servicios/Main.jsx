import ServiceImg1 from "../../assets/img/servicios-uno.webp"
import ServiceImg2 from "../../assets/img/servicios-dos.webp"
import ServiceImg3 from "../../assets/img/servicios-tres.webp"
import ServiceImg5 from "../../assets/img/asesora.webp"
import ServiceImg6 from "../../assets/img/turnitin.webp"
import ServiceImg7 from "../../assets/img/trabajos.webp"

const Main = () => {
  return (
    <>
      <main className="main">
        <section className="services service--page">
          <div className="services__content container">
            <div className="services__texts center">
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
          </div>
        </section>
        <section className="services-group">
          <div className="services-group__content container">
            <div className="services-group__service">
              <div className="service-group__texts">
                <span className="guide">Servicios</span>
                <h2 className="service-group__title title">
                  <span className="one">Redacción de Tesis</span>
                  <span className="three">de Pregrado</span>
                </h2>
                <p className="service-group__paragraph paragraph">
                  Nos especializamos en brindarte un acompañamiento integral y
                  personalizado en cada etapa de tu tesis. Nuestros servicios están
                  diseñados para garantizar tu éxito académico y profesional. Descubre
                  cómo podemos ayudarte:
                </p>
                <div className="service-group__group">
                  <div className="service-group__group-number">
                    <div className="service-group__icon">
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
                    <p className="service-group__number">
                      <span className="number">+51 921 777 947</span>
                      <span className="text">Whatsapp</span>
                    </p>
                  </div>
                  <a
                    className="btn-primary btn-primary--service-group"
                    href="https://wa.link/t96smb"
                    rel="noopener noreferrer"
                     target="_blank"
                  >
                    Iniciar
                  </a>
                </div>
              </div>
              <figure className="service-group__figure">
                <img
                  className="img"
                  src={ServiceImg1}
                  alt=""
                />
              </figure>
            </div>
            <div className="services-group__service">
              <div className="service-group__texts">
                <span className="guide">Servicios</span>
                <h2 className="service-group__title title">
                  <span className="one">Redacción de Tesis</span>
                  <span className="three">de Postgrado</span>
                </h2>
                <p className="service-group__paragraph paragraph">
                  Nos especializamos en brindarte un acompañamiento integral y
                  personalizado en cada etapa de tu tesis. Nuestros servicios están
                  diseñados para garantizar tu éxito académico y profesional. Descubre
                  cómo podemos ayudarte:
                </p>
                <div className="service-group__group">
                  <div className="service-group__group-number">
                    <div className="service-group__icon">
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
                    <p className="service-group__number">
                      <span className="number">+51 921 777 947</span>
                      <span className="text">Whatsapp</span>
                    </p>
                  </div>
                  <a
                    className="btn-primary btn-primary--service-group"
                    href="https://wa.link/t96smb"
                    rel="noopener noreferrer"
                     target="_blank"
                  >
                    Iniciar
                  </a>
                </div>
              </div>
              <figure className="service-group__figure">
                <img
                  className="img"
                  src={ServiceImg2}
                  alt=""
                />
              </figure>
            </div>
            <div className="services-group__service">
              <div className="service-group__texts">
                <span className="guide">Servicios</span>
                <h2 className="service-group__title title">
                  <span className="one">Levantamiento de</span>
                  <span className="three">Observaciones</span>
                </h2>
                <p className="service-group__paragraph paragraph">
                  Nos especializamos en brindarte un acompañamiento integral y
                  personalizado en cada etapa de tu tesis. Nuestros servicios están
                  diseñados para garantizar tu éxito académico y profesional. Descubre
                  cómo podemos ayudarte:
                </p>
                <div className="service-group__group">
                  <div className="service-group__group-number">
                    <div className="service-group__icon">
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
                    <p className="service-group__number">
                      <span className="number">+51 921 777 947</span>
                      <span className="text">Whatsapp</span>
                    </p>
                  </div>
                  <a
                    className="btn-primary btn-primary--service-group"
                    href="https://wa.link/t96smb"
                    rel="noopener noreferrer"
                     target="_blank"
                  >
                    Iniciar
                  </a>
                </div>
              </div>
              <figure className="service-group__figure">
                <img
                  className="img"
                  src={ServiceImg3}
                  alt=""
                />
              </figure>
            </div>
            <div className="services-group__service">
              <div className="service-group__texts">
                <span className="guide">Servicios</span>
                <h2 className="service-group__title title">
                  <span className="one">Asesoría de</span>
                  <span className="three">Tesis</span>
                </h2>
                <p className="service-group__paragraph paragraph">
                  Nos especializamos en brindarte un acompañamiento integral y
                  personalizado en cada etapa de tu tesis. Nuestros servicios están
                  diseñados para garantizar tu éxito académico y profesional. Descubre
                  cómo podemos ayudarte:
                </p>
                <div className="service-group__group">
                  <div className="service-group__group-number">
                    <div className="service-group__icon">
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
                    <p className="service-group__number">
                      <span className="number">+51 921 777 947</span>
                      <span className="text">Whatsapp</span>
                    </p>
                  </div>
                  <a
                    className="btn-primary btn-primary--service-group"
                    href="https://wa.link/t96smb"
                    rel="noopener noreferrer"
                     target="_blank"
                  >
                    Iniciar
                  </a>
                </div>
              </div>
              <figure className="service-group__figure">
                <img
                  className="img"
                  src={ServiceImg5}
                  alt=""
                />
              </figure>
            </div>
            <div className="services-group__service">
              <div className="service-group__texts">
                <span className="guide">Servicios</span>
                <h2 className="service-group__title title">
                  <span className="one">Trabajos</span>
                  <span className="three">Universitarios</span>
                </h2>
                <p className="service-group__paragraph paragraph">
                  Nos especializamos en brindarte un acompañamiento integral y
                  personalizado en cada etapa de tu tesis. Nuestros servicios están
                  diseñados para garantizar tu éxito académico y profesional. Descubre
                  cómo podemos ayudarte:
                </p>
                <div className="service-group__group">
                  <div className="service-group__group-number">
                    <div className="service-group__icon">
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
                    <p className="service-group__number">
                      <span className="number">+51 921 777 947</span>
                      <span className="text">Whatsapp</span>
                    </p>
                  </div>
                  <a
                    className="btn-primary btn-primary--service-group"
                    href="https://wa.link/t96smb"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Iniciar
                  </a>
                </div>
              </div>
              <figure className="service-group__figure">
                <img
                  className="img"
                  src={ServiceImg7}
                  alt=""
                />
              </figure>
            </div>
            <div className="services-group__service">
              <div className="service-group__texts">
                <span className="guide">Servicios</span>
                <h2 className="service-group__title title">
                  <span className="one">Revisión con</span>
                  <span className="three">Turnitin</span>
                </h2>
                <p className="service-group__paragraph paragraph">
                  Nos especializamos en brindarte un acompañamiento integral y
                  personalizado en cada etapa de tu tesis. Nuestros servicios están
                  diseñados para garantizar tu éxito académico y profesional. Descubre
                  cómo podemos ayudarte:
                </p>
                <div className="service-group__group">
                  <div className="service-group__group-number">
                    <div className="service-group__icon">
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
                    <p className="service-group__number">
                      <span className="number">+51 921 777 947</span>
                      <span className="text">Whatsapp</span>
                    </p>
                  </div>
                  <a
                    className="btn-primary btn-primary--service-group"
                    href="https://wa.link/t96smb"
                    rel="noopener noreferrer"
                     target="_blank"
                  >
                    Iniciar
                  </a>
                </div>
              </div>
              <figure className="service-group__figure">
                <img
                  className="img"
                  src={ServiceImg6}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default Main