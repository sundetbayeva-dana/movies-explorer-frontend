import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/icon-search.svg';

function SearchForm({onSearchSubmit}) {

  const [movieName, setMovieName] = React.useState('')

  function handleNameMovieChange(e) {
    setMovieName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit()
  }

  return (
    <div className="search-form">
      <div className="search-form__content">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <img src={searchIcon} alt="иконка поисковика фильмов" className="search-form__icon"/>
          <input placeholder="Фильм" className="search-form__form-text" name="name" 
          value={movieName || ''} onChange={handleNameMovieChange} required></input>
          <button className="search-form__button-search" type="submit" ></button>
        </form>
        <div>
        <div className="search-form__toggle-container">
          <input type="checkbox" id="toggle-button" className="search-form__toggle-button" />
          <label htmlFor="toggle-button" className="search-form__toggle-text">Короткометражки</label>
        </div>
        </div>
      </div>
     
    </div>
  )
}

export default SearchForm;
