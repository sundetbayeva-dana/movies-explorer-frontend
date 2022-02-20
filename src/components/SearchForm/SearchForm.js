import React, {useEffect} from 'react';
import './SearchForm.css';
import searchIcon from '../../images/icon-search.svg';

function SearchForm({onSearchSubmit, onCheckBox}) {

  const [movieName, setMovieName] = React.useState('')
  const [noDataMessage, setNoDataMessage] = React.useState(false)
  const [isChecked, setisChecked] = React.useState(false)

  useEffect(() => {
    setisChecked(JSON.parse(localStorage.getItem('checkbox')))
  }, [])

  useEffect(() => {
    onCheckBox(isChecked)
  }, [isChecked])

  function handleNameMovieChange(e) {
    setMovieName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (movieName.length > 0) {
      onSearchSubmit(movieName)
      setNoDataMessage(false)
      setMovieName('')
    } else if (movieName.length === 0) {
      setNoDataMessage(true)
    }
  }

  const errorClassName = (
    `${noDataMessage && 'visible'}`
  )

  function handleCheckbox() {
    setisChecked(!isChecked)
    if (!isChecked) {
      localStorage.setItem('checkbox', JSON.stringify(true));
    } else {
      localStorage.setItem('checkbox', JSON.stringify(false));
    }
  }

  const checkBoxClassName = (
    `${isChecked ? 'check check:before' : ''}`
  )

  return (
    <div className="search-form">
      <div className="search-form__content">
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <img src={searchIcon} alt="иконка поисковика фильмов" className="search-form__icon"/>
          <input placeholder="Фильм" className="search-form__form-text" name="name"
          value={movieName || ''} onChange={handleNameMovieChange} required></input>    
          <button className="search-form__button-search" type="submit" ></button>
        </form>
        <span className={`search-form__no-data ${errorClassName}`} >Нужно ввести ключевое слово</span>
        <div className="search-form__toggle-container">
          <label className="switch">
            <input type="checkbox" onChange={handleCheckbox} value={isChecked}/>
            <div className={`slider ${checkBoxClassName}`}></div>          
          </label>
          <label htmlFor="toggle-button" className="search-form__toggle-text">Короткометражки</label>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
