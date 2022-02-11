import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard'
import './Movies.css';

import moviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi';

function Movies({onMenuClick, isMenuVisible, onCloseButton, handleButtonSaveCard, handleButtonDeleteCard,
  savedCards, cardsFromApp }) {

  const [index , setIndex] = React.useState(0)
  const [visibleData , setVisibleData] = React.useState([])
  const [cardsCount, setCardsCount] = React.useState(12)
  const [visiblePreloader, setVisiblePreloader] = React.useState(false)
  const [buttonMore, setButtonMore] = React.useState(true)
  const [cards, setCards] = React.useState([])
  const [errorMessage, setErrorMessage] = React.useState(false)
  const [noDataMessage, setNoDataMessage] = React.useState(false)


  useEffect(() => {
    setCards(cardsFromApp)
  }, [])
  

  useEffect(() => {
    if (document.documentElement.clientWidth > 768 ) {
      setCardsCount(12);
    } 
    if (document.documentElement.clientWidth > 480 && document.documentElement.clientWidth < 768) {
      setCardsCount(8);
    } else if (document.documentElement.clientWidth <= 320) {
      setCardsCount(5);
    }

    const numberOfItems =  cardsCount + ( index );
    const newCardArray = [];
    for(let i=0 ;i<cards.length ; i++ ){
      if(i < numberOfItems) {
        newCardArray.push(cards[i])
      }
      if ((cardsCount + index) >= (cards.length)) {
        setButtonMore(false)
      }
    }
    setVisibleData(newCardArray);
  }, [cards, index, cardsCount])

  function handleSubmitClick() {
    setVisiblePreloader(true)
    moviesApi.getMovies()
    .then((data) => {
      setCards(data)
      return data
    })
    .then((data) => {
      localStorage.setItem('dataMovie', JSON.stringify(data));

    })    
    .catch((err) => {
      console.log(err)
      setErrorMessage(true)
    })
    .finally(() => {
      setVisiblePreloader(false)
    })
  }

  function handleButtonClickMore() {
    if (document.documentElement.clientWidth > 768 ) {
      setIndex(index + 3)
    } else {
      setIndex(index + 2)
    }
  }

  function handleButtonToggleSaveDelete(id, isSaved) {
    if (isSaved === false) {
      handleButtonSaveCard(id, cards)
    } else {
      handleButtonDeleteCard(id, savedCards)
    }
    
  } 

  return (
    <div className="movies">
      <Header onMenuClick={onMenuClick} isMenuVisible={isMenuVisible} onCloseButton={onCloseButton}
       />
      <SearchForm onSearchSubmit={handleSubmitClick} />
      <Preloader isVisible={visiblePreloader} errorMessage={errorMessage}/>
      <MoviesCardList buttonMore={buttonMore} onButtonClickMore={handleButtonClickMore} >
          {visibleData.map((data) => {
            return (
                <MoviesCard 
                key={data.id}
                id={data.id}
                image={`https://api.nomoreparties.co/${data.image.url}`}
                name={data.nameRU}
                duration={data.duration}
                trailerLink={data.trailerLink}
                onButtonToggleSaveDelete={handleButtonToggleSaveDelete}
                savedCards={savedCards}
                isDeleted={false}
                />              
            )
          })}
      </MoviesCardList>
      <Footer />
    </div>
  );
}

export default Movies; 