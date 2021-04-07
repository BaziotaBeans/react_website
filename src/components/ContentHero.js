import React from 'react';
import '../css/ContentHero.css';
import Button from './Button';

const ContentHero = () =>{
    const button_info = {
        color: 'blue',
        text: 'Try For Free'
    }
    return (
        <div className="contentHero">
            <h1 className="contentHero-title">The best products start with Figma</h1>
            <p>Most calendars are designed for teams. Slate is designed for freelancers</p>
            <Button {...button_info}/>
        </div>
    );
};

export default ContentHero;