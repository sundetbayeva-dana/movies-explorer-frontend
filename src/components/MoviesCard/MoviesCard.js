import React, { useEffect }  from 'react';
import './MoviesCard.css';

function MoviesCard ({
  id, image, name, duration, trailerLink, onButtonToggleSaveDelete, savedCards, isDeleted }) {
  const [isSaved, setIsSaved] = React.useState(false)

  useEffect(() => {
    if (savedCards) {
      savedCards.forEach(i => { 
        if (id === i.movieId) {
          setIsSaved(true)
        } 
      })
    } 
  }, [id, savedCards])

  const buttonClassName = (   
    `${isSaved ? 'card__button_saved' : isDeleted ? 'card__button_delete' : 'card__button_not-saved'}`
  )

  const buttonTextClassName = (
    `${isSaved || isDeleted ? 'invisible' : 'card__button-text'}`
  )

  function handleButton() {
    onButtonToggleSaveDelete(id, isSaved)
    setIsSaved(!isSaved)
  }

  return (
    <div className="card">
      <h2 className="card__name">{name}</h2>
      <p className="card__duration">{duration} минут</p>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img className="card__pic" src={image} alt="Обложка фильма"></img>
      </a>

      <button className={buttonClassName} type="button" onClick={handleButton}>
        <p className={buttonTextClassName}>Сохранить</p>
      </button>
          
    </div>
  )
}

export default MoviesCard;
