import React from 'react';
import featureImg from '../../../img/features.png'
import featureMap from '../../../img/map.svg';
import './Features.css'

const Feature = () => {
    return (
        <div className="feature__container">
            <h2 className="popular__title">More Features</h2>
            <div className="feature__group">
                <img className='feature__img' src={featureImg} alt="featuresImg" />
                <div className="feature__data data1">
                    <p className="normal__font">800v</p>
                    <p className="smaller__font">Turbo</p>
                    <p className="smaller__font">Charging</p>
                </div>

                <div className="feature__data data2">
                    <p className="normal__font">350</p>
                    <p className="smaller__font">Km</p>
                    <p className="smaller__font">Range</p>
                </div>

                <div className="feature__data data3">
                    <p className="normal__font">480</p>
                    <p className="smaller__font">Km</p>
                    <p className="smaller__font">Travel</p>
                </div>
            </div>
            <div className="feature__map">
                <img src={featureMap} alt="" />
            </div>
        </div>
    );
};

export default Feature;