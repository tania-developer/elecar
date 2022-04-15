import React from 'react';
import offerBg from '../../../img/offer-bg.png';
import offer from '../../../img/offer.png'
import './Offer.css';
import Fade from 'react-reveal/Fade';

const Offer = () => {
    return (
        <div className="offer__container">
            <img src={offerBg} alt="backround_img" className="offer__bg" />

            <Fade left delay={1000} distance="40px">
                <div className="offer__data">
                    <h2 className="popular__title">
                        Do You Want To Receive <br/> Special Offers?
                    </h2>

                    <p className='description__font'>
                        Be the first to receive all the information about our products and services
                        new cars by subscribing to our email.
                    </p>

                    <button className="btn">Subscribe Now</button>
                </div>
            </Fade>
            <Fade right delay={1000} distance='40px'>
                <div className="offer__img">
                    <img src={offer} alt="" />
                </div>
            </Fade>
        </div>
    );
};

export default Offer;