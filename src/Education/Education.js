import React from 'react';
import './education.css';

function Education() {
    return (
        <div className="tab-content active" id="educacion">
            <div className="timeline">
                <div className="timeline-item">
                    <span className="date">2014 — 2017</span>
                    <h4>Tecnico en Programacion <span>CBTIS #62</span></h4>
                    <p>
                        Estudie en el Centro de Bachillerato Tecnológico Industrial y de Servicios No. 62 (CBTIS #62),
                        en el cual estudie los 3 años de preparatoria en los cuales aprendí la lógica y lo básico de la
                        programación, los lenguajes que me enseñaron en esos años fueron C++, JAVA, JAVA para
                        Android Studio, HTML, CSS, PHP
                    </p>
                </div>

                <div className="timeline-item">
                    <span className="date">2017 — Presente</span>
                    <h4>Ingeniero en Desarrollo de Sofware <span>Universidad Autónoma de Baja California Sur</span></h4>
                    <p>
                        Estudio la carrera de Ingeniería en Desarrollo de Software, en la cual consigo los conocimientos
                        de lenguajes de programación variados los cuales son, C++, JAVA, HTML, CSS, JAVASCRIPT, C#
                        para UNITY, KOTLIN, JAVA para Android Studio, todos estos lenguajes son aprendidos hasta
                        un nivel medio.
                        La carrera te prepara para distintas oportunidades laborales dandote varios caminos a seguir
                        tales como, Ingeniero de Redes, Ingeniero en Desarrollo Movil o Web, Ingeniero en Desarrollo
                        de Aplicaciones de Escritorio, entre otros tantos.
                    </p>
                </div>
            </div>            
        </div>
    )
}

export default Education
