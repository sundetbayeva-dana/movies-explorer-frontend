import React from 'react';
import './MoviesCardList.css';

function MoviesCardList ({children, buttonMore}) {

  const buttonClassName = (
    `${buttonMore ? 'card-list__button-more' : 'invisible'}`
  )

  return (
    <div className="card-list">
      <div className="card-list__content">
        <ul className="card-list__list">
          {children}
        </ul>
        <button className={buttonClassName}>
          <p className="card-list__button-more-text">Еще</p>
        </button>
      </div>
      
      
    </div>
  )
}

export default MoviesCardList;
