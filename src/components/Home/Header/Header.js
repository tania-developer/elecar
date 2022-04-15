import React, {useEffect, useState} from "react";
import logo from '../../../img/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    const [scrollbar, setScrollbar] = useState(false);

    const navBackground = () => {
        if(window.scrollY >= 80){
            setScrollbar(true);
        }
        else{
            setScrollbar(false);
        }
    }

    window.addEventListener('scroll', navBackground)

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        
    },[]);

    useEffect(() => {
        if(size.width > 768 && !menuOpen){
            setMenuOpen(true);
        }
    },[size.width,menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div className={scrollbar ? 'nav scroll' : 'nav'}>
            <a href="#home" className="nav__logo">
                <img src={logo} alt="" />
                <div className="nav__brand">
                    Elecar
                </div>
            </a>
            <div className={!menuOpen ? 'nav__menu active' : "nav__menu"}>
                <ul className='nav__list'>
                    <li className="nav__item">
                        <a href="#home" className="nav__link">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#popular" className="nav__link">Popular</a>
                    </li>
                    <li className="nav__item">
                        <a href="#feature" className="nav__link">Feature</a>
                    </li>
                </ul>
            </div>
            <div className="nav__toggle" onClick={menuToggleHandler}> 
                {menuOpen ? <FontAwesomeIcon icon={faBarsStaggered} /> : <FontAwesomeIcon icon={faXmark}/>}
            </div>
        </div>
    )
}

export default Header;