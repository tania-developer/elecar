import React from 'react';
import homePic from '../../img/home.png'
import './Home.css'
import { faTemperatureQuarter, faBolt, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className="home">
            <div className="shape shape__big"></div>
            <div className="shape shape__small"></div>
            <h1 className="title">Choose The Best Car</h1>
            <p className='normal__font' style={{marginBottom:'.5rem'}}>Porsche Mission E</p>
            <p className="smaller__font"><FontAwesomeIcon icon={faBolt} style={{color: 'hsl(219, 69%, 56%)',marginRight: '10px'}}/>Electric Car</p>
            <div className="home__img">
                <img src={homePic} alt="" />    
            </div>
            <div className="feature__div">
                <div className="feature">
                    <FontAwesomeIcon icon={faTemperatureQuarter} className="feature__icon"/>
                    <p className='normal__font'>24</p>
                    <p className="smaller__font">Temperature</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faClock} className="feature__icon"/>
                    <p className='normal__font'>873</p>
                    <p className="smaller__font">Milezes</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faBolt} className="feature__icon"/>
                    <p className='normal__font'>94%</p>
                    <p className="smaller__font">Battery</p>
                </div>
            </div>
            <a href="#about" className='start__btn normal__font'>START</a>
        </div>
    );
};

export default Home;