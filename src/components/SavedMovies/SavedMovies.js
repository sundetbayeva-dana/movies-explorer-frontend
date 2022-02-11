import React, {useEffect} from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import mainApi from '../../utils/MainApi';

function SavedMovies({onMenuClick, isMenuVisible, onCloseButton, savedCardsFromApp, handleButtonDeleteCard }) {

  const [savedCards, setSavedCards] = React.useState([])
  const [isDeleted, setIsDeleted] = React.useState(true)

  useEffect(() => {
    setSavedCards(savedCardsFromApp)
  }, [savedCardsFromApp])

  function onButtonToggleSaveDelete(id) {
    handleButtonDeleteCard(id, savedCards)
  }

  return (
    <>
      <Header  onMenuClick={onMenuClick} isMenuVisible={isMenuVisible} onCloseButton={onCloseButton}/>
      <SearchForm />
      <Preloader />
      <div className="saved-movies__cards">
        <MoviesCardList>
          {savedCards.map((data) => {
            return (
              <MoviesCard 
              key={data.movieId}
              id={data.movieId}
              image={data.image}
              name={data.nameRU}
              duration={data.duration}
              trailerLink={data.trailer}
              onButtonToggleSaveDelete={onButtonToggleSaveDelete}
              isDeleted={isDeleted}
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