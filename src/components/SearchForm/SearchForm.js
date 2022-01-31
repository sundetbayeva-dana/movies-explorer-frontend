import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/icon-search.svg';
import Preloader from '../Preloader/Preloader';

function SearchForm () {
  return (
    <div className="search-form">
      <div className="search-form__content">
        <form className="search-form__form">
          <img src={searchIcon} alt="иконка поисковика фильмов" className="search-form__icon"/>
          <input placeholder="Фильм" className="search-form__form-text"></input>
          <button className="search-form__button-search" type="submit"></button>
        </form>
        <div>
        <div className="search-form__toggle-container">
          <input type="checkbox" id="toggle-button" className="search-form__toggle-button"/>
          <label htmlFor="toggle-button" className="search-form__toggle-text">Короткометражки</label>
        </div>
        </div>
      </div>
     
    </div>
  )
}

export default SearchForm;
