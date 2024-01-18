import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import './App.css';

function Contact() {
    const [state, handleSubmit] = useForm("xwkgpqpw");
    
    if (state.succeeded) {
        return  <p className="contact">Ваше сообщение отправлено!</p>;
        }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input
                id="name"
                type="name" 
                name="name"
                placeholder="Ваше имя"
                required
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <input
                id="email"
                type="email" 
                name="email"
                placeholder="Ваш электронный адрес"
                required
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="Ваше сообщение"
                cols="40" rows="5"
                required
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button className="btn-submit" type="submit" disabled={state.submitting}>
                Отправить</button>
        </form>
        <div class="social">
            <p className="goToInsta">Здесь вы также можете посмотреть мои изделия и написать мне</p>
            <a href="https://www.instagram.com/leonburgksenia?igsh=NGxmd2RmZ2dmZzBu" 
                target="_blank" rel="noopener noreferrer"
                className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="3x"/></a>
        </div>
        </div>
    )
}
export default Contact;