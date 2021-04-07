import React from 'react'
import { Ibm, User_1 } from '../utils/Images';
import '../css/TestimonialsSection.css';

const TestimonialSection = () => {
    return (
        <section className="testimonial-section m-auto">
            <h2>Tesmonials</h2>
            <img src={Ibm} alt="ibm" className="testimonial-image"/>
            <p>Most calendars are designed for teams. Slate is designed for freelancers 
                who want a simple way to plan their schedule
            </p>
            <div className="testimonial-person-container">
                <img src={User_1} alt="user"/>
                <div className="testimonial-person-container-text">
                    <span>Organize across</span>
                    <span>Ui designer</span>
                </div>
            </div>
            <button className="btn btn-blue">More Testimonials</button>
        </section>
    )
}

export default TestimonialSection;
