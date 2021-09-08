import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout> {/* Lo que es unico de la pagina va aqui adentro */}
      <h1>Hola.</h1>
      <h2>Mi nombre es Luis Salgado y vivo en Caracas.</h2>
      <p>Tienes preguntas? -- Visita <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default IndexPage