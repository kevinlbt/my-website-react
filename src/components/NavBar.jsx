import React, { useState } from "react";
import logo from "../assets/logo/logo2.png"

export default function NavBar () {

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    function handleMobileMenuClick () {

        setDisplayMobileMenu(v => !v)
    }
    return <React.Fragment>
                <nav className="header_desktop">       
                    <img src={logo} alt="logo of my website"/>
                    <ul>
                        <li><a href="/#about">A propos</a></li>
                        <li><a href="/#portfolio">Portfolio</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul> 
                    <a href="/#portfolio" className="btn">Voir Portfolio</a>
                </nav>

                <nav className="header_mobile">
                    <img src={logo} alt="logo of my website" />
                    <i onClick={handleMobileMenuClick} className="fa-solid fa-bars"></i>
                    <div id="menu" className={`menu ${displayMobileMenu ? 'active-menu' : null}`}>
                        <i onClick={handleMobileMenuClick} className="close">&times;</i>
                        <ul>
                            <li><a href="/#about">A propos</a></li>
                            <li><a href="/#portfolio">Portfolio</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul> 
                    </div>
                </nav>
        </React.Fragment>
}