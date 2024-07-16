import { useInView } from 'react-intersection-observer';

const Main = () => {
    const { ref: Secc1MeRef, inView: Secc1MeInView } = useInView({
        threshold: 0, // Ajusta el umbral de visibilidad según tus necesidades
    });
    return (
        <>
            <main>
                <section className="pay">
                    <div className={`pay__texts container center hidden ${Secc1MeInView ? 'fade-in-fwd' : 'fade-in'}`} ref={Secc1MeRef}>
                        <span className="pay__guide guide">Medio de pago</span>
                        <h2 className="pay__title title">
                            <span className="one">Pago </span>
                            <span className="three">Seguro</span>
                        </h2>
                        <p className="pay__paragraph paragraph">
                            Puedes realizar tus transacciones con la tranquilidad de saber que tus datos financieros están protegidos con la más alta tecnología de encriptación.
                        </p>
                    

                        <stripe-buy-button
                            buy-button-id="buy_btn_1PaNW92KP4h2oeB1LlyDsZrm"
                            publishable-key="pk_live_51P73Ck2KP4h2oeB1899fPVnYY8AwtqGBdvrfWm9NCalafEtnu5PkXS4np9ade8ekGfIEZ2TYHqol7z0DI8oSae3L00F04r82xo"
                        >
                        </stripe-buy-button>
                    </div>

                </section>
            </main>

        </>
    )
}

export default Main