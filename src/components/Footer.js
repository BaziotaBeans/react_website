import React from 'react'
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="content m-auto">
                <div className="left">
                    <ul className="site-content-list">
                        <li className="title">Pages</li>
                        <li><a href="#" className="link">Home</a></li>
                        <li><a href="#" className="link">Product</a></li>
                        <li><a href="#" className="link">Pricing</a></li>
                        <li><a href="#" className="link">About</a></li>
                        <li><a href="#" className="link">Contact</a></li>
                    </ul>
                    <ul className="site-content-list">
                        <li className="title">Tomothy</li>
                        <li><a href="#" className="link">Eleanor Edwards</a></li>
                        <li><a href="#" className="link">Ted Robertson</a></li>
                        <li><a href="#" className="link">Annette Russel</a></li>
                        <li><a href="#" className="link">Jennie Mckinney</a></li>
                        <li><a href="#" className="link">Gloria Richards</a></li>
                    </ul>
                    <ul className="site-content-list">
                        <li className="title">Jane Black</li>
                        <li><a href="#" className="link">Philip Jones</a></li>
                        <li><a href="#" className="link">Product</a></li>
                        <li><a href="#" className="link">Collen Russel</a></li>
                        <li><a href="#" className="link">Marvin Hawkins</a></li>
                        <li><a href="#" className="link">Bruce Simmons</a></li>
                    </ul>
                </div>
                <div className="right">
                    <div className="location">
                        <span className="icon"><i class="uil uil-map-marker"></i></span>
                        <span className="text-info">7480 Mockingbird Hill Undefined</span>
                    </div>
                    <div className="contact">
                        <span className="icon"><i class='bx bx-mobile'></i></span>
                        <span className="text-info">(239) 555-0108</span>
                    </div>
                    <div className="social-media">
                        <a href="#"><i class="uil uil-twitter"></i></a>
                        <a href="#"><i class="uil uil-facebook"></i></a>
                        <a href="#"><i class="uil uil-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
