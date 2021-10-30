import React, {useEffect} from 'react'
import './Home.css';
import bg from '../images/bg.jpg';
import About from '../About/About';
import Portfolio from '../portfolio/Portfolio';
import PortfolioPopup from '../portfolio/PortfolioPopup';
import Contact from '../contact/Contact';
import Header from '../Header/Header';

function Home() {

    useEffect(() => {

        const tabsContainer = document.querySelector(".about-tabs"),
        aboutSection = document.querySelector(".about-section");

        tabsContainer.addEventListener("click", (e)=>{
            if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
                tabsContainer.querySelector(".active").classList.remove("active");
                e.target.classList.add("active");    
                const target = e.target.getAttribute("data-target");
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                aboutSection.querySelector(target).classList.add("active");            
            }
        });

        document.addEventListener("click", (e) =>{
            if(e.target.classList.contains("view-project-btn")){
                togglePortfolioPopup();
                document.querySelector(".portfolio-popup").scrollTo(0, 0);
                portfolioItemDetails(e.target.parentElement);
            }
        })  
        
        function togglePortfolioPopup(){
            document.querySelector(".portfolio-popup").classList.toggle("open");
            document.body.classList.toggle(".hide-scrolling");
            document.querySelector(".main").classList.toggle("fade-out");
        }        

        function portfolioItemDetails(portfolioItem){        

            document.querySelector(".pp-thumbnial img").src =
            portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

            document.querySelector(".pp-header h3").innerHTML = 
            portfolioItem.querySelector(".portfolio-item-title").innerHTML;

            document.querySelector(".pp-body").innerHTML = 
            portfolioItem.querySelector(".portfolio-item-details").innerHTML;
        }

        document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);
        document.addEventListener("click", (e) => {
            if(e.target.classList.contains(".pp-inner")){
                togglePortfolioPopup();
            }
        });

        /* MENU */
       
        const navToggler = document.querySelector(".nav-toggler");
        navToggler.addEventListener("click", () =>{
            hideSection();
            toggleNavbar();
            document.body.classList.toggle(".hide-scrolling");
        })

        function hideSection(){
            document.querySelector("section.active").classList.toggle("fade-out");
        }

        function toggleNavbar(){
            document.querySelector(".header").classList.toggle("active");
        }

        document.addEventListener("click", (e) =>{
            if(e.target.classList.contains("link-item") && e.target.hash !== ""){
                document.querySelector(".overlay").classList.add("active");
                navToggler.classList.add("hide");
                if(e.target.classList.contains("nav-item")){
                    toggleNavbar();
                }else{
                    console.log("false");
                }
                const elemento = document.querySelector(e.target.hash);
                setTimeout(() => {
                    document.querySelector("section.active").classList.remove("active", "fade-out");
                    elemento.classList.add("active");
                    window.scrollTo(0, 0);
                    document.body.classList.remove("hide-scrolling");
                    navToggler.classList.remove("hide");
                    document.querySelector(".overlay").classList.remove("active");
                }, 500)
            }
        })
    });
    return (
        <>
            <div className="main">
            <Header />
            <section className="home-section align-items-center active" id="home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="home-text">
                            <p>Hola, Soy</p>
                            <h1>Adan Ramirez</h1>
                            <h2>Programador Web / Desarrollador de Software</h2>
                            <a href="#about" className="btn link-item">Mas Acerca de Mi</a>
                            <a href="#portfolio" className="btn link-item">Portafolio</a>
                        </div>
                        <div className="home-img">
                            <div className="img-box">
                                <img src={bg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About /> 
            <Portfolio />   
            <Contact />       
        </div>
        <PortfolioPopup />
        </>
    )
}

export default Home
