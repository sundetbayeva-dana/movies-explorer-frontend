import React, {useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import mainApi from '../../utils/MainApi';
import {CurrentUserContext} from '../../context/CurrentUserContext'
import NotFound from '../NotFound/NotFound'

function App() {

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [savedCards, setSavedCards] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState({})
  const [errorRegister, setErrorRegister] = React.useState('')
  const [errorLogin, setErrorLogin] = React.useState('')
  const [serverResponseProfile, setServerResponseProfile] = React.useState('')

  let navigate = useNavigate()

  useEffect(() => {
    if (loggedIn) {
      mainApi.getMovies()
      .then((data)=> {
        setSavedCards(data.data)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`)
      })
    }   
  }, [loggedIn])

  useEffect(() => {
    mainApi.getUserInformation()      
    .then((data) => {
      setCurrentUser(data)
      setLoggedIn(true)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.status}`)
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
    mainApi.register(name, email, password)
    .then(() => {
      handleLogin(email, password)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.status}`) 
      return err.json()      
      .then((err) => {
        if (err.message === 'Указан email, который уже существует на сервере') {
          setErrorRegister('Пользователь с таким email уже существует на сервере')
        } else {
          setErrorRegister('При регистрации пользователя произошла ошибка')
        }
      })
      .catch((err) => {        
        console.log(`Ошибка: ${err}`) 
      })
    })
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
    .then((data) => {
      setLoggedIn(true)
      navigate('/movies')
      setCurrentUser(data)
    })
    .catch((err) => {    
      console.log(`Ошибка: ${err.status}`)
      return err.json()
      .then((err) => {
        if (err.message === 'Неправильные почта или пароль') {
          setErrorLogin('Вы ввели неправильный логин или пароль')
        }
        else if (err.message === 'Токен отсутствует') {
          setErrorLogin('При авторизации произошла ошибка. Токен не передан или передан не в том формате')
          console.log(`Ошибка: ${err.status}`) 
        } else {
          setErrorLogin('При авторизации произошла ошибка. Переданный токен некорректен')
          console.log(`Ошибка: ${err.status}`)
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })      
    })
  }

  function handleProfile(data) {
    mainApi.setUserInformation(data)
    .then((data) => {
      setCurrentUser(data)
      setServerResponseProfile('Профиль успешно изменен')
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.status}`)
      setServerResponseProfile('Произошла ошибка. Попробуйте позже')
    })
  }

  function handleButtonSaveCard(id, cardArray) {
    const movie = cardArray.find(i => i.id === id)
    mainApi.saveMovie(movie)
    .then((data) => {
      setSavedCards([data.data, ...savedCards])
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.status}`)
    })
  }

  function handleButtonDeleteCard(id, cardArray) {
    const movie = cardArray.find((i) => {
      return i.movieId === id
    })
    mainApi.deleteMovie(movie._id)
    .then(() => {      
      setSavedCards((state) => state.filter((d) => d.movieId !== id ?? d))
    })
    .catch((err) => console.log(`Ошибка: ${err.status}`))
  }

  function handleLogoutClick() {
    mainApi.logout()
    .then((data) => {
      setLoggedIn(false)
    })    
    .catch((err) => console.log(`Ошибка: ${err.status}`))
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/*" element={<NotFound/>}></Route>
          <Route element={<ProtectedRoute loggedIn={loggedIn}/>}>     
            <Route path="/movies" element={<Movies onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
            onCloseButton={handleMenuCloseButton} handleButtonSaveCard={handleButtonSaveCard}
            handleButtonDeleteCard={handleButtonDeleteCard} savedCardsFromApp={savedCards}
            />}>
            </Route>
            <Route path="/saved-movies" element={<SavedMovies onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
            onCloseButton={handleMenuCloseButton} savedCardsFromApp={savedCards}handleButtonDeleteCard={handleButtonDeleteCard} />}>
            </Route>
            <Route  path="/profile" element={<Profile onSubmit={handleProfile} 
            onLogoutClick={handleLogoutClick} onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
            onCloseButton={handleMenuCloseButton} serverResponse={serverResponseProfile}
            />}>
            </Route>
          </Route>
          <Route path="/" element={<Main loggedIn={loggedIn} onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
            onCloseButton={handleMenuCloseButton}/>}>
          </Route>

          <Route path="/signup" element={<Register onRegister={handleRegister} errorfromServer={errorRegister}/>}>
          </Route>
          <Route path="/signin" element={<Login onSubmit={handleLogin} errorfromServer={errorLogin}/>}>
          </Route>


        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App; 
