import React, { useEffect, useState } from  "react";
import axios from 'axios';
import {useElementOnScreen} from '../utils/useElementOnScreen'


const token = "e98e1b6a60e1cce2296a55b9bbb7a62e16436ddea249e42b733df5df240520867e8a9fa4ee90332b8cc7d1d38b40ef8492a07a60c93e912e2ce184470272893f5e6b65fa3fb6a2c0668e4daedd88dd5fda997e557622a86f784a70fe60d071c9e1d55afd4e6c63b3701142bb694a7bc25d03f6aadcadb1a8edc87019c1c9d5e0";

function RightProjectBloc ({title, description, link, image, date, finish, isVisible}) {


    return <div className={`projet1 ${isVisible ? "active_projet_move" : null}`}>
                <div className="flex items-center">
                    <h3>{title}</h3>
                    <span className="orange"></span>
                    <p className="date_projet">{date}</p>
                </div>
                <p>{description}</p>
                <span className="line"></span>
                <div className="img_link">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt="screen of jeremy website"/>
                    </a>
                    {finish ? 
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        :
                        <i className="fa-solid fa-spinner"></i>    
                    }        
                </div>
            </div>
}

function LeftProjectBloc ({title, description, link, image, date, finish, isVisible}) {

    return <div className={`projet2 ${isVisible ? "active_projet_move" : null}`}>
                <div className="flex items-center">
                    <p className="date_projet">{date}</p>
                    <span className="orange"></span>
                    <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <span className="line"></span>
                <div className="img_link">
                    {finish ? 
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-arrow-left"></i>
                        </a>
                        :
                        <i className="fa-solid fa-spinner"></i>    
                    }
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt="screen of julie website"/>
                    </a>
                </div>
            </div>

}
export default function Portfolio () {

    const [project, setProject] = useState([]);

    useEffect(() => {
        (async function () {
          const { data } = await axios.get("https://my-strapi.kevinlebot.com/api/projects?pagination[page]=1&pagination[pageSize]=100&populate=*&sort=id%3Adesc", {
            headers: {
                Authorization: `Bearer ${token}`,
              },
          });
          //console.log(data.data);
          const pairsOfData = Array.from({ length: Math.ceil(data.data.length / 2) }, (v, i) =>
                data.data.slice(i * 2, i * 2 + 2)
            );
          setProject(pairsOfData)
          //console.log(pairsOfData)
        })();
      }, [setProject])

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    })

    return <section className="portfolio" id="portfolio">
                <h2>Portfolio</h2>
                <div ref={containerRef}className="vertical-line"></div>

                {project.map((projet) => (
                    <div key={projet[0].id} className="blocsite">
                        <RightProjectBloc 
                            isVisible={isVisible} 
                            title={projet[0].attributes.titre} 
                            description={projet[0].attributes.Description} 
                            link={projet[0].attributes.link} 
                            date={projet[0].attributes.date} 
                            finish={projet[0].attributes.finish} 
                            image={"https://my-strapi.kevinlebot.com"+projet[0].attributes.image.data.attributes.url}
                        />
                        {projet[1] ? <LeftProjectBloc 
                            isVisible={isVisible} 
                            title={projet[1].attributes.titre} 
                            description={projet[1].attributes.Description} 
                            link={projet[1].attributes.link} 
                            date={projet[1].attributes.date} 
                            finish={projet[1].attributes.finish} 
                            image={"https://my-strapi.kevinlebot.com"+projet[1].attributes.image.data.attributes.url}
                        />
                        : null
                        }
                    </div>        
                ))}
                

            </section>
}