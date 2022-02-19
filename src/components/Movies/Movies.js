import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard'
import './Movies.css';
import moviesApi from '../../utils/MoviesApi'
import { BIG_RESOLUTION, MIDDLE_RESOLUTION, SMALL_RESOLUTION, BIG_RESOLUTION_CARDS_COUNT, MIDDLE_RESOLUTION_CARDS_COUNT,
  SMALL_RESOLUTION_CARDS_COUNT, SHORT_MOVIE_DURATION} from '../../utils/const'

function Movies({onMenuClick, isMenuVisible, onCloseButton, handleButtonSaveCard, handleButtonDeleteCard,
  savedCardsFromApp }) {

  const [index , setIndex] = React.useState(0)
  const [visibleData , setVisibleData] = React.useState([])
  const [cardsCount, setCardsCount] = React.useState(12)
  const [visiblePreloader, setVisiblePreloader] = React.useState(false)
  const [buttonMore, setButtonMore] = React.useState(true)
  const [cards, setCards] = React.useState([])
  const [errorMessage, setErrorMessage] = React.useState(false)
  const [savedCards, setSavedCards] = React.useState([])
  const [shortMovie, setShortMovie] = React.useState(false)
  const [isNoData, setisNoData] = React.useState(false)

  useEffect(() => {
    if (localStorage.getItem('dataMovie') === null) {
      setCards([])
    } else {
      setCards(JSON.parse(localStorage.getItem('dataMovie')))
    }
  },[])

  useEffect(() => {
    setSavedCards(savedCardsFromApp)
  }, [savedCardsFromApp])

  useEffect(() => {
    localStorage.setItem('dataMovie', JSON.stringify(cards));
  }, [cards])

  useEffect(() => {
    if (document.documentElement.clientWidth > BIG_RESOLUTION ) {
      setCardsCount(BIG_RESOLUTION_CARDS_COUNT);
    } 
    if (document.documentElement.clientWidth > MIDDLE_RESOLUTION && document.documentElement.clientWidth < BIG_RESOLUTION) {
      setCardsCount(MIDDLE_RESOLUTION_CARDS_COUNT);
    } else if (document.documentElement.clientWidth <= SMALL_RESOLUTION) {
      setCardsCount(SMALL_RESOLUTION_CARDS_COUNT);
    }
    const numberOfItems =  cardsCount + ( index );
    const newCardArray = [];
    for(let i=0 ;i<cards.length ; i++ ){
      if(i < numberOfItems) {
        newCardArray.push(cards[i])
        setButtonMore(true)
      }
    }
    if (newCardArray.length === cards.length) {
      setButtonMore(false)
    }
    if (JSON.parse(localStorage.getItem('checkbox')) === true) {
      const isLess40min = value => value.duration < SHORT_MOVIE_DURATION
      let filteredData = cards.filter(isLess40min)
      setVisibleData(filteredData)
    } else {
      setVisibleData(newCardArray);
    }
  }, [cards, index, cardsCount, shortMovie])

  function handleSubmitClick(movieName) {
    setVisiblePreloader(true)
    moviesApi.getMovies()
    .then((data) => {
      if (shortMovie) {
        const isLess40min = value => value.duration < SHORT_MOVIE_DURATION
        let filteredData = data.filter(isLess40min)
        return filteredData
      } else {
        return data
      }
    })
    .then((data) => {
      const filteredNameData = data.filter(el => {
        return el.nameRU.toLowerCase().includes(movieName.toLowerCase())        
      })
      const filteredDescriptionData = data.filter(el => {
        return el.description.toLowerCase().includes(movieName.toLowerCase())
      })

      function check(arr1, arr2) {
        if (arr1.length === 0 && arr2.length === 0) {
          setCards([])
          setisNoData(true)
        }
         else {
          setisNoData(false)
          const newArray = [...new Set([...arr1, ...arr2])];
          setCards(newArray)
        }
      }
      check(filteredNameData, filteredDescriptionData)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.status}`)
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
  
  function onCheckBox(isShort) {
    setShortMovie(isShort)
  }

  return (
    <div className="movies">
      <Header onMenuClick={onMenuClick} isMenuVisible={isMenuVisible} onCloseButton={onCloseButton}
       />
      <SearchForm onSearchSubmit={handleSubmitClick} onCheckBox={onCheckBox}/>
      <Preloader isVisible={visiblePreloader} errorMessage={errorMessage} noData={isNoData}/>

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