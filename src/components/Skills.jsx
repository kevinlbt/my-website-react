import React, { useState } from "react";
import orbe from "../assets/images/test.png"
import {useElementOnScreen} from '../utils/useElementOnScreen'

function Circle ({title, number}) {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
    })

    return <div className={`circle`+number}>
                <div className="circle big" ref={containerRef}>
                    <div className={`${isVisible ? "circlebis" : null}`}>
                        <div className="item layer-1">
                            <div className="fill"></div>
                        </div>
                        <div className="item layer-2">
                            <div className="fill"></div>
                        </div>
                    </div>
                </div>
                <div className="circle white"></div>
                <div className="circle white small"></div>
                <p>{title}</p>
            </div>
}


export default function Skills () {

    const [activeButton, setActiveButton] = useState("front");
   
    function HandleActiveButton (type) {

        setActiveButton(type);
    }

    return <section className="skills">
                <div className="skillsdef">
                    <div className="skillsimg">
                        <img src={orbe} alt="drawing of circle with circle inside like connection from each other"/>
                    </div>
                    <div className="textskills">
                        <h1>Compétences</h1>
                        <p>J'utilise du HTML, du SCSS, du javascript et du php principalement, que j'ai appris à maitriser au cours de ma formation et des projets réalisés. Mais je peux utiliser d'autres technologies suivant le projet.</p>
                        <button onClick={() => HandleActiveButton("front")} className={`${activeButton === "front" ? "active_button" : null}`}>front-end</button>
                        <button onClick={() => HandleActiveButton("back")} className={`${activeButton === "back" ? "active_button" : null}`}>back-end</button>
                    </div>
                </div>
                <div className={`circleskills ${activeButton === "front" ? "circles_display" : null}`}>
                    <Circle title={"html"} number={1}/> 
                    <Circle title={"css/scss"} number={2}/>
                    <Circle title={"javascript"} number={3}/>
                    <Circle title={"React"} number={4}/>
                    <Circle title={"photoshop"} number={5}/>
                </div>
                <div className={`circleskills ${activeButton === "back" ? "circles_display" : null}`}>
                    <Circle title={"php"} number={6}/>
                    <Circle title={"sql"} number={7}/>
                    <Circle title={"Strapi"} number={8}/>
                </div>
            </section>
}