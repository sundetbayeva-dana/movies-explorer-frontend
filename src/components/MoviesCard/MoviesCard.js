import React, { useEffect }  from 'react';
import './MoviesCard.css';

function MoviesCard ({
  id, image, isDeleted, name, duration, trailerLink, onButtonSave, onButtonDelete, savedCards,
  }) {
  console.log(savedCards)
  console.log(id)
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

    console.log(isSaved)

  const buttonClassName = (   
    `${isSaved ? 'card__button_saved' : 'card__button_not-saved'}`
  )

  const buttonTextClassName = (
    `${isSaved || isDeleted ? 'invisible' : 'card__button-text'}`
  )

  function handleButtonSave() {
    if (isSaved === false) {
      onButtonSave(id)
      setIsSaved(true)
    } else {
      onButtonDelete(id)
      setIsSaved(false)
    }
  }

  return (
    <div className="card">
      <h2 className="card__name">{name}</h2>
      <p className="card__duration">{duration} минут</p>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img className="card__pic" src={image} alt="Обложка фильма"></img>
      </a>

      <button className={buttonClassName} type="button" onClick={handleButtonSave}>
        <p className={buttonTextClassName}>Сохранить</p>
      </button>
          
    </div>
  )
}

export default MoviesCard;
