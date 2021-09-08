import React from "react"
import { Link } from 'gatsby'
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hola.</h1>
      <h2>Mi nombre es Luis Salgado y vivo en Caracas.</h2>
      <p>Tienes preguntas? -- Visita <Link to="/contact">Contact Me</Link></p>
      <Footer />
    </div>
    )
}

export default IndexPage