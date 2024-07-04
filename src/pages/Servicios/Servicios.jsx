import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer.jsx"
import Main from "./Main.jsx"
import "./Servicios.css"

const Servicios = () => {
  return (
    <>
      <header className="hero hero--about-us">
        <Navbar />
        <Button />
        <section className="hero__main hero__main--center">
          <h1 className="hero__title title">
            <span className="one">Nuestros </span>
            <span className="two"> Servicios</span>
          </h1>
        </section>
      </header>
      <Main />
      <Footer />
    </>
  )
}

export default Servicios