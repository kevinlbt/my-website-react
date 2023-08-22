import React, { useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify';
import Cookies from 'js-cookie';


const AUTH_TOKEN = "ZXOoRm5oxtAcGNbGMyHI7NJpIeZzaqdFNteUa0KM";

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

export default function Contact () {

    const [isFormDisplay, setIsFormDisplay] = useState(false)
    const cookieExists = Cookies.get('contacted');
    const [IfMailSend, setIfMailSend] = useState(false);
    const [mailResponse, setMailResponse] = useState(null);
    const [ifError, setIfError] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [replyTo, setReplyTo] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!replyTo || !name || !text || !subject || !firstname ) {
        setMailResponse("Veuillez remplir tous les champs.");
        setIfMailSend(true);
        setIfError(true);
        return;
        }
        if (!isValidEmail(replyTo)) {
        setMailResponse("Veuillez saisir une adresse email valide");
        setIfMailSend(true);
        setIfError(true);
        return;
        }

        if (cookieExists) {
        setMailResponse('Vous nous avez deja contacter, essayer plus tard.');
        setIfMailSend(true);
        setIfError(true);
        return;
        }

        const sanitizeFirstname = DOMPurify.sanitize(firstname);
        const sanitizeName = DOMPurify.sanitize(name);
        const sanitizeSubject = DOMPurify.sanitize(subject);
        const sanitizeText = DOMPurify.sanitize(text);
        const sanitizeReplyTo = DOMPurify.sanitize(replyTo);

        const data = {
        firstname: sanitizeFirstname,
        name: sanitizeName,
        subject: sanitizeSubject,
        text: sanitizeText,
        replyTo: sanitizeReplyTo
        };

        try {
        const response = await axios.post('https://email.api.kevinlebot.com/api/sendEmail', data, {
            headers: {
            'authorization': AUTH_TOKEN,
            'dest': "kevin.lebot@gmail.com",
            }
        });
        setIfError(false);
        setIfMailSend(true)
        setMailResponse(response.data)
        Cookies.set('contacted', true, { expires: 1 });
        } catch (error) {
        console.error(error);

        }
    };

    function HandleFirstnameChange(e) {
        setFirstname(e.target.value);
    }
    function HandleNameChange(e) {
        setName(e.target.value);
    }
    function HandleEmailChange(e) {
        setReplyTo(e.target.value);
    }
    function HandleSubjectChange(e) {
        setSubject(e.target.value);
    }
    function HandleMessageChange(e) {
        setText(e.target.value);
    }

    return <section className="contact" id="contact">

                <h3>Contacter - moi</h3>  
                
                <div className={`blocContact ${isFormDisplay ? 'fade-out-bloc' : 'fade-in'}`}>
                    <h4>Une question ? un projet ?</h4>
                    <p>Contact - moi pour pouvoir discuter de votre projet et voir ce qu'il est possible de faire.</p>
                    <button onClick={() => setIsFormDisplay(true)} className="btn">Clique ici</button>
                </div>
                 
                <div className={`formbloc ${isFormDisplay ? 'fade-in' : 'fade-out delayed'}`}>
                    <div className="coor">
                        <div>
                            <i className="fa-regular fa-envelope"></i>
                            <span></span>
                            <p>Email</p>
                        </div>
                        <p>kevin.lebot@hotmail.fr</p>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/kevin-l-8a5399132/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/kevinlbt" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.instagram.com/kevin_lbt/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    {IfMailSend ? <p className={`text-2xl text-center h-9 ${ifError ? "text-red-500" : "text-green-500"}`}>{mailResponse}</p> : <p className="h-9"></p>}
                    <form onSubmit={handleSubmit} method="POST">
                        <i onClick={() => setIsFormDisplay(false)} className="fa-solid fa-circle-xmark"></i>
                        <label htmlFor="name">Nom</label>
                        <div>
                            <input onChange={HandleNameChange} type="text" name="name" placeholder=" nom" className="inputS"/>
                            <input onChange={HandleFirstnameChange} type="text" name="firstname" placeholder=" prénom" className="inputS"/>
                        </div>
                        <label htmlFor="email" className="">Email</label>
                        <input onChange={HandleEmailChange} type="email" name="email" className="inputB" placeholder=" example@example.com"/>
                        <label htmlFor="subject" className="">Sujet</label>
                        <input onChange={HandleSubjectChange} type="text" name="subject" className="inputB" placeholder=" site internet"/>
                        <label htmlFor="textarea" className="">Message</label>
                        <textarea onChange={HandleMessageChange} name="message" cols="70" className="textArea"></textarea>
                        <button type="submit" className="btn">Envoyer</button>
                    </form>
                </div>  

            </section>
}