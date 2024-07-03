import Navbar from "../../components/Navbar/Navbar"
import Main from "./Main"
const Inicio = () => {
    return (
        <>
            <header className="hero hero--home">
                <Navbar />
                <section className="hero__main container">
                    <div className="hero__content">
                        <div className="hero__texts">
                            <p className="hero__info">Aprobación Garantizada</p>
                            <h1 className="hero__title hero__title--home title">
                                <span className="one">Redacción y Asesoría de Tesis</span>
                                <span className="two">para Pregado y Postgrado</span>
                            </h1>
                        </div>
                        <div className="form form--transparent">
                            <p className="form__title">Agenda una asesoría</p>
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
                                    <option value="ciencias-empresariales">Ciencias Empresariales</option>
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
            </header>
            <Main/>

        </>
    )
}

export default Inicio