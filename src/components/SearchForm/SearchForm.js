import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/icon-search.svg'

function SearchForm () {
  return (
    <div className="search-form">
      <div className="search-form__content">
        <div className="search-form__line-container">
          <img src={searchIcon} alt="иконка поисковика фильмов"/>
        </div>
      </div>
     
    </div>
  )
}

export default SearchForm;
