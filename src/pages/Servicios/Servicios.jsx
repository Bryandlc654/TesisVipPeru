import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer.jsx"
import Main from "./Main.jsx"
import "./Servicios.css"
import { Text } from '../../cms/Editable';

const Servicios = () => {
  return (
    <>
      <header className="hero hero--about-us">
        <Navbar />
        <Button />
        <section className="hero__main hero__main--center">
          <h1 className="hero__title title">
            <Text path="pageHero.title1" as="span" className="one" />
            <Text path="pageHero.title2" as="span" className="two" />
          </h1>
        </section>
      </header>
      <Main />
      <Footer />
    </>
  )
}

export default Servicios
