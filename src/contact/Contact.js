import React from 'react'
import './contact.css'
import { BsFacebook, BsYoutube } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

function Contact() {
    return (
        <section className="contact-section sec-padding" id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-tittle">
                        <h2>Contacto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-form">
                        <form>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" placeholder="Nombre" className="input-control" required/>
                                </div>
                                <div className="input-group">
                                    <input type="email" placeholder="Correo electronico" className="input-control" required/>
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder="Asunto" className="input-control" required/>
                                </div>
                                <div className="input-group">
                                    <textarea placeholder="Mensaje" className="input-control" required></textarea>
                                </div>
                                <div className="submit-btn">
                                    <button type="submit" className="btn">Enviar mensaje</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <h3>Email</h3>
                            <p>aramirez_17@alu.uabcs.mx</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Telefono</h3>
                            <p>(+52) 612-10-7-29-91</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Sigueme en</h3>
                            <div className="social-links">
                                <a href="" target="_blank"> <BsFacebook /> </a>
                                <a href="" target="_blank"> <AiFillTwitterCircle /> </a>
                                <a href="" target="_blank"> <BsYoutube /> </a>
                                <a href="" target="_blank"> <AiFillGithub /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Contact
