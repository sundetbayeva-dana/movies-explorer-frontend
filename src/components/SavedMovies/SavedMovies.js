import React from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard'

import moviePic1 from '../../images/posters/pic__movie1.jpg'
import moviePic2 from '../../images/posters/pic__movie2.jpg'
import moviePic3 from '../../images/posters/pic__movie3.jpg'

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <Preloader />
      <div className="saved-movies__cards">
        <MoviesCardList>
          <MoviesCard isDeleted='true' image={moviePic1} />
          <MoviesCard isDeleted='true' image={moviePic2} />
          {/* <MoviesCard isDeleted='true' image={moviePic3} /> */}
        </MoviesCardList>
      </div>
      <Footer />
    </>



  );
}

export default SavedMovies; 