import FooterImg from '../../assets/img/logo.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__content container">
                    <div className="footer__group">
                        <div className="footer__info">
                            <a className="footer__logo" href="/">
                                <img
                                    className="footer__img"
                                    src={FooterImg}
                                    loading="lazy"
                                    alt="Logo de Tesis Vip"
                                />
                            </a>
                            <p className="footer__paragraph paragraph">
                                Somos un equipo diverso y capacitado, dedicado a ofrecer soluciones
                                personalizadas para asegurar tu éxito académico, con calidad
                                garantizada.
                            </p>
                        </div>
                        <nav className="footer__nav">
                            <p className="footer__title">Menú</p>
                            <ul className="footer__menu">
                                <li className="footer__item">
                                    <Link className="footer__link" to="/Inicio">
                                        Inicio
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link" to="/Servicios">
                                        Servicios
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link" to="/Carreras">
                                        Carreras
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link" to="/Pagos">
                                        Pagos
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link" to="/Nosotros">
                                        Nosotros
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link" to="/Nosotros">
                                        Testimonios
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link" to="/Nosotros">
                                        Contacto
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <Link className="footer__link" to="/Nosotros">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className="footer__nav">
                            <p className="footer__title">Redes Sociales</p>
                            <ul className="footer__menu">
                                <li className="footer__item">
                                    <a className="footer__link" href="https://www.facebook.com/TesisVipPeru/" target='_blank' rel="noopener noreferrer">
                                        Facebook
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="https://www.instagram.com/tesis_vip_asesoria/" target='_blank' rel="noopener noreferrer">
                                        Instagram
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="https://www.tiktok.com/@tesisvipasesorias" target='_blank' rel="noopener noreferrer">
                                        Tik Tok
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="https://www.linkedin.com/company/tesis-vip/" target='_blank' rel="noopener noreferrer">
                                        Linkedin
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="https://www.youtube.com/@tesisvip-asesoriamientoyca5851" target='_blank' rel="noopener noreferrer">
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="footer__nav">
                            <div className="footer__texts">
                                <p className="footer__title">Información de Contacto</p>
                                <p className="footer__info-contact paragraph">
                                    Nuestros asesores están para ayudarte en todo momento
                                </p>
                            </div>
                            <ul className="footer__menu">
                                <li className="footer__item footer__item--contact">
                                    <span className="icon">
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
                                    <address className="footer__address">
                                        Miguel Grau, Chaclacayo 15476, Perú
                                    </address>
                                </li>
                                <li className="footer__item footer__item--contact">
                                    <span className="icon">
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
                                    <a className="footer__link" href="mailto:info@tesisvip.com">
                                        info@tesisvip.com
                                    </a>
                                </li>
                                <li className="footer__item footer__item--contact">
                                    <span className="icon">
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
                                    <a className="footer__link" href="tel:+51901724896">
                                        +51 930 443 379
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <p className="footer__development container">
                        Tesis VIP - Diseñado y Desarrollado por{" "}
                        <a href="https://wa.link/glmx1i" target='_blank' className="next">Next Boost Perú</a>
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer