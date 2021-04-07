import React from 'react';
import { Macbook } from '../utils/Images';
import '../css/DesktopSection.css';


const DesktopSection = ()=>{
    return (
        <section className="desktop-section m-auto">
            <div className="desktop-section__left">
                <h2>Fatest way to organize</h2>
                <p>
                    Most calendars are designed for teams. Slate is designed for freelancers. 
                </p>
                <button className="btn btn-blue">
                    Try For Free
                </button>
            </div>
            <div className="desktop-section__right">
                <img src={Macbook} alt="Macbook"/>
            </div>
        </section>
    );
};

export default DesktopSection;