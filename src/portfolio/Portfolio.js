import React, {useEffect} from 'react';
import './portfolio.css'
import project1 from '../images/genshinpageThumbnail.png';
import project2 from '../images/imgPage2.png';
import project3 from '../images/capturapaginaprofeco.png';
import project4 from '../images/recargasApi.PNG'
import project5 from  '../images/muestra.PNG';
import noImage from '../images/noImage.jpg'

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

                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img src={project2} />
                        </div>
                        <h3 className="portfolio-item-title">Covid-19 Informacion</h3>
                        <button type="button" className="btn view-project-btn">Ver proyecto</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>
                                    Pagina desarrollada para un proyecto de universidad
                                    con P5.js la cual informa del estado actual de la pandemia
                                    usando varias API's gubernamentales las cuales traen dicha
                                    informacion sobre los contagios entre otras cosas, a su vez se
                                    tiene un mapa el cual indica en que nivel de contagios se encuentra
                                    por estado. 
                                </p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li>Finalizado - <span>13 / JUNIO / 2021</span></li>
                                    <li>Tecnologias usadas - <span>Html, Css, JavaScript, P5.js</span></li>
                                    <li>Rol - <span>Backend / Frontend</span></li>
                                    <li>Ver resultado - <span><a href="https://katzunestarky.github.io/ProyectoGraficacion/" target="_blank">https://katzunestarky.github.io/ProyectoGraficacion/</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img src={project3} />
                        </div>
                        <h3 className="portfolio-item-title">Profeco - Automatizacion</h3>
                        <button type="button" className="btn view-project-btn">Ver proyecto</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>
                                    Pagina diseñada para profeco la cual es usada 
                                    para la automatizacion de procesos que fue pedida
                                    como proyecto en practicas profesionales, en la cual
                                    se usan varias funciones para que ciertos trabajos se 
                                    hagan de manera casi automatica
                                </p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li>Finalizado - <span>14 / OCTUBRE / 2021</span></li>
                                    <li>Tecnologias usadas - <span>PHP, Css, JavaScript, Bootstrap 4, MySql</span></li>
                                    <li>Rol - <span>Backend / Frontend</span></li>
                                    <li>Ver resultado - <span><a href="http://profeco.infinityfreeapp.com" target="_blank">http://profeco.infinityfreeapp.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img src={project4} />
                        </div>
                        <h3 className="portfolio-item-title">Caliventa - Sistemas de Recargas con API Rest</h3>
                        <button type="button" className="btn view-project-btn">Ver proyecto</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>
                                    Implementacion de sistema de recargas telefonicas y pago de servicios
                                    con API Rest en C# para el sistema caliventa de las tiendas CheckPoint   
                                </p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li>En desarrollo<span></span></li>
                                    <li>Tecnologias usadas - <span>C#, XAML, Api Rest, .Net, PostgresSQL, Dbeaver</span></li>
                                    <li>Rol - <span>Backend / Frontend</span></li>
                                    <li>Ver codigo <span><a href="https://github.com/KatzuneStarky/RecargasApiRest.git" target="_blank">https://github.com/KatzuneStarky/RecargasApiRest.git</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img src={project5} />
                        </div>
                        <h3 className="portfolio-item-title">Samiithedarki Art Website</h3>
                        <button type="button" className="btn view-project-btn">Ver proyecto</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>
                                    Pagina para la muestra y venta de arte de la artista Samiithedarki 
                                    la cual se podra contactar desde dicha pagina.
                                    Artista 2D digital y tradicional
                                </p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li>En desarrollo<span></span></li>
                                    <li>Tecnologias usadas - <span>Reactjs</span></li>
                                    <li>Rol - <span>Backend / Frontend</span></li>
                                    <li>Ver resultado - <span><a href="" target="_blank">Aun en desarrollo</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <div className="portfolio-item-thumbnail">
                            <img src={noImage} />
                        </div>
                        <h3 className="portfolio-item-title">ArtWebsite - En Desarrollo</h3>
                        <button type="button" className="btn view-project-btn">Ver proyecto</button>
                        <div className="portfolio-item-details">
                            <div className="description">
                                <p>
                                    Pagina para la presentacion de trabajos artisticos de un amigo
                                    el cual se dedica al arte 2D en digital y el arte 3D en blender                                    
                                </p>
                            </div>
                            <div className="general-info">
                                <ul>
                                    <li>En Desarrollo<span></span></li>
                                    <li>Tecnologias usadas - <span>React js</span></li>
                                    <li>Rol - <span>Backend / Frontend</span></li>
                                    <li>Ver resultado - <span><a href="" target="_blank">Aun en desarrollo</a></span></li>
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
