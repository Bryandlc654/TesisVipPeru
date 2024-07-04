import React from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Main from "./Main"
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../components/Footer/Footer"

const Inicio = () => {
    const [formData, setFormData] = React.useState({
        nombres: "",
        correo: "",
        titulo: "",
        revista: "",
    });

    const notifySuccess = () => toast.success("Enviado correctamente");
    const notifyError = () => toast.error("Por favor, completa todos los campos");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://formspree.io/f/xkgwnzlk", formData);
            notifySuccess();
            setFormData({
                nombres: "",
                carrera: "",
                celular: "",
                servicio: "",
                mensaje: ""
                
            });
        } catch (error) {
            notifyError();
            console.error("Error sending form data:", error);
        }
    };
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
                            <form className="form__form" onSubmit={handleFormSubmit}>
                                <input className="form__input" type="text" placeholder="Nombres" value={formData.nombres}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            nombres: e.target.value,
                                        }))
                                    } />
                                <select className="form__input form__input--select" value={formData.carrera}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            carrera: e.target.value,
                                        }))
                                    }>
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
                                <input className="form__input" type="tel" placeholder="Celular"  value={formData.celular}
                              onChange={(e) =>
                                setFormData((prevData) => ({
                                  ...prevData,
                                  celular: e.target.value,
                                }))
                              }/>
                                <select className="form__input form__input--select"  value={formData.servicio}
                              onChange={(e) =>
                                setFormData((prevData) => ({
                                  ...prevData,
                                  servicio: e.target.value,
                                }))
                              }>
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
                                    value={formData.mensaje}
                                    onChange={(e) =>
                                      setFormData((prevData) => ({
                                        ...prevData,
                                        mensaje: e.target.value,
                                      }))
                                    }
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
            <Toaster />
            <Main />
            <Footer />
        </>
    )
}

export default Inicio