import React, {useEffect} from 'react';
import './portfolio.css'
import project1 from '../images/genshinpageThumbnail.png';

function Portfolio() {
    return (
        <section className="portfolio-section sec-padding" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-tittle">
                        <h2>Trabajos Recientes</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img src={project1} />
                        </div>
                        <h3 className="portfolio-item-title">GenshinImpact FanPage</h3>
                        <button type="button" className="btn view-project-btn">Ver proyecto</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>
                                    Es una pagina web que trata acerca 
                                    de los personajes del juego Genshin Impact
                                    desarrollada por la empresa MiHoYo en china
                                </p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li>Aun en desarrollo <span></span></li>
                                    <li>Tecnologias usadas - <span>React js, Css, Bootstrap 4</span></li>
                                    <li>Rol - <span>Backend / Frontend</span></li>
                                    <li>Ver resultado - <span><a href="" target="_blank">midominio.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                            
        </section>
    )
}

export default Portfolio
