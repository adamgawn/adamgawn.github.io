import React from 'react';

const PortfolioItem = ({ image, title, description }) => {
    return (
        <div className="portfolio-item">
            <img src={image} alt={title} className="portfolio-image" />
            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>
        </div>
    );
};

export default PortfolioItem;