import React, { useState } from "react";
import meAbout from "../assets/images/moi2.webp";

export default function About () {

    const [isTextAboutActive, setIsTextAboutActive] = useState("me");

    return <section className="about" id="about">
                <h3>A propos de moi</h3>

                <div className="aboutbloc">
                    <div className="menu">
                        <img src={meAbout} alt="me with white background for about part"/>
                        <button onClick={() => setIsTextAboutActive("me")} className={`${isTextAboutActive === "me" ? "activeButton" : null}`}>Moi</button>
                        <button onClick={() => setIsTextAboutActive("dev")} className={`${isTextAboutActive === "dev" ? "activeButton" : null}`}>Développement web</button>
                        <button onClick={() => setIsTextAboutActive("photo")} className={`${isTextAboutActive === "photo" ? "activeButton" : null}`}>Photographie</button>       
                    </div>
                    
                    {isTextAboutActive === "me" ? 
                        <div className="textme">
                            <h4>Moi</h4>
                            <p>Diplômé d'une maîtrise en énergie et génie climatique, j'ai travaillé en tant que chargé d'études clients dans un bureau d'études, 
                            mes tâches étaient de réaliser les plans de pose du plancher chauffant, le suivi de chantier en coordination avec le commercial 
                            concerné ainsi que le service clients par téléphone. Suite à ce poste j'ai décidé de m'expatrier en Australie pendant 1 an et demi
                             oû j'ai travaillé dans plusieurs domaines plus manuels, à l'opposé de mon précèdent poste, comme l'agriculture ou les animaux.
                              j'ai décidé à mon retour en France de me reconvertir dans un domaine qui m'a toujours attiré lié à l'informatique et plus particulièrement dans le web.</p>
                        </div>
                        :
                        null
                    }
                    {isTextAboutActive === "dev" ? 
                        <div className="textme">
                            <h4>Développement web</h4>
                            <p>J'ai donc fais une formation pour devenir développeur intégrateur web avec la 3W Academy qui a duré 6 mois. j'ai pu apprendre plusieurs langages 
                                de programmation comme le PHP ou le JavaScript et différentes techniques comme la programmation Orienté Object, et j'ai commencé à coder mon
                                premier site rapidement. Maintenant diplômé en développement web, je souhaite travailler ou continuer mon apprentissage dans ce domaine qui me passionne.</p>
                        </div>
                        :
                        null
                    }
                    {isTextAboutActive === "photo" ? 
                        <div className="textme">
                            <h4>Photographie</h4>
                            <p>Passionné par la photographie, j'utilise mon temps libre pour explorer le monde qui m'entoure avec mon appareil photo. Je me suis essayé à differents
                                types de photo comme la photographie de paysage, la photographie de rue, la photographie de portrait ou la photographie animalière. Je suis donc 
                                à même de faire des photos sur demande si nécessaire. </p>
                        </div>
                        :
                        null
                    }
                </div>

            </section>
}