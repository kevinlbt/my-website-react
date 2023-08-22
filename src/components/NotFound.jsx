import React from "react";

export default function NotFound () {

    return <div className="not-found-container">
                <div className="not-found-content m-5 sm:m-14 lg:m-12">
                    <div className="flex lg:justify-center items-center">
                        <a href="/"><i className="fa-solid fa-circle-arrow-left text-5xl m-4"></i></a>
                        <a href="/"><p className="m-2">revenir sur le site</p></a>
                    </div>
                    <h1>Page non trouvée (404)</h1>
                    <p className="w-2/3 lg:w-full">Désolé, la page que vous recherchez n'a pas été trouvée.</p>
                </div>
            </div>
}