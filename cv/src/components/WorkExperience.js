import React, { useState } from 'react';
import './Components.css';

function WorkExperience() {
    const [click1, setClick1] = useState(false);
    const handleClick1 = () => setClick1(!click1);

    const [click2, setClick2] = useState(false);
    const handleClick2 = () => setClick2(!click2);

    const [click3, setClick3] = useState(false);
    const handleClick3 = () => setClick3(!click3);

    const [click4, setClick4] = useState(false);
    const handleClick4 = () => setClick4(!click4);

    const [click5, setClick5] = useState(false);
    const handleClick5 = () => setClick5(!click5);

    return (
        <div className='work-ex'>
            <h1>WORK EXPERIENCE</h1>
            <div id="workex-container">
                <ul>
                    <li>
                        <h2>Espresso House, barista</h2>
                        <h3>2021-10-01 - ongoing</h3>
                        <p className={click1 ? 'info' : 'hidden'}>Today I am working extra as a barista.
                            Serving customers, working with the espresso machine and food prepping.</p>
                        <button className={click1 ? 'close' : 'show-more'} onClick={handleClick1}></button>
                    </li>
                    <li>
                        <h2>Espresso House, coffeeshop manager</h2>
                        <h3>2019-10-01 - 2021-09-30</h3>
                        <p className={click2 ? 'info' : 'hidden'}>Management of two different coffeeshops
                            of different sizes and revenue. Handleing a staff group up to 14 people with full
                            staff and financial responsibility.</p>
                        <button className={click2 ? 'close' : 'show-more'} onClick={handleClick2}></button>
                    </li>
                    <li>
                        <h2>Nordic Wellness, receptionist</h2>
                        <h3>2018-09-01 - 2019-09-30</h3>
                        <p className={click3 ? 'info' : 'hidden'}>Customer service and taking care of the
                            gym and equipment.</p>
                        <button className={click3 ? 'close' : 'show-more'} onClick={handleClick3}></button>
                    </li>
                    <li>
                        <h2>McDonald's, shiftleader</h2>
                        <h3>2017-04-01 - 2018-08-31</h3>
                        <p className={click4 ? 'info' : 'hidden'}>Leadership during the shift and plan
                            the staffing.</p>
                        <button className={click4 ? 'close' : 'show-more'} onClick={handleClick4}></button>
                    </li>
                    <li>
                        <h2>Apoteket Hjärtat, in-/outbound</h2>
                        <h3>2015-09-01 - 2017-02-31</h3>
                        <p className={click5 ? 'info' : 'hidden'}>Working at Apoteket Hjärtats warehouse
                            with both inbound and outbound.</p>
                        <button className={click5 ? 'close' : 'show-more'} onClick={handleClick5}></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WorkExperience;