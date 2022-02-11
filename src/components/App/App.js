import React, {useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import auth from '../../utils/Auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi'
import {CurrentUserContext} from '../../context/CurrentUserContext'


function App() {

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [cards, setCards] = React.useState([])
  const [savedCards, setSavedCards] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState({})

  let navigate = useNavigate()
  
  useEffect(() => {
    if (localStorage.getItem('dataMovie') === null) {
      setCards([])
    } else {
      setCards(JSON.parse(localStorage.getItem('dataMovie')))
    }    
  },[])

  useEffect(() => {
    mainApi.getMovies()
      .then((data)=> {
        setSavedCards(data.data)
      })

  }, [])

  useEffect(() => {
    mainApi.getUserInformation()
    .then((data) => {
      setCurrentUser(data)
      setLoggedIn(true)
    })
  },[])

  useEffect(() => {
    if (loggedIn === true) {
      navigate('/movies')
    }
  }, [loggedIn])

  function handleMenuClick() {
    setMenuVisible(true);
  }

  function handleMenuCloseButton() {
    setMenuVisible(false);
  }

  function handleRegister(name, email, password) {
    auth.register(name, email, password)
    .then((data) => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleLogin(email, password) {
    auth.login(email, password)
    .then((data) => {
      setLoggedIn(true)
      navigate('/movies')
    })
    .catch(err => console.log(err))
  }

  function handleButtonSaveCard(id, cardArray) {
    const movie = cardArray.find(i => i.id === id)
    mainApi.saveMovie(movie)
    .then((data) => {
      mainApi.getMovies()
      .then((data)=> {
        setSavedCards(data.data)
      })
    })
  }

  function handleButtonDeleteCard(id, cardArray) {
    const movie = cardArray.find((i) => {
      return i.movieId === id
    })
    mainApi.deleteMovie(movie._id)
    .then((data) => {
      mainApi.getMovies()
      .then((data) => {
        setSavedCards(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}> 

        <Routes>
       
          <Route element={<ProtectedRoute loggedIn={loggedIn}/>}>          
            <Route path="/movies" element={<Movies onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
            onCloseButton={handleMenuCloseButton} handleButtonSaveCard={handleButtonSaveCard}
            handleButtonDeleteCard={handleButtonDeleteCard} savedCards={savedCards}
            cardsFromApp={cards}/>}>
            </Route>
            <Route  path="/saved-movies" element={<SavedMovies onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
            onCloseButton={handleMenuCloseButton} savedCardsFromApp={savedCards}handleButtonDeleteCard={handleButtonDeleteCard} />}>
            </Route>
            <Route  path="/profile" element={<Profile />}>
            </Route>
          </Route>
          <Route path="/" element={<Main loggedIn={loggedIn}/>}>
          </Route>

          <Route path="/signup" element={<Register errorMessage="Что-то пошло не так..." onRegister={handleRegister} />}>
          </Route>
          <Route path="/signin" element={<Login onSubmit={handleLogin} />}>
          </Route>

        </Routes>          
      </CurrentUserContext.Provider>
      
    </div>
  );
}

export default App; 
