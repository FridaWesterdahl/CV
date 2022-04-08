import React from 'react';
import './Footer.css';
import github from '../images/Octocat.png';

function Footer() {
    return (
        <div className="footer" >
            <div id="footer-items" >
                <button><a href="tel:+46706409529" >Phone: +46706409529 </a></button>
                <button><a href="mailto:fridaawesterdahl@gmail.com" > E-mail: fridaawesterdahl@gmail.com </a></button>
                <button id="github"><a href="https://github.com/FridaWesterdahl"><img src={github} alt="github"></img>&ensp;GitHub</a ></button>
            </div>
        </div>
    )
}

export default Footer;