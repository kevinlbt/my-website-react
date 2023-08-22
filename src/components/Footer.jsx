import React from "react";

export default function Footer () {

    return <footer>
                <div className="footer-container">
                    <div className="footer-menu">
                        <ul>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                        <li><a href="https://www.linkedin.com/in/kevin-l-8a5399132/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/kevinlbt" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/kevin_lbt/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <a href="/legale">Mentions Légales</a>
                <p>@kevinlebot 2023</p>
            </footer>
}