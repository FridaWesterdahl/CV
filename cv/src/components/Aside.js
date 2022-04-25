import React from 'react';
import './Aside.css';
import pic from '../images/IMG_20200803_202544_338.jpg';
import map from '../images/map.png';

function Aside() {
    return (
        <div className='aside'>
            <img src={pic} alt='Frida Westerdahl'></img>
            <div className='about-me-text'>
                I'm a 26 year old .Net developer student at Teknikhögskolan looking for my
                first internship/LIA during the weeks 42-49.
                <div className='location'>
                    <img id="map" src={map} alt="map"></img>&ensp;NORRKÖPING
                </div>
            </div>
        </div>
    )
}

export default Aside;