import React from 'react'
import '../css/CardPricing.css';
import Button from './Button';

const CardPricing = (props) => {
    
    const {description, price, plan, style} = props;
    const button_info = {
        color: `${style == 'primary' ? 'blue' : 'white'}`,
        text: 'Order Now'
    }
    return (
        <div className={`pricing-card ${style == 'primary' ? 'primary': 'secondary'}`}>
            <h5>{plan}</h5>
            <span className="description">
                {description}
            </span>
            <div className="price-block">
                <h1>{price}</h1>
                <div className="price-block__text">
                    <span className="dollar-entity"> &#36;</span>
                    <span className="simple-text">Per Month</span>
                </div>
            </div>
            <ul className="pricing-list-features">
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
            </ul>
            <Button {...button_info}/>
        </div>
    )
}

export default CardPricing;
