import React from 'react';
import logo from '../../../img/favicon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './Footer.css';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className="footer">
            <div className="shape shape__big"></div>
            <div className="shape shape__small"></div>

            <Fade top delay={1000} distance='50px'>
            <div className="footer__container grid">
                <div className="footer__content">
                    <a href="#home" className="nav__logo">
                        <img src={logo} alt="Logo" />
                    <div className="nav__brand">
                        Elecar
                    </div>
                    </a>
                    <p className="description__font">
                        We offer the best electric cars of <br/>
                        the most recognized brands in <br/>
                        the world.
                    </p>
                </div>
                <div className="footer__content">
                    <h3 className="normal__font">Company</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#about" className="smaller__font">About</a>
                        </li>
                        <li>
                            <a href="#" className="smaller__font">Cars</a>
                        </li>
                        <li>
                            <a href="#" className="smaller__font">History</a>
                        </li>
                        <li>
                            <a href="#" className="smaller__font">Shop</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="normal__font">Information</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="smaller__font">Request a quote</a>
                        </li>
                        <li>
                            <a href="#" className="smaller__font">Find a dealer</a>
                        </li>
                        <li>
                            <a href="#" className="smaller__font">Contact us</a>
                        </li>
                        <li>
                            <a href="#" className="smaller__font">Services</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="normal__font">Follow us</h3>
                    <ul className="footer__social">
                        <li>
                            <a href="#" className="footer__social-link">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer__social-link">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer__social-link">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </Fade>
            <span className="footer__copy smaller__font">
               <p> &#169; Tania. All rights reserved.</p>
            </span>
        </div>
    );
};

export default Footer;