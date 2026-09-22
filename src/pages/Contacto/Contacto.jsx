import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer.jsx"
import Main from "./Main.jsx"
import { Text } from '../../cms/Editable';

const Contacto = () => {
    return (
        <>
            <header className="hero hero--contact">
                <Navbar />
                <Button />
                <section className="hero__main hero__main--center">
                    <h1 className="hero__title title">
                        <Text path="pageHero.title" as="span" className="one" />
                    </h1>
                </section>
            </header>
            <Main />
            <Footer />
        </>
    )
}

export default Contacto
