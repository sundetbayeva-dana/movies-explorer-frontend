import React from 'react';
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

function App() {

  const [menuVisible, setMenuVisible] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false)


  let navigate = useNavigate()



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
      console.log(data)
      setLoggedIn(true)
      navigate('/movies')
    })
    .catch(err => console.log(err))
  }
console.log(loggedIn)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute loggedIn={loggedIn}/>}>
          <Route path="/" element={<Main />}>
          </Route>
          <Route   path="movies" element={<Movies onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
          onCloseButton={handleMenuCloseButton} />}>
          </Route>
          <Route  path="saved-movies" element={<SavedMovies onMenuClick={handleMenuClick} isMenuVisible={menuVisible}
          onCloseButton={handleMenuCloseButton}  />}>
          </Route>
          <Route  path="profile" element={<Profile currentName="Дана" currentEmail="pochta@yandex.ru" />}>
          </Route>
        </Route>

                

        <Route path="/signup" element={<Register errorMessage="Что-то пошло не так..." onRegister={handleRegister} />}>
        </Route>
        <Route path="/signin" element={<Login onSubmit={handleLogin} />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App; 
