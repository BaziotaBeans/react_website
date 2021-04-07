import React from 'react'
import CardPricing from './CardPricing';
import '../css/PricingSection.css'

const PricingSection = () => {
    
    const cardPrincingList = [];

    const card_info = [
        {
            plan: 'FREE',
            description: 'Organize across all apps by hand',
            price: '0',
            style: 'primary',
            id: 1
        },
        {
            plan: 'STANDARD',
            description: 'Organize across all apps by hand',
            price: '10',
            style: 'secondary',
            id: 2
        },
        {
            plan: 'BUSINESS',
            description: 'Organize across all apps by hand',
            price: '99',
            style: 'primary',
            id: 3
        }
    ];

    card_info.map((cur) => {cardPrincingList.push(<CardPricing key={cur.id} {...cur}/>);});

    return (
        <section className="pricing-section" id="pricing">
            <div className="pricing-section-content m-auto">
                <div className="pricing-section-text">
                    <h2>Pricing</h2>
                    <p>Most calendars are designed for teams. Slate is designed for freelancers.</p>
                </div>
                <div className="princing-section-row">
                    {cardPrincingList}
                </div>
            </div>
        </section>
    )
}

export default PricingSection;
