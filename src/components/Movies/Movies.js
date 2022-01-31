import React from 'react';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import SearchForm  from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard'
import './Movies.css';

import moviePic1 from '../../images/posters/pic__movie1.jpg'
import moviePic2 from '../../images/posters/pic__movie2.jpg'
import moviePic3 from '../../images/posters/pic__movie3.jpg'
import moviePic4 from '../../images/posters/pic__movie4.jpg'
import moviePic5 from '../../images/posters/pic__movie5.jpg'
import moviePic6 from '../../images/posters/pic__movie6.jpg'
import moviePic7 from '../../images/posters/pic__movie7.jpg'
import moviePic8 from '../../images/posters/pic__movie8.jpg'
import moviePic9 from '../../images/posters/pic__movie9.jpg'
import moviePic10 from '../../images/posters/pic__movie10.jpg'
import moviePic11 from '../../images/posters/pic__movie11.jpg'
import moviePic12 from '../../images/posters/pic__movie12.jpg'


function Movies() {

  return (
    <div className="movies">
      <Header />
      <SearchForm />
      <Preloader />
      <MoviesCardList buttonMore='true' >
          <MoviesCard isSaved='true' image={moviePic1} />
          <MoviesCard isSaved='true' image={moviePic2} />
          <MoviesCard image={moviePic3} />
          <MoviesCard image={moviePic4} />
          <MoviesCard image={moviePic5} />
          <MoviesCard isSaved='true' image={moviePic6} />
          <MoviesCard isSaved='true' image={moviePic7} />
          <MoviesCard image={moviePic8} />
          <MoviesCard image={moviePic9} />
          <MoviesCard image={moviePic10} />
          <MoviesCard isSaved='true' image={moviePic11} />
          <MoviesCard image={moviePic12} />
      </MoviesCardList>
      <Footer />
    </div>
  );
}

export default Movies; 