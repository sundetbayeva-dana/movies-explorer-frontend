import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard'
import './Movies.css';

import moviesApi from '../../utils/MoviesApi'

function Movies({onMenuClick, isMenuVisible, onCloseButton}) {

  // const [allMovie, setAllMovie] = React.useState({})
  const [cards, setCards] = React.useState([])

  const [index , setIndex] = React.useState(0)
  const [visibleData , setVisibleData] = React.useState([])
  const [INITIAL_CARDS_COUNT, setINITIAL_CARDS_COUNT] = React.useState(0)

  useEffect(() => {
    if (document.documentElement.clientWidth > 768 ) {
      setINITIAL_CARDS_COUNT(12)
    } 
    if (document.documentElement.clientWidth > 480 && document.documentElement.clientWidth < 768) {
      setINITIAL_CARDS_COUNT(8)
    } else if (document.documentElement.clientWidth <= 320) {
      setINITIAL_CARDS_COUNT(5)
    }
    const numberOfItems =  INITIAL_CARDS_COUNT + ( index );
    const newCardArray = [];
    for(let i=0 ;i<cards.length ; i++ ){
      if(i < numberOfItems) 
        newCardArray.push(cards[i])
    }
    setVisibleData(newCardArray);
  }, [cards, index, INITIAL_CARDS_COUNT])
  
  useEffect(() => {
    setCards(JSON.parse(localStorage.getItem('dataMovie')))
  },[])

  function handleSubmitClick() {
    moviesApi.getMovies()
    .then((data) => {
      localStorage.setItem('dataMovie', JSON.stringify(data));
    })
    .catch(err => console.log(err))
  }
  console.log(document.documentElement.clientWidth)
  function handleButtonClickMore() {
    if (document.documentElement.clientWidth > 768 ) {
      setIndex(index + 3)
    } else {
      setIndex(index + 2)
    }

  }

  return (
    <div className="movies">
      <Header onMenuClick={onMenuClick} isMenuVisible={isMenuVisible} onCloseButton={onCloseButton}
       />
      <SearchForm onSearchSubmit={handleSubmitClick}/>
      <Preloader />

      <MoviesCardList buttonMore='true' onButtonClickMore={handleButtonClickMore} >
          {visibleData.map((data) => {

            return (
              <MoviesCard 
              key={data.id}
              image={`https://api.nomoreparties.co/${data.image.url}`}
              name={data.nameRU}
              duration={data.duration}
              />
            )
          })}
      </MoviesCardList>
      <Footer />
    </div>
  );
}

export default Movies; 