import React from 'react';
import logo2 from '../../../img/logo2.png';
import logo1 from '../../../img/logo1.png';
import logo3 from '../../../img/logo3.png';

const BrandsBtn = () => {
    return (    
        <ul>
            <li>
                <button className='brand__item'>
                    <span>All</span>
                </button>
            </li>
            <li>
                <button className='brand__item'>
                    <img src={logo3} alt="" />
                </button>
            </li>
            <li>
                <button className='brand__item'>
                    <img src={logo2} alt="" />
                </button>
            </li>
            <li>
                <button className='brand__item'>
                    <img src={logo1} alt="" />
                </button>
            </li>
        </ul>    
    );
};

export default BrandsBtn;