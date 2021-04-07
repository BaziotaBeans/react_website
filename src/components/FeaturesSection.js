import React from 'react';
import '../css/FeaturesSection.css';
import { VideoBackground, Design, OpentType, Paint } from '../utils/Images';
import { Video_2 } from '../utils/Video';

const FeaturesSectionItem = () =>{
    return (
        <div className="features-section__items">
            <div className="row">
                <div className="col">
                    <img src={OpentType} alt="opentype"/>
                    <h4>OpenType features Variable fonts</h4>
                    <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                </div>
                <div className="col">
                    <img src={Design} alt="Design"/>
                    <h4>Design with real data</h4>
                    <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                </div>
                <div className="col">
                    <img src={Paint} alt="Paint"/>
                    <h4>Fatest way to take action</h4>
                    <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                </div>
            </div>
        </div>
    );
}

const FeaturesSectionVideo = () =>{
    return (
        <div className="features-section__video m-auto">
            {/* <img src={VideoBackground} className="video-background__image" alt=""/> */}
            <div className="video-container">
                <span className="btn-play">
                    <i className='bx bx-play'></i>
                </span>
                <video  src={Video_2} 
                        loop 
                        muted 
                        type="video/mp4" 
                        poster={VideoBackground}
                        autoPlay
                />
            </div>
        </div>
    );
}


const FeaturesSection = ()=> {
    return(
        <section className="features-section">
            <div className="features-section-text">
                <h2 className="features-section__title">Features</h2>
                <p className="features-section__text">Most calendars are designed for teams. Slate is designed for freelancers</p>
            </div>
            <FeaturesSectionItem/>
            <FeaturesSectionVideo/>
        </section>
    );
}

export default FeaturesSection;
