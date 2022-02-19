import React, {useEffect} from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import { SHORT_MOVIE_DURATION } from '../../utils/const'


function SavedMovies({onMenuClick, isMenuVisible, onCloseButton, savedCardsFromApp, handleButtonDeleteCard }) {

  const [savedCards, setSavedCards] = React.useState([])
  const [visibleData, setVisibleData] = React.useState([])
  const [shortMovie, setShortMovie] = React.useState(false)
  const [isNoData, setisNoData] = React.useState(false)

  useEffect(() => {
    setSavedCards(savedCardsFromApp)
  }, [savedCardsFromApp])

  useEffect(() => {
    if (shortMovie) {
      const isLess40min = value => value.duration < SHORT_MOVIE_DURATION
      let filteredData = savedCards.filter(isLess40min)
      setVisibleData(filteredData)
    } else {
      setVisibleData(savedCards)
    }

  }, [savedCards, shortMovie])


  function onButtonToggleSaveDelete(id) {
    handleButtonDeleteCard(id, savedCards)
  }

  function handleSearchSubmit(movieName) {
    function isShortMovie(arr) {
      setSavedCards(savedCardsFromApp)
      if (shortMovie) {
        const isLess40min = value => value.duration < SHORT_MOVIE_DURATION
        let filteredData = arr.filter(isLess40min)
        return filteredData
      } if (!shortMovie) {
        return arr
      }
    }
    let filteredDurationData = isShortMovie(savedCards)

    const filteredNameData = filteredDurationData.filter(el => {
      return el.nameRU.toLowerCase().includes(movieName.toLowerCase())
    })
    const filteredDescriptionData = filteredDurationData.filter(el => {
      return el.description.toLowerCase().includes(movieName.toLowerCase())
    })

    function check(arr1, arr2) {
      if (arr1.length === 0 && arr2.length === 0) {
        setVisibleData([])
        setisNoData(true)
      } else {
        setisNoData(false)
        const newArray = [...new Set([...arr1, ...arr2])];
        setVisibleData(newArray)
      }
    }    
    check(filteredNameData, filteredDescriptionData)
  }

  function onCheckBox(isShort) {
    setShortMovie(isShort)
  }
  
  return (
    <>
      <Header  onMenuClick={onMenuClick} isMenuVisible={isMenuVisible} onCloseButton={onCloseButton}/>
      <SearchForm onSearchSubmit={handleSearchSubmit} onCheckBox={onCheckBox}/>
      <Preloader noData={isNoData}/>
      <div className="saved-movies__cards">
        <MoviesCardList>
          {visibleData.map((data) => {
            return (
              <MoviesCard 
              key={data.movieId}
              id={data.movieId}
              image={data.image}
              name={data.nameRU}
              duration={data.duration}
              trailerLink={data.trailer}
              onButtonToggleSaveDelete={onButtonToggleSaveDelete}
              isDeleted={true}
              
              />
            )
          })}

        </MoviesCardList>
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies; 