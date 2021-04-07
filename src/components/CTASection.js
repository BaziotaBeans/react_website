import React from 'react'
import { Illustration } from '../utils/Images';
import '../css/CTASection.css';
import '../css/Form.css';

const CTASection = () => {
    return (
        <section className="cta-section m-auto">
            <div className="cta-section__left">
                <img src={Illustration} alt="Illustration"/>
            </div>
            <div className="cta-section__right">
                <h5 className="d-2">At your fingertips</h5>
                <h2 className="d-1">Lighting fast prototyping</h2>
                <div className="subcribe-text">
                    <h5 className="d-2">Subscribe to our Newsletter</h5>
                    <span className="d-3">Available exclusively on Figmaland</span>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Your Email"/>
                    <button className="btn btn-blue">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default CTASection
