import React, { useState } from "react";

export default function Contact () {

    const [isFormDisplay, setIsFormDisplay] = useState(false)

    return <section className="contact">

                <h3>Contacter - moi</h3>  

                <div className={`blocContact ${isFormDisplay ? null : "active_form"}`}>
                    <h4>Une question ? un projet ?</h4>
                    <p>Contact - moi pour pouvoir discuter de votre projet et voir ce qu'il est possible de faire.</p>
                    <button onClick={() => setIsFormDisplay(true)} className="btn">Clique ici</button>
                </div>
                 
                <div className={`formbloc ${isFormDisplay ? "active_form" : null}`}>
                    <div className="coor">
                        <div>
                            <i className="fa-regular fa-envelope"></i>
                            <span></span>
                            <p>Email</p>
                        </div>
                        <p>kevin.lebot@hotmail.fr</p>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/kevin-l-8a5399132/"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/kevinlbt"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.instagram.com/kevin_lbt/"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>

                    <form method="POST">
                        <i onClick={() => setIsFormDisplay(false)} className="fa-solid fa-circle-xmark"></i>
                        <label for="name">Nom</label>
                        <div>
                            <input type="text" name="name" placeholder=" nom" className="inputS"/>
                            <input type="text" name="firstname" placeholder=" prénom" className="inputS"/>
                        </div>
                        <label for="email" className="">Email</label>
                        <input type="email" name="email" className="inputB" placeholder=" example@example.com"/>
                        <label for="subject" className="">Sujet</label>
                        <input type="text" name="subject" className="inputB" placeholder=" site internet"/>
                        <label for="textarea" className="">Message</label>
                        <textarea name="message" cols="70" className="textArea"></textarea>
                        <button type="submit" className="btn">Envoyer</button>
                    </form>
                </div>  

            </section>
}