import React from 'react'
import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="row flex-end">
                    <button type="button" className="nav-toggler">
                        <span></span>
                    </button>
                    <nav className="nav">
                        <div className="nav-inner">
                            <ul>
                                <li><a href="#home" className="nav-item link-item">Inicio</a></li>
                                <li><a href="#about" className="nav-item link-item">Acerca de</a></li>
                                <li><a href="#portfolio" className="nav-item link-item">Portafilo</a></li>
                                <li><a href="#contact" className="nav-item link-item">Contacto</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>            
        </header>
    )
}

export default Header
