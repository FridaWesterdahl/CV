import React from 'react';
import './Components.css';
import pic from '../images/code9.jpg';

function AboutMe() {
    return (
        <div className='about-me'>
            <h1>ABOUT ME</h1>
            <p>I started my programming journey at
                <a href="https://teknikhogskolan.se/utbildningar/net-utvecklare/"> Teknikhögskolan</a> in
                august 2021. I have always had an interest for tech and how
                things are working, <i>how does this thing work like the
                    way it does?</i> I love new learnings and to challenge myself.
                When it comes to my work history I have always come to an end
                where I feel a little bit trapped, like I know how everything
                works here. Ofcourse there are always things to improve but there
                are no longer a challenge. Therefore, I think a career as a
                programmer is the way to go for me where everything is constantly
                moving forward.
            </p>
            <div>
                <img src={pic} alt="me-pic"></img>
            </div>
        </div>
    )
}

export default AboutMe;