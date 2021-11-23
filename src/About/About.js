import React, { useEffect, useRef } from 'react'
import './About.css'
import bg from '../images/bg.jpg';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';

function About() {
    return (
        <section className="about-section sec-padding" id="about">
            <div className="container">
                <div className="row">
                    <div className="section-tittle">
                        <h2>Acerca De</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-img">
                        <div className="img-box">
                            <img src="https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg" />
                        </div>
                    </div>
                    <div className="about-text">
                        <p>
                            Que tal, soy Adán Enrique Ramirez Cisneros un Ingeniero en Desarrollo de Software
                            al cual le gusta aprender nuevas tecnologias en el area del software, tengo aficion por
                            la programacion web
                        </p>
                        <h3>Habilidades</h3>
                        <div className="skills">
                            <div className="skill-item">HTML</div>
                            <div className="skill-item">CSS</div>
                            <div className="skill-item">JAVASCRIPT</div>
                            <div className="skill-item">PHP</div>
                            <div className="skill-item">BOOTSTRAP</div>
                            <div className="skill-item">JAVA</div>
                            <div className="skill-item">C++</div>
                            <div className="skill-item">JAVA PARA ANDROID</div>
                        </div>

                        <div className="about-tabs">
                            <button type="button" className="tab-item active" data-target="#educacion">Educacion</button>
                            <button type="button" className="tab-item" data-target="#experiencia">Experiencia</button>
                        </div>

                        <Education />
                        <Experience />
                        <a href="https://drive.google.com/file/d/1ChN4-2eO1dyNATwwsp7FdTOwOEp7xQy4/view?usp=sharing" target="_blank" className="btn">Descargar mi CV</a>
                        <a href="#contact" className="btn link-item">Contacta me</a>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default About
