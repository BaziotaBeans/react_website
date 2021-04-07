import React, {useState} from 'react';
import {Logo} from '../utils/Images';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';

const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggleMenu = () =>{
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    };
    const ScrollLink = Scroll.Link
    return (
        <div className="nav-container m-auto">
            <nav className="navbar">
                <div className="logo-mobile">
                    <img src={Logo} alt="Logo" className="logo"/>
                </div>
                <div className={`menu-toggle ${toggleMenu ? 'is-active':''}`} id="mobile-menu" onClick={handleToggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-menu ${toggleMenu ? 'active':''}`}>
                    <li><Link  to="#" className="nav-links">Home</Link></li>
                    <li><a href="#" className="nav-links">Product</a></li>
                    <li><ScrollLink 
                            to="pricing" 
                            className="nav-links"
                            to="pricing" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >
                        Pricing
                    </ScrollLink></li>
                    <li><a href="#" className="nav-links">About</a></li>
                    <li><ScrollLink 
                        to="contact"
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className="nav-links">
                        Contact</ScrollLink>
                    </li>
                    <div className="logo-desktop">
                        <img src={Logo} alt="Logo" className="logo"/>
                    </div>
                </ul>
                <div className="social-media">
                    <a href="#"><i className="uil uil-twitter"></i></a>
                    <a href="#"><i className="uil uil-facebook"></i></a>
                    <a href="#"><i className="uil uil-linkedin"></i></a>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;