import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from "../components/header"

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Page</h1>
            <p>Este blog se creo con la finalidad de aprender Gatsbyjs</p>
            <p>Si quieres trabajar conmigo, puedes <Link to="/contact">contactarme</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage