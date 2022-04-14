import React from 'react';
import offerBg from '../../img/offer-bg.png';
import offer from '../../img/offer.png'
import './Offer.css'

const Offer = () => {
    return (
        <div className="offer__container">
            <img src={offerBg} alt="backround_img" className="offer__bg" />

            <div className="offer__data">
                <h2 className="popular__title">
                    Do You Want To Receive <br/> Special Offers?
                </h2>

                <p className='offer__description smaller__font'>
                    Be the first to receive all the information about our products and services
                    new cars by subscribing to our email.
                </p>

                <button className="btn">Subscribe Now</button>
            </div>
            <img src={offer} alt="" className="offer__img"/>
        </div>
    );
};

export default Offer;