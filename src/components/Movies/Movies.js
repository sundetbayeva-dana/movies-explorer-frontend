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

function Movies({onMenuClick, isMenuVisible, onCloseButton, handleButtonSave, }) {

  const [cards, setCards] = React.useState([])
  const [index , setIndex] = React.useState(0)
  const [visibleData , setVisibleData] = React.useState([])
  const [cardsCount, setCardsCount] = React.useState(12)
  const [visiblePreloader, setVisiblePreloader] = React.useState(false)
  const [buttonMore, setButtonMore] = React.useState(true)
  const [savedCards, setSavedCards] = React.useState([])
 

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

  
  useEffect(() => {
    if (localStorage.getItem('dataMovie') === null) {
      setCards([])

    } else {
      setCards(JSON.parse(localStorage.getItem('dataMovie')))
    }    
  },[])

  useEffect(() => {
    mainApi.getMovies()
    .then((data) => {
      setSavedCards(data.data)
    }) 
  }, []) 

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
    // .then((data) => {
    //   console.log(data)
    //   setCards(data.map(i=> {
    //     return {...i, isSaved: false}
    //   }))
    //   return cards
    // })
    // .then((cards) => {
    //   console.log(cards)
    //   localStorage.setItem('dataMovie', JSON.stringify(cards));
    // })
    .catch(err => console.log(err))
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

  function handleButtonSaveCard(id) {
    const movie = cards.find(i => i.id === id)
    mainApi.saveMovie(movie)
    .then(() => {
      mainApi.getMovies()
      .then((data) => {
        setSavedCards(data.data)
      })
    })
  }

  function handleButtonDeleteCard(id) {  
    const movie = savedCards.find((i) => {
      return i.movieId === id
    })
    mainApi.deleteMovie(movie._id)
    .then(() => {
      mainApi.getMovies()
      .then((data) => {
        setSavedCards(data.data)
      })
    })

  }


  return (
    <div className="movies">
      <Header onMenuClick={onMenuClick} isMenuVisible={isMenuVisible} onCloseButton={onCloseButton}
       />
      <SearchForm onSearchSubmit={handleSubmitClick} />
      <Preloader isVisible={visiblePreloader} />
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
              onButtonSave={handleButtonSaveCard}
              isSaved={data.isSaved}
              onButtonDelete={handleButtonDeleteCard}
              savedCards={savedCards}
              />
            )
          })}
      </MoviesCardList>
      <Footer />
    </div>
  );
}

export default Movies; 