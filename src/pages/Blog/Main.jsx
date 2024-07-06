import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <main className="main">
                <section className="blog">
                    <div className="blog__content container">
                        <div className="blog__texts center fade-in-fwd">
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
                        <div className="blog__select-category">
                            <label className="blog__label" htmlFor="categoria">
                                Elige una Categoría:
                            </label>
                            <div className="select">
                                <select className="blog__select" id="categoria">
                                    <option className="blog__option" value="todos" selected="">
                                        Todos
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="blog__articles">
                            <article className="article fade-in-fwd">
                                <figure className="article__figure" />
                                <p className="article__category">Categoría</p>
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
                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}

export default Main