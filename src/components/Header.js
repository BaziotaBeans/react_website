import React from 'react';
import '../css/Header.css';
import Navbar from './Navbar';
import ContentHero from './ContentHero';

const Header = ()=>{
    return (
        <header className="hero">
            <Navbar/>
            <ContentHero/>
        </header>
    );
};


export default Header;