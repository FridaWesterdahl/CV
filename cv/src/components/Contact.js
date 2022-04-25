import React from 'react';
import './Components.css';
import phone from '../images/call.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

function Contact() {
    return (
        <div className='contact'>
            <h1>CONTACT</h1>
            <div id="contact-container">
                <div id="phone">
                    <img id="phone-icon" src={phone} alt="phone"></img>
                    <a href="tel:+46706409529">+46706409529</a>
                </div>
                <div id="email">
                    <img id="email-icon" src={email} alt="email"></img>
                    <a href="mailto:fridaawesterdahl@gmail.com">fridaawesterdahl@gmail.com</a>
                </div>
                <div id="linkedin">
                    <img id="linkedin-icon" src={linkedin} alt="linkedin"></img>
                    <a href="https://www.linkedin.com/in/fridawesterdahl/">LinkedIn</a>
                </div>
                <div id="gh">
                    <img id="gh-icon" src={github} alt="github"></img>
                    <a href="https://github.com/FridaWesterdahl">GitHub</a>
                </div>
            </div>

        </div>
    )
}

export default Contact;