import React from "react";
import myself from "../assets/images/moi.webp"

export default function Header () {

    return <section className="head">
                <div className="bloc1">
                    <h2>Bienvenue, je suis Kevin, développeur web</h2>
                    <p>Je m'occupe de la création de sites et d'applications web, ainsi que de leur maintenance, de leur mise à jour et de leur amélioration continue. je peux travailler en collaboration avec des graphistes et des designers et je m'assure que l'aspect visuel du site est en accord avec les besoins du client.</p>
                    <a href="#about" className="btn">En savoir plus</a>
                </div>
                <div className="bloc2">
                    <img src={myself} alt="me with white background"/>
                    <div className="circle"></div>
                    <i className="fa-brands fa-css3-alt css"></i>
                    <i className="fa-brands fa-js js"></i>
                    <i className="fa-brands fa-html5 html"></i>
                    <i className="fa-brands fa-php php"></i>
                    <i className="fa-brands fa-github git"></i>
                    <i className="fa-solid fa-code code"></i>
                    <i className="fa-brands fa-react react"></i>
                </div>
            </section>
}