import React, {useEffect} from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import mainApi from '../../utils/MainApi';

function SavedMovies({onMenuClick, isMenuVisible, onCloseButton }) {

  const [savedCards, setSavedCards] = React.useState([])

  useEffect(() => {
    mainApi.getMovies()
    .then((data) => {
      console.log(data.data)
      setSavedCards(data.data)
    })
  }, [])
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
              key={data._id}
              id={data._id}
              image={data.image}
              name={data.nameRU}
              duration={data.duration}
              trailerLink={data.trailer}
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