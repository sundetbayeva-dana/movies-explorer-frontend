import React from 'react';
import './MoviesCard.css';

function MoviesCard ({isSaved, image, isDeleted}) {

  const buttonClassName = (
    `${isDeleted ? 'card__button_delete' : isSaved ? 'card__button_saved' : 'card__button_not-saved'}`    
  )

  const buttonTextClassName = (
    `${isSaved || isDeleted ? 'invisible' : 'card__button-text'}`
  )

  return (
    <div className="card">
      <h2 className="card__name">В погоне за Бенкси</h2>
      <p className="card__duration">27 минут</p>
      <img className="card__pic" src={image} alt="Обложка фильма"></img>

      <button className={buttonClassName} type="button">
        <p className={buttonTextClassName}>Сохранить</p>
      </button>
      
          
    </div>
  )
}

export default MoviesCard;
