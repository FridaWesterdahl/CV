import React from 'react';
import './Components.css';

function Skills() {
    return (

        <div className='skills-wrapper'>
            <h1>SKILLS</h1>
            <div id="skills-container">
                <ul>
                    <div className='skills-background'>
                        <li className="skill csharp"><p>C#</p></li>
                    </div>
                    <div className='skills-background'>
                        <li className="skill js"><p>Javascript</p></li>
                    </div>
                    <div className='skills-background'>
                        <li className="skill css"><p>CSS</p></li>
                    </div>
                    <div className='skills-background'>
                        <li className="skill react"><p>React</p></li>
                    </div>
                    <div className='skills-background'>
                        <li className="skill html"><p>HTML</p></li>
                    </div>
                    <div className='skills-background'>
                        <li className="skill tsql"><p>T-SQL</p></li>
                    </div>
                    <div className='skills-background'>
                        <li className="skill ef"><p>Entity Framework</p></li>
                    </div>
                    <div className='skills-background'>
                        <li className="skill asp"><p>ASP.NET</p></li>
                    </div>
                </ul>
            </div>
        </div>

    )
}

export default Skills;