import React from 'react'
import Footer from '../components/footer'
import Header from "../components/header"

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact Page</h1>
            <p>Estos son mis datos personales
                <p>Nombre: Luis Salgado</p>
                <p>Correo: Luis14Salgado@gmail.com</p>
                <p>Telefono: +58 424 153 7845</p>
                <p>Sigueme en Twitter como  asi ps juejueaa <a href="https://twitter.com/LuxSalgado" target="_blank" rel="noreferrer">@LuxSalgado</a></p>
            </p>
            <Footer />
        </div>
    )
}

export default ContactPage