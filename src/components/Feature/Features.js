import React from 'react';
import featureImg from '../../img/features.png'

const Feature = () => {
    return (
        <div className="feature__container">
            <h2 className="about__title">More Features</h2>
            <div className="feature__img">
                <img src={featureImg} alt="featuresImg" />
                <div className="feature__data data1">
                    <p className="normal__font">800v</p>
                    <p className="small__font">Turbo</p>
                    <p className="small__font">Charging</p>
                </div>

                <div className="feature__data data2">
                    <p className="normal__font">350</p>
                    <p className="small__font">Km</p>
                    <p className="small__font">Range</p>
                </div>

                <div className="feature__data data3">
                    <p className="normal__font">480</p>
                    <p className="small__font">Km</p>
                    <p className="small__font">Travel</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;