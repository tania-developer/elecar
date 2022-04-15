import React from 'react';
import aboutPic from '../../../img/about.png';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className="about__container">
            <Fade left delay={2000} distance='40px'>
                <div className="about">
                    <img src={aboutPic} alt="aboutPic" />
                    <div className="about__card">
                        <p className="normal__font">2.500+</p>
                        <p className="smaller__font">Supercharges placed along popular routes</p>
                    </div>
                </div>
            </Fade>
            <Fade right delay={2000} distance='40px'>
                <div className="about__details">
                    <h3 className="about__title">Machines With <br/>Future Technology</h3>
                    <p className="smaller__font">
                        See the future with high-performance electric cars
                        produced by renowned brands. They feature futuristics builds and 
                        designs with new and innovative platforms that last a long time.
                    </p>
                    <button className='btn'>Know more</button>
                </div>
            </Fade>
        </div>
    );
};

export default About;