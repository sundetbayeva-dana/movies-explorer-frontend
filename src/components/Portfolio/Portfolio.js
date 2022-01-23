import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio () {
  return (
    <div className="portfolio">      
      <p className="portfolio__text">Портфолио</p>
      <div className="portfolio__link-container">
        <p className="portfolio__link-text">Статичный сайт</p>
        <Link to="#" className="portfolio__link">
        </Link>    
      </div>
      <div className="portfolio__link-container">
        <p className="portfolio__link-text">Адаптивный сайт</p>
        <Link to="#" className="portfolio__link">
        </Link>
      </div>
      <div className="portfolio__link-container">
        <p className="portfolio__link-text">Одностраничное приложение</p>
        <Link to="#" className="portfolio__link">
        </Link> 
      </div>
    </div>
  )
}

export default Portfolio;
