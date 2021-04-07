import React from 'react'
import { Amazon, Google, Microsoft, Uber, Dropbox, } from '../utils/Images';
import '../css/PartnersSection.css';
import Button from './Button';


const PartnersSection = () => {
    const button_info = {
        color: 'blue',
        text: 'Try For Free'
    }
    return (
        <section className="partners-section m-auto">
            <div className="partners-section-text">
                <h2>Partners</h2>
                <p>Most calendars are designed for teams. Slate is designed for freelancers</p>
            </div>
            <img src={Google} alt="google" className="first-partinr-image"/>
            <div className="partners-section-items">
                <div className="items">
                    <span className="partner-name">Google</span>
                    <img src={Google} alt="google"/>
                </div>
                <div className="items">
                    <span className="partner-name">amazon</span>
                    <img src={Amazon} alt="amazon"/>
                </div>
                <div className="items">
                    <span className="partner-name">Microsoft</span>
                    <img src={Microsoft} alt="microsoft"/>
                </div>
                <div className="items">
                    <span className="partner-name">Uber</span>
                    <img src={Uber} alt="uber"/>
                </div>
                <div className="items">
                    <span className="partner-name">Dropbox</span>
                    <img src={Dropbox} alt="dropbox"/>
                </div>
                <div className="items">
                    <span className="partner-name">Google</span>
                    <img src={Google} alt="google"/>
                </div>
                <div className="items">
                    <span className="partner-name">Uber</span>
                    <img src={Uber} alt="uber"/>
                </div>
                <div className="items">
                    <span className="partner-name">Amazon</span>
                    <img src={Amazon} alt="amazon"/>
                </div>
            </div>
            <Button {...button_info}/>
        </section>
    )
}

export default PartnersSection;
