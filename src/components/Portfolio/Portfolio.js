import React from 'react';
import './Portfolio.css';

function Portfolio () {
  return (
    <div className="portfolio">
      <div className="portfolio__content">
        <p className="portfolio__text">Портфолио</p>
        <div className="portfolio__link-container">
          <p className="portfolio__link-text">Статичный сайт</p>
          <a href="https://github.com/sundetbayeva-dana/how-to-learn" target="_blank" rel="noopener noreferrer" className="portfolio__link">
          </a> 
        </div>
        <div className="portfolio__link-container">
          <p className="portfolio__link-text">Адаптивный сайт</p>
          <a href="https://github.com/sundetbayeva-dana/russian-travel" target="_blank" rel="noopener noreferrer" className="portfolio__link">
          </a> 
        </div>
        <div className="portfolio__link-container">
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <a href="https://github.com/sundetbayeva-dana/react-mesto-auth" target="_blank" rel="noopener noreferrer" className="portfolio__link">
          </a> 
        </div>
      </div>      
    </div>
  )
}

export default Portfolio;
