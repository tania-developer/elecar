import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGauge, faChargingStation,faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './Popular.css'


const PopularCard = (props) => {
   
    const { title, subtitle,imgUrl, time, speed, charge, price} = props.info;
    return (
        <div className="popular__card">
            <div className="shape shape__smaller"></div>
            <p className="card__title normal__font">{title}</p>
            <p className="smaller__font">{subtitle}</p>
            <div className="popular__img">
                {<img src={imgUrl} alt="porsche" /> }
            </div>
            {
                time && 
                <div className="popular__feature">
                <p className="smaller__font feature"><FontAwesomeIcon icon={faGauge}/> {time}</p>
                <p className="smaller__font feature"><FontAwesomeIcon icon={faClock}/> {speed}</p>
                <p className="smaller__font feature"><FontAwesomeIcon icon={faChargingStation}/> {charge}</p>
            </div>
            }
            <p className="price normal__font">{price}</p>
            <button className='popular__btn'><FontAwesomeIcon icon={faBagShopping}/></button>

        </div>
    );
};

export default PopularCard;