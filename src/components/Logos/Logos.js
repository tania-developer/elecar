import React from 'react';
import logo1 from '../../img/logo1.png'
import logo2 from '../../img/logo2.png'
import logo3 from '../../img/logo3.png'
import logo4 from '../../img/logo4.png'
import logo5 from '../../img/logo5.png'
import logo6 from '../../img/logo6.png'
import './Logos.css';

const Logos = () => {
    return (
        <div className='logos__container'>
            <div className="logos__img">
                <img src={logo1} alt="" />
            </div>
            <div className="logos__img">
                <img src={logo2} alt="" />
            </div>
            <div className="logos__img">
                <img src={logo3} alt="" />
            </div>
            <div className="logos__img">
                <img src={logo4} alt="" />
            </div>
            <div className="logos__img">
                <img src={logo5} alt="" />
            </div>
            <div className="logos__img">
                <img src={logo6} alt="" />
            </div>
        </div>
    );
};

export default Logos;