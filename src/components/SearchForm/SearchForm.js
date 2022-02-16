import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/icon-search.svg';

function SearchForm({onSearchSubmit, onCheckBox}) {

  const [movieName, setMovieName] = React.useState('')
  const [noDataMessage, setNoDataMessage] = React.useState(false)

  function handleNameMovieChange(e) {
    setMovieName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (movieName.length > 0) {
      onSearchSubmit(movieName)
      setNoDataMessage(false)
    } else {
      setNoDataMessage(true)
    }

  }

  const errorClassName = (
    `${noDataMessage && 'visible'}`
  )

  function handleCheckbox(e) {
    onCheckBox(e)    
  }

  return (
    <div className="search-form">
      <div className="search-form__content">
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <img src={searchIcon} alt="иконка поисковика фильмов" className="search-form__icon"/>
          <input placeholder="Фильм" className="search-form__form-text" name="name" 
          value={movieName || ''} onChange={handleNameMovieChange}></input>          
          <button className="search-form__button-search" type="submit" ></button>
        </form>
        <span className={`search-form__no-data ${errorClassName}`} >Нужно ввести ключевое слово</span>
        <div>
        <div className="search-form__toggle-container">
          <input type="checkbox" id="toggle-button" className="search-form__toggle-button" onChange={handleCheckbox}/>
          <label htmlFor="toggle-button" className="search-form__toggle-text">Короткометражки</label>
        </div>
        </div>
      </div>
     
    </div>
  )
}

export default SearchForm;
