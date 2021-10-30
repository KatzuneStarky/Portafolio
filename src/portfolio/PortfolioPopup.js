import React from 'react'
import './portfolio.css';
import project1 from '../images/genshinpageThumbnail.png';
import { AiFillCloseCircle } from 'react-icons/ai';

function PortfolioPopup() {
    return (
        <div className="portfolio-popup">
            <div className="pp-inner">
                <div className="pp-content">
                    <div className="pp-header">
                        <button type="button" className="btn pp-close"><AiFillCloseCircle /></button>
                        <div className="pp-thumbnial">
                            <img src={project1} alt="pp-thumbnail" />
                        </div>
                        <h3></h3>
                    </div>
                    <div className="pp-body">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPopup
